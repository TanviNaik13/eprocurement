import axios from "axios";

// Function to save the token to localStorage
const setToken = (token) => {
  localStorage.setItem("token", token);
};

// Function to retrieve the token from localStorage
const getToken = () => {
  return localStorage.getItem("token");
};

// Function to check if the user is authenticated
const isAuth = async () => {
  try {
    const token = getToken();
    const res = await axios({
      method: "POST",
      url: "http://localhost:5050/users/isauth",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res.data)
    const role= localStorage.getItem("role");

    return {
      isAuthenticated: true,
      isNicUser: localStorage.getItem("isNicUser")==="true"?true:false,
      userRole: role?true:false 
    };
    //return true;
  } catch (error) {
    console.log("Authentication Failed");
    return false;
  }
};

// Function to make an authenticated API request to fetch tenders by location
const fetchTendersByLocation = async (location) => {
  try {
    const token = getToken();
    const response = await axios.get(
      `http://localhost:5050/tenders/location/${location}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};

const fetchTendersByOrganisation = async (organisation) => {
  try {
    const token = getToken();
    const response = await axios.get(
      `http://localhost:5050/tenders/organisation/${organisation}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};
const fetchTendersByClassification = async (classification) => {
  try {
    const token = getToken();
    const response = await axios.get(
      `http://localhost:5050/tenders/classification/${classification}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};

const fetchTendersByTenderId = async (tenderId) => {
  try {
    const token = getToken();
    const response = await axios.get(
      `http://localhost:5050/tenders/archive/${tenderId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};

const fetchTendersByStatus = async (status) => {
  try {
    const token = getToken();
    const response = await axios.get(
      `http://localhost:5050/tenders/status/${status}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};
const fetchTendersByCancelStatus = async (filter) => {
    try {
      const token = getToken();
      const response = await axios.get(
        `http://localhost:5050/tenders/current/${filter}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error:", error);
      return [];
    }
  };
  
  const fetchTendersByName = async (name) => {
    try {
      const token = getToken();
      const response = await axios.get(
        `http://localhost:5050/tenders/name/${name}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error:", error);
      return [];
    }
  };

  const fetchLatestTender = async () => {
    try {
      const token = getToken(); 
      const response = await axios.get(
        `http://localhost:5050/tenders/latest`, // Adjust the URL to match the backend route
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data; // Assuming response.data contains the latest tender
    } catch (error) {
      console.error("Error:", error);
      return null; // Return null or empty data in case of error
    }
  };
  const fetchAllTender = async () => {
    try {
      const token = getToken(); 
      const response = await axios.get(
        `http://localhost:5050/tenders/`, // Adjust the URL to match the backend route
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      
      return response.data.tenders; // Assuming response.data contains the latest tender
    } catch (error) {
      console.error("Error:", error);
      return null; // Return null or empty data in case of error
    }
  };
  
  

export {
  setToken,
  getToken,
  isAuth,
  fetchAllTender,
  fetchTendersByLocation,
  fetchTendersByOrganisation,
  fetchTendersByClassification,
  fetchTendersByTenderId,
  fetchTendersByStatus,
  fetchTendersByCancelStatus,
  fetchTendersByName,
  fetchLatestTender
};
