import React, { useEffect, useState } from 'react'

function SendProps(props){
  return (
    <div>
        <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">name</th>
            <th scope="col">class</th>
          </tr>
        </thead>
        <tbody>
        {props.name.name.name.filter((name)=> props.searchKey === "" ||  parseInt(props.searchKey) === name.class).
        map((name, index) =>{
      return (
        
            <tr>
         
              <th scope="col">{++index}</th>
              <th scope="col">{name.name}</th>
              <th scope="col">{name.class}</th>
            </tr>     
      )
     })}
      </tbody>
    </table>
    </div>
  )
} 

export default function App() {
  const [search, setSearch] = useState("")
  const object1 = { 
    roll:1,

    name: {
    
      name: [
      {
        name: "yewala",
        class:1
      
      },
      {
        name: "Hari",
        class:2

      },
      {
        name: "bhoopi",
        class:2
      },
       {
        name: "Hari",
        class:3
      }
    ]

  }
}

const serachFunction = (event)=>{
  setSearch(event.target.value)
}


useEffect(()=>{
  return ()=>{
    <SendProps name={object1} searchKey={search}/>
  }
},[search])
  return (
    <div>
     <h1>Filter</h1>
     <input onKeyUp={serachFunction} type="number" required/>
     <SendProps name={object1} searchKey={search}/>
     
    </div>
  )
}
