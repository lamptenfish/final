main();

async function main() {

  // INITIALIZAING STEPS (SKIP TO THE BOTTOM TO WRITE YOUR OWN CODE)

  // Check website compatibility
  if (navigator.userAgent.indexOf("Safari") != -1
    && navigator.userAgent.indexOf("Chrome") == -1) {
    alert("Please switch to a browser that supports Web3 (Chrome, Firefox, Brave, Edge, or Opera)");
    return;
  }

  // Check if MetaMask is installed
  if (!window.ethereum) {
    alert("No Web3 Provider detected, please install MetaMask (https://metamask.io)");
    return;
  }

  // (REQUIRED) Connect to a Web3 provider (MetaMask in most cases)
  const provider = new ethers.providers.Web3Provider(window.ethereum, "any");

  // If the network changes, refresh the page. (e.g. the user switches from mainnet to goerli)
  provider.on("network", (newNetwork, oldNetwork) => {
    if (oldNetwork) {
      window.location.reload();
    }
  });

  // (REQUIRED) Connect to signed-in account. If not signed in, MetaMask will prompt you to sign in
  await provider.send("eth_requestAccounts", []);

  // Check if user is connected to Goerli
  const chainId = await provider.getNetwork();
  if (chainId.chainId != 80001) {
    alert("Please switch to the Goerli Test Network in MetaMask. The page will refresh automatically after switching.");
    return;
  }

  // (REQUIRED) These are your primary variables for interacting with your smart contract
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, contractABI, provider);
  const contractWithSigner = contract.connect(signer);

  //----------------------------------------------------//
  //-----------ADD YOUR CODE BELOW THIS LINE------------//
  //----------------------------------------------------//


  // function mint() {

  //   contractWithSigner.safeMint(address, uri)


  // }

  // write out a list of steps that the website needs to follow


  // list of image
  // random generate number
  // pull out the corresponding image
  // one after second one 
  // shrink and able to scroll down

  const images = ["cartoon", "dinouse", "dog", "drawingtiger"];


  function displayImage() {

    const randomIndex = Math.floor(Math.random() * (images.length));

    console.log(randomIndex, images[randomIndex])

    const newImage = `<img id="displayImage" src="https://raw.githubusercontent.com/lamptenfish/final/main/spirals/image/${images[randomIndex]}.jpeg">`

    $('#image-container').append(newImage);

    let uri = `${images[randomIndex]}.jpeg`
    contractWithSigner.safeMint(address, uri)

    // delete image
    images.splice(randomIndex, 1);

    if (images.length == 0) {
      $('#add-image').attr("disabled", "true");
    }

    

  }

  $('#add-image').click(function () {

    displayImage();

  })

}