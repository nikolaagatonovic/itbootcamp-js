function generateImage(src) {
    let img = document.createElement("img");
    img.src = src;
    img.alt = "The image could not be located";
    return img;
    
}

export {generateImage};