import { FC } from 'react'
import styles from './TrendItem.module.scss'
import cn from 'classnames'

interface TrendItemProps {
    title: string
    author?: string
    booksAmount?: number
    image: string,
}

const TrendItem:FC<TrendItemProps> = ({title, author, image, booksAmount }) => {
    return (
        <div className={cn(styles.trend, {
                [styles.trendAuthor]: author === undefined,
                [styles.trendAudio]: booksAmount === undefined
            })}>
            <div className={styles.trend__wrapper}>
                <h4>{title}</h4>
                <p>{booksAmount ? booksAmount + ' books' : author}</p>
                <div className={styles.trend__img}>
                    <img src={image} alt={title} />
                </div>
            </div>
        </div>
    )
}

export default TrendItem