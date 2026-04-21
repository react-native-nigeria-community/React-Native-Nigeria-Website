import { useEffect } from "react";

export function useRevealOnScroll(scopeRef: React.RefObject<HTMLElement | null>) {
    useEffect(() => {
        const root = scopeRef.current ?? document;
        const reduce =
            typeof window !== "undefined" &&
            window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

        const els = root.querySelectorAll<HTMLElement>("[data-reveal]");
        if (!els.length) return;

        els.forEach((el) => {
            el.classList.add(
                "opacity-0",
                "translate-y-6",
                "transition",
                "duration-700",
                "ease-out",
                "will-change-transform"
            );
            const d = el.getAttribute("data-reveal-delay");
            if (d) el.style.transitionDelay = `${parseInt(d, 10)}ms`;
        });

        if (reduce) {
            els.forEach((el) => {
                el.classList.remove("opacity-0", "translate-y-6");
                el.classList.add("opacity-100", "translate-y-0");
                el.style.transitionDelay = "";
            });
            return;
        }

        const obs = new IntersectionObserver(
            (entries) =>
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    const el = entry.target as HTMLElement;
                    el.classList.add("opacity-100", "translate-y-0");
                    el.classList.remove("opacity-0", "translate-y-6");
                    obs.unobserve(el);
                }),
            { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
        );

        els.forEach((el) => obs.observe(el));
        return () => obs.disconnect();
    }, [scopeRef]);
}