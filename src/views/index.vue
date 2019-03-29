<template>
	<div>
		<div class="content_box">
			<!--content 1280x1024 start-->


			<!--logo start-->
			<div class="title_box">
				<div class="logo">
					<img />
				</div>
			</div>
			<!--logo end-->

			<!--nane start-->
			<div class="name_box"></div>
			<!--nane end-->

			<!--模块开始-->
			<div class="mokuai_box">
				<ul>
					<li class="li_wd333">
						<a href="eventquery/index.html">
							<p>Event Query</p>
							<img src="../libs/images/eventquery.png" width="120" height="120">
							<span>信息查询</span></a>
					</li>
					<li class="li_wd333">
						<a href="declare/index.html">
							<p>Internet Declare</p>
							<img src="../libs/images/eventquery.png" width="120" height="120">
							<span>网上预约</span></a>
					</li>
					<li class="li_wd333">
						<a href="reservation/index.html">
							<p>Appointment</p>
							<img src="../libs/images/reservation.png" width="120" height="120">
							<span>体检预约</span></a>
					</li>
					<li class="li_wd500">
						<a href="archivesservice/index.html">
							<p>Archives</p>
							<img src="../libs/images/bsAchives.png" width="120" height="120">
							<span>体检档案</span></a>
					</li>
					<li class="li_wd500">
						<router-link to='lineup'>
							<p>Electronic Form</p>
							<img src="../libs/images/chooseForm.png" width="120" height="120">
							<span>排队叫号</span></router-link>
					</li>
					<li class="li_wd500">
						<a href="materialcopy/index.html">
							<p>Material Copy</p>
							<img src="../libs/images/materialCopy.png" width="120" height="120">
							<span>套餐选择</span></a>
					</li>
					<li class="li_wd500">
						<a href="idcardcopy/index.html">
							<p>ID Card Copy</p>
							<img src="../libs/images/IDcardCopy.png" width="120" height="120">
							<span>信息修改</span></a>
					</li>
				</ul>
			</div>
			<!--模块结束-->

		</div>
	</div>
</template>

<script>
</script>

<style>
	@import "../libs/css/all.css";
@import "../libs/css/common.css";
</style>
