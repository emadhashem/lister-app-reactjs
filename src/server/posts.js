import { db } from './firebase'
import firebase from 'firebase/app'
import { get_the_user_data } from './user'

const postDef = {
    title: '',
    todos: [],
    likes: 0,
    id: '',
    time: (new Date()).toString()
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

export async function getAllPostsFromFollowings(curUser, cb) {
    const resFollowings = await db.collection('following').doc(curUser).get()
    resFollowings.data().arr.map(async (item) => {
        const curPosts = await getAllPosts(item)
        const userData = await get_the_user_data(item)
        cb(curPosts, { ...userData, userId: item })
    })

}

const commentsDef = {
    text: '',
    id: '',
}

export async function getAllCommenstByPostId(postId = "") {
    try {
        const res = await db.collection('comments').doc(postId).get()
        return res.data().arr
    } catch (error) {
        return []
    }
}

export async function addComment(text = "", postId = "", commentId = "") {
    try {
        const res = await db.collection('comments').doc(postId).update({
            arr: firebase.firestore.FieldValue.arrayUnion({ id: commentId, text })
        })
        alert('comment added :) ...')
    } catch (error) {
        alert('comment not added :( ...')

    }
}
export async function removeComment(text = "", postId = "", commentId = "") {
    try {
        const res = await db.collection('comments').doc(postId).update({
            arr: firebase.firestore.FieldValue.arrayRemove({ id: commentId, text })
        })
        alert('comment removed :) ...')
    } catch (error) {
        alert('comment not removed :( ...')

    }
}
