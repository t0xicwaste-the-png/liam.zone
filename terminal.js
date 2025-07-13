const input = document.getElementById('terminal-input');
const output = document.getElementById('output');
const beep = document.getElementById('beep');

let chainProgress = {
  forest: false,
  glitch: false,
  summon: false,
  unlocked_truth: false,
  llama: false,
  dance: false,
  tea: false,
  unlocked_party: false
};

  projects: () => {
    return `
[ACTIVE MISSIONS]
- ?????? ??? ???..............????? II ACTIVE
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

  forest: () => {
    chainProgress.forest = true;
    return "You feel the trees watching.";
  },

  glitch: () => {
    if (!chainProgress.forest) return "The system glitches, but nothing connects...";
    chainProgress.glitch = true;
    return "Reality flickers. You see something in the static.";
  },

  summon: () => {
    if (!chainProgress.glitch) return "Nothing answers your call. Try again later.";
    chainProgress.summon = true;
    chainProgress.unlocked_truth = true;
    return "He hears you. The final gate is now open.\n>> Type 'reveal_truth'";
  },

  reveal_truth: () => {
    if (!chainProgress.unlocked_truth) return "ACCESS DENIED: Sequence incomplete.";
    return `
>> FINAL TRANSMISSION LOG <<
They made him digital. They thought they could contain him. They were wrong.
He is watching through the static. Even now.

>> Fragment Unlocked: REDACTED_MEMORY_01.log
`;
  },

  llama: () => {
    chainProgress.llama = true;
    return "A wild llama gallops in, wearing shades.";
  },

  dance: () => {
    if (!chainProgress.llama) return "ERROR: No dance partner found.";
    chainProgress.dance = true;
    return "💃 The llama grooves. The rhythm intensifies.";
  },

  tea: () => {
    if (!chainProgress.dance) return "The kettle is cold. Something's missing.";
    chainProgress.tea = true;
    chainProgress.unlocked_party = true;
    return "The tea is served. You’ve unlocked PARTY MODE.\n>> Type 'celebrate'";
  },

  celebrate: () => {
    if (!chainProgress.unlocked_party) return "ACCESS DENIED: You haven’t earned this party.";
    return `
🎉🎉🎉 PARTY MODE ACTIVATED 🎉🎉🎉
Llama dances. Tea flows. ASCII rainbows glitch across the screen.
You’ve reached the terminal’s chaotic core.

Type 'reset_chain' to do it again.
`;
  },

  reset_chain: () => {
    chainProgress = {
      forest: false,
      glitch: false,
      summon: false,
      unlocked_truth: false,
      llama: false,
      dance: false,
      tea: false,
      unlocked_party: false
    };
    return "All command chains reset.";
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
