import { FC } from 'react'

import styles from './Slider.module.scss'

const SliderItem:FC = () => {
  return (
    <div className={styles.slider__item}>
        <img src="/images/book-1.png" alt="slide1"/>
    </div>
  )
}

export default SliderItem