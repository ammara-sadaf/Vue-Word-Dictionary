<template>
  <div id="app">
    <div class="header">
      <ul>
        <li><router-link :to="`/`">Home</router-link></li>
      </ul>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.header {
  margin-bottom: 20px;
}

.header ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

.header li {
  float: left;
}

.header li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.header li a:hover {
  background-color: #111;
}
</style>
