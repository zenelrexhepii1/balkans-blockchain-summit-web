import { useState, useMemo } from "react";

type UseCarouselReturn<T> = {
  currentIndex: number;
  visibleItems: T[];
  next: () => void;
  prev: () => void;
  goTo: (index: number) => void;
  isStart: boolean;
  isEnd: boolean;
};

export const useCarousel = <T,>(
  items: T[],
  itemsPerView: number = 4
): UseCarouselReturn<T> => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const maxIndex = Math.max(0, items.length - itemsPerView);

  const next = () => {
    setCurrentIndex((prev) => Math.min(prev + itemsPerView, maxIndex));
  };

  const prev = () => {
    setCurrentIndex((prev) => Math.max(prev - itemsPerView, 0));
  };

  const goTo = (index: number) => {
    const safeIndex = Math.max(0, Math.min(index, maxIndex));
    setCurrentIndex(safeIndex);
  };

  const visibleItems = useMemo<T[]>(() => {
    return items.slice(currentIndex, currentIndex + itemsPerView);
  }, [items, currentIndex, itemsPerView]);

  const isStart = currentIndex === 0;
  const isEnd = currentIndex >= maxIndex;

  return {
    currentIndex,
    visibleItems,
    next,
    prev,
    goTo,
    isStart,
    isEnd,
  };
};