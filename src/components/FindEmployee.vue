<template>
  <div>
    <h2>Find Employee</h2>
    <input v-model="employeeId" placeholder="Enter Employee ID" />
    <button @click="findEmployee">Search</button>

    <div v-if="employee">
      <h3>Employee Details</h3>
      <p><strong>Name:</strong> {{ employee.firstname }} {{ employee.lastname }}</p>
      <p><strong>Email:</strong> {{ employee.email }}</p>
      <p><strong>Department:</strong> {{ employee.department }}</p>
      <p><strong>Phone:</strong> {{ employee.phonenumber }}</p>
      <p><strong>Address:</strong> {{ employee.address }}</p>
    </div>
  </div>
</template>

<script>
import EmployeeService from '../services/EmployeeService';

export default {
  data() {
    return {
      employeeId: '',
      employee: null,
    };
  },
  methods: {
    findEmployee() {
      EmployeeService.getEmployeeById(this.employeeId)
        .then(res => {
          this.employee = res.data;
        })
        .catch(err => {
          alert('Employee not found');
          console.error(err);
        });
    }
  }
};
</script>
