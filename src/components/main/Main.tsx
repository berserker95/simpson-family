import React, { useEffect, useState } from "react";

import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Grid,
    TextField,
    MenuItem,
    Slide,
    Fab,
    Button,
    IconButton
} from "@mui/material";

import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

import itLocale from "date-fns/locale/it";

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

import { TransitionProps } from '@mui/material/transitions';

import { useFormik } from 'formik';
import * as Yup from 'yup';


import './Main.scss';



interface Simpson {
    firstname: string,
    lastname: string,
    email: string,
    birthdate: Date | null,
    gender: string
}
interface MainProps {
    mainClass?: string,
    id?: string
}


const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});


const Main = (props: MainProps) => {

    const firstTitleCard: string = 'Simpson family members:';
    const secondTitleCard: string = 'Total members';

    const initialFormState: Simpson = {
        firstname: '',
        lastname: '',
        email: '',
        birthdate: new Date(),
        gender: ''
    };

    const [familyMembers, setFamilyMembers] = useState<number>(0);
    const [members, setMembers] = useState<number>(0);
    const [date, setDate] = useState<Date | null>(initialFormState.birthdate);
    const [localeDate, setLocaleDate] = useState<{ locale: Locale, mask: string }>({ locale: itLocale, mask: '__/__/____' })
    const [openModal, setOpenModal] = useState<boolean>(false);



    useEffect(() => {

    }, [openModal])


    function handleOpenModal(): void {
        setOpenModal(true);
    };

    function handleCloseModal(): void {
        setOpenModal(false);
        formik.resetForm();
    };


    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            birthdate: new Date(),
            gender: ''
        },
        validationSchema: Yup.object({
            firstname: Yup.string().required('Please enter your name'),
            lastname: Yup.string().required('Please enter your lastname'),
            email: Yup.string().email('Please enter your email address in format: yourname@example.com').required('Please enter your email'),
            birthdate: Yup.date(),
            gender: Yup.string().required('Please enter your gender'),
        }),
        onSubmit: values => {
            console.log('Form data', values);
        },
    });



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
            <Fab color="primary" aria-label="add" className="new-button position-fixed" onClick={handleOpenModal}>
                <AddIcon />
            </Fab>
        );
    }

    function renderDialogHeader(): JSX.Element {
        return (
            <DialogTitle  className="d-flex align-items-center justify-content-between bg-light border-bottom" >
                Member Registration
                <IconButton onClick={handleCloseModal}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
        );
    }


    function renderDialog(): JSX.Element {

        return (
            <div>
                <Dialog
                    open={openModal}
                    TransitionComponent={Transition}
                    keepMounted
                    maxWidth='md'
                >
                    {renderDialogHeader()}
                    <DialogContent>
                        <form onSubmit={formik.handleSubmit}>
                            <Grid container className="form-container" spacing={1}>
                                <Grid item sm={12} xs={12} md={6}>
                                    <TextField id="firstname"
                                        label="Firstname"
                                        variant="outlined"
                                        fullWidth
                                        error={(formik.touched.firstname && formik.errors.firstname) ? Boolean(formik.errors.firstname) : false}
                                        helperText={(formik.touched.firstname && formik.errors.firstname) ? formik.errors.firstname : null}
                                        {...formik.getFieldProps('firstname')}
                                    />
                                </Grid>
                                <Grid item sm={12} xs={12} md={6}>
                                    <TextField id="lastname"
                                        label="Lastname"
                                        variant="outlined"
                                        fullWidth
                                        error={(formik.touched.lastname && formik.errors.lastname) ? Boolean(formik.errors.lastname) : false}
                                        helperText={(formik.touched.lastname && formik.errors.lastname) ? formik.errors.lastname : null}
                                        {...formik.getFieldProps('lastname')}
                                    />
                                </Grid>
                                <Grid item sm={12} xs={12} md={6}>
                                    <TextField id="email"
                                        label="Email"
                                        variant="outlined"
                                        fullWidth
                                        error={(formik.touched.email && formik.errors.email) ? Boolean(formik.errors.email) : false}
                                        helperText={(formik.touched.email && formik.errors.email) ? formik.errors.email : null}
                                        {...formik.getFieldProps('email')}
                                    />
                                </Grid>
                                <Grid item sm={12} xs={12} md={6}>
                                    <LocalizationProvider dateAdapter={AdapterDateFns} locale={localeDate.locale}>
                                        <DatePicker
                                            label="Date of birth"
                                            mask={localeDate.mask}
                                            value={formik.values.birthdate}
                                            onChange={(date) => { formik.setFieldValue('birthdate', date) }}
                                            renderInput={(params) => <TextField id="birthdate" {...params} fullWidth />}

                                        />

                                    </LocalizationProvider>
                                </Grid>
                                <Grid item sm={12} xs={12} md={6}>
                                    <TextField
                                        id="gender"
                                        label="Gender"
                                        select
                                        fullWidth
                                        error={ (formik.touched.gender && formik.errors.gender) ? Boolean(formik.errors.gender) : false}
                                        helperText={(formik.touched.gender && formik.errors.gender) ? formik.errors.gender : null}
                                        {...formik.getFieldProps('gender')}
                                    >
                                        <MenuItem value={0}>Male</MenuItem>
                                        <MenuItem value={1}>Female</MenuItem>
                                        <MenuItem value={2}>Other</MenuItem>
                                    </TextField>
                                </Grid>
                            </Grid>
                            <DialogActions className="bg-light border-top p-3">
                                <Button className="close-button" variant="outlined" onClick={handleCloseModal}>Cancel</Button>
                                <Button type="submit" color="primary" variant="contained">Register</Button>
                            </DialogActions>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>
        );


    }


    return (
        <React.Fragment>
            {renderMain()}
            {renderFloatingButton()}
            {renderDialog()}
        </React.Fragment>
    );
}
export default Main;