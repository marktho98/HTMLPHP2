<!DOCTYPE html>
<html lang="no">
<head>
  <meta charset="utf-8">
  <title>Registrere student | Obligatorisk oppgave 2</title>
  <link rel="stylesheet" href="style.css">
  <script src="hendelser.js"> </script> 
  <script src="validering.js"> </script> 
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
    <a class="active" href="registrer-student.php">Registrer student</a>
    <a href="vis-alle-studenter.php">Vis alle studenter</a>
    <a href="vis-klasseliste.php">Vis klasseliste</a>
  </div>

  <div class="innhold">
    <h1>Registrere student</h1>
    
    <div class="inputData">
    <form method="post" action="" id="registrerStudentSkjema" name="registrerStudentSkjema" onSubmit="return validerRegistrerStudent()">
    <label>Brukernavn </label><input type="text" id="brukernavn" name="brukernavn" autocomplete="off" onFocus="fokus(this)" onBlur="mistetFokus(this)" onMouseOver="musInn(this)" onMouseOut="musUt()" /> <br/>
    <label>Fornavn    </label><input type="text" id="fornavn"    name="fornavn"    autocomplete="off" onFocus="fokus(this)" onBlur="mistetFokus(this)" onMouseOver="musInn(this)" onMouseOut="musUt()" /> <br/>
    <label>Etternavn  </label><input type="text" id="etternavn"  name="etternavn"  autocomplete="off" onFocus="fokus(this)" onBlur="mistetFokus(this)" onMouseOver="musInn(this)" onMouseOut="musUt()" /> <br/>
    <label>Klassekode </label><input type="text" id="klassekode" name="klassekode" autocomplete="off" onKeyUp="vis(this.value)" onFocus="fokus(this)" onBlur="mistetFokus(this)" onMouseOver="musInn(this)" onMouseOut="musUt()" onChange="endreTilStoreBokstaver(this)"/> <br />
    </div>
    <input type="submit" value="Registrer student" id="registrerStudentKnapp" name="registrerStudentKnapp" /> 
    <input type="reset" value="Nullstill" id="nullstill" name="nullstill" onClick="fjernMelding()"/> <br />
    </form><div id="melding">


  </div> 
    
  <div class="footer">
  <p>©2021 laget av Markus Thoresen</p>
  </div>    
    
</body>
</html>