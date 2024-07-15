

const state = [

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

const index = 1;
const newName = 'Green Lantern';



const newState = state.with(index, {
  ...state.at(index),
  name: newName
} );


state[0].name = 'Volcan Negro';

console.table(newState);

console.log('El ultimo: ', state.at(0));

