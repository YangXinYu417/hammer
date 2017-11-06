<template>
  <div>
    <div  :class="{bg:navbg}" >
      <div :class="{is:show}">
        <div id="bot">
          <div class="topbar">
            <div class="dialog-tit">
              <h4 class="js-dialog-title fn-clear">管理收货地址</h4>
            </div>
            <span class="dialog-close icon-font">x</span>
          </div>
          <div class="dialog-con js-dialog-container">
            <div class="animate-layer">
              <div class="dialog-inner">
                <div class="save-address-box">
                  <div class="address-form fn-clear">
                    <div class="module-form-row">
                      <div class="form-item-v3">
                        <input type="text" placeholder="收货人姓名"  class="js-verify" v-model="addressObj.name">
                      </div>
                    </div>
                    <div class="module-form-row">
                      <div class="form-item-v3">
                        <input type="text" placeholder="手机号" class="js-verify" v-model="addressObj.phone">
                      </div>
                    </div>
                    <div class="module-form-row fn-clear">
                      <div class="form-item-v3 fn-left area-code-w">
                        <input type="text" placeholder="区号（可选）" class="js-verify" v-model="addressObj.area">
                      </div>
                      <div class="form-item-v3 fn-right areb-code-w">
                        <input type="text" placeholder="固定电话（可选）" class="js-verify" v-model="addressObj.tel">
                      </div>
                    </div>
                    <div class="module-form-row fn-clear">
                      <div class="form-item-v3 select-item form-focus-item ">
                        <select name="province_code" id="select1" class="province selects-city" @click="province()">
                          <option>请选择省份</option>
                          <option :value="list.area_id" v-for="list in item">{{list.area_name}}</option>
                        </select>
                      </div>
                    </div>
                    <div class="module-form-row fn-clear">
                      <div class="form-item-v3 fn-left select-item">
                        <select name="province_code" id="select2" class="province select-city" @click="chengshi()">
                          <option>请选择城市</option>
                          <option :value="list.area_id" v-for="list in city" >{{list.area_name}}</option>
                        </select>
                      </div>
                      <div class="form-item-v3 fn-right select-item">
                        <select name="province_code" class="province select-city" v-model="addressObj.c">
                          <option>请选择区县</option>
                          <option :value="list.area_name" v-for="list in cityd" >{{ list.area_name }}</option>
                        </select>
                      </div>
                    </div>
                    <div class="module-form-row">
                      <div class="form-item-v3">
                        <input type="text" placeholder="详细地址，如街道名称，楼层，门牌号码等" class="js-verify" v-model="addressObj.detailed">
                      </div>
                    </div>
                    <div class="module-form-row fn-clear">
                      <input type="checkbox" class="che">设为默认
                    </div>
                    <div class="dialog-blue-btn" @click="guan()">
                      <a @click="SubmitHandle">保存</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="contents">
        <div class="nav">
          <div class="main-top">
            <div class="shopping-list">
              <h2>收货信息</h2>
            </div>
            <div class="box-inner">
              <div class="box-inner_header">
                <ul>
                  <li v-for="bl,key in loc">
                    <div class="li_s">
                      <div class="lis_s">
                        <span>{{bl.name}}（默认地址）</span>
                        <p>{{ bl.phone}}</p>
                        <p><span>{{bl.s}}</span><span>{{bl.c}}</span><span>{{bl.q}}</span></p>
                        <p><span>{{ bl.area }}</span><span>{{bl.tel}}</span></p>
                        <p>{{bl.address}}</p>
                      </div>
                    </div>
                    <div></div>
                  </li>
                  <li class="dizhi" @click="change()">
                    <p>使用新地址</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="main-top">
            <div class="shopping-list">
              <h2>发票信息</h2>
            </div>
            <div class="box-innert">
              <p class="invoice-detail"> 发票类型：电子发票 </p>
              <div class="invoice-detail">
                发票抬头：
                <div class="radio-box">
                  <label>
                    <input type="radio" name="invoice_type" class="fn-hide" value="0" data-id="0">
                    <span class="blue-radio blue-radio-on" data-radio-name="invoice_type">
                      <a></a>
                    </span>
                    个人
                  </label>
                  <label>
                    <input type="radio" name="invoice_type" class="fn-hide" value="1" data-id="1">
                    <span class="blue-radio" data-radio-name="invoice_type">
                      <a>

                      </a>
                    </span>
                    单位
                  </label>
                </div>
              </div>
              <p class="invoice-detail">发票内容：购买商品明细</p>
              <p class="invoice-label ">  电子发票是税务局认可的有效收付款凭证，可作为售后服务凭据。电子发票打印后可以用于企业报销。  </p>
            </div>
          </div>
          <div class="main-top">
            <div class="shopping-list">
              <h2>购物清单</h2>
            </div>
            <div class="box-inner">
              <div class="box-innertop">
                <span class="name">商品信息</span>
                <span class="subtotal">小计</span>
                <span class="num" style="text-align: center">数量</span>
                <span class="price">单价</span>
              </div>
              <div class="box-innercen" v-for="list,key in data" style="margin-left: 7px;">
                <div class="innercen-one">
                <span>
                </span>
                </div>
                <div class="innercen-two">
                  <img :src="list.ali_image" alt="">
                </div>
                <div class="innercen-three">
                  <div>
                    <h3>{{list.title}}</h3>
                    <ul>
                      <li>{{ list.spec_json.show_name }}</li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                </div>
                <div class="innercen-k">
                  <div class="innercen-four" style="text-align: center">
                    <span>￥{{list.price*list.count}}</span>
                  </div>
                  <div class="innercen-five">
                    <b>{{ list.count }}</b>
                  </div>
                  <div class="innercen-five">
                    <b>￥{{ list.price }}</b>
                  </div>
                </div>
              </div>
            </div>
            <div class="box-inner">
              <div class="order-discount-line">
                <p class="fn-clear">商品总计：
                  <span>
                   <strong>￥{{filterPrice}}</strong>
                 </span>
                </p>
                <p class="fn-clear">运费：
                  <span>
                   <strong>+￥999</strong>
                 </span>
                </p>
              </div>
            </div>
            <div class="cart-bottom-bg">
              <div class="fix-bottom-inner">
                <div class="cart-bar-operation">
                  <div class="bbb">
                  </div>
                </div>
                <div class="shipping">
                  <div class="shipping-box">
                    <div class="shipping-total" style="border: none">
                      <h4 class="highlight" style="margin-top: 18px">应付总额：<i class="binding">￥{{ filterPrice }}</i></h4>
                    </div>
                  </div>
                  <span class="jianguo-blue-main-bt" @click="dingdan(data)">
                  <router-link to="/Subsucceed"  style="text-decoration: none">提交订单</router-link>
                </span>
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
  import axios from 'axios'
  export default {
    data () {
      return {
        checked: true,
        item: [],
        loc: [],
        city: '',
        cityd: '',
        data: this.$store.state.shoplist,
        navbg: false,
        show: true,
        addressObj: {
          name: '',
          phone: '',
          area: '',
          tel: '',
          s: '',
          c: '',
          q: ''
        }
      }
    },
    created () {
      console.log(this.$store.state.datA)
      axios.get('http://www.easy-mock.com/mock/59f1df9dd00d13585e251066/hammer/addressData').then((res) => {
        //  console.log(res.data)
        this.item = res.data

        this.loc = JSON.parse(localStorage.username || '[]')
      })
    },
    computed: {
      ArraY () {
        return this.$store.state.datA
      },
      filterCounts () {
        return this.$store.getters.filterCounts
      },
      filterPrice () {
        return this.$store.getters.filterPrice
      }
    },
    methods: {
      province () {
        let pro = document.getElementById('select1')
        console.log(pro.value)
        for (let i = 0; i < this.item.length; i++) {
          if (this.item[i].area_id === Number(pro.value)) {
            this.city = this.item[i].city_list
            this.addressObj.s = this.item[i].area_name
            console.log(this.city)
          }
        }
      },
      chengshi () {
        let prop = document.getElementById('select2')
        console.log(prop.value)
        for (let i = 0; i < this.city.length; i++) {
          if (this.city[i].area_id === Number(prop.value)) {
            this.cityd = this.city[i].county_list
            this.addressObj.q = this.city[i].area_name
            console.log(this.addressObj.q)
          }
        }
      },
      change () {
        this.navbg = true
        this.show = false
      },
      guan () {
        this.navbg = false
        this.show = true
      },
      SubmitHandle () {
        let arr = JSON.parse(localStorage.username || '[]')
        arr.push(this.addressObj)
        if (typeof (Storage) !== 'undefined') {
          localStorage.setItem('username', JSON.stringify(arr))
        }
        this.loc.push(this.addressObj)
      },
      dingdan (index) {
        console.log(index)
        this.$store.commit('dingdan', index)
      }
    }
  }
