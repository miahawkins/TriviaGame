
//Global Variables
var correctAnswer = 0;
var incorrect = 5;
var unanswered = 5;
var count = 30;

//begin js when page has loaded
$(document).ready(function(){
	//upon refreshing page hide the trivia and results content
	$(".content").hide();
	$(".done").hide();

	//upon clicking start
	$("#start").click(function() {

		//hide the start button
		$("#start").hide();

		//show trivia questions
		$(".content").show();

		startCountdown();

	});
	//timer function
	function countdown() {
		if (count > 0) {
			count--;
			$(".timer").html("Time Remaining: " + count + " Seconds");
		}
		else {
			results();
		}	
	}
	function startCountdown() {
		setInterval(countdown, 1000)
	}

	function results() {
		//hide the trivia questions
		$(".content").hide();
		//show the results
		$(".done").show();
		console.log($('input[name=firstQuestion]:checked').val());
		

		//FIRST QUESTION: if the correct answer is chosen for the question:
		//increase correct answer by 1
		//decrease incorrect answers by 1
		//decrease the amound of unanswered by 1
		//incorrect answers:sum of incorrectly answered and unanswered
		if ($('input[name=firstQuestion]:checked').val() === "Paris") {
			correctAnswer++;
			incorrect--;
			unanswered--;
		}
		//for each wrong answer decrease unanswered question by 1
		if ($('input[name=firstQuestion]:checked').val() === "London") {
			unanswered--;
		}
		if ($('input[name=firstQuestion]:checked').val() === "Madrid") {
			unanswered--;
		}
		if ($('input[name=firstQuestion]:checked').val() === "Rome") {
			unanswered--;
		}


		//SECOND QUESTION: if the correct answer is chosen for the question:
		//increase correct answer by 1
		//decrease incorrect answers by 1
		//decrease the amound of unanswered by 1
		//incorrect answers:sum of incorrectly answered and unanswered
		if ($('input[name=secondQuestion]:checked').val() === "longest") {
			correctAnswer++;
			incorrect--;
			unanswered--;
		}
		//for each wrong answer decrease unanswered question by 1
		if ($('input[name=secondQuestion]:checked').val() === "widest") {
			unanswered--;
		}
		if ($('input[name=secondQuestion]:checked').val() === "fastest") {
			unanswered--;
		}
		if ($('input[name=secondQuestion]:checked').val() === "muddiest") {
			unanswered--;
		}


		//THIRD QUESTION: if the correct answer is chosen for the question:
		//increase correct answer by 1
		//decrease incorrect answers by 1
		//decrease the amound of unanswered by 1
		//incorrect answers:sum of incorrectly answered and unanswered
		if ($('input[name=thirdQuestion]:checked').val() === "all") {
			correctAnswer++;
			incorrect--;
			unanswered--;
		}
		//for each wrong answer decrease unanswered question by 1
		if ($('input[name=thirdQuestion]:checked').val() === "plains") {
			unanswered--;
		}
		if ($('input[name=thirdQuestion]:checked').val() === "cityOf") {
			unanswered--;
		}
		if ($('input[name=thirdQuestion]:checked').val() === "Jazz") {
			unanswered--;
		}


		//FOURTH QUESTION: if the correct answer is chosen for the question:
		//increase correct answer by 1
		//decrease incorrect answers by 1
		//decrease the amound of unanswered by 1
		//incorrect answers:sum of incorrectly answered and unanswered
		if ($('input[name=fourthQuestion]:checked').val() === "boulevards") {
			correctAnswer++;
			incorrect--;
			unanswered--;
		}
		//for each wrong answer decrease unanswered question by 1
		if ($('input[name=fourthQuestion]:checked').val() === "fountains") {
			unanswered--;

		}
		if ($('input[name=fourthQuestion]:checked').val() === "statues") {
			unanswered--;
		}
		if ($('input[name=fourthQuestion]:checked').val() === "wineries") {
			unanswered--;
		}


		//FIFTH QUESTION: if the correct answer is chosen for the question:
		//increase correct answer by 1
		//decrease incorrect answers by 1
		//decrease the amound of unanswered by 1
		//incorrect answers:sum of incorrectly answered and unanswered
		if ($('input[name=fifthQuestion]:checked').val() === "missouri") {
			correctAnswer++;
			incorrect--;
			unanswered--;
		}
		//for each wrong answer decrease unanswered question by 1
		if ($('input[name=fifthQuestion]:checked').val() === "kansas") {
			unanswered--;
		}

		//display the number correct, incorrect, and unanswered questions in the results
		$(".correctlyAnswered").html("Correct Answers: " + correctAnswer);
		$(".incorrectlyAnswered").html("Incorrect Answers: " + incorrect);
		$(".unanswered").html("Unanswered: " + unanswered);

	}

	//upon clicking the done button
	$("#doneButton").click(function() {
		results();
	});
});


