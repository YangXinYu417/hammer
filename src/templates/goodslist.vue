<template>
  <div>
    <div class="divs">
      <div class="div_top1" >
        <div>
          <router-link :to="'particulars/' + data.id + '/id/' + data.sku_info[imgs].sku_id">
            <img :src="data.sku_info[imgs].ali_image">
          </router-link>
          <h6>{{ data.name }}</h6>
          <h3>{{ data.name_title }}</h3>
        </div>
      </div>
      <div class="div_top2">
        <ul>
          <li v-for="list, key in data.sku_info">
            <a @click="Colors(key)">
              <img :src="'http://img01.smartisanos.cn/' + list.spec_json.image + '/20X20.jpg'" alt="">
            </a>
          </li>
        </ul>
      </div>
      <div class="div_top3">
        <div>
          <span>￥{{ data.price }}</span>
        </div>
      </div>
      <div class="div_top4">
        <div>
          <button type="button" class="btn btn-default">
            <router-link :to="'particulars/' + data.id + '/id/' + data.sku_info[imgs].sku_id">
              查询详情
            </router-link>
          </button>
          <button type="button" class="btn" @click="addshopcart(data.sku_info[imgs])">加入购物车</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object
    }
  },
  data () {
    return {
      imgs: 0
    }
  },
  methods: {
    Colors (key) {
      //  console.log(key)
      this.imgs = key
    },
    addshopcart (sku) {
      this.$store.commit('changesku', sku)
    }
  }
}
</script>
<style>

</style>
