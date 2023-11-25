const localhost = true
const HOST = localhost ? 'http://localhost:5000/get' : 'https://api.example.com/endpoint'
const STUDENT_AUTH = localhost ? 'http://localhost:5000/authenticate/student' : 'https://api.example.com/endpoint'

// PASCAL CASING FOR API FUNCTIONS

export const ViewProfileData = async (token) => {
    try {
        const response = await fetch(HOST + '/student/profile', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer ' + token
            },
        });

        const responseData = await response.json();
        return responseData

    } catch (error) {
        console.error('Error during POST request:', error.message);
    }
};