</script>
<style lang="scss">
  .box-inner_header{
    overflow: hidden;
    border-radius: 0 0 8px 8px;
    font-size: 14px;
    color: #626262;
    ul{
      padding: 30px 13px 0;
      zoom: 1;
      list-style: none;
      li{
        background: #FFF;
        border: 1px solid #6A8FE5;
        position: relative;
        overflow: hidden;
        float: left;
        width: 276px;
        height: 158px;
        margin: 0 0 30px 16px;
        border-radius: 3px;
        line-height: 14px;
        text-align: left;
        word-wrap: break-word;
        word-break: normal;
        color: #626262;
        cursor: pointer;
        -moz-user-select: -moz-none;
        -webkit-user-select: none;
        -o-user-select: none;
        user-select: none;
        &:after {
          content: '√';
          display: block;
          position: absolute;
          right: 17px;
          top: 19px;
          font-family: SmartisanIconFont;
          font-size: 24px;
          color: #5079d9;
        }
        .li_s{
          padding: 19px 14px 0 19px;
          .lis_s{
            span{
              height: 16px;
              padding-right: 20px;
              line-height: 16px;
              font-size: 16px;
              color: #666;
            }
            p{
              display: block;
              padding-top: 14px;
              line-height: 14px;
              color: #999;
            }
          }
        }
      }
      .dizhi{
        position: relative;
        overflow: hidden;
        float: left;
        width: 276px;
        height: 158px;
        margin: 0 0 30px 16px;
        border: 1px solid #E5E5E5;
        border-radius: 3px;
        background: #FAFAFA;
        line-height: 14px;
        text-align: left;
        word-wrap: break-word;
        word-break: normal;
        color: #626262;
        cursor: pointer;
        -moz-user-select: -moz-none;
        -webkit-user-select: none;
        -o-user-select: none;
        user-select: none;
        &:before{
          content: '+';
          display: block;
          position: absolute;
          left: 50%;
          top: 54px;
          height: 24px;
          margin-left: -10px;
          line-height: 24px;
          text-align: center;
          font-size: 24px;
          font-family: SmartisanIconFont;
          color: #626262;
        }
        &:after{
          display: block;
          font-size: 0;
          content: " ";
          clear: both;
          height: 0;
        }
        &:hover{
          background: rgba(226, 226, 226, 0.82);
        }
        p{
          height: 14px;
          padding-top: 85px;
          line-height: 14px;
          text-align: center;
          color: #999;
        }
      }
    }
  }
  .box-innert{
    padding: 22px 29px 29px 28px;
    .invoice-detail{
      position: relative;
      height: 36px;
      line-height: 36px;
      color: #666;
      .radio-box{
        position: absolute;
        left: 65px;
        top: 0;
        padding: 0;
        margin: 0;
        label{
          margin-right: 5px;
          cursor: default;
        }
      }
    }
    .invoice-label{
      position: relative;
      padding-top: 25px;
      margin-top: 11px;
      border-top: 1px solid #E5E5E5;
      line-height: 12px;
      text-indent: 10px;
      font-size: 12px;
      color: #999;
      &:before {
        content: '*';
        position: absolute;
        left: 2px;
        top: 27px;
        text-indent: 0;
      }
    }
  }
  .bg{
    position: fixed;
    top: 0;
    left: 0;
    color: white;
    z-index: 1000;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.4);
    text-align: center;
  }
  .is{
    display: none;
  }
  .fn-clear :after{
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;
    visibility: hidden;
  }
  .fn-left{
    float: left;
    display: inline;
  }
  .fn-right{
    float: right;
    display: inline;
  }
  .area-code-w{
    width: 118px;
  }
  .areb-code-w{
    width: 240px;
  }
  .select-item {
    width: auto;
    height: auto;
    margin: 0;
    background: 0 0;
    border: none;
    box-shadow: none;
    opacity: 1;
  }
  .select-city{
    width: 180px;
  }
  .selects-city{
    width: 368px;
  }
  .form-focus-item{
    z-index: 1;
    opacity: 1;
    border: 1px solid #6B93F2;
  }
  #bot{
    width: 450px;
    background: #FFF;
    height: 592px!important;
    position: relative;
    min-width: 200px;
    border-radius: 10px;
    box-shadow: 0 0 0 1px rgba(0,0,0,.1) inset, 1px 0 3px rgba(0,0,0,.1);
    text-align: left;
    display: inline-block;
    vertical-align: middle;
    color: #626262;
    .topbar{
      position: relative;
      z-index: 10;
      overflow: hidden;
      width: 100%;
      height: 60px;
      background: linear-gradient(#FFF,#F5F5F5);
      border-bottom: 1px solid #DCDCDC;
      border-radius: 10px 10px 0 0;
      box-shadow: 2px 0 5px rgba(0,0,0,.1);
      .dialog-tit{
        height: 60px;
        padding: 0 15px;
        line-height: 60px;
        zoom: 1;
        text-align: left;
        .js-dialog-title{
          text-align: center;
          font-size: 18px;
          font-weight: 400;
          color: #666;
          line-height: 60px;
        }
      }
      .dialog-close {
        overflow: hidden;
        display: block;
        position: absolute;
        right: 10px;
        top: 15px;
        z-index: 20;
        width: 30px;
        height: 30px;
        line-height: 30px;
        font-size: 30px;
        color: #000;
        opacity: .2;
        cursor: pointer;
        -webkit-transition: all .3s linear;
        -moz-transition: all .3s linear;
        -o-transition: all .3s linear;
        transition: all .3s linear;
      }
      .icon-font{
        font-family: SmartisanIconFont;
      }
    }
    .dialog-con{
      min-width: 220px;
      min-height: 150px;
      text-align: left;
      .animate-layer{
        width: 450px;
        position: relative;
        .dialog-inner{
          padding: 0;
          min-width: 220px;
          .save-address-box{
            width: 450px;
            padding-top: 29px;
            .address-form{
              width: 370px;
              margin: 0 auto;
              zoom: 1;
              &:after{
                display: block;
                font-size: 0;
                content: " ";
                clear: both;
                height: 0;
                visibility: hidden;
              }
              .module-form-row{
                padding-bottom: 15px;
                position: relative;
                margin: 0 auto;
                .form-item-v3{
                  position: relative;
                  height: 46px;
                  background: #FFF;
                  border: 1px solid #CCC;
                  border-radius: 6px;
                  box-shadow: 0 3px 5px -4px rgba(0,0,0,.4) inset, -1px 0 3px -2px rgba(0,0,0,.1) inset;
                  line-height: 46px;
                  font-size: 18px;
                  opacity: .618;
                  -moz-transition: opacity .3s ease;
                  -webkit-transition: opacity .3s ease;
                  transition: opacity .3s ease;
                  &:after{
                    position: absolute;
                    right: 13px;
                    top: 50%;
                    z-index: 11;
                    height: 26px;
                    padding: 0 10px;
                    margin-top: -13px;
                    background: #D16D62;
                    border-radius: 4px;
                    line-height: 26px;
                    font-size: 12px;
                    color: #FFF;
                  }
                  .js-verify{
                    width: 330px;
                    padding: 0 15px;
                    background-color: transparent;
                    border: none;
                    font-size: 16px;
                    box-shadow: none;
                    font: 14px/1.5 'Helvetica Neue',Arial,'Hiragino Sans GB',STHeiti,'STHeiti Light [STXihei]','Microsoft Yahei',sans-serif;
                    color: #626262;
                    outline: none;
                  }
                  .province{
                    height: 48px;
                    padding: 0 15px;
                    margin: 0;
                    background: -webkit-linear-gradient(top,#FAFAFA,#F5F5F5);
                    background: linear-gradient(#FAFAFA,#F5F5F5);
                    border: 1px solid #CCC;
                    border-radius: 6px;
                    box-shadow: 2px 0 0 rgba(255,255,255,.4) inset, 1px 0 0 rgba(255,255,255,.3);
                    line-height: 48px;
                    text-indent: 0;
                    outline: 0;
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    cursor: pointer;
                    font-size: 16px;
                    color: #333;
                    letter-spacing: normal;
                    word-spacing: normal;
                    text-transform: none;
                    text-rendering: auto;
                    text-shadow: none;
                    display: inline-block;
                    text-align: start;
                    -webkit-writing-mode: horizontal-tb;
                    &:after{
                      position: absolute;
                      right: 13px;
                      top: 50%;
                      z-index: 11;
                      height: 26px;
                      padding: 0 10px;
                      margin-top: -13px;
                      background: #D16D62;
                      border-radius: 4px;
                      line-height: 26px;
                      font-size: 12px;
                      color: #FFF;
                    }
                  }
                  .che{
                    top: 0;
                    float: left;
                    margin-right: 5px;
                  }
                }
              }
              .dialog-blue-btn{
                transition: none;
                padding: 1px;
                background: #6383C6;
                background: linear-gradient(#6383C6,#4262AF);
                border-radius: 6px;
                text-align: center;
                color: #FFF;
                opacity: .4;
                display: block;
                height: 46px;
                a{
                  transition: none;
                  padding: 2px 0;
                  border-radius: 5px;
                  color: #FFF;
                  height: 42px;
                  line-height: 42px;
                  font-size: 18px;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
