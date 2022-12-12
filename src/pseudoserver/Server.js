import users from '../data/users.json'

export function validateUser(email, password) {

    let response =  { auth: false, data: null }

    users.map((usr) => {
        if (usr.email == email && usr.password == password) {
            console.log(usr.email == email && usr.password == password)
            response = { auth: true, data: usr }
        }
    })

    return response;

}