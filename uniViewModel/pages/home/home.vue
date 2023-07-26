<template>
	<view>
		<view class="Center" style="height: 25ch;">
			<view class="Center">
				<image :src="head" mode="" @error="imgErr" style="width: 150rpx;height: 150rpx;border-radius: 100rpx;"></image>
			</view>
			<text>{{user.nickName}}</text>
		</view>
		
		<navigator url="setting" class="HBetween" style="align-items: center;padding: 20rpx; border-top: 1rpx #EEEEEE solid; border-bottom: 1rpx #EEEEEE solid;">
			<text>个人信息</text>
			<image src="../../static/city3/right.png" mode="" style="width: 50rpx;height: 50rpx;"></image>
		</navigator>
		<navigator url="order" class="HBetween" style="align-items: center;padding: 20rpx;border-bottom: 1rpx #EEEEEE solid;">
			<text>订单列表</text>
			<image src="../../static/city3/right.png" mode="" style="width: 50rpx;height: 50rpx;"></image>
		</navigator>
		<navigator url="password" class="HBetween" style="align-items: center;padding: 20rpx;border-bottom: 1rpx #EEEEEE solid;">
			<text>修改密码</text>
			<image src="../../static/city3/right.png" mode="" style="width: 50rpx;height: 50rpx;"></image>
		</navigator>
		<navigator url="feedback" class="HBetween" style="align-items: center;padding: 20rpx;border-bottom: 1rpx #EEEEEE solid;">
			<text>意见反馈</text>
			<image src="../../static/city3/right.png" mode="" style="width: 50rpx;height: 50rpx;"></image>
		</navigator>
		<navigator url="feedhistory" class="HBetween" style="align-items: center;padding: 20rpx;border-bottom: 1rpx #EEEEEE solid;">
			<text>意见反馈历史</text>
			<image src="../../static/city3/right.png" mode="" style="width: 50rpx;height: 50rpx;"></image>
		</navigator>
		
		<button type="warn" class="btn" style="margin-top: 50rpx;" @click="goLogin">退出</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user:{},
				head:""
			}
		},
		methods: {
			goLogin(){
				uni.redirectTo({
					url:"../login/login"
				})
			},
			getUser(){
				const res = this.$request({
					url:"/prod-api/api/common/user/getInfo"
				}).then((res) => {
					if (res.data.code != 200) {
						return
					}
					this.user = {}
					this.user = res.data.user
					if (uni.getStorageSync("avatar").length > 0) {
						this.head = this.ip + uni.getStorageSync("avatar")
					} else{
						this.head = this.ip + this.user.avatar
					}
				})
			},
			imgErr(){
				this.head = '../../static/city3/head.png'
			}
		},
		onLoad() {
			this.getUser()
		}
	}
</script>

<style>

</style>
