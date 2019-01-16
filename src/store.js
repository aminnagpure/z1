import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


//import router from './router' 
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

Vue.use(Vuex,axios)

export default new Vuex.Store({
  state: {    
    sitename: 'Zetamales',
    dataurl: 'http://zeta1.us-east-2.elasticbeanstalk.com',
    // dataurl: 'http://localhost:3000',
    loginstatus: false,
    displayName: '',
    email: '',
    photourl: '',
    loggedIn: false,
    binance: [],
    binancebal: 0,
    binancebalPrev: 0,
    binancebalNow: 0,
    kraken: [],
    krakenbal: 0,
    krakenbalPrev: 0,
    krakenbalNow: 0,
    bitrex: [],
    bitrexbal: 0,
    bitrexbalPrev: 0,
    bitrexbalNow: 0,
    polonix: [],
    polonixbal: 10,    
    polonixbalPrev: 0,
    polonixbalNow: 0,
    totaleth: 0,
    morethan1000added: 'flat market might see some red today',
    morethan10000added: 'some negativity, little red around 1-3% in this exchange',
    morethan50000added: ' likely to be red in this exchange, some one is trying to sell a lot',
    morethan100000added: 'might see heavy red in this exchange atleast 20% n can be more',
    morethan1000withdrawl: 'relatively flat market, some positive greenery',
    morethan10000withdrawl: 'relatively flat market,around 5% some positive greenery',
    morethan50000withdrawl: 'looks like its going to get boost,around 10-25% some positive greenery',
    morethan100000withdrwal: 'super green day, might see over 30% greenery',
    morethan1000overalladded: 'Overall flat market it seems around 1% depreciation in ethereum prices',
    morethan10000overalladded: 'Overall flat market it seems around 2-5% depreciation in ethereum prices',
    morethan50000overalladded: 'Overall  it seems around 5-10% depreciation in ethereum prices',
    morethan100000overalladded: 'it seems atleast 10-30% drop in ethereum prices more likely, lot of ether in exchanges for sell',
    morethan1000overallwithdrawl: 'Overall flat ether market around 1% appreciation more likely',
    morethan10000overallwithdrwal: 'Overall flat market around 1-3% price appreciation more likely',
    morethan50000overallwithdrwal: '  5-13% price appreciation more likely',
    morethan100000overallwithdrwal:' Market likely to be green around 10-30 %',
    user: {}
  },
  mutations: {
    loggeduser: function (state, user) {      
      state.displayName = user.displayName,
      state.email = user.email,
      state.photourl = user.photoURL,
      state.loggedIn=true,
      state.user = user
    },
    Logout: function (state) {      
      state.user=null,
      state.loggedIn=false,
      state.loginstatus=true,
      state.email=''
      state.displayName=''
      state.photourl=''
        
    },
    loadbinancedata:function(state,binance){      
       state.binance=binance,
       state.binancebal=binance[0].totaleth-binance[binance.length-1].totaleth
       state.binancebalNow=binance[0].totaleth
       state.binancebalPrev=binance[binance.length-1].totaleth       
     },
     loadKrakendata:function(state,kraken){
       state.kraken=kraken,
       state.krakenbal=kraken[0].totaleth-kraken[kraken.length-1].totaleth
       state.krakenbalNow=kraken[0].totaleth
       state.krakenbalPrev=kraken[kraken.length-1].totaleth
     },
     loadBitrexdata:function(state,bitrex){
       state.bitrex=bitrex,
       state.bitrexbal=bitrex[0].totaleth-bitrex[bitrex.length-1].totaleth
       state.bitrexbalNow=bitrex[0].totaleth,
       state.bitrexbalPrev=bitrex[bitrex.length-1].totaleth
     },
     loadpoloneixdata: function (state, polonix) {
       state.polonix = polonix,      
       state.polonixbal=polonix[0].totaleth-polonix[polonix.length-1].totaleth       
       state.polonixbalNow=polonix[0].totaleth
       state.polonixbalPrev=polonix[polonix.length-1].totaleth
       state.totaleth=state.binancebal+state.krakenbal+state.bitrexbal+state.polonixbal
     }

  },
  actions: {
    setUser: function ({ commit }, user) {
      commit('loggeduser', user)
    },
    logout: function ({ commit }) {      
      commit('Logout')
    },
    loaddatabinance: function ({commit}) {      
      axios
      .get(this.state.dataurl +'/showeth?id=binance_1')
      .then(data=>         
         commit('loadbinancedata', data.data)          
      )
      .catch(err=>{
        return err
      })

    },
    loadKrakendataaction:function({commit}){
      axios
      .get(this.state.dataurl + '/showeth?id=kraken_4')
      .then(data=>
         
         commit('loadKrakendata',data.data) 
      )
      .catch(err=>{
        return err
      })

    },
    loadBitrexaction:function({commit}){
      axios
      .get(this.state.dataurl + '/showeth?id=bitrex_1')
      .then(data=>
         
         commit('loadBitrexdata',data.data) 
      )
      .catch(err=>{
        return err
      })

    },

    loadPolonixaction:function({commit}){
      axios
      .get(this.state.dataurl + '/showeth?id=poloneix_1')
      .then(data=>
        
         commit('loadpoloneixdata',data.data) 
      )
      .catch(err=>{
        return err
      })
    }
  },  
  plugins: [vuexLocal.plugin]
})