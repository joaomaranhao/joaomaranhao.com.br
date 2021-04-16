import { useEffect, useState } from 'react'
import style from './MenuIcon.module.css'

const MenuIcon = ({ btnState, isOpen }) => {
  const [open, setOpen] = useState(isOpen)
  useEffect(() => {
    btnState(open)
  }, [open])
  useEffect(() => {
    setOpen(isOpen)
  }, [isOpen])

  return (
    <div className={`${style.container} ${open ? style.change : ''}`} onClick={() => setOpen(!open)}>
      <div className={style.bar1}></div>
      <div className={style.bar2}></div>
      <div className={style.bar3}></div>
    </div>
  )
}

export default MenuIcon
