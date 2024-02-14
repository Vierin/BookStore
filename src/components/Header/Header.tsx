import Menu from "../Menu/Menu"
import HeaderRight from "./HeaderRight"

import styles from './Header.module.scss'
import { FC } from "react"

const Header:FC = () => {
  return (
    <div className={styles.header}>
        <a href="/"><img src="" alt="logo"/></a>
        <Menu/>
        <HeaderRight/>
    </div>
  )
}
export default Header