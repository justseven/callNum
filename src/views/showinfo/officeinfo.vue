<template>


</template>
<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item),
		tableData2:Array(10).fill(item)
      }
    },
	created() {},
	methods: {
	  // 修改table tr行的背景色
	  tableRowStyle({ row, rowIndex }) {
	    return 'background-color: #2AABD2;color: #fff;font-weight: 500;font-size: 20px;height:80px'
	  },
	  // 修改table header的背景色
	  tableHeaderColor({ row, column, rowIndex, columnIndex }) {
	    if (rowIndex === 0) {
	      return 'background-color:#2AABD2;color: #fff;font-weight: 500;font-size: 20px;height:80px'
	    }
	  }
	}
  };
</script>