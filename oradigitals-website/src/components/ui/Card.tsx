import { HTMLAttributes, forwardRef } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outlined';
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    const baseClasses = 'rounded-xl bg-white';

    const variantClasses = {
      default: 'shadow-sm',
      elevated: 'shadow-lg',
      outlined: 'border-2 border-primary-200 shadow-sm',
    };

    return (
      <div
        className={`${baseClasses} ${variantClasses[variant]} ${className || ''}`}
        ref={ref}
        {...props}
      />
    );
  }
);

Card.displayName = 'Card';

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {}

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...props }, ref) => (
    <div
      className={`flex flex-col space-y-1.5 p-6 ${className || ''}`}
      ref={ref}
      {...props}
    />
  )
);

CardHeader.displayName = 'CardHeader';

interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {}

const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, ...props }, ref) => (
    <h3
      className={`text-2xl font-heading font-semibold leading-none tracking-tight text-primary-900 ${className || ''}`}
      ref={ref}
      {...props}
    />
  )
);

CardTitle.displayName = 'CardTitle';

interface CardDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {}

const CardDescription = forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, ...props }, ref) => (
    <p
      className={`text-sm text-primary-600 ${className || ''}`}
      ref={ref}
      {...props}
    />
  )
);

CardDescription.displayName = 'CardDescription';

interface CardContentProps extends HTMLAttributes<HTMLDivElement> {}

const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...props }, ref) => (
    <div className={`p-6 pt-0 ${className || ''}`} ref={ref} {...props} />
  )
);

CardContent.displayName = 'CardContent';

interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {}

const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, ...props }, ref) => (
    <div
      className={`flex items-center p-6 pt-0 ${className || ''}`}
      ref={ref}
      {...props}
    />
  )
);

CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };