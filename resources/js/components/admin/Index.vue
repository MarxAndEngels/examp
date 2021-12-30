<template lang="">
    <div>
      <div v-for='category of categories'>
        <div class='tittle-techology'>{{ category.tittle }}</div>
        <center> <div class='circle'></div> </center>
        <div class="row g-5">
       <div style='margin-right:10px;' class='col-lg-4 col-md-6 content-techology' v-for='skill of skills' :key='skill.id' v-if='skill.category_id == category.id'>

          <div> <router-link :to="{ name:'admin.update', params: {'id': skill.id} }" ><i class="fa fa-pencil" aria-hidden="true"></i> Изменить </router-link>  </div>
          <div><i class="fa fa-trash-o" aria-hidden="true"></i> Удалить </div>
      <center> <img :src="skill.image" class='image-techology' :alt="skill.name"></center>
      <center> <div>
        <h5 class="name-techology">
    
         <i style='color:black;' class="fa fa-pencil-square" aria-hidden="true"></i> {{ skill.name }}</h5>
      </div>
      <div @click='searchTarget' class='arrow'>
        <i class="fa fa-chevron-down" aria-hidden="true"></i>
      </div>
      <div class='hidden-content'>
        <h5>Дополнительная информация: </h5>
         <h5 class="name-techology"><i style='color:black;' class="fa fa-book" aria-hidden="true"></i> {{ skill.hidden_content }}</h5>
         <div style='margin-top:20px'></div>
         </div>
      </center> 

</div>
    </div>
  </div>
  <div style='height:100px'></div>
    </div>
</template>
<script>
import api from '../../api';

export default {
    name:'Create',
    data(){
        return{
           skills: null,
           error: null,
           categories: null,
           num:null,
        }
    },
    mounted(){
     this.statusAdmin();
     this.getSkills();
    },
    methods:{
         getSkills(){
         api.get('/api/auth/skills').then(res=>{
             console.log(res.data);
            this.skills = res.data.skills;
            this.categories = res.data.categories;
         }).catch(err=>{
                if(err.status == 'nothing'){
                    this.error = 'Пока ничего нет'
                }
           })
         },
           statusAdmin(){
           api.get('/api/auth/fruits').then(res=>{
          if(res.data == '1'){
                
            }
           }).catch(err=>{
          
           })
        },
        searchTarget(e){
          e.target.classList.toggle('active');
             let nexEl = e.target.nextElementSibling;
             nexEl.classList.toggle('active');
        }
    },
}
</script>
<style>
.tittle-techology{
  text-align: center;
  font-size: 28px;
  font-weight: 600;
  margin-top:20px;
}
    .image-techology{
      width: 90px;
      height: 90px;
      margin: 20px 0;
            filter: grayscale(80%);
            transition-duration: .7s;
    }
    .circle{
      margin-top:10px;
      width: 16px;
      height: 16px;
      border:2px solid #232323;
      background: #198754;
      display: block;
      border-radius: 50%;
       margin-bottom:35px;
    }
    .content-techology{
      
       box-shadow: 6px 6px 6px rgba(0,0,0,0.5);
       transition-duration: .2s;
    }
    .name-techology{
      color:#727272;
    }
    .content-techology:hover{
       box-shadow: 10px 10px 10px rgba(0,0,0,0.5);
    }
    .content-techology:hover .image-techology{
            filter: grayscale(0%);
    }
    .arrow{
      font-size: 30px;
      cursor: pointer;
    }
    .arrow i{
     pointer-events: none;
    }
    .arrow.active{
      font-size: 30px;
      cursor: pointer;
      transform: rotate(180deg);
    }
    .hidden-content{
      display: none;
    }
    .hidden-content.active{
      display: block;
    }
      a {
        color:black;
    text-decoration: none;
}

</style>