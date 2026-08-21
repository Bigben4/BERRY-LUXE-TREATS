import React from 'react';
import Badge from './Badge';

export default function SectionHeading({
  badge,
  badgeIcon,
  title,
  subtitle,
  align = 'center',
  className = '',
  titleClassName = '',
  subtitleClassName = '',
  light = false
}) {
  const alignmentClass =
    align === 'left'
      ? 'text-left items-start'
      : align === 'right'
      ? 'text-right items-end'
      : 'text-center items-center';

  return (
    <div className={`flex flex-col max-w-3xl ${align === 'center' ? 'mx-auto' : ''} ${alignmentClass} ${className}`}>
      {badge && (
        <div className="mb-3">
          <Badge variant={light ? 'gold' : 'primary'} icon={badgeIcon}>
            {badge}
          </Badge>
        </div>
      )}

      {title && (
        <h2
          className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight ${
            light ? 'text-white' : 'text-[#1f1418]'
          } ${titleClassName}`}
        >
          {title}
        </h2>
      )}

      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            light ? 'text-[#fdf2f4]/90' : 'text-[#64555b]'
          } ${subtitleClassName}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
