function gotoSlideShow() {
    window.location.href = "slideshow.html";
}

function storeImages() {
    // Step1- Accept User Input

    let image_url = document.getElementById('url').value

    // there is an array present to push Images

    // step2 - pickup either local storage array or create empty array

    let images = JSON.parse(localStorage.getItem('images')) || [];

    images.push(image_url);

    localStorage.setItem('images', JSON.stringify(images));

    document.getElementById('url').value = null;
}