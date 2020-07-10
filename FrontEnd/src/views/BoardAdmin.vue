<template>
    <div class="container">
    <header class="jumbotron">
       <div class="overflow-auto">
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>

    <p class="mt-3">Current Page: {{ currentPage }}</p>

    <b-table
      id="my-table"
      :items="content"
      :per-page="perPage"
      :current-page="currentPage"
      small
    ></b-table>
  </div>
    </header>
      <div v-if="message" class="alert alert-danger" role="alert">{{message}}</div>

  </div>
</template>

<script>
import UserService from '../services/user.service';

export default {
  name: 'Admin',
  data() {
    return {
      content: [],
      perPage: 6,
      currentPage: 1,
      message:''
    };
  },
  mounted() {
 
    UserService.getPublicContent().then(
      response => {
        this.content = response.data;
      },
      error => {
        this.message =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
  },computed:{
     rows() {
        return this.content.length
      }
  }
};
</script>
