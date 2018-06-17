<template>
  <div class='feedback-list'>
    <div class='list' v-for="(person, index) in persons" :key="index">
      <div>
        <div>touxiang</div>
        <el-rate
          :value="person"
          :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
          @change="(val) => changeRate(val, index)"
        />
      </div>
      <p>You are handsome!!!!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeedbackList',
  data () {
    return {
      persons: [1, 2, 3, 4, 5, 5]
    }
  },
  methods: {
    changeRate (val, index) {
      this.persons.splice(index, 1, val)
    }
  }
}
</script>

<style>

</style>
