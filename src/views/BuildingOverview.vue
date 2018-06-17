<template>
    <div class='building-overview'>
      <div v-for="(floor, index) in floosInfo" class='floor' :style="getStyle(index)" :key="index" @click="pageToFeedbackList"></div>
    </div>
</template>

<script>
export default {
  name: 'BuildingOverview',
  data () {
    return ({
      floosInfo: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    })
  },
  methods: {
    getStyle (index) {
      return {
        zIndex: index * -1,
        top: index * 200 * -1 + 'px'
      }
    },
    pageToFeedbackList () {
      this.$router.push({
        name: 'feedbackList'
      })
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss">
  img {
    border: 1px solid;
    position: absolute;
  }
  .floor {
    background: url('../assets/floor.png');
    height: 300px;
    position: relative;
  }
</style>
