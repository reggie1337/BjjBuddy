import React, { useState } from 'react';
import ResponsiveAppBar from '../../../shared/components/AppToolBar';
import DataGridDemo from '../components/DataGrid';
import { type JournalEntry } from '../types/JournalEntry';
import AddJournalEntry from '../components/AddItems';

export default function App(): JSX.Element {
    const [journalEntries, setJournalEntries] = useState<JournalEntry[]>([]);
    // const [newEntries, setEntries] = useState<JournalEntry[]>([]);
    // const [newDate, setNewDate] = useState<Dayjs | null>(null);
    // bubble function that calls back to the AddItems file
    const AddJournalEntryCallback = (newEntry: JournalEntry): void => {
        setJournalEntries(prevEntries => [...prevEntries, newEntry]);
    };
    // bubble function that calls back to the DataGrid file
    function removeEntry(id: number): void {
        setJournalEntries(oldList => oldList.filter(journalEntries => journalEntries.id !== id));
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
