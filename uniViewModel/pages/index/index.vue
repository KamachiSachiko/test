<template>
	<view>

		<view class="" style="padding: 20rpx;background-color: #FFFFFF;">
			<u-search v-model="keyword" :animation="true" @search="search" @custom="search" shape="square"></u-search>
		</view>

		<view class="" style="padding: 20rpx;background-color: #FFFFFF;">
			<u-swiper :list="banner" name="advImg" @click="swiper"></u-swiper>
		</view>

		<view class="title" style="padding: 10rpx;background-color: #FFFFFF;margin-top: 1rpx;">
			<text>推荐服务</text>
		</view>

		<view class="">
			<u-grid col="5" :border="false">
				<u-grid-item v-for="(item,index) in service" @click="goService(item.serviceName)">
					<view class="Center">
						<view class="Center"
							style="width: 60rpx;height: 60rpx;background-color: #2979FF;border-radius: 30rpx;">
							<image :src="item.imgUrl" mode="" style="width: 40rpx;height: 40rpx;border-radius: 30rpx;">
							</image>
						</view>
						<text class="lineOne">{{item.serviceName}}</text>
					</view>
				</u-grid-item>
			</u-grid>
		</view>

		<view class="title" style="padding: 10rpx;background-color: #FFFFFF;margin-top: 1rpx;">
			<text>热门主题</text>
		</view>

		<!-- <swiper :indicator-dots="true">
			<swiper-item>
				<view class="swiper-item">
					<u-grid col="4" :border="false">
						<u-grid-item v-for="(item,index) in service" v-show="index < 8" @click="goRequest(item)">
							<view class="Center">
								<view class="Center" style="width: 60rpx;height: 60rpx;border-radius: 30rpx;">
									<image :src="item.imgUrl" mode=""
										style="width: 60rpx;height: 60rpx;border-radius: 30rpx;">
									</image>
								</view>
								<text class="lineOne">{{item.name}}</text>
							</view>
						</u-grid-item>
					</u-grid>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<u-grid col="4" :border="false">
						<u-grid-item v-for="(item,index) in service" v-show="index >= 8" @click="goRequest(item)">
							<view class="Center">
								<view class="Center" style="width: 60rpx;height: 60rpx;border-radius: 30rpx;">
									<image :src="item.imgUrl" mode=""
										style="width: 60rpx;height: 60rpx;border-radius: 30rpx;">
									</image>
								</view>
								<text class="lineOne">{{item.name}}</text>
							</view>
						</u-grid-item>
					</u-grid>
				</view>
			</swiper-item>
		</swiper> -->

		<view class="">
			<u-grid col="2" :border="false">
				<u-grid-item v-for="(item,index) in hot" style="background-color: #ECF5FF;" @click="goNews(item.id)">
					<view class="Center" style="background-color: #FFFFFF;border-radius: 20rpx;">
						<image :src="ip + item.cover" mode=""
							style="width: 300rpx;height: 200rpx;border-radius: 20rpx 20rpx 0 0"></image>
						<text class="lineOne" style="width: 290rpx;">{{item.title}}</text>
					</view>
				</u-grid-item>
			</u-grid>
		</view>

		<view class="">
			<u-tabs :list="category" :current="current" @change="tabs"></u-tabs>
		</view>

		<view>
			<view v-for="(item,index) in press" :key="index" @click="goNews(item.id)">
				<view v-show="index%2==0"
					style="margin: 2rpx 0;background-color: #FFFFFF;display: flex;flex-direction: column; padding: 20rpx;color: #82848A;">
					<view class="Center">
						<image :src="ip + item.cover" mode="" style="width: 100%;height: 200rpx;border-radius: 10rpx;">
						</image>
					</view>
					<view class="" style="padding: 10rpx;">
						<text class="line" style="color: #000000;">{{item.title}}</text>
						<text class="u-line-2">{{item.content}}</text>
						<view class="HBetween" style="color: #71D5A1;">
							<text>评论总数：{{item.commentNum != null ? item.commentNum:0}}</text>
							<text>发布时间：{{item.publishDate}}</text>
						</view>
					</view>
				</view>
				<view v-show="index%2==1"
					style="margin: 2rpx 0;background-color: #FFFFFF;display: flex;padding: 20rpx;color: #82848A;">
					<view class="Center">
						<image :src="ip + item.cover" mode=""
							style="width: 150rpx;height: 150rpx;border-radius: 10rpx;">
						</image>
					</view>
					<view class="" style="padding: 10rpx;">
						<text class="lineOne" style="color: #000000;">{{item.title}}</text>
						<text class="lineTwo">{{item.content}}</text>
						<view class="HBetween" style="color: #71D5A1;">
							<text>评论总数：{{item.commentNum != null ? item.commentNum:0}}</text>
							<text>发布时间：{{item.publishDate}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				keyword: "",
				banner: [],
				service: [],
				category: [],
				current: 0,
				hot: [],
				press: []
			}
		},
		methods: {
			getBanner() {
				const res = this.$request({
					url: "/prod-api/api/rotation/list?pageNum=1&pageSize=8&type=2"
				}).then((res) => {
					this.banner = []
					this.banner = res.data.rows
					for (var i = 0; i < this.banner.length; i++) {
						this.banner[i].advImg = this.ip + this.banner[i].advImg
					}
				})
			},
			getService() {
				const res = this.$request({
					url: "/prod-api/api/service/list"
				}).then((res) => {
					this.service = []
					this.service = res.data.rows
					for (var i = 0; i < this.service.length; i++) {
						this.service[i].imgUrl = this.ip + this.service[i].imgUrl
					}
					this.service.sort(function(a, b) {
						return b.id - a.id
					})
					this.service.splice(9);
					this.service.push({
						serviceName: "更多服务",
						imgUrl: "../../static/city3/more.png"
					})
				})
			},
			goService(name) {
				switch (name) {
					case "更多服务": {
						uni.switchTab({
							url: "../service/service"
						})
						break;
					}
				}
			},
			getCategory() {
				const res = this.$request({
					url: "/prod-api/press/category/list"
				}).then((res) => {
					this.category = []
					this.category = res.data.data
					this.getPress()
				})
			},
			tabs(i) {
				this.current = i;
				this.getPress()
			},
			getHot() {
				const res = this.$request({
					url: "/prod-api/press/press/list?hot=Y"
				}).then((res) => {
					this.hot = []
					this.hot = res.data.rows
				})
			},
			goNews(id) {
				uni.navigateTo({
					url: "../news/news?id=" + id
				})
			},
			getPress() {
				const res = this.$request({
					url: "/prod-api/press/press/list?type=" + this.category[this.current].id
				}).then((res) => {
					this.press = []
					this.press = res.data.rows
					for (var i = 0; i < this.press.length; i++) {
						var regex = /(<([^>]+)>)/ig
						this.press[i].content = this.press[i].content.replace(regex, "")
						var regex2 = /&nbsp;/ig
						this.press[i].content = this.press[i].content.replace(regex2, " ")
					}
				})
			},
			swiper(i) {
				this.goNews(this.banner[i].targetId)
			},
			search() {
				uni.navigateTo({
					url: "../news/list?keyword=" + this.keyword
				})
			}
		},
		onLoad() {
			this.getBanner()
			this.getService()
			this.getCategory()
			this.getHot()
		}
	}
</script>

<style>
	page {
		background-color: #EEEEEE;
	}
</style>
