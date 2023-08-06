const getAssetImgURL=(image)=>{
    return new URL(`../assets/image/${image}`,import.meta.url)
}

export default getAssetImgURL