export type StringBool = "true" | "false";

export type OrdersListItem = {
  id: number;
  number: number;
  site: string;
  createdAt: string;
  delivery?: {
    code: string;
  };
  status: string;
  customFields?: {
    packing_status: StringBool;
    packing_count: number;
    assembly_status: StringBool;
    assembly_count: number;
  };
};

export type OrdersQueryData = {
  orders: {
    nodes: OrdersListItem[];
    meta: {
      pageCount: number;
    };
  };
};

export interface OrdersListGqlFilter {
  numbers?: String[];
  extendedStatus?: String[];
  deliveryTypes?: String[];
  createdAtFrom?: String;
  createdAtTo?: String;
  customFields?: {
    assembly_status?: String;
    packing_status?: String;
  };
}
