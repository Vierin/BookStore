import { FC } from "react"

import styles from './Hero.module.scss'
import SearchForm from "../../components/searchForm/SearchForm"
import TrendItem from "../../components/trendItem/TrendItem"

const Hero:FC = () => {
  return (
    <div className={styles.hero}>
        <div className={styles.hero__search}>
            <h1>New & trending</h1>
            <p>Explore new worlds from authors</p>
            <SearchForm/>
        </div>
        <div className={styles.hero__book}>
          <img src="/images/hero-book.png" alt="Book" />
        </div>
        <div className={styles.hero__popular}>
            <h3>Author of the Week</h3>
            <TrendItem title="Stephen King" booksAmount={78} image={"/images/king.png"} />
        </div>
        <div className={styles.hero__popular}>
            <h3>Popular AudioBook</h3>
            <TrendItem title="False Witness: A Novel" author="Karin Slaughter" image={"/images/book-3.jpg"} />
        </div>

        <div className={styles.hero__deco}>
          <span></span>
        </div>
    </div>
  )
}
export default Hero