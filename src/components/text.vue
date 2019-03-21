<template>
  <div>
    {{text}}
  </div>
</template>
import $ from 'jquery'
<script>
export default {
  data () {
    return {
      text: 'i am comp'
    }
  },
  methods: {
    increase () {
      this.count++
    }
  }
}
</script>
<style lang="less">
div {
  transition: all 0.3s;
  h1 {
    font-size: 20px;
  }
  button {
    width: 100px;
  }
}
</style>
