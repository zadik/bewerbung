$(function() {
    var iframe = $('#player1')[0];
    var player = $f(iframe);
    var status = $('.status');

    // When the player is ready, add listeners for pause, finish, and playProgress
    player.addEvent('ready', function() {
        status.text('ready');

        player.addEvent('pause', onPause);
        player.addEvent('finish', onFinish);
        player.addEvent('playProgress', onPlayProgress);
    });

    // Call the API when a button is pressed
    $('button').bind('click', function() {
        player.api($(this).text().toLowerCase());
    });

    function onPause() {
        status.text('paused');
    }

    function onFinish() {
        status.text('finished');
    }

    function onPlayProgress(data) {
        status.text(data.seconds + 's played');
    }
});

function displayPause(){
    document.getElementById("play-button").style.display = "none";
    document.getElementById("pause-button").style.display = "block";
    $('.overlay').css('opacity', 0.1);
}

function displayPlay(){
    document.getElementById("pause-button").style.display = "none";
    document.getElementById("play-button").style.display = "block";
    $('.overlay').css('opacity', 1);

}