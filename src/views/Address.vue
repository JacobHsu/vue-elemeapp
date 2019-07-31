<template>
  <div class="address">
    <Header :isLeft="true" title="選擇收貨地址" />
    <div class="city_search">
      <div class="search">
        <span class="city">
          {{city}}
          <i class="fa fa-angle-down"></i>
        </span>
        <i class="fa fa-search"></i>
        <input type="text" v-model="searchVal" placeholder="社區/學校等" />
      </div>
      <Location :address="address" />
      <div class="area">
        <ul class="area_list" v-for="(item, index) in areaList" :key="index">
          <li>1{{item.name}}</li>
          <p>{{item.district}} {{item.address}}</p>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import Location from "../components/Location";
export default {
  name: "Address",
  data() {
    return {
      city: "",
      searchVal: "",
      areaList: []
    };
  },
  computed: {
    address() {
      return this.$store.getters.location.formattedAddress;
    }
  },
  watch: {
    searchVal() {
      this.searchPlace();
    }
  },
  methods: {
    searchPlace() {
      //console.log( this.searchVal )
      const self = this;
      AMap.plugin("AMap.Autocomplete", function() {
        // 实例化Autocomplete
        var autoOptions = {
          //city 限定城市，默认全国
          city: self.city
        };
        var autoComplete = new AMap.Autocomplete(autoOptions);
        autoComplete.search(self.searchVal, function(status, result) {
          // 搜索成功时，result即是对应的匹配数据
          //console.log( result.tips )
          self.areaList = result.tips;
        });
      });
    }
  },
  components: {
    Header,
    Location
  },
  beforeRouteEnter(to, from, next) {
    //console.log(to)
    next(vm => {
      vm.city = "台北"; // to.parms.city
    });
  }
};
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
.area {
  margin-top: 16px;
  background: #fff;
}
.area li {
  border-bottom: 1px solid #eee;
  padding: 8px 16px;
  color: #aaa
}
.area li h4{
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
}
</style>>