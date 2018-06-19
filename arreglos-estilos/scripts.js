/*
	By: ErnestoMG @ Jun 18,2018
*/
$(function() {
	
	//Convert simple button to fashionable button
	$(".btn").wrap('<div class="css_button_outer_box"><div class="css_button_inner_box"><div class="css_button_single">★ <b></b> ★</div></div></div>');
	$(".btn").each(function() {
		 $(this).parent().parent().parent().parent().attr('id', $(this).attr('id'));
		 $(this).removeAttr('id');
	});
	
	//Buttons
	$("#btn_checkout").click(function(e) {
        alert("checkout!");
    });
	
	$("#btn_array1").click(function(e) {
        sumaArray([1, 4, 3, 0]);
    });
	
	$("#btn_array2").click(function(e) {
       sumaArray([1, 2, [5, 8], 4]);
    });
	
	$("#btn_array3").click(function(e) {
       sumaArray([0, [6, 2], null, 7, 1]);
    });
	
	$("#btn_array4").click(function(e) {
       sumaArray(["blue", ["red", 2], null, "yellow", 1]);
    });
	
});

/*Methods*/
function sumaArray(array){
	if(Array.isArray(array)){
		
		//Flatten arrayn
		var flatten_array = (a,b) =>a.concat(b);
		var single_array=array.reduce(flatten_array, []);
		
		//Add numbers
		var add = (a,b) =>onlyNumbers(a)+onlyNumbers(b);
		
		alert(single_array.reduce(add));
	}else{
		alert("Not an array!");	
	}
}

/*Auxiliars*/
function onlyNumbers(number){
	return isNaN(number) ? 0 : number
}