




const superHeroes = [

  {
    id: '1',
    name: 'Superman'
  },
  
  {
    id: '2',
    name: 'Batman'
  },
  
  {
    id: '3',
    name: 'Iron Man'
  },
  
  {
    id: '4',
    name: 'Mujer Maravilla'
  },
  
  {
    id: '5',
    name: 'Spiderman'
  }
];


const superHeroesCopy = structuredClone(superHeroes);

superHeroesCopy[0].name = 'Green Lantern'



console.table( superHeroes );
console.table( superHeroesCopy );