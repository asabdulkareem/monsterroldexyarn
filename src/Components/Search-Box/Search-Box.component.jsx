import React from 'react';
import './Search-Box.Styles.css';

export const SearchBox = ({PlaceHolder, handleChange}) => (
    <input 
          type='search' 
          placeholder={PlaceHolder} 
          onChange={handleChange}
        /> 
);