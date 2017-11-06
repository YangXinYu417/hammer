<template>
  <div>
    <ul class="nav-aside">
      <li class="nav-user">
        <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <router-link tag="span" to="/indent" class="glyphicon glyphicon-user" ></router-link>
        </a>
      </li>
      <li class="nav-cart">
        <a href="#" style="text-decoration: none"> </a>
        <span><i class="num" :style="filterCounts? {background:'#e96e65'} : {background:'gray'}">{{ filterCounts }}</i></span>
        <div class="nav-cart-wrapper">
          <div class="nav-cart-list">
            <div class="ng-scope">
              <!--<div class="empty ng-scope">-->
              <!--<h3>购物车为空</h3>-->
              <!--<p>您还没有选购任何商品，现在前往商城选购吧！</p>-->
              <!--</div>-->
              <div class="full ng-scope">
                <div class="nav-cart-items">
                  <ul>
                    <li class="clearfix" v-for="list,key in data">
                      <div class="cart-item">
                        <div class="cart-item-inner">
                          <div class="item-thumb">
                            <img :src="list.ali_image" alt="">
                          </div>
                          <div class="item-desc">
                            <div class="cart-cell">
                              <h4><span>{{ list.title}}</span></h4>
                              <p class="attrs"><span>{{ list.spec_json.show_name }}</span></p>
                              <h6>
                                <span class="price-icon">￥</span>
                                <span class="price-num">{{ list.price }}</span>
                                <span class="item-num"> x {{ list.count }}</span>
                              </h6>
                            </div>
                          </div>
                          <div class="del-btn" @click="del(list)">删除</div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="nav-cart-total">
                  <p>共<strong class="ng-binding">{{ filterCounts }}</strong>件商品</p>
                  <h5>合计：
                    <span class="price-icon">¥</span>
                    <span class="price-num">{{ filterPrice }}</span>
                  </h5>
                  <h6>
                    <router-link :to="{ name: 'shoopcat', query: {id: data.sku_id} }" tag="span" class="nav-cart-btn" @click="gotomycat(data)">
                      去购物车
                    </router-link>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    computed: {
      data () {
        return this.$store.state.shoplist // 访问$store中的list数据
      },
      filterPrice () {
        return this.$store.getters.filterPrice
      },
      filterCounts () {
        return this.$store.getters.filterCounts
      }
    },
    methods: {
      gotomycat (sku) {
        this.$store.commit('gotomycat', sku)
        console.log(sku)
      },
      del (pro) {
        let index = this.data.indexOf(pro)
        this.data.splice(index, 1)
      }
    }
  }
