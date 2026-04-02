const UPGRADES = [  {    name: 'Double Click',    cost: 100,    apply: (game) => {      game.clickValue *= 2;    },  },  {    name: 'Auto Clicker',    cost: 500,    apply: (game) => {      game.autoClickers += 1;    },  },  {    name: 'Cookie Production Boost',    cost: 1000,    apply: (game) => {      game.cookiesPerSecond *= 1.5;    },  },];

module.exports = { UPGRADES };