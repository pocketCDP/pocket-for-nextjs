"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { setCookie } from "cookies-next";

const usePocketPageviewAppRouter = () => {
  const pathname = usePathname();

  // Send a pageview event to Pocket CDP when the pathname changes

  useEffect(() => {
    try {
      window.pocket = window.pocket || [];

      window.pocket.push({
        eventType: "pageview",
      });

      if (Array.isArray(window.pocket)) {
        return;
      }

      if (typeof window.pocket === "object" && window && document) {
        const globalData = window.pocket.harvest();
        setCookie("pocketContext", JSON.stringify(globalData));
      }
    } catch (e) {
      console.info("Error loading pocket.push");
    }
  }, [pathname]);
};

export default usePocketPageviewAppRouter;
