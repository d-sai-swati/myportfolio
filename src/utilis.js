export const getImageURL = (path) =>{
    return new URL(`/assets/assests/${path}`, import.meta.url).href
};