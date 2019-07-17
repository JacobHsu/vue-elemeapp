<template>
  <div class="address">
    <Header :isLeft="true" title="選擇收貨地址"/>
  </div>
</template>

<script>
import Header from '../components/Header' 
export default {
  name: "Address",
  components: {
      Header
  }
}
</script>

<style scoped>
.address {
    width: 100%;
    height: 100%;
    overflow: auto;
    box-sizing: border-box;
    padding-top: 45px;
}
</style>>