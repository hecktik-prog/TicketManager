const jwt = require('jsonwebtoken')

const generateJwt = (id, login, role, depId) => {
    return jwt.sign(
        {
            id:id,
            login,
            role,
            depId,
        },
        process.env.SECRET_KEY,
        {expiresIn: '30d'}
    )
}

module.exports = {
    generateJwt,
}