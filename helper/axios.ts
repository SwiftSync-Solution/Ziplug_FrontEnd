import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: 'https://ziplogisitics.pythonanywhere.com',
});

export default axiosInstance;
