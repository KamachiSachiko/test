<template>
	<view style="padding: 20rpx;">
		<view class="Center" style="margin: 20rpx;">
			<view class="" style="display: flex;width: 100%;height: 400rpx;background-color: #FFFFFF; border: 1rpx #82848A solid;border-radius: 10rpx;position: relative;">
				<textarea v-model="txt" placeholder="提点意见吧" maxlength="150" style="padding: 10rpx;font-size: 28rpx;"/>
				<text style="position: absolute;right: 20rpx;bottom: 20rpx;">{{txt.length}}/150</text>
			</view>
		</view>
		<button class="btn" type="primary" @click="back" style="">提交</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				txt:""
			}
		},
		methods: {
			back(){
				const res = this.$request({
					url:"/prod-api/api/common/feedback",
					method:"POST",
					data:{
						"content": this.txt,
						"title": "发现错误"
					}
				}).then((res) => {
					if (res.data.code == 200) {
						uni.showToast({
							title: '修改成功'
						});
						setTimeout(function() {
							uni.navigateBack({
								delta: 1
							});
						}, 1000);
					}
				})
			}
		}
	}
</script>

<style>
	
</style>
