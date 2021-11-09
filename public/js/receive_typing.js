socket.on('typing-self', (data) => {
    if ($(".message-1").val()!== '') {
        $('.on-typing').html(data)
    }
    else {
         $('.on-typing').html('')
    }
})