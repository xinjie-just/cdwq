
/*产品菜单的显示与隐藏*/
$("#productCategoriesMenu").click(function(){
	$("#productCategoriesBox").show(400);
});
$("#tipsBox").click(function(){
	$("#productCategoriesBox").hide(400);
});
/*产品菜单的尺寸*/
$("#productCategoriesBox").height(window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight);
$("#productCategories").height($("#productCategoriesBox").height());
$("#tipsBox").height($("#productCategoriesBox").height());


/*===分页===*/
// dedecms 模板下新增脚本
// 去除分页时 select 的宽度
$(".pagination > li > select").css("width", "auto");
// 对 li 没有 select 子元素时，设置样式
$(".pagination > li:has(select)").css({
	paddingRight: 0,
	paddingLeft: 0,
	border: "none"
});
$(".pagination > li:has(a)").css({
	paddingRight: 0,
	paddingLeft: 0
});
$(".pagination > li.thisclass + li").css("marginLeft", 0);

/*===设置文章格式===*/
$(".details-article").css("fontSize", "14px");
// 删除图片宽高属性
$(".details-article img").removeAttr("width");
$(".details-article img").removeAttr("height");
// 设置图片样式
$(".details-article img").css({
	display: "block",
	maxWidth: "100%",
	height: "auto",
	margin: "15px auto 0"
});
$(".details-article img + img").css("marginTop", "8px");
// 设置段落样式
$(".details-article > div, .details-article > p").css({
	fontSize: "14px",
	textIndent: "2.2em",
	letterSpacing: ".1em",
	lineHeight: 1.8,
	marginTop: "7px",
	textAlign: "justify",
	wordWrap: "breakWord"	
});
// 删除段落中多余的换行
$(".details-article:has(br) br").remove();
$(".details-article > div:has(br) br").remove();


