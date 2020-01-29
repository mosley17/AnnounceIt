const users= [];
class User {
    constructor(){
        this.createUser=(body)=>{
           const userData= {
                "id": body.id,
                "email": body.email,
                "first_name": body.first_name,
                "last_name": body.last_name,
                "password": body.password,
                "phone_number": body.phone_number,
                "address": body.address,
                "is_admin": body.is_admin
            }
            users.push(userData);
            return userData;
        }
    }
}

export default new User();

