import { makeAutoObservable } from "mobx";
import { SingleOrder } from "~/screens/Orders/Show/types";

export default class OrdersShowStore {
  order: SingleOrder | null = null;
  id: string | null = null;
  initialized: boolean;
  loading: boolean;

  constructor() {
    makeAutoObservable(this);
  }

  async loadOrders() {
    this.loading = true;
    this.loading = false;
  }

  setOrder(order: SingleOrder) {
    this.order = order
  } 

  initialize() {
    if (this.initialized) return;
    this.initialized = true;
    this.loadOrders();
  }
}
