// ===== PRESET: Funk SP - bateria base =====
// 130 BPM | kick em ciclo de 2 compassos | snare em ciclo de 4 compassos
// Cada [ ... ] = 1 compasso de 16 passos. < ... > = um compasso por vez, em ordem.

const base = 'https://raw.githubusercontent.com/realdreian/dreian-sample/main/'

samples({
  d808:   base + '808/808_Db.wav',
  kick:   base + 'kick/Kick-%20LET%27S%20GO%204_Dbm.wav',
  snare:  base + 'snare/Snare_Db.wav',
  perc:   base + 'perc/Atabaques%20-%202k24_Dbm.wav'
})

setcps(130/60/4)

stack(
  // KICK
  s(`<
    [kick ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~]
    [kick ~ ~ ~ ~ ~ ~ ~ kick ~ ~ ~ ~ ~ ~ ~]
  >`),
  // SNARE
  s(`<
    [snare ~ ~ snare ~ ~ snare ~ ~ ~ ~ ~ snare ~ ~ ~]
    [snare ~ ~ snare ~ ~ snare ~ ~ ~ snare ~ snare ~ ~ ~]
    [snare ~ ~ snare ~ ~ snare ~ ~ ~ ~ ~ snare ~ ~ ~]
    [snare ~ ~ snare ~ ~ snare ~ ~ ~ snare ~ snare ~ snare snare]
  >`)
)