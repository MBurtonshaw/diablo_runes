import { React, useEffect, useState } from 'react';
import data from '../data.json';

export default function Runes() {
    let item_info = data.items;
    

    let [ items, setItems ] = useState('loading items...');
    function getData() {
      setItems(item_info);
    }

    useEffect( () => { getData() }, [ setItems ] );
   
    if (items !== 'loading items...') {
      
      const things_1 = items[0];
      const things_2 = items.item_2;
      console.log(things_1.name);
      console.log(things_1.runes[0])
      return(
          <div>
           
          </div>
        
      );

      
      

    }
    




}

