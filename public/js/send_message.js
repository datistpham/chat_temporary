$(document).ready(function() {
    let a = 'a'
    $('.btn-join').on('click', function() {
        a = $(".user-name").val()
        $('.wrapper').css({ 'display': "none" })
        $('.room').css({ "display": "block" })
    })
    $('.message-1').on('keyup keypress', function() {
        if ($(this).val() !== '') {
            $('.send-message-1').css({ 'cursor': 'pointer' }).removeAttr("disabled")
        } else {
            $('.send-message-1').css({ 'cursor': 'not-allowed' }).attr("disabled", true)
        }
    })
    $('.send-message-1').on('click', function() {
        if ($('.message-1').val() !== '') {
            let content_message = $('.message-1').val()
            socket.emit('send-content-client-self', { username: a, content: content_message })
            $(this).css({ 'cursor': 'not-allowed' }).attr("disabled", true)
        }
        $('.message-1').val('')
    })

})