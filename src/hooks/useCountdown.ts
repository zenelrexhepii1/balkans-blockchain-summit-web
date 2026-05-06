import { useEffect, useState } from 'react';

interface Countdown {
  weeks: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalMilliseconds: number;
}

export function useCountdown(targetDate: Date | string | number): Countdown {
  const calculateTimeLeft = (): Countdown => {
    const now = new Date().getTime();
    const target = new Date(targetDate).getTime();
    const difference = target - now;

    const totalSeconds = Math.max(Math.floor(difference / 1000), 0);

    const weeks = Math.floor(totalSeconds / (7 * 24 * 60 * 60));
    const days = Math.floor((totalSeconds % (7 * 24 * 60 * 60)) / (24 * 60 * 60));
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;

    return {
      weeks,
      days,
      hours,
      minutes,
      seconds,
      totalMilliseconds: Math.max(difference, 0),
    };
  };

  const [timeLeft, setTimeLeft] = useState<Countdown>(calculateTimeLeft);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
}
