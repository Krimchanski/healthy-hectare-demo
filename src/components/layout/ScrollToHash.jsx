import React from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
    const { hash, pathname } = useLocation();

    React.useEffect(() => {
        if (!hash) return;

        // Only attempt to scroll when on the homepage (since these ids are on Home)
        if (pathname !== "/") return;

        const id = hash.replace("#", "");
        const el = document.getElementById(id);
        if (!el) return;

        // Offset for fixed navbar (64px) + a little breathing room
        const y = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: "smooth" });
    }, [hash, pathname]);

    return null;
}
