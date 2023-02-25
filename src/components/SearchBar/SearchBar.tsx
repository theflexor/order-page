import React from "react"
import {
  Button,
  Dropdown,
  Form,
  Navbar,
  NavDropdown,
  Row,
} from "react-bootstrap"

import {
  basketIcon,
  catalogIcon,
  logoIcon,
  rrr,
  searchIcon,
  userIcon,
} from "../../assets"

export const SearchBar = () => {
  return (
    <div className="container">
      <Navbar bg="light gap-[5px] bg-white flex-wrap  justify-content-between sm:gap-[30px]">
        <Navbar.Brand href="#home">
          <img src={logoIcon} alt="" />
        </Navbar.Brand>
        <Dropdown>
          <Dropdown.Toggle
            variant="danger d-flex align-items-center bg-[#F8F0F0] text-[#E11E26] h-[48px] rounded-[5px]  border-0"
            id="dropdown-basic"
          >
            <img src={catalogIcon} alt="" className="mr-[7px]" />
            <span className="mr-[7px]">Каталог</span>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Form className="d-flex flex-1 relative order-md-0 order-1 w-full min-w-[300px]">
          <img
            src={searchIcon}
            className="absolute left-[22px] top-[15px] cursor-pointer"
            alt=""
          />
          <Form.Control
            type="search"
            placeholder="Найти товар"
            className="me-2 pl-[48px] text-[#333333] bg-[#F6F6F6] border-1 border-[#E6E6E6] border-solid h-[48px]"
            aria-label="Найти товар"
          />
        </Form>
        <div className="flex gap-[16px]">
          <button className='hover:bg-[#EA5A5A] duration-200 border-1 border-[#E6E6E6] bg-[#F7F7F7] border-solid rounded-[5px] h-[48px] w-[48px] flex justify-center items-center'>
            <img src={basketIcon} alt="" />
          </button>
          <button className='hover:bg-[#EA5A5A] duration-200 border-1 border-[#E6E6E6] bg-[#F7F7F7] border-solid rounded-[5px] h-[48px] w-[48px] flex justify-center items-center'>
            <img src={userIcon} alt="" />
          </button>
        </div>
      </Navbar>
    </div>
  )
}
