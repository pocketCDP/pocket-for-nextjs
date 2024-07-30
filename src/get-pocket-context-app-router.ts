"use server";

import { cookies } from "next/headers";
import { getCookie } from "cookies-next";

const getPocketContextAppRouter = () => {
  const pocketContext = getCookie("pocketContext", { cookies });

  let pocketContextParsed;

  try {
    if (pocketContext && typeof pocketContext === "string") {
      pocketContextParsed = JSON.parse(pocketContext as string);
      pocketContextParsed =
        typeof pocketContextParsed === "object" ? pocketContextParsed : {};
    }
    console.log({ pocketContextParsed });
    return pocketContextParsed;
  } catch (e) {
    console.error("Error parsing pocketContext", e);
    return null;
  }
};

export default getPocketContextAppRouter;
