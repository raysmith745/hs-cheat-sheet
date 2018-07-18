var request = new XMLHttpRequest();
request.open("GET", "/hs-cheat-sheet/json/data.json", false);
request.send(null);
var cards = JSON.parse(request.responseText);

function returnAllSpells() {
  cards.forEach(function(card) {
    if (card.type == "Spell") {
      console.log(card);
    }
  });
}

function returnAllMinions() {
  cards.forEach(function(card) {
    if (card.type == "Minion") {
      console.log(card);
    }
  });
}

function returnAllCollectibleCards() {
  cards.forEach(function(card) {
    if (card.collectible == true) {
      console.log(card);
    }
  });
}

function returnAllTwoManaCollectibleCards() {
  cards.forEach(function(card) {
    if (card.cost == 2 && card.collectible == true) {
      console.log(card);
    }
  });
}

function returnAllWarlockBasicCards() {
  cards.Basic.forEach(function(card) {
    if (card.playerClass == "Warlock") {
      console.log(card);
    }
  });
}