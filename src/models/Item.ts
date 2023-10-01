import AddJournalEntry from "../views/AddItems";
import { JournalEntry } from "./JournalEntry";

export interface Item {
  AddJournalEntryCallback: (newEntry: JournalEntry) => void;
}
