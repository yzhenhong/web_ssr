<template>
  <div>
    <div>my_index</div>
    <nuxt class="my-index-nuxt" />
  </div>
</template>

<script>
export default {
  name: 'MyIndexPage',
  created() {
    console.log('created')
  },
}
</script>

<style lang="less" scoped></style>
