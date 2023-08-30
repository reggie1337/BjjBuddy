import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import ResponsiveAppBar from "./AppToolBar";
import DataGridDemo from "./DataGrid";
import { JournalEntry } from "../models/JournalEntry";

export default function App() {
  const currentDate = dayjs();
  const dateFormat = dayjs().format("MM-DD-YYYY");

  const [newTask, setNewTask] = useState<string>("");
  const [newTodos, setTodos] = useState<JournalEntry[]>([]);
  const [newDate, setNewDate] = useState<Dayjs | null>(null);

  function addTodo() {
    const trimmedTask = newTask.trim();
    if (!trimmedTask) {
      alert("Please Add Task");
      return;
    }
    const newTodo = {
      id: Math.random(),
      value: trimmedTask,
      date: newDate ?? currentDate,
    };
    setTodos((oldList) => [...oldList, newTodo]);
    setNewTask("");
  }

  function removeTodo(id: number) {
    setTodos((oldList) => oldList.filter((task) => task.id !== id));
  }

  return (
    <div className="app ">
      {/* <h1 className="appTitle">Training Journal</h1> */}
      <ResponsiveAppBar />
      <div className="page-container">
        <TextField
          className="textArea"
          variant="outlined"
          size="medium"
          type="text"
          label="notes"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            className="calender"
            label="when did you train?"
            value={newDate}
            onChange={(newValue) => setNewDate(newValue)}
          />
        </LocalizationProvider>
        <button className="add" onClick={() => addTodo()}>
          Add
        </button>
        <DataGridDemo rows={newTodos} removeTodosCallback={removeTodo} />
      </div>
    </div>
  );
}
