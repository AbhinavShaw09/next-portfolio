"use client";
import { useEffect, useState } from "react";
import { DivGrid } from "@/components/ui/background-ripple-effect";
import { cn } from "@/lib/utils";

export function GridBackground() {
  const [grid, setGrid] = useState({ rows: 10, cols: 27, cellSize: 56 });

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 640) {
        setGrid({ rows: 6, cols: 8, cellSize: 32 });
      } else if (window.innerWidth < 1024) {
        setGrid({ rows: 8, cols: 20, cellSize: 40 });
      } else {
        setGrid({ rows: 10, cols: 27, cellSize: 56 });
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 w-screen h-screen pointer-events-none">
      <DivGrid
        className={cn(
          "mask-radial-from-20% mask-radial-at-top opacity-60 w-full h-full"
        )}
        rows={grid.rows}
        cols={grid.cols}
        cellSize={grid.cellSize}
        borderColor="var(--cell-border-color)"
        fillColor="var(--cell-fill-color)"
        clickedCell={null}
        interactive={false}
      />
    </div>
  );
}
