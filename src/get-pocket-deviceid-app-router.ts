"use server";

import { cookies } from "next/headers";
import { getCookie } from "cookies-next";

const getPocketDeviceIdAppRouter = (): string | false => {
  const pocketDeviceId = getCookie("pocketClient", { cookies });
  if (pocketDeviceId && typeof pocketDeviceId === "string") {
    return pocketDeviceId;
  }
  return false;
};

export default getPocketDeviceIdAppRouter;
