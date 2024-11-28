canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

//Define el ancho y alto de la imagen del explorador.
Frisk_ancho=100;
Frisk_alto=100;

background_image = "Golden_flowers.jpg";

Frisk_image = "Frisk.gif";

Frisk_x = 10;
Frisk_y = 10;

//Crea la función "add()"
 
background_imgTag= new Image();	                        //Define la variable con una nueva imagen
background_imgTag.onload=uploadBackground;              // Define una función para cargar esta variable
background_imgTag.src= background_image;             // Carga la imagen

Frisk_imgTag = new Image();                                         //Define la variable con una nueva imagen
Frisk_imgTag.onload=uploadFrisk;	                                  // Define una función para cargar esta variable
Frisk_imgTag.src=Frisk_image;	                                     // Carga la imagen

//Crea una función "uploadBackground()".
  function uploadBackground(){
  ctx.drawImage(background_imgTag,0,0,canvas.width, canvas.height);   //Dibuja la imagen de fondo
}                                        

//Crea una función "uploadrover()".
function uploadFrisk(){
    ctx.drawImage(Frisk_imgTag, Frisk_x, Frisk_y, Frisk_alto, Frisk_ancho)
}
                                        //Dibuja la imagen del explorador


window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
    //Escribe el codigo si keypressed es up (arriba). El valor ASCIII para "arriba" es 38.
		if(keyPressed=='38'){
      up();
    }
    if(keyPressed=='40'){
      down();
    }
		if(keyPressed=='37'){
      left();
    }
		if(keyPressed=='39'){
      right();
    }

     //Escribe el codigo si keypressed es down (abajo). El valor ASCIII para "abajo" es 40.
		




    //Actividad adicional
    //Escribe el código para cuando las teclas derecha e izquierda sean presionadas. 
}

function up(){
if (Frisk_y >=0){
  Frisk_y= Frisk_y -10; //
  uploadBackground(); //se recarga la imagen de fondo
  uploadFrisk(); //se recarga la imagen de Frisk
}
}
function down(){
	if(Frisk_y <=500){
    Frisk_y= Frisk_y +10; //
    uploadBackground(); //se recarga la imagen de fondo
    uploadFrisk(); //se recarga la imagen de Frisk
  }
}
function right(){
	if(Frisk_x >=0 && Frisk_x <=700){
    Frisk_x= Frisk_x +10;
    uploadBackground();
    uploadFrisk();
  }
}
function left(){
  if(Frisk_x <=710 && Frisk_x >=10){
    Frisk_x= Frisk_x -10;
    console.log(Frisk_x);
    uploadBackground();
    uploadFrisk();
  }
}


