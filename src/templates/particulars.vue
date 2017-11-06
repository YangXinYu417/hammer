<template>
  <div>
    <div class="main-top">
      <div class="main-box">
        <div class="gray-box">
          <div class="gallery-left">
            <div class="gallery">
              <div class="gallery-lefts">
                <ul>
                  <li v-for="iamge,key in Data.ali_images" @click="li(key)" :style="imgss===key? {border: '3px solid #dcdcdc'} : {border:'none'}">
                    <img :src="iamge" alt="">
                  </li>
                </ul>
              </div>
              <div class="gallery-rights">
                <ul>
                  <li>
                    <img :src="Data.ali_images[imgss]" alt="">
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="gray-right">
            <div class="gray">
              <div class="gray-top">
                <div>
                  <span>{{Data.title }}</span>
                  <p>{{ Data.sub_title }}</p>
                </div>
                <div>
                  <span>￥{{ Data.price }}</span>
                </div>
              </div>
              <div class="gray-body">
                <div class="Color">
                  <span>颜色</span>
                  <ul>
                    <li v-for="item,key in Data.sku_list">
                      <!--<router-link :to="{name: 'particulars', query: {id: this.$route.query.id}}"></router-link>-->
                      <a @click="Colors(key)"><img :src="'http://img01.smartisanos.cn/'+item.image +'20X20.jpg'" alt=""></a>
                    </li>
                  </ul>
                </div>
                <!--<div class="Size">
                  <strong></strong>
                  <ul>
                    <li><a href="#"><span>S</span></a></li>
                    <li><a href="#"><span>M</span></a></li>
                    <li><a href="#"><span>L</span></a></li>
                    <li><a href="#"><span>XL</span></a></li>
                    <li><a href="#"><span>XXL</span></a></li>
                  </ul>
                </div>-->
                <div class="Num">
                  <h4>数量</h4>
                  <div class="Numcen">
                    <div>
                      <button @click="sub" :style="count? {cursor: 'pointer',disabled:'disabled'}:{cursor: 'pointer'}"> - </button>
                      <span>{{ count }}</span>
                      <button @click="add"> + </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="gary-footer">
                <div>
                  <span @click="addshou(Data)"><a>加入购物车</a></span>
                  <span><router-link to="/payment">现在购买</router-link></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        imgss: 0,
        False: true,
        count: 1
      }
    },
    computed: {
      Data () {
        return this.$store.state.List
      }
    },
    created () {
      console.log(this.$route)
      this.$store.dispatch('particulars', this.$route.params.key)
      console.log(this.$store.dispatch('particulars'))
    },
    methods: {
      Colors (key) {
        this.$router.push({path: '/OnlineStore/particulars/' + this.$route.params.id + '/id/' + this.Data.sku_list[key].id})
        this.$store.dispatch('particulars', this.Data.sku_list[key].id)
      },
      li (key) {
        this.imgss = key
        this.False = false
      },
      addshou (sku) {
        this.$set(sku, 'count', this.count)
        this.$store.commit('changeparticularssku', sku)
      },
      add () {
        if (this.count < 5) {
          this.count++
        } else {
          this.count = 5
        }
      },
      sub () {
        if (this.count > 1) {
          this.count--
        } else {
          this.count = 1
        }
      }
    }
  }
