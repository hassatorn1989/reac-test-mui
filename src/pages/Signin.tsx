import { Typography } from '@mui/material';
import { useLoaderData } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { login } from '../features/AuthSlice';
export async function loader() {
    await new Promise((r) => setTimeout(r, 0));
    return "I came from the Signin.tsx loader function!";
}

export function Component() {
    let data = useLoaderData() as string;

    const datas = useSelector((state: RootState) => state.authReducer);
    const dispatch = useDispatch();

    const initialValues = {
        email: "eve.holt@reqres.in",
        password: "cityslicka"
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().required('กรุณากรอกรหัสพนักงาน'),
        password: Yup.string().required('กรุณากรอกรหัสผ่าน'),
    });

    const onSubmit = (values: any, props: any) => {
        dispatch(login(values));
        
    }
    return (
        <>
            <Container component="main" maxWidth="xs">
                {/* {console.log(datas)} */}
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Typography component="h1" variant="h5">
                        เข้าสู่ระบบ
                    </Typography>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >
                        {({ errors, touched }) => (
                            <Form>
                                <Field as={TextField}
                                    margin="normal"
                                    fullWidth
                                    // required
                                    id="email"
                                    label="รหัสพนักงาน"
                                    name="email"
                                    autoComplete="off"
                                    helperText={<ErrorMessage name="email"/>}
                                    error={errors.email && touched.email}
                                    // value={'eve.holt@reqres.in'}
                                />
                                <Field
                                    as={TextField}
                                    margin="normal"
                                    fullWidth
                                    // required
                                    name="password"
                                    label="รหัสผ่าน"
                                    type="password"
                                    id="password"
                                    autoComplete="off"
                                    helperText={<ErrorMessage name="password" />}
                                    error={errors.password && touched.password}
                                    // value={'cityslicka'}
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                // onClick={setSubmitting}
                                >
                                    Sign In
                                </Button>
                            </Form>

                            // <Box component={Form} noValidate sx={{ mt: 1 }}>
                            //     <Field component={TextField}
                            //         margin="normal"
                            //         fullWidth
                            //         id="email"
                            //         label="รหัสพนักงาน"
                            //         name="email"
                            //         autoComplete="off"
                            //     />
                            //     <Field
                            //         component={TextField}
                            //         margin="normal"
                            //         fullWidth
                            //         name="password"
                            //         label="รหัสผ่าน"
                            //         type="password"
                            //         id="password"
                            //         autoComplete="off"
                            //     />
                            //     <FormControlLabel
                            //         control={<Checkbox value="remember" color="primary" />}
                            //         label="Remember me"
                            //     />
                            //     <Button
                            //         type="submit"
                            //         fullWidth
                            //         variant="contained"
                            //         sx={{ mt: 3, mb: 2 }}
                            //         // onClick={setSubmitting}
                            //     >
                            //         Sign In
                            //     </Button>
                            //     <Grid container>
                            //         <Grid item xs>
                            //             <Link href="#" variant="body2">
                            //                 Forgot password?
                            //             </Link>
                            //         </Grid>
                            //         <Grid item>
                            //             <Link href="#" variant="body2">
                            //                 {"Don't have an account? Sign Up"}
                            //             </Link>
                            //         </Grid>
                            //     </Grid>
                            // </Box>
                        )}
                    </Formik>
                </Box>
            </Container>
        </>
    )
}

Component.displayName = "SigninPage";