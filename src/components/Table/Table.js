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
  validateDate,
  validateLicense,
} from '../../utilities/validators';

const Table = ({ lawyers }) => {
  //formatting phone numbers to +1xxxxxxxxxx
  const people = lawyers.map((lawyer) => {
    const newLawyer = Object.assign(lawyer);
    if (
      (typeof newLawyer.phone === 'number' &&
        String(newLawyer.phone).length === 10) ||
      (String(newLawyer.phone).length === 10 &&
        String(newLawyer.phone).slice(0, 2) !== '+1')
    ) {
      newLawyer.phone = '+1' + newLawyer.phone;
    } else if (
      (typeof newLawyer.phone === 'number' &&
        String(newLawyer.phone).length === 11) ||
      (String(newLawyer.phone).length === 11 &&
        String(newLawyer.phone).slice(0, 1) !== '+')
    ) {
      newLawyer.phone = '+' + newLawyer.phone;
    }
    return newLawyer;
  });

  //finding duplicates
  for (let i = 0; i < people.length; i++) {
    for (let j = 0; j < people.length; j++) {
      if (people[i].duplicateByEmail || people[i].duplicateByPhone) {
        break;
      } else if (
        people[i].email.toLowerCase().trim() ===
          people[j].email.toLowerCase().trim() &&
        i !== j
      ) {
        people[i].duplicateByEmail = j;
        people[j].duplicateByEmail = i;
        break;
      } else if (people[i].phone.trim() === people[j].phone.trim() && i !== j) {
        people[i].duplicateByPhone = j;
        people[j].duplicateByPhone = i;
        break;
      }
    }
  }

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
          <th className='people-table__cell'>Duplicate with</th>
        </tr>
      </thead>
      <tbody>
        {people.map((person, i) => {
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
                  validatePhone(person.phone, person.duplicateByPhone)
                    ? 'people-table__cell'
                    : 'people-table__cell--wrong'
                }
              >
                {person.phone}
              </td>
              <td
                className={
                  validateEmail(person.email, person.duplicateByEmail)
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
                  validateDate(String(person.expiration_date).trim())
                    ? 'people-table__cell'
                    : 'people-table__cell--wrong'
                }
              >
                {String(person.expiration_date).trim()}
              </td>
              <td
                className={
                  validateLicense(person.license_number)
                    ? 'people-table__cell'
                    : 'people-table__cell--wrong'
                }
              >
                {person.license_number}
              </td>
              <td className='people-table__cell'>
                {(typeof person.duplicateByPhone !== 'undefined' &&
                  String(person.duplicateByPhone)) ||
                  (typeof person.duplicateByEmail !== 'undefined' &&
                    String(person.duplicateByEmail))}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
