import React, { useState } from "react"
import { Button, Collapse, Row } from "react-bootstrap"
import Table from "react-bootstrap/esm/Table"

import { scopeTop, xIcon } from "../../assets"

interface IProduct {
  image: string
  title: string
  article: string
  count: number
  price: number
  action?: number
}

let lists: IProduct[] = [
  {
    image: "/src/assets/Rectangle 3207-1.png",
    title: "Lorem ipsum dolor sit amet consectetur. Duis",
    article: "L434-GH43",
    count: 0,
    price: 300,
  },
  {
    image: "/src/assets/Rectangle 3207-2.png",
    title: "Lorem ipsum dolor sit amet consectetur. Duis",
    article: "L434-GH43",
    count: 0,
    price: 300,
  },
  {
    image: "/src/assets/Rectangle 3207.png",
    title: "Lorem ipsum dolor sit amet consectetur. Duis",
    article: "L434-GH43",
    count: 0,
    price: 300,
    action: 10000,
  },
]

export const OrderList = () => {
  const [open, setOpen] = useState(false)
  console.log(open)

  return (
    <Row>
      <div className="flex justify-between h-[60px] mt-[60px] mb-[10px] rounded-[5px] px-[30px] items-center shadow-primary">
        <p className=" text-[20px]">Корзина (3)</p>
        <button
          className="bg-[#F6F6FC] rounded-full h-[30px] w-[30px] flex items-center justify-center duration-200 hover:bg-[#EA5A5A] border-0 active:bg-[#EA5A5A]"
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          <img
            src={scopeTop}
            alt=""
            className={`${
              open ? "rotate-0" : "rotate-180"
            } transition-all duration-200`}
          />
        </button>
      </div>
      <Collapse in={open} dimension="height">
        <div className="example-collapse-text rounded-[5px] shadow-primary">
          <div className="px-[0px] md:p-[30px]">
            <Table className=" tableList">
              <thead>
                <tr>
                  <th>Фото</th>
                  <th>Название</th>
                  <th>Артикул</th>
                  <th>Кол-во</th>
                  <th>Цена</th>
                </tr>
              </thead>
              <tbody>
                {lists.map((item) => (
                  <tr className="align-middle h-[140px]">
                    <td>
                      <div>
                        <img src={item.image} alt="" />
                      </div>
                    </td>
                    <td>
                      {item.title}
                      <p className="hidden">Артикул:{item.article}</p>
                    </td>
                    <td>{item.article}</td>
                    <td>
                      <div className="bg-[#F7F7F7] rounded-[5px] flex justify-around items-center flex-col md:flex-row">
                        <button>-</button>
                        {item.count}
                        <button>+</button>
                      </div>
                    </td>
                    <td>
                      {item.action ? (
                        <p className="flex flex-col md:flex-row">
                          <span
                            style={{
                              color: item.action && "#f00",
                              marginRight: "4px",
                            }}
                          >
                            {item.action}c
                          </span>
                          <span
                            style={{
                              textDecoration: "line-through",
                              fontSize: "13px",
                              color: "gray",
                            }}
                          >
                            {item.price}c
                          </span>
                        </p>
                      ) : (
                        item.price
                      )}
                    </td>
                    <td>x</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </Collapse>
    </Row>
  )
}
