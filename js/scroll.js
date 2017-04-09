// スクロールで上に戻るボタン
$(function() {
	// 「TOPに戻る」ボタンがクリックされた時の動きを指定します。
	$("#scroll_to_top").click(function() {
	// ページの一番上までスクロールさせます。
	// $('body, html').scrollTop(0);
	$('body').animate({scrollTop: 0}, 300, 'linear');
	// animate=>アニメーション
	// animate({どうするか？},何ミリ秒かけて？,)
	// http://semooh.jp/jquery/api/effects/animate/params%2C+%5Bduration%5D%2C+%5Beasing%5D%2C+%5Bcallback%5D/
	});
});
