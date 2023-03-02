import React from 'react'
import { Link,useSearchParams } from 'react-router-dom'
// import{Link,useSearchParams}
const UseSearch = () => {
    const [searchParams,setSearchParams]=useSearchParams({n:3});
    const number=searchParams.get('n');
    return (
    <div>UseSearch
        <Link to={`/sendingidattribute/${number}`}>Link{number}</Link>
    
    <input type='number' value={number} onChange={e=>setSearchParams({n: e.target.value})} />
    </div>
  )
}

export default UseSearch