import { Box, Typography, TextField, Button, Stack } from "@mui/material";
import React, { useState } from "react";
import { TextareaAutosize } from '@mui/base/TextareaAutosize';


export default function Regform() {

    const [info, setInfo] = useState();
    return (
        <div className="form">
            <div>
                <p></p>
            </div>
            <form>
                <Box display={"flex"} flexDirection={"column"} maxWidth={400}
                    alignItems={"center"} justifyContent={"center"} margin={"auto"}
                    marginTop={1} borderRadius={3}
                    boxShadow={"5px 5px 10px #ccc"}
                    sx={{
                        ":hover": {
                            boxShadow: "10px 10px 20px #ccc"
                        }
                    }} >
                    <Typography variant="h4" padding={2} textAlign={"center"}> Registration Form</Typography>
                    <Stack>
                        <TextField
                            margin="normal"
                            placeholder="name"
                            type="text"
                            variant="outlined"
                            required
                            label="name"
                            value={info}
                            onChange={
                                (e) => setInfo(e.target.value)
                            }
                            helperText={!info ? "Please Enter Your Name" : ""}
                            error={!info}

                        />
                    </Stack>

                    <TextField margin="normal" placeholder="email" type="email" variant="outlined" />
                    <TextField margin="normal" placeholder="company name" type="text" variant="outlined" />
                    <TextField margin="normal" placeholder="contact" type="text" variant="outlined" />
                    <TextareaAutosize type="string" minRows={5}></TextareaAutosize>
                    {/* <Textarea aria-label="minimum height" minRows={3} placeholder="Minimum 3 rows" /> */}
                    <Button variant="contained" sx={{ marginTop: 2 }}>Submit</Button>
                    <Button sx={{ marginTop: 2, borderRadius: 1 }}>Login</Button>
                </Box>
                {/* <div>
                    <label className="label">Username</label>
                    <input type="text" className="input" />
                </div>
                <div>
                    <label className="label">Email</label>
                    <input type="email" className="input" />
                </div>
                <div>
                    <label className="label">Password</label>
                    <input type="password" className="input" />
                </div>
                <div>
                    <button type="submit" className="btn">Submit</button>
                </div> */}
            </form>
        </div>
    );
}