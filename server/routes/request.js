const Router = require('express')
const { checkToken } = require('../middleware/authMiddleware')
const { createRequest, getUserRequests, getDepRequests, updateRequest } = require('../controllers/request')
const router = new Router()

// создание заявки
router.post('/', checkToken, createRequest)

// вывод заявок пользователя
router.get('/user', checkToken, getUserRequests)

// вывод заявок по отделу
router.get('/dep', checkToken, getDepRequests)

// принятие заявки
router.put('/:id', checkToken, updateRequest)

module.exports = router