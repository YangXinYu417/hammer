import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let store = new Vuex.Store({

  state: {
    list: [],
    shoplist: [],
    List: [],
    datA: []
  },
  getters: {
    filterPrice (state) {
      let price = 0
      state.shoplist.forEach((res) => {
        price += (res.count * res.price)
      })
      return price
    },
    filterCounts (state) {
      let count = 0
      state.shoplist.forEach((res) => {
        count += res.count
      })
      return count
    }
  },
  mutations: {
    changeList (state, actionData) {
      // console.log(actionData)
      this.state.list = actionData
    },
    changesku (state, sku) {
      let bFlag = true
      state.shoplist.map((res) => {
        if (res.sku_id === sku.sku_id) {
          res.count++
          bFlag = false
        }
      })
      if (bFlag) {
        console.log(sku)
        this.state.shoplist.push(sku)
        Vue.set(sku, 'count', 1)
        Vue.set(sku, 'checked', true)
      }
    },
    changeparticularssku (state, sku) {
      console.log(sku)
      let bFlag = true
      state.shoplist.map((res) => {
        if (res.sku_id === sku.sku_id) {
          res.count++
          bFlag = false
        }
      })
      if (bFlag) {
        this.state.shoplist.push(sku)
        Vue.set(sku, 'count', sku.count)
        Vue.set(sku, 'checked', true)
      }
    },
    gotomycat (state, sku) {
      let bFlag = true
      state.shoplist.map((res) => {
        if (res.sku_id === sku.sku_id) {
          res.count++
          bFlag = false
        }
      })
      if (bFlag) {
        console.log(sku)
        this.state.shoplist.push(sku)
        Vue.set(sku, 'count', sku.count)
        Vue.set(sku, 'checked', true)
      }
    },
    dingdan (state, sku) {
      let bFlag = true
      state.shoplist.map((res) => {
        if (res.sku_id === sku.sku_id) {
          res.count++
          bFlag = false
        }
      })
      if (bFlag) {
        console.log(sku)
        this.state.shoplist.push(sku)
        Vue.set(sku, 'count', sku.count)
        Vue.set(sku, 'checked', true)
      }
    },
    Submit (state, data) {
      this.state.datA = data
      console.log(this.state.datA)
    }
  },
  actions: {
    getListActions (context) {
      axios.get('http://www.easy-mock.com/mock/59f1df9dd00d13585e251066/hammer/goodsData').then((res) => {
        context.commit('changeList', res.data)
      }).catch((err) => {
        console.log(err)
      })
    },
    particulars (contexts, id) {
      axios.get('http://www.easy-mock.com/mock/59f1df9dd00d13585e251066/hammer/detailData').then((res) => {
        console.log(res.data)
        res.data.map((kkk) => {
          if (kkk.sku_id === Number(id)) {
            this.state.List = kkk
          }
        })
        console.log(this.state.List)
        console.log(id)
      }).catch((err) => {
        console.log(err)
      })
    }
  }
})

export default store
