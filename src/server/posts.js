import { db } from './firebase'
import firebase from 'firebase/app'


const postDef = {
    title: '',
    todos: [],
    likes: 0,
    id: ''
}

export async function getAllPosts(userId) {
    try {
        const res = await db.collection('posts').doc(userId).get()
        return res.data().arr
    } catch (error) {
        return []
    }

}

export async function addPostApi(userId = '', postId = '', todos = [], title = '') {
    const res = await db.collection('posts').doc(userId).update({
        arr: firebase.firestore.FieldValue.arrayUnion({ ...postDef, id: postId, title, todos })
    })
    const res1 = await db.collection('comments').doc(postId).set({ arr: [] })

}



