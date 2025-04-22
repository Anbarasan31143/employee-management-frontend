import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8081/employees',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  addEmployee(employee) {
    return api.post('/add', employee);
  },
  getEmployeeById(id) {
    return api.get(`/get/${id}`);
  },
  deleteEmployeeById(id) {
    return api.delete(`/delete/${id}`);
  },
};
