let generateImage = (source) => {
    let img = document.createElement('img')
    img.src = source;
    img.alt = "The image could not be loaded";
    return img
}

export {generateImage }
  