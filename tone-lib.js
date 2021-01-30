let trackButton = document.getElementById("trackbutton");

let toneIsOff = true;

trackButton.addEventListener("click", () => {
  if (toneIsOff){
    Tone.start();
    toneIsOff = false;
    trackButton.innerText = 'Stop';
    playSong();
  } else {
    Tone.Transport.stop();
    toneIsOff = true;
    trackButton.innerText = 'Start';
  }
});


function playSong() {
  Tone.Transport.bpm.value = 220;
  const synth = new Tone.Synth().toDestination();
  // use an array of objects as long as the object has a "time" attribute
  const mainChords = [
    { 'time': 0, 'note': 'F3', 'duration': '2n.' },
    { 'time': '0:3', 'note': 'C4', 'duration': '4n' },
    { 'time': '1:0', 'note': 'D3', 'duration': '2n.' },
    { 'time': '1:3', 'note': 'C4', 'duration': '4n' },
    { 'time': '2:0', 'note': 'A#2', 'duration': '2n.' },
    { 'time': '2:3', 'note': 'C4', 'duration': '4n' },
    { 'time': '3:0', 'note': 'F3', 'duration': '1n' },
  ];
  const part = new Tone.Part(function (time, note) {
    synth.triggerAttackRelease(note.note, note.duration, time);
  }, mainChords).start(0);

  part.loop = 4
  part.loopEnd = "4m";

  Tone.Transport.start();
}
