let framechat = document.querySelector('.frame-chat')
socket.on('send-content-server-self', (data) => {
    $('.frame-chat').append(`<div class='frame-chat-self'><p> ${data.username} : ${data.content}  <span class='date_send'>&nbsp;&nbsp;&nbsp;&nbsp;${data.date_status}</span></p></div>`)
    framechat.scrollTop = framechat.scrollHeight - framechat.clientHeight
})
socket.on('send-content-server-other', (data) => {
    $('.frame-chat').append(`<div class='frame-chat-other'><p> ${data.username} : ${data.content} <span class='date_send'>&nbsp;&nbsp;&nbsp;&nbsp;${data.date_status}</span></p></div>`)
    framechat.scrollTop = framechat.scrollHeight - framechat.clientHeight
})
socket.on('leave-rooms-server' ,(data)=> {
    $('.frame-chat').append(`<div class='leave-text-room'><p>${data} has just left room</p></div>`)
})
