import React, { Component } from 'react';

export default class KekambasTable extends Component {
  render() {
      const students = this.props.students
    return (
        
         <tr>
            <th>{students.id}</th>
            <td>{students.first_name}</td>
            <td>{students.last_name}</td>
        </tr>
    );
  }
}