$(document).ready(function(){ 
		let local_score  = 0,
		globalscore = 0,
		tet;

		for(let i = 0; i < 20; i++){
			$(`.tab:eq(${i})`).attr('data-action', 'confirm');
		}

		$(".answer:nth-child(1) > input[name='test_radio_tab']").attr('data-value', '0');
		$(".answer:nth-child(2) > input[name='test_radio_tab']").attr('data-value', '1');
		$(".answer:nth-child(3) > input[name='test_radio_tab']").attr('data-value', '2');
		$(".answer:nth-child(4) > input[name='test_radio_tab']").attr('data-value', '3');


		$("input[name='test_radio_tab']").click(function(){
			local_score = +$(this).attr('data-value');
		});
		$('.tab[data-action="confirm"]').click(function(){
			globalscore += local_score;
			local_score = 0;
		});
		$('#get_res').click(function(){
			$( ".results_text").html("Ваш результат:<br />" + globalscore);
		});
		tet = globalscore;

		get_res.onclick = function(get_res) {
			let x;
			x = globalscore;
			if (globalscore < 20) {
				document.querySelector(".tex_1").style.color="red";
			} else if (globalscore < 30) {
	
				document.querySelector(".tex_2").style.color="red";
			} else {
	
				document.querySelector(".tex_3").style.color="red";
			}
		}
}
);