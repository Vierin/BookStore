import { FC } from 'react'
import { ImIcon } from '../scaffold/ImIcons'
import styles from './Menu.module.scss'

import {mainMenu} from './menu.data'

const Menu:FC = () => {
  return (
    <ul className={styles.menu}>
        {mainMenu.items.map((item, index) => (
            <li key={index}>
                <a href={item.link}>
                    <ImIcon name={item.icon} />
                    <span>{item.title}</span>
                </a>
            </li>
        ))}
    </ul>
  )
}
export default Menu