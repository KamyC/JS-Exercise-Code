var channels = ["freecodecamp","channel_1","channel_2","ESL_SC2"];

function getChannelInfo() {
  channels.forEach(function(channel) {

    function createURL(type, name) {
      return 'https://wind-bow.gomix.me/twitch-api/' + type + '/' + name + '?callback=?';
    };

    $.getJSON(createURL("streams", channel), function(data) {
      var game,
          status;
      if (data.stream === null) {
        game = "Offline";
        status = "offline";
      } else if (data.stream === undefined) {
        game = "Account Closed";
        status = "offline";
      } else {
        game = data.stream.game;
        status = "online";
      };
      $.getJSON(createURL("channels", channel), function(data) {
        var name = data.display_name != null ? data.display_name : channel;
        var description = status === "online" ? ': ' + data.status : "";
        var html='<div class="row"><a href="' + data.url + '" target="_blank">' + name + '</a>'+ game+'</div>';
        status === "online" ? $(".content").prepend(html) : $(".content").append(html);
      });
    });
  });
};

$(document).ready(function() {
 	getChannelInfo();
});