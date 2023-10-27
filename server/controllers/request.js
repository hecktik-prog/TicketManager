const {Request, User} = require('../models/models')

const createRequest = async (req, res) => {
    // парсинг запроса
    let {theme, description} = req.body
    let user = req.user
    
    // определение начальника отдела
    const supervisor = await User.findOne({where: {depId:user.depId, role:'Начальник отдела'}})
    
    // создание заявки
    const result = await Request.create({
        creator: user.id,
        manager: supervisor.id,
        theme: theme,
        description: description,
    })

    return res.status(200).json({
        message:'Заявка успешно создана.',
    })
}

const getUserRequests = async (req, res) => {
    let user = req.user
    const requests = await Request.findAll({where: {creator:user.id}, order: [['id', 'ASC']]})
    return res.status(200).json({
        requests,
    })
}

const getDepRequests = async (req, res) => {
    let user = req.user
    const requests = await Request.findAll({where: {manager:user.id}})
    return res.status(200).json({
        requests,
    })
}

const updateRequest = async (req, res) => {
    const request = await Request.findByPk(req.params.id)
    request.status = "success"

    request.save({fields: ['status']})
    return res.status(200).json(request)
}
module.exports = {
    createRequest,
    getUserRequests,
    getDepRequests,
    updateRequest,
}