import { Dayjs } from "dayjs";

export type JournalEntry = {
  id: number;
  value: string;
  date: Dayjs;
};