</script>
<style lang="scss">
 .gray-box{
   width: 1221px;
   padding: 60px;
   display: table;
   margin-bottom: 20px;
   overflow: hidden;
   background: #fff;
   border-radius: 8px;
   border: 1px solid #dcdcdc;
   border-color: rgba(0,0,0,.14);
   box-shadow: 0 3px 8px -6px rgba(0,0,0,.1);
   .gallery-left{
     vertical-align: top;
     .gallery{
       float: left;
       width: 540px;
       .gallery-lefts{
         display: table-cell;
         vertical-align: middle;
         ul{
           list-style: none;
           li{
             width: 64px;
             height: 64px;
             margin-top: 10px;
             padding: 12px;
             border: 1px solid #f0f0f0;
             border-radius: 5px;
             cursor: pointer;
             &:hover{
               border: 2px solid grey;
             }
             img{
               display: block;
               max-width: 100%;
               height: auto;
               border: 0;

             }
           }
         }
       }
       .gallery-rights{
         display: table-cell;
         vertical-align: middle;
         ul{
           margin-left: 20px;
           width: 440px;
           height: 440px;
           position: relative;
           list-style: none;
           li{
             position: absolute;
             left: 0;
             right: 0;
             top: 0;
             bottom: 0;
             text-align: center;
             -moz-user-select: -moz-none;
             -webkit-user-select: none;
             user-select: none;
             img{
               display: block;
               max-width: 100%;
               height: auto;
             }
           }
         }
       }
     }
   }
   .gray-right{
     vertical-align: top;
     .gray{
       float: right;
       width: 450px;
       margin-left: 10px;
       vertical-align: middle;
       .gray-top{
         overflow: hidden;
         padding: 15px 8px 18px 10px;
         position: relative;
         div:nth-of-type(1){
           float: left;
           width: 360px;
           span{
             font-size: 24px;
             line-height: 1.25;
             color: #000;
             margin-bottom: 13px;
             font-weight: 400;
           }
           p{
             font-size: 14px;
             line-height: 1.5;
             color: #bdbdbd;
             font-weight: 400;
           }
         }
         div:nth-of-type(2){
           position: absolute;
           right: 8px;
           bottom: 8px;
           span{
             font-weight: 700;
             line-height: 20px;
             text-align: right;
             color: #d44d44;
             font-size: 24px;
           }
         }
       }
       .gray-body{
         padding: 29px 0 8px 10px;
         border-top: 1px solid #ebebeb;
         .Color{
           display: block;
           margin-bottom: 19px;
           height: 36px;
           span{
             float: left;
             padding-right: 20px;
             font-size: 14px;
             color: #8d8d8d;
             line-height: 36px;
           }
           ul{
             float: left;
             li{
               float: left;
               margin: 3px 0 0 10px;
               border: 2px solid gray;
               border-radius: 50%;
               box-shadow: inset 2px 2px 10px white;
               a{
                 display: block;
                 width: 26px;
                 height: 26px;
                 border: 2px solid #E5E5E5;
                 padding: 3px;
                 text-align: center;
                 color: #757575;
                 border-radius: 50%;
                 position: relative;
                 img{
                   display: block;
                   position: absolute;
                   top: 0px;
                   left: 0px;
                   right: 0px;
                   bottom: 0px;
                   width: 100%;
                   border-radius: 50%;
                 }
               }
             }
           }
         }
         .Size{
           clear: both;
           margin-bottom: 19px;
           height: 36px;
           strong{
             float: left;
             padding-right: 20px;
             font-size: 14px;
             color: #8d8d8d;
             line-height: 36px;
           }
           ul{
             float: left;
             li{
               float: left;
               margin: 3px 0 0 10px;
               line-height: 36px;
               a{
                 text-decoration: none;
                 display: block;
                 min-width: 16px;
                 height: 36px;
                 padding: 0 10px;
                 text-align: center;
                 color: #757575;
                 border: 1px solid #dbdbdb;
                 border-radius: 3px;
                 box-shadow: inset 0 0 0 1px #dbdbdb;
               }
             }
           }
         }
         .Num{
           clear:both;
           margin-bottom: 19px;
           height: 36px;
           h4{
             float: left;
             padding-right: 20px;
             font-size: 14px;
             color: #8d8d8d;
             line-height: 36px;
           }
         }
       }
       .gary-footer{
         position: relative;
         border-top: 1px solid #ebebeb;
         padding: 30px 0 0 10px;
         div{
           span:nth-of-type(1){
             float: left;
             display: inline-block;
             width: 143px;
             height: 48px;
             line-height: 48px;
             text-align: center;
             border-radius: 7px;
             border: 1px solid #5c81e3;
             background-color: #5c85e5;
             cursor: pointer;
             a{
               color: white;
               text-decoration: none;
             }
             &:hover{
               background-image: -webkit-linear-gradient(#779ae9,#5078df);
               background-image: linear-gradient(#779ae9,#5078df);
             }
           }
           span:nth-of-type(2){
             margin-left: 20px;
             display: inline-block;
             width: 143px;
             height: 48px;
             line-height: 48px;
             text-align: center;
             background: #fafafa;
             border: 1px solid #e0e0e0;
             border-radius: 7px;
             color: #8c8c8c;
             cursor: pointer;
             a{
               text-decoration: none;
             }
             &:hover{
               background: -webkit-linear-gradient(#fff,#fafafa);
               background: linear-gradient(#fff,#fafafa);
             }
           }
         }
       }
     }
   }
 }
</style>
