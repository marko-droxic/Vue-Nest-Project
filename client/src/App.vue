<template>
  <div id="app">
    <b-navbar type="light" variant="light">
      <b-navbar-nav>
        <b-nav-item to="/">Home</b-nav-item>

        <b-nav-item-dropdown text="Job" right>
          <b-dropdown-item to="/jobs">Jobs List</b-dropdown-item>
          <b-dropdown-item to="/add-job">Add Job</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
    <div class="layout">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
header {
  max-height: 100vh;
}

</style>
