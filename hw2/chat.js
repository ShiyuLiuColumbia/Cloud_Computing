window.onload = function () {
    var portrait_position = 0;
    var send_btn = document.getElementById('send_btn');
    var send_txt = document.getElementById('send_txt');
    var chat_ul = document.getElementById('chat_ul');
    var chat_span = chat_ul.getElementsByTagName('span');

    window.setInterval (function(){
        chat_ul.scrollTop = chat_ul.scrollHeight
    }, 20);
    
      $("input").keydown(function() {
             if (event.keyCode == "13") {//keyCode=13 is enter 
                 $('#send_btn').click();
             }
         });

    send_btn.onclick = function () {
    	var input = $("#send_txt").val();
        if (send_txt.value == '') {
            alert("please input message");
        } else {
            chat_ul.innerHTML += '<li><span class="spanright">' + send_txt.value + '</span>';
           
        console.log(input);
        axios({
        url: "https://i3tog45cuj.execute-api.us-east-1.amazonaws.com/test/chatbot",
        method: 'POST',
        headers :{
            "X-Api-Key": "LEX4Wft4ZNaCF3yFeEb1caGD1Ha9o6ZxcrlqY8gf"
        },
        data: {
            "input": input
        },
        }).then(response => {
        console.log(response);
        chat_ul.innerHTML += '<li ><span class = "spanleft">' + response.data.body.substring(1,response.data.body.length-1)+ '</span>' + '</li>';
    }).catch(error => {
        console.log(error);
    });
    }
    $("#send_txt").val("")
    }
}
 



