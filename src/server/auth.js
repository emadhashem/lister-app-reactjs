import {auth} from './firebase'


export async function create_user(email = "", pass = "") {
    const res = await auth.createUserWithEmailAndPassword(email, pass)
    return res.user.uid
}

export async function login_user(email, pass) {
    const res = await auth.signInWithEmailAndPassword(email , pass)
    return res.user.uid
}

export async function logout_user() {
    const res = await auth.signOut()
    return res
}