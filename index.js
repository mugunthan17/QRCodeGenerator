var qrCode;
var button = document.getElementById("genBTN");
var downloadButton = document.getElementById("downloadBtn");
var qrCodeDiv = document.getElementById("qrcodediv");

button.addEventListener("click", function (event) {
    event.preventDefault();
    var qrtext = document.getElementById("txt").value;
    if (qrtext === "") {
        qrCodeDiv.innerHTML = "";
        alert("Please Enter some Text");//alerting the user to enter some text
    } else {
        qrCodeDiv.innerHTML = "";
        qrCode = new QRCode(qrCodeDiv, { //QR Code generator function
            text: qrtext,
            width: 256,
            height: 256,
            colorDark: "#000000", //dark color
            colorLight: "#ffffff", //light color
            correctLevel: QRCode.CorrectLevel.H,
        });
        downloadButton.style.display = "block";
    }
});

downloadButton.addEventListener("click", function () {
    if (qrCode) {
        // Get the data URL of the QR code image
        var dataURL = qrCodeDiv.querySelector("img").src;

        // Create an anchor element to trigger the download
        var downloadLink = document.createElement("a");
        downloadLink.href = dataURL;
        downloadLink.download = "qrcode.png";
        document.body.appendChild(downloadLink);

        // Trigger the click event to start the download
        downloadLink.click();

        // Remove the temporary download link
        document.body.removeChild(downloadLink);
    }
});
