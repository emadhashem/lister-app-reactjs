import { db } from './firebase'
import firebase from 'firebase/app'

export async function getAllLinksByUser(userId = "") {
    try {
        const res = await db.collection('links').doc(userId).get()
        return res.data().arr
    } catch (error) {
        return []
    }
}
export async function addLink(userId = "", link = "", linkId = "") {
    try {
        await db.collection('links').doc(userId).update({
            arr: firebase.firestore.FieldValue.arrayUnion({ link, id: linkId })
        })
        alert('link added :)')
    } catch (error) {
        alert('link not added :(')

    }
}
export async function removeLink(userId = "", link = "", linkId = "") {
    try {
        await db.collection('links').doc(userId).update({
            arr: firebase.firestore.FieldValue.arrayRemove({ link, id: linkId })
        })
        alert('link removed :)')
    } catch (error) {
        alert('link not removed :(')

    }
}