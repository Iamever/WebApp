
/**
 * tab
 * 
 */
$('.ge-comm-tab .tab-item').on('click', function() {
	
	$(this).addClass('curr').siblings().removeClass('curr');
});