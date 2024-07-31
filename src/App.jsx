import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home.jsx";
import Navbar from "./components/Navbar";
import { Task1 } from "./tasks/Task1";
import { Task2 } from "./tasks/Task2";
import { Task3 } from "./tasks/Task3";
import { Task4 } from "./tasks/Task4";
import { Task5 } from "./tasks/Task5";
import { Task6 } from "./tasks/Task6";
import { Task7 } from "./tasks/Task7";
import { Task8 } from "./tasks/Task8";
import { Task9 } from "./tasks/Task9";
import { Task10 } from "./tasks/Task10";
import { Task11 } from "./tasks/Task11.jsx";
import { Task12 } from "./tasks/Task12.jsx";
import { Task13 } from "./tasks/Task13.jsx";
import { T1 } from "./components/T1.jsx";
import { Clock } from "./tasks/Clock.jsx";
import { FormExample } from "./tasks/FormExample.jsx";

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
  { href: "/task10", item: "Task 10" },
  { href: "/task11", item: "Task 11" },
  { href: "/task12", item: "Task 12" },
  { href: "/task13", item: "Task 13" },
  { href: "/task14", item: "Task 14" },
  { href: "/task15", item: "Clock" },
  { href: "/form", item: "Form" },
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
          <Route path="/task10" element={<Task10 />} />
          <Route path="/task11" element={<Task11 />} />
          <Route path="/task12" element={<Task12 />} />
          <Route path="/task13" element={<Task13 />} />
          <Route path="/task14" element={<T1 />} />
          <Route path="/task15" element={<Clock />} />
          <Route path="/form" element={<FormExample />} />
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
