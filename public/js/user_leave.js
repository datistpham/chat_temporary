$('.btn-leave').on('click', function() {
    socket.emit('leave-rooms', $('.user-name').val())
    $('.wrapper').css({ 'display': "block" })
    $('.room').css({ "display": "none" })
    $('.user-name').val('')
})