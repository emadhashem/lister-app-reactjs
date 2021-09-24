import {storage} from './firebase'

export const noProfileFireBasePath = 'https://firebasestorage.googleapis.com/v0/b/twitter-clone-c9b74.appspot.com/o/noprofile.webp?alt=media&token=cedba87c-c3fb-47f9-b69b-ed4f5dfdf9ec'

export const uploadImg = async (file , path = '') => {
    
    let ref = storage.ref().child(path)
    return ref.put(file);
}
export const downloadImg = async (path) => { 
    const url = await storage.ref().child(path).getDownloadURL();
    return url

}
export const deleteSomePhoto = async (path) => {
    const res = await storage.ref().child(path).delete()
    
}