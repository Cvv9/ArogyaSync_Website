"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-teal disabled:pointer-events-none disabled:opacity-50 active:scale-95",
    {
        variants: {
            variant: {
                primary:
                    "bg-navy text-clinical-white shadow-lg shadow-navy/20 hover:bg-navy/90 hover:shadow-navy/40",
                gradient:
                    "bg-gradient-to-r from-navy to-[#1E3A8A] text-clinical-white shadow-lg shadow-navy/20 hover:shadow-navy/40 hover:opacity-90",
                teal:
                    "bg-teal text-navy shadow-lg shadow-teal/20 hover:bg-teal/90 hover:shadow-teal/40",
                outline:
                    "border border-silver bg-transparent text-charcoal hover:bg-soft-gray hover:text-navy",
                ghost: "bg-transparent text-charcoal hover:bg-soft-gray hover:text-navy",
                link: "text-navy underline-offset-4 hover:underline",
            },
            size: {
                default: "h-11 px-6 py-2",
                sm: "h-9 px-4 text-xs",
                lg: "h-14 px-10 text-base",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
