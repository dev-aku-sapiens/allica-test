import React, { useRef } from 'react';

export interface ButtonProps {
  fw?: boolean;
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  ariaLabel,
  fw = false,
  className = '',
  disabled = false,
  variant = 'primary',
}) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const widthStyles = fw ? 'w-full min-w-btn' : 'w-auto';

  const baseStyles = `py-btnVertical whitespace-nowrap px-btnHorizontal text-sm font-medium focus:outline-none transition duration-200 ease-in-out`;

  const variantStyles = {
    primary: `
      text-white 
      bg-primary 
      focus:ring-2 
      hover:bg-primary-hover 
      active:bg-primary-active 
      focus:ring-primary-focus 
      disabled:cursor-not-allowed
      disabled:bg-primary-disabledBg 
      disabled:text-primary-disabledText 
      ${disabled ? 'border-none' : 'border-2 border-primary'} `,

    secondary: `
      text-primary 
      focus:ring-2 
      border-2 border-primary 
      focus:ring-primary-focus 
      disabled:cursor-not-allowed
      active:bg-secondary-activeBg 
      active:text-secondary-activeText 
      disabled:text-secondary-disabledText 
      disabled:border-secondary-disabledBorder
      ${!disabled && 'hover:bg-secondary-hover '}`,

    ghost: `
      text-primary 
      focus:ring-2 
      bg-transparent 
      focus:ring-primary-focus 
      active:bg-ghost-activeBg 
      disabled:cursor-not-allowed
      active:text-ghost-activeText 
      disabled:text-primary-disabledText 
      ${!disabled && 'hover:bg-ghost-hoverBg '}`,
  };

  const handleClick = () => {
    onClick?.();
    buttonRef?.current?.blur();
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`${className} ${baseStyles} ${widthStyles} ${variantStyles[variant]}`}
      onKeyUp={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick();
        }
      }}
    >
      {children}
    </button>
  );
};

export default Button;
