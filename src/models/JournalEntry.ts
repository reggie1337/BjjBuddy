import { Dayjs } from "dayjs";

export interface JournalEntry {
  id: number;
  value: string;
  date: Dayjs;
}
