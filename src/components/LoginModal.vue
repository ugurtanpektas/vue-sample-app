<template>
  <div class="modal-wrapper">
    <div class="modal-container">
        <div class="language-container">
            <LanguageSelect />
        </div>
        <a href="javascript:;" class="close-login-modal" @click="$emit('toggleLoginModal')"><font-awesome-icon icon="times"/></a>
        <h1>{{ $t("loginLink") }}</h1>
        <form @submit="checkForm" id="loginForm">
            <p class="errors" v-if="errors.length">
                <ul>
                <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
                </ul>
            </p>
            <div class="form-item">
                <input type="text" name="name" v-model="name" :placeholder="$t('namePlaceholder')"/>
            </div>
            <div class="form-item">
                <input type="text" name="email" v-model="email" :placeholder="$t('emailPlaceholder')"/>
            </div>
            <div class="form-item">
                <input type="password" name="password" v-model="password" :placeholder="$t('passwordPlaceholder')"/>
            </div>
            <div class="form-item">
                <button type="submit">{{ $t("loginLink") }}</button>
            </div>
        </form>
    </div>
    <div class="modal-overlay" @click="$emit('toggleLoginModal')"></div>
  </div>
</template>

<script>
import LanguageSelect from '@/components/LanguageSelect.vue'
export default {
  name: 'LoginModal',
  data: function(){
      return{
        errors: [],
        name: null,
        email: null,
        password: null
      }
  },
  methods:{
    login(){
      let userData = {
        name : this.name,
        email : this.email 
      };
      this.$store.dispatch('changeUserData', userData)
      this.$store.dispatch('toggleLoginModal')
    },
    checkForm:function(e){
        this.errors = [];
        if (!this.name) {
            this.errors.push(this.$i18n.t("nameRequired"));
        }
        if (!this.password) {
            this.errors.push(this.$i18n.t("passwordRequired"));
        }
        if (!this.email) {
            this.errors.push(this.$i18n.t("emailRequired"));
        } else if (!this.validEmail(this.email)) {
            this.errors.push(this.$i18n.t("validEmailRequired"));
        }
        if (!this.errors.length) {
            this.login();
        }
        e.preventDefault();
    },
    validEmail: function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
  },
  components:{
      LanguageSelect
  }
}
</script>

<style scoped>
.modal-wrapper{
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    top:0;
}
.modal-wrapper .modal-overlay{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.3);
    top:0;
    left:0;
    z-index: 1;
    cursor: pointer;
}
.modal-wrapper .modal-container{
    position: relative;
    width: 400px;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    z-index: 2;
}
.modal-wrapper .modal-container .language-container{
    position: absolute;
}
.modal-wrapper .modal-container .close-login-modal{
    position: absolute;
    top: 20px;
    right: 20px;
    color: #2c3e50;
}
.modal-wrapper .modal-container .errors ul{
    list-style: none;
    color: orangered;
    padding: 0;
    margin: 0;
}
</style>