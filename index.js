// Code your solutions in this file
const namesArray = ["Lisa", "Kaitlin", "Jan"];

function writeCards(namesArray) {
    let thankYouCards = []
    for ( let i = 0; i < namesArray.length; i++) {
    thankYouCards.push(`Thank you, ${namesArray[i]}, for the wonderful surprise gift!`); 
     
}
return thankYouCards
}

function countDown( startingNumber = 10 ) {
    while ( startingNumber > 0 ) {
      console.log( startingNumber );
      startingNumber -= 1;
    }
    console.log( startingNumber );
  }