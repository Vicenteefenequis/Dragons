import Axios from 'axios';

const DragonApi = Axios.create({
  baseURL: `http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon`,
});
export default DragonApi;
