import { useState } from "react"


const Loginpage = () => {
  const [data, setData] = useState(
    {
      name:'',
      password:'',
    }
  )
  function Verify()
  {
    console.log(data);
     
  }
  function handleChange(event)
  {
    const { name, value } = event.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
  }
  return (
    <div className="justify-center items-center">
      <div className="bg-red-400">
      <p> LOGIN to Trade share </p> 
      </div>
      <br/>
      <label>
        Enter your name:
        <input name="name" value={data.name} onChange={handleChange} className="border border-gray-300" type="text"/>
      </label>
      
      <label>
        Enter your Password
        <input name="password" type="password" value={data.password} onChange={handleChange} className="border border-gray-300" />
      </label>
      <br/>
      <button  onClick={Verify} className="border border-gray-300"type="submit"> Verify </button>

    </div>
  )
}

export default Loginpage
