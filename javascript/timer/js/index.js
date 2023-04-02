import { Controls } from "./controls.js"
import { Timer } from "./timer.js"

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')

const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')




//Factory function
const configTimer = {
    minutesDisplay,
    secondsDisplay,
    resetControls: Controls.reset,

}
const timer = Timer(configTimer)


const controls = Controls({    
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonStop}
)



// Panel Control
buttonPlay.addEventListener('click', function() {
    controls.play()
    timer.countDown()
})

buttonPause.addEventListener('click', function() {
    controls.pause()
    timer.hold()
    
})

buttonStop.addEventListener('click', function(){
    controls.reset()
    timer.reset()
})


// Sound Control
buttonSoundOn.addEventListener('click', function() {
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
} )

buttonSoundOff.addEventListener('click', function() {
    buttonSoundOn.classList.remove('hide')
    buttonSoundOff.classList.add('hide')
} )


buttonSet.addEventListener('click', function(){
    let newMinutes = controls.getMinutes()

    if (!newMinutes){
        timer.reset()
        return
    }

    minutes =  newMinutes
    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
})