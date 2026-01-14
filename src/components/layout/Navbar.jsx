import React, { useEffect, useMemo, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

function cx(...classes) {
    return classes.filter(Boolean).join(" ");
}

const navItemBase =
    "text-sm tracking-wide text-neutral-700 hover:text-neutral-950 transition-colors";

const navItemActive = "text-neutral-950";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    // Close mobile menu on route/hash change
    useEffect(() => {
        setOpen(false);
    }, [location.pathname, location.hash]);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (!open) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prev;
        };
    }, [open]);

    // Escape closes mobile menu
    useEffect(() => {
        if (!open) return;
        const onKeyDown = (e) => {
            if (e.key === "Escape") setOpen(false);
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [open]);

    const onHome = location.pathname === "/";
    const activeHash = onHome ? location.hash : "";

    // Define "active" for hash links on Home
    const hashLinkClass = (hash) =>
        cx(navItemBase, onHome && activeHash === hash && navItemActive);

    const mobileItemClass = (isActive) =>
        cx("py-2 border-b border-neutral-200", navItemBase, isActive && navItemActive);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-neutral-200">
            <div className="max-w-7xl mx-auto px-6">
                <div className="h-16 grid grid-cols-[1fr_auto] lg:grid-cols-[auto_1fr_auto] items-center gap-6">
                    {/* Brand */}
                    <Link to="/" className="flex items-center gap-3 min-w-0">
                        <div className="w-2.5 h-2.5 rounded-full bg-neutral-950" />
                        <span className="text-sm tracking-[0.22em] uppercase text-neutral-950 truncate">
                            Healthy Hectare
                        </span>
                    </Link>

                    {/* Desktop nav */}
                    <nav className="hidden lg:flex items-center gap-8 justify-center" aria-label="Primary">
                        <NavLink
                            to="/"
                            end
                            className={({ isActive }) => cx(navItemBase, isActive && navItemActive)}
                        >
                            Overview
                        </NavLink>

                        {/* Home section links (hash) */}
                        <Link to="/#programme" className={hashLinkClass("#programme")}>
                            Programme
                        </Link>
                        <Link to="/#how-it-works" className={hashLinkClass("#how-it-works")}>
                            How it works
                        </Link>
                        <Link to="/#impact" className={hashLinkClass("#impact")}>
                            Impact
                        </Link>
                        <Link to="/#governance" className={hashLinkClass("#governance")}>
                            Governance
                        </Link>

                        {/* Platform pages */}
                        <NavLink
                            to="/research"
                            className={({ isActive }) => cx(navItemBase, isActive && navItemActive)}
                        >
                            Research
                        </NavLink>

                        <NavLink
                            to="/participate"
                            className={({ isActive }) => cx(navItemBase, isActive && navItemActive)}
                        >
                            Participate
                        </NavLink>
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden lg:flex justify-end">
                        <NavLink
                            to="/participate"
                            className={({ isActive }) =>
                                cx(
                                    "inline-flex items-center h-9 px-4 border text-sm tracking-wide transition-colors",
                                    isActive
                                        ? "border-neutral-950 bg-neutral-950 text-white"
                                        : "border-neutral-300 text-neutral-950 hover:border-neutral-950"
                                )
                            }
                        >
                            Participate
                        </NavLink>
                    </div>

                    {/* Mobile button */}
                    <div className="lg:hidden flex justify-end">
                        <button
                            type="button"
                            onClick={() => setOpen((v) => !v)}
                            className="h-10 w-10 inline-flex items-center justify-center border border-neutral-300 text-neutral-950"
                            aria-label="Toggle menu"
                            aria-expanded={open}
                            aria-controls="mobile-menu"
                        >
                            {open ? <X size={18} /> : <Menu size={18} />}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                {open && (
                    <>
                        {/* Overlay */}
                        <button
                            type="button"
                            className="lg:hidden fixed inset-0 z-40 bg-black/20"
                            aria-label="Close menu"
                            onClick={() => setOpen(false)}
                        />
                        <div
                            id="mobile-menu"
                            className="lg:hidden fixed left-0 right-0 top-16 z-50 bg-white border-b border-neutral-200"
                            role="dialog"
                            aria-modal="true"
                        >
                            <div className="max-w-7xl mx-auto px-6 py-4">
                                <div className="grid gap-3">
                                    <NavLink to="/" end className={({ isActive }) => mobileItemClass(isActive)}>
                                        Overview
                                    </NavLink>

                                    <Link to="/#programme" className={cx("py-2 border-b border-neutral-200", hashLinkClass("#programme"))}>
                                        Programme
                                    </Link>
                                    <Link
                                        to="/#how-it-works"
                                        className={cx("py-2 border-b border-neutral-200", hashLinkClass("#how-it-works"))}
                                    >
                                        How it works
                                    </Link>
                                    <Link to="/#impact" className={cx("py-2 border-b border-neutral-200", hashLinkClass("#impact"))}>
                                        Impact
                                    </Link>
                                    <Link
                                        to="/#governance"
                                        className={cx("py-2 border-b border-neutral-200", hashLinkClass("#governance"))}
                                    >
                                        Governance
                                    </Link>

                                    <NavLink to="/research" className={({ isActive }) => mobileItemClass(isActive)}>
                                        Research
                                    </NavLink>

                                    <NavLink to="/participate" className={({ isActive }) => mobileItemClass(isActive)}>
                                        Participate
                                    </NavLink>

                                    <NavLink
                                        to="/participate"
                                        className="mt-2 inline-flex items-center justify-center h-10 px-4 border border-neutral-950 bg-neutral-950 text-white text-sm tracking-wide"
                                    >
                                        Participate
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </header>
    );
}
