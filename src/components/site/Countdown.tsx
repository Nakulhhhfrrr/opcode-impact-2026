import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { EASE } from "./motion-primitives";

const TARGET = Date.UTC(2026, 9, 9, 3, 30, 0); // 9 Oct 2026, 09:00 IST

type Parts = { days: number; hours: number; minutes: number; seconds: number };

function diff(): Parts {
  const ms = Math.max(0, TARGET - Date.now());
  return {
    days: Math.floor(ms / 86400000),
    hours: Math.floor(ms / 3600000) % 24,
    minutes: Math.floor(ms / 60000) % 60,
    seconds: Math.floor(ms / 1000) % 60,
  };
}

export function Countdown() {
  const [parts, setParts] = useState<Parts | null>(null);

  useEffect(() => {
    setParts(diff());
    const id = setInterval(() => setParts(diff()), 1000);
    return () => clearInterval(id);
  }, []);

  const units: Array<[string, number | null]> = [
    ["Days", parts?.days ?? null],
    ["Hours", parts?.hours ?? null],
    ["Minutes", parts?.minutes ?? null],
    ["Seconds", parts?.seconds ?? null],
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: EASE, delay: 1.3 }}
      className="grid w-full min-w-0 grid-cols-4 border-t border-white/20 pt-6"
      aria-label="Countdown to event start"
    >
      {units.map(([label, value], i) => (
        <div
          key={label}
          className={`min-w-0 pr-3 md:pr-8 ${i > 0 ? "border-l border-white/15 pl-3 md:pl-8" : ""}`}
        >
          <div className="font-mono text-[1.5rem] leading-none font-light tabular-nums md:text-[2.5rem]">
            {value === null ? "--" : String(value).padStart(2, "0")}
          </div>
          <div className="label-micro mt-2.5 text-[0.5625rem] text-white/55 md:text-[0.625rem]">
            {label}
          </div>
        </div>
      ))}
    </motion.div>
  );
}
