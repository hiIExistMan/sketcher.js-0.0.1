let sketcher = {
   canvas: document.getElementById('canvas'),
   c: this.canvas.getContext('2d'),
   mouseX: 0,
   mouseY: 0,
   loop: function(){
      
   },
   mousePressed: function(){
      
   },
   keyPressed: function(){
      
   },
   loadText: async function(dataName){
      const responce = await fetch(dataName);
      return responce.text();
   },
   
   text: function(string, x, y){
      this.c.fillText(string, x, y);
   },
  
  size: function(width, height){
     this.canvas.width = width;
     this.canvas.height = height;
     this.c = this.canvas.getContext('2d');
  },
  
  rectangle: function(x, y, w, h){
     this.c.fillRect(x, y, w, h);
   //  this.c.fill();
   //  this.c.stroke();
  },

  circle: function(x, y, r){
     this.c.beginPath();
     this.c.arc(x, y, r, 0, Math.PI*2, false);
     this.c.stroke();
     this.c.fill();
  },
  
  line: function(x1, y1, x2, y2){
     this.c.beginPath();
     this.c.moveTo(x1, y1);
     this.c.lineTo(x2, y2);
     this.c.stroke();
  },
  
  stroke: function(cssColor){
     this.c.strokeStyle = cssColor;
  },
  
  fill: function(cssColor){
     this.c.fillStyle = cssColor;
  },
  
  strokeWeight: function(w){
     this.c.lineWidth = w;
  },
  
   background: function(r=0, g=0, b=0, a=1){
      let temp = this.c.fillStyle;
      this.c.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`;
      this.c.fillRect(0, 0, this.canvas.width, this.canvas.height);
      this.c.fillStyle = temp;
   }
};


function looperForSketcher(){
   requestAnimationFrame(looperForSketcher);
   sketcher.loop();
}

document.body.onkeyup = function(e){
   sketcher.keyCode = e.keyCode;
   sketcher.keyPressed();
};

window.addEventListener('mousemove', function(event){
   sketcher.mouseX = event.x;
   sketcher.mouseY = event.y;
});

window.addEventListener('mousedown', function(event){
   sketcher.mousePressed();
});

looperForSketcher();
console.log('sketcher loaded!');