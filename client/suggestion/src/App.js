import Axios from 'axios'
import React from 'react';

function App() {
  //Adding state to get the mobile names from db
  const[mobileNames,setMobileNames] = React.useState([])

  //With use effect set the mobile names post getting it from database
  React.useEffect(() =>{
    Axios.get('http://localhost:3001/api/get/mobileMake').then((response) =>{
      let data = response.data
      let finalArray = []
      //Storing values in the form of array as response will be in the form of objects
      finalArray = data.map(function(obj){
        return obj.mobileName
      })
      console.log(finalArray)
      setMobileNames([...finalArray])
  })
  },[])

  return (
    <div className="App">
     <input name='mobile' placeholder='mobileMake' list='suggestion'></input>
     <datalist id='suggestion'>
     {mobileNames.map((make,index) =>{
      //Parsing the array and displaying suggestion with option tag
        return (<option key={index} value={make}>{make}</option>)
       })}
     </datalist>
    </div>
  );
}

export default App;