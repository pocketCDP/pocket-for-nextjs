export interface WindowWithPocket {
  pocket: Pocket | undefined | any[];
  // pocketOnIsReady?: () => void; // this is a callback utility that anyone can use to know when the pocket is ready and act on it...
  navigation?: any;
  pocketDevCallback?: (action: string, payload: any) => void;
  pocketConfig?: {
    // Pocketconfig is added in the individual script in the client
    pocketScriptUID: string; // This is the unique identifier of the tag
    pocketAccountId: string; // This is the account id of the owner of the tag
    pocketDestinationServer: string; // this is the server where the pocket will send the data
    accountLogo?: string;
    accountName?: string;
    bannerTitle?: string;
    bannerText?: string;
    bannerFooter?: string;
  };
  pocketUtils?: {
    getCookie: (name: string) => string | null;
    setCookie: (name: string, value: string, days: number) => void;
    sanitizeString: (str: string) => string;
  };
}

export interface Pocket {
  push: (payload: EventPayload, persist?: boolean) => void;
  identify: (payload: any, persist: boolean) => Promise<void>;
  getClient: () => string | null;
  saveClient: (pocketClient: string) => void;
  pocketClient?: string | null;
  onLoad: () => void;
  log: any;
  isReady: boolean;
  isDevMode: () => boolean;
  harvest: () => unknown;
}

export interface IdentifyData {
  friendlyUserId?: string;
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  userId?: string | null;
  deviceId?: string;
  countryIsoCode2?: string;
  acceptedEmailCommunications?: boolean;
  languageCode?: string;
  metadata?: any;
  customUserProperties?: any;
}

export interface Discounts {
  "discount-id"?: string;
  "discount-name"?: string;
  "discount-value"?: number;
  "discount-type"?: string;
}

export interface Ecom {
  "friendly-id"?: string;
  currency?: string; // Defaults to Account's default currency
  location?: {
    "list-id"?: string; // The unique identifier of the list within the site / productID-ListType for example
    "list-type"?: string; // Product related / Category page / Cart upsell / etc
  };
  value?: number;
  step: number; // We collect events but not use it yet
  affiliation?: string;
  shipping?: number;
  tax?: number;
  "order-discounts"?: Discounts[];
  products?: Product[];
}
export interface Product {
  id: string;
  name: string;
  price: number;
  "variant-id"?: string; // In case you use variants such as size, color, etc
  "compare-at-price"?: number; // In case you show a before price higher than the current one
  quantity?: number; // Defaults to 1
  category?: string; // Product grouping by category or collection
  brand?: string; // Brand of the product
  position?: number; // Position in the list
  tags?: string[]; // Tags for the product, can be used to break down the products in the reports eventually
}

export interface EventPayload {
  eventType: string;
  Id?: string;
  createdAt?: string;
  customEventProperties?: { [key: string]: string } | string;
  standardEventProperties?: { [key: string]: string } | string;
  sourceId?: string;
  ecommerce?: Ecom;
}

export type StandardRegularEventTypes =
  | "init"
  | "before-unload"
  | "visibility-change"
  | "document-ready"
  | "pageview";

export type StandardEcomEventTypes =
  | "ecom-product-add-to-cart"
  | "ecom-product-remove-from-cart"
  | "ecom-product-list-view"
  | "ecom-product-list-click"
  | "ecom-product-detail-view"
  | "ecom-view-cart"
  | "ecom-begin-checkout"
  | "ecom-checkout-step"
  | "ecom-purchase";
// | "ecom-refund"
// | "ecom-add-to-wishlist"
// | "ecom-remove-from-wishlist";

export type StandardEventTypes =
  | StandardRegularEventTypes
  | StandardEcomEventTypes;
