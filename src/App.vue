<template>
  <div>
    <h1>Employee Portal</h1>
    <AddEmployee />
    <FindEmployee />
    <DeleteEmployee />
  </div>
</template>

<script>
import AddEmployee from './components/AddEmployee.vue';
import FindEmployee from './components/FindEmployee.vue';
import DeleteEmployee from './components/DeleteEmployee.vue';

export default {
  name: 'App',
  components: {    
    AddEmployee,
    FindEmployee,
    DeleteEmployee
  }
};
</script>

<style scoped>
h1, h2 {
  text-align: center;
  color: #2c3e50;
}

form, .section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px;
}

input {
  margin: 5px;
  padding: 8px;
  width: 90%;
  max-width: 300px;
  box-sizing: border-box;
}

button {
  padding: 8px 16px;
  margin-top: 5px;
  background-color: #2c3e50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #1a242f;
}

@media (min-width: 768px) {
  form {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  input {
    margin: 5px 10px;
    width: 200px;
  }

  button {
    height: 40px;
    align-self: center;
  }
}
</style>
