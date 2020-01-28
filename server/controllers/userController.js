import user from '../models/User'
class UserController {
    constructor(){
        this.userAPI = (req,res) =>{
           const apiUser= user.createUser(req.body)
            return res.status(200).json({
                "status": "success",
                "data": user.createUser(req.body)
            
            })
        }
    }
}

export default new UserController()