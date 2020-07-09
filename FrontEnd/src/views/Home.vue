<template>
  <div class="container">
    <header class="jumbotron">
       
       <h1>Welcome to Good Read</h1>
       <p>This project is part of udacity task</p>
       <p>to use this application you can Use the folowing<br><br> <mark>UserName : admin</mark> <br><mark>Password : admin</mark></p>
       <p>to login as Admin and you can use <br> <br> <mark>UserName : user</mark> <br><mark>Password : user</mark> <br><br> to login as User </p>
       <p>or you can signup with your own account for login , PS : signup user is by default role user </p>
    </header>
      <div v-if="message" class="alert alert-danger" role="alert">{{message}}</div>

  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      content: [],
      perPage: 6,
      currentPage: 1,
      message:''
    };
  },
  mounted() {
    
  }
};
</script>
