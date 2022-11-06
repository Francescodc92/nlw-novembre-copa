 function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/Bandeiras dos países/icon=${player1}.svg" alt="bandiera del ${player1}">
      <strong>${hour}</strong>
      <img src="./assets/Bandeiras dos países/icon=${player2}.svg" alt="bandiera del ${player2}">
    </li>
  `
 }
 
 let delay = -0.4;

 function createCard(data, day, games) {
  delay = delay + 0.4;
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${data}<span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
 }
 
 
 document.querySelector('#cards').innerHTML = 
   createCard(
    '24/11',
    'venerdi',
    createGame('brazil', '13:00', 'cameroon' ) + 
    createGame('portugal', '16:00', 'uruguay' )
   )+
   createCard(
    '28/11',
    'lunedi', 
    createGame('brazil', '13:00', 'serbia')
   )+
   createCard(
    '02/12', 
    'sabato',
    createGame('brazil', '18:00', 'switzerland')
   )
 