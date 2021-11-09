let framechat = document.querySelector('.frame-chat')
socket.on('send-content-server-self', (data) => {
    $('.frame-chat').append(`<div class='frame-chat-self'><p> ${data.username} : ${data.content} </p></div>`)
    framechat.scrollTop = framechat.scrollHeight - framechat.clientHeight
})
socket.on('send-content-server-other', (data) => {
    $('.frame-chat').append(`<div class='frame-chat-other'><p> ${data.username} : ${data.content} </p></div>`)
    framechat.scrollTop = framechat.scrollHeight - framechat.clientHeight
})