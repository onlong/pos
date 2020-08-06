<template>
	<div id="tabbar">
		<ul>
			<li @click="setRouter('/home')">
				<i class=" iconfont icon-hanbao"></i>
				<p>点餐</p>
			</li>
			<li @click="setRouter('/foot')">
				<i class=" iconfont icon-wodedangxuan"></i>
				<p>我的</p>
			</li>
			<li @click="setRouter('/vip')">
				<i class=" iconfont icon-icon-test"></i>
				<p>Vip</p>
			</li>
			<li @click="setRouter('/set')">
				<i class=" iconfont icon-shezhi"></i>
				<p>设置</p>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: "tabbar",
	methods: {
		setRouter(str) {
			this.$router.replace(str);
		},
	},
};
</script>

<style scoped>
#tabbar {
	color: #fff;
	height: 100%;
	background-color: #1d8ce0;
  position: fixed;
  left: 0;
  top: 0;
  text-align: center;
	width: 5%;
}
#tabbar li {
	width: 100%;
	height: 100px;
	box-sizing: border-box;
	padding: 10px;
}
#tabbar li i {
	font-size: 30px;
}
#tabbar li p {
	font-size: 20px;
}
</style>
