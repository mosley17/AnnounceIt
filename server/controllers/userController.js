import user from '../models/User'
class UserController {
    constructor() {
        this.userEnd = (req, res) => {
            const userInput = user.createUser(req.body)
            return res.status(201).json({
                "status": "created successfully",
                "data": userInput

            })
        }
    }
}

export default new UserController()

