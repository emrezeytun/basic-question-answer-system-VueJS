<template>
     <div class="header">
        <div class="logo">
          <router-link to="/">    <p> <i class="fas fa-comments"></i> Question / Answer</p> </router-link>
        </div>
        <div class="new">
         <router-link to="/new_question">   <button class="btn"> <i class="fas fa-plus"></i> New Question </button> </router-link>
        </div>
    </div>
</template>


<style scoped>
    a {
        text-decoration: none;
        color: rgba(0,0,0,0.7)
    }
</style>