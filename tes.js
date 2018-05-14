const spells = [
  { q: 3, w: 0, e: 0, spellName: 'Cold Snap' },
  { q: 0, w: 2, e: 1, spellName: 'Alacrity' },
  { q: 1, w: 0, e: 2, spellName: 'Forge Spirit' },
  { q: 0, w: 0, e: 3, spellName: 'Sunstrike' },
  { q: 1, w: 2, e: 0, spellName: 'Tornado' },
  { q: 0, w: 3, e: 0, spellName: 'EMP' },
  { q: 0, w: 1, e: 2, spellName: 'Chaos Meteor' },
  { q: 1, w: 1, e: 1, spellName: 'Deafening Blast' },
  { q: 2, w: 0, e: 1, spellName: 'Ice Wall' },
  { q: 2, w: 1, e: 0, spellName: 'Ghost Walk' },
];

var input = 'qwa'

var qCount = 0;
var wCount = 0;
var eCount = 0;

for (var i = 0; i <= input.length; i++) {
  if (input[i] === 'q') {
    qCount++;
  }
  else if (input[i] === 'w') {
    wCount++;
  }
  else if (input[i] === 'e') {
    eCount++;
  }
}

var output = []
for (var i = 0; i <= spells.length - 1; i++) {
  if (spells[i].q === qCount) {
    if (spells[i].w === wCount) {
      if (spells[i].e === eCount) {
        output.push(spells[i].spellName);
      }
      else {
        output.push('Combination does not exist');
      }
    }
  }
}
console.log(output)