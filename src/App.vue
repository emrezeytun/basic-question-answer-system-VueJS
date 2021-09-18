<template>



 <Header />


 <div class="main">
       
       <Sidebar />

         <router-view/>

    </div>

    




  


</template>

<script>
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'


import firebase from "@/firebase/firebase";
import 'firebase/firestore';


export default {
  name: 'App',
  data() {
    return {
      db: firebase.store,
      formName : "",
      formSelect : "",
      formMessage : ""
    }
  },
  components: { Header, Sidebar }
  
}
</script>

<style>

</style>
