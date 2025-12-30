# Simon Game

A browser-based Simon memory game built with HTML, CSS, and JavaScript.

## How to Play
- Press any key to start.
- Watch the highlighted button and its sound.
- Repeat the sequence by clicking the buttons in the same order.
- Each round adds one more colour to the sequence; the speed stays the same.
- A wrong click ends the game; press any key to restart.

## Rules
- Valid colours: red, blue, green, yellow.
- You must match the entire shown sequence for the round to advance.
- Sequences are cumulative: each new colour appends to the prior sequence.
- Game over triggers a screen flash and a "wrong" sound.

## Controls
- Keyboard: any key to start or restart after game over.
- Mouse/touch: click the coloured buttons to input the sequence.

## Project Structure
- index.html — markup and title display.
- styles.css — layout and button styles.
- game.js — game logic (sequence generation, input checking, sounds).
- sounds/ — audio files for each colour and the wrong sound.

## Getting Started
- Open index.html in a browser.
- Ensure sounds/ folder stays next to index.html so audio loads correctly.

## Notes
- Random numbers are generated in the range 0–3 to pick colours.
- Game state resets on game over: level, patterns, and start flag.
