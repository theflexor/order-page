import React from "react"
import { Form } from "react-bootstrap"

export const Entity = () => {
  return (
    <Form className="mt-[30px] p-[10px] md:p-[30px] shadow-primary flex flex-col justify-between">
      <Form.Text className="text-[20px] text-[#333333] font-medium">
        Я
      </Form.Text>
      <Form.Check
        type="radio"
        aria-label="radio 1"
        label="Физическое лицо"
        name="entity"
        className="mt-[30px] mb-[22px]"
      />
      <Form.Check
        type="radio"
        aria-label="radio 1"
        label="Юридическое лицо"
        name="entity"
      />
    </Form>
  )
}
