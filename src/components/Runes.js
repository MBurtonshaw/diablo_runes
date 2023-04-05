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
      
      const things_1 = items[0].name;
      const one_runes = items[0].runes.map((rune, i) => <p key={i} className='card-text'>{rune}</p>);

      const things_2 = items[1].name;
      const two_runes = items[1].runes.map((rune, i) => <p key={i}>{rune}</p>);

      const things_3 = items[2].name;
      const three_runes = items[2].runes.map((rune, i) => <p key={i}>{rune}</p>);

      const things_4 = items[3].name;
      const four_runes = items[3].runes.map((rune, i) => <p key={i}>{rune}</p>);

      return(
        <div className='container bg-dark'>
          <div className="card-group m-5 p-5">
            <div className="card bg-light">
              <div className="card-body">
                <h5 className="card-title pb-5">{things_1}</h5>
                {one_runes}
              </div>
            </div>
            <div className="card bg-light">
              <div className="card-body">
                <h5 className="card-title pb-5">{things_2}</h5>
                {two_runes}
              </div>
            </div>
            <div className="card bg-light">
              <div className="card-body bg-light">
                <h5 className="card-title pb-5">{things_3}</h5>
                {three_runes}
              </div>
            </div>
            <div className="card bg-light">
              <div className="card-body">
                <h5 className="card-title pb-5">{things_4}</h5>
                {four_runes}
              </div>
            </div>
          </div>
        </div>
      );

      
      

    }
    




}

