import { useState, useEffect }  from 'react';
import Axios from 'axios';



    


const Form = () => {
    

    const [user, setUser] =useState("");
    const [email,setEmail] = useState("");
    const [age,setAge]=useState("");
    const [date,setDate]=useState("");
    const [location,setLocation] = useState("");
    const [language,setLanguage] = useState("");
    const [gender,setGender]= useState("");

    
   

    useEffect(()=>{
        Axios.get("http://localhost:3001/display").then((response)=>{
            console.log(response.data)
        })
    },[])
    
    const handleSubmit =()=>{
        Axios.post("http://localhost:3001/insert",{user:user, email:email, age:age, date:date, location:location, language:language,gender:gender}).then(()=>{
            alert("Successful")
            
        })
    }
    

    return(
        <div>
            <form>
                <div>
                    <label>Name:</label>
                    <input type="text" name='user' onChange={(e)=>{setUser(e.target.value)}}/>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name='email' onChange={(e)=>{setEmail(e.target.value)}}/>
                </div>
                <div>
                    <label>Age:</label>
                    <input type="number" name='age' onChange={(e)=>{setAge(e.target.value)}}/>
                </div>
                <div>
                    <label>Date:</label>
                    <input type="date" name='date' onChange={(e)=>{setDate(e.target.value)}} />
                </div>
                <div>
                    <label>Location:</label>
                    <select onChange={(e)=>{setLocation(e.target.value)}}>
                        <option value="Location">Location</option> 
                        <option value="Tirunelveli">Tirunelveli</option>    
                        <option value="Tutucorin">Tutucorin</option> 
                        <option value="Madurai">Madurai</option> 
                        <option value="Chennai">Chennai</option> 
                        <option value="Nagercoil">Nagercoil</option> 
                    </select>                         
                </div>
    
                <div>
                    <label>Language:</label>
                    English<input type="Checkbox" name='Language' value="English" onChange={(e)=>{setLanguage(e.target.value)}}/>
                    Others<input type="Checkbox" name='Language' value="Others" onChange={(e)=>{setLanguage(e.target.value)}}/>
                </div>
                <div>
                    <label>Gender:</label>
                    Male<input type="radio" name='gender' value="Male" onChange={(e)=>{setGender(e.target.value)}}/>
                    Female<input type="radio" name='gender' value="Female" onChange={(e)=>{setGender(e.target.value)}}/>
                </div>
               
                <div>
                    <button onClick={handleSubmit}>Submit</button>
                </div>
                
                
            </form>

           
        </div>
    );
}

export default Form;