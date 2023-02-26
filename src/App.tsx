import { useState } from "react"
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

export interface IProduct {
  image: string
  title: string
  article: string
  count: number
  price: number
  action?: number
  id: number
}

let lists: IProduct[] = [
  {
    id: 1,
    image: "/src/assets/Rectangle 3207-1.png",
    title: "Lorem ipsum dolor sit amet consectetur. Duis",
    article: "L434-GH43",
    count: 1,
    price: 300,
  },
  {
    id: 2,
    image: "/src/assets/Rectangle 3207-2.png",
    title: "Lorem ipsum dolor sit amet consectetur. Duis",
    article: "L434-GH43",
    count: 1,
    price: 300,
  },
  {
    id: 3,
    image: "/src/assets/Rectangle 3207.png",
    title: "Lorem ipsum dolor sit amet consectetur. Duis",
    article: "L434-GH43",
    count: 1,
    price: 300,
    action: 10000,
  },
]

function App() {
  let [products, setProducts] = useState<IProduct[]>(lists)

  const deleteProduct = (id: number) => {
    setProducts([...products.filter((item) => item.id !== id)])
  }
  const increaseProduct = (id: number) => {
    setProducts(
      products.map((item: IProduct) => {
        if (item.id === id) {
          return { ...item, count: item.count + 1 }
        }
        return item
      })
    )
  }
  const decreaseProduct = (id: number) => {
    setProducts([
      ...products.map((item) => {
        if (item.id === id) {
          return { ...item, count: item.count - 1 }
        }
        return item
      }),
    ])
  }

  const count = products.reduce((acc, item) => {
    return (acc += item.count * item.price)
  }, 0)
  
  return (
    <div className="App">
      <Header products={products.length} />
      <div className="container">
        <RouteText />
        <Row className="flex gap-x-[30px]">
          <h1 className="text-[40px] mt-[40px]">Оформление заказа</h1>
          <Col lg="8" sm="12" className="flex flex-col p-0">
            <OrderList
              decreaseProduct={decreaseProduct}
              deleteProduct={deleteProduct}
              increaseProduct={increaseProduct}
              products={products}
            />
            <MakeOrder />
            <Entity />
            <Delivery />
          </Col>
          <Col>
            <OrderCard count={count} />
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  )
}

export default App
