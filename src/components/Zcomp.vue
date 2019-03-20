<template>
  <div>
    <h1>{{count}}</h1>
    <button @click="increase">+</button>
    <button @click="decrease">-</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      count: 0
    }
  },
  methods: {
    increase () {
      this.count++
    },
    decrease () {
      this.count--
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
