$(document).ready(function() {

    $(window).on('keyup', function(e) {
        let x = e.which || e.keyCode
        if (x === 13) {
            let time = new Date()
            let year = time.getFullYear()
            let month = time.getMonth()
            let date = time.getDate()
            let hours = time.getHours()
            if (parseInt(hours) < 10) {
                hours = `0${hours}`
            }
            let minutes = time.getMinutes()
            if (parseInt(minutes) < 10) {
                minutes = `0${minutes}`
            }
            time_status = `${date}/${month}/${year} ${hours}:${minutes}`
            a = $(".user-name").val()
            $('.wrapper').css({ 'display': "none" })
            $('.room').css({ "display": "block" })
            $('.own-name-1').html(a)
            socket.emit('new-user', a)
        }

    })
    $('.btn-join').on('click', function() {

        let time = new Date()
        let year = time.getFullYear()
        let month = time.getMonth()
        let date = time.getDate()
        let hours = time.getHours()
        if (parseInt(hours) < 10) {
            hours = `0${hours}`
        }
        let minutes = time.getMinutes()
        if (parseInt(minutes) < 10) {
            minutes = `0${minutes}`
        }
        time_status = `${date}/${month}/${year} ${hours}:${minutes}`
        a = $(".user-name").val()
        $('.wrapper').css({ 'display': "none" })
        $('.room').css({ "display": "block" })
        $('.own-name-1').html(a)
        socket.emit('new-user', a)
    })
    $('.message-1').on('keyup keypress', function() {
        if ($(this).val() !== '') {
            $('.send-message-1').css({ 'cursor': 'pointer' }).removeAttr("disabled")
        } else {
            $('.send-message-1').css({ 'cursor': 'not-allowed' }).attr("disabled", true)
        }
    })
    $(window).on('keyup', function(e) {
        let x = e.which || e.keyCode
        if (x === 13) {
            if ($('.message-1').val() !== '') {
                let content_message = $('.message-1').val()
                socket.emit('send-content-client-self', { username: a, content: content_message, date_status: time_status })
                $('.send-message-1').css({ 'cursor': 'not-allowed' }).attr("disabled", true)
            }
            $('.message-1').val('')
        }

    })
    $('.send-message-1').on('click', function() {
        if ($('.message-1').val() !== '') {
            let content_message = $('.message-1').val()
            socket.emit('send-content-client-self', { username: a, content: content_message, date_status: time_status })
            $(this).css({ 'cursor': 'not-allowed' }).attr("disabled", true)
        }
        $('.message-1').val('')

    })

})