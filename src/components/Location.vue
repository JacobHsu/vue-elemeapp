<template>
  <div>
    <div class="title">
        地點
    </div>
    <div class="des">
        <i class="fa fa-location-arraw"></i>
        <span>{{address}}</span>
    </div>    
  </div>
</template>

<script>
export default {
  name: "location",
  props: {
      address: String
  }
}
</script>
<style scoped>
.title {
  margin-top: 5px;
  font-size: 12px;
}
.des {
  padding: 10px;
}
.des i {
  color: #009eef;
}
.des span {
  color: #333;
  font-weight: blod;
  margin-left: 5px;
  display: inline-block;
  width: 90%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipse;
}
</style>