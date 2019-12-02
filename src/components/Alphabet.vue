<template>
  <div class="hello">
    <div><button @click="goback">goback</button></div>
    <ul>
      <li>
        this is <strong>{{ $route.params.letter }}</strong>
      </li>      
    </ul>
  </div>
</template>

<script>
export default {
    name:'hello',
    methods: {
        goback(){
            this.$router.history.go(-1);
        }
    },
}
</script>

<style>

</style>