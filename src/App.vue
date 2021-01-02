<template>
  <div id="app">
    <div id="nav">
      <div class="nav-left">
        <font-awesome-icon icon="adjust" />
        {{ $t("projectName") }}
      </div>
      <a href="javascript:;" class="nav-hamburger" v-on:click="toggleMobileMenu()">
        <font-awesome-icon icon="bars" v-if="!this.$store.state.showMenu"/>
        <font-awesome-icon icon="times" v-if="this.$store.state.showMenu"/>
      </a>
      <div class="nav-right" v-bind:class="{ 'show-menu': this.$store.state.showMenu }">
        <router-link to="/">{{ $t("homeLink") }}</router-link>
        <router-link to="/contact">{{ $t("contactLink") }}</router-link>
        <a href="javascript:;" v-if="!this.$store.state.userInfo.email" v-on:click="toggleLoginModal()">{{ $t("loginLink") }}</a>
        <span v-else>{{this.$store.state.userInfo.email}}</span>
        <LanguageSelect />
      </div>
    </div>
    <router-view/>
    <footer>{{ $t("copyrightText") }} &copy; 2020 - Uğurtan Pektaş</footer>
    <LoginModal @toggleLoginModal="toggleLoginModal()" v-if="this.$store.state.showLogin"/>
  </div>
</template>

<script>
import LoginModal from '@/components/LoginModal.vue'
import LanguageSelect from '@/components/LanguageSelect.vue'
export default {
  name: 'App',
  methods: {
    toggleMobileMenu(){
      this.$store.dispatch('toggleMobileMenu')
    },
    toggleLoginModal(){
      this.$store.dispatch('toggleLoginModal')
    }
  },
  components:{
    LoginModal,
    LanguageSelect
  }
}
</script>
<style src="@/assets/styles/main.css"></style>
