<template>
  <div>
    <div class="main">
      <div class="contents">
        <div class="nav">
          <div class="main-top">
            <div class="shopping-list">
              <h2>支付订单</h2>
            </div>
            <div class="box-inner order-info">
              <h3>提交订单成功</h3>
              <p class="payment-detail">
                请在 <span>24 小时内</span>
                完成支付，超时订单将自动取消。
              </p>
              <p class="payment-detail">我们将在您完成支付后的 72 小时内发货</p>
            </div>
            <div class="box-inner payment-checkout-panel fn-clear">
              <span class="jianguo-blue-main-btn big-main-btn js-payment-order disabled-btn">
                <a>现在支付</a>
              </span>
              <span class="prices"> 应付金额：
                <em>
                  <span>¥ </span>
                  103.00
                </em>
              </span>
            </div>
          </div>
          <div class="confirm-detail">
            <div class="info-title">订单编号</div>
            <p class="info-detail">171104432258794</p>
          </div>
          <div class="confirm-detail">
            <div class="info-title">收货信息</div>
            <p class="info-detail">姓名：杨新宇</p>
            <p class="info-detail">联系电话：18846336800</p>
            <p class="info-detail">详细地址：北京市市辖区昌平区马池口镇北京吉利学院</p>
          </div>
          <div class="confirm-detail">
            <div class="info-title">发票信息</div>
            <p class="info-detail">发票类型：电子发票</p>
            <p class="info-detail">发票抬头：个人</p>
            <p class="info-detail">发票内容：购买商品明细</p>
          </div>
          <div class="confirm-table-title fn-clear">
            <span class="name fn-left">商品信息</span>
            <span class="subtotal fn-right">小计</span>
            <span class="num fn-right">数量</span>
            <span class="price fn-right">单价</span>
          </div>
          <div class="confirm-goods-table">
            <div class="cart-items fn-clear  " data-id="100026601">
              <div class="name fn-left hide-row">
                <div class="name-cell">
                  <a href="http://www.smartisan.com/shop/#/item/100026601" title="Smartisan 原装 Type-C 数据线（白色）" target="_blank">Smartisan 原装 Type-C 数据线（白色）</a>
                  <br>
                </div>
              </div>
              <div class="subtotal fn-right">
              <div class="subtotal-cell"> ¥ 39.00<br>
              </div>
            </div>
              <div class="goods-num fn-right">1</div>
              <div class="price fn-right">¥ 39.00</div>
            </div>
          </div>
          <div class="order-discount-line">
            <p> 商品总计：
              <span>¥ 88.00</span>
            </p>
            <p> 运费：
              <span>+ ¥ 15.00</span>
            </p>
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
      loc: []
    }
  },
  created () {
    this.loc = JSON.parse(localStorage.username || '[]')
    console.log(this.loc)
    console.log(this.$store.state.shoplist)
  }
}
</script>
<style lang="scss">
.order-info{
  padding: 60px 0 55px;
  color: #333;
  h3{
    padding-bottom: 14px;
    line-height: 36px;
    text-align: center;
    font-size: 36px;
    color: #212121;
  }
  .payment-detail{
    text-align: center;
    line-height: 24px;
    font-size: 14px;
    color: #999;
    span{
      font-weight: bolder;
      color: #d44d44;
      text-align: center;
      line-height: 24px;
      font-size: 14px;
    }
  }
}
.main-top{
  margin-bottom: 60px;
}
.payment-checkout-panel{
  padding: 10px 10px 10px 0;
  line-height: 60px;
  background: #f9f9f9;
  border-top: 1px solid #e5e5e5;
  box-sizing: border-box;
  zoom: 1;
  &:after{
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;
    visibility: hidden;
  }
  .big-main-btn{
    float: right;
    width: 120px;
    height: 40px;
    line-height: 40px;
    display: block;
    padding: 1px;
    border-radius: 6px;
    background: #015e94;
    background: linear-gradient(#5598c9,#2a6da2);
    text-align: center;
    cursor: pointer;

    a{
      color: white;
      text-decoration: none;
    }
  }
  .prices {
    float: right;
    line-height: 24px;
    padding: 6px 20px 6px 0;
    font-size: 14px;
    em {
      margin-left: 5px;
      font-size: 24px;
      color: #d44d44;
      line-height: 24px;
      font-weight: 700;
      span{
        display: inline-block;
        margin-right: 4px;
        font-size: 16px;
        color: #d44d44;
        font-weight: 700;
        font-style: normal;
      }
    }
  }
}
.confirm-detail {
  padding: 0 30px 25px;
  border-top: 1px solid #d5d5d5;
    .info-title {
      height: 14px;
      padding: 30px 0 17px;
      line-height: 14px;
      font-weight: bolder;
      color: #333;
    }
    .info-detail {
      line-height: 24px;
      color: #666;
    }
}
.confirm-table-title {
  padding: 3px 0 0 30px;
  border-top: 1px solid #D5D5D5;
  line-height: 54px;
  font-weight: bolder;
  color: #000;
  &:after{
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;
    visibility: hidden;
  }
  .subtotal {
    width: 175px;
    padding-right: 29px;
    text-align: right;
  }
  .num{
    width: 175px;
    padding-right: 29px;
    text-align: right;
  }
  .price{
    width: 175px;
    padding-right: 29px;
    text-align: right;
  }
}
.confirm-goods-table {
  padding-left: 30px;
  border-top: 1px solid #D5D5D5;
  .cart-items:first-child {
    border-top: none;
  }
  .cart-items {
    height: 80px;
    border-top: 1px solid #D5D5D5;
    .name {
      display: table;
      width: 540px;
      height: 100%;
      .name-cell {
        display: table-cell;
        line-height: 22px;
        vertical-align: middle;
        color: #333;
        a{
          text-decoration: none;
          color: #333;
        }
      }
    }
    .subtotal {
      display: table;
      height: 80px;
      line-height: 24px;
      width: 175px;
      padding-right: 29px;
      text-align: right;
      font-weight: 700;
      .subtotal-cell {
        display: table-cell;
        vertical-align: middle;
      }
    }
    .goods-num {
      width: 28px;
      padding-left: 147px;
      text-align: center;
      padding-right: 29px;
      line-height: 80px;
      color: #626262;
    }
    .price{
      width: 175px;
      padding-right: 29px;
      line-height: 80px;
      text-align: right;
    }
  }
}
.order-discount-line {
  padding: 22px 30px 53px;
  border-top: 1px solid #D5D5D5;
  line-height: 24px;
  text-align: right;
  font-size: 12px;
  p:first-child {
    line-height: 32px;
    text-align: right;
    font-size: 14px;
    font-weight: bolder;
    span{
      float: right;
      width: 80px;
      line-height: 32px;
      text-align: right;
      font-size: 16px;
      font-weight: 500;
    }
  }
}
.fn-left{
    float: left;
    display: inline;
  }
.fn-right{
    float: right;
    display: inline;
  }
.fn-clear {
  zoom: 1;
}
.hide-row {
   overflow: hidden;
   word-break: keep-all;
    white-space: nowrap;
  text-overflow: ellipsis;
 }
</style>
