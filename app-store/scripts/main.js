
/**
 * tab
 * 
 */
$('.ge-comm-tab .tab-item').on('click', function() {
	
	$(this).addClass('curr').siblings().removeClass('curr');
	var tab_index = $(this).index();
	$('.ge-comm-tabcon .tabcon-item').eq(tab_index).addClass('curr').siblings().removeClass('curr');
});



/**
 * 配送弹窗
 */
function showLayer1(){
	var dia = new geDialog({
		message:'<form class="distribution_input"><div class="ge-flex"><label for="name">配送人: </label><input type="text" placeholder="配送人姓名"></div><div class="ge-flex"><label for="name">手机号: </label><input type="tel" placeholder="配送人手机号"></div><div class="ge-flex"><label for="name" class="text-gray">备注:</label><input type="text" ></div></form>',
		close_btn:true,
		opacity:0.4,
		coverClose:true,
		buttons:[
        	{
	          text:'开始配送',
	          type:'ok',
	          callback:function () {
	          	new geDialog({
	          		message:'已配送',
	          		delay:2000,
	          		coverClose:true,
	          	})
	            dia.close();
	          }
	        }
        ],
	});
}

/**
 * 抢单弹窗
 */
function showLayer2(){
	var dia = new geDialog({
		message:'<form class="brab-input"><div class="ge-flex ge-flex-vc"><div class="ge-check-main "></div><p class="check-content">即时送</p></div><div class="ge-flex ge-flex-vc checked"><div class="ge-check-main "></div><p class="check-content">普通快递</p></div></form>',
		close_btn:true,
		opacity:0.4,
		coverClose:true,
		buttons:[
        	{
	          text:'抢单',
	          type:'ok',
	          callback:function () {
	          	new geDialog({
	          		message:'抢单失败',
	          		delay:2000,
	          		coverClose:true,
	          	})
	            dia.close();
	          }
	        }
        ],
	});

	$('.brab-input .ge-flex').click(function() {
		$(this).addClass('checked').siblings().removeClass('checked');
	});
}

