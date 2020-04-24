function Dissector() {
  this.originalImage = $("#original");
  this.uploadInput = $("#upload");
  this.uploadInput.on("change", this.onFileUploaded.bind(this));
}


/** Handler for when an image is uploaded. */
Dissector.prototype.onFileUploaded = function() {
  // Get the raw input element to access the files object.
  var uploader = this.uploadInput.get()[0];
  // Check that the file is present.
  if (uploader.files && uploader.files[0]) {
    var uploadedImage = uploader.files[0];
    this.originalImage.attr("src", URL.createObjectURL(uploadedImage));
    this.originalImage.on("load", this.onImageLoad.bind(this));
  }
};


/** Handler for when the image source has loaded. */
Dissector.prototype.onImageLoad = function() { 
  alert("image is loaded!");
}
