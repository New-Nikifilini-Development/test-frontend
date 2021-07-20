import { makeAutoObservable } from "mobx";
import { SingleOrder } from "~/screens/Orders/Show/types";

export default class OrdersShowStore {
  order: SingleOrder | null = null;
  id: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }
}
