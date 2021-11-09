$(".message-1").on('keyup keypress', function() {
    let a = 'a'
    a = $(".user-name").val()
    socket.emit('typing', a)
})
