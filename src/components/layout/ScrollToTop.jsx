import React from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname, hash } = useLocation();

    React.useEffect(() => {
        // If there is a hash, ScrollToHash handles scrolling on home
        if (hash) return;

        // On any route change without a hash, go to top
        window.scrollTo({ top: 0, behavior: "auto" });
    }, [pathname, hash]);

    return null;
}
