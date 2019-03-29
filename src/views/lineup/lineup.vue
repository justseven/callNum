<template>
<div class="content_box_form">
	<div class="title_box">
		<div class="logo">
			<img />
		</div>
	</div>
	<!--logo end-->
	
	<!--nane start-->
	<div class="name_box">
		
	</div>
	<!--nane end-->
   
	
	<div class="reservation_box">
		<el-row type="flex" class="row-bg" justify="center">
			<el-col :span="6"></el-col>
			<el-col :span="12">
				<label style="color: #C2C2C2;">第一步：请将您的指引单放置在条码扫描区</label>	
			</el-col>
			<el-col :span="6"></el-col>
		</el-row>
		<el-row type="flex" class="row-bg" justify="center">
			<el-col>
				<label style="color: #C2C2C2;">系统会自动扫描您的条形码</label>
			</el-col>
		</el-row>
		<el-row type="flex" class="row-bg" justify="center">
			<el-col :span="6"></el-col>
			<el-col :span="12" :offset="3">
				<img id="img" style="" src="../../libs/images/ewm.gif" alt="" />
			</el-col>
			<el-col :span="6"></el-col>
		</el-row>
		<el-row type="flex" class="row-bg"><el-col><label style="color:#FFFFFF">第二步：请输入您的手机号码</label></el-col></el-row>
		<div class="phoneBg">
			<el-row type="flex" class="row-bg">
				<el-col :span="10"></el-col>
				<el-col :span="4">
					<el-input type="text" autofocus="true" v-model="printeInfo.num" id="phoneNumber"/>
				</el-col>
				<el-col :span="10"></el-col>
			</el-row>
			<el-row type="flex" class="row-bg"><el-col><el-button type="primary" @click="Print('')" v-print="'#printTest'">保存</el-button></el-col></el-row>
		</div>
	</div>
	
	<el-dialog class="dialog-detail" :visible.sync="dialogDetail.isShow" size="tiny">
		<div id="printTest" > <p>{{printeInfo.num}}</p><p>{{printeInfo.cur}} </p><p>{{printeInfo.office}} </p>　</div>
	</el-dialog>
</div>
</template>

<script>
	
	export default {
	  data() {
	    return {
	      tjbh:"",
		  printeInfo:{num:123,cur:1,office:"内科"},
		  dialogDetail: {
                    isShow: false,
                    model: {}
                }
	    }
	  },
		created() {},
		methods: {
		 Print(){
			 this.printeInfo.cur=2;
			 this.printeInfo.office="外壳"
			 this.dialogDetail.isShow=true
			 //this.$print(this.$refs.print);
		 }
		}
	};
</script>

<style>
	@import "../../libs/css/all.css";
@import "../../libs/css/common.css";
@import url("../../libs/layer/skin/default/layer.css");
.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
</style>
