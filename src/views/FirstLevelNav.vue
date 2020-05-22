<template>
    <div style="position: relative;">
        <div class="first-level-nav">
            <ul>
                <li>
                    <router-link to="/">小米商城</router-link>
                </li>
                <li><a href="#">MIUI</a></li>
                <li><a href="#">IOT</a></li>
                <li><a href="#">云服务</a></li>
                <li><a href="#">金融</a></li>
                <li><a href="#">有品</a></li>
                <li><a href="#">小爱开发平台</a></li>
                <li><a href="#">企业团购</a></li>
                <li><a href="#">资质证照</a></li>
                <li><a href="#">协议规则</a></li>
                <li><a href="#">下载app</a></li>
                <li style="margin-right: 12em;">
                    <a href="#">Select Location</a>
                </li>
                <li><a href="#">登录</a></li>
                <li><a href="#">注册</a></li>
                <li><a href="#">消息通知</a></li>
                <li @mouseenter="CarShow = true" @mouseleave="CarShow = false">
                    <i class="el-icon-shopping-cart-1"></i>
                    <span>购物车 (0) </span>
                </li>
            </ul>
        </div>
        <transition name="el-zoom-in-top">
        <div class="car-card" v-show="CarShow"></div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'FirstLevelNav',
    data() {
        return {
            CarShow: false,
        };
    },
};
</script>

<style scoped>
.first-level-nav {
    display: flex;
    justify-content: center;
    background-color: rgb(54, 54, 54);
}

/* 
!: 一级导航菜单 */
ul {
    width: 80vw;
    display: flex;
}
ul li {
    display: block;
    padding: .6em .5em;
    flex-shrink: 0;
}
ul a,
ul span {
    color: rgb(206, 200, 200);
    font-size: 0.8em;
}
ul i {
    color: rgb(206, 200, 200);
    font-size: 1.2em;
    font-weight: 600;
    margin-right: 0.5em;
}
ul li:last-child {
    display: flex;
    margin-left: auto;
    padding: 0.6em 1em;
    cursor: pointer;
    background-color: rgba(228, 223, 223, 0.1);
}
ul li a:hover {
    color: white;
}
ul li:last-child:hover {
    background-color: white;
}
ul li:last-child:hover span,
ul li:last-child:hover i {
    color: orangered;
}

.car-card {
    width: 20vw;
    height: 7em;
    background-color: white;
    position: absolute;
    top: 2.4em;
    left: 70vw;
    box-shadow: 3px 2px 3px rgb(230, 227, 227),-1px 2px 2px rgb(216, 211, 211);
}






</style>
