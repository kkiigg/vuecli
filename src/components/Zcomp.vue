<template>
  <div>
    <h1 id="h">{{count}}</h1>
    <button @click="increase">+</button>
    <button @click="decrease">-</button>
  </div>
</template>
import $ from 'jquery'
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
  },
  mounted () {
    $('#h').addClass('haha')
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
