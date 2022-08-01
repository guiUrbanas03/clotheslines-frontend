import { useCallback, useRef } from 'react';

export const useIntersectionObserverRef = (observerAction: Function) => {
  const observer = useRef<IntersectionObserver>();

  const observedElementRef = useCallback(
    (node: HTMLDivElement) => {
      try {
        if (observer.current) {
          observer.current.disconnect();
        }

        observer.current = new IntersectionObserver(async (entries) => {
          await observerAction(entries);
        });

        if (node) {
          observer.current.observe(node);
        }
      } catch (error) {
        console.error(error);
      }
    },
    [observerAction],
  );

  return { observer, observedElementRef };
};
