import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar, Button, Card, Form, Row, Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import Adduser from './adduser';
import Edituser from './edituser';
import Viewuser from './viewuser';

function Adminaxios(props) {

    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3000/users");
        setUser(result.data.reverse());
    }

    const deleteUser = async id => {
        await axios.delete(`http://localhost:3000/users/${id}`);
        loadUsers();
    }
    const user=()=>{
        props.history.push('/adduser');
    }
    
    const viewUser=(id)=>{
        props.history.push(`/viewuser/${id}`);
    }

    const edituser=(id)=>{
        props.history.push(`/edituser/${id}`);
    }
    return (
        <div
        style={{
            backgroundImage: `url("")`, backgroundRepeat: 'no-repeat', width: '1300px', height: '900px'
        }}>
        <div>
            <center>
            <h3>Users Data</h3>
            <Router>
                <Button style={{marginLeft:'1000px'}}onClick={user}>Add Users</Button>
               
              

                <Container>
                    <div class="tab">
                    <table class="table border shadow" >
                        <thead class="thead-dark">
                            <tr>
                                <th scope='col'>S.No</th>
                                <th scope='col'>Name</th>
                                <th scope='col'>Username</th>
                                <th scope='col'>Email</th>
                                <th scope='col'>Action</th>
                            </tr>

                        </thead>
                        <tbody>

                            {
                                users.map((user, index) => (
                                    <tr>
                                        <th scope='row'>{index + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>

                                        <td> 
                                            
                                            <Link class='btn btn-outline-primary'  onClick={() => viewUser(user.id)}  to={`/viewuser/${user.id}`}>View</Link>{' '}
                                            <Link class='btn btn-outline-info' onClick={() => edituser(user.id)} to={`/edituser/${user.id}`}>Edit</Link>{' '}
                                            <Link class='btn btn-outline-danger' onClick={() => deleteUser(user.id)}>Delete</Link>{' '}

                                        </td>
                                    </tr>
                                ))

                            }

                        </tbody>
                    </table>
                    </div>
                </Container>
                <Switch>
                    <Route path="/adduser" component={Adduser}></Route>
                    <Route path="/edituser/:id" component={Edituser}></Route>
                    <Route path="/viewuser/:id" component={Viewuser}></Route>
                </Switch>
            </Router>
            </center>


        </div>
        </div>

    )
}

export default Adminaxios;