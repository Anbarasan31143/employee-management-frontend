<script>
import axios from 'axios'

export default {
  data() {
    return {
      username: '',
      password: '',
      errorMessage: ''
    }
  },
  methods: {
    login() {
      const authHeader = 'Basic ' + btoa(`${this.username}:${this.password}`);

      axios.get('http://localhost:8081/login', {
        headers: {
          Authorization: authHeader
        }
      })
        .then(response => {
          console.log('Login successful', response.data)          

          // Save to localStorage for future API calls
          localStorage.setItem('authHeader', authHeader)

          // Redirect to portal page (you can change route name)
          this.$router.push('/portal')
        })
        .catch(error => {
          console.error('Login failed', error)
          this.errorMessage = 'Invalid credentials'
        });
    }
  }
}
</script>
