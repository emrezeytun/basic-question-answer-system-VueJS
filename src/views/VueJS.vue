<template>
    <div class="container">
       <div v-for="(topic, index) in topics" class="question" :key="index">
           <div class="name"><p>{{ topic.title }} - <span> #{{ topic.type }} </span> - {{ topic.username }} <span> - {{ topic.date }} </span> </p></div>
          <p class="answersP"> {{topic.message}}</p>
          <div class="button">
         <router-link :to="{ name: 'SingleQuestion', params: { id: topic.slug }}">  <button class="btn">See</button> </router-link>
        </div>
       </div>

     
       
        </div>
</template>

<script>
import firebase from '../firebase/firebase'
import 'firebase/firestore';

export default {
  data() {
    return {
       db : firebase.firestore(),
       topics : [],
    }
  },
  created() {

  this.db.collection("messages").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      
       if(doc.data().type == "VueJS"  && doc.data().own == 1 ) { this.topics.push(doc.data()) }
    })
}).catch(a => console.log(a));
  }}




</script>



