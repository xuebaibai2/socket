/**
 *
 * Created by Cayden on 16/5/12.
 */
var socket = io();

socket.on('connect', function () {
    console.log('connected to socket.io server');
});

socket.on('message', function (message) {
    console.log("New Message");
    console.log(message.text);
    var momentTimestamp = moment.utc(message.timestamp);
    jQuery('.messages').append('<p><strong>'+momentTimestamp.local().format('MMM-Do-YYYY h:mm:ssa')+'</strong>: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + message.text + '</p>');
});

//handles submitting of new message
var $form = jQuery('#message-form');

$form.on('submit', function (event) {
    event.preventDefault();

    var $message = $form.find('input[name=message]');

    socket.emit('message', {
        text: $message.val()
    });
    $message.val('');
    $message.focus();
});