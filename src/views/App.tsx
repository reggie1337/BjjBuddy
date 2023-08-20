import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import ResponsiveAppBar from "./AppToolBar";

export default function App() {
  const currentDate = dayjs();
  const dateFormat = dayjs().format("YYYY_MM_DD");

  const [newTask, setNewTask] = useState<string>("");
  const [newTodos, setTodos] = useState<{ id: number; value: string }[]>([]);
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
    };
    setTodos((oldList) => [...oldList, newTodo]);
    setNewTask("");
  }

  function removeTodo(newTodo: { id: number; value: string }) {
    setTodos((oldList) => oldList.filter((task) => task.id !== newTodo.id));
  }

  return (
    <div className="app">
      {/* <h1 className="appTitle">Training Journal</h1> */}
      <ResponsiveAppBar />
      <Input
        className="textArea"
        size="medium"
        type="text"
        placeholder="notes"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          className="calander"
          label="when did you train?"
          value={newDate}
          onChange={(newValue) => setNewDate(newValue)}
        />
      </LocalizationProvider>
      <button className="add" onClick={() => addTodo()}>
        Add
      </button>
      {/* <div
        style={{
          margin: 10,
        }}
      >
        <Link to={"/home"}>
          <button className="enter" type="button">
            Home
          </button>
        </Link>
      </div> */}

      <ul>
        {" "}
        {newTodos.map((newTodo) => {
          return (
            <li key={newTodo.id}>
              {newTodo.value}
              {newDate !== null && (
                <ul>
                  <li> Date: {newDate.format("YYYY-MM-DD")}</li>
                </ul>
              )}
              <button className="enter" onClick={() => removeTodo(newTodo)}>
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
