import React from "react";

const Button = ({
  as: Component = "button",
  className = "",
  size = "default",
  children,
  ...props
}) => {
  const baseClasses =
    // relative: positioning context 
    // isolate: new stacking context so children/element doesnt interact weirdly with other layers
    // inline-flex: inline element. as wide as content. children are flex items.
    "relative isolate inline-flex items-center justify-center gap-2 " +
    // transition-colors: animate color property changes smoothly
    "rounded-full font-medium transition-colors " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary " +
    "bg-primary text-primary-foreground hover:bg-primary/90 " +
    "shadow-md " + 
    // overwrites any global CSS ::before/::after definitions
    "before:content-none after:content-none";

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;

  //const Component = as;

  return (
    <Component className={classes} {...props}>
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    </Component>
  );
};

export default Button;
