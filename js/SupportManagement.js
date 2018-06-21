//全局变量
var calMode = 0;
var sleepMode = 0;
var stage = new Array(44);
stage[0] = new Array("0-1", 0, 145, 145, 0, 0.83)
stage[1] = new Array("0-2", 550, 0, 0, 350, 3.00)
stage[2] = new Array("0-3", 900, 900, 900, 250, 12.00)
stage[3] = new Array("0-4", 0, 1200, 800, 750, 24.00)
stage[4] = new Array("1-1", 10, 30, 15, 0, 0.25)
stage[5] = new Array("1-2", 0, 40, 60, 0, 0.50)
stage[6] = new Array("1-3", 30, 0, 30, 10, 1.00)
stage[7] = new Array("1-4", 160, 160, 0, 0, 2.00)
stage[8] = new Array("2-1", 100, 0, 0, 30, 0.67)
stage[9] = new Array("2-2", 60, 200, 80, 0, 1.67)
stage[10] = new Array("2-3", 10, 10, 10, 230, 4.00)
stage[11] = new Array("2-4", 0, 250, 600, 60, 6.00)
stage[12] = new Array("3-1", 50, 0, 75, 0, 0.33)
stage[13] = new Array("3-2", 0, 120, 70, 30, 0.75)
stage[14] = new Array("3-3", 0, 300, 0, 0, 1.50)
stage[15] = new Array("3-4", 0, 0, 300, 300, 5.00)
stage[16] = new Array("4-1", 0, 185, 185, 0, 1.00)
stage[17] = new Array("4-2", 0, 0, 0, 210, 2.00)
stage[18] = new Array("4-3", 800, 550, 0, 0, 6.00)
stage[19] = new Array("4-4", 400, 400, 400, 150, 8.00)
stage[20] = new Array("5-1", 0, 0, 100, 45, 0.50)
stage[21] = new Array("5-2", 0, 600, 300, 0, 2.50)
stage[22] = new Array("5-3", 800, 400, 400, 0, 4.00)
stage[23] = new Array("5-4", 100, 0, 0, 700, 7.00)
stage[24] = new Array("6-1", 300, 300, 0, 100, 2.00)
stage[25] = new Array("6-2", 0, 200, 550, 100, 3.00)
stage[26] = new Array("6-3", 0, 0, 200, 500, 5.00)
stage[27] = new Array("6-4", 800, 800, 800, 0, 12.00)
stage[28] = new Array("7-1", 650, 0, 650, 0, 2.50)
stage[29] = new Array("7-2", 0, 650, 0, 300, 4.00)
stage[30] = new Array("7-3", 900, 600, 600, 0, 5.50)
stage[31] = new Array("7-4", 250, 250, 250, 600, 8.00)
stage[32] = new Array("8-1", 150, 150, 150, 0, 1.00)
stage[33] = new Array("8-2", 0, 0, 0, 450, 3.00)
stage[34] = new Array("8-3", 400, 800, 800, 0, 6.00)
stage[35] = new Array("8-4", 1500, 400, 400, 100, 9.00)
stage[36] = new Array("9-1", 0, 0, 100, 50, 0.50)
stage[37] = new Array("9-2", 180, 0, 180, 100, 1.50)
stage[38] = new Array("9-3", 750, 750, 0, 0, 4.50)
stage[39] = new Array("9-4", 500, 900, 900, 0, 7.00)
stage[40] = new Array("10-1", 140, 200, 0, 0, 0.67)
stage[41] = new Array("10-2", 0, 240, 180, 0, 1.67)
stage[42] = new Array("10-3", 0, 480, 480, 300, 5.20)
stage[43] = new Array("10-4", 660, 660, 660, 330, 10.00)
var appendix = new Array;
appendix[0] = new Array(0, 0, 0, 200000, 500000, 0)
appendix[1] = new Array(0, 500000, 0, 0, 0, 0)
appendix[2] = new Array(0, 0, 400000, 0, 400000, 0)
appendix[3] = new Array(0, 0, 0, 0, 0, 1000000)
appendix[4] = new Array(0, 0, 0, 0, 0, 0)
appendix[5] = new Array(0, 0, 0, 0, 0, 0)
appendix[6] = new Array(0, 0, 0, 0, 600000, 0)
appendix[7] = new Array(0, 200000, 0, 0, 0, 0)
appendix[8] = new Array(0, 0, 0, 0, 0, 0)
appendix[9] = new Array(0, 0, 0, 0, 300000, 0)
appendix[10] = new Array(0, 0, 0, 500000, 500000, 0)
appendix[11] = new Array(0, 800000, 0, 0, 0, 0)
appendix[12] = new Array(0, 0, 0, 0, 0, 0)
appendix[13] = new Array(0, 0, 0, 0, 0, 0)
appendix[14] = new Array(0, 0, 0, 400000, 450000, 0)
appendix[15] = new Array(0, 350000, 400000, 0, 0, 0)
appendix[16] = new Array(0, 0, 200000, 0, 0, 0)
appendix[17] = new Array(0, 0, 0, 500000, 0, 0)
appendix[18] = new Array(0, 700000, 0, 0, 300000, 0)
appendix[19] = new Array(0, 0, 0, 1000000, 0, 0)
appendix[20] = new Array(0, 0, 0, 0, 0, 0)
appendix[21] = new Array(0, 0, 0, 0, 800000, 0)
appendix[22] = new Array(0, 0, 500000, 0, 0, 0)
appendix[23] = new Array(0, 400000, 0, 0, 0, 0)
appendix[24] = new Array(0, 0, 0, 0, 0, 0)
appendix[25] = new Array(0, 0, 0, 200000, 500000, 0)
appendix[26] = new Array(0, 0, 600000, 0, 0, 0)
appendix[27] = new Array(0, 0, 0, 0, 0, 800000)
appendix[28] = new Array(0, 0, 0, 0, 0, 0)
appendix[29] = new Array(0, 600000, 0, 0, 400000, 0)
appendix[30] = new Array(0, 0, 700000, 0, 0, 0)
appendix[31] = new Array(0, 0, 0, 800000, 0, 0)
appendix[32] = new Array(0, 0, 400000, 0, 0, 0)
appendix[33] = new Array(0, 0, 0, 0, 800000, 0)
appendix[34] = new Array(0, 0, 0, 600000, 300000, 0)
appendix[35] = new Array(0, 900000, 0, 0, 0, 0)
appendix[36] = new Array(0, 0, 0, 0, 0, 0)
appendix[37] = new Array(0, 0, 0, 250000, 0, 0)
appendix[38] = new Array(0, 700000, 0, 0, 0, 0)
appendix[39] = new Array(0, 0, 1000000, 0, 0, 0)
appendix[40] = new Array(0, 0, 0, 0, 0, 0)
appendix[41] = new Array(0, 750000, 0, 250000, 0, 0)
appendix[42] = new Array(0, 0, 0, 300000, 500000, 0)
appendix[43] = new Array(0, 0, 1000000, 0, 0, 0)

