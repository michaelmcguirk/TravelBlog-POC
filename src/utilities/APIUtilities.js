export const parsePhotos = (gallery) => {
    if(gallery.length === 0) return [];
    const images = gallery.map(g => {
        let ratio = getAspectRatio(g.path);
        return {
            src: `${process.env.REACT_APP_COCKPIT_DOMAIN}${g.path}`,
            width: ratio.width,
            height: ratio.height
        }
    });
    return images;
}

export const getAspectRatio = (imagePath) => {
    let ratio = {};
    let ratioIndex = (imagePath.lastIndexOf(".") - 1 );
    let ratioString = imagePath.substring(ratioIndex, ratioIndex+1);

    if(ratioString === 'p'){
      ratio = {width: 4, height: 5};
    }else{
      ratio = {width: 5, height: 4};
    }
    return ratio;
}

