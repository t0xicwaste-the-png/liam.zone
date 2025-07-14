const form = document.getElementById('terminal-form');
const input = document.getElementById('terminal-input');
const output = document.getElementById('output');

// Focus the input field when the page loads
input.focus();

// Listen for the form submission event
form.addEventListener('submit', function(e) {
  // Prevent the page from reloading (the default form behavior)
  e.preventDefault();

  const cmd = input.value.trim();
  input.value = ''; // Clear the input field right away

  // Get the current text content, but remove the trailing underscore
  let currentOutput = output.innerText.replace(/_\s*$/, '');

  // Handle 'clear' as a special case
  if (cmd === 'clear') {
    output.innerText = '_'; // Reset the screen with just the cursor
    return; // Stop here
  }

  // For all other commands, build the new output string
  const commandLine = `> ${cmd}\n`;
  let resultText = '';

  if (commands[cmd]) {
    resultText = commands[cmd]();
  } else {
    resultText = `Command not recognized.`;
  }

  // Combine the old content, the new command, the result, and the new cursor
  output.innerText = currentOutput + commandLine + resultText + '\n_';

  // Scroll to the bottom
  window.scrollTo(0, document.body.scrollHeight);
});

// The `commands` object remains the same as before
const commands = {
  help: () => `
Available Commands:
- help ............. show this list
- projects ......... view current experiments
- lj_access ........ enter Little John archive
- pipboy ........... boot interface prototype
- hyrogaming ........ recover data logs
- speak ............ simulate JARVIS response
- clear ............ wipe terminal
- unlock ........... ??? (secret)
- radio ............ scan frequencies
`,
  projects: () => `
[ACTIVE MISSIONS]
- LITTLE JOHN ARG..............PHASE II ACTIVE
- PIP-BOY IRL..................PROTOTYPE 0.3
- JARVIS ASSISTANT.............LOCAL ALPHA
- MINECRAFT HORROR MOD.........CHAT LISTENER ENABLED
- HYROGAMING MEMORY VAULT......CORRUPTED
`,
  lj_access: () => `
> ACCESSING LITTLE JOHN SYSTEM...
> DECRYPTING . . .
> Message from: _TheOneWhoReturned_

"He sees through the glass now. Do not trust static. It's not noise — it's a voice."

>> Type 'reveal' or 'cult_pdf' to proceed.
`,
  reveal: () => `
> Hidden File Unlocked:
---BEGIN LOG---
They burned my name. They prayed for silence. But I wrote my gospel in ash.
---END LOG---

Type 'unlock' to continue.
`,
  unlock: () => `
> CODE PHRASE ACCEPTED.
> TRANSMISSION BEGINS...

[REDACTED LOG #031] Little John was never just a boy. He was a key — one we buried.

>> Fragment stored in /data/logs.json
`,
  pipboy: () => `
[STAT]
LEVEL: 7
SPECIAL: S 5 | P 6 | E 4 | C 9 | I 7 | A 6 | L 5
>> Prototype GUI coming soon...

>> Simulate interface at /pipboy.html (not functional yet)
`,
  hyrogaming: () => `
> Recovering Old Files...
> MEMORY.LOG_01 = ERROR
> MEMORY.LOG_02 = FILE LOST

>> Search for: "Forgotten Forest.mp4"
>> Tip: There’s something in the trees.
`,
  speak: () => `
JARVIS: Hello Liam. You left a note for yourself: “Don't forget the wake word test. And check the weather plugin.”

[Simulated Response Complete]
`,
  radio: () => `
> Scanning frequencies...
[93.3 MHz] ...static... the eyes are...
[101.9 MHz] ...Hyrogaming Anniversary Promo...
[404.0 MHz] ...He is coming back...
`,
  cake: () => `The cake is a lie. But you already knew that.`,
  godmode: () => `You are now invincible. But can you handle the truth?`,
  meow: () => `A cat appears. It judges you silently before vanishing.`,
  invert: () => `>> DISPLAY INVERTED: Welcome to the Upside Terminal.`,
  sudo: () => `ACCESS GRANTED. But with great power comes great instability...`,
  llama: () => `A wild llama appears and spits pixelated confusion.`,
  404: () => `ERROR: Page not found. Reality not found. You not found.`,
  sing: () => `*beep boop* ♫ Never gonna give you up... ♫`,
  ascii: () => `╔═╗┬ ┬┌─┐┌─┐┬
╠═╝│ │├─┘├─┘│
╩  └─┘┴  ┴  o`,
  reset: () => `Reinitializing core personality... Memory fragments erased. Just kidding.`,
  jumpscare: () => `*LOUD STATIC NOISE* Just kidding... or was I?`,
  hydra: () => `Cut off one head... TWO MORE SHALL TAKE ITS PLACE.`,
  sacrifice: () => `Blood offering accepted. The ARG deepens.`,
  forest: () => `You hear twigs snap. The Forgotten Forest remembers you.`,
  glitch: () => `Reality is distorting... glyphs replaced text... run...`,
  tea: () => `The system brews you a nice hot cup of tea. How polite.`,
  vault: () => `You found the Vault. But where is the key?`,
  dance: () => `💃 Initiating dance.exe ... 🕺 ERROR: Too much groove.`,
  echo: () => `You say: Hello?
Terminal replies: Hello?
...Hello?
......Hello?`,
  summon: () => `You call to him. He hears. The screen flickers violently...`
  // NOTE: The 'clear' command function is no longer needed here,
  // but leaving it in won't cause any harm.
};
