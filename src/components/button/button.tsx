import * as React from 'react'
import styles from './button.module.scss'
import { ButtonProps } from './button.types'

const Button = (props: ButtonProps) => {
  return (
    <>
      <button className={styles[props.typeButton]} onClick={props.onClick}>
        {props.text}
      </button>
    </>
  )
}

export default Button
