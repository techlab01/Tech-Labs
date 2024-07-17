"use client";
import React, { forwardRef, HTMLAttributes, ReactNode } from "react";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  disabled?: boolean;
  className?: string;
  mode?: string;
}

const CustomSection = forwardRef<HTMLElement, SectionProps>((props, ref) => {
  const { children, className, ...rest } = props;
  return (
    <section ref={ref} {...rest} className={`relative ${className}`}>
      {children}
    </section>
  );
});

CustomSection.displayName = "CustomSection";

export default CustomSection;
