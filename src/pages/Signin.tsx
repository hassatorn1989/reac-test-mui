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
export async function loader() {
    await new Promise((r) => setTimeout(r, 0));
    return "I came from the Signin.tsx loader function!";
}

export function Component() {
    let data = useLoaderData() as string;

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // redirect to home page
        window.location.href = "/home";


    };
    return (
        <>
            <Container component="main" maxWidth="xs">
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
                    <Box component="form" onSubmit={handleSubmit}  noValidate sx={{ mt: 1 }}>
                        {/*  */}
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="รหัสพนักงาน"
                            name="email"
                            autoComplete="off"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="รหัสผ่าน"
                            type="password"
                            id="password"
                            autoComplete="off"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </>
    )
}

Component.displayName = "SigninPage";