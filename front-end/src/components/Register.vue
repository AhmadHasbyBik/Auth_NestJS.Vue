<!-- src/components/Register.vue -->
<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 class="text-2xl font-bold mb-4">Register</h1>
      <form @submit.prevent="register" class="w-1/3 bg-white p-6 rounded shadow-md">
        <div class="mb-4">
          <label class="block mb-1">Username</label>
          <input v-model="username" type="text" class="w-full p-2 border rounded" />
        </div>
        <div class="mb-4">
          <label class="block mb-1">Password</label>
          <input v-model="password" type="password" class="w-full p-2 border rounded" />
        </div>
        <button type="submit" class="w-full bg-blue-500 text-white p-2 rounded">Register</button>
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
      async register() {
        try {
          await axios.post('http://localhost:3000/auth/register', {
            username: this.username,
            password: this.password
          });
          this.$router.push('/login');
        } catch (error) {
          console.error(error);
        }
      }
    }
  };
  </script>
  