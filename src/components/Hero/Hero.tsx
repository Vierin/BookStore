import { FC } from "react"

import styles from './Hero.module.scss'
import SearchForm from "../SearchForm/SearchForm"

const Hero:FC = () => {
  return (
    <div className={styles.hero}>
        <div className={styles.hero__search}>
            <h1>New & trending</h1>
            <p>Explore new worlds from authors</p>
            <SearchForm/>
        </div>
        <div className={styles.hero__book}></div>
        <div className={styles.hero__author}>
            <h2>Author Name</h2>
            <p>Author Description</p>
        </div>
        <div className={styles.hero__popular}>
            <h2>Popular AudioBooks</h2>
            <p>Popular AudioBooks Description</p>
        </div>
    </div>
  )
}
export default Hero