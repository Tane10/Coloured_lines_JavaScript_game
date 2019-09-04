$(function (event){ //on open page event listener 
	
	//color vars for white and red
	var White = $(".White").css("background-color");
	var Red = $(".FinishBlock").css("background-color");

	//calls the the button classes
	var startButton = $(".startButton");
	var howToButton = $(".howToButton");
	var quitButton = $(".quitButton");
	var quitButtonModal = $(".quitButtonModal");
	var retryButton = $(".retryButtonModal");

	//Level urls and win page
	var level_1 = "/Users/tech-a25/Sparta_GameProject/index.html"
	var level_2 = '/Users/tech-a25/Sparta_GameProject/level_2.html'
	var level_3 = '/Users/tech-a25/Sparta_GameProject/level_3.html'
	var WinPage = '/Users/tech-a25/Sparta_GameProject/win.html'

	//pixel grid variable
	var pixelGrid = $(".pixelGrid"); 

	//table size 100
	var tableSize = $("td").length;

	//mouse up var
	var mouseIsUp = false;

	

	function resetGrid(){
		for(var i = 0; i < tableSize; i++){ //reads table size
			//checks each td colour
			$($("td")[i]).css("background-color","white")
		
		}
		//sets every class of red to the colour red
		$(".Red").css("background-color", "red")

		//sets every class of red to the colour red
		$(".Green").css("background-color", "green")
	}

	// Get the modal
	var modal = document.getElementById('myModal');

	// Get the button that opens the modal
	var btn = document.getElementsByClassName("innerDiv")[0];


	// When the user clicks on the button, open the modal 
	var modalClick = function() {
	    modal.style.display = "block";
	    mouseIsUp = true;
	}

	 function retryCloseIt(event) {
	        modal.style.display = "none";
	        resetGrid();
	}

	

	//Button funtions
	//Start button takes you to the first page
	startButton.click(function(event){
		window.location.href='/Users/tech-a25/Sparta_GameProject/index.html';
	});

	//How To button switches the image and to how to image and moves the start button down to new postion
	howToButton.click(function(event){
		var HowToImage = $(".homepage").attr("src","images/coloured_lines_howTo_V2.png");
		startButton.animate({top: "80%"});
		howToButton.off()
	});

	//quit button takes you to the video of the alpca only works on the start page and how to
	quitButton.click(function(event){
		window.location.href='/Users/tech-a25/Sparta_GameProject/quit_vid.html';
	})

	//quit button takes you to the video of the alpca works with the modal
	quitButtonModal.click(function(event){
		window.location.href='/Users/tech-a25/Sparta_GameProject/quit_vid.html';
	})

	//retry button resets the grid and closes the modal
	retryButton.click(function(event){
		retryCloseIt(event);
	})


	/*DONT NOT TOUCH ANYTHING BELOW THIS LINE OR YOU WILL BREAK THE DAMN GAME FOOL
	______________________________________________________________________________ */

	//on mouse click event you can only click on startblock once
	$(".StartBlock").mousedown(function(event){
		mouseIsUp = false;
		
		

		//mousemove event on the td uses this to paint the color of the cell
		$('td').mousemove(function(event){

			//sets mouse up to false once the mouse starts to move over the td's
			if(mouseIsUp == false) {
				//if the colour is green then start the modal on the screen
				if($(this).css("background-color") === $(".Green").css("background-color")){
					modalClick(); //called modalClick cause its another word do doing things 
					
					
				}else {
						//sets the colour the red
						$(this).css("background-color", "red");
				}
			}

		});

	});


	
	$('td').mouseup(function(event){
		mouseIsUp = true;


		/*checks if the html = finishblock if yes you win
		if the inner html is not the same then you lose*/

		if($(this).html() !== $(".FinishBlock").html()){
			modalClick();	
		}
		//checks if all the whites are red if not you can't win
		//if they are all red and your on the finish square you win
		else if($(".White").css("background-color") === $(".FinishBlock").css("background-color")){
			//if the url is the first level then take you to the second
			if(window.location.href == "file:///Users/tech-a25/Sparta_GameProject/index.html" ){
				window.location.href = level_2;

			} else if(window.location.href == "file:///Users/tech-a25/Sparta_GameProject/level_2.html") {
				window.location.href = level_3;
				//if url is level 2 then take to level 3
			} else{
				window.location.href = WinPage;
				//if you at level 3 then take me to win page

			}
		}
		
		
		

	});
	



});
