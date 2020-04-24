$(window).on("load", function() {
  $("#upload").on('change', function() {
    if (this.files && this.files[0]) {
      var image = $("#original");
      image.attr("src", URL.createObjectURL(this.files[0]));
      image.on("load", onImageLoad);
    }
  });
});

function onImageLoad() { 
  alert("image is loaded!");
}