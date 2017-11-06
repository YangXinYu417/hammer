<template>
 <div>
   <div class="main">
     <div class="contents">
      <div class="nav">
        <div class="main-top">
          <div class="shopping-list">
            <h2>购物清单</h2>
          </div>
          <div class="box-inner">
            <div class="box-innertop">
              <span class="name">商品信息</span>
              <span class="operation">操作</span>
              <span class="subtotal">小计</span>
              <span class="num">数量</span>
              <span class="price">单价</span>
            </div>
            <div class="box-innercen" v-for="list,key in data">
              <div class="innercen-one">
                <span>
                  <input type="checkbox" class="checkbox" :checked="list.checked" @click="change(key)">
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
              <div class="Numcen2" @click="del(list)">
                <a> x </a>
              </div>
              <div class="innercen-k">
                <div class="innercen-four">
                  <span>￥{{list.price*list.count}}</span>
                </div>
                <div class="Numcen">
                  <div>
                    <button @click="sub(key)"> - </button>
                    <span> {{ list.count }} </span>
                    <button @click="add(key)"> + </button>
                  </div>
                </div>
                <div class="innercen-five">
                  <b>￥{{ list.price }}</b>
                </div>
              </div>
            </div>
          </div>
          <div class="cart-bottom-bg">
            <div class="fix-bottom-inner">
              <div class="cart-bar-operation">
                <div class="bbb">
                  <div class="choose-all">
                    <span class="blue-checkbox-new">
                      <input type="checkbox" :checked="checked" @click="checkAll">
                    </span>全选
                  </div>
                  <div class="delete-choose-goods">
                    删除选中的商品
                  </div>
                </div>
              </div>
              <div class="shipping">
                <div class="shipping-box">
                  <div class="shipping-total">
                    <h4 class="highlight">已选择<i class="binding">{{selected}}</i>件商品</h4>
                    <h5>共计<i>{{filterCounts}}</i>件商品</h5>
                  </div>
                  <div class="shipping-total">
                    <h4 class="highlight">应付总额：<i class="binding">{{ filterPrice }}</i></h4>
                    <h5>应付总额不含运费</h5>
                  </div>
                </div>
                <span class="jianguo-blue-main-bt" >
                  <router-link to="/payment">现在结算</router-link>
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
export default {
  data () {
    return {
      checked: true,
      data: this.$store.state.shoplist
    }
  },
  computed: {
    filterCounts () {
      return this.$store.getters.filterCounts
    },
    filterPrice () {
      let mmmp = 0
      this.data.map((res) => {
        if (res.checked) {
          mmmp += this.$store.getters.filterPrice
        }
      })
      return mmmp
    },
    selected () {
      let mmp = 0
      this.data.map((res) => {
        if (res.checked) {
          mmp += res.count
        }
      })
      return mmp
    }
  },
  methods: {
    change (k) {
      if (this.data[k].checked) {
        this.data[k].checked = false
        this.checked = false
      } else {
        this.data[k].checked = true
        let index = 0
        for (let i in this.data) {
          if (this.data[i].checked) {
            index++
          }
        }
        if (index === this.data.length) {
          this.checked = true
        }
      }
    },
    checkAll () {
      if (this.checked) {
        this.checked = false
        for (let i in this.data) {
          this.data[i].checked = false
        }
      } else {
        this.checked = true
        for (let i in this.data) {
          this.data[i].checked = true
        }
      }
    },
    del (pro) {
      let index = this.data.indexOf(pro)
      this.data.splice(index, 1)
    },
    add (index) {
      if (this.data[index].count < this.data[index].limit_num) {
        this.data[index].count++
      } else {
        this.data[index].count = this.data[index].count
      }
      console.log(this.data)
    },
    sub (index) {
      this.data[index].count--
      if (this.data[index].count <= 0) {
        this.data[index].count = 1
      }
      console.log(this.data)
    }
  }
}
</script>
<style lang="scss">
  .main-top{
    margin-top: 40px;
    .shopping-list{
      padding-left: 30px;
      position: relative;
      z-index: 10;
      height: 60px;
      border-bottom: 1px solid #d4d4d4;
      border-radius: 8px 8px 0 0;
      box-shadow: rgba(0,0,0,.06) 0 1px 7px;
      background: linear-gradient(#FFF,#F5F5F5);
      line-height: 60px;
      font-size: 18px;
      color: #333;
      h2{
        line-height: 60px;
      }
    }
    .box-inner{
      .box-innertop{
        position: relative;
        z-index: 1;
        line-height: 38px;
        height: 38px;
        padding: 0 0 0 30px;
        font-size: 12px;
        background: #eee;
        border-bottom: 1px solid #dbdbdb;
        border-bottom-color: rgba(0,0,0,.08);
        span{
          line-height: 38px;
          font-size: 12px;
          color: #838383;
        }
        span:nth-of-type(1){
          float: left;
          text-align: left;
        }
        span:nth-of-type(2){
          float: right;
          width: 137px;
          text-align: center;
        }
        span:nth-of-type(3){
          float: right;
          width: 137px;
          text-align: right;
        }
        span:nth-of-type(4){
          float: right;
          width: 137px;
          text-align: center;
        }
        span:nth-of-type(5){
          float: right;
          width: 137px;
          text-align: center;
        }
      }
      .box-innercen{
        position: relative;
        height: 140px;
        margin-left: 74px;
        .innercen-one{
          float: left;
          position: absolute;
          left: -74px;
          top: 0;
          width: 74px;
          height: 20px;
          padding: 60px 0 0 31px;
          font-size: 12px;
          color: #999;
          span{
            .checkbox{
              border: none;
              outline: none;
              background: url("../../src/assets/img/checkbox-new_631a56a4f6.png")no-repeat 0 0;
              display: inline-block;
              position: relative;
              width: 20px;
              height: 20px;
              cursor: pointer;
              -moz-user-select: none;
              -webkit-user-select: none;
              -ms-user-select: none;
              vertical-align: middle;
            }
          }
        }
        .innercen-two{
          float: left;
          position: relative;
          margin-top: 30px;
          overflow: hidden;
          width: 80px;
          height: 80px;
          img{
            width: inherit;
            height:inherit;
          }
        }
        .innercen-three{
          float: left;
          width: 380px;
          margin-left: 20px;
          color: #323232;
          display: table;
          overflow: hidden;
          word-break: keep-all;
          white-space: nowrap;
          text-overflow: ellipsis;
          div{
            display: table-cell;
            vertical-align: middle;
            height: 140px;
            h3{
              color: #333;
              font-size: 16px;
            }
            ul{
              color: #999;
              font-size: 12px;
              padding-top: 4px;
              line-height: 17px;
              list-style: none;
              li:first-child {
                padding-left: 0;}
              li{
                float: left;
                padding: 0 5px;
                position: relative;
                color: #999;
                font-size: 12px;
                padding-top: 4px;
                line-height: 17px;
              }
            }
          }
        }
        .innercen-k{
          .innercen-four{
            font-weight: 700;
            overflow: hidden;
            float: right;
            width: 137px;
            text-align: right;
            color: #666;
            line-height: 140px;
          }
          .Numcen{
            padding-top: 50px;
            line-height: 40px;
            overflow: hidden;
            float: right;
            width: 137px;
            text-align: center;
            color: #666;
          }
          .innercen-five{
             overflow: hidden;
             float: right;
             width: 137px;
             text-align: center;
             color: #666;
             line-height: 140px;
           }
        }

        .Numcen2{
          padding: 58px 0 0;
          font-size: 12px;
          line-height: 24px;
          overflow: hidden;
          float: right;
          width: 137px;
          text-align: center;
          color: #666;
          line-height: 140px;
          a{
            display: block;
            width: 26px;
            height: 26px;
            margin: 0 auto;
            color: #C2C2C2;
            font-size: 12px;
            line-height: 26px;
            text-align: center;
            -webkit-background-size: 100% auto;
            background-size: 100% auto;
            -moz-transition: none;
            -webkit-transition: none;
            -o-transition: none;
            transition: none;
            border-radius: 50%;
            box-shadow: 0 0 2px 2px #d0d0d0;
            cursor: pointer;
          }
        }
      }
    }
    .cart-bottom-bg{
      border-radius: 0;
      bottom: -1px;
      min-width: 768px;
      max-width: 1218px;
      margin: 0 auto;
      height: 90px;
      z-index: 1;
      background-position: center;
      background: linear-gradient(#fdfdfd,#f9f9f9);
      border-top: 1px solid #e9e9e9;
      box-shadow: 0 -3px 8px rgba(0,0,0,.04);
      .fix-bottom-inner{
        .cart-bar-operation{
          float: left;
          padding: 35px 26px;
          font-size: 12px;
          .bbb{
            font-size: 12px;
            .choose-all{
              float: left;
              height: 20px;
              line-height: 20px;
              cursor: pointer;
              position: relative;
              .blue-checkbox-new{
                float: left;
                margin-right: 9px;
                background: url(../../src/assets/img/checkbox-new_631a56a4f6.png) no-repeat 0 0;
                display: inline-block;
                position: relative;
                width: 20px;
                height: 20px;
                cursor: pointer;
                -moz-user-select: none;
                -webkit-user-select: none;
                -ms-user-select: none;
                vertical-align: middle;
                input{
                  color: #5079d9;
                  cursor: pointer;
                  -moz-transition: all .15s ease-out;
                  -webkit-transition: all .15s ease-out;
                  -o-transition: all .15s ease-out;
                  transition: all .15s ease-out;
                  text-decoration: none;
                }
              }
            }
            .delete-choose-goods{
              position: relative;
              margin-left: 21px;
              color: #bbb;
              float: left;
              height: 20px;
              line-height: 20px;
              cursor: pointer;
              &:before {
                content: "";
                position: absolute;
                left: -11px;
                top: 4px;
                height: 12px;
                width: 1px;
                background: #e1e1e1;
                cursor: default;
              }
            }
          }
        }
        .shipping{
          display: inline-block;
          float: right;
          padding: 20px 30px;
          .shipping-box{
            display: inline-block;
            padding-top: 1px;
            margin-right: 10px;
            .shipping-total{
              text-align: right;
              border: none;
              display: inline-block;
              border-left: 1px solid #e1e1e1;
              padding: 0 20px;
              .highlight{
                color: #323232;
                text-align: left;
                .binding{
                  color: #d44d44;
                  width: 28px;
                  display: inline-block;
                  text-align: center;
                  font-size: 18px;
                  font-weight: 700;
                  font-style: normal;
                }
              }
              h5{
                color: #959595;
                text-align: right;
                i{
                  width: 28px;
                  display: inline-block;
                  text-align: center;
                  font-size: 16px;
                  font-weight: 700;
                  font-style: normal;
                  color: #959595;
                }
              }
            }
          }
          .jianguo-blue-main-bt{
            float: right;
            background: #5d86e5;
            background: -webkit-linear-gradient(#688fe8,#5079e1);
            background: linear-gradient(#688fe8,#5079e1);
            box-shadow: 0 1px 3px rgba(0,0,0,.1), inset 0 -1px 2px rgba(0,0,0,.2);
            display: block;
            padding: 1px;
            margin: 0 auto;
            border-radius: 9px;
            background: #015e94;
            background: linear-gradient(#5598c9,#2a6da2);
            text-align: center;
            text-shadow: rgba(255,255,255,.496094) 0 1px 0;
            cursor: pointer;
            -webkit-user-select: none;
            -ms-user-select: none;
            -o-user-select: none;
            user-select: none;
            height: 48px;
            a{
              padding: 2px 32px;
              font-size: 16px;
              height: 44px;
              line-height: 45px;
              background: #6C94F3;
              background: linear-gradient(#7EA3F5,#5A82F0);
              box-shadow: none;
              text-shadow: none;
              color: #FFF;
              -moz-transition: all .3s ease;
              -webkit-transition: all .3s ease;
              transition: all .3s ease;
              display: block;
              border-radius: 9px;
            }
          }
        }
      }
    }
  }

</style>
