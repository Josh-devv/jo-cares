import React from 'react';
import { useState } from 'react';

const PopupMessage = () => {
  

  return (
    <div className='fixed top-0 pt-10 w-[100%] left-1/2 text-white h-[20vh] flex justify-center items-end font-rbt transform -translate-x-1/2 -translate-y-1/2 bg-green-400 p-8 rounded shadow-md z-50'>
            <p>Item has been added to the Cart!!!</p>
          </div>
       
  );
};

export default PopupMessage;
