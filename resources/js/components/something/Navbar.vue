<template lang="">
    <div>
       <div class='vnav' :class='{active: isNavbar}'>
           <div class='vnav-burg' @click='togglNavbar' :class='{active: isNavbar}'> <span>MyPortfolio :3</span> <i class="fa fa-bars"></i></div>
            
             <div class='vnav-opt' :class='{active: isNavbar}'>
                 <div><router-link v-if='!token' :to="{ name: 'user.login' }" ><i class="fa fa-sign-in" aria-hidden="true"></i> <span>Войти</span></router-link></div>
                 <div><router-link v-if='!token' :to="{ name: 'user.registr' }" ><i class="fa fa-address-card-o" aria-hidden="true"></i> <span>Регистрация </span></router-link></div>
                 <div> <i class="fa fa-cog" aria-hidden="true"></i>  <span> Skills </span> </div>
                 <div><i class="fa fa-comments" aria-hidden="true"></i><span> Comments</span> </div>
                 <div><i class="fa fa-envelope-o" aria-hidden="true"></i> <span>Обратная связь</span></div>
               <div v-if='admin'> <router-link :to="{ name: 'admin.create' }" > <i class="fa fa-address-book-o"></i>  <span> Admin Create </span> </router-link> </div>
               <div v-if='admin'> <router-link :to="{ name: 'admin.index' }" > <i class="fa fa-address-book-o"></i>  <span> Admin Index </span> </router-link> </div>
                <div v-if='token'><a @click.prevent='logout' ><i class="fa fa-sign-out" aria-hidden="true"></i><span> Выйти</span></a></div>
             </div>
       </div>
    </div>
</template>
<script>
import api from '../../api';

export default {

    name:'Navbar',
    data(){
        return{
           isNavbar: true,
           admin: false,
        }
    },
    props:[
        'token'
    ],

    mounted(){
       this.statusAdmin();
    },
    methods:{
        togglNavbar(){
          this.isNavbar = !this.isNavbar;

          this.$emit('stateNavbar', this.isNavbar);
        },
         statusAdmin(){
           api.get('/api/auth/fruits').then(res=>{
            //    console.log(res);
            if(res.data == '1'){
                  this.admin = true;
            }
           }).catch(err=>{
                this.admin = false
                //  console.log(err);
           })
        },
         logout(){
          api.post('/api/auth/logout').then(res=>{
              localStorage.removeItem('access_token');
              document.location.reload();
               this.$router.push({name:'user.login'});
          });
        },
    }
}
</script>
<style scoped>
  *{
    box-sizing: border-box;
  }
  .vnav{
      position: fixed;
      top:0;
      left:0;
      width:100%;
      max-width:180px;
      height: 100%;
      background: #232323;
      display: flex;
      align-items: center;
      justify-content: center;
      transition-duration: 0.5s;
  }
  .vnav.active{
      max-width:70px;
  }
  .vnav-opt div{

      margin-top: 10px;
  }
  a {
    text-decoration: none;
}
  .vnav-opt div span, .vnav-opt div i{
      text-decoration: none;
      color:snow;
      font-size: 18px;
      cursor: pointer;
      transition-duration: 0.7s;
  }
  .vnav-burg{
      position:absolute;
      top:0;
      padding-top: 20px;
      color:snow;
      font-size: 30px;
      cursor: pointer;
      transition-duration: 1s;
  }
  .vnav-burg span{
      font-size: 20px;
      animation: fade 1s ease-in;
      display: inline-block;
      margin-bottom: 16px;
  }

  .vnav-burg.active span{
      display: none;
      margin-bottom: 0px;
  }
 @keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

  .vnav-burg i{
      display: flex;
      justify-content: center; 
      color:snow;
  }
  .vnav-opt.active span{
      display: none;
  }
  .vnav-opt.active{
       transition-duration: 1s;
      text-align: center;
  }

</style>