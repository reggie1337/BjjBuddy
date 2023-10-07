import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import dayjs, { type Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { type JournalEntry } from '../types/JournalEntry';

interface AddJournalEntryProps {
    addJournalEntryCallBack: (newEntry: JournalEntry) => void;
}

const AddJournalEntry: React.FC<AddJournalEntryProps> = ({ addJournalEntryCallBack }) => {
    const currentDate = dayjs();
    const [newEntry, setNewEntry] = useState<string>('');
    const [newDate, setNewDate] = useState<Dayjs | null>(null);

    const handleAddEntry = (): void => {
        const trimmedEntry = newEntry.trim();
        if (!trimmedEntry) {
            alert('Please Add Entry');
            return;
        }

        const newJournalItem: JournalEntry = {
            id: Math.random(),
            value: trimmedEntry,
            date: newDate ?? currentDate,
        };

        addJournalEntryCallBack(newJournalItem);

        setNewEntry('');
        setNewDate(null);
    };

    return (
        <div className="item-form">
            <TextField
                variant="outlined"
                size="medium"
                type="text"
                label="notes"
                value={newEntry}
                onChange={e => {
                    setNewEntry(e.target.value);
                }}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    className="calender"
                    label="when did you train?"
                    value={newDate}
                    onChange={newValue => {
                        setNewDate(newValue);
                    }}
                />
            </LocalizationProvider>
            <Button className="enter" onClick={handleAddEntry}>
                Add
            </Button>
        </div>
    );
};

export default AddJournalEntry;
