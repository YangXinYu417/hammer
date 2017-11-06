<template>
  <div>
    <div class="nav_content">
      <ul>
        <li><a>综合排行</a></li>
        <li><a>销量排行</a></li>
        <li><a>价格低到高</a></li>
        <li><a>价格高到低</a></li>
      </ul>
    </div>
    <div class="main-top">
      <ul class="main-box">
        <li>
          <v-goodList :data="item" key="key" v-for="item in data">
          </v-goodList>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import goodsList from '../../templates/goodslist'
  export default {
    data () {
      return {
      }
    },
    components: {
      'v-goodList': goodsList
    },
    computed: {
      data () {
        return this.$store.state.list
      }
    },
    created () {
      this.$store.dispatch('getListActions')
      console.log(this.$store.dispatch('getListActions'))
    }
  }
</script>
<style lang="scss">

</style>
