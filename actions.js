$(document).ready(function() {
    var isShrunk = false; // state to track if the card is shrunk

    $(".outerCard").click(function() {
        if (!isShrunk) {
            $(this).css("transform", "scale(0.8)"); // shrink the card
            isShrunk = true;
        } else {
            $(this).css("transform", "scale(1)"); // return to original size
            isShrunk = false;
        }
    });
    $(".outerCard").hover(function() {
        $(this).css("transform", "scale(1.1)"); // enlarge the card
    }, function() {
        if (!isShrunk) {
            $(this).css("transform", "scale(1)"); // return to original size
        }
    });
});