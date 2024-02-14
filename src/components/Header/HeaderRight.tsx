import { FC } from 'react'
import { ImIcon } from '../scaffold/ImIcons'

import styles from './Header.module.scss'
import {rightMenu} from '../menu/menu.data'

const HeaderRight:FC = () => {
  return (
    <ul className={styles.header__list}>
        {rightMenu.items.map((item, index) => (
            <li key={index}>
                <a href={item.link}>
                    <ImIcon name={item.icon} />
                </a>
            </li>
        ))}
    </ul>
  )
}

export default HeaderRight