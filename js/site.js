function changeVideo(n) {
    var t = document.getElementById("iframeYoutube");
    t.src = "https://www.youtube.com/embed/" + n + "?autoplay=1";
    $("#myModal").modal("show")
}
$(document).ready(function() {
    $("#myModal").on("hidden.bs.modal", function() {
        $("#iframeYoutube").attr("src", "#")
    })
});
