'use strict';

const monitor = {
  sizes: {

    height: {
      value: 20,
      scale: 'sm',
    },

    width: {
      value: 20,
      scale: 'sm',
    },

  },

  brightness: '2000lm',

  color: 'black',

  manufacturer: {
    name: 'Sony',

    address: {
      city: 'London',
      street: 'Baker',
      house: 27,
    }
    ,
  },

}

const cat = {
  name: 'Barsik',
  girlfriend: {
    name: 'Lola',
    childs: {
        name: 'child1',
    },
   
  }
}

//
// const height = monitor.size.height.value;
// const width = monitor.size.width.value;

const {sizes: {
          height: {value: heightValue },
          width: {value: widthValue}
          },

      manufacturer: {
          address: {
            city
          }
      }
      } = monitor;





const {
  girlfriend: {name: barsikGirl},
  girlfriend:{childs: {name: child}}
} = cat;



// const diagonal = Math.sqrt((heightValue * heightValue) + (widthValue * widthValue));

console.log(child, barsikGirl);