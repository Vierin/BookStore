import { FC } from "react"

import styles from './Slider.module.scss'
import SliderItem from "./SliderItem"

const Slider:FC = () => {
  return (
    <div className={styles.slider}>
        <div className={styles.slider__wrapper}>
            <SliderItem/>
            <SliderItem/>
            <SliderItem/>
        </div>
    </div>
  )
}

export default Slider