import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  icon: Icon,
  iconPosition = 'left',
  fullWidth = false,
  className = '',
  target,
  rel,
  ...props
}) {
  const baseClasses =
    'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-offset-2 active:scale-95 disabled:opacity-50 disabled:pointer-events-none';

  const sizeClasses = {
    sm: 'px-4 py-2 text-xs gap-1.5',
    md: 'px-6 py-3 text-sm gap-2',
    lg: 'px-8 py-4 text-base gap-2.5',
  };

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-[#661f31] to-[#822a41] hover:from-[#501624] hover:to-[#661f31] text-white shadow-md hover:shadow-lg focus:ring-[#661f31]',
    gold:
      'bg-gradient-to-r from-[#c69255] to-[#dfb079] hover:from-[#b07c40] hover:to-[#c69255] text-white shadow-md hover:shadow-lg focus:ring-[#c69255]',
    outline:
      'bg-transparent text-[#661f31] border-2 border-[#661f31]/30 hover:border-[#661f31] hover:bg-[#661f31]/5 focus:ring-[#661f31]',
    'outline-gold':
      'bg-transparent text-[#916127] border-2 border-[#c69255]/40 hover:border-[#c69255] hover:bg-[#c69255]/10 focus:ring-[#c69255]',
    secondary:
      'bg-[#fffaf5] text-[#1f1418] border border-[#ede1e4] hover:bg-white hover:border-[#661f31]/30 shadow-2xs focus:ring-[#661f31]',
    whatsapp:
      'bg-gradient-to-r from-[#25d366] to-[#128c7e] hover:from-[#20ba5a] hover:to-[#0f756a] text-white shadow-md hover:shadow-lg focus:ring-emerald-500',
    ghost:
      'bg-transparent text-[#64555b] hover:text-[#661f31] hover:bg-[#661f31]/5 focus:ring-[#661f31]'
  };

  const combinedClass = `${baseClasses} ${sizeClasses[size] || sizeClasses.md} ${
    variantClasses[variant] || variantClasses.primary
  } ${fullWidth ? 'w-full' : ''} ${className}`;

  const renderIcon = () => {
    if (!Icon) return null;
    if (typeof Icon === 'object' && Icon.iconName) {
      return <FontAwesomeIcon icon={Icon} className="w-3.5 h-3.5 shrink-0" />;
    }
    const Comp = Icon;
    return <Comp className="w-4 h-4 shrink-0" />;
  };

  const content = (
    <>
      {Icon && iconPosition === 'left' && renderIcon()}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && renderIcon()}
    </>
  );

  if (href) {
    return (
      <a href={href} className={combinedClass} target={target} rel={rel} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={combinedClass} {...props}>
      {content}
    </button>
  );
}
