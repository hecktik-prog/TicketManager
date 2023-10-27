import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { checkIsAuth, logOut } from '../redux/features/auth/authSlice'
import './layout.css'

export const Navbar = () => {
  const isAuth = useSelector(checkIsAuth)
  const dispatch = useDispatch()

  const handleSubmit = () => {
    dispatch(logOut())
    localStorage.removeItem('token')
  }
  return (
    <div class='main-container__navbar'>
      <div class="main-container__navbar__left-box"><Link to='/'>Вам теперь по&nbsp;всем вопросам к&nbsp;нам!</Link></div>
      <div></div>
      {
        isAuth ? <div class="main-container__navbar__login"><button onClick={handleSubmit} href='/'>Выйти</button></div>:
        <div class="main-container__navbar__login"><a href={'/login'}>Войти</a></div>
      }
    </div>
  )
}