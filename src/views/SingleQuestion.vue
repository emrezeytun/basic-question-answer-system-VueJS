<template>
   <div class="container">

              <div v-for="(topic, index) in topics" class="question" :key="index">
           <div class="name"><p>{{ topic.title }} - <span> #{{ topic.type }} </span> - {{ topic.username }} <span> - {{ topic.date }} </span> </p></div>
          <p class="answersP"> {{topic.message}}</p>
          
       </div>

       <div v-for="(topic, index) in messages" class="question" :key="index">
           <div class="name"><p> {{ topic.username }} <span> - {{ topic.date }} </span> </p></div>
          <p class="answersP"> {{topic.message}}</p>
          
       </div>
       
            <form >
                <div class="form-group">
                <input type="name" placeholder="your name.." v-model="formName">
                 </div>

            
            <div class="form-group">
                <textarea name="" id="" cols="30" rows="10" placeholder="Your answer.." v-model="formMessage"></textarea>
            </div>
            <div class="form-group">
                <button @click.prevent="sendMessage" class="btn">Answer</button>
            </div>

            </form>
       
        </div>
</template>

<script>
import firebase from '../firebase/firebase'
import 'firebase/firestore';

export default {
  data() {
    return {
       formName : "",
       formMessage : "",
       db : firebase.firestore(),
       topics : [],
       messages: [],
    }
  },
  created() {
  this.db.collection("messages").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      
       if(doc.data().slug == this.$route.params.id && doc.data().own == 1) { this.topics.push(doc.data()) }
    })
}).catch(a => console.log(a));

 this.db.collection("messages").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      
       if(doc.data().slug == this.$route.params.id && doc.data().own == 0) { this.messages.push(doc.data()) }
    })
}).catch(a => console.log(a));



  },

  methods: {
      sendMessage() {
           const date = new Date;
             var slug = this.$route.params.id;
             
            
           this.db.collection("messages")
          .add({ username: this.formName, message: this.formMessage, own: 0, slug: slug, date: date.toLocaleDateString("tr-TR") })
          .then(() => console.log("success"))
          .catch((error) => {
            console.error("Error writing document: ", error);
          });

            this.$router.push("/");
      }
  }
  
  
  
  }




</script>



