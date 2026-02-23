let popupInfo = `
<html>
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Alan+Sans:wght@300..900&display=swap" rel="stylesheet">
  <style>
    body {
        font-family: "Alan Sans", sans-serif;
        padding: 25px;
        background-color: #befbff;
        text-align: center;
    }
    .start, .stop, .main {
        font-family: "Alan Sans", sans-serif;
        padding: 10px;
        margin: 5px;
        width: 200px;
        border: 2px solid #000;
    }
    .start { background-color: #00e000; }
    .stop { background-color: #e00000 }
    .main { background-color: #48ffe1; }
  </style>
  </head>
  <body>
    <h1>FreeRice Farmer</h1>
    <button id="start-button" class="start">Start</button>
    <button id="stop-button" class="stop">Stop</button>
    <label>Speed Level:</label>
    <select id="choice" class="main">
        <option value="answer">Auto Answer</option>
        <option value="feedback">Give Feedback</option>
    </select>
    <script>
        choice.addEventListener('onchange', function() {
            if(choice.value === 'answer') {
            
            } else {

            }
        });
    </script>
  </body>
</html>
`
let plusWindow = window.open('', "freericePlusWindow", width=500, height=700);
plusWindow.document.open();
plusWindow.document.write(popupInfo);
plusWindow.document.close();
