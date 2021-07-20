import { makeAutoObservable } from "mobx";
import { Day, buildCalendar } from "~/utils/date";
import moment from "moment";

type DateChangeCallback = (date: string | null) => void;

export const format = "DD.MM.YYYY";

export default class DatePickerState {
  selectedDate: Date | null = null;
  monthAnchor: Date = new Date();
  calendar: Day[][] = [];
  changeCallback: null | DateChangeCallback = null;
  text: string = "";

  constructor() {
    makeAutoObservable(this);
    // this.calendar = buildCalendar(new Date(), this.selectedDate);
  }

  updateText(): void {
    this.text = moment(this.monthAnchor).format("MMMM YYYY");
  }

  updateCalendar(): void {
    if (this.selectedDate) {
      this.calendar = buildCalendar(
        new Date(this.monthAnchor),
        new Date(this.selectedDate)
      );
    } else {
      this.calendar = buildCalendar(this.monthAnchor, null);
    }
    this.updateText();
  }

  setCallback(callback: null | DateChangeCallback): void {
    console.log("Setting callback", callback);
    this.changeCallback = callback;
  }

  setDate(date: Date | null): void {
    this.selectedDate = date;
    if (date) this.monthAnchor = date;
    if (date) this.updateCalendar();
    console.log("Before cllback", moment(date).format(format));
    if (this.changeCallback) {
      this.changeCallback(moment(date).format(format));
      console.log("Calling cllback", moment(date).format(format));
    }
  }

  nextMonth(): void {
    this.monthAnchor.setMonth(this.monthAnchor.getMonth() + 1);
    this.updateCalendar();
  }

  prevMonth(): void {
    this.monthAnchor.setMonth(this.monthAnchor.getMonth() - 1);
    this.updateCalendar();
  }
}
