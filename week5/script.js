// Card class 
class Card {
    constructor(value, suit) {
      this.value = value;
      this.suit = suit;
    }
  }
  
  // Suit names
  const suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];
  
  // Deck array
  const deck = [];
  
  // Build deck
  for (let suit of suits) {
    for (let value = 2; value <= 10; value++) {
      deck.push(new Card(value, suit));
    }
    
    deck.push(new Card('Jack', suit));
    deck.push(new Card('Queen', suit));
    deck.push(new Card('King', suit));
    deck.push(new Card('Ace', suit)); 
  }
  
  // Deal hand
  function dealHand() {
    document.getElementById('hand').innerHTML = ''; 
    
    let hand = [];
    for (let i = 0; i < 5; i++) {
      let card = deck.pop();
      hand.push(card);
      
      let cardDiv = document.createElement('div');
      cardDiv.classList.add('card');
        
      cardDiv.innerHTML = `
        <div class="value">${card.value}</div>
        <div class="suit">${card.suit}</div>  
      `;
      
      document.getElementById('hand').appendChild(cardDiv); 
    }
  }
  
  // Attach to button
  document.getElementById('deal-button').addEventListener('click', dealHand);