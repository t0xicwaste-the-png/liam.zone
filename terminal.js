const input = document.getElementById('terminal-input');
const output = document.getElementById('output');
const beep = document.getElementById('beep');

const commands = {
  help: () => {
    return `
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
`;
  },

  projects: () => {
    return `
[ACTIVE MISSIONS]
- LITTLE JOHN ARG..............PHASE II ACTIVE
- PIP-BOY IRL..................PROTOTYPE 0.3
- JARVIS ASSISTANT.............LOCAL ALPHA
- MINECRAFT HORROR MOD.........CHAT LISTENER ENABLED
- HYROGAMING MEMORY VAULT......CORRUPTED
`;
  },

  lj_access: () => {
    return `
> ACCESSING LITTLE JOHN SYSTEM...
> DECRYPTING . . .
> Message from: _TheOneWhoReturned_

"He sees through the glass now. Do not trust static. It's not noise — it's a voice."

>> Type 'reveal' or 'cult_pdf' to proceed.
`;
  },

  reveal: () => {
    return `
> Hidden File Unlocked:
---BEGIN LOG---
They burned my name. They prayed for silence. But I wrote my gospel in ash.
---END LOG---

Type 'unlock' to continue.
`;
  },

  unlock: () => {
    return `
> CODE PHRASE ACCEPTED.
> TRANSMISSION BEGINS...

[REDACTED LOG #031] Little John was never just a boy. He was a key — one we buried.

>> Fragment stored in /data/logs.json
`;
  },

  pipboy: () => {
    return `
[STAT]
LEVEL: 7
SPECIAL: S 5 | P 6 | E 4 | C 9 | I 7 | A 6 | L 5
>> Prototype GUI coming soon...

>> Simulate interface at /pipboy.html (not functional yet)
`;
  },

  hyrogaming: () => {
    return `
> Recovering Old Files...
> MEMORY.LOG_01 = ERROR
> MEMORY.LOG_02 = FILE LOST

>> Search for: "Forgotten Forest.mp4"
>> Tip: There’s something in the trees.
`;
  },

  speak: () => {
    return `
JARVIS: Hello Liam. You left a note for yourself: “Don't forget the wake word test. And check the weather plugin.”

[Simulated Response Complete]
`;
  },

  radio: () => {
    return `
> Scanning frequencies...
[93.3 MHz] ...static... the eyes are...
[101.9 MHz] ...Hyrogaming Anniversary Promo...
[404.0 MHz] ...He is coming back...
`;
  },

  
  cake: () => {
    return `The cake is a lie. But you already knew that.`;
  },

  godmode: () => {
    return `You are now invincible. But can you handle the truth?`;
  },

  meow: () => {
    return `A cat appears. It judges you silently before vanishing.`;
  },

  invert: () => {
    return `>> DISPLAY INVERTED: Welcome to the Upside Terminal.`;
  },

  sudo: () => {
    return `ACCESS GRANTED. But with great power comes great instability...`;
  },

  llama: () => {
    return `A wild llama appears and spits pixelated confusion.`;
  },

  404: () => {
    return `ERROR: Page not found. Reality not found. You not found.`;
  },

  sing: () => {
    return `*beep boop* ♫ Never gonna give you up... ♫`;
  },

  ascii: () => {
    return `╔═╗┬ ┬┌─┐┌─┐┬
╠═╝│ │├─┘├─┘│
╩  └─┘┴  ┴  o`;
  },

  reset: () => {
    return `Reinitializing core personality... Memory fragments erased. Just kidding.`;
  },

  jumpscare: () => {
    return `*LOUD STATIC NOISE* Just kidding... or was I?`;
  },

  hydra: () => {
    return `Cut off one head... TWO MORE SHALL TAKE ITS PLACE.`;
  },

  sacrifice: () => {
    return `Blood offering accepted. The ARG deepens.`;
  },

  forest: () => {
    return `You hear twigs snap. The Forgotten Forest remembers you.`;
  },

  glitch: () => {
    return `Reality is distorting... glyphs replaced text... run...`;
  },

  tea: () => {
    return `The system brews you a nice hot cup of tea. How polite.`;
  },

  vault: () => {
    return `You found the Vault. But where is the key?`;
  },

  dance: () => {
    return `💃 Initiating dance.exe ... 🕺 ERROR: Too much groove.`;
  },

  echo: () => {
    return `You say: Hello?
Terminal replies: Hello?
...Hello?
......Hello?`;
  },

  summon: () => {
    return `You call to him. He hears. The screen flickers violently...`;
  },
  clear: () => {
    output.textContent = '';
    return '';
  }
};

input.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    const cmd = input.value.trim();
    beep.play();
    output.innerText += `\n> ${cmd}\n`;
    if (commands[cmd]) {
      const result = commands[cmd]();
      output.innerText += result;
    } else {
      output.innerText += `Command not recognized.`;
    }
    input.value = '';
    window.scrollTo(0, document.body.scrollHeight);
  }
});