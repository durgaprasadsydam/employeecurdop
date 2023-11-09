import React, { Component } from 'react';
import Axios from 'axios'

export default class CustomApi extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[],
      };
    }
    componentDidMount() {
        Axios.get('http://localhost:4000/employee')
        .then((res)=> {
            this.setState({
                posts:res.data
            })
        })
        .catch((err) => {
            console.log(err);
        })
    }
  render() {
    return (
      <div>
        <h1>basic sample content</h1>
        <table className="table">
            <thead>
            <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Phone Number</td>
                <td>Email</td>
            </tr>
            </thead>
            <tbody>
                {
                    this.state.posts.map((item) => {
                        return <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.phone}</td>
                            <td>{item.email}</td>
                        </tr>
                    })
                }
            </tbody>
            
            
        </table>
      </div>
    )
  }
}
