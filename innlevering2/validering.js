

function validerKlassekode(klassekode)
{


  var lovligKlassekode=true;

  if (!klassekode)  
    {
      lovligKlassekode=false;
    }
  else if (klassekode.length!=3)  
    {
      lovligKlassekode=false;
    }
  else 
    {
      var tegn1=klassekode[0].toUpperCase();  
      var tegn2=klassekode[1].toUpperCase();  

      if(tegn1 < "A" || tegn1 > "Z" || tegn2 < "A" || tegn2 > "Z")
        {
          lovligKlassekode=false;
        }

      var siffre=klassekode.substr(2,1);

      if(isNaN(siffre))
        {
          lovligKlassekode=false;
        }
    }

  return lovligKlassekode;
}

function validerRegistrerKlasse()
{


  var klassekode=document.getElementById("klassekode").value;
  var klassenavn=document.getElementById("klassenavn").value;
  
  var lovligKlassekode=validerKlassekode(klassekode);
  
  var feilmelding="";

  if (!lovligKlassekode)  
    {
        feilmelding="Klassekode er ikke korrekt fylt ut <br />";
    }
  if (!klassenavn)  
    {
        feilmelding=feilmelding + "Klassenavn er ikke fylt ut <br />";
    }

  if (lovligKlassekode && klassenavn)  
    {
        return true;
    }
  else
    {
        document.getElementById("melding").style.color="red";	
        document.getElementById("melding").innerHTML=feilmelding;	
        return false;
    }	
} 

function validerRegistrerStudent()
{


  var brukernavn=document.getElementById("brukernavn").value;
  var fornavn=document.getElementById("fornavn").value;
  var etternavn=document.getElementById("etternavn").value;
  var klassekode=document.getElementById("klassekode").value;
  
  var lovligKlassekode=validerKlassekode(klassekode);

  var feilmelding="";

  if (!brukernavn)  
    {
        feilmelding="Brukernavn er ikke fylt ut <br />";
    }
  if (!fornavn)  
    {
        feilmelding=feilmelding + "Fornavn er ikke fylt ut <br />";
    }
  if (!etternavn)  
    {
        feilmelding=feilmelding + "Etternavn er ikke fylt ut <br />";
    }
  if (!lovligKlassekode)  
    {
        feilmelding=feilmelding + "Klassekode er ikke korrekt fylt ut <br />";
    }

  if (brukernavn && fornavn && etternavn && lovligKlassekode)  
    {
        return true;
    }
  else
    {
        document.getElementById("melding").style.color="red";	
        document.getElementById("melding").innerHTML=feilmelding;	
        return false;
    }	
} 

function validerVisKlasse()
{


  var klassekode=document.getElementById("klassekode").value;
  
  var lovligKlassekode=validerKlassekode(klassekode);
  
  var feilmelding="";

  if (!lovligKlassekode)  
    {
        feilmelding="Klassekode er ikke korrekt fylt ut <br />";
    }

  if (lovligKlassekode)  
    {
        return true;
    }
  else
    {
        document.getElementById("melding").style.color="red";	
        document.getElementById("melding").innerHTML=feilmelding;	
        return false;
    }	
} 