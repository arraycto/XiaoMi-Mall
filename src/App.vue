<template>
  <div id="app">

    <header>
      <nav>
        <first-level-nav></first-level-nav>
      </nav>
    </header>

    <main>

      <article>
        <second-level-nav></second-level-nav>
      </article>

      <article>
        <router-view></router-view>
      </article>

      <article>
        <router-view name="MiShangou"></router-view>
      </article>

      <article>
        <router-view name="MiPhone"></router-view>
      </article>

    </main>

  </div>
</template>

<script>
import FirstLevelNav from './views/FirstLevelNav.vue'
import SecondLevelNav from './views/SecondLevelNav.vue'

export default {
  name: 'app',
  components: {
    FirstLevelNav,
    SecondLevelNav,
  }
}
</script>

<style>

body,ul {
  margin: 0;
  padding: 0;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

main > article {
  width: 80vw;
  flex-shrink: 0;
}
main > article:first-child {
  margin: 1.5em 0 1.5em 0;
}


</style>
