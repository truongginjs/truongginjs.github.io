const audioMeo = new Audio('./resource/meomeomeo.wav');
const audioOhno = new Audio('./resource/ohnoshort.wav');

const tranDucBo = $('.tran-duc-bo');

function pauseAudio(audio){
    audio.pause()
    audio.currentTime = 0;
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

$(".present").mouseenter(()=>{
    audioOhno.play()
})

$(".present").mouseout(function () { 
    pauseAudio(audioOhno)
});

$(".present").click(async function (e) { 
    tranDucBo.addClass('animation-bo')
    
    pauseAudio(audioOhno)
    audioMeo.play()
    
    let nap = $("#nap");
    nap.addClass("present-rotate")
    await sleep(audioMeo.duration*1000)
    nap.removeClass("present-rotate")
});