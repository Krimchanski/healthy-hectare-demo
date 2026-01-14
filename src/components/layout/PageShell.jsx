import React from "react";

/**
 * PageShell
 * - Standardizes page width, padding, and (optional) headers
 * - Use for all normal routes (Programme, Research, Participate subpages, Thank You)
 * - Home is a report-style page; it can either use this with `showHeader={false}`
 *   or remain section-driven without a header.
 */
export default function PageShell({
    title,
    subtitle,
    children,
    showHeader = true,
    maxWidthClass = "max-w-6xl",
}) {
    return (
        <main id="main" className="bg-white">
            <div className={`mx-auto ${maxWidthClass} px-6 pt-24 pb-20`}>
                {showHeader && (title || subtitle) ? (
                    <header className="mb-12">
                        {title ? (
                            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-neutral-950 leading-tight">
                                {title}
                            </h1>
                        ) : null}

                        {subtitle ? (
                            <p className="mt-4 text-lg text-neutral-600 leading-relaxed max-w-3xl">
                                {subtitle}
                            </p>
                        ) : null}

                        <div className="mt-8 h-px bg-neutral-200" />
                    </header>
                ) : null}

                <div>{children}</div>
            </div>
        </main>
    );
}
