  $(function() {
      function change(ui, vis) {
      var tempImages = ["./img/temp/temp_image_1.jpg", "./img/temp/temp_image_2.jpg", "./img/temp/temp_image_3.jpg", "./img/temp/temp_image_4.jpg", "./img/temp/temp_image_5.jpg", "./img/temp/temp_image_6.jpg",];
      var precipImages = ["./img/precip/precip_gif_1.jpg", "./img/precip/precip_gif_2.jpg", "./img/precip/precip_gif_3.jpg", "./img/precip/precip_gif_4.jpg", "./img/precip/precip_gif_5.jpg", "./img/precip/precip_gif_6.jpg", "./img/precip/precip_gif_7.jpg", "./img/precip/precip_gif_9.jpg", "/img/precip/precip_gif_1.jpg"];  
      
      console.log(ui.value);
      var buttonsVal = $("#measure_buttons input[name=options]:checked").val();
      if (buttonsVal == "temp") {
        console.log("Was temp!!!!")
        var randVar = Math.floor(Math.random() * tempImages.length);
        var picture = document.getElementsByClassName("pic")[0];
        console.log(picture);
        var visDiv = document.getElementsByClassName("vis")[0];
        visDiv.removeChild(picture);
        var newImg = document.createElement("img");
        newImg.className = "pic";
        newImg.src = tempImages[randVar];
        console.log(newImg);
        visDiv.appendChild(newImg);
        console.log("appended?");
      } else {
        console.log("was precip1!!!1")
        $("#vis").innerHTML=precipImages[Math.floor(Math.random() * precipImages.length)];
      }
      
    
    }
    
    $( "#slider" ).slider(
      {
        range: false,
        value: 2015,
        min: 1960,
        max: 2015,
        change: function(event, ui) {
          change(ui);
        },
        slide: function(event, ui) {
          $("#yearNum").text(ui.value);
        }
        
      }

    );
  });