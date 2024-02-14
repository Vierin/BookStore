import { FC } from 'react'
import { ImIcon } from '../scaffold/ImIcons'

import styles from './Header.module.scss'

const HeaderRight:FC = () => {
  return (
    <ul className={styles.header__list}>
        <li><a><ImIcon name="ImBookmark"/></a></li>
        <li><a><ImIcon name="ImCart" /></a></li>
        <li><a><ImIcon name="ImUser"/></a></li>
    </ul>
  )
}

export default HeaderRight