import { Col, Row } from "react-bootstrap"

import {
  Delivery,
  Entity,
  Footer,
  Header,
  MakeOrder,
  OrderCard,
  OrderList,
  RouteText,
} from "./components"
import styles from "./styles/App.module.sass"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <RouteText />
        <Row className='flex gap-x-[30px]'>
          <h1 className="text-[40px] mt-[40px]">Оформление заказа</h1>
          <Col lg="8" sm="12" className="flex flex-col">
            <OrderList />
            <MakeOrder />
            <Entity />
            <Delivery />
          </Col>
          <Col>
            <OrderCard />
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  )
}

export default App
