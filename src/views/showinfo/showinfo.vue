<template>
	<div>
	<h2>{{hospitalName}} {{officesName}}</h2>
  <el-table
    :data="tableData"
    height="768"
	size="medium"
    border
	 style="width: 100%;height: 100%;"
    :row-style="tableRowStyle"
    :header-cell-style="tableHeaderColor"
	>
    <el-table-column
      prop="date"
      label="日期"
      min-width="10%"
	  align="center">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      min-width="10%"
	  align="center">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
	  min-width="10%"
	  align="center">
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
		  hospitalName:'测试医院',
		  officesName:'测试科室',
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
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
  }
</script>
