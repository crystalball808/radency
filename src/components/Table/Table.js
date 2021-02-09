import React from 'react';

const Table = ({ people }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Full Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>age</th>
          <th>Experience</th>
          <th>Yearly income</th>
          <th>Has children</th>
          <th>License states</th>
          <th>Expiration date</th>
          <th>License number</th>
        </tr>
      </thead>
      <tbody>
        {people.map((person, i) => {
          console.log(person);
          return (
            <tr key={i}>
              <td>{i}</td>
              <td>{person.full_name}</td>
              <td>{person.phone}</td>
              <td>{person.email}</td>
              <td>{person.age}</td>
              <td>{person.experience}</td>
              <td>{person.yearly_income}</td>
              <td>{String(person.has_children)}</td>
              <td>{person.license_states}</td>
              <td>{person.expiration_date}</td>
              <td>{person.license_number}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
