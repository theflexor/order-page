import React, { useState } from "react"
import {  Collapse, Row } from "react-bootstrap"
import Table from "react-bootstrap/esm/Table"

import { IProduct } from "../../App"
import { scopeTop, xIcon } from "../../assets"

interface IorderList {
  deleteProduct: (id: number) => void
  increaseProduct: (id: number) => void
  decreaseProduct: (id: number) => void
  products: IProduct[]
}

export const OrderList: React.FC<IorderList> = ({
  deleteProduct,
  increaseProduct,
  decreaseProduct,
  products,
}) => {
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
      <Collapse in={open} dimension="height" className="p-0">
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
                {products.map((item) => (
                  <tr key={item.id} className="align-middle h-[140px]">
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
                        <button onClick={() => decreaseProduct(item.id)}>
                          -
                        </button>
                        {item.count}
                        <button onClick={() => increaseProduct(item.id)}>
                          +
                        </button>
                      </div>
                    </td>
                    <td>
                      {item.action ? (
                        <p className="flex flex-col md:flex-row">
                          <span
                            className={`${
                              item.action ? "text-[#f00000] mr-[4px]" : ""
                            }`}
                          >
                            {item.action * item.count}c
                          </span>
                          <span
                            style={{
                              textDecoration: "line-through",
                              fontSize: "13px",
                              color: "gray",
                            }}
                          >
                            {item.price }c
                          </span>
                        </p>
                      ) : (
                        item.price * item.count
                      )}
                    </td>
                    <td className="relative">
                        <img
                          src={xIcon}
                          className="cursor-pointer absolute flex top-[65px] w-[12px] h-[12px]"
                          onClick={() => deleteProduct(item.id)}
                          alt=""
                        />
                    </td>
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
