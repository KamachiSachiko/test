<template>
	<view style="padding: 20rpx;">
		<view class="" style="display: flex;border: #EEEEEE 1rpx solid;">
			<view class="Center" style="flex: 1;height: 80rpx;" :class="current == 0 ? 'bg':''" @click="current = 0">
				<text>未支付</text>
			</view>
			<view class="Center" style="flex: 1;height: 80rpx;" :class="current == 1 ? 'bg':''" @click="current = 1">
				<text>已支付</text>
			</view>
		</view>
		<view v-for="(item,index) in older" :key="index" style="margin: 20rpx 0;border: #EEEEEE 1rpx solid;border-radius: 20rpx;" v-show="current == item.status">
			<view class="" style="padding: 20rpx;border-bottom: #007AFF 1rpx dashed;color: #007AFF;">
				<text>订单号：{{item.orderNum}}</text>
			</view>
			<view class="" style="margin: 20rpx;">
				<text>订单类型：公交订单</text>
			</view>
			<view class="" style="margin: 0 20rpx;">
				<text>订单生成时间：{{item.payTime}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current:0,
				older:[],
			}
		},
		methods: {
			getOlder(){
				const res = this.$request({
					url:"/prod-api/api/bus/order/list"
				}).then((res) => {
					this.older = []
					this.older = res.data.rows
				})
			}
		},
		onLoad() {
			this.getOlder()
		}
	}
</script>

<style>
	.bg{
		background-color: #007AFF;
		color: #FFFFFF;
	}
</style>
