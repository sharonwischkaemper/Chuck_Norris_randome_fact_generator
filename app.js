  $(document).ready(function(){
      
      $('#get_content').click(function(){
          $.get('http://api.icndb.com/jokes/random',function(data){
               console.dir(data);
               var obj_props = data.value.joke;
                $('#content_div').html(obj_props);
          
        
    

         }); //close get()
      }); // close click function
   });// close onload














