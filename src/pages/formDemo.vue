<template>
  <div class="wrap">
    <myform
      label-position="left"
      label-width="80px"
      :formList="formList"
      :formData="formData"
    />
  </div>
</template>

<script>
import myform from "../utils/form";
export default {
  components: {
    myform,
  },
  data() {
    return {
      formData: {
        name: "陈",
        age: 26,
        desc: 'ASFSAFSAF',
        working: false,
        marrStatus: 2,
        date: new Date('1995-11-20'),
      },
      formList: [
        {
          tag: "input",
          model: "name",
          label: "姓名",
        },
        {
          tag: "input",
          model: "desc",
          label: "介绍",
          attrs:{
            type: 'textarea'
          }
        },
        {
          tag: "input-number",
          model: "age",
          label: "年龄",
        },
        {
          tag: "switch",
          model: "working",
          label: "是否在职",
        },
        {
          tag: "select",
          model: "marrStatus",
          label: "婚姻状况",
          options: [
            { label: '已婚', value: 1 },
            { label: '未婚', value: 2 },
            { label: '离异', value: 3 },
          ],
        },
        {
            tag: "date-picker",
            model: 'date',
            label: "出生日期",
            attrs:{
                align: "right",
                type: "date",
                placeholder: "选择日期"
            }
        }
      ],
    };
  },
};
</script>

<style scoped>
.wrap{
    width: 375px;
    margin: 16px auto;
}
</style>