"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence } from "motion/react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    role: string;
    description: string;
    date: string;
    link: string;
  }[];
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 py-4 justify-items-start",
        className
      )}
    >
      {items.map((item) => (
        <a
          href={item?.link}
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
        >
          <AnimatePresence>
            {/* {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )} */}
          </AnimatePresence>
          <Card className="border border-transparent group-hover:border-indigo-600/100 transition-all duration-200 ease-in-out">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <CardTitle className="my-0 mr-2">{item.title}</CardTitle>
              <span className="text-zinc-400 text-base font-normal sm:ml-2 sm:mt-0 mt-1">
                {item.role}
              </span>
            </div>
            <div>
              <span className="text-zinc-400 text-sm">{item.date}</span>
            </div>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </a>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-4 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
