import * as React from "react"
import { Routes, Route } from "react-router-dom"
import "./App.css"
import Exercise from "./exercise"
import Exercises from "./exercises"
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/exercise" exact element={<Exercise />} />
        <Route path="/" exact element={<Exercises />} />
      </Routes>
    </div>
  )
}
