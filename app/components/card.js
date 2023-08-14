
"use client";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Card(){

    const [myData, setMyData] = useState([]);

    useEffect(()=> {
      axios
      .get('https://apimocha.com/quicksell/data')
       .then((res) => setMyData(res.data.tickets));

    }, []);

    return <>{myData.map((card) => {
        const { id, title, tag, priority} = card; 
        <div className=" drop-shadow-sm mt-10 ml-8 rounded-md bg-white p-6 w-64" key={id}>
            <span className="card-id text-sm text-slate-600 font-medium">{...id}</span>
            <p className="card-title text-sm font-semibold">{...title}</p><div className="flex mt-4">
            <div className="card-priority text-sm rounded-md border-2 text-slate-700 border-gray-950/[.15] p-2 w-1/5 mr-4">{...priority}
            </div>
            <div className="card-tag text-sm rounded-md border-2 text-slate-700 border-gray-950/[.15] p-2 w-4/5">{...tag}</div>
        </div>
        
    </div>
    })}</>
}
