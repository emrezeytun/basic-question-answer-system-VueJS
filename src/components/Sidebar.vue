<template>
     <div class="sidebar">

            <ul>
              <router-link active-class="active" to="/css"><li>#CSS/SCSS</li> </router-link>
              <router-link active-class="active" to="/javascript"><li>#Javascript</li>  </router-link>
              <router-link  active-class="active"  to="/vueJS"><li>#Vue JS</li> </router-link>
              <router-link active-class="active" to="/reactJS"><li>#React JS</li> </router-link>
              <router-link active-class="active" to="/angularJS"><li>#Angular JS</li> </router-link>
              <router-link active-class="active" to="/nodeJS"><li>#Node JS</li> </router-link>
              <router-link active-class="active" to="/php"><li>#PHP</li> </router-link>
            </ul>
        </div>
</template>

<style scoped>
a {
    text-decoration: none;
    color: rgba(0,0,0,0.8);
    transition: .4s color;
}

a.active {
    color: rgba(235, 116, 116, 0.9);
    position:relative;
}

.active::after {
    content: '>>';
    position: absolute;
    top:50%;
    margin: auto 0;
    left: 8rem;
}
</style>