import React, { useState, type FC, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { type JournalEntry } from '../types/JournalEntry';
import { type Dayjs } from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';

interface Props {
    item: JournalEntry;
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const EditItemModal: FC<Props> = ({ item }) => {
    const [open, setOpen] = React.useState(false);
    const [newDate, setNewDate] = useState<Dayjs | null>(null);
    const [newEntry, setNewEntry] = useState<string>('');

    useEffect(() => {
        setNewDate(item.date);
        setNewEntry(item.value);
    }, [item]);

    const handleOpen = (): void => {
        setOpen(true);
    };
    const handleClose = (): void => {
        setOpen(false);
    };

    return (
        <div className="enter">
            <Button onClick={handleOpen}>Open</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Journal Entry
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
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
                        <DatePicker
                            className="calender"
                            label="when did you train?"
                            value={newDate}
                            onChange={newValue => {
                                setNewDate(newValue);
                            }}
                        />
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
};

export default EditItemModal;
