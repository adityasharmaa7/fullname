import React, { useState } from 'react'

function FullName() {
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [fullName,setFullName] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        setFullName(`${firstName} ${lastName}`);
        setFirstName('');
        setLastName('')
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <p>FirstName: <input type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)} required/></p>
            <p>LastName: <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)} required/></p>
            <button type='submit'>Submit</button>
        </form>
        {fullName && (
        <div>
          <h2>Full Name: {fullName}</h2>
        </div>
      )}
    </div>
    
  )
}

export default FullName
