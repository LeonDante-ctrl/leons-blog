function clicked() {
    console.log("clickes");
}


$(document).ready(function () {
    $(".posts-options").click(function (e) {
        e.preventDefault();
        $('.new-blog').addClass('d-none');
        $('.all-blogs').removeClass('d-none');
    });
    $(".new-blog-btn").click(function (e) {
        e.preventDefault();
        $('.new-blog').removeClass('d-none');
        $('.all-blogs').addClass('d-none');
    });
});