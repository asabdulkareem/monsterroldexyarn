import React from 'react';
import './card.styles.css';

export const Card = props => (
    <div className='card-container'>
        <img 
            alt='monster'
            src={`https://robohash.org/${props.monster.id}?set=set2&size=200x200`}
        />
        {props.monster.name} <br/> {props.monster.email}
    </div>
);