<template>
	<view>
		<view class="" style="padding: 20rpx;background-color: #FFFFFF;">
			<u-search :animation="true" v-model="keyword" shape="square" @search="getPress" @custom="getPress" @clear="getPress"></u-search>
		</view>
		
		<view>
			<view v-for="(item,index) in press" :key="index"
				style="margin: 2rpx 0;background-color: #FFFFFF;display: flex;padding: 20rpx;color: #82848A;"
				@click="goNews(item.id)">
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
</template>

<script>
	export default {
		data() {
			return {
				keyword:"",
				press:[]
			}
		},
		methods: {
			getPress(){
				const res = this.$request({
					url: "/prod-api/press/press/list?title=" + this.keyword
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
			goNews(id) {
				uni.navigateTo({
					url: "../news/new?id=" + id
				})
			}
		},
		onLoad(option) {
			this.keyword = option.keyword
			this.getPress()
		}
	}
</script>

<style>

</style>
