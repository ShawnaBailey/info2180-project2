
window.onload = function(){
  var pieces;
  var y= 0;
  var x= 0;
  var count= 0;


  	var puzzleArea = document.getElementById('puzzlearea');
  	pieces = puzzleArea.getElementsByTagName('div');

  	for (var i=0; i<pieces.length; i++) {
      pieces[i].className = 'puzzlepiece';
      pieces[i].style.left = x + 'px';
      pieces[i].style.top = y + 'px';
      x+=100;
      count +=1;
      if (count %4==0){
        y+=100;
        x =0;
      };

  		pieces[i].style.backgroundPosition= '-' + pieces[i].style.left + ' ' + '-' + pieces[i].style.top;
  		pieces[i].onmouseover = function(){
  			if (checkMove(parseInt(this.innerHTML))){
          this.style.border = "3px solid red";
  				this.style.color = "#006600";
          this.style.textDecoration = "underline";
          this.style.backgroundImage=background.jpg;
  			}

  		};

  		pieces[i].onmouseout = function() {
      this.style.border = "2px solid black";
      this.style.color = "#000000";
      this.style.textDecoration = "none";
  		};
}
}
