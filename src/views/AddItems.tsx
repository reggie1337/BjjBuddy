import { useState } from "react";
import * as React from "react";
import { TextField } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { JournalEntry } from "../models/JournalEntry";

interface Item {
  item?: string;
  addJournalEntryCallBack: (newEntry: JournalEntry) => void;
}

const AddJournalEntry: React.FC<Item> = ({ addJournalEntryCallBack }) => {
  const currentDate = dayjs();
  const dateFormat = dayjs().format("MM-DD-YYYY");
  const [newEntry, setNewEntry] = useState<string>("");
  const [newDate, setNewDate] = useState<Dayjs | null>(null);

  const flagMissingEntry = () => {
    const trimmedEntry = newEntry.trim();
    if (!trimmedEntry) {
      alert("Please Add Entry");
      return;
    }

    const newJournalItem = {
      id: Math.random(),
      value: trimmedEntry,
      date: newDate ?? currentDate,
    };

    addJournalEntryCallBack(newJournalItem);

    setNewEntry("");
    setNewDate(null);
  };
  return (
    <>
      <TextField
        className="textArea"
        variant="outlined"
        size="medium"
        type="text"
        label="notes"
        value={newEntry}
        onChange={(e) => setNewEntry(e.target.value)}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          className="calender"
          label="when did you train?"
          value={newDate}
          onChange={(newValue) => setNewDate(newValue)}
        />
      </LocalizationProvider>
      <button className="add" onClick={flagMissingEntry}>
        Add
      </button>
    </>
  );
};

export default AddJournalEntry;
