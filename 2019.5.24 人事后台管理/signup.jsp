<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<title>后台管理系统</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<!-- Bootstrap -->
		<link rel="stylesheet" href="css/admin.css">
		<script src="js/lib/modernizr.js"></script>
	</head>

<body class="backstretch">

	<div class="container">
		<div class="signup">
			<div class="row">
			
				<div class="visible-xs text-center">
					<h1 class="text-white p-b-0">求职后台管理系统</h1>
				</div>

				<div class="col-sm-8 text-white hidden-xs">
					<div class="p-30">
						<h1>求职后台管理系统</h1>
						<p>求职后台管理系统，帮助您完成各种功能</p>
						<ul class="unstyled checkmarked">
							<li>界面简洁</li>
							<li>功能强大</li>
							<li>还有更多...</li>
						</ul>
					</div>
				</div>

				<div class="col-sm-4">
					<div class="m-t-30">
						<div class="p-t-30">
							<form role="form" method="post" action="register">
								<div class="form-group">
									<input type="text" class="form-control input-glass" id="user"
										placeholder="Username" name="username">
								</div>
								<div class="form-group">
									<input type="password" class="form-control input-glass"
										id="pass" placeholder="Password" name="password">
								</div>
								<div class="form-group">
									<input type="password" class="form-control input-glass"
										id="pass" placeholder="Repeat Password" name="rpassword">
								</div>
								<button type="submit" class="btn btn-primary btn-block btn-lg">注册</button>
							</form>
						</div>
						<a href="login.jsp" class="text-white hover-opacity-change hover-white-opacity-text m-t-10 d-block">已经拥有账号?</a>
					</div>
				</div>

			</div>
			<div class="row">
				<footer>
					<div id="footer" class="col-md-12"">
						<font color="gray" size="3">
							<center>
								郑州工业应用技术学院静东308<br> 版权所有Copyright 20016-2019&copy;, All Rights
								Reserved 豫ICP备16007882
							</center>
						</font>
					</div>
				</footer>
			</div>
		</div>
	</div>

	<script src="js/jquery.js"></script>
	<script src="js/lib/backstretch.js"></script>

	<script>
		$(".backstretch").backstretch([
			"backgrounds/wg_blurred_backgrounds_8.jpg",
			"backgrounds/wg_blurred_backgrounds_5.jpg",
			"backgrounds/wg_blurred_backgrounds_3.jpg",
			"backgrounds/wg_blurred_backgrounds_1.jpg",
			"backgrounds/wg_blurred_backgrounds_2.jpg",
			"backgrounds/wg_blurred_backgrounds_4.jpg",
			"backgrounds/wg_blurred_backgrounds_6.jpg",
			"backgrounds/wg_blurred_backgrounds_7.jpg",
			"backgrounds/wg_blurred_backgrounds_9.jpg",
		], {
			duration : 3000,
			fade : 'slow'
		});
	</script>


	<script>
		(function(i, s, o, g, r, a, m) {
			i['GoogleAnalyticsObject'] = r;
			i[r] = i[r] || function() {
				(i[r].q = i[r].q || []).push(arguments)
			}, i[r].l = 1 * new Date();
			a = s.createElement(o),
			m = s.getElementsByTagName(o)[0];
			a.async = 1;
			a.src = g;
			m.parentNode.insertBefore(a, m)
		})(window, document, 'script', 'js/analytics.js', 'ga');
	
		ga('create', 'UA-49617882-1', 'sugoi-admin-v104.herokuapp.com');
		ga('send', 'pageview');
	</script>
	
</body>
</html>
