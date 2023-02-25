import { Dropdown } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Offcanvas from "react-bootstrap/Offcanvas"

import classNames from "classnames"

import { emailLogo, phoneLogo } from "../../assets/index"

export const Menu = () => {
  return (
    <>
      <Navbar key={"lg"} bg="light" expand={"lg"} className="mb-3">
        <Container>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${"lg"}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${"lg"}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${"lg"}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${"lg"}`}>
                Offcanvass
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-start flex-grow-1 pe-3">
                <Nav.Link href="#action1">Каталог</Nav.Link>
                <Nav.Link href="#action2">Акции</Nav.Link>
                <Nav.Link href="#action2">Популярные товары</Nav.Link>
                <Nav.Link href="#action2">Новинки</Nav.Link>
                <Nav.Link href="#action2">Новости</Nav.Link>
                <Nav.Link href="#action2">О компании</Nav.Link>
                <Nav.Link href="#action2">Контакты</Nav.Link>
              </Nav>
              <div className="flex gap-[30px] text-[14px]">
                <p className="flex justify-center items-center gap-[5px]">
                  <img src={emailLogo} alt="email" /> info@Kanzler.kg
                </p>
                <p
                  style={{ textDecoration: "underline red 1px" }}
                  className="flex justify-center items-center gap-[5px]"
                >
                  <Dropdown>
                    <Dropdown.Toggle
                      className=" flex items-center gap-[7px] text-[14px] font-light"
                      variant=""
                      id="dropdown-basic"
                    >
                      <img src={phoneLogo} alt="" /> Позвонить
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </p>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  )
}
