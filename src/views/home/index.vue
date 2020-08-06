<template>
	<div>
		<div id="left">
			<el-tabs type="border-card">
				<el-tab-pane label="结账">
					<table>
						<tr>
							<th>商品</th>
							<th>量</th>
							<th>金额</th>
							<th>操作</th>
						</tr>
						<tr v-for="(item, index) in arr" :key="index">
							<td>{{ item.goodsName }}</td>
							<td>{{ item.goodsId }}</td>
							<td>{{ item.price }}</td>
							<td>
								<a href="javascript:;" @click="del(index)">删除</a
								><a href="javascript:;" @click="addnum(index)">增加</a>
							</td>
						</tr>
					</table>
					<p><span>总个数：{{partnum()}}</span><span>总金额{{part()}}</span></p>
					<el-row class="button">
						<el-button type="primary" @click="settle">结账</el-button>
						<el-button type="success">挂单</el-button>
						<el-button type="danger" @click="dels">删除</el-button>
					</el-row>
				</el-tab-pane>
				<el-tab-pane label="挂单" name="second"></el-tab-pane>
				<el-tab-pane label="外卖" name="third"></el-tab-pane>
			</el-tabs>
		</div>
		<div id="right">
			<div class="top">
				<h2>高频率商品</h2>
				<ul class="clearfix">
					<li
						v-for="(item, index) in common"
						:key="index"
						@click="addData(index, common)"
					>
						<p>{{ item.goodsName }}</p>
						<p>￥{{ item.price }}元</p>
					</li>
				</ul>
			</div>
			<div class="bottom">
				<el-tabs type="border-card">
					<el-tab-pane label="主食">
						<ul>
							<li
								v-for="(item, index) in classify[0]"
								:key="index"
								@click="addData(index, classify[0])"
							>
								<div><img :src="item.goodsImg" alt="" /></div>
								<p>{{ item.goodsName }}</p>
								<p>￥{{ item.price }}元</p>
							</li>
						</ul>
					</el-tab-pane>
					<el-tab-pane label="小食">
						<ul>
							<li
								v-for="(item, index) in classify[1]"
								:key="index"
								@click="addData(index, classify[1])"
							>
								<div><img :src="item.goodsImg" alt="" /></div>
								<p>{{ item.goodsName }}</p>
								<p>￥{{ item.price }}元</p>
							</li>
						</ul>
					</el-tab-pane>
					<el-tab-pane label="饮料">
						<ul>
							<li
								v-for="(item, index) in classify[2]"
								:key="index"
								@click="addData(index, classify[2])"
							>
								<div><img :src="item.goodsImg" alt="" /></div>
								<p>{{ item.goodsName }}</p>
								<p>￥{{ item.price }}元</p>
							</li>
						</ul>
					</el-tab-pane>
					<el-tab-pane label="套餐">
						<ul>
							<li
								v-for="(item, index) in classify[3]"
								:key="index"
								@click="addData(index, classify[3])"
							>
								<div><img :src="item.goodsImg" alt="" /></div>
								<p>{{ item.goodsName }}</p>
								<p>￥{{ item.price }}元</p>
							</li>
						</ul>
					</el-tab-pane>
				</el-tabs>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "home",
	data() {
		return {
			common: [
				{
					goodsId: 1,
					goodsName: "香辣鸡腿堡",
					price: 18,
				},
				{
					goodsId: 2,
					goodsName: "田园鸡腿堡",
					price: 15,
				},
				{
					goodsId: 3,
					goodsName: "和风汉堡",
					price: 15,
				},
				{
					goodsId: 4,
					goodsName: "快乐全家桶",
					price: 80,
				},
				{
					goodsId: 5,
					goodsName: "脆皮炸鸡腿",
					price: 10,
				},
				{
					goodsId: 6,
					goodsName: "魔法鸡块",
					price: 20,
				},
				{
					goodsId: 7,
					goodsName: "可乐大杯",
					price: 10,
				},
				{
					goodsId: 8,
					goodsName: "雪顶咖啡",
					price: 18,
				},
				{
					goodsId: 9,
					goodsName: "大块鸡米花",
					price: 15,
				},
				{
					goodsId: 20,
					goodsName: "香脆鸡柳",
					price: 17,
				},
			],
			classify: [
				[
					{
						goodsName: "可口可乐",
						price: 8,
						count: 1,
					},
					{
						goodsName: "香辣鸡腿堡",
						price: 15,
						count: 1,
					},
					{
						goodsName: "爱心薯条",
						price: 8,
						count: 1,
					},
					{
						goodsName: "甜筒",
						price: 8,
						count: 1,
					},
				],
				[
					{
						goodsName: "可口可乐",
						price: 8,
						count: 1,
					},
					{
						goodsName: "香辣鸡腿堡",
						price: 15,
						count: 1,
					},
					{
						goodsName: "爱心薯条",
						price: 8,
						count: 1,
					},
					{
						goodsName: "甜筒",
						price: 8,
						count: 1,
					},
				],
				[
					{
						goodsName: "可口可乐",
						price: 8,
						count: 1,
					},
					{
						goodsName: "香辣鸡腿堡",
						price: 15,
						count: 1,
					},
					{
						goodsName: "爱心薯条",
						price: 8,
						count: 1,
					},
					{
						goodsName: "甜筒",
						price: 8,
						count: 1,
					},
				],
			],
			data: [],
			arr: [],
			bool: false,
		};
	},
	methods: {
		part(){
			let aa = 0;
			for(let i = 0;i<this.arr.length;i++){
				aa+=this.arr[i].price*this.arr[i].goodsId
			}
			return aa 
		},
		partnum(){
			let aa = 0;
			for(let i=0;i<this.arr.length;i++){
				aa+=this.arr[i].goodsId
			}
			return aa
		},
		addData(num, arr) {
			this.data = arr[num];
			let nums = null;
			for (let i = 0; i < this.arr.length; i++) {
				if (this.data.goodsName == this.arr[i].goodsName) {
					this.bool = true;
					nums = i;
				}
			}
			if (this.bool) {
				this.arr[nums].goodsId++;
				this.data = [];
				this.bool = false;
				nums = null;
			} else {
				this.data.goodsId = 1;
				this.arr.push(this.data);
				this.data = [];
			}
			// console.log(this.arr[0].goodsId);
		},
		addnum(n) {
			this.arr[n].goodsId++;
		},
		del(n) {
			this.arr.splice(n, 1);
		},
		dels() {
			this.arr = [];
		},
		settle() {
			if (this.arr.length == 0) {
				this.$message.error("不能空结。老板了解你急切的心情！");
			} else {
				this.$message({
					message: "结账成功，感谢你又为店里出了一份力!",
					type: "success",
				});
				this.arr = [];
			}
		},
	},

	created() {
		this.axios
			.get("https://mock.yonyoucloud.com/mock/7376/mock2")
			.then((res) => {
				this.common = res.data;
			})
			.catch((error) => {
				console.log(error);
				alert("网络错误，不能访问,使用默认数据");
			}),
			this.axios
				.get("https://mock.yonyoucloud.com/mock/7376/mock")
				.then((res) => {
					this.classify = res.data;
				})
				.catch((err) => {
					alert("网络错误，不能访问，使用默认数据");
					console.log(err);
				});
	},
	mounted: function() {
		let height =
			document.documentElement.clientHeight || document.body.clientHeight;
		let left = document.getElementById("left");
		let right = document.querySelector("#right");
		left.style.height = height + "px";
		right.style.height = height + "px";
	},
};
</script>

