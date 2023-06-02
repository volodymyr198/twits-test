import axios from 'axios';

axios.defaults.baseURL = 'https://6477ab3c9233e82dd53c038b.mockapi.io/users';

export const fetchUsers = async page => {
    try {
        const { data } = await axios.get(`/?page=${page}&limit=3`);
        return data;
    } catch (error) {
        console.log(error.message);
    }
};


