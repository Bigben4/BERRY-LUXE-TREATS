import React, { useState } from 'react'
import {
  Sparkles,
  ShoppingBag,
  Star,
  Heart,
  ChevronRight,
  ShieldCheck,
  Truck,
  Award,
  Plus,
  Minus,
  X,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Share2,
  Globe
} from 'lucide-react'


const TREATS = [
  {
    id: 1,
    name: '24K Gold Royal Strawberries',
    category: 'Strawberries',
    price: 45.0,
    rating: 4.9,
    reviews: 128,
    badge: 'Bestseller',
    description: 'Gigantic organic strawberries dipped in Belgian ruby chocolate and adorned with genuine 24k edible gold leaf.',
    image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=800&q=80',
    details: 'Box of 6 pieces • 100% Belgian Dark & Ruby Chocolate'
  },
  {
    id: 2,
    name: 'Wild Berry Velvet Truffle Box',
    category: 'Luxe Boxes',
    price: 52.0,
    rating: 5.0,
    reviews: 94,
    badge: 'Signature',
    description: 'Handcrafted raspberry and blackberry infused ganache spheres encased in artisan dark cocoa shell.',
    image: 'https://images.unsplash.com/photo-1548741487-18d16a145e80?auto=format&fit=crop&w=800&q=80',
    details: 'Box of 12 artisan truffles • Fresh berry puree center'
  },
  {
    id: 3,
    name: 'Ruby Glaze Berry Tartlet Duo',
    category: 'Tarts & Parfaits',
    price: 34.0,
    rating: 4.8,
    reviews: 86,
    badge: 'Fresh Daily',
    description: 'Almond sablé crust filled with vanilla bean chantilly and topped with wild blueberries, raspberries, and glossed glaze.',
    image: 'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=800&q=80',
    details: 'Set of 2 • Freshly baked every morning'
  },
  {
    id: 4,
    name: 'Midnight Berry Cheesecake Cups',
    category: 'Tarts & Parfaits',
    price: 38.0,
    rating: 4.9,
    reviews: 112,
    badge: 'Chef Special',
    description: 'Deconstructed Madagascar vanilla cheesecake layered with rich blackberry compote and buttery graham crumble.',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80',
    details: 'Pack of 4 gourmet glass jars • Chilled delivery'
  },
  {
    id: 5,
    name: 'Grand Luxe Berry Gift Chest',
    category: 'Luxe Boxes',
    price: 95.0,
    rating: 5.0,
    reviews: 67,
    badge: 'Ultra Luxury',
    description: 'Our ultimate luxury hamper containing assorted gold dipped berries, truffle jars, sparkling berry cordial, and custom ribbon.',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80',
    details: 'Custom velvet box • Includes personalized calligraphy card'
  },
  {
    id: 6,
    name: 'Rose & White Chocolate Dipped Berries',
    category: 'Strawberries',
    price: 42.0,
    rating: 4.9,
    reviews: 145,
    badge: 'Limited Edition',
    description: 'Sweet local strawberries drizzled in Swiss white chocolate with crystallised rose petals and crushed pistachios.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    details: 'Box of 8 pieces • Floral & nutty notes'
  }
]

