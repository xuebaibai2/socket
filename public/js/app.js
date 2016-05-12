/**
 *
 * Created by Cayden on 16/5/12.
 */
var socket = io();

socket.on('connect',function () {
    console.log('connected to socket.io server');
});
