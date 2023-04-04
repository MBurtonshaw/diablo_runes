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
      
      const things_1 = items.item_1;
      const things_2 = items.item_2;
      return(
          <div>
            <div>
                {things_1.map((part, i) => <p key={i}>{part}</p>)}
              </div>
              <div>
              {things_2.map((part, i) => <p key={i}>{part}</p>)}
            </div>
          </div>
        
      );

      
      

    }
    




}

