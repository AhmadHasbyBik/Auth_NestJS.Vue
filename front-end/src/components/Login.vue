<template>
    <div class="flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 class="text-2xl font-bold mb-4">Login</h1>
      <form @submit.prevent="login" class="w-full max-w-full bg-white p-6 rounded shadow-full">
        <div class="mb-4">
          <label class="block mb-1">Username</label>
          <input v-model="username" type="text" class="w-full p-2 border rounded" />
        </div>
        <div class="mb-4">
          <label class="block mb-1">Password</label>
          <input v-model="password" type="password" class="w-full p-2 border rounded" />
        </div>
        <button type="submit" class="w-full bg-blue-500 text-white p-2 rounded">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      async login() {
        try {
          const response = await axios.post('http://localhost:3000/auth/login', {
            username: this.username,
            password: this.password
          });
          localStorage.setItem('token', response.data.access_token);
          localStorage.setItem('username', this.username);
          this.$router.push('/profile');
        } catch (error) {
          console.error(error);
        }
      }
    }
  };
  </script>
  