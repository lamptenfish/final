// write out a list of steps that the website needs to follow


// list of image
// random generate number
// pull out the corresponding image
// one after second one 
// shrink and able to scroll down 
const imag = [
   "<img id="displayImage" src="https://raw.githubusercontent.com/lamptenfish/final/main/spirals/image/cartoon.jpeg"></img>""

    "<img id="displayImage" src="https://raw.githubusercontent.com/lamptenfish/final/main/spirals/image/dinouse.jpeg"></img>"

    "<img id="displayImage" src="https://raw.githubusercontent.com/lamptenfish/final/main/spirals/image/dog.jpeg"></img>"

    "<img id="displayImage" src="https://raw.githubusercontent.com/lamptenfish/final/main/spirals/image/drawingtiger.jpeg"></img>"

    "<img id="displayImage" src="https://raw.githubusercontent.com/lamptenfish/final/main/spirals/image/grapefruit.jpeg"></img>"

    "<img id="displayImage" src="https://raw.githubusercontent.com/lamptenfish/final/main/spirals/image/huke.jpeg"></img>"

    "<img id="displayImage" src="https://raw.githubusercontent.com/lamptenfish/final/main/spirals/image/images.jpeg"></img>"

    "<img id="displayImage" src="https://raw.githubusercontent.com/lamptenfish/final/main/spirals/image/rock.jpeg"></img>"

    "<img id="displayImage" src="https://raw.githubusercontent.com/lamptenfish/final/main/spirals/image/rollercoster.jpeg"></img>"

    "<img id="displayImage" src="https://raw.githubusercontent.com/lamptenfish/final/main/spirals/image/spider.jpeg"></img>"
];
for (i=imag.length, i>=0, i--){
const nextImage = new Image imag[Math.floor(Math.random()*(imag.length + 1))]
//display image
delete imag[nextImage];
}


