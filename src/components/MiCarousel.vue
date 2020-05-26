

<template>
    <div class="mi-carousel">
        <ul>
            <li>
                <span>手机 电话卡</span>
                <i class="el-icon-arrow-right"></i>
            </li>
            <li>
                <span>电视 盒子</span>
                <i class="el-icon-arrow-right"></i>
            </li>
            <li>
                <span>笔记本 显示器 平板</span>
                <i class="el-icon-arrow-right"></i>
            </li>
            <li>
                <span>家电 插电板</span>
                <i class="el-icon-arrow-right"></i>
            </li>
            <li>
                <span>出行 穿戴</span>
                <i class="el-icon-arrow-right"></i>
            </li>
            <li>
                <span>智能 路由器</span>
                <i class="el-icon-arrow-right"></i>
            </li>
            <li>
                <span>电源 配件</span>
                <i class="el-icon-arrow-right"></i>
            </li>
            <li>
                <span>健康 儿童</span>
                <i class="el-icon-arrow-right"></i>
            </li>
            <li>
                <span>耳机 音箱</span>
                <i class="el-icon-arrow-right"></i>
            </li>
            <li>
                <span>生活 箱包</span>
                <i class="el-icon-arrow-right"></i>
            </li>
        </ul>
    </div>
</template>


<script>
export default {
    name: 'MiCarousel',
    
}
</script>



<style scoped>

.mi-carousel {
    height: 100%;
    display: flex;
    background-image: linear-gradient(rgb(135, 135, 255) 0%, rgb(124, 67, 177) 50%, rgb(135, 135, 255) 100%);
    align-items: center;
}
.mi-carousel ul {
    min-width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    font-size: .9em;
    flex-shrink: 0;
}
.mi-carousel ul li {
    padding: .5em 2em;
    cursor: pointer;
    flex-grow: 1;
    display: flex;
    align-items: center;
    flex-shrink: 0;
}
ul li i {
    margin-left: auto;
    font-weight: 900;
    flex-shrink: 0;
}
ul li span {
    flex-shrink: 0;
}

.mi-carousel ul li:hover {
    background-color: orangered;
}


</style>