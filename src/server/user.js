import {db} from './firebase'
const userDef = {
    fName : '',
    lName : '',
    email : '',
    todos : []
    
}
export async function add_new_user(fName, lName, email, id) {
    const res = await db.collection("users").doc(id).set({...userDef, fName, lName, email})
    return res
}

export async function get_the_user_data(id) {
    
    const res = await db.collection('users').doc(id).get()
    if(res.exists) return res.data()
    return new Error("the user not exsit")
}