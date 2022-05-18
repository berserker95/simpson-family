import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Grid,
    TextField,
    MenuItem,
    Slide,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Fab,
    Button,
    IconButton,
    CircularProgress
} from "@mui/material";


import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';


import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

import { TransitionProps } from '@mui/material/transitions';

import { Simpson, Gender } from "../../types";
import { DATE_LOCALE } from "../../utils/mainUtils";

import { useFormik } from 'formik';
import * as Yup from 'yup';

import { RootState } from "../../store";
import { addMembers } from "../../slices/addMembesrSlice";

import './Main.scss';



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
    const secondTitleCard: string = 'Total members:';

    const addedMembersStored: Simpson[] = useSelector((state: RootState) => state.addMembers.members);
    const dispatch = useDispatch();

    const [familyMembers, setFamilyMembers] = useState<number>(addedMembersStored.length);
    const [members, setMembers] = useState<number>(addedMembersStored.length);
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setMembers(addedMembersStored.length);
        setFamilyMembers(addedMembersStored.length * 20)
    }, [addedMembersStored])


    function handleOpenModal(): void {
        setOpenModal(true);
    };

    function handleCloseModal(): void {
        setLoading(false);
        setOpenModal(false);
        formik.resetForm();
    };

    function getStringedDate(date: Date): string {
        return date.toLocaleString().split(',')[0];
    }


    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            birthdate: new Date(),
            gender: Gender.M
        },
        validationSchema: Yup.object({
            firstname: Yup.string().required('Please enter your name'),
            lastname: Yup.string().required('Please enter your lastname'),
            email: Yup.string().email('Please enter your email address in format: yourname@example.com').required('Please enter your email'),
            birthdate: Yup.date(),
            gender: Yup.mixed<Gender>().required('Please enter your gender').oneOf(Object.values(Gender)),
        }),
        onSubmit: values => {
            setLoading(true);

            async function formResultDelay() {
                await new Promise((resolve) => {
                    setTimeout(() => resolve(dispatch(addMembers(values))), 3000);
                })
                setLoading(false);
                handleCloseModal();
            }

            formResultDelay();
        },
    });



    function renderLeftMainColumn(): JSX.Element {
        return (
            <div className="col-sm-6">
                <div className="card mb-2">
                    <div className="card-body">
                        <h4>{firstTitleCard}</h4>
                        <div className="progress mb-2">
                            <div id="progressBar" className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: `${familyMembers}%` }} aria-valuenow={familyMembers} aria-valuemin={0} aria-valuemax={100}>{familyMembers}%</div>
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

    function renderSimpsonFamily(): JSX.Element {
        return (
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="familyMemberTable">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Firstname</TableCell>
                            <TableCell align="left">Lastname</TableCell>
                            <TableCell align="left">Email</TableCell>
                            <TableCell align="right">Birthdate</TableCell>
                            <TableCell align="center">Gender</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {addedMembersStored.map((member: Simpson, index: number) => {
                            return (
                                <React.Fragment>
                                    <TableRow key={index}>
                                        <TableCell align="left">{member.firstname}</TableCell>
                                        <TableCell align="left">{member.lastname}</TableCell>
                                        <TableCell align="left" width={600}>{member.email}</TableCell>
                                        <TableCell align="right" width={100}>{getStringedDate(member.birthdate)}</TableCell>
                                        <TableCell align="center">{member.gender}</TableCell>
                                    </TableRow>
                                </React.Fragment>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }

    function renderNoDataFound(): JSX.Element {
        return (
            <div className="col-sm-12 d-flex justify-content-center align-items-center">
                <div className="no-data-description d-flex flex-column justify-content-center align-items-center">
                    <h1>Ay, caramba!</h1>
                    <span className="font-italic fs-18 mb-1">No data found.</span>
                    <span className="fs-16">Please, add members to simpons's family.s</span>
                </div>
                <div className="no-data-image"></div>
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
                <div className="row mt-48">
                    {
                        (addedMembersStored.length) ?
                            renderSimpsonFamily() :
                            renderNoDataFound()
                    }
                </div>
            </main>
        );
    }

    function renderFloatingButton(): JSX.Element {
        return (
            <Fab color="primary" aria-label="add" className="new-button position-fixed" disabled={familyMembers === 100} onClick={handleOpenModal}>
                <AddIcon />
            </Fab>
        );
    }

    function renderDialogHeader(): JSX.Element {
        return (
            <DialogTitle className="d-flex align-items-center justify-content-between bg-light border-bottom" >
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
                                    <LocalizationProvider dateAdapter={AdapterDateFns} locale={DATE_LOCALE.locale}>
                                        <DatePicker
                                            label="Date of birth"
                                            mask={DATE_LOCALE.mask}
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
                                        error={(formik.touched.gender && formik.errors.gender) ? Boolean(formik.errors.gender) : false}
                                        helperText={(formik.touched.gender && formik.errors.gender) ? formik.errors.gender : null}
                                        {...formik.getFieldProps('gender')}
                                    >
                                        <MenuItem value={'Male'}>Male</MenuItem>
                                        <MenuItem value={'Female'}>Female</MenuItem>
                                        <MenuItem value={'Other'}>Other</MenuItem>
                                    </TextField>
                                </Grid>
                            </Grid>
                            <DialogActions className="bg-light border-top p-3">
                                <Button className="close-button" variant="outlined" onClick={handleCloseModal}>Cancel</Button>
                                <Button className={`${loading ? 'disabled-primary-button' : ''}`} type="submit" color="primary" variant="contained" startIcon={loading ? <CircularProgress color="inherit" size={20} /> : null}>Register</Button>
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