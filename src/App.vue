<template>
  <div id="app">
    <div class="wrapper">
      <header>
        <div class="header_top">
          <div class="nav-global">
            <div class="container">
              <h1>
                <a href="http://www.smartisan.com/#/" title="锤子科技官网">Smartisan</a>
              </h1>
              <v-ShoppingCart></v-ShoppingCart>
              <ul class="nav-list">
                <li><router-link to="/OnlineStore">在线商城</router-link></li>
                <li><router-link to="/mastPro">坚果 Pro</router-link></li>
                <li><router-link to="/SmartisanOS">Smartisan OS</router-link></li>
                <li><router-link to="/SmilingCloud">欢喜云</router-link></li>
                <li><router-link to="/AppDownload">应用下载</router-link></li>
                <li><router-link to="/forum">官方论坛</router-link></li>
              </ul>

            </div>
          </div>
        </div>
      </header>
      <div>
        <router-view></router-view>
      </div>
    </div>
    <div class="footer">
      <div class="containers">
        <div class="siteinfo">
          <ul class="ul1">
            <li>
              <h3>订单服务</h3>
              <ul>
                <li>购买指南</li>
                <li>支付方式</li>
                <li>送货政策</li>
              </ul>
            </li>
            <li>
              <h3>服务支持</h3>
              <ul>
                <li>售后服务</li>
                <li>维修门店</li>
                <li>零售门店</li>
              </ul>
            </li>
            <li>
              <h3>自助服务</h3>
              <ul>
                <li>热点咨询</li>
                <li>预约购买</li>
                <li>订单物流</li>
              </ul>
            </li>
            <li>
              <h3>媒体中心</h3>
              <ul>
                <li>新闻动态</li>
                <li>官方视频</li>
                <li>图片资源</li>
              </ul>
            </li>
            <li>
              <h3>关于公司</h3>
              <ul>
                <li>公司简介</li>
                <li>加入我们</li>
                <li>联系我们</li>
              </ul>
            </li>
            <li>
              <h3>关注我们</h3>
              <ul>
                <li>新浪微博</li>
                <li>官方微信</li>
                <li>官方贴吧</li>
              </ul>
            </li>
          </ul>
          <div>
            <h1>400-619-0909</h1>
            <p>周一至周日9:00-18:00(仅收市话费)</p>
            <button type="button" class="btn btn-default"><span class="badge">?</span> 在线帮助</button>
          </div>
        </div>
        <div class="copyright">
          <span>Copyright © 2017, Smartisan Digital Co., Ltd. All Rights Reserved.北京锤子数码科技有限公司</span>
          <ul>
            <li> | <a href="#">法律声明</a>  |  </li>
            <li> <a href="#"> 隐私条款 </a>  |  </li>
            <li> <a href="#"> 开发者中心 </a>   </li>
          </ul>
          <p>京ICP备14041720号-1&nbsp;&nbsp;&nbsp;京ICP证140622号&nbsp;&nbsp;&nbsp; 京公网安备11010502025474</p>
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
  .wrapper{
    min-width: 1220px;
    header{
      .header_top{
        display: block;
        .nav-global{
          background: #000;
          height: 100px;
          position: relative;
          z-index: 30;
          .container{
            position: relative;
            width: 1220px;
            margin-left: auto;
            margin-right: auto;
            h1{
              float: left;
              margin-left: -5px;
              padding: 25px 0 0 0;
              a{
                background: url(../src/assets/img/logo.png) no-repeat;
                background-size: cover;
                display: block;
                height: 50px;
                width: 50px;
                text-indent: -9999px;
                -moz-transition: none;
                -webkit-transition: none;
                -o-transition: none;
                transition: none;
                text-decoration: none;
              }
            }
            .nav-list{
              float: right;
              line-height: 28px;
              margin: 36px 181px 0 0;
              li{
                float: left;
                line-height: 28px;
                a{
                  color: #c8c8c8;
                  display: block;
                  font-size: 14px;
                  padding: 0 25px;
                  text-decoration: none;
                  &.router-link-active{
                    color: white;
                  }
                }
                a:hover{
                  color: white;
                }
              }

            }

          }
        }
      }
    }
  }
  .footer{
    background: #fafafa;
    border-top: 1px solid #e6e6e6;
    .containers{
      width: 1220px;
      margin-left: auto;
      margin-right: auto;
      .siteinfo{
        height: 300px;
        padding: 100px 0 32px;
        border-bottom: 1px solid #e6e6e6;
        position: relative;
        ul{
          li{
            width: 149px;
            line-height: 1;
            float: left;
            h3{
              color: #646464;
              font-size: 12px;
              padding: 0 0 14px;
              font-weight: 400;
              cursor:pointer;
            }
            ul{
              li{
                color: #c3c3c3;
                font-size: 12px;
                padding: 6px 0;
                cursor:pointer;
                &:hover{
                  color: #2ea5ff;
                }
              }
            }
          }
        }
      }
      .copyright{
        color: #434d55;
        font-size: 12px;
        padding: 40px 0;
        span{
          float: left;
        }
        ul{
          float: left;
          li{
            float: left;
          }
        }
        p{
          clear: both;
          color: #bdbdbd;
          font-size: 12px;
          height: 12px;
          line-height: 1;
        }
      }
    }
  }
</style>
