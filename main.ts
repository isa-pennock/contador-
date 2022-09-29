let numerito = randint(5, 10)
basic.showNumber(numerito)
for (let index = 0; index <= numerito; index++) {
    basic.showNumber(index)
    for (let index2 = 0; index2 < index; index2++) {
        music.playTone(494, music.beat(BeatFraction.Whole))
    }
}
basic.showString("A buscar!!!")
music.playMelody("C D E F G A B C5 ", 120)
basic.forever(function () {
	
})
