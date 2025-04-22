<template>
    <div class="portal">
      <h2>Welcome to the Employee Portal</h2>
      <div class="button-group">
        <button @click="$router.push('/add')">Add Employee</button>
        <button @click="$router.push('/find')">Find Employee</button>
        <button @click="$router.push('/delete')">Delete Employee</button>
        <button @click="logout">Logout</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PortalEmployee',
    methods: {
      logout() {
        localStorage.removeItem('authHeader');
        this.$router.push('/');
      }
    }
  }
  </script>
  
  <style scoped>
  .portal {
    text-align: center;
    margin-top: 50px;
  }
  
  .button-group {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 20px;
  }
  
  button {
    padding: 10px 20px;
    font-size: 16px;
  }
  </style>
  