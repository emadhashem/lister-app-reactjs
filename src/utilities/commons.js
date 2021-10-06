
export const imgSrcObito = 'https://c4.wallpaperflare.com/wallpaper/84/884/953/anime-naruto-obito-uchiha-rinnegan-naruto-wallpaper-preview.jpg'

export function customStr(str = "") {
    console.log(str.length)
    if (str.length > 37) return str.substring(0, 37) + '...'
    return str
}

export function getThread(a = '', b = '') {
    let arr = [a, b].sort()
    return arr[0] + arr[1]
}