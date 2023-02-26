import { Dropdown, Form, Navbar } from "react-bootstrap"
import { ReactSearchAutocomplete } from "react-search-autocomplete"

import {
  basketIcon,
  catalogIcon,
  logoIcon,
  searchIcon,
  userIcon,
} from "../../assets"

export const SearchBar = ({ products }: { products: number }) => {
  const items = [
    {
      id: 0,
      name: "graphic card",
    },
    {
      id: 1,
      name: "geforce rtx 4090 24g",
    },
    {
      id: 2,
      name: "samsung 970evo 1tb",
    },
    {
      id: 3,
      name: "asus rog g15 rtx3060",
    },
    {
      id: 4,
      name: "iphone 14 pro max 256gb",
    },
    {
      id: 5,
      name: "samsung s23 512gb",
    },
  ]

  const formatResult = (item: any) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>
          id: {item?.id}
        </span>
        <span style={{ display: "block", textAlign: "left" }}>
          name: {item?.name}
        </span>
      </>
    )
  }

  return (
    <div className="container">
      <Navbar bg="light gap-[5px] bg-white flex-wrap  justify-content-between sm:gap-[30px]">
        <Navbar.Brand href="#home">
          <img className="h-full" src={logoIcon} alt="" />
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
        <Form className="flex-1 relative order-md-0 order-1 w-full z-50 min-w-[300px] ">
          <img
            src={searchIcon}
            className="absolute z-50 top-[17px] left-[22px]"
            alt=""
          />
          <ReactSearchAutocomplete
            styling={{
              borderRadius: "5px",
              backgroundColor: "#F6F6F6",
              border: "1px solid #E6E6E6",
              height: "48px"
            }}
            items={items}
            autoFocus
            showIcon={false}
            formatResult={formatResult}
          />
        </Form>
        <div className="flex gap-[16px]">
          <button className="hover:bg-[#EA5A5A] relative duration-200 border-1 border-[#3b3131] bg-[#F7F7F7] border-solid rounded-[5px] h-[48px] w-[48px] flex justify-center items-center">
            <img src={basketIcon} alt="" />
            <span className="absolute z-40 bg-[#E11E26] right-7 top-6 text-white text-[10px] w-[13px] h-[13px] flex justify-center items-center   rounded-full ">
              {products}
            </span>
          </button>
          <button className="hover:bg-[#EA5A5A] duration-200 border-1 border-[#E6E6E6] bg-[#F7F7F7] border-solid rounded-[5px] h-[48px] w-[48px] flex justify-center items-center">
            <img src={userIcon} alt="" />
          </button>
        </div>
      </Navbar>
    </div>
  )
}
