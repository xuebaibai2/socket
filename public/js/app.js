/**
 *
 * Created by Cayden on 16/5/12.
 */

var name = getQueryVariable('name') || 'Anonymous';
var room = getQueryVariable('room');
var socket = io();

console.log(name + ' wants to join ' + room);

socket.on('connect', function () {
    console.log('connected to socket.io server');
});

socket.on('message', function (message) {
    console.log("New Message");
    console.log(message.text);
    var momentTimestamp = moment.utc(message.timestamp);
    var $message = jQuery('.messages');

    $message.append('<p><strong>' + message.name + ' ' + momentTimestamp.local().format('MMM-Do-YYYY h:mm:ssa') + '</strong></p>');
    $message.append('<p>' + message.text + '</p>');
    // jQuery('.messages').append('<p><strong>'+momentTimestamp.local().format('MMM-Do-YYYY h:mm:ssa')+'</strong>: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + message.text + '</p>');
});

//handles submitting of new message
var $form = jQuery('#message-form');

$form.on('submit', function (event) {
    event.preventDefault();

    var $message = $form.find('input[name=message]');

    socket.emit('message', {
        name: name,
        text: $message.val()
    });
    $message.val('');
    $message.focus();
});