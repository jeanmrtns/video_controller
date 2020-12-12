let video = document.getElementsByClassName('video')[0]
video.volume = 0 // Setado em zero inicialmente para o autoplay funcionar


const play = () => {
    video.play()
}

const pause = () => {
    video.pause()
}

const stop = () => {
    video.pause()
    video.currentTime = 0
}

const rewind = () => {
    video.currentTime -= 15
}

const increase = () => {
    video.currentTime += 15
}

const mute = () => {
    let icon = document.getElementById('muted')

    if (video.volume == 0.0){
        video.volume = 1
        icon.setAttribute('src', './Assets/Images/unmuted.png')
    }
    else {
        video.volume = 0
        icon.setAttribute('src', './Assets/Images/muted.png')
    } 
        
}

// playbackRate = velocidade de reprodução do video, caso desejamos aumentar ou diminuir a velocidade