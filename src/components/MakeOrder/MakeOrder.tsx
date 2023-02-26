import React from "react"
import { Col, Form, Row } from "react-bootstrap"

export const MakeOrder = () => {
  return (
    <Form className=" mt-[30px]  md:p-[30px] shadow-primary flex flex-col justify-between gap-[30px]">
      <Form.Text className="text-[20px] text-[#333333] font-medium">
        Оформление заказа
      </Form.Text>
      <Row className="inputRow">
        <Col className="inputWrapper">
          <Form.Control className="inputStyle" />
          <label className="inputStyle_label">Имя</label>
        </Col>
        <Col className="inputWrapper">
          <Form.Control className="inputStyle" />
          <label className="inputStyle_label">Фамилия</label>
        </Col>
      </Row>
      <Row className="inputRow">
        <Col className="flex gap-[15px]">
          <div className="inputWrapper w-full">
            <Form.Control className="inputStyle" />
            <label className="inputStyle_label">Телефон</label>
          </div>
          <div className=" w-[71px] relative">
            <Form.Control  className="inputStyle" />
            <label className="inputStyle_label_phone ">Доб.</label>
          </div>
        </Col>
        <Col className="inputWrapper">
          <Form.Control className="inputStyle" type="email" />
          <label className="inputStyle_label">E-mail</label>
        </Col>
      </Row>
      <Row className="inputRow">
        <Col className="inputWrapper">
          <Form.Control className="inputStyle" />
          <label className="inputStyle_label">Доп телефон или whatsapp</label>
        </Col>
        </Row>
    </Form>
  )
}
