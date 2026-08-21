import React from 'react';

export default function Container({ children, className = '', size = 'default' }) {
  const maxWidthClass = size === 'narrow' ? 'max-w-4xl' : size === 'wide' ? 'max-w-7xl' : 'max-w-6xl';

  return (
    <div className={`mx-auto px-4 sm:px-6 lg:px-8 w-full ${maxWidthClass} ${className}`}>
      {children}
    </div>
  );
}
