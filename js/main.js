function Dissector() {
  this.originalImage = $("#original");
  this.uploadInput = $("#upload");
  this.uploadInput.on("change", this.imageUploaded.bind(this));
}


Dissector.prototype.imageUploaded = function() {
  var uploader = this.uploadInput.get()[0];
  if (uploader.files && uploader.files[0]) {
    var uploadedImage = uploader.files[0];
    this.originalImage.attr("src", URL.createObjectURL(uploadedImage));
    this.originalImage.on("load", this.onImageLoad.bind(this));
  }
};


Dissector.prototype.onImageLoad = function() { 
  alert("image is loaded!");
}
