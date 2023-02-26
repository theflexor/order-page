import React from "react"
import { Col, Form, Row } from "react-bootstrap"

export const Delivery = () => {
  return (
    <Form className="mt-[30px]  md:p-[30px] shadow-primary flex flex-col justify-between">
      <Form.Text className="text-[20px] text-[#333333] font-medium">
        Доставка
      </Form.Text>
      <Form.Text className="mt-[20px] text-[18px] font-medium">
        Способ доставки
      </Form.Text>
      <div className="flex flex-col gap-[22px] mt-[20px]">
        <div className="flex items-start md:items-center gap-[20px] flex-col  md:flex-row ">
          <Form.Check
            type="radio"
            aria-label="radio 1"
            label="Самовывоз"
            name="entity"
          />
          <span className="text-[#5178DC] text-[14px] cursor-pointer">
            режим работы магазина {">"}
          </span>
        </div>
        <div className="flex items-start md:items-center gap-[20px] flex-col  md:flex-row ">
          <Form.Check
            type="radio"
            aria-label="radio 1"
            label="Курьерская доставка"
            name="entity"
          />
          <span className="text-[#5178DC] text-[14px] cursor-pointer">
            условия доставки {">"}
          </span>
        </div>
      </div>
      <Form.Text className="my-[20px] text-[18px] font-medium">
        Адрес доставки
      </Form.Text>
      <Row className="flex flex-col justify-between gap-[30px]">
        <Row className="inputRow">
          <Col className="inputWrapper">
            <Form.Control className="inputStyle" />
            <label className="inputStyle_label">Страна</label>
          </Col>
          <Col className="inputWrapper">
            <Form.Control className="inputStyle" />
            <label className="inputStyle_label">Город</label>
          </Col>
        </Row>
        <Row className="inputRow">
          <Col className="inputWrapper">
            <Form.Control className="inputStyle" />
            <label className="inputStyle_label">Улица</label>
          </Col>
          <Col className="inputWrapper">
            <Form.Control className="inputStyle" type="email" />
            <label className="inputStyle_label">Квартира</label>
          </Col>
        </Row>
        <Row className="inputRow">
          <Col className="inputWrapper">
            <Form.Control className="inputStyle" />
            <label className="inputStyle_label">Дом</label>
          </Col>
          <Col></Col>
        </Row>
      </Row>
      <Form.Text className="my-[30px]">
        Указать домофон, этаж, подъезд и комментарий к адресу
      </Form.Text>
      <Row>
        <Col className="inputWrapper">
          <Form.Control className="inputStyle" />
          <label className="inputStyle_label">Комментарий</label>
        </Col>
      </Row>
    </Form>
  )
}
