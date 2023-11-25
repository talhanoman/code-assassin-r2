const localhost = true
const HOST = localhost ? 'http://localhost:5000/put' : 'https://api.example.com/endpoint'

export const UpdateProfileData = async (token, data) => {
    try {
        const response = await fetch(HOST + '/student/update', {
            method: 'PUT',
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