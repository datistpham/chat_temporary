socket.on('typing-self', (data) => {
    $('.name-typing').html(`${data}`)
    if(data!=='') {
        $('.dynamic-mes').html(`<div class="balls">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>`)

    }
    else {
        $('.dynamic-mes').html('')
    }
})