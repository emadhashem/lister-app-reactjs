import {db} from './firebase'


const postDef = {
    title : '',
    todos : [],
    likes : 0,
    id : ''
}

export async function getAllPosts(userId) {
    const res = await db.collection('posts').doc(userId).get()
    return res.data().arr
}

export async function addPostApi(userId = '' , postId = '', todos = [], title = '') {
    const userPosts = await getAllPosts(userId)
    const res = await db.collection('posts').doc(userId).update({
        arr : [{...postDef, id : postId, title, todos}, ...userPosts]
    })
    const res1 = await db.collection('comments').doc(postId).set({arr : []})
    
}



