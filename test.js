/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const L = parseInt(Readline());
const H = parseInt(readline());
const T = readline();
const text = T.toLowerCase();

for (let i = 0; i < H; i++) {
  const ROW = readline();
  let toShow = "";
  for (let j = 0; j < text.length; j++) {
    const orgIdx = text.charCodeAt(j);
    const idx = orgIdx >= 97 && orgIdx <= 122 ? orgIdx - 97 : 26;
    toShow += ROW.slice(idx * L, idx * L + L);
  }
  console.log(toShow);
}
