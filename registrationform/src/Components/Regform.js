import { Box, Typography, TextField, Button, Stack } from "@mui/material";
import React, { useState, useEffect } from "react";
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { useForm } from "react-hook-form";
// import Select from 'react-select';
// import { Country, State } from 'country-state-city';
import axios from "axios";
//import React from "react";

export default function Regform() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [data, setData] = useState([]);

    // const [countries, setCountries] = useState([]);
    // const [selectedCountry, setSelectedCountry] = useState('');
    // const [states, setStates] = useState([]);
    // const [selectedState, setSelectedState] = useState('');

    // useEffect(() => {
    //     const fetchCountries = async () => {
    //         const fetchedCountries = Country.getAllCountries().map(country => ({
    //             value: country.isoCode,
    //             label: country.name
    //         }));
    //         setCountries(fetchedCountries);
    //     };
    //     fetchCountries();
    // }, []);

    // useEffect(() => {
    //     if (selectedCountry !== '') {
    //         const fetchedStates = State.getStatesOfCountry(selectedCountry).map(state => ({
    //             value: state.id,
    //             label: state.name
    //         }));
    //         setStates(fetchedStates);
    //     }
    // }, [selectedCountry]);

    // const handleCountryChange = (selectedOption) => {
    //     setSelectedCountry(selectedOption.value);
    // };
    // const handleStateChange = (selectedOption) => {
    //     setSelectedState(selectedOption.value);
    // }
    const onSubmit = async (formData) => {
        try {
            const response = await axios.post('http://localhost:5000/api', formData);
            console.log(response.data);
            setData(response.data);
            reset();
        }
        catch (error) {
            console.error('Error:', error);
        }
        // console.log(data);
        // axios.get('http://localhost:5000/api').then((res) => {
        //     // console.log(res);
        //     console.log(res.data);
        //     setData(res.data);

        // })

        // axios.post('http://localhost:5000/api', { data: data }).then((res) => {
        //     console.log(res);
        //     console.log(res.data);
        //     setData(res.data);
        //     // console.log(setData(res.data.id));
        //     console.log(res.data[0]);
        //     console.log(res.data[0].name);

        // });
        // if (response.status === 200) {
        //     // Handle successful submission
        //     console.log('Data sent successfully');
        // } else {
        //     // Handle other responses
        //     console.error('Failed to send data');
        // }
    };
    useEffect(() => {
        // onSubmit();
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api');
                setData(response.data);
            }
            catch (error) {
                console.error('Error:', error);
            }
        }
        fetchData();
    }, []);

    // data.map((data, index) => {

    // })
    return (
        <div>
            {/* {data.map((data, index) => {
                <h1>{data[0].id}</h1>
            })} */}
            {/* <p>{data}a</p> */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} maxWidth={400}
                    alignItems={"center"} margin={"auto"}
                    marginTop={1} marginBottom={2} borderRadius={3}
                    boxShadow={"5px 5px 10px #ccc"}
                    sx={{
                        ":hover": {
                            boxShadow: "10px 10px 20px #ccc"
                        }
                    }} >
                    <Typography variant="h4" padding={2} textAlign={"center"}> Registration Form</Typography>
                    <Stack marginBottom={5}>

                        <TextField {...register('name', {
                            required: 'Name is required',
                            pattern: {
                                value: /^[A-Za-z]+$/,
                                message: 'Only alphabetic characters are allowed',
                            },
                            minLength: {
                                value: 3,
                                message: 'minimum 3 characters',
                            },
                            maxLength: {
                                value: 10,
                                message: 'maximum 25 characters'
                            },
                        })}
                            margin="normal" placeholder="name" type="text" variant="outlined" label="name" />
                        {errors?.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}

                        <TextField {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Enter a valid email address'
                            }
                        })}
                            margin="normal"
                            placeholder="email"
                            type="email"
                            variant="outlined"
                            label="email" />
                        {errors?.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}

                        <TextField {...register('companyname', { required: 'Company Name is required' })}
                            margin="normal"
                            placeholder="companyname"
                            type="text"
                            variant="outlined"
                            label="companyname" />
                        {errors?.companyname && <p style={{ color: 'red' }}>{errors.companyname.message}</p>}

                        <TextField {...register('contact', {
                            required: 'Contact number is required',
                            pattern: {
                                value: /^[0-9]{7,12}$/,
                                message: 'Enter a valid contact number'
                            }
                        })}
                            margin="normal"
                            placeholder="contact"
                            type="text"
                            variant="outlined"
                            label="contact" />
                        {errors?.contact && <p style={{ color: 'red' }}>{errors.contact.message}</p>}
                        <TextareaAutosize {...register('address', {
                            required: 'Address is required',
                            pattern: {
                                value: /^[a-zA-Z0-9\s.,-]+$/,
                                message: 'Enter a valid address'
                            },
                            minLength: {
                                value: 10,
                                message: 'Address should be at least 10 characters long'
                            },
                            maxLength: {
                                value: 200,
                                message: 'Address should not exceed 200 characters'
                            },
                        })}
                            minRows={4} maxRows={8} placeholder="Type your address here..." variant="outlined" label="address"
                            style={{ width: '100%', margin: '10px 0', padding: '0px', borderRadius: '4px', borderColor: 'rgba(0, 0, 0, 0.23)', outline: 'none' }}
                        >
                        </TextareaAutosize>
                        {errors?.address && <p style={{ color: 'red' }}>{errors.address.message}</p>}
                        {/* <Select
                            {...register('country', {
                                required: 'country is required'
                            })}
                            options={countries}
                            onChange={handleCountryChange}
                            placeholder="Select Country"
                        /> */}
                        {/* {errors?.country && <p style={{ color: 'red' }}>{errors.country.message}</p>} */}
                        {/* <Select
                            {...register('state')}
                            options={states}
                            onChange={handleStateChange}
                            placeholder="Select State"
                        /> */}
                        <Button variant="contained" sx={{ marginTop: 2 }} type="submit" >Submit</Button>
                    </Stack>
                </Box>
            </form>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>company Name</th>
                        <th>Contact</th>
                        <th>Country Name</th>
                        <th>State Name</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr className="" key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.companyname}</td>
                            <td>{item.contact}</td>
                            <td>{item.countryname}</td>
                            <td>{item.statename}</td>
                            <td>{item.address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}