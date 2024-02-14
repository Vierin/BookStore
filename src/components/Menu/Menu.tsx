import { FC } from 'react'
import { ImIcon } from '../scaffold/ImIcons'
import styles from './Menu.module.scss'

const Menu:FC = () => {
  return (
    <ul className={styles.menu}>
        <li>
            <a href="/">
                <ImIcon name="ImBooks" />
                <span>Books</span>
            </a>
        </li>
        <li>
            <a href="/">
                <ImIcon name="ImHeadphones" />
                <span>AudioBooks</span>
            </a>
        </li>
    </ul>
  )
}
export default Menu