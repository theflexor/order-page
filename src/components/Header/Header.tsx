import { Menu } from "../Navbar/Navbar"
import { SearchBar } from "../SearchBar/SearchBar"
import styles from "./header.module.sass"

export const Header = ({products}:{products:number}) => {
  return (
    <header>
      <Menu />
      <SearchBar products={products} />
    </header>
  )
}
