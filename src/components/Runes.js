import { React, useEffect, useState } from 'react';
import data from '../data.json';

export default function Runes() {
    let item_info = data;
    

    let [ items, setItems ] = useState('loading items...');
    function getData() {
      setItems(item_info);
    }

    useEffect( () => { getData() }, [ setItems ] );
   
    function loader() {
      if (items !== 'loading items...') {
        return(
          <div id='rune_container' className='row'>

            <div id='sorceress_div' className='col pt-5'>
              <h1>Sorceress</h1>
              <div className='pt-3'>
                <h4>Helm</h4>
                {items.main.helm.name}
              </div>
              <div className='pt-3'>
                <h4>Armor</h4>
                {items.main.armor.name}
              </div>
              <div className='pt-3'>
                <h4>Shield</h4>
                {items.main.shield.name}
                <p>({items.main.shield.runes[0]}, {items.main.shield.runes[1]}, {items.main.shield.runes[2]}, {items.main.shield.runes[3]})</p>
              </div>
              <div className='pt-3'>
                <h4>Weapon</h4>
                {items.main.weapon.name}
                <p>({items.main.weapon.runes[0]}, {items.main.weapon.runes[1]}, {items.main.weapon.runes[2]}, {items.main.weapon.runes[3]})</p>
              </div>
            </div>

            <div id='rune_div' className='col pt-2'>
              <h3>Total Runes</h3>
              <p>tal x2</p>
              <p>thul x2</p>
              <p>sol x2</p>
              <p>tir</p>
              <p>el</p>
              <p>io</p>
              <p>ko</p>
              <p>amn</p>
              <p>dol</p>
              <p>vex</p>
              <p>pul</p>
              <p>ort</p>
              <p>ral</p>
            </div>

            <div id='mercenary_div' className='col pt-5'>
              <h1>Mercenary (Act II)</h1>
              <div className='pt-3'>
                <h4>Helm</h4>
                <p>{items.merc.helm.name[0]}</p>
                <p>{items.merc.helm.name[1]}</p>
                <p>{items.merc.helm.name[2]}</p>
              </div>
              <div className='pt-3'>
                <h4>Armor</h4>
                {items.merc.armor.name}
                <p>({items.merc.armor.runes[0]}, {items.merc.armor.runes[1]}, {items.merc.armor.runes[2]}, {items.merc.armor.runes[3]})</p>
              </div>
              <div className='pt-3'>
                <h4>Weapon</h4>
                {items.merc.weapon.name}
                <p>({items.merc.weapon.runes[0]}, {items.merc.weapon.runes[1]}, {items.merc.weapon.runes[2]}, {items.merc.weapon.runes[3]})</p>
              </div>
            </div>

          </div>
        );
      } else {
        return(<h1>'loading...'</h1>);
      }
    }
    
    return(
      <div>
        {loader()}
      </div>
    );



}

