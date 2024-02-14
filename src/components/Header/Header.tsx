import Menu from "../menu/Menu"
import styles from './Header.module.scss'
import { FC } from "react"
import HeaderRight from "./HeaderRight"

const Header:FC = () => {
  return (
    <div className={styles.header}>
        <a href=""><img className={styles.header__logo} src="/images/logo.png" alt="logo"/></a>
        <Menu/>
        <HeaderRight/>
    </div>
  )
}
export default Header