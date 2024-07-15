function kolobok() { 
    var character = prompt ('с кем встретился колобок?');  
    switch(character) {
      case 'дедушка': // if (x === 'value1)
        alert ( 'я от дедушки ушёл' );
        break;
    
      case 'заяц': // if (x === 'value1)
        alert ( 'Убежал' );
        break;
    
      case 'лиса': // if (x === 'value1)
        alert ( 'Меня съели' );
        break;
    
      default: 
        alert ( 'нет таких значений' );
    }
}
kolobok();
