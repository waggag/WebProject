var together = new Date();
		//最后一页的时间 年,月,
		together.setFullYear(2019, 2, 24);

		//setHours() 方法用于设置指定的时间的小时,分钟,秒,毫秒字段
		together.setHours(0);
		together.setMinutes(0);
		together.setSeconds(0);
		together.setMilliseconds(0);

		//setInterval()方法可按照指定的周期来调用函数或计算表达式。
		timeElapse(together);
		setInterval(function() {
			timeElapse(together);
		}, 1000);
