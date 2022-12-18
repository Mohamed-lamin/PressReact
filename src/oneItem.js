import React, { useState } from "react"
import iconfalse from "./utils/iconfalse.png"
import icontrue from "./utils/icontrue.png"
function OneItem({ key, subject, vertoput, restofsentence, theverb }) {
  const [sh, setSh] = useState(false)
  const [shtr, setShtr] = useState(false)
  const [res, setRes] = useState("")
  const [test, setTest] = useState("")

  return (
    <div className="w-full ">
      <div
        className="w-full flex justify-around flex-row-reverse items-center my-2"
        key={key}
      >
        <span>{subject}</span>
        <span></span>
        <div className="flex flex-col items-center">
          <span>{test}</span>
          <span className="">
            <input
              className="border-2 border-blue-300 rounded text-center"
              onChange={
                test || sh || shtr
                  ? e => setTest("") & setSh(false) & setShtr(false)
                  : e => setRes(e.target.value)
              }
            />
            <span className="mr-2">{theverb}</span>
          </span>
        </div>

        <div>
          {sh && (
            <span>
              <img src={icontrue} alt="tr" width="30" height="30" />
            </span>
          )}
          {shtr && (
            <span>
              <img src={iconfalse} alt="fal" width="30" height="30" />
            </span>
          )}
        </div>

        <span>{restofsentence}</span>
        <div className=" h-24 flex w-14 flex-col justify-between items-stretch">
          <button
            className="bg-blue-300 w-full rounded-full hover:bg-white hover:border-2 hover:border-blue-300  "
            onClick={() =>
              res !== vertoput
                ? setSh(false) & setShtr(true)
                : setSh(true) & setShtr(false)
            }
          >
            Check
          </button>
          <button
            className="bg-blue-300 w-full rounded-full hover:bg-white hover:border-2 hover:border-blue-300  "
            onClick={() => setTest(vertoput)}
          >
            Show
          </button>
        </div>
      </div>
    </div>
  )
}

export default OneItem
