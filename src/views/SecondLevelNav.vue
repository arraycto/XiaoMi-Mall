

<template>
    <div class="second">
        <section>
            <img src="mi.png" alt="logo" height="60px">
            <div>
            <div class="nav-list">
                <ul>
                    <li>小米手机</li>
                    <li>RedMi红米</li>
                    <li>电视</li>
                    <li>笔记本</li>
                    <li>家电</li>
                    <li>路由器</li>
                    <li>智能硬件</li>
                    <li>服务</li>
                    <li>社区</li>
                </ul>
                <div class="search">
                    <input type="text" placeholder="华为Mate X">
                    <button>
                        <i class="el-icon-search"></i>
                    </button>
                </div>
            </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'SecondLevelNav',
    
}
</script>

<style scoped>

section {
    display: grid;
    width: 100%;
    grid-template-columns: 18% 82%;
    grid-template-rows: auto;
}
.nav-list {
    display: flex;
    align-items: center;
    height: 100%;
}
.nav-list ul {
    display: flex;
    cursor: pointer;
    
    flex-shrink: 0;
}
.nav-list ul li {
    margin-left: 1.5em;
}
.search {
    margin-left: auto;
    border: 1px solid rgb(218, 214, 214);
    display: flex;
}
.search input {
    padding: 1em;
    outline: none;
    border: none;
    width: 17em;
}
.search button {
    padding: 1em;
    border: none;
    background-color: white;
    border-left: 1px solid rgb(218, 214, 214);
}
i {
    font-size: 1.3em;
    font-weight: 900;
}


</style>>


