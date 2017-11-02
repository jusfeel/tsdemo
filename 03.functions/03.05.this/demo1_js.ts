/** 
 * In JavaScript, this is a variable that’s set when a function is called. 
 * This makes it a very powerful and flexible feature, but it comes at the 
 * cost of always having to know about the context that a function is 
 * executing in. This is notoriously confusing, especially when returning 
 * a function or passing a function as an argument.
 */
let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function() {
        return function() {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log("card: " + pickedCard.card + " of " + pickedCard.suit);

// try to compile