import React, { useState, useEffect } from "react"

import { Link } from "react-router-dom"

function Exercices() {
  const [myData, setMyData] = useState([])
  async function test() {
    const post = await fetch("https://perfect-english-foryou.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `{
                tags {
                  nodes {
                    name
                    posts {
                      nodes {
                        id
                        title
                        content
                      }
                    }
                  }
                }
              }`,
      }),
    })
    const res = await post.json()

    const res2 = await res.data.tags.nodes

    setMyData(res2)
  }
  useEffect(() => {
    test()
  }, [])

  return (
    <div>
      <div className="container px-0 mx-auto w-11/12 " dir="rtl">
        <h1 className="text-xl font-bold text-center mb-10 text-blue-900">
          Exercises - تمارين
        </h1>
        {myData?.map((item, index) => (
          <div key={index} className="text-right">
            <h1 className="text-xs md:text-base font-bold mx-10 mt-10 mb-3">
              {item.name}
            </h1>

            {item.posts.nodes.map((itemsub, index) => (
              <ul className=" mr-14 md:mr-20 list-disc">
                <li className="m-1">
                  <Link
                    to="/exercise"
                    state={{ content: itemsub.content }}
                    key={index}
                  >
                    {itemsub.title}
                  </Link>
                </li>
              </ul>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Exercices