<style scoped>
#left {
	background-color: deepskyblue;
	width: 30%;
	float: left;
}
#left > div {
	width: 100%;
}
#left table {
	width: 100%;
}
#left table tr {
	display: flex;
	width: 100%;
}
#left th,
#left td {
	flex: 1;
	border: 1px solid #000;
}
#right {
	width: 67%;
	float: left;
}
#left .button {
	display: flex;
}
#left .button button {
	flex: 1;
	margin: 10px;
}

#right .top {
	padding-bottom: 40px;
	border-bottom: 1px solid #000;
	background-color: #fff;
}
#right .top li p {
	float: left;
}
#right .top li {
	height: 30px;
	line-height: 30px;
	font-size: 20px;
	text-align: center;
	padding: 10px;
	margin-left: 10px;
	float: left;
	margin-top: 10px;
	border: 1px solid;
	border-radius: 50px;
	cursor: pointer;
}
#right .bottom li {
	width: 200px;
	float: left;
	height: 120px;
	background-color: #fff;
	margin: 10px;
	cursor: pointer;
	border: 1px solid #000;
}
#right .bottom li div {
	float: left;
	width: 120px;
	height: 120px;
	overflow: hidden;
}
#right .bottom li div img {
	width: 120px;
	height: 120px;
}
#right .bottom li p {
	margin-top: 20px;
}
</style>
