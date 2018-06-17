<template>
  <div class="home">
    <el-button type="primary" @click="pageTo('buildingOverview')">BuildingOverview</el-button>
  </div>
</template>
<script>
export default {
  name: 'home',
  components: {
  },
  methods: {
    pageTo (pageName) {
      this.$router.push({
        name: pageName
      })
    }
  }
}
</script>
