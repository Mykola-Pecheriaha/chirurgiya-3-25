import type React from 'react';
import { forwardRef } from 'react';
import styles from './button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'danger'
    | 'success'
    | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  fullWidth?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  ripple?: boolean;
}

export const SimpleButton = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'default',
      size = 'md',
      fullWidth = false,
      isLoading = false,
      leftIcon,
      rightIcon,
      ripple = false,
      className = '',
      ...props
    },
    ref
  ) => {
    // Збираємо всі класи в масив
    const buttonClasses = [
      styles.button,
      styles[variant],
      styles[size],
      fullWidth ? styles.fullWidth : '',
      isLoading ? styles.loading : '',
      leftIcon || rightIcon ? styles.withIcon : '',
      ripple ? styles.ripple : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <button
        className={buttonClasses}
        disabled={isLoading || props.disabled}
        ref={ref}
        {...props}
      >
        {leftIcon && <span className={styles.iconLeft}>{leftIcon}</span>}
        {children}
        {rightIcon && <span className={styles.iconRight}>{rightIcon}</span>}
      </button>
    );
  }
);

SimpleButton.displayName = 'SimpleButton';
