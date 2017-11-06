<template>
  <div>
    <div class="main">
        <div class="contents fn-clear">
          <div class="account-wrapper">
            <div class="account-sidebar" style="top: 0px;">
              <div class="avatar gray-box fn-clear">
                <div class="js-account-sidebar-info"><img
                  src="http://static.smartisanos.cn/account/asset/img/default-user-avatar.png"> <h5></h5></div>
                <div class="box-inner">
                  <ul class="account-nav">
                    <li class="current" data-type="order"><a href="/account/#/order/list">我的订单</a></li>
                    <li class="" data-type="support"><a href="/account/#/support/list">售后服务</a></li>
                    <li class="  js-coupon-notice" data-type="coupon"><a href="/account/#/coupon">我的优惠</a></li>
                    <li class="" data-type="userinfo"><a href="/account/#/information">账户资料</a></li>
                    <li class="" data-type="address"><a href="/account/#/address/list">收货地址</a></li>
                    <li class="" data-type="aihuishou"><a href="/account/#/aihuishou">以旧换新</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="account-content">
              <div class="account-order">
                <div class="gray-box  ">
                  <div class="title columns-title pre-title"><h2>我的订单</h2>
                    <div class="gray-btn-menu sort-status-menu"><span class="label"> <img
                      src="http://static.smartisanos.cn/account/asset/img/i.gif?1509525772641" class="arrow"> 全部状态 </span>
                      <ul class="menu-list">
                        <li class="selected"><a href="/account/#/order/list?time=-3month&amp;status=all">全部状态</a></li>
                        <li class=""><a href="/account/#/order/list?time=-3month&amp;status=unfinished">未完成</a></li>
                        <li class=""><a href="/account/#/order/list?time=-3month&amp;status=finish">已完成</a></li>
                        <li class=""><a href="/account/#/order/list?time=-3month&amp;status=cancel">已关闭</a></li>
                      </ul>
                    </div>
                    <div class="gray-btn-menu sort-time-menu"><span class="label"> <img
                      src="http://static.smartisanos.cn/account/asset/img/i.gif?1509525772641"
                      class="arrow"> 最近三个月 </span>
                      <ul class="menu-list">
                        <li class="selected"><a href="/account/#/order/list?time=-3month&amp;status=all">最近三个月</a></li>
                        <li class=""><a href="/account/#/order/list?time=2017&amp;status=all">今年内</a></li>
                        <li class=""><a href="/account/#/order/list?time=2016&amp;status=all">2016 年</a></li>
                        <li class=""><a href="/account/#/order/list?time=2015&amp;status=all">2015 年</a></li>
                        <li class=""><a href="/account/#/order/list?time=2014&amp;status=all">2014 年</a></li>
                      </ul>
                    </div>
                  </div>
                  <div class="js-list-inner">
                    <div class="box-inner order-cart order-list-cart fn-clear" data-id="171104895738417">
                      <div class="gray-sub-title cart-title"><span class="date">2017-11-04</span> <span class="order-id"> 订单号： <a
                        href="/account/#/order/detail/171104895738417">171104895738417</a> </span> <span
                        class="order-detail"> <a href="/account/#/order/detail/171104895738417">查看详情<em class="icon-font" style="font-style: normal">></em></a> </span>
                        <span class="sub-total">应付总额</span> <span class="operation">商品操作</span> <span
                          class="num">数量</span> <span class="price">单价</span></div>
                      <div class="cart">
                        <div class="cart-items fn-clear" data-id="100022501">
                          <div class="prod-info fn-clear">
                            <div class="items-thumb"><a href="http://www.smartisan.com/shop/#/item/100022501"
                                                        target="_blank" title="Micro-USB至 Type-C 转接头（白色）"> <img
                              src="http://image.smartisanos.cn/resource/5eba0b0d282f24b5d09dd9585bee4c44.png?x-oss-process=image/resize,w_80/quality,Q_100/format,webp">
                            </a></div>
                            <div class="items-params fn-clear">
                              <div class="name vh-center"><a href="http://www.smartisan.com/shop/#/item/100022501"
                                                             target="_blank" title="Micro-USB至 Type-C 转接头（白色）">Micro-USB至 Type-C 转接头（白色）</a>
                              </div>
                              <div class="detail"></div>
                            </div>
                            <div class="operation">
                              <div class="operation-list"></div>
                            </div>
                            <div class="num">1</div>
                            <div class="price">¥ 29.00</div>
                          </div>
                        </div>
                      </div>
                      <div class="prod-operation">
                        <div class="total">¥ 44.00</div>
                        <div class="status"><a class="blue-small-btn js-payment-order">现在付款</a></div>
                      </div>
                    </div>
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
  }
