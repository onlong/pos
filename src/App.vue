<template>
	<div id="app">
		<tabbar></tabbar>
		<div id="right">
			<router-view />
		</div>
	</div>
</template>

<script>
import tabbar from "@/components/common/tabbar";

export default {
	name: "app",
	components: {
		tabbar,
	},
};
</script>

<style>
@import "./assets/css/common.css";
@import "./assets/icon/iconfont.css";

#right{
  position: fixed;
  right: 0;
  top: 0;
  width: 95%;
  height: 100%;
  background-color: #ccc;
}
</style>
