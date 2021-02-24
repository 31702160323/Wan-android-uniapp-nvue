<template>
	<scroll-view class="scroll-view_H" :style="{'padding-top': `${statusBarHeight}`}" scroll-x="true" show-scrollbar="false" :scroll-into-view="scrollItemId" :scroll-with-animation="true">
		<text :id="`item-${index}`" v-for="(item, index) in tabList" :key="`item-${index}`" class="scroll-view-item_H" @click="$emit('switchTab', index)"
		 :class="{'scroll-view-item-bg': tabItem === index}">{{ item.name }}</text>
	</scroll-view>
</template>

<script>
	const systemInfo = uni.getSystemInfoSync();
	export default {
		props: ['tabList', 'scrollItemId', 'tabItem'],
		data() {
			return {

			};
		},
		computed:{
			statusBarHeight: function(){
				return systemInfo.statusBarHeight;
			}
		}
	}
</script>

<style>
	.scroll-view_H {
		width: 750rpx;
		flex-direction: row;
		background-color: #007AFF;
	}

	.scroll-view-item_H {
		height: 100rpx;
		line-height: 60rpx;
		padding: 20rpx 25rpx;
		text-align: center;
		font-size: 24rpx;
	}

	.scroll-view-item-bg {
		/* font-weight: bold; */
		/* font-size: 32rpx; */
		color: #FFF;
		border-bottom-width: 5rpx;
		border-color: #FFF;
		border-style: solid;
	}
</style>
