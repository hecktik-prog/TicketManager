import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import '../components/layout.css'
import { checkIsAuth } from '../redux/features/auth/authSlice'
import { getUserRequests, submitRequest } from '../redux/features/request/requestSlice'

export const SubmitPage = () => {
  const isAuth = useSelector(checkIsAuth)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {list} = useSelector((state) => state.request)
  
  useEffect(() => {
    if (!isAuth) {
      navigate('/login')
    }

    dispatch(getUserRequests())

  }, [isAuth, navigate, dispatch])
  
  const handleSubmit = (id) => {
    dispatch(submitRequest(id))
    window.location.reload()
  }
    return (
    <div class="submit-container">
      <div class="submit-container__table">
        <div>Номер</div>
        <div>Проблема</div>
        <div>Статус</div>
        <div></div>
      </div>
      {list?
        list.map((element, index) =>
          <div class="submit-container__element">
            <div>{index + 1}</div>
            <div>{element.theme}</div>
            <div>{element.status}</div>
            <button class="submit-container__element__btn" onClick={() => handleSubmit(element.id)}>Ок</button>
          </div>) : <div> Записей нет </div>
      }
    </div>
  )
}