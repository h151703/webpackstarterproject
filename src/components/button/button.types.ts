import { MouseEventHandler } from 'react'

export interface ButtonProps {
  text?: string
  primary?: boolean
  disabled?: boolean
  size?: 'small' | 'medium' | 'large'
  onClick: React.MouseEventHandler<HTMLButtonElement>
  typeButton: keyof typeof BtnTypes
}

export const ButtonTypes = {
  primary: 'primary',
  success: 'success',
  info: 'info',
  warning: 'warning',
  danger: 'danger',
  link: 'link',
} as const

export enum BtnTypes {
  primary = 'primary',
  success = 'success',
  info = 'info',
  warning = 'warning',
  danger = 'danger',
  link = 'link',
}
