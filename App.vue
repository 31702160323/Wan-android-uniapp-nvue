<script>
	// js h5+ 模式创建
	import {
		addShortcuts
	} from './utils/shortcuts.js'

	export default {
		onLaunch: function() {
			console.log('App Launch');

			// 加载icon字体文件
			const dom = weex.requireModule('dom');
			dom.addRule('fontFace', {
				'fontFamily': "yticon",
				'src': "url('/static/font/yticon.ttf')"
			});
			dom.addRule('fontFace', {
				'fontFamily': "font1078604",
				'src': "url('/static/font/font_1078604_w4kpxh0rafi.ttf')"
			});

			const navigateTo = uni.navigateTo;

			uni.navigateTo = function(object) {
				//判断是否登录
				if (!(object.url.indexOf('detailPage') !== -1 ||
						object.url.indexOf('setting') !== -1 ||
						object.url.indexOf('login') !== -1 ||
						object.url.indexOf('systemList') !== -1)) {
					const userData = uni.getStorageSync('userData');

					if (userData == null || userData == '') {
						object.url = '/pages/login/login'
					}
				}
				return navigateTo(object);
			}

			/**
			 * XZH-Shortcut 开始
			 */
			if (uni.getSystemInfoSync().platform == "android") {
				this.main = plus.android.runtimeMainActivity();
				//添加 Shortcuts 方法
				let res = addShortcuts(this.main, [{
					id: 'setting',
					icon: plus.io.convertLocalFileSystemURL('/static/logo.png'), //本地图片,要使用平台绝对路径
					path: '/pages/setting/setting',
					shortLabel: '系统设置',
					title: '系统设置'
				}]);
			}
			/**
			 * XZH-Shortcut 结束
			 */
		},
		onShow: function() {
			console.log('App Show');
			/**
			 * XZH-Shortcut 开始
			 */
			if (uni.getSystemInfoSync().platform == "android") {
				const Intent = plus.android.importClass("android.content.Intent");
				let intent = this.main.getIntent();
				let url = intent.getStringExtra("path"); // list 里面的 path

				//根据 path路径 进行跳转
				if (url === null) return;
				this.$nextTick(function() {
					uni.navigateTo({
						url
					});
				})
			}
			/**
			 * XZH-Shortcut 结束
			 */
		},
		onHide: function() {
			console.log('App Hide');
		}
	};
</script>

<style>
	/* @import '/common/icon.css'; */
	.yticon {
		font-family: yticon;
	}

	.icon-shoucang {
		padding: 10rpx;
	}
</style>
