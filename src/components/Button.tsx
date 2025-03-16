import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  icon?: LucideIcon;
  variant?: 'primary' | 'outline';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  href,
  onClick,
  children,
  icon: Icon,
  variant = 'primary',
  className = '',
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 font-medium rounded-lg transition-colors";
  const variants = {
    primary: "text-white bg-heat-pink hover:bg-heat-pink/90",
    outline: "border border-heat-pink text-heat-pink hover:bg-heat-pink hover:text-white"
  };

  const ButtonContent = () => (
    <>
      {Icon && <Icon className="w-5 h-5 mr-2" />}
      {children}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        <ButtonContent />
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <ButtonContent />
    </button>
  );
};

export default Button;