import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home.jsx";
import Navbar from "./Navbar";
import { Task1 } from "./Task1";
import { Task2 } from "./Task2";
import { Task3 } from "./Task3";
import { Task4 } from "./Task4";
import { Task5 } from "./Task5";
import { Task6 } from "./Task6";
import { Task7 } from "./Task7";
import { Task8 } from "./Task8";
import { Task9 } from "./Task9";

const info = { model: "Grand i10", brand: "Hyundai" };
const students = [
  { name: "KYC", T1: 120, T2: 110 },
  { name: "YBC", T1: 122, T2: 120 },
];
const links = [
  { href: "/", item: "Home" },
  { href: "/task1", item: "Task 1" },
  { href: "/task2", item: "Task 2" },
  { href: "/task3", item: "Task 3" },
  { href: "/task4", item: "Task 4" },
  { href: "/task5", item: "Task 5" },
  { href: "/task6", item: "Task 6" },
  { href: "/task7", item: "Task 7" },
  { href: "/task8", item: "Task 8" },
  { href: "/task9", item: "Task 9" },
];

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar links={links} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/task1" element={<Task1 />} />
          <Route
            path="/task2"
            element={<Task2 name="KYC" rollNo={9} branch="CST" {...info} />}
          />
          <Route path="/task3" element={<Task3 />} />
          <Route path="/task4" element={<Task4 />} />
          <Route path="/task5" element={<Task5 />} />
          <Route path="/task6" element={<Task6 />} />
          <Route path="/task7" element={<Task7 />} />
          <Route path="/task8" element={<Task8 />} />
          <Route path="/task9" element={<Task9 students={students} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
      {/* <Home />
      <Task1 />
      <Task2 name="KYC" rollNo={9} branch="CST" {...info} /> 
      <Task3 />
      <Task4 />
      <Task5 />
      <Task6 /> */}
    </>
  );
}

export default App;
