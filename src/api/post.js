const  HOST = 'https://api.example.com/endpoint'

// PASCAL CASING FOR API FUNCTIONS

export const HandleRegistration = async (data) => {
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


  export const HandleLogin = async (data) => {
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