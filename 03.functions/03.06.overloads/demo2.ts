let suits = ["hearts", "spades", "clubs", "diamonds"]; // 红桃 黑桃 梅花 方片 - 扑克牌上四种花色

function pickCard(x: {suit: string; card: number; }[]): number;
function pickCard(x: number): {suit: string; card: number; };
function pickCard(x): any {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}

let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard1 = myDeck[pickCard(myDeck)];
console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2 = pickCard(15);
console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);

//its customary to order overloads from most specific to least specific.
// Note that the function pickCard(x): any piece is not part of the 
// overload list, so it only has two overloads: one that takes an 
// object and one that takes a number. Calling pickCard with any other parameter types would cause an error.

// try 
// let pickedCard3 = pickCard("a");
// console.log("card: " + pickedCard3.card + " of " + pickedCard3.suit);