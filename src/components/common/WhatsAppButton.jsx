import React from 'react';
import { MessageCircle } from 'lucide-react';
import { createWhatsAppUrl } from '../../utils/whatsapp';

export default function WhatsAppButton({
  children = 'Order on WhatsApp',
  message,
  size = 'md',
  variant = 'primary', // 'primary' | 'whatsapp' | 'gold' | 'outline'
  className = '',
  fullWidth = false,
  onClick
}) {
  const whatsappUrl = createWhatsAppUrl(message);

  const sizeClasses = {
    sm: 'px-4 py-2 text-xs gap-1.5',
    md: 'px-6 py-3 text-sm gap-2',
    lg: 'px-8 py-4 text-base gap-2.5',
  };

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-[#661f31] to-[#822a41] hover:from-[#501624] hover:to-[#661f31] text-white shadow-md hover:shadow-lg focus:ring-[#661f31]',
    whatsapp:
      'bg-gradient-to-r from-[#25d366] to-[#128c7e] hover:from-[#20ba5a] hover:to-[#0f756a] text-white shadow-md hover:shadow-lg focus:ring-emerald-500',
    gold:
      'bg-gradient-to-r from-[#c69255] to-[#dfb079] hover:from-[#b07c40] hover:to-[#c69255] text-white shadow-md hover:shadow-lg focus:ring-[#c69255]',
    outline:
      'bg-transparent text-[#661f31] border-2 border-[#661f31]/30 hover:border-[#661f31] hover:bg-[#661f31]/5 focus:ring-[#661f31]',
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={`inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-offset-2 active:scale-95 ${
        sizeClasses[size] || sizeClasses.md
      } ${variantClasses[variant] || variantClasses.primary} ${
        fullWidth ? 'w-full' : ''
      } ${className}`}
    >
      <MessageCircle className="w-4 h-4 shrink-0 fill-current" />
      <span>{children}</span>
    </a>
  );
}
