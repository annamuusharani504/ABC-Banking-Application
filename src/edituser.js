import React, { Fragment, useState ,useEffect} from 'react';
import { Container, Card } from 'react-bootstrap';
import {useHistory,useParams, Link} from 'react-router-dom';
import Adminaxios from './adminaxios';
import axios from 'axios';

const Edituser =()=>{

    const [user, setUser] = useState({
        name: ' ',
        username: ' ',
        email: ' ',
        phone: ' ',
        website: ' '

    });

    const history=useHistory();
    const {id}=useParams();

    const{name,username,email,phone,website} = user;

    const onInputChange= e =>
    {
        setUser({...user,[e.target.name] : e.target.value})
        console.log(e.target.value);
    }
    useEffect(() =>{
        loadUser();

    },[]);

    const onSubmit= async e =>{
        e.preventDefault();
        await axios.put(`http://localhost:3000/users/${id}`,user);
        history.push("/adminaxios");

    }

    const loadUser= async() =>{
        const result=await axios.get(`http://localhost:3000/users/${id}`);
       setUser(result.data);
    }
    return (
        <Fragment>
              <div
        style={{
            backgroundImage: `url("https://cdn.hipwallpaper.com/i/3/4/KCu1jQ.jpg")`, backgroundRepeat: 'no-repeat', width: '1300px', height: '550px'
        }}>
            <h3><center><i>Edit User</i></center></h3>
            <center>
            <Card style={{ width: '18rem' ,backgroundColor:"lightgray"}}>
                <form onSubmit={e => onSubmit(e)}>
                <div className='form-group' >
                    <p style={{marginRight:"220px"}}>Name</p>
                    <input type='text' className='form-control'
                        placeholder='Enter Your Name' name='name' value={name} onChange={e => onInputChange(e)}/>
                </div>

                <div className='form-group'>
                    <p style={{marginRight:"200px"}}>Username</p>
                    <input type='text' className='form-control '
                        placeholder='Enter Your User Name' name='username' value={username} onChange={e => onInputChange(e)}/>
                </div>

                <div className='form-group'>
                    <p style={{marginRight:"230px"}}>Email</p>
                    <input type='text' className='form-control'
                        placeholder='Enter Your Email' name='email' value={email} onChange={e => onInputChange(e)}/>
                </div>

                <div className='form-group'>
                    <p style={{marginRight:"160px"}}>Mobile Number</p>
                    <input type='text' className='form-control '
                        placeholder='Enter Your Number' name='phone' value={phone} onChange={e => onInputChange(e)}/>
                </div>
                <button className='btn btn-primary btn-block'>Update User</button>
                </form>
            </Card>

            </center>
            </div>
        </Fragment>
    )
}

export default Edituser;