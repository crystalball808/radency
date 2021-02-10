import React from 'react';
import './Table.css';
import {
  validateFullName,
  validatePhone,
  validateEmail,
  validateAge,
  validateExperience,
  validateIncome,
  validateHasChildren,
  validateStates,
} from '../../utilities/validators';

const Table = ({ people }) => {
  return (
    <table className='people-table'>
      <thead>
        <tr className='people-table__row'>
          <th className='people-table__cell'>ID</th>
          <th className='people-table__cell'>Full Name</th>
          <th className='people-table__cell'>Phone</th>
          <th className='people-table__cell'>Email</th>
          <th className='people-table__cell'>Age</th>
          <th className='people-table__cell'>Experience</th>
          <th className='people-table__cell'>Yearly income</th>
          <th className='people-table__cell'>Has children</th>
          <th className='people-table__cell'>License states</th>
          <th className='people-table__cell'>Expiration date</th>
          <th className='people-table__cell'>License number</th>
        </tr>
      </thead>
      <tbody>
        {people.map((person, i) => {
          console.log(person);
          return (
            <tr key={i}>
              <td className={'people-table__cell'}>{i}</td>
              <td
                className={
                  validateFullName(person.full_name)
                    ? 'people-table__cell'
                    : 'people-table__cell--wrong'
                }
              >
                {person.full_name}
              </td>
              <td
                className={
                  validatePhone(person.phone)
                    ? 'people-table__cell'
                    : 'people-table__cell--wrong'
                }
              >
                {person.phone}
              </td>
              <td
                className={
                  validateEmail(person.email)
                    ? 'people-table__cell'
                    : 'people-table__cell--wrong'
                }
              >
                {person.email}
              </td>
              <td
                className={
                  validateAge(person.age)
                    ? 'people-table__cell'
                    : 'people-table__cell--wrong'
                }
              >
                {person.age}
              </td>
              <td
                className={
                  validateExperience(person.age, person.experience)
                    ? 'people-table__cell'
                    : 'people-table__cell--wrong'
                }
              >
                {person.experience}
              </td>
              <td
                className={
                  validateIncome(person.yearly_income)
                    ? 'people-table__cell'
                    : 'people-table__cell--wrong'
                }
              >
                {parseFloat(
                  String(person.yearly_income)?.replace(',', '.')
                ).toFixed(2)}
              </td>
              <td
                className={
                  validateHasChildren(person.has_children)
                    ? 'people-table__cell'
                    : 'people-table__cell--wrong'
                }
              >
                {String(person.has_children) === 'null'
                  ? 'false'
                  : String(person.has_children)}
              </td>
              <td
                className={
                  validateStates(person.license_states)
                    ? 'people-table__cell'
                    : 'people-table__cell--wrong'
                }
              >
                {person.license_states}
              </td>
              <td
                className={
                  true ? 'people-table__cell' : 'people-table__cell--wrong'
                }
              >
                {person.expiration_date}
              </td>
              <td
                className={
                  true ? 'people-table__cell' : 'people-table__cell--wrong'
                }
              >
                {person.license_number}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
