/*Created by Jesica Prades on 7/24/2017. */

var onlineBox = "";
var offlineBox = "";

function callApi() {

    var accounts = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
    var request = "https://wind-bow.glitch.me/twitch-api/streams/";

    for (var i = 0; i < accounts.length; i++) {


        $.getJSON(request + accounts[i], function(data) {


            if (data.stream === null) {

                offlineBox += '<a class="link" target="_blank" href="' + data._links.channel +'">';
                offlineBox += '<div class="media offline" id="twitchBox">';
                offlineBox += '<img class="d-flex align-self-center mr-3" src="images/Offline_opt.jpg" id="logo">';
                offlineBox += '<div class="media-body">';
                offlineBox += '<h4 class="mt-0" id="streamer">' + data._links.channel.substring(38) + '</h4>';
                offlineBox += '<p id="game">Offline</p>';
                offlineBox += '</div>';
                offlineBox += '</div>';
                offlineBox += '</a>';


            } else {

                onlineBox += '<a class="link" target="_blank" href="' + data.stream.channel.url +'">';
                onlineBox += '<div class="media online" id="twitchBox">';
                onlineBox += '<img class="d-flex align-self-center mr-3" src="' + data.stream.channel.logo + '" id="logo">';
                onlineBox += '<div class="media-body">';
                onlineBox += '<h4 class="mt-0" id="streamer">' + data.stream.channel.display_name + '</h4>';
                onlineBox += '<p id="game">' + data.stream.channel.game + '</p>';
                onlineBox += '<small id="status">' + data.stream.channel.status + '</small>';
                onlineBox += '</div>';
                onlineBox += '</div>';
                onlineBox += '</a>';
            }

            $("#twitchDiv").html(onlineBox + offlineBox);

        });
    }
}



$(document).ready(function () {
    $().button('toggle');
    callApi();


    // BUTTONS
    $("#online").click( function () {
        $("#twitchDiv").html(onlineBox);
        $("button").removeClass("active");
        $("#online").addClass("active");


    });

    $("#offline").click( function () {
        $("#twitchDiv").html(offlineBox);
        $("button").removeClass("active");
        $("#offline").addClass("active");

    });

    $("#all").click( function () {
        $("#twitchDiv").html(onlineBox + offlineBox);
        $("button").removeClass("active");
        $("#all").addClass("active");

    });



});

