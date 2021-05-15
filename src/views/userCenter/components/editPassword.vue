<template>
  <el-dialog :visible="visible">
    <el-form></el-form>
  </el-dialog>
</template>

<script>
export default {
    props: {
        visible: { type: Boolean, require: false, default: false }
    },
    name: 'EditPassword'
}
</script>

<style scoped>

</style>
