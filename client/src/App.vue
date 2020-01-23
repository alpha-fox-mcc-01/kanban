<template>
  <div id="app">
    <div id="nav">
      <nav class="navbar navbar-light bg-light">
        <div class="container">
          <router-link to="/">VanBan</router-link>
          <router-link class="btn-sm btn-info ml-auto" to="/add">Add Task</router-link>
        </div>
      </nav>
    </div>
    <router-view/>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* #nav {
  padding: 30px;
} */

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
