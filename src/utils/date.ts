import moment from "moment";

export function isSameDate(d1: Date, d2: Date): boolean {
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
}

export function isToday(date: Date): boolean {
  return isSameDate(date, new Date());
}

const getDay = (date: Date) => {
  let d = date.getDay() - 1;
  if (d === -1) d = 6;
  return d;
};

const getMonthDaysCount = (originalDate: Date): number => {
  const date = new Date(originalDate);
  let c = 28;
  const initialMonth = date.getMonth();
  while (date.getMonth() === initialMonth) {
    c++;
    date.setDate(c);
  }
  c--;
  return c;
};

export interface Day {
  number: number;
  date: Date;
  alien: boolean;
  today: boolean;
  selected: boolean;
}

export function buildCalendar(date: Date, value: Date | null): Day[][] {
  const weeks: Day[][] = [];
  const now = new Date();
  let tmpDate = new Date(date);

  tmpDate.setDate(1);
  const daysCount = getMonthDaysCount(date);

  tmpDate.setMonth(date.getMonth());
  tmpDate.setDate(1);

  let monthStart = getDay(tmpDate);

  tmpDate.setDate(daysCount);
  let monthEnd = getDay(tmpDate);
  const totalDaysCount = daysCount + monthStart + (6 - monthEnd);
  let wc = 0;
  let week: Day[] = [];
  for (let i = 0; i < totalDaysCount; i++) {
    let d = i - monthStart + 1;
    if (wc === 7) {
      weeks.push(week);
      week = [];
      wc = 0;
    }
    tmpDate = new Date(date);
    tmpDate.setDate(d);
    week.push({
      number: tmpDate.getDate(),
      date: new Date(tmpDate),
      alien: d <= 0 || d > daysCount,
      today: isSameDate(tmpDate, now),
      selected: value ? moment(tmpDate).isSame(value) : false,
    });
    wc++;
  }
  weeks.push(week);

  return weeks;
}
