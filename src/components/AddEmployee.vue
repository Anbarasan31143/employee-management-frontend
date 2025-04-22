mounted() {
  const authHeader = localStorage.getItem('authHeader');
  if (!authHeader) {
    alert("Please login first");
    this.$router.push('/');
  }
}


<template>
  <div>
    <h2>Add Employee</h2>
    <form @submit.prevent="addEmployee">
      <input v-model="employee.firstName" placeholder="First Name" />
      <input v-model="employee.lastName" placeholder="Last Name" />
      <input v-model="employee.department" placeholder="Department" />
      <input v-model="employee.phoneNumber" placeholder="Phone Number" />
      <input v-model="employee.address" placeholder="Address" />
      <button type="submit">Add Employee</button>
    </form>

    <!-- Place these below the form -->
    <p v-if="responseMessage">{{ responseMessage }}</p>
    <p v-if="generatedEmail">Generated Email: {{ generatedEmail }}</p>
  </div>
</template>

<script>
import EmployeeService from '../services/EmployeeService';

export default {
  name: 'AddEmployee',
  data() {
    return {
      employee: {
        firstName: '',
        lastName: '',
        department: '',
        phoneNumber: '',
        address: ''
      },
      responseMessage: '',
      generatedEmail: ''
    };
  },
  methods: {
    addEmployee() {
      EmployeeService.addEmployee(this.employee)
        .then(response => {
          console.log("Backend Response:", response);
          console.log("Backend Response Email:", response.data.email);
          // Update these based on what your backend returns
          this.responseMessage = response.data.message;
          this.generatedEmail = response.data.email;
        })
        .catch(error => {
          console.error('Error adding employee:', error);
          this.responseMessage = 'Error adding employee';
        });
    }
  }
};
</script>

