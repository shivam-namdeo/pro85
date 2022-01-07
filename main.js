canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

//Give specific height and width to the car image

background_image = "parkingLot.jpg";
greencar_image = "car2.png";
gw=75;
gh=100;
gx=5
gy=325


//Set initial position for a car image.

function add() {
	//upload car, and background images on the canvas.
	bimgTag = new Image();
bimgTag.onload = uploadBackground;
bimgTag.src = background_image;
gimgTag = new Image();
gimgTag.onload = uploadgreencar;
gimgTag.src = greencar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(bimgTag,0,0,canvas.width,canvas.height);
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(gimgTag,gx,gy,gw,gh);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
	if (gy>=0)
    {
        gy=gy-10;
        uploadBackground();
        uploadgreencar();

    }
}

function down()
{
	if (gy<=400)
    {
        gy=gy+10;
        uploadBackground();
        uploadgreencar();

    }
}

function left()
{
	if (gx>=0)
    {
        gx=gx-10;
        uploadBackground();
        uploadgreencar();

    }
}

function right()
{if (gx<=750)
    {
        gx=gx-+10;
        uploadBackground();
	          uploadgreencar();
	}
}
