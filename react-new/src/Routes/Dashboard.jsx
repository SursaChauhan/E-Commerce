import { useEffect, useState } from "react";
import Loader from "../Components/Loader";
import ProductList from "../Components/ProductList";

function Dashboard() {
  const[loading,setLoading]=useState(false);
  const[data,setData]=useState([]);

const getData =async()=>{
  setLoading(true);
  try{
    const res =await fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products')
    const resdata = await res.json();
    console(resdata);
    setData(resdata);

  }catch(err){
    console.log("fetching err",err);
  }
}
useEffect(()=>{
  getData();
},[])

  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn">Logout</button>
        <p>
          Token:
          <b data-testid="user-token"></b>
        </p>
      </div>
      <br />
      <div data-testid="sort-container">
        <button data-testid="low-to-high">Sort low to high</button>
        <button data-testid="high-to-low">Sort high to low</button>
      </div>
      <br />
      <br />
      {/* Add Pagination.jsx component  */}
     
      <div style={{ display: "flex", justifyContent: "center" }}>
       if(loading ? (<Loader/>) : (
        
         <ProductList products={data}/>
         ))
        {/* Import ProductList.jsx, remember to show loading indicator when API is loading */}
      </div>
    </div>
  );
}

export default Dashboard;