</script>
<style lang="scss">
  .nav-aside{
    float: right;
    box-sizing: border-box;
    position: relative;
    margin-top: 38px;
    .nav-user{
      position: relative;
      float: left;
      margin-left: 40px;
      width: 36px;
      a{
        position: relative;
        width: 36px;
        height: 20px;
        display: block;
        span{
          font-size: 17px;
          color: #999999;
        }
      }
    }
    .nav-cart{
      position: relative;
      float: left;
      margin-left: 21px;
      width: 61px;
      a{
        display: block;
        position: absolute;
        height: 20px;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 1;
      }
      span{
        display: block;
        position: relative;
        margin-left: 31px;
        margin-top: -1px;
        min-width: 30px;
        text-indent: 0;
        line-height: 20px;
        i{
          background: #969696;
          background-image: -webkit-linear-gradient(#A4A4A4,#909090);
          background-image: linear-gradient(#A4A4A4,#909090);
          box-shadow: inset 0 0 1px #838383, 0 1px 2px #838383;
          font-style: normal;
          display: inline-block;
          width: 20px;
          height: 20px;
          line-height: 20px;
          border-radius: 10px;
          color: #fff;
          font-size: 12px;
          text-align: center;
        }
      }
      a:before {
        content: ' ';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 30px;
        background: url(../../src/assets/img/xuebitu.png) -150px -22px;
        -webkit-background-size: 240px 107px;
        background-size: 240px 107px;
      }
      .nav-cart-wrapper{
        display: none;
        top: 18px;
        visibility: visible;
        opacity: 1;
        -webkit-transition: opacity .3s ease-out;
        transition: opacity .3s ease-out;
        position: absolute;
        right: 0;
        padding-top: 18px;
        z-index: 30;
        width: 360px;
        .nav-cart-list{
          position: relative;
          z-index: 10;
          background: #fff;
          border: 1px solid #d6d6d6;
          border: 0 solid rgba(255,255,255,.01);
          border-radius: 8px;
          box-shadow: 0 0 0 1px rgba(0,0,0,.06), 0 20px 40px rgba(0,0,0,.15);
          overflow: hidden;
          .ng-scope{
            .empty{
              overflow: hidden;
              height: 134px;
              padding-top: 180px;
              background-size: auto 62px;
              text-align: center;
              h3{
                font-size: 18px;
                color: #333;
                margin-bottom: 7px;
              }
              p{
                font-size: 12px;
                color: #bcbcbc;
              }
            }
            .full{
              border-radius: 8px;
              overflow: hidden;
              .nav-cart-items{
                overflow-x: hidden;
                overflow-y: auto;
                ul{
                  list-style: none;
                  -webkit-margin-before: 0px;
                  -webkit-margin-after: 0px;
                  .clearfix{
                    &:hover .del-btn{
                      display: block;
                    }
                    &:after{
                      visibility: hidden;
                      display: block;
                      font-size: 0;
                      content: " ";
                      clear: both;
                      height: 0;
                    }
                    .cart-item{
                      height: 120px;
                      width: 100%;
                      overflow: hidden;
                      border-top: 1px solid #f0f0f0;
                      .cart-item-inner{
                        height: 80px;
                        padding: 20px;
                        position: relative;
                        .item-thumb{
                          position: relative;
                          float: left;
                          width: 80px;
                          height: 80px;
                          border-radius: 3px;
                          &:before{
                            content: "";
                            position: absolute;
                            left: 0;
                            right: 0;
                            top: 0;
                            bottom: 0;
                            z-index: 2;
                            border: 1px solid #f0f0f0;
                            border: 0 solid transparent;
                            box-shadow: inset 0 0 0 1px rgba(0,0,0,.06);
                            border-radius: 3px;
                          }
                          img{
                            display: block;
                            width: 80px;
                            height: 80px;
                            border-radius: 3px;
                            overflow: hidden;
                          }
                        }
                        .item-desc{
                          margin-left: 98px;
                          display: table;
                          width: 205px;
                          height: 80px;
                          .cart-cell{
                            display: table-cell;
                            vertical-align: middle;
                            text-align: -webkit-match-parent;
                            h4{
                              color: #000;
                              width: 185px;
                              overflow: hidden;
                              word-break: keep-all;
                              white-space: nowrap;
                              text-overflow: ellipsis;
                              font-size: 14px;
                              line-height: 16px;
                              margin-bottom: 10px;
                              font-weight: 400;
                              span{
                                color: #000;
                                cursor: pointer;
                                transition: all .15s ease-out;
                                text-decoration: none;
                                background-color: transparent;
                              }
                            }
                            .attrs{
                              font-size: 0;
                              span{
                                margin-right: 0;
                                position: relative;
                                display: inline-block;
                                margin-right: 20px;
                                font-size: 14px;
                                line-height: 14px;
                                color: #999;
                                text-align: -webkit-match-parent;
                                &:before{
                                  position: absolute;
                                  content: '';
                                  border-left: 1px solid #e5e5e5;
                                  top: 1px;
                                  left: -11px;
                                  height: 12px;
                                }
                              }
                            }
                            h6{
                              color: #cacaca;
                              font-size: 12px;
                              line-height: 14px;
                              margin-top: 15px;
                              font-weight: 400;
                              .price-icon{
                                color: #d44d44;
                                font-weight: 700;
                                display: inline-block;
                                font-size: 12px;
                                line-height: 14px;
                              }
                              .price-num{
                                color: #d44d44;
                                font-weight: 700;
                                margin-left: 5px;
                                display: inline-block;
                                font-size: 14px;
                                line-height: 14px;
                              }
                              .item-num{
                                margin-left: 10px;
                                display: inline-block;
                                color: #cacaca;
                                font-size: 12px;
                                line-height: 14px;
                                margin-top: 15px;
                                font-weight: 400;
                              }
                            }
                          }
                        }
                        .del-btn{
                          cursor: pointer;
                          display: block;
                          overflow: hidden;
                          width: 20px;
                          height: 20px;
                          position: absolute;
                          right: 20px;
                          top: 80%;
                          margin-top: -19px;
                          background: url(../../src/assets/img/xuebitu.png) -50px -60px no-repeat;
                          -webkit-background-size: 240px 107px;
                          background-size: 240px 107px;
                          text-indent: -9999em;
                        }
                      }
                    }
                  }
                }
              }
              .nav-cart-total{
                position: relative;
                padding: 20px;
                height: 90px;
                background: #fafafa;
                border-top: 1px solid #f0f0f0;
                border-radius: 0 0 8px 8px;
                box-shadow: inset 0 -1px 0 rgba(255,255,255,.5), 0 -3px 8px rgba(0,0,0,.04);
                background: -webkit-linear-gradient(#fafafa,#f5f5f5);
                background: linear-gradient(#fafafa,#f5f5f5);
                cursor: pointer;
                p{
                  margin-bottom: 4px;
                  line-height: 16px;
                  font-size: 12px;
                  color: #c1c1c1;
                  strong{
                    font-weight: 700;
                    line-height: 16px;
                    font-size: 12px;
                    color: #c1c1c1;
                  }
                }
                h5{
                  line-height: 20px;
                  font-size: 14px;
                  color: #6f6f6f;
                  font-weight: 400;
                  .price-icon{
                    font-size: 12px;
                    margin-right: 5px;
                    color: #d44d44;
                    display: inline-block;
                    font-weight: 700;
                    line-height: 20px;
                  }
                  .price-num{
                    font-size: 18px;
                    font-weight: 700;
                    color: #d44d44;
                    display: inline-block;
                    line-height: 20px;
                  }
                }
                h6{
                  position: absolute;
                  right: 20px;
                  top: 20px;
                  width: 108px;
                  font-size: 100%;
                  font-weight: 400;
                  .nav-cart-btn{
                    display: block;
                    height: 38px;
                    background: #688fe8;
                    background: -webkit-linear-gradient(#688fe8,#5079e1);
                    background: linear-gradient(#688fe8,#5079e1);
                    border: 1px solid #5c81e3;
                    border-radius: 6px;
                    box-shadow: inset 0 1px 0 rgba(255,255,255,.2), 0 1px 3px rgba(0,0,0,.2);
                    line-height: 38px;
                    text-align: center;
                    color: #FFF;
                    text-shadow: 0 -1px 0 rgba(0,0,0,.15);
                    font-size: 100%;
                    font-weight: 400;
                  }
                }
              }
            }
          }
        }
      }
      .nav-cart-wrapper:before{
        position: absolute;
        content: ' ';
        background: url(../../src/assets/img/xuebitu.png) no-repeat -49px -43px;
        -webkit-background-size: 240px 107px;
        background-size: 240px 107px;
        width: 20px;
        height: 8px;
        right: 34px;
        top: 10px;
        z-index: 11;
      }
    }
    .nav-cart:hover .nav-cart-wrapper{
      display: block;
    }
  }
</style>
