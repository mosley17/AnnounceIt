import user from '../models/User'
class UserController {
    constructor(){
        this.userAPI = (req,res) =>{
           const apiUser= user.createUser(req.body)
            return res.status(201).json({
                "status": "created successfully",
                "data": user.createUser(req.body)
            
            })
        }
    }
}

export default new UserController()

