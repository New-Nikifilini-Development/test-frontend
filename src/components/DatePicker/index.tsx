import React from "react";
import ReactDOM from "react-dom";
import { observer } from "mobx-react-lite";
import {
  format,
  default as DatePickerState,
} from "components/DatePicker/store";
import moment from "moment";
import styles from "./styles.m.styl";
import classNames from "classnames";
import AngleLeftIcon from "assets/icons/angle-left-solid.svg";
import AngleRightIcon from "assets/icons/angle-right-solid.svg";

interface Props {
  date?: string;
  onChange?: (date: string | null) => void;
  triggerRef?: React.RefObject<HTMLElement>;
}

const isCorrectFormat = (dateString: string): boolean => {
  return moment(dateString, format, true).isValid();
};

const DatePicker = observer(
  ({ date, onChange, triggerRef }: Props, ref): JSX.Element => {
    const [state] = React.useState(new DatePickerState());
    const [element] = React.useState(document.createElement("div"));

    const dayNames = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

    React.useEffect(() => {
      state.updateCalendar();
      if (date && isCorrectFormat(date)) {
        const newDate = moment(date, format).toDate();
        if (!moment(newDate).isSame(state.selectedDate)) state.setDate(newDate);
      }
      if (onChange) state.setCallback(onChange);
    }, [state, date, onChange]);

    React.useEffect(() => {
      const modalsElement = document.querySelector("#modals");
      if (!modalsElement) return;
      modalsElement.appendChild(element);
    });

    return ReactDOM.createPortal(
      <div
        className={styles.wrapper}
        ref={ref as React.LegacyRef<HTMLDivElement>}
      >
        <div className={styles.head}>
          <AngleLeftIcon onClick={() => state.prevMonth()} />
          {state.text}
          <AngleRightIcon onClick={() => state.nextMonth()} />
        </div>
        <div>
          <div
            className={classNames({
              [styles.week]: true,
              [styles.weekdays]: true,
            })}
          >
            {dayNames.map((name) => (
              <div className={styles.day}>{name}</div>
            ))}
          </div>
          {state.calendar.map((week) => (
            <div className={styles.week}>
              {week.map((day) => (
                <div
                  className={classNames({
                    [styles.day]: true,
                    [styles.alien]: day.alien,
                    [styles.selected]: day.selected,
                    [styles.today]: day.today,
                  })}
                  onClick={() => state.setDate(day.date)}
                >
                  {day.number}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>,
      element
    );
  },
  { forwardRef: true }
);

export default DatePicker;
