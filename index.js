

// define global variables
// array of notes
var array = [
    'C4',
    'Eb4',
    'F4',
    'Gb4',
    'G4',
    'Bb4',
    'C5',
    'Eb5',
    'F5',
    'Gb5',
    'G5',
    'Bb5',
    'C6',
    'Eb6',
    'F6',
    'Gb6',
    'G6',
    'Bb6',
];


var array_slowed = [
    "C2",
    "E2",
    "G2",
    "B2",
    "D3",
    "E3",
    "G3",
    "B3",
    "D4",
];

var midi = new Midi("pls.mid");
var past = Math.floor(Math.random() * array.length);

let currentNote = 0;
var direction_up = true;


function backingTrack() {
    const synth = new Tone.PolySynth(Tone.Synth).toDestination();
    const now = Tone.now()
    synth.triggerAttack("C2", now);
    synth.triggerAttack("E2", now + 0.5);
    synth.triggerAttack("G2", now + 1);
    synth.triggerAttack("B2", now + 1.5);
    synth.triggerAttack("D3", now + 2);
}



function piano() {
    const piano = new Tone.Sampler({
        urls: {
            "C4": "C4.mp3",
            "D#4": "Ds4.mp3",
            "F#4": "Fs4.mp3",
            "A4": "A4.mp3",
        },
        release: 1,
        baseUrl: "https://tonejs.github.io/audio/salamander/",
    }).toDestination();


    if (currentNote <= 0) direction_up = true;
    if (currentNote >= array.length - 1) direction_up = false;

    currentNote = (direction_up) ? currentNote + 1 : currentNote - 1;
    var now = Tone.now()

    console.log(array_slowed[currentNote])

    Tone.loaded().then(() => {
        piano.triggerAttack(["`${[array_slowed[currentNote]]}`"], 4);
    })


}


function balls2() {
    const synth = new Tone.PolySynth(Tone.Synth).toDestination();

    if (currentNote <= 0) direction_up = true;
    if (currentNote >= array.length - 1) direction_up = false;

    currentNote = (direction_up) ? currentNote + 1 : currentNote - 1;
    var now = Tone.now()

    console.log(array_slowed[currentNote])
    synth.triggerAttack(array_slowed[currentNote], now);

}

function hold() {
    const synth = new Tone.PolySynth(Tone.Synth).toDestination();

    if (currentNote <= 0) direction_up = true;
    if (currentNote >= array.length - 1) direction_up = false;

    currentNote = (direction_up) ? currentNote + 1 : currentNote - 1;
    var now = Tone.now()

    console.log(array_slowed[currentNote])
    synth.triggerAttack(array_slowed[currentNote], now);

}


function blues() {
    var synth = new Tone.Synth().toMaster();

    if (currentNote <= 0) direction_up = true;
    if (currentNote >= array.length - 1) direction_up = false;

    var interval = Math.floor(Math.random() * 2);

    currentNote = (direction_up) ? currentNote + interval : currentNote - interval;

    console.log(currentNote)




    synth.triggerAttackRelease(array[currentNote], '0.1');



    console.log("nice")
}
