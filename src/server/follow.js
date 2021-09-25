import { db } from './firebase'
import firebase from 'firebase/app'


export async function checkFollow(user1 = "", user2 = "") {
    if ((user1 + "") == (user2 + "")) return
    // console.log(user1, `${user1 == user2}`, user2)
    try {
        const res = await db.collection('follow').doc(user1 + user2).get()
        return res.data().cur
    } catch (error) {
        await db.collection('follow').doc(user1 + user2).set({ cur: false })
        return false
    }
}


export async function addToFollowing(user1 = "", user2 = "") {
    await db.collection('following').doc(user1)
        .update({ arr: firebase.firestore.FieldValue.arrayUnion(user2) })
    return;
}
export async function removeFromFollowing(user1 = "", user2 = "") {
    await db.collection('following').doc(user1)
        .update({ arr: firebase.firestore.FieldValue.arrayRemove(user2) })
    return;
}


export async function follow(user1 = "", user2 = "") {
    await db.collection('follow').doc(user1 + user2).set({ cur: true })
    await changeNumOfFollowers(user2, 1)
    await changeNumOfFollowing(user1, 1)
    await addToFollowing(user1, user2)

}
export async function unFollow(user1 = "", user2 = "") {
    await db.collection('follow').doc(user1 + user2).set({ cur: false })
    await changeNumOfFollowers(user2, -1)
    await changeNumOfFollowing(user1, -1)
    await removeFromFollowing(user1, user2)
}

export async function changeNumOfFollowers(user = "", num = 0) {
    await db.collection('users').doc(user)
        .update({ followersNum: firebase.firestore.FieldValue.increment(num) })
}
export async function changeNumOfFollowing(user = "", num = 0) {
    await db.collection('users').doc(user)
        .update({ followingNum: firebase.firestore.FieldValue.increment(num) })
}