$(document).ready(function() {
	//初始锁定
	$("#resourceRatio input").attr("disabled", "disabled");

	//绑定按钮切换函数<input>suoding
	$(".btn-switch>.btn").on("click", function() {
		$(this).siblings().removeClass("active");
		$(this).addClass("active")
	})

	//模式选择设定start
	//固定目标模式
	$("#calForExpert").on('click', function() {
		//解除和锁定输入框
		$("#resourceRatio input:not(.sleepData)").attr("disabled", "disabled");
		$("#mainDataBox input").removeAttr("disabled");
		calMode = 0
	});
	//固定比例模式
	$("#calForRatio").on('click', function() {
		//解除和锁定输入框
		$("#resourceRatio input:not(.sleepData)").removeAttr("disabled");
		$("#mainDataBox input").attr("disabled", "disabled");
		calMode = 1
	});
	//固定等级模式
	$("#calBasedOnLevel").on('click', function() {
		//解除和锁定输入框
		$("#mainDataBox .exceptResource:not(:eq(0))").attr("disabled", "disabled");
		$("#resourceRatio input:not(.sleepData)").attr("disabled", "disabled");
		$("#mainDataBox .now").removeAttr("disabled");
		$("#mainDataBox .exceptResource:eq(0)").removeAttr("disabled");
		$("#mainDataBox .exceptResource:not(:eq(0))").val($("#mainDataBox .exceptResource:eq(0)").val());
		calRatio();
		calMode = 2;
	});
	//模式选择设定end

	//睡眠模式设定
	$("#sleepModeActivate").on("click", function() {
		sleepMode = 1;
		$("#resourceRatio .sleepData").removeAttr("disabled")
	})
	$("#sleepModeDisable").on("click", function() {
		sleepMode = 0;
		$("#resourceRatio .sleepData").attr("disabled", "disabled");
	})

	//自动计算比例函数

	function calRatio() {
		var balance = new Array(4);
		var minnum = 1;
		if(calMode==2){
					$("#mainDataBox .exceptResource:not(:eq(0))").val($("#mainDataBox .exceptResource:eq(0)").val());
		}
		$.each(balance, function(index, value) {
			balance[index] = $("#mainDataBox>tr").eq(index).find("input").eq(1).val() - $("#mainDataBox>tr").eq(index).find("input").eq(0).val();
			if(balance[index] <= 0) {
				balance[index] = 0;
			} else {
				minnum = balance[index];
			};
		})
		$.each(balance, function(index, value) {
			if(balance[index] > 0) {
				if(minnum > balance[index]) {
					minnum = balance[index];
				}
			}
		})
		$.each(balance, function(index, value) {
			$("#resourceRatio input").eq(index).val(balance[index] / minnum);
		})
	}

	$("#mainDataBox input").on("input", calRatio);

	//计算代码start
	$("#theCalBtn").on("click", function() {

		//清空数据
		$(".supportLine td").text("-");
		$(".SummarySupport th:not(.name)").text("");

		//验证类别
		function calForClass(myselector) {
			var ratio = new Array(4);
			var maxfour = new Array(-1, -1, -1, -1);

			//取得系统比例
			$.each(ratio, function(index, data) {
				ratio[index] = $("#resourceRatio input").eq(index).val()
				if(ratio[index] == 0) {
					ratio[index] = 0.01
				}
			})

			//遍历资源数列
			$.each(stage, function(indexouter, dataouter) {
				stage[indexouter][6] = 0
				//取得附件序号
				$(".appendixChoice a").each(function(appendixIndex) {
					if($(this).attr('class').indexOf('active') != -1) {
						if(($(myselector).attr('class') == "normalSupport") || ($("#resourceRatio .sleepData").val() < stage[indexouter][5])) {
							stage[indexouter][6] = stage[indexouter][6] + appendix[indexouter][appendixIndex] / stage[indexouter][5];
						} else {
							stage[indexouter][6] = stage[indexouter][6] + appendix[indexouter][appendixIndex] / $("#resourceRatio .sleepData").val();
						}
					}
				})
				//计算加权分数
				$.each(ratio, function(indexinner, datainner) {
					if(($(myselector).attr('class') == "normalSupport") || ($("#resourceRatio .sleepData").val() < stage[indexouter][5])) {
						stage[indexouter][6] = stage[indexouter][6] + datainner * stage[indexouter][indexinner + 1] / stage[indexouter][5];
					} else {
						stage[indexouter][6] = stage[indexouter][6] + datainner * stage[indexouter][indexinner + 1] / $("#resourceRatio .sleepData").val();
					}
				});

				//记录最大值索引
				$.each($.makeArray($(myselector).find(".supportLine")).reverse(), function(supportNum, formObject) {
					if(stage[indexouter][6] > maxfour[supportNum]) {
						//遍历数据填入排序框
						if(supportNum == 0) {
							$.each($.makeArray($(formObject).find("td")), function(boxnumber, box) {
								if(boxnumber == 0 || boxnumber == 5) {
									$(box).text(stage[indexouter][boxnumber]);
								} else {
									if(($(myselector).attr('class') == "normalSupport") || ($("#resourceRatio .sleepData").val() < stage[indexouter][5])) {
										$(box).text(Math.round(stage[indexouter][boxnumber] / stage[indexouter][5] * 10) / 10);
									} else {
										$(box).text(Math.round(stage[indexouter][boxnumber] / $("#resourceRatio .sleepData").val() * 10) / 10);
									}
								}
							})
							maxfour[supportNum] = stage[indexouter][6];
						} else {
							$(formObject).next().insertBefore(formObject);
							maxfour[supportNum - 1] = maxfour[supportNum];
							maxfour[supportNum] = stage[indexouter][6];
						}
					}
				})
			})

			//求和
			$(myselector).find(".SummarySupport>th").each(function(index, object) {
				if(index > 0 && index < 5) {
					var cache = 0
					$(myselector).find(".supportLine ." + $(this).attr("class")).each(function() {
						cache = cache + parseFloat($(this).text());
					})
					$(this).text(Math.round(cache * 10) / 10);
				} else if(index == 5) {
					var cache = 0
					$(myselector).find(".supportLine ." + $(this).attr("class")).each(function() {
						if($(this).text() > cache) {
							cache = $(this).text()
						}
					})
					$(this).text(cache);
				}
			})

			//加附件
			var appendAppendix = new Array("资源", "人形契约", "建造契约", "快速建造", "快速修理", "采购币");
			var appendQuanity = new Array(0, 0, 0, 0, 0, 0);
			$(myselector).find(".supportLine .name").each(function() {
				var supportName = $(this)
				$.each(stage, function(stageIndex, stageData) {
					if(supportName.text() == stageData[0]) {
						$.each(appendix[stageIndex], function(appendIndex, appendData) {
							if(($(myselector).attr('class') == "normalSupport") || ($("#resourceRatio .sleepData").val() < stage[stageIndex][5])) {
								appendQuanity[appendIndex] = appendQuanity[appendIndex] + appendData / 1000000 / stage[stageIndex][5]
							} else {
								appendQuanity[appendIndex] = appendQuanity[appendIndex] + appendData / 1000000 / $("#resourceRatio .sleepData").val();
							}
						})
					}
				})
			})
			$(myselector).find(".delete").remove();
			if($(myselector).attr('class') == "normalSupport") {
				$(".delete").remove();
			}
			$.each(appendAppendix, function(index) {
				if(appendQuanity[index] != 0) {
					$(myselector).append("<tr class='delete'><td colspan='2'>" + appendAppendix[index] + "</td><td colspan='4'>" + Math.round(appendQuanity[index] * 10000) / 10000 + "个/小时</td></tr>")
				}
			})

		}

		//普通模式类
		calForClass(".normalSupport")

		if(sleepMode == 1) {
			calForClass(".sleepSupport")
		}

	})

	//自启动的括号
})