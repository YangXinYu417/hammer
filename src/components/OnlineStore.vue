<template>
  <div>
    <div class="main">
      <div class="contents">
        <div class="nav">
          <div class="nav_content">
            <ul>
              <li><router-link to="/OnlineStore/home">首页</router-link></li>
              <li>●</li>
              <li><router-link to="/OnlineStore/mobile">手机</router-link></li>
              <li>●</li>
              <li><router-link to="/OnlineStore/footprint">"足迹系列"手感膜</router-link></li>
              <li>●</li>
              <li><router-link to="/OnlineStore/bb">官方配件</router-link></li>
              <li>●</li>
              <li><router-link to="/OnlineStore/thirdparty">第三方配件</router-link></li>
              <li>●</li>
              <li><router-link to="/OnlineStore/all">全部商品</router-link></li>
              <li>●</li>
              <li><router-link to="/OnlineStore/rim">服务</router-link></li>
            </ul>
          </div>
          <!--<div class="nav_contents">
            <ul>
              <li><router-link to="/OnlineStore/home">首页</router-link></li>
              <li>●</li>
              <li><router-link to="/OnlineStore/mobile">手机</router-link></li>
              <li>●</li>
              <li><router-link to="/OnlineStore/footprint">"足迹系列"手感膜</router-link></li>
              <li>●</li>
              <li><router-link to="/OnlineStore/bb">官方配件</router-link></li>
              <li>●</li>
              <li><router-link to="/OnlineStore/thirdparty">第三方配件</router-link></li>
              <li>●</li>
              <li><router-link to="/OnlineStore/all">全部商品</router-link></li>
              <li>●</li>
              <li><router-link to="/OnlineStore/rim">服务</router-link></li>
              <v-ShoppingCart class="ShoppingCart2"></v-ShoppingCart>
            </ul>
          </div>-->
          <router-view>

          </router-view>

        </div>

      </div>
    </div>
  </div>
</template>
<script>
  import ShoppingCart from '@/templates/ShoppingCart'
  export default {
    components: {
      'v-ShoppingCart': ShoppingCart
    }
  }
</script>
<style lang="scss">
  .main{
    min-height: 100%;
    background: #ededed;
    overflow: hidden;
    width: 100%;
    .contents{
      .nav{
        clear: both;
        width: 1220px;
        min-height: 600px;
        padding: 0 0 25px;
        margin: 0 auto;
        .nav_content{
          max-height: 100px;
          padding: 30px 0 30px 0;
          border-bottom: 1px solid rgba(181, 189, 255, 0.45);
          ul{
            display: flex;
            li{
              a:nth-of-type(1){
                padding-left: 10px;
              }
              a{
                display: block;
                padding: 0 20px;
                color: #666;
                text-decoration: none;
                &:hover {
                  color: #5079d9;
                }
                &.router-link-active{
                  color: black;
                  font-weight: 600;
                }
              }
            }
          }
        }
        .nav_contents{
          width: 100%;
          position: fixed;
          top: 60px;
          left: 0;
          right: 0;
          z-index: 777;
          max-height: 100px;
          padding: 30px 0 30px 63px;
          background: #f7f7f7;
          border-bottom: 1px solid #dadada;
          box-shadow: 0 2px 4px rgba(0,0,0,.04);
          background-image: -webkit-linear-gradient(#fff,#f1f1f1);
          background-image: linear-gradient(#fff,#f1f1f1);
          ul{
            display: flex;
            max-width: 100%;
            position: relative;
            li{
              a:nth-of-type(1){
                padding-left: 10px;
              }
              a{
                display: block;
                padding: 0 20px;
                color: #666;
                text-decoration: none;
                &:hover {
                  color: #5079d9;
                }
                &.router-link-active{
                  color: black;
                  font-weight: 600;
                }
              }
            }
            .ShoppingCart2{
              position: absolute;
              top: -30px;
              right: 85px;
            }
          }
        }
      }
    }
  }
</style>
