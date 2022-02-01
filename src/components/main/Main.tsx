import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './Main.scss';



interface MainProps {
    mainClass?: string,
    id?: string
}

const Main = (props: MainProps) => {

    const firstTitleCard: string = 'Simpson family members:';
    const secondTitleCard: string = 'Total members'
    const [familyMembers, setFamilyMembers] = useState<number>(0);
    const [members, setMembers] = useState<number>(0);
    const [formData, setFormData] = useState<Object>({});

    function closeModal(): void {
        const element: HTMLFormElement = document.getElementById('modal-details') as HTMLFormElement;
        return element.reset();



    }

    function handleInputChange(event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>): void {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    function handleFormSubmit(e: React.FormEvent): void {
        e.preventDefault();
        console.log(e);
    }


    function renderLeftMainColumn(): JSX.Element {
        return (
            <div className="col-sm-6">
                <div className="card mb-2">
                    <div className="card-body">
                        <h4>{firstTitleCard} {familyMembers}</h4>
                        <div className="progress mb-2">
                            <div id="progressBar" className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>25%</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


    function renderRightMainColumn(): JSX.Element {
        return (
            <div className="col-sm-6">
                <div className="card mb-2">
                    <div className="card-body">
                        <h4>{secondTitleCard}</h4>
                        <p className="card-text">{members}</p>
                    </div>
                </div>
            </div>
        );
    }


    function renderMain(): JSX.Element {
        return (
            <main id={`${props.id}`} className={`${props.mainClass} container mt-4`}>
                <div className="row">
                    {renderLeftMainColumn()}
                    {renderRightMainColumn()}
                </div>
            </main>
        );
    }

    function renderFloatingButton(): JSX.Element {
        return (
            <button type="button" className="btn btn-primary btn-lg rounded-circle new-button position-fixed" data-toggle="modal" data-target="#formDialog"><FontAwesomeIcon icon={['fas', 'plus']} /></button>
        );
    }

    function renderFormDialog(): JSX.Element {
        return (
            <div className="modal fade" id="formDialog" tabIndex={-1} role="dialog" aria-labelledby="registrationFormDialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="registrationFormDialog">Member Registration</h5>
                            <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <form id="modal-details" onSubmit={handleFormSubmit}>
                                <div className="form-row mb-1">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="firstNameInput">Firstname</label>
                                        <input type="text" className="form-control" id="firstNameInput" name="firstname" onChange={handleInputChange} />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="lastNameInput">Lastname</label>
                                        <input type="text" className="form-control" id="lastNameInput" name="lastname"  onChange={handleInputChange} />
                                    </div>
                                </div>
                                <div className="form-row mb-1">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="emailInput">Email</label>
                                        <input type="email" className="form-control" id="emailInput" name="email" onChange={handleInputChange} />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="birthDateInput">Date of Birth</label>
                                        <input type="date" className="form-control" id="birthDateInput" date-date-format="dd/mm/yyyy" name="date" onChange={handleInputChange} />
                                    </div>
                                </div>
                                <div className="form-row mb-1"> <div className="form-group col-md-6">
                                    <label htmlFor="genderInput">Gender</label>
                                    <select className="form-control custom-select" id="genderInput" name="gender" onChange={handleInputChange} >
                                        <option defaultValue={'default'}>Choose a gender</option>
                                        <option value={'male'}>Male</option>
                                        <option value={'female'}>Female</option>
                                        <option value={'other'}>Other</option>
                                    </select>
                                </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => {closeModal()}}>Cancel</button>
                            <button type="submit" className="btn btn-primary" form="modal-details">Register</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <React.Fragment>
            {renderMain()}
            {renderFloatingButton()}
            {renderFormDialog()}
        </React.Fragment>
    );
}
export default Main;