<template>
  <div class="contact-container">
    <h1>{{ $t("contactLink") }}</h1>
    <div>
      <form @submit="checkForm" id="contactForm">
        <p class="errors" v-if="errors.length">
            <ul>
            <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
            </ul>
        </p>
        <div class="form-item">
          <input type="text" name="name" id="name" v-model="name" :placeholder="$t('namePlaceholder')" required/>
        </div>
        <div class="form-item">
          <input type="email" name="email" id="email" v-model="email" :placeholder="$t('emailPlaceholder')" required />
        </div>
        <div class="form-item">
          <input type="tel" id="phone" name="phone" pattern="[0-9]+$" v-model="phone" :placeholder="$t('phonePlaceholder')" required/>
        </div>
        <div class="form-item">
          <v-select label="name" :options="$t('countryList')" :placeholder="$t('countryPlaceholder')" aria-autocomplete="off" v-model="selectedCountry"></v-select>
        </div>
        <div class="form-item">
          <textarea name="message" id="message" v-model="message" :placeholder="$t('contactMessagePlaceholder')" required></textarea>
        </div>
        <div class="form-item">
          <button type="submit">{{ $t("sendButton") }}</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import 'vue-select/dist/vue-select.css';
export default {
  name: 'Contact',
  data: function(){
      return{
        errors: [],
        name: null,
        email: null,
        phone: null,
        message: null,
        selectedCountry: null,
      }
  },
  mounted: function () {
    if(this.$store.state.userInfo.name){
      this.name = this.$store.state.userInfo.name;
      this.email = this.$store.state.userInfo.email;
    }
    
  },
  methods:{
    sendForm(){
      let sendData = {
        name: this.name,
        email: this.email,
        phonenumber: this.phone,
        countryCode: this.selectedCountry.id,
        text: this.message
      };

      fetch('https://example.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sendData),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Send form success:', data);
      })
      .catch((error) => {
        console.error('Send form error:', error);
      });
    },
    checkForm:function(e){
        this.errors = [];
        if (!this.name) {
            this.errors.push(this.$i18n.t("nameRequired"));
        }
        if (!this.email) {
            this.errors.push(this.$i18n.t("emailRequired"));
        } else if (!this.validEmail(this.email)) {
            this.errors.push(this.$i18n.t("validEmailRequired"));
        }
        if (!this.phone) {
            this.errors.push(this.$i18n.t("phoneRequired"));
        }
        if (!this.selectedCountry) {
            this.errors.push(this.$i18n.t("countryRequired"));
        }
        if (!this.errors.length) {
            this.sendForm();
        }
        e.preventDefault();
    },
    validEmail: function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
  }
}
</script>
<style scoped>
.contact-container{
  width: 60%;
  margin: 0 auto;
}
#name:invalid, #email:invalid, #phone:invalid, #message:invalid{
  border-color: orangered;
}
.contact-container .errors ul{
    list-style: none;
    color: orangered;
    padding: 0;
    margin: 0;
}
</style>