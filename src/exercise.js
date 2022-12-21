import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

import OneItem from "./oneItem"
import HtmlTableToJson from "html-table-to-json"
function Exercise(props) {
  const [table, setTable] = useState([])
  const location = useLocation()
  const { content, itemname } = location.state

  useEffect(() => {
    setTable(HtmlTableToJson.parse(content).results[0])
  }, [])
  return (
    <>
      <div className="w-full " dir="rtl">
        <h1 className="text-xl font-bold text-blue-600">{itemname}</h1>
        <div>
          {table.map((item, index) => (
            <div key={index}>
              <OneItem
                key={item.index}
                subject={item.subject}
                vertoput={item.vertoput}
                restofsentence={item.restofsentence}
                theverb={item.theverb}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Exercise
