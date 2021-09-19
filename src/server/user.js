import {db} from './firebase'
const userDef = {
    fName : '',
    lName : '',
    email : '',
    followersNum : 0,
    followingNum : 0
}
export async function add_new_user(fName, lName, email, id) {
    const res = await db.collection("users").doc(id).set({...userDef, fName, lName, email})
    const res1 = await db.collection("posts").doc(id).set({arr : []})
    const res2 = await db.collection("followers").doc(id).set({arr : []})
    const res3 = await db.collection("following").doc(id).set({arr : []})
    return res
}

export async function get_the_user_data(id) {
    
    const res = await db.collection('users').doc(id).get()
    if(res.exists) return res.data()
    return new Error("the user not exsit")
}