import { ChordBox } from 'vexchords';

const chord = new ChordBox('#container', {
  // Customizations (all optional, defaults shown)
  width: 100, // canvas width
  height: 120, // canvas height

  numStrings: 6, // number of strings (e.g., 4 for bass)
  numFrets: 5, // number of frets (e.g., 7 for stretch chords)
  showTuning: true, // show tuning keys

  defaultColor: '#666', // default color
  bgColor: '#FFF', // background color
  strokeColor: '#666', // stroke color (overrides defaultColor)
  textColor: '#666', // text color (overrides defaultColor)
  stringColor: '#666', // string color (overrides defaultColor)
  fretColor: '#666', // fret color (overrides defaultColor)
  labelColor: '#666', // label color (overrides defaultColor)

  fretWidth: 1, // fret width
  stringWidth: 1, // string width

  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  fontSize: undefined,
  fontStyle: 'light',
  fontWeight: '100',
  labelWeight: '100',
});

chord.draw({
  // array of [string, fret, label (optional)]
  chord: [
    [1, 2],
    [2, 1],
    [3, 2],
    [4, 0], // fret 0 = open string
    [5, 'x'], // fret x = muted string
    [6, 'x']
  ],

  // optional: position marker
  position: 5, // start render at fret 5

  // optional: barres for barre chords
  barres: [
    { fromString: 6, toString: 1, fret: 1 },
    { fromString: 5, toString: 3, fret: 3 }
  ],

  // optional: tuning keys
  tuning: ['E', 'A', 'D', 'G', 'B', 'E']
});

//import { ChordBox } from "vexchords";

//const selector = '#container';
//const chord = new ChordBox(selector);

export { chord };