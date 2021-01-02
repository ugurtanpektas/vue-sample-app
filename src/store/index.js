import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showMenu:false,
    showLogin:false,
    language:'en',
    userInfo:{
      name:'',
      email:''
    },
    messages:{
      en:{
        projectName:"Sample App",
        homeLink:"Home",
        contactLink:"Contact",
        loginLink:"Login",
        sendButton:"Send",
        copyrightText:"Copyright",
        emailPlaceholder:"Email",
        namePlaceholder:"Name",
        passwordPlaceholder:"Password",
        phonePlaceholder:"Phone Number",
        contactMessagePlaceholder:"Your Message",
        countryPlaceholder:"Country",
        passwordRequired:"Password is required",
        emailRequired:"Email is required",
        nameRequired:"Name is required",
        validEmailRequired:"Enter a valid email address",
        countryRequired:"Select Country",
        phoneRequired:"Enter Phone Number",
        homeMessage:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        countryList : [
          { id: "TR", name: "Turkey" },
          { id: "US", name: "United States of America" },
          { id: "GB", name: "United Kingdom" },
          { id: "DE", name: "Germany" },
          { id: "SE", name: "Sweden" },
          { id: "KE", name: "Kenya" },
          { id: "BR", name: "Brazil" },
          { id: "ZW", name: "Zimbabwe" }
        ]
      },
      tr:{
        projectName:"Örnek Uygulama",
        homeLink:"Anasayfa",
        contactLink:"İletişim",
        loginLink:"Giriş",
        sendButton:"Gönder",
        copyrightText:"Tüm Hakları Saklıdır",
        emailPlaceholder:"Mail adresiniz",
        namePlaceholder:"İsim",
        passwordPlaceholder:"Şifreniz",
        phonePlaceholder:"Telefon Numaranız",
        contactMessagePlaceholder:"Mesajınız",
        countryPlaceholder:"Ülke",
        passwordRequired:"Şifre alanı zorunludur",
        emailRequired:"Mail adresi alanı zorunludur",
        nameRequired:"İsim alanı zorunludur",
        validEmailRequired:"Geçerli bir mail adresi giriniz",
        countryRequired:"Ülke seçiniz",
        phoneRequired:"Telefon giriniz",
        homeMessage:"Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.",
        countryList : [
          { id: "TR", name: "Türkiye" },
          { id: "US", name: "Birleşik Amerika" },
          { id: "GB", name: "Büyük Britanya" },
          { id: "DE", name: "Almanya" },
          { id: "SE", name: "İsveç" },
          { id: "KE", name: "Kenya" },
          { id: "BR", name: "Brazilya" },
          { id: "ZW", name: "Zimbabve" }
        ]
      }
    }
  },
  getters:{
    language:(state)=>{
      return state.language
    }
  },
  mutations: {
    changeLanguage(state, payload) {
      state.language = payload
    },
    changeUserData(state, payload){
      state.userInfo = payload
    },
    toggleMobileMenu(state){
      state.showMenu = !state.showMenu
    },
    toggleLoginModal(state){
      state.showLogin = !state.showLogin
    }
  },
  actions: {
    changeLanguage({commit}, payload){
      commit('changeLanguage', payload)
    },
    changeUserData({commit}, payload){
      commit('changeUserData', payload)
    },
    toggleMobileMenu({commit}){
      commit('toggleMobileMenu')
    },
    toggleLoginModal({commit}){
      commit('toggleLoginModal')
    }
  },
  modules: {
  }
})
