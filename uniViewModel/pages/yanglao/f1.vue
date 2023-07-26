<template>
	<view>
		
		<view class="HBetween txt" style="text-align: right;">
			<text>姓名</text>
			<input type="text" v-model="name" style="font-size: 28rpx;"
			placeholder="请输入姓名" placeholder-style="font-size: 28rpx;"/>
		</view>
		
		<view class="HBetween txt" style="text-align: right;">
			<text>年龄</text>
			<input type="text" v-model="age" style="font-size: 28rpx;"
			placeholder="请输入年龄" placeholder-style="font-size: 28rpx;"/>
		</view>
		
		<view class="HBetween txt">
			<text>性别</text>
			<radio-group >
				<label>
					<radio value="0" /><text>男</text>
				</label>
				<label>
					<radio value="1" /><text>女</text>
				</label>
			</radio-group>
		</view>
		
		<view class="HBetween txt">
			<text>精神状态</text>
			<radio-group >
				<label>
					<radio value="0" /><text>正常</text>
				</label>
				<label>
					<radio value="1" /><text>痴呆</text>
				</label>
				<label>
					<radio value="2" /><text>抑郁</text>
				</label>
				<label>
					<radio value="3" /><text>暴力</text>
				</label>
			</radio-group>
		</view>
		
		<view class="HBetween txt">
			<text>活动能力</text>
			<radio-group >
				<label>
					<radio value="0" /><text>正常</text>
				</label>
				<label>
					<radio value="1" /><text>拄拐</text>
				</label>
				<label>
					<radio value="2" /><text>轮椅</text>
				</label>
				<label>
					<radio value="3" /><text>卧床</text>
				</label>
			</radio-group>
		</view>
		
		<view class="HBetween txt">
			<text>生活自理缺陷</text>
			<radio-group >
				<label>
					<radio value="0" /><text>饮食</text>
				</label>
				<label>
					<radio value="1" /><text>洗澡</text>
				</label>
				<label>
					<radio value="2" /><text>穿衣</text>
				</label>
				<label>
					<radio value="3" /><text>修饰</text>
				</label>
			</radio-group>
		</view>
		
		<view class="title" style="padding: 30rpx;background-color: #FFFFFF;margin-top: 1rpx;text-align: right;">
			<text>服务费用：3000</text>
		</view>
		
		<button type="primary" @click="back" class="btn">确认</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name:"",
				age:60
			}
		},
		methods: {
			back(){
				uni.showToast({
						title: '保存成功',
						icon:'none'
					});
				setTimeout(function() {
					uni.navigateBack({
						delta:1
					})
				}, 1000);
			}
		}
	}
</script>

<style>
	.txt{
		border-bottom: 1rpx #EEEEEE solid;
		padding: 30rpx;
		height: 100rpx;
	}
</style>
