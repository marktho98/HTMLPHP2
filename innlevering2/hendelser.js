

function fokus(element)
{
  element.style.background="yellow";
}  

function mistetFokus(element)
{
  element.style.background="white";
}  

function musInn(element)
{
  document.getElementById("melding").style.color="blue";	
  if (element==document.getElementById("klassekode"))
    {
      document.getElementById("melding").innerHTML="Klassekode skal bestå av 3 tegn (2 bokstaver og 1 siffer)";
    }
  if (element==document.getElementById("klassenavn"))
    {
      document.getElementById("melding").innerHTML="Klassenavn må fylles ut";
    }
  if (element==document.getElementById("brukernavn"))
    {
      document.getElementById("melding").innerHTML="Brukernavn må fylles ut";
    }
  if (element==document.getElementById("fornavn"))
    {
      document.getElementById("melding").innerHTML="Fornavn må fylles ut";
    }
  if (element==document.getElementById("etternavn"))
    {
      document.getElementById("melding").innerHTML="Etternavn må fylles ut";
    }
}  

function musUt()
{
  document.getElementById("melding").innerHTML="";
}  

function endreTilStoreBokstaver(element)
{
  element.value=element.value.toUpperCase();
}  

function fjernMelding()
{
  document.getElementById("melding").innerHTML="";  
}  

function velgKlassekode(klassekode)
{
  document.getElementById("klassekode").value=postnr;
  fjernMelding();
}