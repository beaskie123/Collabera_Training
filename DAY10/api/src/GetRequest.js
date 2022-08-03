import React from 'react';
import axios from 'axios'

export default class PersonList extends React.Component {
    state = {
        person:[]
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`) //Mock Api
        .then(res => {
            const person = res.data;
            this.setState({person}
                )
        })

        axios.get("url")
        .then()//Success
        .catch()//Error
        .finally()
    }

    render () {
        return (
            <div>
                <h5>Fetch Data</h5>

                <table>
                    <tr>
                        <th>USERNAME</th>
                        <th>NAME</th>
                        <th>Email</th>
                    </tr>
                    {this.state.person.map(person => 
                    { return (
                        <tr key={person.id}>
                            <td>{person.username}</td>
                            <td>{person.name}</td>
                            <td>{person.email}</td>
                        </tr>
                    )}
                    )}   
                </table>
                
                
            </div>
        )
    }
}