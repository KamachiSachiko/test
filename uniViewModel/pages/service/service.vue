<template>
	<view>
		<view class="" style="padding: 20rpx;">
			<u-search :animation="true" v-model="keyword" shape="square" @search="show = true" @custom="show = true"></u-search>
		</view>

		<scroll-view scroll-y="true" class="left" >
			<view>
				<view v-for="(item,index) in type" :key="index" style="padding: 20rpx;" class="Center"
					:class="toTop == item.to ? 'bg' : ''" @click="toTop = item.to">
					<text>{{item.name}}</text>
				</view>
			</view>
		</scroll-view>


		<scroll-view scroll-y="true" class="right" :scroll-into-view="toTop" :scroll-with-animation="true" >
			<view>
				<view v-for="(item1,index1) in type" :key="index1" style="border-bottom: 1rpx #EEEEEE solid;padding: 30rpx;">
					<text :id="item1.to" class="window">{{item1.name}}</text>
					<u-grid col="3" :border="false">
						<u-grid-item v-for="(item,index) in service" v-show="item.serviceType == item1.name"  @click="goService(item.serviceName)">
							<view class="Center">
								<view class="Center" style="width: 60rpx;height: 60rpx;border-radius: 30rpx;">
									<image :src="item.imgUrl" mode=""
										style="width: 40rpx;height: 40rpx;border-radius: 30rpx;"></image>
								</view>
								<text class="lineOne">{{item.serviceName}}</text>
							</view>
						</u-grid-item>
					</u-grid>
				</view>
			</view>
		</scroll-view>
		
		<u-popup mode="bottom" v-model="show">
			<u-grid col="5" :border="false">
				<u-grid-item v-for="(item,index) in service" v-show="item.serviceName.indexOf(keyword) != -1">
					<view class="Center">
						<view class="Center" style="width: 60rpx;height: 60rpx;border-radius: 30rpx;">
							<image :src="item.imgUrl" mode=""
								style="width: 40rpx;height: 40rpx;border-radius: 30rpx;"></image>
						</view>
						<text class="lineOne">{{item.serviceName}}</text>
					</view>
				</u-grid-item>
			</u-grid>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				service:[],
				toTop: "car",
				keyword: "",
				show:false,
				type: [{
						name: "车主服务",
						to: "car"
					},
					{
						name: "生活服务",
						to: "life"
					},
					{
						name: "便民服务",
						to: "easy"
					},
				]
			}
		},
		methods: {
			getService() {
				const res = this.$request({
					url: "/prod-api/api/service/list"
				}).then((res) => {
					this.service = []
					this.service = res.data.rows
					for (var i = 0; i < this.service.length; i++) {
						this.service[i].imgUrl = this.ip + this.service[i].imgUrl
					}
				})
			}
		},
		onLoad() {
			this.getService()
		}
	}
</script>

<style>
	.left {
		position: absolute;
		left: 0;
		bottom: 0;
		top: 90rpx;
		background-color: #EEEEEE;
		width: 33%;
	}

	.right {
		position: absolute;
		right: 0;
		bottom: 0;
		top: 90rpx;
		width: 67%;
	}

	.bg {
		background-color: #FFFFFF;
	}
</style>
