		
		var together = new Date();
		
		//���һҳ��ʱ�� ��,��,
		together.setFullYear(2016,9,1);
		
		//setHours() ������������ָ����ʱ���Сʱ,����,��,�����ֶ�
		together.setHours(0);
		together.setMinutes(0);
		together.setSeconds(0);
		together.setMilliseconds(0);
		
		//setInterval()�����ɰ���ָ�������������ú����������ʽ��
		timeElapse(together);
			setInterval(function () {
				timeElapse(together);
			}, 1000);
			
			