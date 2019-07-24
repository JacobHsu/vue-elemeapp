<template>
  <div class="address">
    <Header :isLeft="true" title="選擇收貨地址"/>
    <div class="city_search">
        <div class="search">
            <span class="city">
              {{city}}
              <i class="fa fa-angle-down"></i>
            </span>
            <i class="fa fa-search"></i>
            <input type="text" v-model="searchVal" placeholder="社區/學校等">
        </div>
        <Location :address="address"/>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header' 
import Location from '../components/Location'
export default {
  name: "Address",
  data() {
    return {
      city: "",
      searchVal: ""
    }
  },
  computed: {
    address() {
      return this.$store.getters.location.formattedAddress
    }
  },
  components: {
      Header,
      Location
  },
  beforeRouteEnter (to, from, next) {
    //console.log(to)
    next(vm=>{
      vm.city =  '台北' // to.parms.city
    })
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
.city_search {
  background-color: #fff;
  padding: 10px 20px;
  color: #333;
}
.search {
  background-color: #eee;
  height: 40px; 
  border-radius: 10px;
  box-sizing: border-box;
  line-height: 40px;
}
.search .city {
  padding: 0 10px;
}
.city i {
  margin-right: 10px;
}
.search input {
  margin-left: 5px;
  background-color: #eee;
  outline: none;
  border: none;
}
</style>>