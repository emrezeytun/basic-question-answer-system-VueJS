<template>
            <div class="container">
       
            <form >
                <div class="form-group">
                <input type="text" placeholder="your name.." v-model="formName">
                 </div>

                 <div class="form-group">
                <input type="text" placeholder="title.." v-model="formTitle">
                 </div>

                 <div class="form-group">
                <select name="" id="" v-model="formSelect">
                    <option value="CSS/SCSS"> CSS/SCSS </option>
                    <option value="Javascript" selected> Javascript </option>
                    <option value="VueJS"> Vue JS </option>
                    <option value="ReactJS"> React JS </option>
                    <option value="AngularJS"> Angular JS </option>
                    <option value="NodeJS"> Node JS </option>
                    <option value="PHP"> PHP </option>
                </select>
            </div>
            
            <div class="form-group">
                <textarea name="" id="" cols="30" rows="10" placeholder="Your question.." v-model="formMessage"></textarea>
            </div>
            <div class="form-group">
                <button @click.prevent="saveDB" class="btn">Ask</button>
            </div>

            

            </form>
       
        </div>
</template>


<script>
import firebase from "@/firebase/firebase";
import 'firebase/firestore';
import slugify from 'slugify'


export default {

    data() {
        return {
            db : firebase.firestore(),
            formName: "",
            formSelect: "",
            formMessage: "",
            formTitle: "",
        }

    },
    
     methods: {

         saveDB(){
             const date = new Date;
             var slug = slugify(this.formTitle);
             const randomNumber = Math.floor(Math.random() *1000);
             slug = slug + '-' + randomNumber;
          
            
           this.db.collection("messages")
          .add({ username: this.formName, type: this.formSelect, message: this.formMessage, own: 1, slug: slug, title: this.formTitle, date: date.toLocaleDateString("tr-TR") })
          .then(() => console.log("success"))
          .catch((error) => {
            console.error("Error writing document: ", error);
          });

            this.$router.push("/");
         }
            
        }

}

</script>
