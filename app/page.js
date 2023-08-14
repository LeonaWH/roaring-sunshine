"use client";
import Image from 'next/image';



import React, { useEffect, useState } from 'react';

const Cards = () => {

    const [data, setData] = useState([]);
    const [sortType, setSortType] = useState('Display');



    const getData = async () => {
        const res = await fetch("https://apimocha.com/quicksell/data");
        const FinalData = await res.json();
        setData(FinalData.tickets)

        
    }



    useEffect(() => {
        getData();
    }, [])

    useEffect(() => {
      const sortArray = type => {
        const types = {
          display: 'display',
          priority: 'priority',
   
     
        };
        const sortProperty = types[type];
        const sorted = [...data].sort((a, b) => b[sortProperty] - a[sortProperty]);
        setData(sorted);
      };
  
      sortArray(sortType);
    }, [data, sortType]);

    

  


    return (
        <div>
        <div className="bg-white p-2 drop-shadow-md">
         <h1 className="text-3xl font-bold text-indigo-900 p-2 pl-6 leading-relaxed">Kanban Board</h1>
        </div>
        <div className="text-sm ml-8 mt-4 ">
         <select onChange={(e) => setSortType(e.target.value)} className=" border-2 border-gray-200/[.5] p-1">
          <option value="display">Display</option>
          <option value="priority">Priority</option>
       
       </select>

   </div>
        <div className=" flex flex-wrap mb-6">
          {
            data.map((curElem)=> {
              return (
               
                <div className=" drop-shadow-sm mt-10 ml-8 rounded-md border-2 border-gray-200/[.5] bg-white p-6 w-72" key={curElem.id}>
                 <span className=" flex card-id text-sm text-slate-600 font-medium">{curElem.id} <span className=" text-sm ml-8">{curElem.userId}</span></span>
                 <div className="card-priority text-sm pt-2 pb-2 text-slate-700 ">{curElem.status}
                 </div>
                 <p className="card-title text-sm font-semibold">{curElem.title}</p><div className="flex mt-4">
                 <div className="card-priority text-sm rounded-md border-2 text-slate-700 border-gray-950/[.15] p-2 w-3/6 mr-4"> Priority: {curElem.priority}
                 </div>
                <div className="card-tag text-sm rounded-md border-2 text-slate-700 border-gray-950/[.15] p-2 w-3/6">{curElem.tag}</div>
               </div>
               </div> ) } ) 
               } </div></div>)
}

export default Cards;