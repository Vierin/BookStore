import { FC } from 'react'

import styles from './Layout.module.scss'
import Header from '../header/Header'

interface LayoutProps {
    children: React.ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <div className={styles.layout}>
            <Header />
            <div className={styles.layout__wrapper}>
                {children}
            </div>
        </div>
    )
}

export default Layout