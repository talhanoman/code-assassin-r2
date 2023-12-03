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

export const ViewCalendarStreak = async (token, month) => {
    try {
        const response = await fetch(HOST + '/login/streak/view/' + month, {
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

export const ViewAllCourses = async () => {
    try {
        const response = await fetch(HOST + '/course/view/all', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const responseData = await response.json();
        return responseData

    } catch (error) {
        console.error('Error during POST request:', error.message);
    }
};

export const ViewAllCoursesOfStudent = async (token) => {
    try {
        const response = await fetch(HOST + '/course/view', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        });

        const responseData = await response.json();
        return responseData

    } catch (error) {
        console.error('Error during POST request:', error.message);
    }
};

export const ViewSectionsAndLecturesOfCoursesForStudent = async (token, courseGuid) => {
    try {
        const response = await fetch(HOST + '/course/view/lectures/' + courseGuid, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        });

        const responseData = await response.json();
        return responseData

    } catch (error) {
        console.error('Error during POST request:', error.message);
    }
};

export const ViewSectionsAndLecturesOfCourses = async (token, courseGuid) => {
    try {
        const response = await fetch(HOST + '/course/view/all/lectures/' + courseGuid, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        });

        const responseData = await response.json();
        return responseData

    } catch (error) {
        console.error('Error during POST request:', error.message);
    }
};

export const IsCoursePurchased = async (token, courseGuid) => {
    try {
        const response = await fetch(HOST + '/course/purchased/' + courseGuid, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        });

        const responseData = await response.json();
        return responseData

    } catch (error) {
        console.error('Error during POST request:', error.message);
    }
};