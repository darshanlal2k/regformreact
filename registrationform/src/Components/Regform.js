import { Box, Typography, TextField, Button, Stack } from "@mui/material";
import React, { } from "react";
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { useForm } from "react-hook-form";


export default function Regform() {
    const { register, handleSubmit, formState: { errors } } = useForm()

    // const [info, setInfo] = useState();
    return (
        <div>
            <form onSubmit={handleSubmit(
                (data) => {
                    console.log(data);
                }
            )}>
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
                            required: 'name is required',
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
                            margin="normal"
                            placeholder="name"
                            type="text"
                            variant="outlined"
                            label="name"
                        />
                        {errors?.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
                        <TextField {...register('email', { required: 'email is required' })}
                            margin="normal"
                            placeholder="email"
                            type="email"
                            variant="outlined"

                            label="email" />
                        <TextField {...register('company name', { required: true })}
                            margin="normal"
                            placeholder="company name"
                            type="text"
                            variant="outlined"

                            label="company name" />
                        <TextField {...register('contact', { required: true })}
                            margin="normal"
                            placeholder="contact"
                            type="text"
                            variant="outlined"

                            label="contact" />
                        <TextareaAutosize {...register('comments', { required: true })}
                            type="string"
                            minRows={3}
                            placeholder="comments"

                            ariant="outlined"
                            label="comments"
                            sx={{
                                mt: 2
                            }}
                        >
                        </TextareaAutosize>
                        {/* <Textarea aria-label="minimum height" minRows={3} placeholder="Minimum 3 rows" /> */}
                        <Button variant="contained" sx={{ marginTop: 2 }} type="submit" >Submit</Button>
                    </Stack>


                </Box>
            </form>
        </div>
    );
}