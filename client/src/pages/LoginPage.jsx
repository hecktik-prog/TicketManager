import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import '../components/layout.css'
import { checkIsAuth, loginUser } from '../redux/features/auth/authSlice'

export const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const isAuth = useSelector(checkIsAuth)
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuth) {
      navigate('/')
    }
  }, [isAuth, navigate])

  const handleSubmit = () => {
    try {
      dispatch(loginUser({ username, password }))
    } catch (error) {
      console.log(error)
    }
  }

  return (
      <form
        onSubmit={(e)=>e.preventDefault()}
        class="main-container__form"
      >
        <h1 class="main-container__form__h1">Авторизация</h1>
        <label class="main-container__form__label">
          <input
            type="text"
            value={username}
            placeholder='Username'
            onChange={(e)=>setUsername(e.target.value)}
            class="main-container__form__label__input"
          />
        </label>
        <label class="main-container__form__label">
          <input
            type="password"
            value={password}
            placeholder='Password'
            onChange={(e)=>setPassword(e.target.value)}
            class="main-container__form__label__input"
          />
        </label>
        <div class="main-container__form__btndiv">
          <button
            class="main-container__form__btndiv__btn"
            onClick={handleSubmit}
          >
            Войти
          </button>
        </div>
      </form>
  )
}