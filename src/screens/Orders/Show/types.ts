export type Product = {
  id: number;
  externalId: string;
  offers: Offer[];
};

export type Offer = {
  id: number;
  externalId: string;
  images: string[];
  name: string;
};

export interface RetailItem extends SingleOrderItem {
  info: RetailItemInfo;
}

export interface RetailItemInfo {
  status: string;
  lastUpdateBy: string;
  lastUpdateDate: string;
  container: string;
  brakComment: string;
  assemblyStartDate?: string;
}

export interface SingleOrderItem {
  id: number;
  quantity: number;
  properties: {
    [key: string]: {
      code: string;
      name: string;
      value: string;
    };
  };
  offer: {
    name: string;
    displayName: string;
    externalId: string;
    article: string;
    id: number;
  };
  customFields: {
    ini: string;
  };
}

export interface SingleOrder {
  id: number;
  number: string;
  status: string;
  delivery: {
    code: string;
  };
  items: SingleOrderItem[];
  customFields: {
    assemblyStatus: boolean;
    packingStatus: boolean;
    ini?: string;
  };
}
