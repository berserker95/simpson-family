import React from "react";

import { Family } from "../../types/FamilyType";

import './Table.scss';

interface TableProps {
    className?: string;
}

const Table = (props: TableProps) => {
    const family: Array<Family> = [
        {
            firstname: 'Thomas Hardy',
            email: 'thomashardy@mail.com',
            address: '89 Chiaroscuro Rd, Portland, USA',
            phoneNumber: 171-555-2222,
            actions: 'to be defined'
        },
        {
            firstname: 'Dominique Perrier',
            email: 'dominiqueperrier@mail.com',
            address: 'Obere Str. 57, Berlin, Germany',
            phoneNumber: 313-555-5735,
            actions: 'to be defined'
        },
        {
            firstname: 'Maria Anders',
            email: 'mariaanders@mail.com',
            address: '25, rue Lauriston, Paris, France',
            phoneNumber: 503-555-9931,
            actions: 'to be defined'
        }
    ];

    function renderTableHeader(): JSX.Element {
        return (
            <thead>
                <tr>
                    <th className="align-middle p-3" scope="col">Name</th>
                    <th className="align-middle p-3" scope="col">Email</th>
                    <th className="align-middle p-3" scope="col">Address</th>
                    <th className="align-middle p-3" scope="col">Phone</th>
                    <th className="align-middle p-3" scope="col">Actions</th>
                </tr>
            </thead>
        );
    }

    function renderTableBody(): JSX.Element {
        return (
            <tbody>
                {
                  renderTableRow()
                }
            </tbody>
        );
    }

    function renderTableRow(): JSX.Element[] {
        return (
            family.map((member: Family, index: number) => {
                return (
                    <tr key={index}>
                        <td className="h-25 align-middle text-center">{member.firstname}</td>
                        <td className="h-25 align-middle text-center">{member.email}</td>
                        <td className="h-25 align-middle text-center">{member.address}</td>
                        <td className="h-25 align-middle text-center">{member.phoneNumber}</td>
                        <td className="h-25 align-middle text-center">{member.actions}</td>
                    </tr>
                )
            })
        )
    }

    return (
        <div className="container d-flex justify-content-center align-items-center overflow-y-auto" style={{height: 'inherit'}}>
            <table className={`table ${props.className}`}>
                {renderTableHeader()}
                {renderTableBody()}
            </table>
        </div>
    )
}
export default Table;