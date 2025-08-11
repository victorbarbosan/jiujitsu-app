import { Box } from "@mui/material";

export const HomePage = () => {

    return (
        <div>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <h1>Welcome to the Home Page!</h1>
            </Box>
            <a href="/login">Login - </a>
            <a href="/users">Users - </a>
            <a href="/gyms">Gyms - </a>
            <a href="/classes">Classes</a>
        </div>


    )
}

export default HomePage;