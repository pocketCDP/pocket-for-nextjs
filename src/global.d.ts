// Modify global window object

import { WindowWithPocket } from "./types";

declare global {
  interface Window extends WindowWithPocket {}
}