</script>

<style lang="scss">
  .contents {
    clear: both;
    width: 1220px;
    min-height: 600px;
    padding: 55px 0 0 0;
    margin: 0 auto;
  }
  .account-wrapper {
    position: relative;
    min-height: 550px;
  }
  .account-sidebar {
    position: absolute;
    left: 0;
    top: 0;
    width: 210px;
  }
  .account-sidebar .avatar {
    padding-top: 20px;
    margin: 0 0 20px;
    border-radius: 10px;
    text-align: center;
  }
  .account-sidebar .gray-box {
    overflow: hidden;
  }
  .gray-box {
    overflow: hidden;
    border: 1px solid #D1D1D1;
    border-color: rgba(0,0,0,.14);
    border-radius: 8px;
    box-shadow: 0 3px 8px -6px rgba(0,0,0,.1);
  }
  .gray-box {
    background: #FFF;
  }
  .account-sidebar .avatar img {
    width: 168px;
    height: 168px;
  }
  fieldset, img {
    border: 0;
  }
  .account-sidebar .avatar h5 {
    font-size: 18px;
    line-height: 48px;
    font-weight: 700;
  }
  .account-sidebar .account-nav {
    padding-top: 15px;
  }
  .account-sidebar .account-nav .current {
    border: none;
  }
  .account-sidebar .account-nav li {
    position: relative;
    height: 48px;
    border-top: 1px solid #EBEBEB;
    line-height: 48px;
  }
  .account-sidebar .account-nav .current a, .account-sidebar .account-nav a:hover {
    position: relative;
    top: -1px;
    z-index: 1;
    height: 50px;
    background-color: #98AFEE;
    line-height: 50px;
    color: #FFF;
  }
  .account-sidebar .account-nav a {
    display: block;
    height: 48px;
    padding: 0 30px;
    color: #666;
    transition: none;
  }
  a {
    color: #5079d9;
    cursor: pointer;
    transition: all .3s ease;
  }
  .account-content {
    margin-left: 230px;
  }
  .account-order .gray-box {
    margin-bottom: 20px;
  }
  .gray-box {
    overflow: hidden;
    border: 1px solid #D1D1D1;
    border-color: rgba(0,0,0,.14);
    border-radius: 8px;
    box-shadow: 0 3px 8px -6px rgba(0,0,0,.1);
  }
  .gray-box, .gray-btn-menu-on:hover {
    background: #FFF;
  }
  .gray-box .pre-title {
    position: relative;
    z-index: 2;
  }
  .gray-box .title {
    height: 60px;
    padding: 0 10px 0 28px;
    background: #F5F5F5;
    background: linear-gradient(#FFF,#F5F5F5);
    border-bottom: 1px solid #DCDCDC;
    border-radius: 10px 10px 0 0;
    box-shadow: 0 1px 7px rgba(0,0,0,.06);
    line-height: 60px;
    color: #646464;
  }
  .gray-box .columns-title h2 {
    float: left;
  }
  .gray-box .title h2 {
    font-size: 18px;
    font-weight: 400;
    color: #626262;
    line-height: 60px;
  }
  .gray-box .title .gray-btn-menu {
    overflow: visible;
    float: right;
  }
  .gray-box .title .gray-btn-menu, .gray-box .title span.gray-normal-btn {
    margin: 10px 0 0 10px;
  }
  .account-order .sort-status-menu {
    width: 112px;
  }
  .gray-btn-menu {
    display: inline-block;
    height: 36px;
    background: #F2F2F2;
    background: linear-gradient(#FFF,#F5F5F5);
    border: 1px solid #DBDDE2;
    border-radius: 4px;
    line-height: 36px;
    cursor: pointer;
    transition: none;
  }
  .gray-box .title .gray-btn-menu .label {
    overflow: visible;
    float: none;
  }
  .gray-box .title span {
    overflow: hidden;
    float: right;
    margin-top: 11px;
  }
  .gray-btn-menu .label {
    position: relative;
    z-index: 1;
    display: block;
    padding: 0 13px 0 16px;
    text-align: left;
    color: #666;
  }
  .gray-btn-menu .menu-list {
    display: none;
    position: absolute;
    right: -1px;
    top: -1px;
    width: 100%;
    padding: 38px 0 6px;
    background: #FFF;
    border: 1px solid #dbdde2;
    border-radius: 4px;
    box-shadow: 0 1px 3px 0 #EEE;
  }
  .gray-btn-menu .menu-list li {
    height: 24px;
    line-height: 24px;
    padding: 0 3px 3px;
    text-align: left;
    font-size: 12px;
  }
  .gray-btn-menu .menu-list li.selected a {
    background: #8F9096;
    color: #FFF;
    cursor: default;
  }
  .gray-btn-menu .menu-list li a {
    display: block;
    padding: 0 15px;
    border-radius: 3px;
    color: #999;
  }
  .account-order .sort-time-menu {
    width: 118px;
  }
  .account-order .gray-box .box-inner:first-child .gray-sub-title {
    border-top: none;
  }
  .gray-box .gray-sub-title {
    height: 38px;
    padding: 0 24px;
    background: #EEE;
    border-top: 1px solid #DBDBDB;
    border-bottom: 1px solid #DBDBDB;
    line-height: 38px;
    font-size: 12px;
    color: #666;
  }
  .order-list-cart .cart-title .date {
    width: 108px;
    padding-left: 6px;
  }
  .order-list-cart .cart-title .date, .order-list-cart .cart-title .order-id {
    float: left;
    text-align: left;
  }
  .gray-box .gray-sub-title a {
    color: #5079d9;
  }
  .gray-box .gray-sub-title a, .gray-box .gray-sub-title span {
    float: right;
  }
  .order-list-cart .cart-title .order-detail {
    width: 82px;
    padding-left: 24px;
    text-align: center;
  }
  .order-list-cart .cart-title .operation, .order-list-cart .cart-title .order-detail, .order-list-cart .cart-title .sub-total {
    float: right;
  }
  .order-list-cart .cart-title .order-detail a {
    float: none;
  }
  .order-list-cart .cart-title .sub-total {
    width: 102px;
    padding-right: 18px;
    border-left: 1px solid #DBDBDB;
    text-align: right;
  }
  .order-list-cart .cart-title .operation {
    width: 95px;
    height: 38px;
    padding-right: 23px;
  }
  .order-list-cart .cart-title .num {
    width: 70px;
  }
  .order-list-cart .cart-title .price {
    width: 85px;
    padding-right: 45px;
    text-align: right;
  }
  .order-list-cart .cart {
    float: left;
    width: 737px;
    padding: 0;
    border-right: 1px solid #EBEBEB;
  }
  .order-cart .cart-items:first-child {
    border-top: none;
  }
  .order-list-cart .cart-items {
    height: 75px;
    padding: 0;
  }
  .order-list-cart .prod-info {
    margin-left: 0;
  }
  .order-list-cart .items-thumb {
    left: 30px;
    top: 15px;
    width: 78px;
    height: 78px;
    border: 1px solid #EBEBEB;
    border-radius: 3px;
  }
  .order-list-cart .items-thumb img {
    width: 78px;
    height: 78px;
  }
  .order-list-cart .items-params {
    float: left;
    height: 50px;
    padding: 15px 0;
    border-bottom: none;
    line-height: 25px;
  }
  .order-list-cart .prod-info .vh-center {
    height: auto;
    line-height: 50px;
  }
  .order-list-cart .prod-info .name {
    float: none;
    width: 220px;
    height: 25px;
    line-height: 25px;
  }
  .order-cart .items-params .name a {
    color: #666;
    font-size: 13px;
  }
  .order-list-cart .prod-info .detail {
    font-size: 12px;
    color: #999;
  }
  .order-cart .items-params .name {
    overflow: hidden;
    float: left;
    color: #666;
    height: 44px;
    text-align: left;
  }
  .hide-row, .order-cart .items-params .name, .support-cart .items-detail .detail {
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .order-cart .items-thumb {
    position: absolute;
    left: -100px;
    top: 0;
    width: 80px;
    height: 80px;
  }
  .order-cart .prod-info {
    position: relative;
    margin-left: 138px;
  }
  .order-cart .cart-items {
    position: relative;
    padding: 18px 0 28px;
    border-top: 1px solid #EFEFEF;
  }
  .order-list-cart .prod-info .operation {
    display: table;
    width: 95px;
    height: 80px;
    padding-right: 23px;
    line-height: 25px;
  }
  .order-list-cart .prod-info .operation .operation-list {
    display: table-cell;
    vertical-align: middle;
  }
  .order-list-cart .prod-info .num {
    width: 70px;
    font-size: 13px;
    padding-right: 25px;
  }
  .order-list-cart .prod-info .num, .order-list-cart .prod-info .operation, .order-list-cart .prod-info .price, .order-list-cart .prod-info .subtotal {
    float: right;
    line-height: 80px;
    text-align: center;
  }
  .order-list-cart .prod-info .price {
    width: 85px;
    padding-right: 20px;
    text-align: right;
    font-weight: 700;
    font-size: 13px;
  }
  .order-list-cart .prod-operation {
    float: right;
    display: table;
    height: 110px;
    font-size: 13px;
  }
  .order-list-cart .prod-operation .total {
    display: table-cell;
    padding-right: 18px;
    line-height: 14px;
    text-align: right;
    vertical-align: middle;
    font-weight: 700;
  }
  .order-list-cart .prod-operation .status {
    display: table-cell;
    width: 80px;
    padding: 0 24px;
    text-align: center;
    vertical-align: middle;
  }
  .blue-small-btn {
    background: #6383C6;
    background: linear-gradient(#7EA3F5,#5A82F0);
    color: #FFF;
  }
  .blue-small-btn, .orange-small-btn, .white-gray-small-btn {
    display: inline-block;
    height: 30px;
    padding: 0 13px;
    border-radius: 4px;
    line-height: 30px;
    font-size: 12px;
    cursor: pointer;
  }
  .blue-normal-btn, .blue-small-btn, .blue-title-btn, .blue-white-btn, .dark-del-btn, .dialog-blue-btn, .dialog-blue-btn a, .dialog-gray-btn, .dialog-gray-btn a, .gold-normal-btn, .gray-blue-btn, .gray-btn, .gray-btn-menu, .gray-del-btn, .gray-disable-btn, .gray-edit-btn, .gray-icon-btn, .gray-normal-btn, .gray-small-btn, .light-blue-btn, .light-gray-btn, .red-del-btn, .red-small-btn, .transparent-small-btn, .wap-black-main-btn, .wap-blue-main-btn, .white-gray-small-btn {
    text-align: center;
    font-family: 'Microsoft Yahei','微软雅黑','PingFang SC',sans-serif;
    transition: all .3s ease;
    user-select: none;
  }
  .title columns-title pre-title{
    line-height: 60px;
  }
</style>
