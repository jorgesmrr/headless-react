import { useLayoutEffect } from "react";

export const useScrollEffect: (
    effect: ({ x, y }: { x: number; y: number }) => void,
    throttleInterval?: number
) => void = (effect, throttleInterval = 150) => {
    const getScroll = () => {
        return { x: window.scrollX, y: window.scrollY };
    };

    let throttleTimeout: number | null = null;

    const effectWrapper = () => {
        if (throttleTimeout === null) {
            throttleTimeout = window.setTimeout(() => {
                effect(getScroll());
                throttleTimeout = null;
            }, throttleInterval);
        }
    };

    useLayoutEffect(() => {
        window.addEventListener("scroll", effectWrapper);

        return () => window.removeEventListener("scroll", effectWrapper);
    });
};
