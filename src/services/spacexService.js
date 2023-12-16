import axios from 'axios';

const baseURL = 'https://api.spacexdata.com/v4';

export const spacexService = {
  getRockets: async () => {
    const response = await axios.get(`${baseURL}/rockets`);
    return response.data;
  },
  getRocketById: async (id) => {
    const response = await axios.get(`${baseURL}/rockets/${id}`);
    return response.data;
  },
  // Add similar methods for launches
};
export const spacexService1 = {
  getRockets: async () => {
    const response = await axios.get(`${baseURL}/launches`);
    return response.data;
  },
  getRocketById: async (id) => {
    const response = await axios.get(`${baseURL}/launchse/${id}`);
    return response.data;
  },
  // Add similar methods for launches
};

