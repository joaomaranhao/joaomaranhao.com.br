import { useState } from 'react'
import style from './MenuIcon.module.css'

const MenuIcon = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className={`${style.container} ${open ? style.change : ''}`} onClick={() => setOpen(!open)}>
      <div className={style.bar1}></div>
      <div className={style.bar2}></div>
      <div className={style.bar3}></div>
    </div>
  )
}

export default MenuIcon
