import { cn } from '@/utils/cn';
import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  as?: React.ElementType<any> | string;
  href?: string;
  target?: string;
  rel?: string;
  to?: string;
  children: React.ReactNode;
}

export const Button = React.forwardRef<any, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', fullWidth, as: Component = 'button', children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50',
          {
            'bg-primary text-on-primary hover:scale-[1.02] shadow-lg active:scale-95': variant === 'primary',
            'bg-secondary text-white hover:scale-105 shadow-xl': variant === 'secondary',
            'border-2 border-secondary text-secondary hover:bg-secondary/5': variant === 'outline',
            'hover:bg-surface-container text-on-surface-variant': variant === 'ghost',
            'bg-white/20 backdrop-blur-md border-2 border-secondary/20 text-secondary hover:bg-white/30': variant === 'glass',
            'px-4 py-2 text-label-md rounded-full': size === 'sm',
            'px-6 py-2 rounded-full text-body-md': size === 'md',
            'px-8 py-4 rounded-full text-body-lg gap-2': size === 'lg',
            'w-full': fullWidth,
          },
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
Button.displayName = 'Button';