const CATEGORIES = ['All', 'Strawberries', 'Luxe Boxes', 'Tarts & Parfaits']

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [favorites, setFavorites] = useState([])
  const [addedNotification, setAddedNotification] = useState(null)

  const filteredTreats = selectedCategory === 'All'
    ? TREATS
    : TREATS.filter((item) => item.category === selectedCategory)

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id)
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      }
      return [...prev, { ...item, quantity: 1 }]
    })

    setAddedNotification(item.name)
    setTimeout(() => {
      setAddedNotification(null)
    }, 3000)
  }

  const updateQuantity = (id, delta) => {
    setCart((prev) =>
      prev
        .map((i) => {
          if (i.id === id) {
            const newQty = i.quantity + delta
            return newQty > 0 ? { ...i, quantity: newQty } : null
          }
          return i
        })
        .filter(Boolean)
    )
  }

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0)
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-rose-600 selection:text-white">
      {/* Toast Notification */}
      {addedNotification && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-rose-600/90 text-white px-5 py-3.5 rounded-full shadow-2xl backdrop-blur-md border border-rose-400/40 animate-bounce">
          <CheckCircle2 className="w-5 h-5 text-rose-200" />
          <span className="text-sm font-medium">Added &ldquo;{addedNotification}&rdquo; to your box</span>
        </div>
      )}

      {/* Navigation */}
      <header className="sticky top-0 z-40 bg-neutral-950/80 backdrop-blur-xl border-b border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-rose-600 via-pink-500 to-amber-400 flex items-center justify-center shadow-lg shadow-rose-950/50">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-widest uppercase bg-gradient-to-r from-rose-200 via-rose-400 to-amber-200 bg-clip-text text-transparent">
                BERRY LUXE
              </span>
              <span className="block text-[10px] uppercase tracking-widest text-neutral-400 font-semibold">
                Treats & Confections
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
            <a href="#menu" className="hover:text-rose-400 transition-colors">Menu Collection</a>
            <a href="#experience" className="hover:text-rose-400 transition-colors">The Luxe Story</a>
            <a href="#testimonials" className="hover:text-rose-400 transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-rose-400 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-full bg-neutral-900 border border-neutral-800 hover:border-rose-500/50 hover:bg-neutral-800/80 transition-all flex items-center gap-2 group cursor-pointer"
              aria-label="View Cart"
            >
              <ShoppingBag className="w-5 h-5 text-neutral-300 group-hover:text-rose-400 transition-colors" />
              {totalCartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-gradient-to-r from-rose-500 to-pink-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center ring-2 ring-neutral-950">
                  {totalCartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => {
                const menuEl = document.getElementById('menu')
                menuEl?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-rose-600 via-rose-500 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white shadow-lg shadow-rose-600/30 hover:shadow-rose-600/50 transition-all cursor-pointer"
            >
              <span>Order Now</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 sm:w-[600px] sm:h-[600px] bg-rose-600/20 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/3 right-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900/90 border border-rose-500/30 text-rose-300 text-xs font-semibold tracking-wide uppercase mb-6 shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Handcrafted Haute Berry Confections
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight sm:leading-none">
            Indulge in <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-amber-300 bg-clip-text text-transparent">Pure Berry Elegance</span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Freshly harvested berries dipped in velvety Belgian chocolates, finished with edible 24k gold, and delivered in our signature velvet boxes.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#menu"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-rose-600 via-rose-500 to-pink-600 text-white font-bold text-base shadow-xl shadow-rose-600/40 hover:shadow-rose-600/60 hover:scale-105 active:scale-95 transition-all"
            >
              Explore Collection
            </a>
            <a
              href="#experience"
              className="px-8 py-4 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-neutral-200 font-semibold text-base border border-neutral-700/80 hover:border-neutral-600 transition-all"
            >
              Our Ingredients & Craft
            </a>
          </div>

          {/* Quick Perks bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
            <div className="p-4 rounded-2xl bg-neutral-900/50 border border-neutral-800/80 backdrop-blur-sm flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-rose-950/60 border border-rose-800/40 text-rose-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-neutral-100 uppercase tracking-wider">24K Edible Gold</h4>
                <p className="text-xs text-neutral-400">Certified pure leaf</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-neutral-900/50 border border-neutral-800/80 backdrop-blur-sm flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-rose-950/60 border border-rose-800/40 text-rose-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-neutral-100 uppercase tracking-wider">Belgian Callebaut</h4>
                <p className="text-xs text-neutral-400">Finest bean roast</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-neutral-900/50 border border-neutral-800/80 backdrop-blur-sm flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-rose-950/60 border border-rose-800/40 text-rose-400">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-neutral-100 uppercase tracking-wider">Chilled Express</h4>
                <p className="text-xs text-neutral-400">Same-day delivery</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-neutral-900/50 border border-neutral-800/80 backdrop-blur-sm flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-rose-950/60 border border-rose-800/40 text-rose-400">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-neutral-100 uppercase tracking-wider">Artisan Made</h4>
                <p className="text-xs text-neutral-400">Small fresh batches</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu / Collection Section */}
      <section id="menu" className="py-20 bg-neutral-900/30 border-y border-neutral-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-rose-400 text-xs font-bold uppercase tracking-widest">Our Selection</span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mt-2">
              Artisanal Berry Creations
            </h2>
            <p className="text-neutral-400 mt-3 text-base">
              Each treat is prepared by master confectioners using premium local strawberries, raspberries, blackberries, and imported gourmet chocolate.
            </p>

            {/* Category Filter Pills */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-rose-600 text-white shadow-lg shadow-rose-600/30 ring-2 ring-rose-400'
                      : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800 border border-neutral-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTreats.map((treat) => {
              const isFav = favorites.includes(treat.id)
              return (
                <div
                  key={treat.id}
                  className="group bg-neutral-900/70 border border-neutral-800 rounded-3xl overflow-hidden hover:border-rose-500/50 hover:shadow-2xl hover:shadow-rose-950/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Image & Badges */}
                    <div className="relative aspect-4/3 overflow-hidden bg-neutral-950">
                      <img
                        src={treat.image}
                        alt={treat.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80" />

                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-neutral-950/80 backdrop-blur-md border border-rose-500/30 text-rose-300 text-xs font-semibold uppercase tracking-wider">
                          {treat.badge}
                        </span>
                      </div>

                      <button
                        onClick={() => toggleFavorite(treat.id)}
                        className="absolute top-4 right-4 p-2 rounded-full bg-neutral-950/70 backdrop-blur-md border border-neutral-800 text-neutral-300 hover:text-rose-400 transition-colors cursor-pointer"
                        aria-label="Save to favorites"
                      >
                        <Heart
                          className={`w-4 h-4 ${isFav ? 'fill-rose-500 text-rose-500' : ''}`}
                        />
                      </button>

                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-neutral-300">
                        <div className="flex items-center gap-1 bg-neutral-900/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-neutral-800">
                          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          <span className="font-bold text-white">{treat.rating}</span>
                          <span className="text-neutral-400">({treat.reviews})</span>
                        </div>
                        <span className="bg-neutral-900/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-neutral-800 text-rose-300 font-medium">
                          {treat.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white group-hover:text-rose-300 transition-colors">
                        {treat.name}
                      </h3>
                      <p className="mt-2 text-sm text-neutral-400 line-clamp-2">
                        {treat.description}
                      </p>
                      <div className="mt-4 pt-4 border-t border-neutral-800 text-xs text-neutral-400 font-medium">
                        {treat.details}
                      </div>
                    </div>
                  </div>

                  {/* Pricing & Add Button */}
                  <div className="p-6 pt-0 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-neutral-400 uppercase tracking-wider block">Price</span>
                      <span className="text-2xl font-black text-rose-400">
                        ${treat.price.toFixed(2)}
                      </span>
                    </div>

                    <button
                      onClick={() => addToCart(treat)}
                      className="px-5 py-3 rounded-full bg-rose-600 hover:bg-rose-500 active:scale-95 text-white font-semibold text-sm flex items-center gap-2 shadow-lg shadow-rose-600/30 hover:shadow-rose-600/50 transition-all cursor-pointer"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Add to Box</span>
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* The Experience Section */}
      <section id="experience" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-rose-400 text-xs font-bold uppercase tracking-widest">
                The Berry Luxe Difference
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-2 leading-tight">
                Crafted for Moments that Demand Perfection.
              </h2>
              <p className="mt-6 text-neutral-300 text-base sm:text-lg leading-relaxed">
                We believe that dessert should be an unforgettable sensory journey. From the crisp crack of fine tempered chocolate to the sweet burst of fresh hand-picked berries, every detail is engineered for pure luxury.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-xl bg-rose-950/80 border border-rose-700/50 text-rose-400 mt-1">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Daily Farm-Fresh Harvest</h4>
                    <p className="text-sm text-neutral-400">We inspect and select only top-tier Grade A berries for size, sweetness, and aroma.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-xl bg-rose-950/80 border border-rose-700/50 text-rose-400 mt-1">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Custom Velvet Presentation</h4>
                    <p className="text-sm text-neutral-400">Every box is packaged in gift-ready matte black and gold foil velvet packaging.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-xl bg-rose-950/80 border border-rose-700/50 text-rose-400 mt-1">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Celebrations & Corporate Gifting</h4>
                    <p className="text-sm text-neutral-400">Custom ribbons, corporate logo stamps, and personalized wax-sealed message cards.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl relative">
                <img
                  src="https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=1000&q=80"
                  alt="Berry Luxe Box"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl bg-neutral-950/80 backdrop-blur-xl border border-neutral-800">
                  <p className="text-xs font-semibold text-rose-400 uppercase tracking-widest">Master Chocolatier Promise</p>
                  <p className="text-lg font-bold text-white mt-1">“Never frozen. Always fresh. Unmatched opulence.”</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-neutral-900/40 border-t border-neutral-800/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-rose-400 text-xs font-bold uppercase tracking-widest">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">Loved by Connoisseurs</h2>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-neutral-900 border border-neutral-800 text-left">
              <div className="flex gap-1 text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-sm text-neutral-300 leading-relaxed italic">
                &ldquo;The 24K Gold strawberries were the centerpiece of our anniversary dinner. Truly sublime taste and unbelievable presentation!&rdquo;
              </p>
              <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between">
                <span className="text-sm font-bold text-white">Elena Rostova</span>
                <span className="text-xs text-rose-400">Verified Collector</span>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-neutral-900 border border-neutral-800 text-left">
              <div className="flex gap-1 text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-sm text-neutral-300 leading-relaxed italic">
                &ldquo;Ordered 50 custom gift chests for our VIP clients. Every single client sent photos amazed by the ruby chocolate glaze!&rdquo;
              </p>
              <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between">
                <span className="text-sm font-bold text-white">Marcus Vance</span>
                <span className="text-xs text-rose-400">Corporate Director</span>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-neutral-900 border border-neutral-800 text-left">
              <div className="flex gap-1 text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-sm text-neutral-300 leading-relaxed italic">
                &ldquo;The Wild Berry Truffles are unlike anything you buy at ordinary shops. Bursting with authentic berry flavor and premium cocoa.&rdquo;
              </p>
              <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between">
                <span className="text-sm font-bold text-white">Sophia Chen</span>
                <span className="text-xs text-rose-400">Food Critic</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cart Drawer Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div
            className="absolute inset-0 bg-neutral-950/80 backdrop-blur-sm transition-opacity"
            onClick={() => setIsCartOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-neutral-900 border-l border-neutral-800 p-6 flex flex-col justify-between shadow-2xl">
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-neutral-800">
                  <div className="flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5 text-rose-400" />
                    <h3 className="text-lg font-bold text-white">Your Luxe Box ({totalCartCount})</h3>
                  </div>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="p-2 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="mt-6 space-y-4 max-h-[55vh] overflow-y-auto pr-1">
                  {cart.length === 0 ? (
                    <div className="text-center py-12 text-neutral-400">
                      <ShoppingBag className="w-12 h-12 mx-auto mb-3 text-neutral-600 stroke-1" />
                      <p className="text-base font-medium text-neutral-300">Your treat box is empty</p>
                      <p className="text-xs mt-1">Select your favorite berry treats to get started.</p>
                    </div>
                  ) : (
                    cart.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between p-3.5 rounded-2xl bg-neutral-950/60 border border-neutral-800"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-14 h-14 object-cover rounded-xl border border-neutral-800"
                        />
                        <div className="flex-1 ml-3 mr-2">
                          <h4 className="text-sm font-semibold text-white truncate max-w-[140px]">
                            {item.name}
                          </h4>
                          <p className="text-xs text-rose-400 font-bold mt-0.5">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 bg-neutral-900 border border-neutral-700 px-2 py-1 rounded-full">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-1 hover:text-rose-400 transition-colors cursor-pointer"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="text-xs font-bold text-white px-1">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-1 hover:text-rose-400 transition-colors cursor-pointer"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {cart.length > 0 && (
                <div className="pt-6 border-t border-neutral-800 space-y-4">
                  <div className="flex justify-between text-sm text-neutral-400">
                    <span>Subtotal</span>
                    <span className="text-white font-semibold">${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-neutral-400">
                    <span>Chilled Delivery</span>
                    <span className="text-emerald-400 font-medium">Complimentary</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold text-white pt-2 border-t border-neutral-800">
                    <span>Total</span>
                    <span className="text-rose-400">${cartTotal.toFixed(2)}</span>
                  </div>

                  <button
                    onClick={() => {
                      alert('Thank you for choosing BERRY LUXE TREAT! Checkout flow initialized.')
                      setCart([])
                      setIsCartOpen(false)
                    }}
                    className="w-full py-4 rounded-full bg-gradient-to-r from-rose-600 via-rose-500 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white font-bold text-base shadow-xl shadow-rose-600/40 transition-all cursor-pointer"
                  >
                    Proceed to Luxe Checkout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer id="contact" className="bg-neutral-950 border-t border-neutral-800 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-rose-600 to-amber-400 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg font-bold tracking-wider uppercase text-white">
                  BERRY LUXE TREAT
                </span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Handcrafted berry artistry and luxury dessert confections for celebrations, gifts, and fine dining.
              </p>
              <div className="flex items-center gap-3 text-neutral-400">
                <a href="#" className="p-2 rounded-full bg-neutral-900 hover:text-rose-400 transition-colors"><Share2 className="w-4 h-4" /></a>
                <a href="#" className="p-2 rounded-full bg-neutral-900 hover:text-rose-400 transition-colors"><Globe className="w-4 h-4" /></a>
                <a href="#" className="p-2 rounded-full bg-neutral-900 hover:text-rose-400 transition-colors"><Mail className="w-4 h-4" /></a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Collections</h4>
              <ul className="space-y-2 text-xs text-neutral-400">
                <li><a href="#menu" className="hover:text-rose-400 transition-colors">24K Gold Strawberries</a></li>
                <li><a href="#menu" className="hover:text-rose-400 transition-colors">Artisan Berry Truffles</a></li>
                <li><a href="#menu" className="hover:text-rose-400 transition-colors">Ruby Glaze Tartlets</a></li>
                <li><a href="#menu" className="hover:text-rose-400 transition-colors">Custom Gift Chests</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Concierge</h4>
              <ul className="space-y-2 text-xs text-neutral-400">
                <li><span className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-rose-400" /> +1 (800) 555-LUXE</span></li>
                <li><span className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-rose-400" /> concierge@berryluxetreats.com</span></li>
                <li><span className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-rose-400" /> 742 Evergreen Avenue, Luxury Suite</span></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">VIP Club</h4>
              <p className="text-xs text-neutral-400 mb-3">
                Subscribe for private tasting invitations and limited seasonal releases.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-neutral-900 border border-neutral-800 rounded-full px-4 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-rose-500 flex-1"
                />
                <button
                  onClick={() => alert('Welcome to the BERRY LUXE VIP Circle!')}
                  className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white rounded-full text-xs font-semibold cursor-pointer"
                >
                  Join
                </button>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500">
            <p>© {new Date().getFullYear()} BERRY LUXE TREATS. All rights reserved.</p>
            <p className="mt-2 sm:mt-0">Crafted with React & Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
