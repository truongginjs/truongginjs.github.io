const audioMeo = new Audio('./resource/meomeomeo.wav');
const audioOhno = new Audio('./resource/ohnoshort.wav');

function setHeightTamche() {
    $('.tam-che').height($(window).height() - $('#hop').offset().top - 150)
}

$(window).on('load', setHeightTamche)
$(window).resize(setHeightTamche)

function pauseAudio(audio) {
    audio.pause()
    audio.currentTime = 0;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let present = $(".present")

present.mouseenter(() => {
    audioOhno.play()
})

present.mouseout(function () {
    pauseAudio(audioOhno)
});

present.click(async function () {
    // tranDucBo.addClass('animation-bo')

    pauseAudio(audioOhno)
    audioMeo.play()

    let nap = $("#nap");
    let tranDucBo = $('.tran-duc-bo');
    let background = $('.background')
    let tamche = $('.tam-che');
    let clickhere = $('.clickhere')
    let items = $('.items')

    clickhere.addClass('visible')
    background.addClass('shake run')
    tamche.addClass('shake run')
    items.addClass('appear')

    tranDucBo.addClass("appear");
    await sleep(10)
    nap.addClass("present-rotate")
    tranDucBo.addClass("move")

    await sleep(audioMeo.duration * 1000)

    background.removeClass('shake run')
    tamche.removeClass('shake run')
    tranDucBo.removeClass("move")
    nap.removeClass("present-rotate")
    items.removeClass('appear')
});
