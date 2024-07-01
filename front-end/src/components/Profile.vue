<!-- src/components/Profile.vue -->
<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 class="text-2xl font-bold mb-4">Profile</h1>
      <div v-if="user" class="w-1/3 bg-white p-6 rounded shadow-md">
        <p><strong>Username:</strong> {{ user.username }}</p>
      </div>
      <button @click="logout" class="mt-4 bg-red-500 text-white p-2 rounded">Logout</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        user: null
      };
    },
    async created() {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3000/auth/profile', {}, {
          headers: { Authorization: `Bearer ${token}` }
        });
        this.user = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    methods: {
      logout() {
        localStorage.removeItem('token');
        this.$router.push('/login');
      }
    }
  };
  </script>
  