// write out a list of steps that the website needs to follow


// list of image
// random generate number
// pull out the corresponding image
// one after second one 
// shrink and able to scroll down

const images = [`pink`,`yellow`];


function displayImage() {

    const randomIndex = Math.floor(Math.random()*(images.length));

    console.log(randomIndex, images[randomIndex])

    const newImage = `<img id="displayImage" src="https://raw.githubusercontent.com/lamptenfish/final/main/spirals/image/${images[randomIndex]}.jpeg">`

    $('#image-container').append(newImage);

    // delete image
    images.splice(randomIndex, 1);

    if(images.length == 0) {
        $('#add-image').attr("disabled", "true");
    }

}

$('#add-image').click(function(){

    displayImage()
})