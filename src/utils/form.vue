<template>
  <el-form v-bind="$attrs">
    <template v-for="(item, index) in formList">
      <el-form-item
        :key="index"
        v-bind="item.formItem"
        v-if="item.tag === 'select'"
        :label="item.label"
      >
        <el-select v-model="formData[item.model]" v-on="item.listeners" v-bind="item.attrs">
          <el-option
            :value="option.value"
            :label="option.label"
            :key="idx"
            v-for="(option,idx) in item.options"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item v-else :key="index" v-bind="item.formItem" :label="item.label">
        <component
          v-model="formData[item.model]"
          v-on="item.listeners"
          v-bind="item.attrs"
          :is="`el-${item.tag}`"
        ></component>
      </el-form-item>
    </template>
  </el-form>
</template>

<script>
export default {
  props: {
    formList: {
      type: Array,
      required: true,
    },
    formData: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style>
</style>