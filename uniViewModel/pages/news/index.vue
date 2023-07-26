<template>
	<view>
		<view class="" style="padding: 20rpx;background-color: #FFFFFF;">
			<u-search v-model="keyword" :animation="true" @search="search" @custom="search" shape="square"></u-search>
		</view>
		
		<view class="" style="padding: 20rpx;background-color: #FFFFFF;">
			<u-swiper :list="banner" name="advImg" @click="swiper"></u-swiper>
		</view>
		<view class="">
			<u-tabs :list="category" :current="current" @change="tabs"></u-tabs>
		</view>
		
		<view>
			<view v-for="(item,index) in press" :key="index" @click="goNews(item.id)">
				<view v-show="index%2==0" style="margin: 2rpx 0;background-color: #FFFFFF;display: flex;flex-direction: column; padding: 20rpx;color: #82848A;">
					<view class="Center">
						<image :src="ip + item.cover" mode="" style="width: 100%;height: 200rpx;border-radius: 10rpx;">
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
				<view v-show="index%2==1" style="margin: 2rpx 0;background-color: #FFFFFF;display: flex;padding: 20rpx;color: #82848A;">
					<view class="Center">
						<image :src="ip + item.cover" mode="" style="width: 150rpx;height: 150rpx;border-radius: 10rpx;">
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
			tabs(i) {
				this.current = i;
				this.getPress()
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
			swiper(i){
				this.goNews(this.banner[i].targetId)
			},
			search(){
				uni.navigateTo({
					url:"../news/list?keyword=" + this.keyword
				})
			}
		},
		onLoad() {
			this.getBanner()
			this.getCategory()
		}
	}
</script>

<style>

</style>
