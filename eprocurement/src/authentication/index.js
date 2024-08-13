import axios from 'axios';

// Function to save the token to localStorage
const setToken = (token) => {
    localStorage.setItem('token', token);
};

// Function to retrieve the token from localStorage
const getToken = () => {
    return localStorage.getItem('token');
};

// Function to check if the user is authenticated
const isAuth = async () => {
    try {
        const token = getToken();
        const res = await axios({
            method: 'POST',
            url: 'http://localhost:5050/users/isauth',
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return true;
    } catch (error) {
        console.log('Authentication Failed');
        return false;
    }
};

// Function to make an authenticated API request to fetch tenders by location
const fetchTendersByLocation = async (location) => {
    try {
        const token = getToken();
        const response = await axios.get(`http://localhost:5050/tenders/location/${location}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
};

export { setToken, getToken, isAuth, fetchTendersByLocation };
