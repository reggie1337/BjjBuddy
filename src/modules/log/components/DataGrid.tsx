import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { type JournalEntry } from '../types/JournalEntry';
import JournalModal from './Modal';

interface Props {
    rows: JournalEntry[];
    removeTodosCallback: (id: number) => void;
}

const DataGridDemo: React.FC<Props> = ({ rows, removeTodosCallback }) => {
    const columns: GridColDef[] = [
        {
            field: 'value',
            headerName: 'To Do',
            width: 300,
            editable: false,
        },
        {
            field: 'date',
            width: 250,
            headerName: 'Date',
            editable: false,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 300,
            editable: false,
            sortable: false,
            align: 'left',
            filterable: false,
            renderCell: params => {
                const removeTodo = (e: any): void => {
                    e.stopPropagation();
                    removeTodosCallback(params.row.id);
                };
                return (
                    <>
                        {/* <button className="enter">Open</button> */}
                        <JournalModal />
                        <button className="enter" onClick={removeTodo}>
                            Delete
                        </button>
                        {/* add archive function and send to archive pages */}
                        <button className="enter">Archive</button>
                    </>
                );
            },
        },
    ];

    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </Box>
    );
};

export default DataGridDemo;
