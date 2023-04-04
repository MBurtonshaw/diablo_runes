import { React, useEffect, useState } from 'react';
import data from '../data.json';

export default function Items() {
    let item_info = data.items;
    

    let [ items, setItems ] = useState('loading items...');
    function getData() {
      setItems(item_info);
    }

    useEffect( () => { getData() }, [ setItems ] );
   
    if (items !== 'loading items...') {

      return(
        <div>
          {items.forEach(piece=> <p>{piece}</p>)}
        </div>
      );
    } else {
      return('loading items...');
      
      

    }
    




}

