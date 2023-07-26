<template>
	<view class="charts-box">
		<qiun-data-charts type="line" :chartData="chartData" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				chartData: {}
			};
		},
		onReady() {
			this.getServerData();
		},
		methods: {
			getServerData() {
				const res = this.$request({
					url: "/prod-api/press/press/list"
				}).then((res) => {
					this.press = []
					this.getpress = []
					this.press = res.data.rows
					this.press.sort(function(a, b) {
						return b.commentNum - a.commentNum
					})
					this.chartData = {
						categories:[],
						series: [{
							name: "评论数",
							data: [this.press[10].commentNum, this.press[11].commentNum,
								this.press[12].commentNum, this.press[13].commentNum,
								this.press[14].commentNum
							]
						}]
					};
				})
			},
		}
	};
</script>

<style scoped>
	.charts-box {
		width: 100%;
		height: 300px;
	}
</style>
