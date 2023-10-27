import { useState } from 'react'
import { createRequest } from '../redux/features/request/requestSlice'
import { useDispatch } from 'react-redux'
import '../components/layout.css'

export const CreateReqPage = () => {

  const [problem, setProblem] = useState('')
  const [description, setDescription] = useState('')
  
  const dispatch = useDispatch()

  const handleSubmit = () => {
    try {
      dispatch(createRequest({ problem, description }))

      setDescription('')
      setProblem('')
    } catch (error) {
      console.log(error)
    }
  }

  return (
      <form
        onSubmit={(e)=>e.preventDefault()}
        class="create-container__form"
      >
        <h1 class="create-container__form__h1">Добавление заявки</h1>
        <label class="create-container__form__label">
          <input
            type="text"
            placeholder='Проблема'
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
            class="create-container__form__label__input"
          />
        </label>
        <label class="create-container__form__label">
          <textarea
            placeholder='Описание проблемы'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            class="create-container__form__label__textarea"
          />
        </label>
        <div class="create-container__form__btndiv">
          <button
            class="create-container__form__btndiv__btn"
            onClick={handleSubmit}
          >
            Создать
          </button>
        </div>
      </form>
  )
}