import { Col, Row } from "react-bootstrap"

import { facebook, instagram, logoFooter, logoStudio, phone2, phone3, whatsApp } from "../../assets"

export const Footer = () => {
  return (
    <footer className="bg-[#262626] text-white mt-[140px]">
      <div className="container">
        <div className="pt-[80px] py-[40px]">
          <h1 className="text-[40px] mb-[60px]">Kanzler&Bürger</h1>
          <Row className="flex justify-between gap-[80px] mb-[80px]">
            <Col className='flex flex-col justify-between items-start '>
              <ul className="footer-menu">
                <li>Меню</li>
                <li>Акции</li>
                <li>Популярные товары</li>
                <li>Новинки</li>
                <li>Новости</li>
                <li>О компании</li>
                <li>Контакты</li>
              </ul>
              <img className="mt-[50px]" src={logoFooter} alt="" />
            </Col>
            <Col className='flex-col justify-between items-center'>
              <ul className="footer-menu">
                <li>Категории</li>
                <li> Бумага </li>
                <li> Письмо и графика </li>
                <li> Канц товары </li>
                <li> Художественные товары </li>
                <li> Творчество </li>
                <li> Полиграфические материалы </li>
                <li> Распродажи </li>
                <li> Офисное оборудование </li>
                <li> Игры и игрушки </li>
                <li> Сувенирная продукция </li>
              </ul>
            </Col>
            <Col className='flex-col justify-between items-center'>
              <ul className="footer-menu ">
                <li>Контакты</li>
                <li> Огонбаева, 222 </li>
                <li>
                  <img src={phone2} alt="" /> 0777 90 22 33{" "}
                </li>
                <li>
                  <img src={phone3} alt="" /> 0312 90 22 33{" "}
                </li>
              </ul>
              <ul className="footer-menu mt-[18px]">
                <li> Эркиндик, 7 </li>
                <li>
                  <img src={phone2} alt="" /> 0777 90 22 34{" "}
                </li>
                <li>
                  <img src={phone3} alt="" /> 0312 90 22 34{" "}
                </li>
              </ul>
              <ul className="footer-menu mt-[18px] ">
                <li> Уметалиева, 84 </li>
                <li>
                  <img src={phone2} alt="" /> 0777 90 22 36{" "}
                </li>
                <li>
                  <img src={phone3} alt="" /> 0312 90 22 36{" "}
                </li>
              </ul>
            </Col>
            <Col className="relative flex flex-col justify-between  items-start">
              <ul className="footer-menu">
                <li>Мы в соц сетях</li>
                <li>
                  <img src={instagram} alt="log" /> Instagram
                </li>
                <li>
                  <img src={facebook} alt="logo" /> Facebook
                </li>
                <li>
                  <img src={whatsApp} alt="logo" /> What’s App
                </li>
              </ul>

              <img className="w-[73] h-[33px]" src={logoStudio} alt="" />
            </Col>
          </Row>
          <hr className="mt-[80px]" />
          <p className="mt-[40px] text-[14px] opacity-[0.6]">
            Kanzler & Burger (c) 2017. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
