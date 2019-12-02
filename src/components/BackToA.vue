<template>
  <div class="hello">
    <ul>
      <li v-for="(item,index) in 26" :key="index">
        <router-link :to="{ name: 'Alphabet', params: { letter: String.fromCharCode(64+item) }}">{{String.fromCharCode(64+item)}}</router-link>        
        </li>  
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState({
      demoTop: state => state._scrollTop // 获取 state 中存储的top值
    })
  },
  mounted() {
      console.log("==mounted===");
      document.querySelector('.hello').addEventListener('scroll', this.handleScroll, false);

  },
  methods: {
      ...mapActions([
      'updatePosition'
    ]),  
      handleScroll(){
      this.box = document.querySelector('.hello');
      this.updatePosition(this.box.scrollTop)
    }, 
  },
  activated() {
     document.querySelector('.hello').scrollTop = this.demoTop // 更新缓存组件的scrollTop值
 
  },
};
</script>
<style lang="scss" scoped>
.hello{
    height: 600px;
    overflow: scroll;
    ul{
        height: auto;
        overflow: hidden;
        background: #eee;
        li{
            height: 60px;
            line-height: 60px;
            width: 100%;
            float: left;
            margin: 0;
            border-bottom: 1px solid #ccc
        }
    }
}
</style>