import React, { Component } from 'react';
import Axios from 'axios';

export default class Basicapi extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         posts:[],
      };
    }

    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
            this.setState({
                posts:res.data
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    
  render() {

    return (
      <div>
        <h1>Sample content</h1>
        <table className="table table-striped table-hover text-start table-bordered">
            <thead>
                <tr>
                    <td>ID</td>
                    <td>name</td>
                    <td>body</td>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.posts.map((items) => {
                        return <tr>
                            <td>{items.id}</td>
                            <td>{items.title}</td>
                            <td>{items.body}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
      </div>
    );
  }
}
