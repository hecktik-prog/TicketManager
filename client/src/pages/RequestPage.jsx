import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import '../components/layout.css'
import { checkIsAuth } from '../redux/features/auth/authSlice'
import { getUserRequests } from '../redux/features/request/requestSlice'

export const RequestPage = () => {
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
  
    return (
    <div class="req-container">
      <button class="btn" ><Link to='/create'>Добавить задачу</Link></button>
      <div class="table-container">
        <div>Проблема</div>
        <div>Описание проблемы</div>
      </div>
      {list?
        list.map((element, index) =>
          <div class="table-list-container">
            <div>{element.theme}</div>
            <div>{element.description}</div>
          </div>) : <div> Записей нет </div>
      }
      <button class="btn" ><Link to='/create'>Добавить задачу</Link></button>
    </div>
  )
}