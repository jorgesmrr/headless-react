import { DependencyList, useLayoutEffect } from "react";

export const useScrollEffect: (
    effect: ({ x, y }: { x: number; y: number }) => void,
    dependencies?: DependencyList,
    throttleInterval?: number
) => void = (effect, dependencies, throttleInterval = 150) => {
    const getScroll = () => {
        return { x: window.scrollX, y: window.scrollY };
    };

    let isRunning = false;

    const effectWrapper = () => {
        if (!isRunning) {
            isRunning = true;
            if (throttleInterval > 0) {
                window.setTimeout(() => {
                    effect(getScroll());
                    isRunning = false;
                }, throttleInterval);
            } else {
                effect(getScroll());
                isRunning = false;
            }
        }
    };

    useLayoutEffect(() => {
        window.addEventListener("scroll", effectWrapper);

        return () => window.removeEventListener("scroll", effectWrapper);
    }, dependencies);
};
