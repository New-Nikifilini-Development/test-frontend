import React from 'react'
import styles from './styles.m.styl'
import classNames from 'classnames'

interface Props {
  text?: string
  small?: boolean
  resting?: boolean
  disabled?: boolean
  outline?: boolean
  icon?: any
  rightIcon?: any
  color?: 'red' | 'green' | 'yellow' | 'purple'
  onClick: () => void
}

function Button({
  text,
  icon,
  rightIcon,
  resting,
  disabled,
  outline,
  color,
  small,
  onClick,
}: Props) {
  const Icon = icon || rightIcon || 'div'
  return (
    <button
      disabled={disabled}
      className={classNames({
        [styles.brandButton]: !color,
        [styles.redButton]: color === 'red',
        [styles.yellowButton]: color === 'yellow',
        [styles.greenButton]: color === 'green',
        [styles.purpleButton]: color === 'purple',
        [styles.resting]: resting,
        [styles.outline]: outline,
        [styles.disabled]: disabled,
        [styles.small]: small,
        [styles.iconOnly]: icon && !text,
      })}
      onClick={onClick}
    >
      {icon && <Icon />}
      {text && <span>{text}</span>}
      {rightIcon && <Icon />}
    </button>
  )
}

export default Button
