import React, { useState } from 'react';
import data from './data';

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setMultiSelection ] = useState(false);
  const [multipleItemSelected, setmultipleItemSelected] = useState([]);
  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }
  function handleMultiSelection(getCurrentId){
    let copyMultiple = [...multipleItemSelected];
    const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId)

     if(findIndexOfCurrentId === -1) copyMultiple.push(getCurrentId)
      else copyMultiple.splice(findIndexOfCurrentId, 1)

    setmultipleItemSelected(copyMultiple)

    
  }

  return (
    <div className='wrapper'>
    
        
      <div className='accordion'>
      <h1>Accordion</h1>
      <div className='button-container'>
      {enableMultiSelection ? 
      <button onClick={ () => {setMultiSelection(!enableMultiSelection); setmultipleItemSelected([]);}}>Enable Single Selection</button> :
      <button onClick={ () => {setMultiSelection(!enableMultiSelection); setSelected(null);}}>Enable Multi Selection</button>}
      
      </div>
      
        {data && data.length > 0 ? (
          data.map(dataItem => (
            <div key={dataItem.id} className='item'>
              <div onClick={enableMultiSelection ? 
              () =>  handleMultiSelection(dataItem.id) : 
              () =>handleSingleSelection(dataItem.id)} className='title'>
                <h3>{dataItem.question}</h3>
                <span>{selected === dataItem.id ? '-' : '+' }</span>
              </div>
              {selected === dataItem.id || multipleItemSelected.indexOf(dataItem.id) !== -1 ? <div className='answer'>{dataItem.answer}</div> : null}
            </div>
          ))
        ) : (
          <div className='no-data'>No Data Found</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
