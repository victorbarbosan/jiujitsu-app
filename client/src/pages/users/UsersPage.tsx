import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { User } from '../../types';
import apiClient from "../../api/apiClient";


export const UsersPage = () => {
    const [users, setUsers] = useState<User[]>([]);


    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await apiClient.get('/api/users');
                console.log('API Response:', response.data);
                setUsers(response.data); // Store users in state
            } catch (error) {
                console.error('API Error:', error);
            }
        };

        fetchUsers();
    }, []);



    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <h1>Welcome to the Users Page!</h1>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <h2>Users List:</h2>
                {users.length > 0 ? (
                    users.map((user) => (
                        <Box key={user.id} sx={{ padding: 1, border: '1px solid #ccc', borderRadius: 1 }}>
                            <p><strong>ID:</strong> {user.id}</p>
                            <p><strong>Name:</strong> {user.name}</p>
                            <p><strong>Email:</strong> {user.email}</p>
                        </Box>
                    ))
                ) : (
                    <p>No users found.</p>
                )}
            </Box>
        </Box>
    );
}
export default UsersPage;