<template>
<div class="language-container">
    <select v-model="language">
        <option value="en"> En </option>
        <option value="tr"> Tr </option>
    </select>
</div>
</template>

<script>
export default {
  name: 'LanguageSelect',
  computed:{
    language:{
      get(){
        return this.$store.state.language
      },
      set(languageValue){
        this.$store.commit('changeLanguage', languageValue)
        this.$i18n.locale = languageValue
      }
    }
  },
}
</script>

<style scoped>
.language-container{
    display: inline-block;
}
.language-container select{
    padding: 5px;
    border:1px solid #2c3e50;
    border-radius: 5px;
}
</style>