import { Box, Container } from "@mui/material";



export const LoginPage = () => {
    return (
        <Container maxWidth="sm">
            <Box>
                <h1>Login Page</h1>
                <p>Welcome to the login page!</p>
                <p>Please enter your credentials to log in.</p>
                <form>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" required />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </Box>
        </Container>
    )
}

export default LoginPage;