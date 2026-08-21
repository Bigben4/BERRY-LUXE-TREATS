import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Custom plugin to write version.json on build for auto-update detection
function versionPlugin() {
  const buildTime = Date.now().toString();
  return {
    name: 'version-plugin',
    buildStart() {
      // Ensure public directory has version.json
      const publicDir = path.resolve(__dirname, 'public');
      if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
      }
      fs.writeFileSync(
        path.join(publicDir, 'version.json'),
        JSON.stringify({ version: buildTime, builtAt: new Date().toISOString() }, null, 2)
      );
    },
    generateBundle() {
      this.emitFile({
        type: 'asset',
        fileName: 'version.json',
        source: JSON.stringify({ version: buildTime, builtAt: new Date().toISOString() }, null, 2),
      });
    },
  };
}

const currentBuildTimestamp = Date.now().toString();

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    versionPlugin(),
  ],
  define: {
    __APP_VERSION__: JSON.stringify(currentBuildTimestamp),
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
  },
})
