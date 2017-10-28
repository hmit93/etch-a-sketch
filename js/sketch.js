$(document).ready(function(){
    
    setSquarePerSide(64);
    
    $('table').on('mouseenter', '.square', function(){
        $(this).css({"background-color": getRandomColor()} );
    });
    
    $('button').on('click', function(){
    
        let inputCheck = false;
        
        do
        {   
            let squarePerSide = prompt("Please enter the number of square per side (1 - 64)");
        
            if(squarePerSide == null)
            {
                  inputCheck = true;  
            }
            else if(squarePerSide === "" || squarePerSide <= 0 || squarePerSide > 64 || isNaN(squarePerSide))
            {
                alert("Please enter a number between 1 and 64");
                
            } 
            else
            {
                inputCheck = true;
               
                $('tr').remove();
                $('table').addClass("sketchPad");
                setSquarePerSide(squarePerSide);
        
                $('table').on('mouseenter', '.square' , function(){
                    $(this).css({"background-color": getRandomColor()} );
                });
            }
        
        }while(inputCheck === false);
        
        
    });
    
    function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
    
    function setSquarePerSide(value)
    {
        value = +value;
        for(let i = 0; i < value; i++)
        {
            $('table').append($('<tr id="square-'+ i +'"></tr>'));
            for(let j = 0; j < value; j++)
            {
                $('#square-'+ i).append($('<td><div class="square">-</div></td>'));
            }
        }
    }
    
    
    
});