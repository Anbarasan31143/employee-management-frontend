<template>
  <div>
    <h2>Delete Employee</h2>
    <input v-model="employeeId" placeholder="Enter Employee ID to delete" />
    <button @click="deleteEmployee">Delete</button>
    <p v-if="responseMessage">{{ responseMessage }}</p>
  </div>
</template>

<script>
import EmployeeService from '../services/EmployeeService';

export default {
  data() {
    return {
      employeeId: '',
      responseMessage: ''
    };
  },
  methods: {
    deleteEmployee() {
      EmployeeService.deleteEmployeeById(this.employeeId)
        .then(() => {
          this.responseMessage = 'Employee deleted successfully';
        })
        .catch(err => {
          this.responseMessage = 'Error deleting employee';
          console.error(err);
        });
    }
  }
};
</script>
