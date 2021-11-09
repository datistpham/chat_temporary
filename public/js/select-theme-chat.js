const theme_= document.querySelectorAll('.all-theme-1')
const frame_chat= document.querySelector('.frame-chat')
const storage_theme= document.querySelector('.storage-theme')
const room= document.querySelector('.room')

theme_.forEach((item)=> {
   item.addEventListener('click', function() {
    frame_chat.style.backgroundImage= `url(${item.getAttribute('data-theme')})`
    storage_theme.style.display= 'none'
    room.style.display= 'block'
   }) 
})  