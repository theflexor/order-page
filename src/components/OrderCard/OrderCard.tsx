import React from "react"
import { Button } from "react-bootstrap"  

export const OrderCard = () => {
  return (
    <div className="rounded-[5px] p-7 mt-[0px] lg:mt-[60px] sticky top-[22%] shadow-primary">
      <h1 className="text-[20px] font-medium">Стоимость заказа</h1>
      <ul className=" my-[30px] flex flex-col gap-[20px] ">
        <li className="flex justify-between items-center">
          <span>Товары(3)</span>
          <strong>1200с</strong>
        </li>
        <li className="flex justify-between items-center">
          <span>Доставка</span>
          <strong>Бесплатно</strong>
        </li>
      </ul>
      <hr />
      <div className="flex justify-between items-center my-[30px]">
        <strong>Итого</strong>
        <strong className="text-[#EA5A5A]">1200с</strong>
      </div>
      <button className="w-full h-[60px] bg-[#EA5A5A] rounded-[5px] text-white">
        Подтвердить заказ
      </button>
      <p className=" max-w-[332px] text-center mt-[30px]">
        Подтверждая заказ, я принимаю условия{" "}
        <span className="text-[#659FF6]">пользовательского соглашения</span>
      </p>
    </div>
  )
}
