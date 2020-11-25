const audioMeo = new Audio('./resource/meomeomeo.wav');
const audioOhno = new Audio('./resource/ohnoshort.wav');

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
    pauseAudio(audioOhno)
    audioMeo.play()
    let nap = $("#nap");
    nap.addClass("present-rotate")
    await sleep(2000)
    nap.removeClass("present-rotate")
});