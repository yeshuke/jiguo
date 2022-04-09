var btn = document.getElementsByClassName('btn')[0];
	var time = 59;
	btn.onclick = function () {

		btn.disabled = true;//禁用按钮
		var timer = setInterval(() => {
			if (time == 0) {
				// 清除定时器和复原按钮
				clearInterval(timer);
				btn.disabled = false; // 启用按钮；
				time = 59; // 还需要重新启用
				btn.innerHTML = '重新发送'
			} else {
				btn.innerHTML = '还剩下' + time + '秒'
				time--;

			}
		}, 1000);
	}

	