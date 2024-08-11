function toggleMode(){
    const body = document.body
    const image = document.getElementById('img-logo')
    body.classList.toggle('light')

    if (body.classList.contains('light')){
        image.setAttribute('src', 'unknown2.png')
    }else{
        image.setAttribute('src', 'unknown2.png') /* Pode trocar a foto aqui */
    }
}