import React, { Component } from 'react';
import KekambasTable from './KekambasTable';
//Set State
export default class Kekambas extends Component {

    constructor(props){
        super(props);
        this.state = {
            kekambas: []
        }
    }
//Make get Request and take the response, then logs it out
    componentDidMount(){
        fetch(`https://kekambas-bs.herokuapp.com/kekambas`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({
                kekambas: data
            })
        })
    }
//Show Kekambas
    render() {
        return (
            //TB where KekambasTable gets insterted
        <>  
        <h1  className= ' d-flex justify-content-center'>Kekambas Class</h1>
            <table className='table table-dark table-striped'>
                <thead>
                    <tr>
                    <th scope="col">Student ID</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    </tr>
                </thead>
            <tbody>

                {this.state.kekambas.map((s, i) => <KekambasTable students={s} key={i}/>)}
            </tbody>
            </table>
        </>
        );
    }
}