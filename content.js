document.arrive('.chat-line__message', function() {
    var $msgElem = $(this);
    var msgText  = $msgElem.html().replace(/(^|\W)BOOBS(\W|$)/g, ` <img style="width: 28px; height: 28px" title="BOOBS (FMTTV)" src="https://cdn.discordapp.com/emojis/994988366682652742.gif?size=56&quality=lossless"> `);
    $msgElem.html(msgText);
});

document.arrive('.vod-message > div:nth-child(2)', function() {
    var $msgElem = $(this);
    var msgText  = $msgElem.html().replace(/(^|\W)BOOBS(\W|$)/g, ` <img style="width: 28px; height: 28px" title="BOOBS (FMTTV)" src="https://cdn.discordapp.com/emojis/994988366682652742.gif?size=56&quality=lossless"> `);
    $msgElem.html(msgText);
});
