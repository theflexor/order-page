import { Menu } from "../Navbar/Navbar"
import { SearchBar } from "../SearchBar/SearchBar"
import styles from "./header.module.sass"

export const Header = () => {
  return (
    <header>
      <Menu />
      <SearchBar />
    </header>
  )
}
