$(function(event){
	console.log("working");
	
	var innerBackGround = $(".innerBackGround");
	var canvasDiv = $(".canvasDiv");

	canvasDiv.click(function(e){
		var pointer = $("<span>").css({ //adds a colours span to the page
                            'position':'absolute',
                            'background-color':'#ff00ff',
                            'width':'10px',
                            'height':'10px',
                            top: e.pageY ,    //offsets using x and y coords
                            left: e.pageX   //offsets
                       });

        $(this).append(pointer); //appends the span to the page
        
    });

	//Mousemove event
	// canvasDiv.mousemove(function(e){
	//   	var pageCoords = "( " + e.pageX + ", " + e.pageY + " )";
	//   	console.log( pageCoords );//prints the cords of the mouse on the canvas
	// 	});


	canvasDiv.click(function(e){
		console.log(e.pageX , e.pageY); //prints click cords
	})

});

