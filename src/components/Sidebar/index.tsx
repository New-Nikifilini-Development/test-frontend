import React from 'react'
import styles from './styles.m.styl'
// import classNames from 'classnames'

function Sidebar({ children }: any): JSX.Element {
  return <div className={styles.sidebar}>{children}</div>
}

export default Sidebar
