// Modify global window object

import { WindowWithPocket } from "./src/types";

declare global {
  interface Window extends WindowWithPocket {}
}
