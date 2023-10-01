import React, { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import ResponsiveAppBar from "./AppToolBar";
import DataGridDemo from "./DataGrid";
import { JournalEntry } from "../models/JournalEntry";
import AddJournalEntry from "./AddItems";

export default function App() {
  const currentDate = dayjs();
  const dateFormat = dayjs().format("MM-DD-YYYY");

  const [journalEntries, setJournalEntries] = useState<JournalEntry[]>([]);
  // const [newEntries, setEntries] = useState<JournalEntry[]>([]);
  // const [newDate, setNewDate] = useState<Dayjs | null>(null);
  // bubble function that calls back to the AddItems file
  const AddJournalEntryCallback = (newEntry: JournalEntry) => {
    setJournalEntries((prevEntries) => [...prevEntries, newEntry]);
  };
  // bubble function that calls back to the DataGrid file
  function removeEntry(id: number) {
    setJournalEntries((oldList) =>
      oldList.filter((journalEntries) => journalEntries.id !== id)
    );
  }

  return (
    <div className="app">
      {/* <h1 className="appTitle">Training Journal</h1> */}
      <ResponsiveAppBar />
      <div className="page-container">
        <AddJournalEntry addJournalEntryCallBack={AddJournalEntryCallback} />
        {/* <button className="add" onClick={() => AddJournalEntry()}>
          Add
        </button> */}
        <DataGridDemo rows={journalEntries} removeTodosCallback={removeEntry} />
      </div>
    </div>
  );
}
