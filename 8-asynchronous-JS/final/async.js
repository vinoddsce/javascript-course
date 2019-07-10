const numberPromise = new Promise((resolve) => {
    resolve(5);
});
numberPromise.then(value => console.log(value));

function f1(f2) {
    f2(100);
}
f1(value => console.log(value));


const loadImage = new Promise(function (resolve, reject) {

    url = `https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`;
    var request = new XMLHttpRequest();
    request.open('GET', url);

    // When the request loads, check whether it was successful
    request.onload = function () {
        if (request.status === 200) {
            // If successful, resolve the promise
            console.log("Sucess");
            resolve(request.response);
        } else {
            // Otherwise, reject the promise
            console.log("Error");
            reject(Error('An error occurred while loading image. error code:' + request.statusText));
        }
    };

    request.send();
});

loadImage.then(res => console.log(res));