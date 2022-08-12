let p = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if(a == 2) {
        resolve("Success")
    } else {
        reject('Failed')
    }
});

p.then((message) => {
    console.log("This is in the then" + message);
}).catch((message) => {
    console.log("This is in the catch" + message);
});

let userLeft = true;
let userWatchingCatMeme = false;

function watchTutorialPromise() {
return new Promise((resolve, reject) => {
        if(userLeft) {
            reject({
                name: 'User Left',
                message: ':('
            })
        } else if (userWatchingCatMeme) {
            reject({
                name: 'User watching Cat Meme',
                message: 'WebDevSimplified < Cat'
            })
        } else {
            resolve('Thumbs up and subscribe')
        }
    })
}

watchTutorialPromise().then((message) => {
    console.log("Success: " + message);
}).then((message) => {
    console.log("Success: " + message);
}).catch((error) => {
    console.log(error.name + ' ' + error.message);
})

const recordVideoOne = new Promise((resolve, reject) => {
    resolve("Video 1 recorded")
})

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve("Video 2 recorded")
})

const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 recorded')
})

Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((message) => {
    console.log(message);
})