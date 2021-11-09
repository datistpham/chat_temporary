$(".message-1").on('keyup keypress keydown', function() {
    if ($('.message-1').val().length === 0) {
        let a = ''
        socket.emit('typing', a)
    } else {
        let a = $('.user-name').val()
        socket.emit('typing', a)

    }
})
$('.send-message-1').on('click', function() {
    let a = ''
    socket.emit('typing', a)
})
$(window).on('keyup', function(e) {
    let x = e.which || e.keyCode

    if (x === 13) {
        let a = ''
        socket.emit('typing', a)
    }
})