$(document).ready(function() {

    $('.user-name').on('keyup keypress keydown', function() {
        if($(this).val() !=='') {
            $('.btn-join').removeAttr('disabled')
        }
        else {
            $('.btn-join').attr('disabled',true)
        }
    })
    
})
