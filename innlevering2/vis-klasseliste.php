<!DOCTYPE html>
<html lang="no">
<head>
  <meta charset="utf-8">
  <title>Klasselister | Obligatorisk oppgave 2</title>
  <link rel="stylesheet" href="style.css">
  <script src="hendelser.js"> </script> 
  <script src="sok.js"></script>
</head>
<body>

<div class="header">
  <h2>Obligatorisk oppgave 2</h2>
</div>


<div class="meny">
  <a href="index.html">Hjem</a>
  <p>KLASSE</p>
  <a href="registrer-klasse.php">Registrer klasse</a>
  <a href="vis-alle-klasser.php">Vis alle klasser</a>
  <p>STUDENT</p>
  <a href="registrer-student.php">Registrer student</a>
  <a href="vis-alle-studenter.php">Vis alle studenter</a>
  <a class="active" href="vis-klasseliste.php">Vis klasseliste</a>
</div>


<div class="innhold">
    <h1>Vis klasseliste</h1>
    
    <div class="inputData">
    <form method="post" action="" id="klasseliste" name="klasseliste">
    <label>Klassekode </label><input type="text" id="klassekode" name="klassekode" onKeyUp="vis(this.value)" onFocus="fokus(this)" onBlur="mistetFokus(this)" onMouseOver="musInn(this)" onMouseOut="musUt()" onChange="endreTilStoreBokstaver(this)" autocomplete="off"/> <br />
    </div>
        <input type="reset" value="Nullstill" id="nullstill" name="nullstill" onClick="fjernMelding()" /> <br />
    </form>
    <br />
    <div id="melding"></div>


<div class="footer">
    <p>@2021 laget av Markus Thoresens</p>
</div>

</body>
</html>