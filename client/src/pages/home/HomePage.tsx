import { Box } from "@mui/material";
import apiClient from "../../api/apiClient";


const apiTest = async () => {
    try {
        const response = await apiClient.get('/api/users')
        console.log('API Response:', response.data);
    }
    catch (error) {
        console.error('API Error:', error);
    }
}

apiTest();

// HomePage component
export const HomePage = () => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <p>Welcome to the Home Page!</p>
        </Box>
    )
}

export default HomePage;