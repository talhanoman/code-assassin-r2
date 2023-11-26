const localhost = true
const HOST = localhost ? 'http://localhost:5000/post' : 'https://api.example.com/endpoint'
const STUDENT_AUTH = localhost ? 'http://localhost:5000/authenticate/student' : 'https://api.example.com/endpoint'

// PASCAL CASING FOR API FUNCTIONS

export const HandleLogin = async (data) => {
    try {
        const response = await fetch(STUDENT_AUTH, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const responseData = await response.json();
        return responseData

    } catch (error) {
        console.error('Error during POST request:', error.message);
    }
};


export const HandleRegistration = async (data) => {
    try {
        const response = await fetch(HOST + '/student/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const responseData = await response.json();
        return responseData
        
    } catch (error) {
        console.error('Error during POST request:', error.message);
    }
};

export const AddLoginStreak = async (token, data) => {
    try {
        const response = await fetch(HOST + '/login/streak/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(data),
        });

        const responseData = await response.json();
        return responseData
        
    } catch (error) {
        console.error('Error during POST request:', error.message);
    }
};

export const HandleForgotPassword = async (data) => {
    try {
        const response = await fetch(HOST, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Add any additional headers if needed
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const responseData = await response.json();
        console.log('Response Data:', responseData);
    } catch (error) {
        console.error('Error during POST request:', error.message);
    }
};
