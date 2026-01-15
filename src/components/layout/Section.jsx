import React from "react";
import { cn } from "../../lib/cn";

export default function Section({
    id,
    eyebrow,
    title,
    subtitle,
    children,
    className,
    headerClassName,
    containerClassName,
}) {
    return (
        <section id={id} className={cn("py-20 px-6", className)}>
            <div className={cn("max-w-7xl mx-auto", containerClassName)}>
                {(eyebrow || title || subtitle) && (
                    <header className={cn("mb-16", headerClassName)}>
                        {eyebrow && (
                            <h2 className="text-sm font-medium text-gray-500 mb-4 tracking-wider uppercase">
                                {eyebrow}
                            </h2>
                        )}
                        {title && (
                            <h3 className="text-4xl font-light text-gray-900 mb-6">
                                {title}
                            </h3>
                        )}
                        {subtitle && (
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                {subtitle}
                            </p>
                        )}
                    </header>
                )}

                {children}
            </div>
        </section>
    );
}
