import {db} from './firebase'
const postDef = {
    title : '',
    todos : [],
    likes : 0,
    id : ''
}

export async function addPost(userId = '' , postId = '', todos = [], title = '') {
    const res = await db.collection('posts').doc(userId).update({
        arr : arrayUnion({...postDef, title, id : postId, todos})
    })
    const res1 = await db.collection('comments').doc([postId]).set({arr : []})
    return res
}



