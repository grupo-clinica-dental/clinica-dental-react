import dayjs from 'dayjs';

export function getMonth(month = dayjs().month()) {
  month = Math.floor(month);
  // month number from 0 and 11
  const year = dayjs().year(); // represents current year
  const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day(); // this accepts year, month and the day of the mont
  // day gives you an index of the day of the week from 0 to 6
  let currentMonthCount = 0 - firstDayOfTheMonth; // if it was wednesday it would be -3

  // new date -1 does not throw error it will return an object that represents the month before

  // for example lets say you have the value of 44 in the day it will finish in the month param and count up to the next up until that number

  const daysMatrix = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return dayjs(new Date(year, month, currentMonthCount));
    });
  });

  return daysMatrix;
  // rows = 5 fill with array with every day of the week
}
