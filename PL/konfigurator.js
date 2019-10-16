window.onload = restart();	
	
/*
window.onload = function() {
	var queryString = decodeURIComponent(window.location.search);
	queryString = queryString.substring(1);
	var queries = queryString.split("&");

	if(queries === "")
	{
		restart();
	}
	else{
		$("#wybor_konkretnej_oprawy").val(queries);
		Selekcja_konkretnych_opraw(queries);
	}
}
*/



/*
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('obrazek');
var modalImg = document.getElementById("img01");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}	
	
*/
var zasilanie_oprawy="";
var okablowanie="";
var uklad_dlawnic="";
var wersje_awaryjne="";
var wielkosc_dlawnic="";
var material_dlawnic="";
var klosz_oprawy="";
var obudowa_oprawy="";
var strumien_oprawy="";
var nazwa_oprawy="";
var typ_opraw="";
var dzial_opraw="";
var wybranaStrefa="";
var wersja_dodatkowa="";
var mocowanie="";
var przelot="";
var istnienieWyposazeniaDodatkowego= false;
var dzialWyborFotometrii="";
var KlasaTrzecia=false;
var strumien_oprawyNL="";
var wyposazenieDodatkowe="";
var informacja_przegladarka = document.getElementById("info-przegladarka");


if($.browser.safari)
{
	informacja_przegladarka.innerHTML = "Aplikacja działa poprawnie na przeglądarkach: Google Chrome, Mozilla Firefox oraz Opera. Na innych przeglądarkach aplikacja może działać niepoprawnie lub nie działać wcale."
}

if ($.browser.webkit ||  $.browser.mozilla ) {
} else {
informacja_przegladarka.innerHTML = "Aplikacja działa poprawnie na przeglądarkach: Google Chrome, Mozilla Firefox oraz Opera. Na innych przeglądarkach aplikacja może działać niepoprawnie lub nie działać wcale."
}




function kopiuj() 
{ 
    var elm = document.getElementById("klucz");
  // for Internet Explorer

	if(document.body.createTextRange) 
	{
    var range = document.body.createTextRange();
    range.moveToElementText(elm);
    range.select();
    document.execCommand("Copy");
    alert("Pomyślnie skopiowano klucz produktu do schowka. Teraz wystarczy użyć opcji wklejania w mailu zaadreowanym do bok@atmlighting.pl");
  }
 
  else if(window.getSelection) {
    // other browsers
		
    var selection = window.getSelection();
    var range = document.createRange();
    range.selectNodeContents(elm);
    selection.removeAllRanges();
    selection.addRange(range);
		document.execCommand("Copy");
    alert("Pomyślnie skopiowano klucz produktu do schowka. Teraz wystarczy użyć opcji wklejania w mailu zaadreowanym do bok@atmlighting.pl lub użyć opcji Wyślij e-mail z zapytaniem");
	}
	}
function wyslijEmail() 
{
	var kluczMail = document.getElementById("klucz");
	tytulMaila = "Zapytanie ofertowe wygenerowane z konfiguratora";
	window.location.href = "mailto:bok@atmlighting.pl" + "?subject=" + tytulMaila + "&body=" + kluczMail.innerHTML;
	}
function Selekcja_działu_opraw(wybrano)
	{
	document.getElementById("oblicz-button").disabled = true;
	var strefa = document.getElementById("strefa-wybuchowa");
	strefa.className = "row ukryte";
	var typ_oprawy1 = document.getElementById("1-typ_oprawy");
	typ_oprawy1.className = "row ukryte";
	dzial_opraw = document.forms.formularz.elements["dzial"].value;
	//reset typow i konkretnych opraw
	var typ_oprawy1 = document.getElementById("1-typ_oprawy");
	var lista_typow_opraw = document.getElementById("wybor_typu_oprawy");
	var lista_konkretnej_oprawy = document.getElementById("wybor_konkretnej_oprawy");
			for(i=1; i < lista_typow_opraw.options.length; i++)
			{
				lista_typow_opraw.options[i].disabled = true;
			}
			for(i=1; i < lista_konkretnej_oprawy.options.length; i++)
			{
				lista_konkretnej_oprawy.options[i].disabled = true;
			}

	var konkretna_oprawa2 = document.getElementById("2-oprawa");
	konkretna_oprawa2.className = "row ukryte";	

	if(wybrano == 'EX')
		{
			dzialWyborFotometrii="/przeciwwybuchowe_oprawy_oswietleniowe/";
			var ikona = document.getElementById("ikona");
			ikona.src="ikony/ikona_ex.jpg";
			var obrazek = document.getElementById("obrazek");
			obrazek.src="strefy_2.jpg";
			var strefa = document.getElementById("strefa-wybuchowa");
			strefa.className = "row pokazane";
			//var typ_oprawy1 = document.getElementById("1-typ_oprawy");
			//typ_oprawy1.className = "pokazane";
			//var lista_typow_opraw = document.getElementById("wybor_typu_oprawy");
			//Show_all_lista_typow_opraw();
			lista_typow_opraw.options[1].disabled =false;
			lista_typow_opraw.options[3].disabled =false;
			lista_typow_opraw.options[4].disabled =false;
			lista_typow_opraw.options[5].disabled =false;
		}
	if(wybrano == 'VANDAL')
		{
			dzialWyborFotometrii="/wandaloodporne_oprawy_oswietleniowe_do_infrastruktury_kolejowej_i_tuneli/";
		var ikona = document.getElementById("ikona");
			ikona.src="ikony/ikona_vandal.jpg";
			var obrazek = document.getElementById("obrazek");
			obrazek.src="vandal.jpg";
			var typ_oprawy1 = document.getElementById("1-typ_oprawy");
			typ_oprawy1.className = "row pokazane";
			var lista_typow_opraw = document.getElementById("wybor_typu_oprawy");
			//Show_all_lista_typow_opraw();
			lista_typow_opraw.options[1].disabled =false;
			lista_typow_opraw.options[2].disabled =false;
			lista_typow_opraw.options[3].disabled =false;
		}
	if(wybrano == 'PRISON')
		{
			dzialWyborFotometrii="/oprawy_wandaloodporne_zaklady_penitencjarne/";
			var ikona = document.getElementById("ikona");
			ikona.src="ikony/ikona_prison.jpg";
			var obrazek = document.getElementById("obrazek");
			obrazek.src="prison.jpg";
			var typ_oprawy1 = document.getElementById("1-typ_oprawy");
			typ_oprawy1.className = "row pokazane";
			var lista_typow_opraw = document.getElementById("wybor_typu_oprawy");
			//Show_all_lista_typow_opraw();
			lista_typow_opraw.options[1].disabled =false;
			lista_typow_opraw.options[2].disabled =false;
			lista_typow_opraw.options[3].disabled =false;
		}
	if(wybrano == 'FACTORY')
		{
			dzialWyborFotometrii="/zaklady_produkcyjne_i_hale_magazynowe/";
			var ikona = document.getElementById("ikona");
			ikona.src="ikony/ikona_industry.jpg";
			var obrazek = document.getElementById("obrazek");
			obrazek.src="factory.jpg";
			var typ_oprawy1 = document.getElementById("1-typ_oprawy");
			typ_oprawy1.className = "row pokazane";
			var lista_typow_opraw = document.getElementById("wybor_typu_oprawy");
			//Show_all_lista_typow_opraw();
			lista_typow_opraw.options[1].disabled =false;
			lista_typow_opraw.options[4].disabled =false;
			lista_typow_opraw.options[9].disabled =false;
		}
	if(wybrano == 'FOOD')
		{
			//var disable_dzial = document.getElementById("wybor_dzialu_oprawy");
			//disable_dzial.setAttribute("disabled", true);
			dzialWyborFotometrii="/oprawy_oswietleniowe_do_przemyslu_spozywczego_i_hodowli_zwierzat/";
			var ikona = document.getElementById("ikona");
			ikona.src="ikony/ikona_food.jpg";
			var obrazek = document.getElementById("obrazek");
			obrazek.src="food.jpg";
			var konkretna_oprawa2 = document.getElementById("2-oprawa");
			konkretna_oprawa2.className = "row pokazane";
			var lista_konkretnej_oprawy = document.getElementById("wybor_konkretnej_oprawy");
			//var typ_oprawy1 = document.getElementById("1-typ_oprawy");
			//typ_oprawy1.className = "row pokazane";
			//var lista_typow_opraw = document.getElementById("wybor_typu_oprawy");
			//Show_all_lista_typow_opraw();
			//lista_typow_opraw.options[6].disabled =false;
			//lista_typow_opraw.options[7].disabled =false;
			//lista_typow_opraw.options[8].disabled =false;

			for(i=1; i <= lista_konkretnej_oprawy.options.length; i++)
			{
				if(i==31 || i==32 || i==33 || i==34 || i==35)
				{
				lista_konkretnej_oprawy.options[i].disabled = false;
				}
			
				else
				{
				lista_konkretnej_oprawy.options[i].disabled = true;
				}
			}


		}
	/*if(wybrano =='default1')
	{
		var typ_oprawy1 = document.getElementById("1-typ_oprawy");
		typ_oprawy1.className = "ukryte";
		//Show_all_lista_typow_opraw();
	}
	*/
		
		//return dzial_opraw;
	}
function Selekcja_strefy_wybuchowej(wybrano)
	{
		document.getElementById("oblicz-button").disabled = true;
		wybranaStrefa = document.forms.formularz.elements["strefa"].value;
		var disable_dzial = document.getElementById("wybor_dzialu_oprawy");
		disable_dzial.setAttribute("disabled", true);
		if(wybrano == 'pierwsza')
		{
			var ikonaStrefa = document.getElementById("ikona-strefa");
			ikonaStrefa.src="ikony/ikona-strefa1.jpg";
			var obrazek = document.getElementById("obrazek");
			obrazek.src="strefa-1-exf-4.jpg";
			var typ_oprawy1 = document.getElementById("1-typ_oprawy");
			typ_oprawy1.className = "row pokazane";
			var lista_typow_opraw = document.getElementById("wybor_typu_oprawy");
			for(i=1; i <= lista_typow_opraw.options.length; i++)
			{
				if(i==1)
				{
				lista_typow_opraw.options[i].disabled = false;
				}
				else
				{
				lista_typow_opraw.options[i].disabled = true;
				}
			}
			//lista_typow_opraw.options[3].disabled =true;
			//lista_typow_opraw.options[4].disabled =true;
			var lista_konkretnej_oprawy = document.getElementById("wybor_konkretnej_oprawy");
			for(i=1; i <= lista_konkretnej_oprawy.options.length; i++)
			{
				if(i==5 || i==6|| i==7|| i==8|| i==9|| i==10|| i==11)
				{
				lista_konkretnej_oprawy.options[i].disabled = false;
				}
				else
				{
				lista_konkretnej_oprawy.options[i].disabled = true;
				}
			}
		}
		if(wybrano == 'druga' || wybrano=='dwudziestaPierwsza' || wybrano=='dwudziestaDruga')
		{
			var ikonaStrefa = document.getElementById("ikona-strefa");
			ikonaStrefa.src="ikony/ikona-strefa2.jpg";
			var obrazek = document.getElementById("obrazek");
			obrazek.src="strefa-2-exl-3.jpg";
			var typ_oprawy1 = document.getElementById("1-typ_oprawy");
			typ_oprawy1.className = "row pokazane";
			var lista_typow_opraw = document.getElementById("wybor_typu_oprawy");
			for(i=1; i <= lista_typow_opraw.options.length; i++)
			{
				if(i==1 || i==3 || i==4)
				{
				lista_typow_opraw.options[i].disabled = false;
				}
				else
				{
				lista_typow_opraw.options[i].disabled = true;
				}
			}
			//lista_typow_opraw.options[5].disabled =true;
			var lista_konkretnej_oprawy = document.getElementById("wybor_konkretnej_oprawy");
			for(i=12; i <= lista_konkretnej_oprawy.options.length; i++)
			{
				lista_konkretnej_oprawy.options[i].disabled = true;
			}
		}
	}
function Selekcja_typu_opraw(wybrano)
	{
		document.getElementById("oblicz-button").disabled = true;
		var disable_dzial = document.getElementById("wybor_dzialu_oprawy");
		disable_dzial.setAttribute("disabled", true);
		var disable_strefa = document.getElementById("wybor_strefy_wybuchowej");
		disable_strefa.setAttribute("disabled", true);
		typ_opraw = document.forms.formularz.elements["typ"].value;
		
		if(wybrano == 'Napowierzchniowa' && wybranaStrefa == 'pierwsza')
		{
			var obrazek = document.getElementById("obrazek");
			obrazek.src="strefa-1-exf-nap.jpg";
			var konkretna_oprawa2 = document.getElementById("2-oprawa");
			konkretna_oprawa2.className = "row pokazane";
			var lista_konkretnej_oprawy = document.getElementById("wybor_konkretnej_oprawy");
			for(i=1; i <= lista_konkretnej_oprawy.options.length; i++)
			{
				if(i==5 || i==6 || i==7)
				{
				lista_konkretnej_oprawy.options[i].disabled = false;
				}
			
				else
				{
				lista_konkretnej_oprawy.options[i].disabled = true;
				}
			}
		}
		
		if(wybrano == 'Napowierzchniowa' && (wybranaStrefa == 'druga' || wybranaStrefa == 'dwudziestaPierwsza' || wybranaStrefa == 'dwudziestaDruga'))
		{
			var obrazek = document.getElementById("obrazek");
			obrazek.src="strefa-2-exl-nap.jpg";
			var konkretna_oprawa2 = document.getElementById("2-oprawa");
			konkretna_oprawa2.className = "row pokazane";
			var lista_konkretnej_oprawy = document.getElementById("wybor_konkretnej_oprawy");
			for(i=1; i <= lista_konkretnej_oprawy.options.length; i++)
			{
				if(i==1 || i==2 || i==4 || i==5 || i==6 || i==7)
				{
				lista_konkretnej_oprawy.options[i].disabled = false;
				}
			
				else
				{
				lista_konkretnej_oprawy.options[i].disabled = true;
				}
			}
		}
		if(wybrano == 'Wpuszczana' && dzial_opraw =='EX')
		{
			var obrazek = document.getElementById("obrazek");
			obrazek.src="strefa-2-exl-wp.jpg";
			var konkretna_oprawa2 = document.getElementById("2-oprawa");
			konkretna_oprawa2.className = "row pokazane";
			var lista_konkretnej_oprawy = document.getElementById("wybor_konkretnej_oprawy");
			//Show_all_lista_konkretnych_opraw();
			for(i=1; i <= lista_konkretnej_oprawy.options.length; i++)
			{
				if(i==4)
				{
				lista_konkretnej_oprawy.options[i].disabled = false;
				}
			
				else
				{
				lista_konkretnej_oprawy.options[i].disabled = true;
				}
			}
		}
		if(wybrano == 'Naswietlacz'  && dzial_opraw =='EX')
		{
			var obrazek = document.getElementById("obrazek");
			obrazek.src="strefa-2-exl-nas.jpg";
			var konkretna_oprawa2 = document.getElementById("2-oprawa");
			konkretna_oprawa2.className = "row pokazane";
			var lista_konkretnej_oprawy = document.getElementById("wybor_konkretnej_oprawy");
			//Show_all_lista_konkretnych_opraw();
			for(i=1; i <= lista_konkretnej_oprawy.options.length; i++)
			{
				if(i==3)
				{
				lista_konkretnej_oprawy.options[i].disabled = false;
				}
			
				else
				{
				lista_konkretnej_oprawy.options[i].disabled = true;
				}
			}
		}
		if(wybrano == 'Bulkhead')
		{
			var obrazek = document.getElementById("obrazek");
			obrazek.src="strefa-1-exf-bul.jpg";
			var konkretna_oprawa2 = document.getElementById("2-oprawa");
			konkretna_oprawa2.className = "row pokazane";
			var lista_konkretnej_oprawy = document.getElementById("wybor_konkretnej_oprawy");
			//Show_all_lista_konkretnych_opraw();
			for(i=1; i <= lista_konkretnej_oprawy.options.length; i++)
			{
				if(i==8 || i==9 || i==10|| i==11)
				{
				lista_konkretnej_oprawy.options[i].disabled = false;
				}
			
				else
				{
				lista_konkretnej_oprawy.options[i].disabled = true;
				}
			}
		}
		if(wybrano == 'Napowierzchniowa' && dzial_opraw == 'VANDAL')
		{
			var obrazek = document.getElementById("obrazek");
			obrazek.src="vandal-nap.jpg";
			var konkretna_oprawa2 = document.getElementById("2-oprawa");
			konkretna_oprawa2.className = "row pokazane";
			var lista_konkretnej_oprawy = document.getElementById("wybor_konkretnej_oprawy");
			for(i=1; i <= lista_konkretnej_oprawy.options.length; i++)
			{
				if(i==13 || i==15 || i==16|| i==17)
				{
				lista_konkretnej_oprawy.options[i].disabled = false;
				}
			
				else
				{
				lista_konkretnej_oprawy.options[i].disabled = true;
				}
			}
		}
		
		if(wybrano == 'Narozna' && dzial_opraw == 'VANDAL')
		{
			var obrazek = document.getElementById("obrazek");
			obrazek.src="vandal-narozna.jpg";
			var konkretna_oprawa2 = document.getElementById("2-oprawa");
			konkretna_oprawa2.className = "row pokazane";
			var lista_konkretnej_oprawy = document.getElementById("wybor_konkretnej_oprawy");
			//Show_all_lista_konkretnych_opraw();
			for(i=1; i <= lista_konkretnej_oprawy.options.length; i++)
			{
				if(i==12)
				{
				lista_konkretnej_oprawy.options[i].disabled = false;
				}
			
				else
				{
				lista_konkretnej_oprawy.options[i].disabled = true;
				}
			}
		}
		if(wybrano == 'Wpuszczana' && dzial_opraw == 'VANDAL')
		{
			var obrazek = document.getElementById("obrazek");
			obrazek.src="vandal-wpuszczana.jpg";
			var konkretna_oprawa2 = document.getElementById("2-oprawa");
			konkretna_oprawa2.className = "row pokazane";
			var lista_konkretnej_oprawy = document.getElementById("wybor_konkretnej_oprawy");
			//Show_all_lista_konkretnych_opraw();
			for(i=1; i <= lista_konkretnej_oprawy.options.length; i++)
			{
				if(i==14)
				{
				lista_konkretnej_oprawy.options[i].disabled = false;
				}
			
				else
				{
				lista_konkretnej_oprawy.options[i].disabled = true;
				}
			}
		}
		if(wybrano == 'Napowierzchniowa' && dzial_opraw == 'PRISON')
		{
			var obrazek = document.getElementById("obrazek");
			obrazek.src="prison-nap.jpg";
			var konkretna_oprawa2 = document.getElementById("2-oprawa");
			konkretna_oprawa2.className = "row pokazane";
			var lista_konkretnej_oprawy = document.getElementById("wybor_konkretnej_oprawy");
			for(i=1; i <= lista_konkretnej_oprawy.options.length; i++)
			{
				if(i==19 || i==21)
				{
				lista_konkretnej_oprawy.options[i].disabled = false;
				}
			
				else
				{
				lista_konkretnej_oprawy.options[i].disabled = true;
				}
			}
		}
		
		if(wybrano == 'Narozna' && dzial_opraw == 'PRISON')
		{
			var obrazek = document.getElementById("obrazek");
			obrazek.src="prison-narozna.jpg";
			var konkretna_oprawa2 = document.getElementById("2-oprawa");
			konkretna_oprawa2.className = "row pokazane";
			var lista_konkretnej_oprawy = document.getElementById("wybor_konkretnej_oprawy");
			//Show_all_lista_konkretnych_opraw();
			for(i=1; i <= lista_konkretnej_oprawy.options.length; i++)
			{
				if(i==18)
				{
				lista_konkretnej_oprawy.options[i].disabled = false;
				}
			
				else
				{
				lista_konkretnej_oprawy.options[i].disabled = true;
				}
			}
		}
		if(wybrano == 'Wpuszczana' && dzial_opraw == 'PRISON')
		{
			var obrazek = document.getElementById("obrazek");
			obrazek.src="prison-wpuszczana.jpg";
			var konkretna_oprawa2 = document.getElementById("2-oprawa");
			konkretna_oprawa2.className = "row pokazane";
			var lista_konkretnej_oprawy = document.getElementById("wybor_konkretnej_oprawy");
			//Show_all_lista_konkretnych_opraw();
			for(i=1; i <= lista_konkretnej_oprawy.options.length; i++)
			{
				if(i==20)
				{
				lista_konkretnej_oprawy.options[i].disabled = false;
				}
			
				else
				{
				lista_konkretnej_oprawy.options[i].disabled = true;
				}
			}
		}
		
		if(wybrano == 'Napowierzchniowa' && dzial_opraw == 'FACTORY')
		{
			var obrazek = document.getElementById("obrazek");
			obrazek.src="factory-nap.jpg";
			var konkretna_oprawa2 = document.getElementById("2-oprawa");
			konkretna_oprawa2.className = "row pokazane";
			var lista_konkretnej_oprawy = document.getElementById("wybor_konkretnej_oprawy");
			for(i=1; i <= lista_konkretnej_oprawy.options.length; i++)
			{
				if(i==23 || i==28)
				{
				lista_konkretnej_oprawy.options[i].disabled = false;
				}
			
				else
				{
				lista_konkretnej_oprawy.options[i].disabled = true;
				}
			}
		}
		if(wybrano == 'Naswietlacz' && dzial_opraw == 'FACTORY')
		{
			var obrazek = document.getElementById("obrazek");
			obrazek.src="factory-nas.jpg";
			var konkretna_oprawa2 = document.getElementById("2-oprawa");
			konkretna_oprawa2.className = "row pokazane";
			var lista_konkretnej_oprawy = document.getElementById("wybor_konkretnej_oprawy");
			//Show_all_lista_konkretnych_opraw();
			for(i=1; i <= lista_konkretnej_oprawy.options.length; i++)
			{
				if(i==22 || i==24 || i==25 || i==29 || i==30)
				{
				lista_konkretnej_oprawy.options[i].disabled = false;
				}
			
				else
				{
				lista_konkretnej_oprawy.options[i].disabled = true;
				}
			}
		}
		if(wybrano == 'Temp' && dzial_opraw == 'FACTORY')
		{
			var obrazek = document.getElementById("obrazek");
			obrazek.src="factory-extrem.jpg";
			var konkretna_oprawa2 = document.getElementById("2-oprawa");
			konkretna_oprawa2.className = "row pokazane";
			var lista_konkretnej_oprawy = document.getElementById("wybor_konkretnej_oprawy");
			//Show_all_lista_konkretnych_opraw();
			for(i=1; i <= lista_konkretnej_oprawy.options.length; i++)
			{
				if(i==26 || i==27)
				{
				lista_konkretnej_oprawy.options[i].disabled = false;
				}
			
				else
				{
				lista_konkretnej_oprawy.options[i].disabled = true;
				}
			}
		}
		
		if(wybrano == 'Rurowa' && dzial_opraw == 'FOOD')
		{
			var obrazek = document.getElementById("obrazek");
			obrazek.src="food-rurowa.jpg";
			var konkretna_oprawa2 = document.getElementById("2-oprawa");
			konkretna_oprawa2.className = "row pokazane";
			var lista_konkretnej_oprawy = document.getElementById("wybor_konkretnej_oprawy");
			//Show_all_lista_konkretnych_opraw();
			for(i=1; i <= lista_konkretnej_oprawy.options.length; i++)
			{
				if(i==36)
				{
				lista_konkretnej_oprawy.options[i].disabled = false;
				}
			
				else
				{
				lista_konkretnej_oprawy.options[i].disabled = true;
				}
			}
		}
		if(wybrano == 'Agresywne' && dzial_opraw == 'FOOD')
		{
			var obrazek = document.getElementById("obrazek");
			obrazek.src="food-agres.jpg";
			var konkretna_oprawa2 = document.getElementById("2-oprawa");
			konkretna_oprawa2.className = "row pokazane";
			var lista_konkretnej_oprawy = document.getElementById("wybor_konkretnej_oprawy");
			//Show_all_lista_konkretnych_opraw();
			for(i=1; i <= lista_konkretnej_oprawy.options.length; i++)
			{
				if(i==31)
				{
				lista_konkretnej_oprawy.options[i].disabled = false;
				}
			
				else
				{
				lista_konkretnej_oprawy.options[i].disabled = true;
				}
			}
		}
		if(wybrano == 'Amoniak' && dzial_opraw == 'FOOD')
		{
			var obrazek = document.getElementById("obrazek");
			obrazek.src="food-amoniak.jpg";
			var konkretna_oprawa2 = document.getElementById("2-oprawa");
			konkretna_oprawa2.className = "row pokazane";
			var lista_konkretnej_oprawy = document.getElementById("wybor_konkretnej_oprawy");
			//Show_all_lista_konkretnych_opraw();
			for(i=1; i <= lista_konkretnej_oprawy.options.length; i++)
			{
				if(i==32 || i==33 || i==34 || i==35)
				{
				lista_konkretnej_oprawy.options[i].disabled = false;
				}
			
				else
				{
				lista_konkretnej_oprawy.options[i].disabled = true;
				}
			}
		}
		/*
		if(wybrano =='default2')
		{
			var konkretna_oprawa2 = document.getElementById("2-oprawa");
			konkretna_oprawa2.className = "ukryte";
			//Show_all_lista_konkretnych_opraw()
		}
		*/
		
	
	} //koniec selekcji typow opraw
function Selekcja_konkretnych_opraw(wybrano)
	{
		var disable_dzial = document.getElementById("wybor_dzialu_oprawy");
		disable_dzial.setAttribute("disabled", true);
		//obrazek.src = "EXL210LED/EXL210LED_oprawa.jpg";
		document.getElementById("wynikiDoUkrycia").className = "ukryte";
		document.getElementById("oblicz-button").disabled = true;
		var disable_typ_oprawy = document.getElementById("wybor_typu_oprawy");
		disable_typ_oprawy.setAttribute("disabled", true);
		var disable_konkretna_oprawa = document.getElementById("wybor_konkretnej_oprawy");
		disable_konkretna_oprawa.setAttribute("disabled", true);
		
		nazwa_oprawy = document.forms.formularz.elements["oprawa"].value;
		var obudowa_oprawy = document.getElementById("4-obudowa");
			obudowa_oprawy.className = "row pokazane";
		//UKRYCIE LIST PONIŻEJ
		var klosz_oprawy = document.getElementById("5-klosz");
		klosz_oprawy.className = "row ukryte";
		var strumien_oprawy = document.getElementById("3-strumien");
		strumien_oprawy.className = "row ukryte";
		var material_dlawnic = document.getElementById("6-material-dlawnice");
		material_dlawnic.className = "row ukryte";
		var wielkosc_dlawnic = document.getElementById("7-wielkosc-dlawnice");
		wielkosc_dlawnic.className = "row ukryte";
		var awaryjna = document.getElementById("8-awaryjna");
		awaryjna.className = "row ukryte";
		var przelot = document.getElementById("9-przelot");
		przelot.className = "row ukryte";
		var uklad_dlawnic = document.getElementById("10-uklad-dlawnic");
		uklad_dlawnic.className = "row ukryte";
		var mocowanie = document.getElementById("11-mocowanie");
		mocowanie.className = "row ukryte";
		var wyposazenieDodatkowe = document.getElementById("12-dodatkowa");
		wyposazenieDodatkowe.className = "row ukryte";
		$("#wybor_obudowy").val('default');
		obudowa_oprawy = "";
		$("#wybor_klosza").val('default');
		klosz_oprawy = "";
		$("#wybor_strumienia").val('default');
		strumien_oprawy = "";
		$("#wybor_materialu_dlawnic").val('default');
		material_dlawnic = "";
		$("#wybor_wielkosci_dlawnic").val('default');
		wielkosc_dlawnic = "";
		$("#wybor_awaryjna").val('default');
		wersje_awaryjne = "";
		$("#wybor_przelot").val('default');
		$("#wybor_ukladu_dlawnic").val('default');
		uklad_dlawnic = "";
		$("#wybor_mocowania").val('default');
		mocowanie="";	
		$("#wybor_wyposazenia_dodatkowego").val('default');
		wyposazenieDodatkowe="";
		
		
		if(wybrano == 'EXL210LED')
		{
			istnienieWyposazeniaDodatkowego=false;
			//var obrazek = document.getElementById("obrazek");
			//obrazek.src = "EXL210LED/EXL210LED_oprawa.jpg";
			okablowanie="3";
			//var obudowa_oprawy = document.getElementById("4-obudowa");
			//obudowa_oprawy.className = "row pokazane";

			
				document.getElementById("linki").innerHTML = 
				'<p style="font-size: 20px; color: #666666;">Odnośniki&nbsp;&nbsp;&nbsp;&nbsp;<em class="fa fa-download"></em></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/produkty/przeciwwybuchowe-oprawy-oswietleniowe/116-exl210led" target="_blank">Link do strony oprawy oświetleniowej</a></p> <p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/przeciwwybuchowe_oprawy_oswietleniowe/EXL210LED/EXL210LED_karta_katalogowa.pdf" target="_blank">Karta katalogowa</a></p> <p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/przeciwwybuchowe_oprawy_oswietleniowe/Certyfikat_ATEX_KDB15ATEX0049X.pdf" target="_blank">Certyfikat ATEX</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/przeciwwybuchowe_oprawy_oswietleniowe/EXL210LED/Dopuszczenie%20CNBOP%20EXL210LED.pdf" target="_blank">Dopuszczenie CNBOP</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/przeciwwybuchowe_oprawy_oswietleniowe/EXL210LED/EXL210LED_atest_PZH.pdf" target="_blank">Atest PZH</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/przeciwwybuchowe_oprawy_oswietleniowe/EXL210LED/Deklaracje%20UE.zip" target="_blank">Deklaracja UE</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/przeciwwybuchowe_oprawy_oswietleniowe/EXL210LED/Fotometria.zip" target="_blank">Fotometria wszystkich wersji</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a id=fotometriaDanegoTypu class="ukryte" href="" target="_blank">Fotometria wybranego typu</a></p>';
				
			
			var wybor_strumienia = document.getElementById("wybor_strumienia");
			for(i=1; i < wybor_strumienia.options.length; i++)
			{
				if(i==1 || i==2|| i==3|| i==4|| i==5)
				{
				wybor_strumienia.options[i].disabled = false;
				}
				else
				{
				wybor_strumienia.options[i].disabled = true;
				}
			}
			var wybor_obudowy = document.getElementById("wybor_obudowy");
			for(i=1; i < wybor_obudowy.options.length; i++)
			{
				if(i==3)
				{
				wybor_obudowy.options[i].disabled = false;
				}
				else
				{
				wybor_obudowy.options[i].disabled = true;
				}
			}
			var wybor_klosza = document.getElementById("wybor_klosza");
			for(i=1; i < wybor_klosza.options.length; i++)
			{
				if(i==3)
				{
				wybor_klosza.options[i].disabled = false;
				}
				else
				{
				wybor_klosza.options[i].disabled = true;
				}
			}
			var wybor_material_dlawnic = document.getElementById("wybor_materialu_dlawnic");
			for(i=1; i < wybor_material_dlawnic.options.length; i++)
			{
				if(i==2 || i==3)
				{
				wybor_material_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_material_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wielkosci_dlawnic = document.getElementById("wybor_wielkosci_dlawnic");
			for(i=1; i < wybor_wielkosci_dlawnic.options.length; i++)
			{
				if(i==1 || i==2 )
				{
				wybor_wielkosci_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_wielkosci_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wersji_awaryjnej = document.getElementById("wybor_awaryjna");
			for(i=1; i <  wybor_wersji_awaryjnej.options.length; i++)
			{
				if(i==1 || i==2 || i==4 || i==5 || i==6 || i==7 || i==8 || i==9 || i==10 || i==11|| i==12)
				{
				 wybor_wersji_awaryjnej.options[i].disabled = false;
				}
				else
				{
				wybor_wersji_awaryjnej.options[i].disabled = true;
				}
			}
			var wybor_przelotu = document.getElementById("wybor_przelot");
			for(i=1; i <  wybor_przelotu.options.length; i++)
			{
				if(i==1 || i==2)
				{
				 wybor_przelotu.options[i].disabled = false;
				}
				else
				{
				 wybor_przelotu.options[i].disabled = true;
				}
			}
			var wybor_ukladu_dlawnic = document.getElementById("wybor_ukladu_dlawnic");
			for(i=1; i <  wybor_ukladu_dlawnic.options.length; i++)
			{
				if(i==1 || i==2 || i==3 || i==4 || i==5)
				{
				 wybor_ukladu_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_ukladu_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_mocowania = document.getElementById("wybor_mocowania");
			for(i=1; i < wybor_mocowania.options.length; i++)
			{
				if(i==1 || i==2 || i==3 || i==4 || i==5)
				{
				 wybor_mocowania.options[i].disabled = false;
				}
				else
				{
				wybor_mocowania.options[i].disabled = true;
				}
			}
			
		}
		if(wybrano == 'EXL310LED')
		{
			istnienieWyposazeniaDodatkowego=false;
			//var obrazek = document.getElementById("obrazek");
			//obrazek.src = "EXL310LED/EXL310LED_oprawa.jpg";
			okablowanie="3";
			//var obudowa_oprawy = document.getElementById("4-obudowa");
			//obudowa_oprawy.className = "row pokazane";
			
			
			document.getElementById("linki").innerHTML = 
				'<p style="font-size: 20px; color: #666666;">Odnośniki&nbsp;&nbsp;&nbsp;&nbsp;<em class="fa fa-download"></em></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/produkty/przeciwwybuchowe-oprawy-oswietleniowe/74-exl310led" target="_blank">Link do strony oprawy oświetleniowej</a></p> <p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/przeciwwybuchowe_oprawy_oswietleniowe/EXL310LED/EXL310LED_karta_katalogowa.pdf" target="_blank">Karta katalogowa</a></p> <p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/przeciwwybuchowe_oprawy_oswietleniowe/Certyfikat_ATEX_KDB15ATEX0049X.pdf" target="_blank">Certyfikat ATEX</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/przeciwwybuchowe_oprawy_oswietleniowe/EXL310LED/Deklaracja_zgodnosci_UE_Ex_EXL310LED.pdf" target="_blank">Deklaracja UE</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/przeciwwybuchowe_oprawy_oswietleniowe/EXL310LED/Fotometria.zip" target="_blank">Fotometria wszystkich wersji</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a id=fotometriaDanegoTypu class="ukryte" href="" target="_blank">Fotometria wybranego typu</a></p>';
			
			
			var wybor_strumienia = document.getElementById("wybor_strumienia");
			for(i=1; i < wybor_strumienia.options.length; i++)
			{
				if(i==6 || i==7|| i==8|| i==9)
				{
				wybor_strumienia.options[i].disabled = false;
				}
				else
				{
				wybor_strumienia.options[i].disabled = true;
				}
			}
			var wybor_obudowy = document.getElementById("wybor_obudowy");
			for(i=1; i < wybor_obudowy.options.length; i++)
			{
				if(i==2)
				{
				wybor_obudowy.options[i].disabled = false;
				}
				else
				{
				wybor_obudowy.options[i].disabled = true;
				}
			}
			var wybor_klosza = document.getElementById("wybor_klosza");
			for(i=1; i < wybor_klosza.options.length; i++)
			{
				if(i==3)
				{
				wybor_klosza.options[i].disabled = false;
				}
				else
				{
				wybor_klosza.options[i].disabled = true;
				}
			}
			var wybor_material_dlawnic = document.getElementById("wybor_materialu_dlawnic");
			for(i=1; i < wybor_material_dlawnic.options.length; i++)
			{
				if(i==2 || i==3)
				{
				wybor_material_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_material_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wielkosci_dlawnic = document.getElementById("wybor_wielkosci_dlawnic");
			for(i=1; i < wybor_wielkosci_dlawnic.options.length; i++)
			{
				if(i==1 || i==2 )
				{
				wybor_wielkosci_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_wielkosci_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wersji_awaryjnej = document.getElementById("wybor_awaryjna");
			for(i=1; i <  wybor_wersji_awaryjnej.options.length; i++)
			{
				if(i==1 || i==2 || i==4 || i==12)
				{
				 wybor_wersji_awaryjnej.options[i].disabled = false;
				}
				else
				{
				wybor_wersji_awaryjnej.options[i].disabled = true;
				}
			}
			var wybor_przelotu = document.getElementById("wybor_przelot");
			for(i=1; i <  wybor_przelotu.options.length; i++)
			{
				if(i==1 || i==2)
				{
				 wybor_przelotu.options[i].disabled = false;
				}
				else
				{
				 wybor_przelotu.options[i].disabled = true;
				}
			}
			var wybor_ukladu_dlawnic = document.getElementById("wybor_ukladu_dlawnic");
			for(i=1; i <  wybor_ukladu_dlawnic.options.length; i++)
			{
				if(i==1 || i==2 || i==3 || i==4 || i==5)
				{
				 wybor_ukladu_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_ukladu_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_mocowania = document.getElementById("wybor_mocowania");
			for(i=1; i < wybor_mocowania.options.length; i++)
			{
				if(i==7)
				{
				 wybor_mocowania.options[i].disabled = false;
				}
				else
				{
				wybor_mocowania.options[i].disabled = true;
				}
			}
		}
		if(wybrano == 'EXL380LED')
		{
			istnienieWyposazeniaDodatkowego=false;
			//var obrazek = document.getElementById("obrazek");
			//obrazek.src = "EXL380LED/EXL380LED_oprawa.jpg";
			okablowanie="3";
			//var obudowa_oprawy = document.getElementById("4-obudowa");
			//obudowa_oprawy.className = "row pokazane";
			
			document.getElementById("linki").innerHTML = 
				'<p style="font-size: 20px; color: #666666;">Odnośniki&nbsp;&nbsp;&nbsp;&nbsp;<em class="fa fa-download"></em></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/produkty/przeciwwybuchowe-oprawy-oswietleniowe/215-exl380led" target="_blank">Link do strony oprawy oświetleniowej</a></p> <p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/przeciwwybuchowe_oprawy_oswietleniowe/EXL380LED/EXL380LED_karta_katalogowa.pdf" target="_blank">Karta katalogowa</a><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/przeciwwybuchowe_oprawy_oswietleniowe/Certyfikat_ATEX_KDB15ATEX0049X.pdf" target="_blank">Certyfikat ATEX</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/przeciwwybuchowe_oprawy_oswietleniowe/EXL380LED/Deklaracja_zgodnosci_UE_Ex_EXL380LED.pdf" target="_blank">Deklaracja UE</a></p></p> <p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/przeciwwybuchowe_oprawy_oswietleniowe/EXL380LED/EXL380LED_fotometria.zip" target="_blank">Fotometria wszystkich wersji</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a id=fotometriaDanegoTypu class="ukryte" href="" target="_blank">Fotometria wybranego typu</a></p>';
			
			
			
			var wybor_strumienia = document.getElementById("wybor_strumienia");
			for(i=1; i < wybor_strumienia.options.length; i++)
			{
				if(i==10 || i==11|| i==12)
				{
				wybor_strumienia.options[i].disabled = false;
				}
				else
				{
				wybor_strumienia.options[i].disabled = true;
				}
			}
			var wybor_obudowy = document.getElementById("wybor_obudowy");
			for(i=1; i < wybor_obudowy.options.length; i++)
			{
				if(i==2 || i==5)
				{
				wybor_obudowy.options[i].disabled = false;
				}
				else
				{
				wybor_obudowy.options[i].disabled = true;
				}
			}
			var wybor_klosza = document.getElementById("wybor_klosza");
			for(i=1; i < wybor_klosza.options.length; i++)
			{
				if(i==1)
				{
				wybor_klosza.options[i].disabled = false;
				}
				else
				{
				wybor_klosza.options[i].disabled = true;
				}
			}
			var wybor_material_dlawnic = document.getElementById("wybor_materialu_dlawnic");
			for(i=1; i < wybor_material_dlawnic.options.length; i++)
			{
				if(i==3)
				{
				wybor_material_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_material_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wielkosci_dlawnic = document.getElementById("wybor_wielkosci_dlawnic");
			for(i=1; i < wybor_wielkosci_dlawnic.options.length; i++)
			{
				if(i==1 || i==2 )
				{
				wybor_wielkosci_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_wielkosci_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wersji_awaryjnej = document.getElementById("wybor_awaryjna");
			for(i=1; i <  wybor_wersji_awaryjnej.options.length; i++)
			{
				if(i==1 || i==12)
				{
				 wybor_wersji_awaryjnej.options[i].disabled = false;
				}
				else
				{
				wybor_wersji_awaryjnej.options[i].disabled = true;
				}
			}
			var wybor_ukladu_dlawnic = document.getElementById("wybor_ukladu_dlawnic");
			for(i=1; i <  wybor_ukladu_dlawnic.options.length; i++)
			{
				if(i==1 || i==2)
				{
				 wybor_ukladu_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_ukladu_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_przelotu = document.getElementById("wybor_przelot");
			for(i=1; i <  wybor_przelotu.options.length; i++)
			{
				if(i==1 || i==2)
				{
				 wybor_przelotu.options[i].disabled = false;
				}
				else
				{
				 wybor_przelotu.options[i].disabled = true;
				}
			}
			var wybor_mocowania = document.getElementById("wybor_mocowania");
			for(i=1; i < wybor_mocowania.options.length; i++)
			{
				if(i==6)
				{
				 wybor_mocowania.options[i].disabled = false;
				}
				else
				{
				wybor_mocowania.options[i].disabled = true;
				}
			}
		}
		if(wybrano == 'EXL390LED')
		{
			istnienieWyposazeniaDodatkowego=false;
		var wybor_mocowania = document.getElementById("wybor_mocowania");
			if(typ_opraw == 'Napowierzchniowa')
			{
				wersja_dodatkowa = "-SF";
				for(i=1; i < wybor_mocowania.options.length; i++)
			{
				if(i==8)
				{
				 wybor_mocowania.options[i].disabled = false;
				}
				else
				{
				wybor_mocowania.options[i].disabled = true;
				}
			}
			}
			if(typ_opraw == 'Wpuszczana')
			{
				wersja_dodatkowa = "-RC";
				for(i=1; i < wybor_mocowania.options.length; i++)
			{
				if(i==9)
				{
				 wybor_mocowania.options[i].disabled = false;
				}
				else
				{
				wybor_mocowania.options[i].disabled = true;
				}
			}
			}
		
		
			//var obrazek = document.getElementById("obrazek");
			//obrazek.src = "EXL390LED/EXL390LED_oprawa.jpg";
			okablowanie="3";
			//var obudowa_oprawy = document.getElementById("4-obudowa");
			//obudowa_oprawy.className = "row pokazane";
			
			document.getElementById("linki").innerHTML = 
				'<p style="font-size: 20px; color: #666666;">Odnośniki&nbsp;&nbsp;&nbsp;&nbsp;<em class="fa fa-download"></em></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/produkty/przeciwwybuchowe-oprawy-oswietleniowe/226-exl390led" target="_blank">Link do strony oprawy oświetleniowej</a></p> <p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/przeciwwybuchowe_oprawy_oswietleniowe/EXL390LED/EXL390LED_karta_katalogowa.pdf" target="_blank">Karta katalogowa</a></p> <p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/przeciwwybuchowe_oprawy_oswietleniowe/Certyfikat_ATEX_KDB15ATEX0049X.pdf" target="_blank">Certyfikat ATEX</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/przeciwwybuchowe_oprawy_oswietleniowe/EXL390LED/Deklaracja_zgodnosci_UE_Ex_EXL390LED.pdf" target="_blank">Deklaracja UE</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/przeciwwybuchowe_oprawy_oswietleniowe/EXL390LED/EXL390LED_fotometria.zip" target="_blank">Fotometria wszystkich wersji</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a id=fotometriaDanegoTypu class="ukryte" href="" target="_blank">Fotometria wybranego typu</a></p>';
			
			
			
			
			
			var wybor_strumienia = document.getElementById("wybor_strumienia");
			for(i=1; i < wybor_strumienia.options.length; i++)
			{
				if(i==13 || i==14|| i==15|| i==16|| i==17|| i==18)
				{
				wybor_strumienia.options[i].disabled = false;
				}
				else
				{
				wybor_strumienia.options[i].disabled = true;
				}
			}
			var wybor_obudowy = document.getElementById("wybor_obudowy");
			for(i=1; i < wybor_obudowy.options.length; i++)
			{
				if(i==1 || i==2)
				{
				wybor_obudowy.options[i].disabled = false;
				}
				else
				{
				wybor_obudowy.options[i].disabled = true;
				}
			}
			var wybor_klosza = document.getElementById("wybor_klosza");
			for(i=1; i < wybor_klosza.options.length; i++)
			{
				if(i==1 || i==3)
				{
				wybor_klosza.options[i].disabled = false;
				}
				else
				{
				wybor_klosza.options[i].disabled = true;
				}
			}
			var wybor_material_dlawnic = document.getElementById("wybor_materialu_dlawnic");
			for(i=1; i < wybor_material_dlawnic.options.length; i++)
			{
				if(i==2 || i==3)
				{
				wybor_material_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_material_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wielkosci_dlawnic = document.getElementById("wybor_wielkosci_dlawnic");
			for(i=1; i < wybor_wielkosci_dlawnic.options.length; i++)
			{
				if(i==1 || i==2 )
				{
				wybor_wielkosci_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_wielkosci_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wersji_awaryjnej = document.getElementById("wybor_awaryjna");
			for(i=1; i <  wybor_wersji_awaryjnej.options.length; i++)
			{
				if(i==1 || i==2 || i==4 || i==12)
				{
				 wybor_wersji_awaryjnej.options[i].disabled = false;
				}
				else
				{
				wybor_wersji_awaryjnej.options[i].disabled = true;
				}
			}
			var wybor_przelotu = document.getElementById("wybor_przelot");
			for(i=1; i <  wybor_przelotu.options.length; i++)
			{
				if(i==1 || i==2)
				{
				 wybor_przelotu.options[i].disabled = false;
				}
				else
				{
				 wybor_przelotu.options[i].disabled = true;
				}
			}
			var wybor_ukladu_dlawnic = document.getElementById("wybor_ukladu_dlawnic");
			for(i=1; i <  wybor_ukladu_dlawnic.options.length; i++)
			{
				if(i==1 || i==2)
				{
				 wybor_ukladu_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_ukladu_dlawnic.options[i].disabled = true;
				}
			}
		}
		if(wybrano == 'EXF200LED')
		{
			istnienieWyposazeniaDodatkowego=false;
			//var obrazek = document.getElementById("obrazek");
			//obrazek.src = "EXF200LED/EXF200LED_oprawa.jpg";
			okablowanie="3";
			//var obudowa_oprawy = document.getElementById("4-obudowa");
			//obudowa_oprawy.className = "row pokazane";
			
			document.getElementById("linki").innerHTML = 
				'<p style="font-size: 20px; color: #666666;">Odnośniki&nbsp;&nbsp;&nbsp;&nbsp;<em class="fa fa-download"></em></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/produkty/przeciwwybuchowe-oprawy-oswietleniowe/232-exf200led" target="_blank">Link do strony oprawy oświetleniowej</a></p> <p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/przeciwwybuchowe_oprawy_oswietleniowe/EXF200LED/EXF200LED_karta_katalogowa.pdf" target="_blank">Karta katalogowa</a></p> <p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/przeciwwybuchowe_oprawy_oswietleniowe/Certyfikat_ATEX_KDB15ATEX0049X.pdf" target="_blank">Certyfikat ATEX</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/przeciwwybuchowe_oprawy_oswietleniowe/EXF200LED/EXF200LED_Deklaracja_zgodnosci.pdf" target="_blank">Deklaracja UE</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/przeciwwybuchowe_oprawy_oswietleniowe/EXF200LED/Fotometria.zip" target="_blank">Fotometria wszystkich wersji</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a id=fotometriaDanegoTypu class="ukryte" href="" target="_blank">Fotometria wybranego typu</a></p>';
			
			
			var wybor_strumienia = document.getElementById("wybor_strumienia");
			for(i=1; i < wybor_strumienia.options.length; i++)
			{
				if(i==19 || i==20|| i==21|| i==22|| i==23|| i==24|| i==25)
				{
				wybor_strumienia.options[i].disabled = false;
				}
				else
				{
				wybor_strumienia.options[i].disabled = true;
				}
			}
			var wybor_obudowy = document.getElementById("wybor_obudowy");
			for(i=1; i < wybor_obudowy.options.length; i++)
			{
				if(i==3)
				{
				wybor_obudowy.options[i].disabled = false;
				}
				else
				{
				wybor_obudowy.options[i].disabled = true;
				}
			}
			var wybor_klosza = document.getElementById("wybor_klosza");
			for(i=1; i < wybor_klosza.options.length; i++)
			{
				if(i==3)
				{
				wybor_klosza.options[i].disabled = false;
				}
				else
				{
				wybor_klosza.options[i].disabled = true;
				}
			}
			var wybor_material_dlawnic = document.getElementById("wybor_materialu_dlawnic");
			for(i=1; i < wybor_material_dlawnic.options.length; i++)
			{
				if(i==2 || i==3)
				{
				wybor_material_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_material_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wielkosci_dlawnic = document.getElementById("wybor_wielkosci_dlawnic");
			for(i=1; i < wybor_wielkosci_dlawnic.options.length; i++)
			{
				if(i==1 || i==2 )
				{
				wybor_wielkosci_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_wielkosci_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wersji_awaryjnej = document.getElementById("wybor_awaryjna");
			for(i=1; i <  wybor_wersji_awaryjnej.options.length; i++)
			{
				if(i==1 || i==2 || i==4)
				{
				 wybor_wersji_awaryjnej.options[i].disabled = false;
				}
				else
				{
				wybor_wersji_awaryjnej.options[i].disabled = true;
				}
			}
			var wybor_przelotu = document.getElementById("wybor_przelot");
			for(i=1; i <  wybor_przelotu.options.length; i++)
			{
				if(i==1 || i==2)
				{
				 wybor_przelotu.options[i].disabled = false;
				}
				else
				{
				 wybor_przelotu.options[i].disabled = true;
				}
			}
			var wybor_ukladu_dlawnic = document.getElementById("wybor_ukladu_dlawnic");
			for(i=1; i <  wybor_ukladu_dlawnic.options.length; i++)
			{
				if(i==1 || i==2 || i==3 || i==4 || i==5)
				{
				 wybor_ukladu_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_ukladu_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_mocowania = document.getElementById("wybor_mocowania");
			for(i=1; i < wybor_mocowania.options.length; i++)
			{
				if(i==1)
				{
				 wybor_mocowania.options[i].disabled = false;
				}
				else
				{
				wybor_mocowania.options[i].disabled = true;
				}
			}
		}
		if(wybrano == 'EXF250LED')
		{
			istnienieWyposazeniaDodatkowego=false;
			//var obrazek = document.getElementById("obrazek");
			//obrazek.src = "EXF250LED/EXF250LED_oprawa.jpg";
			okablowanie="3";
			//var obudowa_oprawy = document.getElementById("4-obudowa");
			//obudowa_oprawy.className = "row pokazane";
			
				document.getElementById("linki").innerHTML = 
				'<p style="font-size: 20px; color: #666666;">Odnośniki&nbsp;&nbsp;&nbsp;&nbsp;<em class="fa fa-download"></em></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/produkty/przeciwwybuchowe-oprawy-oswietleniowe/233-exf250led" target="_blank">Link do strony oprawy oświetleniowej</a></p> <p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/przeciwwybuchowe_oprawy_oswietleniowe/EXF250LED/EXF250LED_karta_katalogowa.pdf" target="_blank">Karta katalogowa</a></p> <p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/przeciwwybuchowe_oprawy_oswietleniowe/Certyfikat_ATEX_KDB15ATEX0049X.pdf" target="_blank">Certyfikat ATEX</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/przeciwwybuchowe_oprawy_oswietleniowe/EXF250LED/EXF250LED_Deklaracja_zgodnosci.pdf" target="_blank">Deklaracja UE</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/przeciwwybuchowe_oprawy_oswietleniowe/EXF250LED/Fotometria.zip" target="_blank">Fotometria wszystkich wersji</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a id=fotometriaDanegoTypu class="ukryte" href="" target="_blank">Fotometria wybranego typu</a></p>';
			
			
			var wybor_strumienia = document.getElementById("wybor_strumienia");
			for(i=1; i < wybor_strumienia.options.length; i++)
			{
				if(i==26 || i==27|| i==28|| i==29|| i==30|| i==31|| i==32)
				{
				wybor_strumienia.options[i].disabled = false;
				}
				else
				{
				wybor_strumienia.options[i].disabled = true;
				}
			}
			var wybor_obudowy = document.getElementById("wybor_obudowy");
			for(i=1; i < wybor_obudowy.options.length; i++)
			{
				if(i==4)
				{
				wybor_obudowy.options[i].disabled = false;
				}
				else
				{
				wybor_obudowy.options[i].disabled = true;
				}
			}
			var wybor_klosza = document.getElementById("wybor_klosza");
			for(i=1; i < wybor_klosza.options.length; i++)
			{
				if(i==3 || i==4)
				{
				wybor_klosza.options[i].disabled = false;
				}
				else
				{
				wybor_klosza.options[i].disabled = true;
				}
			}
			var wybor_material_dlawnic = document.getElementById("wybor_materialu_dlawnic");
			for(i=1; i < wybor_material_dlawnic.options.length; i++)
			{
				if(i==2 || i==3)
				{
				wybor_material_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_material_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wielkosci_dlawnic = document.getElementById("wybor_wielkosci_dlawnic");
			for(i=1; i < wybor_wielkosci_dlawnic.options.length; i++)
			{
				if(i==1 || i==2 )
				{
				wybor_wielkosci_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_wielkosci_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wersji_awaryjnej = document.getElementById("wybor_awaryjna");
			for(i=1; i <  wybor_wersji_awaryjnej.options.length; i++)
			{
				if(i==1 || i==2 || i==4)
				{
				 wybor_wersji_awaryjnej.options[i].disabled = false;
				}
				else
				{
				 wybor_wersji_awaryjnej.options[i].disabled = true;
				}
			}
			var wybor_przelotu = document.getElementById("wybor_przelot");
			for(i=1; i <  wybor_przelotu.options.length; i++)
			{
				if(i==1 || i==2)
				{
				 wybor_przelotu.options[i].disabled = false;
				}
				else
				{
				 wybor_przelotu.options[i].disabled = true;
				}
			}
			var wybor_ukladu_dlawnic = document.getElementById("wybor_ukladu_dlawnic");
			for(i=1; i <  wybor_ukladu_dlawnic.options.length; i++)
			{
				if(i==1 || i==2 || i==3 || i==4 || i==5)
				{
				 wybor_ukladu_dlawnic.options[i].disabled = false;
				}
				else
				{
				 wybor_ukladu_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_mocowania = document.getElementById("wybor_mocowania");
			for(i=1; i < wybor_mocowania.options.length; i++)
			{
				if(i==1)
				{
				 wybor_mocowania.options[i].disabled = false;
				}
				else
				{
				wybor_mocowania.options[i].disabled = true;
				}
			}
		}
		if(wybrano == 'EXF300LED')
		{
			istnienieWyposazeniaDodatkowego=false;
			//var obrazek = document.getElementById("obrazek");
			//obrazek.src = "EXF300LED/EXF300LED_oprawa.jpg";
			okablowanie="3";
			//var obudowa_oprawy = document.getElementById("4-obudowa");
			//obudowa_oprawy.className = "row pokazane";
			
				document.getElementById("linki").innerHTML = 
				'<p style="font-size: 20px; color: #666666;">Odnośniki&nbsp;&nbsp;&nbsp;&nbsp;<em class="fa fa-download"></em></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/produkty/przeciwwybuchowe-oprawy-oswietleniowe/234-exf300led" target="_blank">Link do strony oprawy oświetleniowej</a></p> <p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/przeciwwybuchowe_oprawy_oswietleniowe/EXF300LED/EXF300LED_karta_katalogowa.pdf" target="_blank">Karta katalogowa</a></p> <p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/przeciwwybuchowe_oprawy_oswietleniowe/Certyfikat_ATEX_KDB15ATEX0049X.pdf" target="_blank">Certyfikat ATEX</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/przeciwwybuchowe_oprawy_oswietleniowe/EXF300LED/EXF300LED_Deklaracja_zgodnosci.pdf" target="_blank">Deklaracja UE</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/przeciwwybuchowe_oprawy_oswietleniowe/EXF300LED/Fotometria.zip" target="_blank">Fotometria wszystkich wersji</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a id=fotometriaDanegoTypu class="ukryte" href="" target="_blank">Fotometria wybranego typu</a></p>';
			
			
			var wybor_strumienia = document.getElementById("wybor_strumienia");
			for(i=1; i < wybor_strumienia.options.length; i++)
			{
				if(i==33 || i==34|| i==35|| i==36|| i==37|| i==38|| i==39)
				{
				wybor_strumienia.options[i].disabled = false;
				}
				else
				{
				wybor_strumienia.options[i].disabled = true;
				}
			}
			var wybor_obudowy = document.getElementById("wybor_obudowy");
			for(i=1; i < wybor_obudowy.options.length; i++)
			{
				if(i==2)
				{
				wybor_obudowy.options[i].disabled = false;
				}
				else
				{
				wybor_obudowy.options[i].disabled = true;
				}
			}
			var wybor_klosza = document.getElementById("wybor_klosza");
			for(i=1; i < wybor_klosza.options.length; i++)
			{
				if(i==3)
				{
				wybor_klosza.options[i].disabled = false;
				}
				else
				{
				wybor_klosza.options[i].disabled = true;
				}
			}
			var wybor_material_dlawnic = document.getElementById("wybor_materialu_dlawnic");
			for(i=1; i < wybor_material_dlawnic.options.length; i++)
			{
				if(i==2 || i==3)
				{
				wybor_material_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_material_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wielkosci_dlawnic = document.getElementById("wybor_wielkosci_dlawnic");
			for(i=1; i < wybor_wielkosci_dlawnic.options.length; i++)
			{
				if(i==1 || i==2 )
				{
				wybor_wielkosci_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_wielkosci_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wersji_awaryjnej = document.getElementById("wybor_awaryjna");
			for(i=1; i <  wybor_wersji_awaryjnej.options.length; i++)
			{
				if(i==1 || i==2 || i==4)
				{
				 wybor_wersji_awaryjnej.options[i].disabled = false;
				}
				else
				{
				 wybor_wersji_awaryjnej.options[i].disabled = true;
				}
			}
			var wybor_przelotu = document.getElementById("wybor_przelot");
			for(i=1; i <  wybor_przelotu.options.length; i++)
			{
				if(i==1 || i==2)
				{
				 wybor_przelotu.options[i].disabled = false;
				}
				else
				{
				 wybor_przelotu.options[i].disabled = true;
				}
			}
			var wybor_ukladu_dlawnic = document.getElementById("wybor_ukladu_dlawnic");
			for(i=1; i <  wybor_ukladu_dlawnic.options.length; i++)
			{
				if(i==1 || i==2 || i==3 || i==4 || i==5)
				{
				 wybor_ukladu_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_ukladu_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_mocowania = document.getElementById("wybor_mocowania");
			for(i=1; i < wybor_mocowania.options.length; i++)
			{
				if(i==7)
				{
				 wybor_mocowania.options[i].disabled = false;
				}
				else
				{
				wybor_mocowania.options[i].disabled = true;
				}
			}
		}
		if(wybrano == 'FLX310LED')
		{
			istnienieWyposazeniaDodatkowego=false;
			//var obrazek = document.getElementById("obrazek");
			//obrazek.src = "FLX310LED/FLX310LED_oprawa.jpg";
			
					document.getElementById("linki").innerHTML = 
				'<p style="font-size: 20px; color: #666666;">Odnośniki&nbsp;&nbsp;&nbsp;&nbsp;<em class="fa fa-download"></em></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/produkty/przeciwwybuchowe-oprawy-oswietleniowe/124-flx310led" target="_blank">Link do strony oprawy oświetleniowej</a></p> <p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/przeciwwybuchowe_oprawy_oswietleniowe/FLX310LED/FLX310LED_karta_katalogowa.pdf" target="_blank">Karta katalogowa</a></p> <p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/przeciwwybuchowe_oprawy_oswietleniowe/FLX310LED/EXA 15 ATEX 0050X EN.pdf" target="_blank">Certyfikat ATEX</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/przeciwwybuchowe_oprawy_oswietleniowe/FLX310LED/FLX310LED_Deklaracja_zgodnosci.pdf" target="_blank">Deklaracja UE</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/przeciwwybuchowe_oprawy_oswietleniowe/FLX310LED/Fotometria.zip" target="_blank">Fotometria wszystkich wersji</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a id=fotometriaDanegoTypu class="ukryte" href="" target="_blank">Fotometria wybranego typu</a></p>';
			
			
			
				var wybor_strumienia = document.getElementById("wybor_strumienia");
			for(i=1; i < wybor_strumienia.options.length; i++)
			{
				if(i==40)
				{
				wybor_strumienia.options[i].disabled = false;
				}
				else
				{
				wybor_strumienia.options[i].disabled = true;
				}
			}
			var wybor_obudowy = document.getElementById("wybor_obudowy");
			for(i=1; i < wybor_obudowy.options.length; i++)
			{
				if(i==6)
				{
				wybor_obudowy.options[i].disabled = false;
				}
				else
				{
				wybor_obudowy.options[i].disabled = true;
				}
			}
			var wybor_klosza = document.getElementById("wybor_klosza");
			for(i=1; i < wybor_klosza.options.length; i++)
			{
				if(i==6)
				{
				wybor_klosza.options[i].disabled = false;
				}
				else
				{
				wybor_klosza.options[i].disabled = true;
				}
			}
			var wybor_material_dlawnic = document.getElementById("wybor_materialu_dlawnic");
			for(i=1; i < wybor_material_dlawnic.options.length; i++)
			{
				if(i==2)
				{
				wybor_material_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_material_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wielkosci_dlawnic = document.getElementById("wybor_wielkosci_dlawnic");
			for(i=1; i < wybor_wielkosci_dlawnic.options.length; i++)
			{
				if(i==1)
				{
				wybor_wielkosci_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_wielkosci_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wersji_awaryjnej = document.getElementById("wybor_awaryjna");
			for(i=1; i <  wybor_wersji_awaryjnej.options.length; i++)
			{
				if(i==1)
				{
				 wybor_wersji_awaryjnej.options[i].disabled = false;
				}
				else
				{
				wybor_wersji_awaryjnej.options[i].disabled = true;
				}
			}
			var wybor_przelotu = document.getElementById("wybor_przelot");
			for(i=1; i <  wybor_przelotu.options.length; i++)
			{
				if(i==2)
				{
				 wybor_przelotu.options[i].disabled = false;
				}
				else
				{
				 wybor_przelotu.options[i].disabled = true;
				}
			}
			var wybor_ukladu_dlawnic = document.getElementById("wybor_ukladu_dlawnic");
			for(i=1; i <  wybor_ukladu_dlawnic.options.length; i++)
			{
				if(i==1)
				{
				 wybor_ukladu_dlawnic.options[i].disabled = false;
				}
				else
				{
				 wybor_ukladu_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_mocowania = document.getElementById("wybor_mocowania");
			for(i=1; i < wybor_mocowania.options.length; i++)
			{
				if(i==12)
				{
				 wybor_mocowania.options[i].disabled = false;
				}
				else
				{
				wybor_mocowania.options[i].disabled = true;
				}
			}	
		}
		if(wybrano == 'PLFMLED')
		{
			istnienieWyposazeniaDodatkowego=false;
			//var obrazek = document.getElementById("obrazek");
			//obrazek.src = "PLFMLED/PLFMLED_oprawa.jpg";
			
			document.getElementById("linki").innerHTML = 
				'<p style="font-size: 20px; color: #666666;">Odnośniki&nbsp;&nbsp;&nbsp;&nbsp;<em class="fa fa-download"></em></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/produkty/przeciwwybuchowe-oprawy-oswietleniowe/126-plfm-led" target="_blank">Link do strony oprawy oświetleniowej</a></p> <p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/przeciwwybuchowe_oprawy_oswietleniowe/PLFMLED/PLFMLED_karta_katalogowa.pdf" target="_blank">Karta katalogowa</a></p> <p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/przeciwwybuchowe_oprawy_oswietleniowe/PLFM_LED/Certyfikat_PLFM_LED_EN.pdf" target="_blank">Certyfikat ATEX</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/przeciwwybuchowe_oprawy_oswietleniowe/PLFMLED/PLFMLED_Deklaracja_zgodnosci.pdf" target="_blank">Deklaracja UE</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/przeciwwybuchowe_oprawy_oswietleniowe/PLFMLED/Fotometria.zip" target="_blank">Fotometria wszystkich wersji</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a id=fotometriaDanegoTypu class="ukryte" href="" target="_blank">Fotometria wybranego typu</a></p>';
			
			
			
				var wybor_strumienia = document.getElementById("wybor_strumienia");
			for(i=1; i < wybor_strumienia.options.length; i++)
			{
				if(i==157 || i==158)
				{
				wybor_strumienia.options[i].disabled = false;
				}
				else
				{
				wybor_strumienia.options[i].disabled = true;
				}
			}
			var wybor_obudowy = document.getElementById("wybor_obudowy");
			for(i=1; i < wybor_obudowy.options.length; i++)
			{
				if(i==6)
				{
				wybor_obudowy.options[i].disabled = false;
				}
				else
				{
				wybor_obudowy.options[i].disabled = true;
				}
			}
			var wybor_klosza = document.getElementById("wybor_klosza");
			for(i=1; i < wybor_klosza.options.length; i++)
			{
				if(i==6)
				{
				wybor_klosza.options[i].disabled = false;
				}
				else
				{
				wybor_klosza.options[i].disabled = true;
				}
			}
			var wybor_material_dlawnic = document.getElementById("wybor_materialu_dlawnic");
			for(i=1; i < wybor_material_dlawnic.options.length; i++)
			{
				if(i==2)
				{
				wybor_material_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_material_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wielkosci_dlawnic = document.getElementById("wybor_wielkosci_dlawnic");
			for(i=1; i < wybor_wielkosci_dlawnic.options.length; i++)
			{
				if(i==1)
				{
				wybor_wielkosci_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_wielkosci_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wersji_awaryjnej = document.getElementById("wybor_awaryjna");
			for(i=1; i <  wybor_wersji_awaryjnej.options.length; i++)
			{
				if(i==1)
				{
				 wybor_wersji_awaryjnej.options[i].disabled = false;
				}
				else
				{
				wybor_wersji_awaryjnej.options[i].disabled = true;
				}
			}
			var wybor_przelotu = document.getElementById("wybor_przelot");
			for(i=1; i <  wybor_przelotu.options.length; i++)
			{
				if(i==2)
				{
				 wybor_przelotu.options[i].disabled = false;
				}
				else
				{
				 wybor_przelotu.options[i].disabled = true;
				}
			}
			var wybor_ukladu_dlawnic = document.getElementById("wybor_ukladu_dlawnic");
			for(i=1; i <  wybor_ukladu_dlawnic.options.length; i++)
			{
				if(i==1)
				{
				 wybor_ukladu_dlawnic.options[i].disabled = false;
				}
				else
				{
				 wybor_ukladu_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_mocowania = document.getElementById("wybor_mocowania");
			for(i=1; i < wybor_mocowania.options.length; i++)
			{
				if(i==12)
				{
				 wybor_mocowania.options[i].disabled = false;
				}
				else
				{
				wybor_mocowania.options[i].disabled = true;
				}
			}	
		}
		if(wybrano == 'PLFSLED')
		{
			istnienieWyposazeniaDodatkowego=false;
			//var obrazek = document.getElementById("obrazek");
			//obrazek.src = "PLFS50LED/PLFS50LED_oprawa.jpg";
			
			document.getElementById("linki").innerHTML = 
				'<p style="font-size: 20px; color: #666666;">Odnośniki&nbsp;&nbsp;&nbsp;&nbsp;<em class="fa fa-download"></em></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/produkty/przeciwwybuchowe-oprawy-oswietleniowe/128-plfs-led" target="_blank">Link do strony oprawy oświetleniowej</a></p> <p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/przeciwwybuchowe_oprawy_oswietleniowe/PLFSLED/PLFSLED_karta_katalogowa.pdf" target="_blank">Karta katalogowa</a></p> <p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/przeciwwybuchowe_oprawy_oswietleniowe/PLFS_LED/Certyfikat_PLFS_LED_50_EN.pdf" target="_blank">Certyfikat ATEX</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/przeciwwybuchowe_oprawy_oswietleniowe/PLFSLED/PLFSLED_Deklaracja_zgodnosci.pdf" target="_blank">Deklaracja UE</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/przeciwwybuchowe_oprawy_oswietleniowe/PLFSLED/Fotometria.zip" target="_blank">Fotometria wszystkich wersji</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a id=fotometriaDanegoTypu class="ukryte" href="" target="_blank">Fotometria wybranego typu</a></p>';
			
			
			
				var wybor_strumienia = document.getElementById("wybor_strumienia");
			for(i=1; i < wybor_strumienia.options.length; i++)
			{
				if(i==159 || i==160 || i==161 || i==162)
				{
				wybor_strumienia.options[i].disabled = false;
				}
				else
				{
				wybor_strumienia.options[i].disabled = true;
				}
			}
			var wybor_obudowy = document.getElementById("wybor_obudowy");
			for(i=1; i < wybor_obudowy.options.length; i++)
			{
				if(i==6)
				{
				wybor_obudowy.options[i].disabled = false;
				}
				else
				{
				wybor_obudowy.options[i].disabled = true;
				}
			}
			var wybor_klosza = document.getElementById("wybor_klosza");
			for(i=1; i < wybor_klosza.options.length; i++)
			{
				if(i==6)
				{
				wybor_klosza.options[i].disabled = false;
				}
				else
				{
				wybor_klosza.options[i].disabled = true;
				}
			}
			var wybor_material_dlawnic = document.getElementById("wybor_materialu_dlawnic");
			for(i=1; i < wybor_material_dlawnic.options.length; i++)
			{
				if(i==2)
				{
				wybor_material_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_material_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wielkosci_dlawnic = document.getElementById("wybor_wielkosci_dlawnic");
			for(i=1; i < wybor_wielkosci_dlawnic.options.length; i++)
			{
				if(i==1)
				{
				wybor_wielkosci_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_wielkosci_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wersji_awaryjnej = document.getElementById("wybor_awaryjna");
			for(i=1; i <  wybor_wersji_awaryjnej.options.length; i++)
			{
				if(i==1)
				{
				 wybor_wersji_awaryjnej.options[i].disabled = false;
				}
				else
				{
				wybor_wersji_awaryjnej.options[i].disabled = true;
				}
			}
			var wybor_przelotu = document.getElementById("wybor_przelot");
			for(i=1; i <  wybor_przelotu.options.length; i++)
			{
				if(i==2)
				{
				 wybor_przelotu.options[i].disabled = false;
				}
				else
				{
				 wybor_przelotu.options[i].disabled = true;
				}
			}
			var wybor_ukladu_dlawnic = document.getElementById("wybor_ukladu_dlawnic");
			for(i=1; i <  wybor_ukladu_dlawnic.options.length; i++)
			{
				if(i==1)
				{
				 wybor_ukladu_dlawnic.options[i].disabled = false;
				}
				else
				{
				 wybor_ukladu_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_mocowania = document.getElementById("wybor_mocowania");
			for(i=1; i < wybor_mocowania.options.length; i++)
			{
				if(i==12)
				{
				 wybor_mocowania.options[i].disabled = false;
				}
				else
				{
				wybor_mocowania.options[i].disabled = true;
				}
			}	
		}
		if(wybrano == '040324LED')
		{
			istnienieWyposazeniaDodatkowego=false;
			//var obrazek = document.getElementById("obrazek");
			//obrazek.src = "040324LED/040324LED_oprawa.jpg";
			
			document.getElementById("linki").innerHTML = 
				'<p style="font-size: 20px; color: #666666;">Odnośniki&nbsp;&nbsp;&nbsp;&nbsp;<em class="fa fa-download"></em></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/produkty/przeciwwybuchowe-oprawy-oswietleniowe/130-040324-led" target="_blank">Link do strony oprawy oświetleniowej</a></p> <p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/przeciwwybuchowe_oprawy_oswietleniowe/0403.24_LED/0403.24_LED_karta_katalogowa.pdf" target="_blank">Karta katalogowa</a></p> <p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/przeciwwybuchowe_oprawy_oswietleniowe/0403.24_LED/Certyfikat_PLFS_LED_50_EN.pdf" target="_blank">Certyfikat ATEX</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/przeciwwybuchowe_oprawy_oswietleniowe/0403.24_LED/0403.24_LED_Deklaracja_zgodnosci.pdf" target="_blank">Deklaracja UE</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/przeciwwybuchowe_oprawy_oswietleniowe/0403.24_LED/Fotometria.zip" target="_blank">Fotometria wszystkich wersji</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a id=fotometriaDanegoTypu class="ukryte" href="" target="_blank">Fotometria wybranego typu</a></p>';
			
			
			
				var wybor_strumienia = document.getElementById("wybor_strumienia");
			for(i=1; i < wybor_strumienia.options.length; i++)
			{
				if(i==163)
				{
				wybor_strumienia.options[i].disabled = false;
				}
				else
				{
				wybor_strumienia.options[i].disabled = true;
				}
			}
			var wybor_obudowy = document.getElementById("wybor_obudowy");
			for(i=1; i < wybor_obudowy.options.length; i++)
			{
				if(i==6)
				{
				wybor_obudowy.options[i].disabled = false;
				}
				else
				{
				wybor_obudowy.options[i].disabled = true;
				}
			}
			var wybor_klosza = document.getElementById("wybor_klosza");
			for(i=1; i < wybor_klosza.options.length; i++)
			{
				if(i==6)
				{
				wybor_klosza.options[i].disabled = false;
				}
				else
				{
				wybor_klosza.options[i].disabled = true;
				}
			}
			var wybor_material_dlawnic = document.getElementById("wybor_materialu_dlawnic");
			for(i=1; i < wybor_material_dlawnic.options.length; i++)
			{
				if(i==2)
				{
				wybor_material_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_material_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wielkosci_dlawnic = document.getElementById("wybor_wielkosci_dlawnic");
			for(i=1; i < wybor_wielkosci_dlawnic.options.length; i++)
			{
				if(i==1)
				{
				wybor_wielkosci_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_wielkosci_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wersji_awaryjnej = document.getElementById("wybor_awaryjna");
			for(i=1; i <  wybor_wersji_awaryjnej.options.length; i++)
			{
				if(i==1)
				{
				 wybor_wersji_awaryjnej.options[i].disabled = false;
				}
				else
				{
				wybor_wersji_awaryjnej.options[i].disabled = true;
				}
			}
			var wybor_przelotu = document.getElementById("wybor_przelot");
			for(i=1; i <  wybor_przelotu.options.length; i++)
			{
				if(i==2)
				{
				 wybor_przelotu.options[i].disabled = false;
				}
				else
				{
				 wybor_przelotu.options[i].disabled = true;
				}
			}
			var wybor_ukladu_dlawnic = document.getElementById("wybor_ukladu_dlawnic");
			for(i=1; i <  wybor_ukladu_dlawnic.options.length; i++)
			{
				if(i==1)
				{
				 wybor_ukladu_dlawnic.options[i].disabled = false;
				}
				else
				{
				 wybor_ukladu_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_mocowania = document.getElementById("wybor_mocowania");
			for(i=1; i < wybor_mocowania.options.length; i++)
			{
				if(i==12)
				{
				 wybor_mocowania.options[i].disabled = false;
				}
				else
				{
				wybor_mocowania.options[i].disabled = true;
				}
			}	
		}
		if(wybrano == 'INV320LED')
		{
			istnienieWyposazeniaDodatkowego=false;
			//var obrazek = document.getElementById("obrazek");
			//obrazek.src = "INV320LED_oprawa.jpg";
			okablowanie="2";
			//var obudowa_oprawy = document.getElementById("4-obudowa");
			//obudowa_oprawy.className = "row pokazane";
			
				document.getElementById("linki").innerHTML = 
				'<p style="font-size: 20px; color: #666666;">Odnośniki&nbsp;&nbsp;&nbsp;&nbsp;<em class="fa fa-download"></em></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/produkty/wandaloodporne-oprawy-oswietleniowe-do-infrastruktury-kolejowej-i-tuneli/39-inv320led" target="_blank">Link do strony oprawy oświetleniowej</a></p> <p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/wandaloodporne_oprawy_oswietleniowe_do_infrastruktury_kolejowej_i_tuneli/INV320LED/INV320LED_karta_katalogowa.pdf" target="_blank">Karta katalogowa</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/wandaloodporne_oprawy_oswietleniowe_do_infrastruktury_kolejowej_i_tuneli/INV320LED/INV320LED_dopuszczenie_CNBOP.pdf" target="_blank">Dopuszczenie CNBOP</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/wandaloodporne_oprawy_oswietleniowe_do_infrastruktury_kolejowej_i_tuneli/INV320LED/INV320LED_dopuszczenie_PKP_PLK.pdf" target="_blank">Dopuszczenie PKP PLK</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/wandaloodporne_oprawy_oswietleniowe_do_infrastruktury_kolejowej_i_tuneli/INV320LED/Certyfikat_ENEC.pdf" target="_blank">Certyfikat ENEC</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/wandaloodporne_oprawy_oswietleniowe_do_infrastruktury_kolejowej_i_tuneli/INV320LED/INV320LED_EU_declaration.pdf" target="_blank">Deklaracja UE</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/wandaloodporne_oprawy_oswietleniowe_do_infrastruktury_kolejowej_i_tuneli/INV320LED/Fotometria.zip" target="_blank">Fotometria wszystkich wersji</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a id=fotometriaDanegoTypu class="ukryte" href="" target="_blank">Fotometria wybranego typu</a></p>';
			
			
			
			var wybor_strumienia = document.getElementById("wybor_strumienia");
			for(i=1; i < wybor_strumienia.options.length; i++)
			{
				if(i==41 || i==42 || i==43|| i==44|| i==45|| i==46|| i==47|| i==48|| i==49|| i==50)
				{
				wybor_strumienia.options[i].disabled = false;
				}
				else
				{
				wybor_strumienia.options[i].disabled = true;
				}
			}
			var wybor_obudowy = document.getElementById("wybor_obudowy");
			for(i=1; i < wybor_obudowy.options.length; i++)
			{
				if(i==2)
				{
				wybor_obudowy.options[i].disabled = false;
				}
				else
				{
				wybor_obudowy.options[i].disabled = true;
				}
			}
			var wybor_klosza = document.getElementById("wybor_klosza");
			for(i=1; i < wybor_klosza.options.length; i++)
			{
				if(i==3)
				{
				wybor_klosza.options[i].disabled = false;
				}
				else
				{
				wybor_klosza.options[i].disabled = true;
				}
			}
			var wybor_material_dlawnic = document.getElementById("wybor_materialu_dlawnic");
			for(i=1; i < wybor_material_dlawnic.options.length; i++)
			{
				if(i==1)
				{
				wybor_material_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_material_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wielkosci_dlawnic = document.getElementById("wybor_wielkosci_dlawnic");
			for(i=1; i < wybor_wielkosci_dlawnic.options.length; i++)
			{
				if(i==3)
				{
				wybor_wielkosci_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_wielkosci_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wersji_awaryjnej = document.getElementById("wybor_awaryjna");
			for(i=1; i <  wybor_wersji_awaryjnej.options.length; i++)
			{
				if(i==1 || i==2 || i==3 || i==4 || i==5 || i==6)
				{
				 wybor_wersji_awaryjnej.options[i].disabled = false;
				}
				else
				{
				wybor_wersji_awaryjnej.options[i].disabled = true;
				}
			}
			var wybor_przelotu = document.getElementById("wybor_przelot");
			for(i=1; i <  wybor_przelotu.options.length; i++)
			{
				if(i==1 || i==2)
				{
				 wybor_przelotu.options[i].disabled = false;
				}
				else
				{
				 wybor_przelotu.options[i].disabled = true;
				}
			}
			var wybor_ukladu_dlawnic = document.getElementById("wybor_ukladu_dlawnic");
			for(i=1; i <  wybor_ukladu_dlawnic.options.length; i++)
			{
				if(i==2)
				{
				 wybor_ukladu_dlawnic.options[i].disabled = false;
				}
				else
				{
				 wybor_ukladu_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_mocowania = document.getElementById("wybor_mocowania");
			for(i=1; i < wybor_mocowania.options.length; i++)
			{
				if(i==10)
				{
				 wybor_mocowania.options[i].disabled = false;
				}
				else
				{
				wybor_mocowania.options[i].disabled = true;
				}
			}
		}
		if(wybrano == 'INV320LEDSF')
		{
			istnienieWyposazeniaDodatkowego=false;
			//var obrazek = document.getElementById("obrazek");
			//obrazek.src = "INV320LED_SF_oprawa.jpg";
			okablowanie="2";
			wersja_dodatkowa = "-SF";
			nazwa_oprawy = "INV320LED";
			//var obudowa_oprawy = document.getElementById("4-obudowa");
			//obudowa_oprawy.className = "row pokazane";
			
				document.getElementById("linki").innerHTML = 
				'<p style="font-size: 20px; color: #666666;">Odnośniki&nbsp;&nbsp;&nbsp;&nbsp;<em class="fa fa-download"></em></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/produkty/wandaloodporne-oprawy-oswietleniowe-do-infrastruktury-kolejowej-i-tuneli/78-inv320led-sf" target="_blank">Link do strony oprawy oświetleniowej</a></p> <p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/wandaloodporne_oprawy_oswietleniowe_do_infrastruktury_kolejowej_i_tuneli/INV320LED-SF/INV320LED-SF_karta_katalogowa.pdf" target="_blank">Karta katalogowa</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/wandaloodporne_oprawy_oswietleniowe_do_infrastruktury_kolejowej_i_tuneli/INV320LED-SF/INV320LED-SF_dopuszczenie_CNBOP.pdf" target="_blank">Dopuszczenie CNBOP</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/wandaloodporne_oprawy_oswietleniowe_do_infrastruktury_kolejowej_i_tuneli/INV320LED-SF/INV320LED-SF_dopuszczenie_PKP_PLK.pdf" target="_blank">Dopuszczenie PKP PLK</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/wandaloodporne_oprawy_oswietleniowe_do_infrastruktury_kolejowej_i_tuneli/INV320LED/Certyfikat_ENEC.pdf" target="_blank">Certyfikat ENEC</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/wandaloodporne_oprawy_oswietleniowe_do_infrastruktury_kolejowej_i_tuneli/INV320LED-SF/INV320LED-..-SF_EU_declaration.pdf" target="_blank">Deklaracja UE</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/wandaloodporne_oprawy_oswietleniowe_do_infrastruktury_kolejowej_i_tuneli/INV320LED/Fotometria.zip" target="_blank">Fotometria wszystkich wersji</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a id=fotometriaDanegoTypu class="ukryte" href="" target="_blank">Fotometria wybranego typu</a></p>';
			
			
			
			var wybor_strumienia = document.getElementById("wybor_strumienia");
			for(i=1; i < wybor_strumienia.options.length; i++)
			{
				if(i==51 || i==52 || i==53|| i==54|| i==55|| i==56|| i==57|| i==58|| i==59|| i==60|| i==61)
				{
				wybor_strumienia.options[i].disabled = false;
				}
				else
				{
				wybor_strumienia.options[i].disabled = true;
				}
			}
			var wybor_obudowy = document.getElementById("wybor_obudowy");
			for(i=1; i < wybor_obudowy.options.length; i++)
			{
				if(i==2)
				{
				wybor_obudowy.options[i].disabled = false;
				}
				else
				{
				wybor_obudowy.options[i].disabled = true;
				}
			}
			var wybor_klosza = document.getElementById("wybor_klosza");
			for(i=1; i < wybor_klosza.options.length; i++)
			{
				if(i==3)
				{
				wybor_klosza.options[i].disabled = false;
				}
				else
				{
				wybor_klosza.options[i].disabled = true;
				}
			}
			var wybor_material_dlawnic = document.getElementById("wybor_materialu_dlawnic");
			for(i=1; i < wybor_material_dlawnic.options.length; i++)
			{
				if(i==1)
				{
				wybor_material_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_material_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wielkosci_dlawnic = document.getElementById("wybor_wielkosci_dlawnic");
			for(i=1; i < wybor_wielkosci_dlawnic.options.length; i++)
			{
				if(i==3)
				{
				wybor_wielkosci_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_wielkosci_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wersji_awaryjnej = document.getElementById("wybor_awaryjna");
			for(i=1; i <  wybor_wersji_awaryjnej.options.length; i++)
			{
				if(i==1 || i==2 || i==3 || i==4 || i==5 || i==6)
				{
				 wybor_wersji_awaryjnej.options[i].disabled = false;
				}
				else
				{
				wybor_wersji_awaryjnej.options[i].disabled = true;
				}
			}
			var wybor_przelotu = document.getElementById("wybor_przelot");
			for(i=1; i <  wybor_przelotu.options.length; i++)
			{
				if(i==1 || i==2)
				{
				 wybor_przelotu.options[i].disabled = false;
				}
				else
				{
				 wybor_przelotu.options[i].disabled = true;
				}
			}
			var wybor_ukladu_dlawnic = document.getElementById("wybor_ukladu_dlawnic");
			for(i=1; i <  wybor_ukladu_dlawnic.options.length; i++)
			{
				if(i==2)
				{
				 wybor_ukladu_dlawnic.options[i].disabled = false;
				}
				else
				{
				 wybor_ukladu_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_mocowania = document.getElementById("wybor_mocowania");
			for(i=1; i < wybor_mocowania.options.length; i++)
			{
				if(i==10)
				{
				 wybor_mocowania.options[i].disabled = false;
				}
				else
				{
				wybor_mocowania.options[i].disabled = true;
				}
			}
		}
		if(wybrano == 'INV320LEDRC')
		{
			istnienieWyposazeniaDodatkowego=false;
		//	var obrazek = document.getElementById("obrazek");
			//obrazek.src = "INV320LED_RC_oprawa.jpg";
			okablowanie="2";
			wersja_dodatkowa = "-RC";
			nazwa_oprawy = "INV320LED";
			//var obudowa_oprawy = document.getElementById("4-obudowa");
			//obudowa_oprawy.className = "row pokazane";
			
				document.getElementById("linki").innerHTML = 
				'<p style="font-size: 20px; color: #666666;">Odnośniki&nbsp;&nbsp;&nbsp;&nbsp;<em class="fa fa-download"></em></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/produkty/wandaloodporne-oprawy-oswietleniowe-do-infrastruktury-kolejowej-i-tuneli/260-inv320led-rc" target="_blank">Link do strony oprawy oświetleniowej</a></p> <p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/wandaloodporne_oprawy_oswietleniowe_do_infrastruktury_kolejowej_i_tuneli/INV320LED-..-RC/INV320LED-..-RC_karta_katalogowa.pdf" target="_blank">Karta katalogowa</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/wandaloodporne_oprawy_oswietleniowe_do_infrastruktury_kolejowej_i_tuneli/INV320LED-SF/INV320LED-SF_dopuszczenie_CNBOP.pdf" target="_blank">Dopuszczenie CNBOP</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/wandaloodporne_oprawy_oswietleniowe_do_infrastruktury_kolejowej_i_tuneli/INV320LED-SF/INV320LED-SF_dopuszczenie_PKP_PLK.pdf" target="_blank">Dopuszczenie PKP PLK</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/wandaloodporne_oprawy_oswietleniowe_do_infrastruktury_kolejowej_i_tuneli/INV320LED-..-RC/Certyfikat_ENEC_RC.pdf" target="_blank">Certyfikat ENEC</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/wandaloodporne_oprawy_oswietleniowe_do_infrastruktury_kolejowej_i_tuneli/INV320LED-RC/INV320LED-..-RC_EU_declaration.pdf" target="_blank">Deklaracja UE</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/wandaloodporne_oprawy_oswietleniowe_do_infrastruktury_kolejowej_i_tuneli/INV320LED-..-RC/Fotometria.zip" target="_blank">Fotometria wszystkich wersji</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a id=fotometriaDanegoTypu class="ukryte" href="" target="_blank">Fotometria wybranego typu</a></p>';
			
			
			
			var wybor_strumienia = document.getElementById("wybor_strumienia");
			for(i=1; i < wybor_strumienia.options.length; i++)
			{
				if(i==62 || i==63 || i==64|| i==65|| i==66|| i==67|| i==68|| i==69|| i==70)
				{
				wybor_strumienia.options[i].disabled = false;
				}
				else
				{
				wybor_strumienia.options[i].disabled = true;
				}
			}
			var wybor_obudowy = document.getElementById("wybor_obudowy");
			for(i=1; i < wybor_obudowy.options.length; i++)
			{
				if(i==2)
				{
				wybor_obudowy.options[i].disabled = false;
				}
				else
				{
				wybor_obudowy.options[i].disabled = true;
				}
			}
			var wybor_klosza = document.getElementById("wybor_klosza");
			for(i=1; i < wybor_klosza.options.length; i++)
			{
				if(i==3)
				{
				wybor_klosza.options[i].disabled = false;
				}
				else
				{
				wybor_klosza.options[i].disabled = true;
				}
			}
			var wybor_material_dlawnic = document.getElementById("wybor_materialu_dlawnic");
			for(i=1; i < wybor_material_dlawnic.options.length; i++)
			{
				if(i==1)
				{
				wybor_material_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_material_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wielkosci_dlawnic = document.getElementById("wybor_wielkosci_dlawnic");
			for(i=1; i < wybor_wielkosci_dlawnic.options.length; i++)
			{
				if(i==3)
				{
				wybor_wielkosci_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_wielkosci_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wersji_awaryjnej = document.getElementById("wybor_awaryjna");
			for(i=1; i <  wybor_wersji_awaryjnej.options.length; i++)
			{
				if(i==1 || i==2 || i==3 || i==4 || i==5 || i==6)
				{
				 wybor_wersji_awaryjnej.options[i].disabled = false;
				}
				else
				{
				wybor_wersji_awaryjnej.options[i].disabled = true;
				}
			}
			var wybor_przelotu = document.getElementById("wybor_przelot");
			for(i=1; i <  wybor_przelotu.options.length; i++)
			{
				if(i==1 || i==2)
				{
				 wybor_przelotu.options[i].disabled = false;
				}
				else
				{
				 wybor_przelotu.options[i].disabled = true;
				}
			}
			var wybor_ukladu_dlawnic = document.getElementById("wybor_ukladu_dlawnic");
			for(i=1; i <  wybor_ukladu_dlawnic.options.length; i++)
			{
				if(i==2 || i==4 || i==5)
				{
				 wybor_ukladu_dlawnic.options[i].disabled = false;
				}
				else
				{
				 wybor_ukladu_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_mocowania = document.getElementById("wybor_mocowania");
			for(i=1; i < wybor_mocowania.options.length; i++)
			{
				if(i==11)
				{
				 wybor_mocowania.options[i].disabled = false;
				}
				else
				{
				wybor_mocowania.options[i].disabled = true;
				}
			}
		}
		if(wybrano == 'INV360LED')
		{
			istnienieWyposazeniaDodatkowego = true;
			//var obrazek = document.getElementById("obrazek");
			//obrazek.src = "INV360LED_oprawa.jpg";
			okablowanie="3";
			//var obudowa_oprawy = document.getElementById("4-obudowa");
			//obudowa_oprawy.className = "row pokazane";
			
				document.getElementById("linki").innerHTML = 
				'<p style="font-size: 20px; color: #666666;">Odnośniki&nbsp;&nbsp;&nbsp;&nbsp;<em class="fa fa-download"></em></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/produkty/wandaloodporne-oprawy-oswietleniowe-do-infrastruktury-kolejowej-i-tuneli/80-inv360led" target="_blank">Link do strony oprawy oświetleniowej</a></p> <p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/wandaloodporne_oprawy_oswietleniowe_do_infrastruktury_kolejowej_i_tuneli/INV360LED/INV360LED_karta_katalogowa.pdf" target="_blank">Karta katalogowa</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/wandaloodporne_oprawy_oswietleniowe_do_infrastruktury_kolejowej_i_tuneli/INV360LED/INV360LED_EU_declaration.pdf" target="_blank">Deklaracja UE</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/wandaloodporne_oprawy_oswietleniowe_do_infrastruktury_kolejowej_i_tuneli/INV360LED/Fotometria.zip" target="_blank">Fotometria wszystkich wersji</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a id=fotometriaDanegoTypu class="ukryte" href="" target="_blank">Fotometria wybranego typu</a></p>';
			
			
			
			var wybor_strumienia = document.getElementById("wybor_strumienia");
			for(i=1; i < wybor_strumienia.options.length; i++)
			{
				if(i==71 || i==72 || i==73)
				{
				wybor_strumienia.options[i].disabled = false;
				}
				else
				{
				wybor_strumienia.options[i].disabled = true;
				}
			}
			var wybor_obudowy = document.getElementById("wybor_obudowy");
			for(i=1; i < wybor_obudowy.options.length; i++)
			{
				if(i==2)
				{
				wybor_obudowy.options[i].disabled = false;
				}
				else
				{
				wybor_obudowy.options[i].disabled = true;
				}
			}
			var wybor_klosza = document.getElementById("wybor_klosza");
			for(i=1; i < wybor_klosza.options.length; i++)
			{
				if(i==3)
				{
				wybor_klosza.options[i].disabled = false;
				}
				else
				{
				wybor_klosza.options[i].disabled = true;
				}
			}
			var wybor_material_dlawnic = document.getElementById("wybor_materialu_dlawnic");
			for(i=1; i < wybor_material_dlawnic.options.length; i++)
			{
				if(i==1)
				{
				wybor_material_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_material_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wielkosci_dlawnic = document.getElementById("wybor_wielkosci_dlawnic");
			for(i=1; i < wybor_wielkosci_dlawnic.options.length; i++)
			{
				if(i==3)
				{
				wybor_wielkosci_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_wielkosci_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wersji_awaryjnej = document.getElementById("wybor_awaryjna");
			for(i=1; i <  wybor_wersji_awaryjnej.options.length; i++)
			{
				if(i==1)
				{
				 wybor_wersji_awaryjnej.options[i].disabled = false;
				}
				else
				{
				wybor_wersji_awaryjnej.options[i].disabled = true;
				}
			}
			var wybor_przelotu = document.getElementById("wybor_przelot");
			for(i=1; i <  wybor_przelotu.options.length; i++)
			{
				if(i==1)
				{
				 wybor_przelotu.options[i].disabled = false;
				}
				else
				{
				 wybor_przelotu.options[i].disabled = true;
				}
			}
			var wybor_ukladu_dlawnic = document.getElementById("wybor_ukladu_dlawnic");
			for(i=1; i <  wybor_ukladu_dlawnic.options.length; i++)
			{
				if(i==3)
				{
				 wybor_ukladu_dlawnic.options[i].disabled = false;
				}
				else
				{
				 wybor_ukladu_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_mocowania = document.getElementById("wybor_mocowania");
			for(i=1; i < wybor_mocowania.options.length; i++)
			{
				if(i==10)
				{
				 wybor_mocowania.options[i].disabled = false;
				}
				else
				{
				wybor_mocowania.options[i].disabled = true;
				}
			}
			var wybor_wyposazenia_dodatkowego = document.getElementById("wybor_wyposazenia_dodatkowego");
			for(i=1; i < wybor_wyposazenia_dodatkowego.options.length; i++)
			{
				if(i==1 || i==2)
				{
				 wybor_wyposazenia_dodatkowego.options[i].disabled = false;
				}
				else
				{
				wybor_wyposazenia_dodatkowego.options[i].disabled = true;
				}
			}
		}
		if(wybrano == 'INS230')
		{
			istnienieWyposazeniaDodatkowego = false;
			//var obrazek = document.getElementById("obrazek");
			//obrazek.src = "INS230_oprawa.jpg";
			okablowanie="2";
			wersja_dodatkowa = "-II";
			
				document.getElementById("linki").innerHTML = 
				'<p style="font-size: 20px; color: #666666;">Odnośniki&nbsp;&nbsp;&nbsp;&nbsp;<em class="fa fa-download"></em></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/produkty/wandaloodporne-oprawy-oswietleniowe-do-infrastruktury-kolejowej-i-tuneli/136-ins230" target="_blank">Link do strony oprawy oświetleniowej</a></p> <p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/wandaloodporne_oprawy_oswietleniowe_do_infrastruktury_kolejowej_i_tuneli/INS230/INS230_karta_katalogowa.pdf" target="_blank">Karta katalogowa</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/wandaloodporne_oprawy_oswietleniowe_do_infrastruktury_kolejowej_i_tuneli/INS230/INS230_CE_declaration.pdf" target="_blank">Deklaracja UE</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/wandaloodporne_oprawy_oswietleniowe_do_infrastruktury_kolejowej_i_tuneli/INS230/INS230_dopuszczenie_PKP_PLK.pdf" target="_blank">Dopuszczenie PKP PLK</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/wandaloodporne_oprawy_oswietleniowe_do_infrastruktury_kolejowej_i_tuneli/INS230/fotometria_INS230.zip" target="_blank">Fotometria wszystkich wersji</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a id=fotometriaDanegoTypu class="ukryte" href="" target="_blank">Fotometria wybranego typu</a></p>';
			
			var wybor_strumienia = document.getElementById("wybor_strumienia");
			for(i=1; i < wybor_strumienia.options.length; i++)
			{
				if(i==74 || i==75 || i==76)
				{
				wybor_strumienia.options[i].disabled = false;
				}
				else
				{
				wybor_strumienia.options[i].disabled = true;
				}
			}
			var wybor_obudowy = document.getElementById("wybor_obudowy");
			for(i=1; i < wybor_obudowy.options.length; i++)
			{
				if(i==3)
				{
				wybor_obudowy.options[i].disabled = false;
				}
				else
				{
				wybor_obudowy.options[i].disabled = true;
				}
			}
			var wybor_klosza = document.getElementById("wybor_klosza");
			for(i=1; i < wybor_klosza.options.length; i++)
			{
				if(i==3 || i==4 || i==5)
				{
				wybor_klosza.options[i].disabled = false;
				}
				else
				{
				wybor_klosza.options[i].disabled = true;
				}
			}
			var wybor_material_dlawnic = document.getElementById("wybor_materialu_dlawnic");
			for(i=1; i < wybor_material_dlawnic.options.length; i++)
			{
				if(i==2 || i==3)
				{
				wybor_material_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_material_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wielkosci_dlawnic = document.getElementById("wybor_wielkosci_dlawnic");
			for(i=1; i < wybor_wielkosci_dlawnic.options.length; i++)
			{
				if(i==1 || i==2)
				{
				wybor_wielkosci_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_wielkosci_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wersji_awaryjnej = document.getElementById("wybor_awaryjna");
			for(i=1; i <  wybor_wersji_awaryjnej.options.length; i++)
			{
				if(i==1)
				{
				 wybor_wersji_awaryjnej.options[i].disabled = false;
				}
				else
				{
				wybor_wersji_awaryjnej.options[i].disabled = true;
				}
			}
			var wybor_przelotu = document.getElementById("wybor_przelot");
			for(i=1; i <  wybor_przelotu.options.length; i++)
			{
				if(i==1 || i==2)
				{
				 wybor_przelotu.options[i].disabled = false;
				}
				else
				{
				 wybor_przelotu.options[i].disabled = true;
				}
			}
			var wybor_ukladu_dlawnic = document.getElementById("wybor_ukladu_dlawnic");
			for(i=1; i <  wybor_ukladu_dlawnic.options.length; i++)
			{
				if(i==1 || i==2 || i==3 || i==4 || i==5)
				{
				 wybor_ukladu_dlawnic.options[i].disabled = false;
				}
				else
				{
				 wybor_ukladu_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_mocowania = document.getElementById("wybor_mocowania");
			for(i=1; i < wybor_mocowania.options.length; i++)
			{
				if(i==1 || i==3 || i==4)
				{
				 wybor_mocowania.options[i].disabled = false;
				}
				else
				{
				wybor_mocowania.options[i].disabled = true;
				}
			}
		}
		if(wybrano == 'INS340')
		{
			istnienieWyposazeniaDodatkowego = false;
			//var obrazek = document.getElementById("obrazek");
			//obrazek.src = "INS230_oprawa.jpg";
			okablowanie="2";
			wersja_dodatkowa = "-II";
			
				document.getElementById("linki").innerHTML = 
				'<p style="font-size: 20px; color: #666666;">Odnośniki&nbsp;&nbsp;&nbsp;&nbsp;<em class="fa fa-download"></em></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/produkty/wandaloodporne-oprawy-oswietleniowe-do-infrastruktury-kolejowej-i-tuneli/138-ins340" target="_blank">Link do strony oprawy oświetleniowej</a></p> <p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/wandaloodporne_oprawy_oswietleniowe_do_infrastruktury_kolejowej_i_tuneli/INS340/INS340_karta_katalogowa.pdf" target="_blank">Karta katalogowa</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/wandaloodporne_oprawy_oswietleniowe_do_infrastruktury_kolejowej_i_tuneli/INS340/INS340_CE_declaration.pdf" target="_blank">Deklaracja UE</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/wandaloodporne_oprawy_oswietleniowe_do_infrastruktury_kolejowej_i_tuneli/INS340/INS340_dopuszczenie_PKP_PLK.pdf" target="_blank">Dopuszczenie PKP PLK</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/wandaloodporne_oprawy_oswietleniowe_do_infrastruktury_kolejowej_i_tuneli/INS340/fotometria.zip" target="_blank">Fotometria wszystkich wersji</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a id=fotometriaDanegoTypu class="ukryte" href="" target="_blank">Fotometria wybranego typu</a></p>';
			
			var wybor_strumienia = document.getElementById("wybor_strumienia");
			for(i=1; i < wybor_strumienia.options.length; i++)
			{
				if(i==77 || i==78)
				{
				wybor_strumienia.options[i].disabled = false;
				}
				else
				{
				wybor_strumienia.options[i].disabled = true;
				}
			}
			var wybor_obudowy = document.getElementById("wybor_obudowy");
			for(i=1; i < wybor_obudowy.options.length; i++)
			{
				if(i==1 || i==2)
				{
				wybor_obudowy.options[i].disabled = false;
				}
				else
				{
				wybor_obudowy.options[i].disabled = true;
				}
			}
			var wybor_klosza = document.getElementById("wybor_klosza");
			for(i=1; i < wybor_klosza.options.length; i++)
			{
				if(i==3)
				{
				wybor_klosza.options[i].disabled = false;
				}
				else
				{
				wybor_klosza.options[i].disabled = true;
				}
			}
			var wybor_material_dlawnic = document.getElementById("wybor_materialu_dlawnic");
			for(i=1; i < wybor_material_dlawnic.options.length; i++)
			{
				if(i==2 || i==3)
				{
				wybor_material_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_material_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wielkosci_dlawnic = document.getElementById("wybor_wielkosci_dlawnic");
			for(i=1; i < wybor_wielkosci_dlawnic.options.length; i++)
			{
				if(i==1 || i==2)
				{
				wybor_wielkosci_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_wielkosci_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wersji_awaryjnej = document.getElementById("wybor_awaryjna");
			for(i=1; i <  wybor_wersji_awaryjnej.options.length; i++)
			{
				if(i==1)
				{
				 wybor_wersji_awaryjnej.options[i].disabled = false;
				}
				else
				{
				wybor_wersji_awaryjnej.options[i].disabled = true;
				}
			}
			var wybor_przelotu = document.getElementById("wybor_przelot");
			for(i=1; i <  wybor_przelotu.options.length; i++)
			{
				if(i==1 || i==2)
				{
				 wybor_przelotu.options[i].disabled = false;
				}
				else
				{
				 wybor_przelotu.options[i].disabled = true;
				}
			}
			var wybor_ukladu_dlawnic = document.getElementById("wybor_ukladu_dlawnic");
			for(i=1; i <  wybor_ukladu_dlawnic.options.length; i++)
			{
				if(i==1 || i==2 || i==3 || i==4 || i==5)
				{
				 wybor_ukladu_dlawnic.options[i].disabled = false;
				}
				else
				{
				 wybor_ukladu_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_mocowania = document.getElementById("wybor_mocowania");
			for(i=1; i < wybor_mocowania.options.length; i++)
			{
				if(i==1|| i==2  || i==3 || i==4)
				{
				 wybor_mocowania.options[i].disabled = false;
				}
				else
				{
				wybor_mocowania.options[i].disabled = true;
				}
			}
		}
		if(wybrano == 'INP320LED')
		{
			istnienieWyposazeniaDodatkowego=true;
			//var obrazek = document.getElementById("obrazek");
			//obrazek.src = "INP320LED_oprawa.jpg";
			okablowanie="3";
			//var obudowa_oprawy = document.getElementById("4-obudowa");
			//obudowa_oprawy.className = "row pokazane";
			
				document.getElementById("linki").innerHTML = 
				'<p style="font-size: 20px; color: #666666;">Odnośniki&nbsp;&nbsp;&nbsp;&nbsp;<em class="fa fa-download"></em></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/produkty/oprawy-oswietleniowe-do-zakladow-penitencjarnych-i-wiezien/248-inp320led" target="_blank">Link do strony oprawy oświetleniowej</a></p> <p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/oprawy_wandaloodporne_zaklady_penitencjarne/INV320LED/INV320LED_karta_katalogowa.pdf" target="_blank">Karta katalogowa</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/oprawy_wandaloodporne_zaklady_penitencjarne/INP320LED/INP320LED_EU_declaration.pdf" target="_blank">Deklaracja UE</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/wandaloodporne_oprawy_oswietleniowe_do_infrastruktury_kolejowej_i_tuneli/INV320LED/Fotometria.zip" target="_blank">Fotometria wszystkich wersji</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a id=fotometriaDanegoTypu class="ukryte" href="" target="_blank">Fotometria wybranego typu</a></p>';
			
			
			
			var wybor_strumienia = document.getElementById("wybor_strumienia");
			for(i=1; i < wybor_strumienia.options.length; i++)
			{
				if(i==41 || i==42 || i==43|| i==44|| i==45|| i==46|| i==47|| i==48|| i==49|| i==50|| i==79|| i==80|| i==81|| i==82)
				{
				wybor_strumienia.options[i].disabled = false;
				}
				else
				{
				wybor_strumienia.options[i].disabled = true;
				}
			}
			var wybor_obudowy = document.getElementById("wybor_obudowy");
			for(i=1; i < wybor_obudowy.options.length; i++)
			{
				if(i==1 || i==2)
				{
				wybor_obudowy.options[i].disabled = false;
				}
				else
				{
				wybor_obudowy.options[i].disabled = true;
				}
			}
			var wybor_klosza = document.getElementById("wybor_klosza");
			for(i=1; i < wybor_klosza.options.length; i++)
			{
				if(i==3)
				{
				wybor_klosza.options[i].disabled = false;
				}
				else
				{
				wybor_klosza.options[i].disabled = true;
				}
			}
			var wybor_material_dlawnic = document.getElementById("wybor_materialu_dlawnic");
			for(i=1; i < wybor_material_dlawnic.options.length; i++)
			{
				if(i==1)
				{
				wybor_material_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_material_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wielkosci_dlawnic = document.getElementById("wybor_wielkosci_dlawnic");
			for(i=1; i < wybor_wielkosci_dlawnic.options.length; i++)
			{
				if(i==3)
				{
				wybor_wielkosci_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_wielkosci_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wersji_awaryjnej = document.getElementById("wybor_awaryjna");
			for(i=1; i <  wybor_wersji_awaryjnej.options.length; i++)
			{
				if(i==1 || i==2 || i==4)
				{
				 wybor_wersji_awaryjnej.options[i].disabled = false;
				}
				else
				{
				wybor_wersji_awaryjnej.options[i].disabled = true;
				}
			}
			var wybor_przelotu = document.getElementById("wybor_przelot");
			for(i=1; i <  wybor_przelotu.options.length; i++)
			{
				if(i==1 || i==2)
				{
				 wybor_przelotu.options[i].disabled = false;
				}
				else
				{
				 wybor_przelotu.options[i].disabled = true;
				}
			}
			var wybor_ukladu_dlawnic = document.getElementById("wybor_ukladu_dlawnic");
			for(i=1; i <  wybor_ukladu_dlawnic.options.length; i++)
			{
				if(i==2)
				{
				 wybor_ukladu_dlawnic.options[i].disabled = false;
				}
				else
				{
				 wybor_ukladu_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_mocowania = document.getElementById("wybor_mocowania");
			for(i=1; i < wybor_mocowania.options.length; i++)
			{
				if(i==10)
				{
				 wybor_mocowania.options[i].disabled = false;
				}
				else
				{
				wybor_mocowania.options[i].disabled = true;
				}
			}
			var wybor_wyposazenia_dodatkowego = document.getElementById("wybor_wyposazenia_dodatkowego");
			for(i=1; i < wybor_wyposazenia_dodatkowego.options.length; i++)
			{
				if(i==1 || i==3 || i==4 || i==6)
				{
				 wybor_wyposazenia_dodatkowego.options[i].disabled = false;
				}
				else
				{
				wybor_wyposazenia_dodatkowego.options[i].disabled = true;
				}
			}
		}
		if(wybrano == 'INP320LEDSF')
		{
			istnienieWyposazeniaDodatkowego=true;
			//var obrazek = document.getElementById("obrazek");
			//obrazek.src = "INP320LED_SF_oprawa.jpg";
			okablowanie="3";
			wersja_dodatkowa = "-SF";
			nazwa_oprawy = "INP320LED";
			//var obudowa_oprawy = document.getElementById("4-obudowa");
			//obudowa_oprawy.className = "row pokazane";
			
				document.getElementById("linki").innerHTML = 
				'<p style="font-size: 20px; color: #666666;">Odnośniki&nbsp;&nbsp;&nbsp;&nbsp;<em class="fa fa-download"></em></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/produkty/oprawy-oswietleniowe-do-zakladow-penitencjarnych-i-wiezien/249-inp320led-sf" target="_blank">Link do strony oprawy oświetleniowej</a></p> <p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/oprawy_wandaloodporne_zaklady_penitencjarne/INP320LED-SF/INP320LED-SF_karta_katalogowa.pdf" target="_blank">Karta katalogowa</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produktyoprawy_wandaloodporne_zaklady_penitencjarne/INP320LED-SF/INP320LED-..-SF_EU_declaration.pdf" target="_blank">Deklaracja UE</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/wandaloodporne_oprawy_oswietleniowe_do_infrastruktury_kolejowej_i_tuneli/INV320LED/Fotometria.zip" target="_blank">Fotometria wszystkich wersji</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a id=fotometriaDanegoTypu class="ukryte" href="" target="_blank">Fotometria wybranego typu</a></p>';
			
			
			
			var wybor_strumienia = document.getElementById("wybor_strumienia");
			for(i=1; i < wybor_strumienia.options.length; i++)
			{
				if(i==51 || i==52 || i==53|| i==54|| i==55|| i==56|| i==57|| i==58|| i==59|| i==60|| i==61|| i==79|| i==80|| i==81|| i==82)
				{
				wybor_strumienia.options[i].disabled = false;
				}
				else
				{
				wybor_strumienia.options[i].disabled = true;
				}
			}
			var wybor_obudowy = document.getElementById("wybor_obudowy");
			for(i=1; i < wybor_obudowy.options.length; i++)
			{
				if(i==1 || i==2)
				{
				wybor_obudowy.options[i].disabled = false;
				}
				else
				{
				wybor_obudowy.options[i].disabled = true;
				}
			}
			var wybor_klosza = document.getElementById("wybor_klosza");
			for(i=1; i < wybor_klosza.options.length; i++)
			{
				if(i==3)
				{
				wybor_klosza.options[i].disabled = false;
				}
				else
				{
				wybor_klosza.options[i].disabled = true;
				}
			}
			var wybor_material_dlawnic = document.getElementById("wybor_materialu_dlawnic");
			for(i=1; i < wybor_material_dlawnic.options.length; i++)
			{
				if(i==1)
				{
				wybor_material_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_material_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wielkosci_dlawnic = document.getElementById("wybor_wielkosci_dlawnic");
			for(i=1; i < wybor_wielkosci_dlawnic.options.length; i++)
			{
				if(i==3)
				{
				wybor_wielkosci_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_wielkosci_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wersji_awaryjnej = document.getElementById("wybor_awaryjna");
			for(i=1; i <  wybor_wersji_awaryjnej.options.length; i++)
			{
				if(i==1 || i==2 || i==4)
				{
				 wybor_wersji_awaryjnej.options[i].disabled = false;
				}
				else
				{
				wybor_wersji_awaryjnej.options[i].disabled = true;
				}
			}
			var wybor_przelotu = document.getElementById("wybor_przelot");
			for(i=1; i <  wybor_przelotu.options.length; i++)
			{
				if(i==1 || i==2)
				{
				 wybor_przelotu.options[i].disabled = false;
				}
				else
				{
				 wybor_przelotu.options[i].disabled = true;
				}
			}
			var wybor_ukladu_dlawnic = document.getElementById("wybor_ukladu_dlawnic");
			for(i=1; i <  wybor_ukladu_dlawnic.options.length; i++)
			{
				if(i==2)
				{
				 wybor_ukladu_dlawnic.options[i].disabled = false;
				}
				else
				{
				 wybor_ukladu_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_mocowania = document.getElementById("wybor_mocowania");
			for(i=1; i < wybor_mocowania.options.length; i++)
			{
				if(i==10)
				{
				 wybor_mocowania.options[i].disabled = false;
				}
				else
				{
				wybor_mocowania.options[i].disabled = true;
				}
			}
			var wybor_wyposazenia_dodatkowego = document.getElementById("wybor_wyposazenia_dodatkowego");
			for(i=1; i < wybor_wyposazenia_dodatkowego.options.length; i++)
			{
				if(i==1 ||i==3 || i==4 || i==6)
				{
				 wybor_wyposazenia_dodatkowego.options[i].disabled = false;
				}
				else
				{
				wybor_wyposazenia_dodatkowego.options[i].disabled = true;
				}
			}
		}
		if(wybrano == 'INP320LEDRC')
		{
			istnienieWyposazeniaDodatkowego=true;
			//var obrazek = document.getElementById("obrazek");
			//obrazek.src = "INP320LED_RC_oprawa.jpg";
			okablowanie="2";
			wersja_dodatkowa = "-RC";
			nazwa_oprawy = "INP320LED";
			//var obudowa_oprawy = document.getElementById("4-obudowa");
			//obudowa_oprawy.className = "row pokazane";
			
				document.getElementById("linki").innerHTML = 
				'<p style="font-size: 20px; color: #666666;">Odnośniki&nbsp;&nbsp;&nbsp;&nbsp;<em class="fa fa-download"></em></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/produkty/oprawy-oswietleniowe-do-zakladow-penitencjarnych-i-wiezien/256-inp320led-rc" target="_blank">Link do strony oprawy oświetleniowej</a></p> <p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/oprawy_wandaloodporne_zaklady_penitencjarne/INP320LED-RC/INP320LED-RC_karta_katalogowa.pdf" target="_blank">Karta katalogowa</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/oprawy_wandaloodporne_zaklady_penitencjarne/INP320LED-RC/INP320LED-..-RC_EU_declaration.pdf" target="_blank">Deklaracja UE</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/wandaloodporne_oprawy_oswietleniowe_do_infrastruktury_kolejowej_i_tuneli/INV320LED-..-RC/Fotometria.zip" target="_blank">Fotometria wszystkich wersji</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a id=fotometriaDanegoTypu class="ukryte" href="" target="_blank">Fotometria wybranego typu</a></p>';
			
			
			
			var wybor_strumienia = document.getElementById("wybor_strumienia");
			for(i=1; i < wybor_strumienia.options.length; i++)
			{
				if(i==62 || i==63 || i==64|| i==65|| i==66|| i==67|| i==68|| i==69|| i==70)
				{
				wybor_strumienia.options[i].disabled = false;
				}
				else
				{
				wybor_strumienia.options[i].disabled = true;
				}
			}
			var wybor_obudowy = document.getElementById("wybor_obudowy");
			for(i=1; i < wybor_obudowy.options.length; i++)
			{
				if(i==1 || i==2)
				{
				wybor_obudowy.options[i].disabled = false;
				}
				else
				{
				wybor_obudowy.options[i].disabled = true;
				}
			}
			var wybor_klosza = document.getElementById("wybor_klosza");
			for(i=1; i < wybor_klosza.options.length; i++)
			{
				if(i==3)
				{
				wybor_klosza.options[i].disabled = false;
				}
				else
				{
				wybor_klosza.options[i].disabled = true;
				}
			}
			var wybor_material_dlawnic = document.getElementById("wybor_materialu_dlawnic");
			for(i=1; i < wybor_material_dlawnic.options.length; i++)
			{
				if(i==1)
				{
				wybor_material_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_material_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wielkosci_dlawnic = document.getElementById("wybor_wielkosci_dlawnic");
			for(i=1; i < wybor_wielkosci_dlawnic.options.length; i++)
			{
				if(i==3)
				{
				wybor_wielkosci_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_wielkosci_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wersji_awaryjnej = document.getElementById("wybor_awaryjna");
			for(i=1; i <  wybor_wersji_awaryjnej.options.length; i++)
			{
				if(i==1 || i==2 || i==4)
				{
				 wybor_wersji_awaryjnej.options[i].disabled = false;
				}
				else
				{
				wybor_wersji_awaryjnej.options[i].disabled = true;
				}
			}
			var wybor_przelotu = document.getElementById("wybor_przelot");
			for(i=1; i <  wybor_przelotu.options.length; i++)
			{
				if(i==1 || i==2)
				{
				 wybor_przelotu.options[i].disabled = false;
				}
				else
				{
				 wybor_przelotu.options[i].disabled = true;
				}
			}
			var wybor_ukladu_dlawnic = document.getElementById("wybor_ukladu_dlawnic");
			for(i=1; i <  wybor_ukladu_dlawnic.options.length; i++)
			{
				if(i==2 || i==4 || i==5)
				{
				 wybor_ukladu_dlawnic.options[i].disabled = false;
				}
				else
				{
				 wybor_ukladu_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_mocowania = document.getElementById("wybor_mocowania");
			for(i=1; i < wybor_mocowania.options.length; i++)
			{
				if(i==11)
				{
				 wybor_mocowania.options[i].disabled = false;
				}
				else
				{
				wybor_mocowania.options[i].disabled = true;
				}
			}
			var wybor_wyposazenia_dodatkowego = document.getElementById("wybor_wyposazenia_dodatkowego");
			for(i=1; i < wybor_wyposazenia_dodatkowego.options.length; i++)
			{
				if(i==1 ||i==3 || i==4|| i==6)
				{
				 wybor_wyposazenia_dodatkowego.options[i].disabled = false;
				}
				else
				{
				wybor_wyposazenia_dodatkowego.options[i].disabled = true;
				}
			}
		}
		if(wybrano == 'INP360LED')
		{
			istnienieWyposazeniaDodatkowego = true;
			//var obrazek = document.getElementById("obrazek");
			//obrazek.src = "INP360LED_oprawa.jpg";
			okablowanie="3";
			//var obudowa_oprawy = document.getElementById("4-obudowa");
			//obudowa_oprawy.className = "row pokazane";
			
				document.getElementById("linki").innerHTML = 
				'<p style="font-size: 20px; color: #666666;">Odnośniki&nbsp;&nbsp;&nbsp;&nbsp;<em class="fa fa-download"></em></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/produkty/oprawy-oswietleniowe-do-zakladow-penitencjarnych-i-wiezien/250-inp60led" target="_blank">Link do strony oprawy oświetleniowej</a></p> <p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/oprawy_wandaloodporne_zaklady_penitencjarne/INP360LED/INP360LED_karta_katalogowa.pdf" target="_blank">Karta katalogowa</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/oprawy_wandaloodporne_zaklady_penitencjarne/INP360LED/INP360LED_EU_declaration.pdf" target="_blank">Deklaracja UE</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/wandaloodporne_oprawy_oswietleniowe_do_infrastruktury_kolejowej_i_tuneli/INV360LED/Fotometria.zip" target="_blank">Fotometria wszystkich wersji</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a id=fotometriaDanegoTypu class="ukryte" href="" target="_blank">Fotometria wybranego typu</a></p>';
			
			
			
			var wybor_strumienia = document.getElementById("wybor_strumienia");
			for(i=1; i < wybor_strumienia.options.length; i++)
			{
				if(i==71 || i==72 || i==73)
				{
				wybor_strumienia.options[i].disabled = false;
				}
				else
				{
				wybor_strumienia.options[i].disabled = true;
				}
			}
			var wybor_obudowy = document.getElementById("wybor_obudowy");
			for(i=1; i < wybor_obudowy.options.length; i++)
			{
				if(i==2)
				{
				wybor_obudowy.options[i].disabled = false;
				}
				else
				{
				wybor_obudowy.options[i].disabled = true;
				}
			}
			var wybor_klosza = document.getElementById("wybor_klosza");
			for(i=1; i < wybor_klosza.options.length; i++)
			{
				if(i==3)
				{
				wybor_klosza.options[i].disabled = false;
				}
				else
				{
				wybor_klosza.options[i].disabled = true;
				}
			}
			var wybor_material_dlawnic = document.getElementById("wybor_materialu_dlawnic");
			for(i=1; i < wybor_material_dlawnic.options.length; i++)
			{
				if(i==1)
				{
				wybor_material_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_material_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wielkosci_dlawnic = document.getElementById("wybor_wielkosci_dlawnic");
			for(i=1; i < wybor_wielkosci_dlawnic.options.length; i++)
			{
				if(i==3)
				{
				wybor_wielkosci_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_wielkosci_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wersji_awaryjnej = document.getElementById("wybor_awaryjna");
			for(i=1; i <  wybor_wersji_awaryjnej.options.length; i++)
			{
				if(i==1)
				{
				 wybor_wersji_awaryjnej.options[i].disabled = false;
				}
				else
				{
				wybor_wersji_awaryjnej.options[i].disabled = true;
				}
			}
			var wybor_przelotu = document.getElementById("wybor_przelot");
			for(i=1; i <  wybor_przelotu.options.length; i++)
			{
				if(i==1)
				{
				 wybor_przelotu.options[i].disabled = false;
				}
				else
				{
				 wybor_przelotu.options[i].disabled = true;
				}
			}
			var wybor_ukladu_dlawnic = document.getElementById("wybor_ukladu_dlawnic");
			for(i=1; i <  wybor_ukladu_dlawnic.options.length; i++)
			{
				if(i==3)
				{
				 wybor_ukladu_dlawnic.options[i].disabled = false;
				}
				else
				{
				 wybor_ukladu_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_mocowania = document.getElementById("wybor_mocowania");
			for(i=1; i < wybor_mocowania.options.length; i++)
			{
				if(i==10)
				{
				 wybor_mocowania.options[i].disabled = false;
				}
				else
				{
				wybor_mocowania.options[i].disabled = true;
				}
			}
			var wybor_wyposazenia_dodatkowego = document.getElementById("wybor_wyposazenia_dodatkowego");
			for(i=1; i < wybor_wyposazenia_dodatkowego.options.length; i++)
			{
				if(i==1 || i==2)
				{
				 wybor_wyposazenia_dodatkowego.options[i].disabled = false;
				}
				else
				{
				wybor_wyposazenia_dodatkowego.options[i].disabled = true;
				}
			}
		}
		if(wybrano == 'HPL425LED')
		{
			istnienieWyposazeniaDodatkowego = true;
			//var obrazek = document.getElementById("obrazek");
			//obrazek.src = "HPL425LED_oprawa.jpg";
			okablowanie="3";
			//var obudowa_oprawy = document.getElementById("4-obudowa");
			//obudowa_oprawy.className = "row pokazane";
			
				document.getElementById("linki").innerHTML = 
				'<p style="font-size: 20px; color: #666666;">Odnośniki&nbsp;&nbsp;&nbsp;&nbsp;<em class="fa fa-download"></em></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/produkty/oprawy-oswietleniowe-do-zakladow-produkcyjnych-i-hal-magazynowych/246-hpl425-led" target="_blank">Link do strony oprawy oświetleniowej</a></p> <p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/zaklady_produkcyjne_i_hale_magazynowe/HPL425LED/HPL425LED_karta_katalogowa.pdf" target="_blank">Karta katalogowa</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/zaklady_produkcyjne_i_hale_magazynowe/HPL425LED/HPL425_EU_declaration.pdf" target="_blank">Deklaracja UE</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/zaklady_produkcyjne_i_hale_magazynowe/HPL425LED/fotometria.zip" target="_blank">Fotometria wszystkich wersji</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a id=fotometriaDanegoTypu class="ukryte" href="" target="_blank">Fotometria wybranego typu</a></p>';
			
			var wybor_strumienia = document.getElementById("wybor_strumienia");
			for(i=1; i < wybor_strumienia.options.length; i++)
			{
				if(i==83 || i==84 || i==85)
				{
				wybor_strumienia.options[i].disabled = false;
				}
				else
				{
				wybor_strumienia.options[i].disabled = true;
				}
			}
			var wybor_obudowy = document.getElementById("wybor_obudowy");
			for(i=1; i < wybor_obudowy.options.length; i++)
			{
				if(i==1 || i==2)
				{
				wybor_obudowy.options[i].disabled = false;
				}
				else
				{
				wybor_obudowy.options[i].disabled = true;
				}
			}
			var wybor_klosza = document.getElementById("wybor_klosza");
			for(i=1; i < wybor_klosza.options.length; i++)
			{
				if(i==1 || i==3)
				{
				wybor_klosza.options[i].disabled = false;
				}
				else
				{
				wybor_klosza.options[i].disabled = true;
				}
			}
			var wybor_material_dlawnic = document.getElementById("wybor_materialu_dlawnic");
			for(i=1; i < wybor_material_dlawnic.options.length; i++)
			{
				if(i==2 || i == 4)
				{
				wybor_material_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_material_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wielkosci_dlawnic = document.getElementById("wybor_wielkosci_dlawnic");
			for(i=1; i < wybor_wielkosci_dlawnic.options.length; i++)
			{
				if(i==1)
				{
				wybor_wielkosci_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_wielkosci_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wersji_awaryjnej = document.getElementById("wybor_awaryjna");
			for(i=1; i <  wybor_wersji_awaryjnej.options.length; i++)
			{
				if(i==1 || i==12)
				{
				 wybor_wersji_awaryjnej.options[i].disabled = false;
				}
				else
				{
				wybor_wersji_awaryjnej.options[i].disabled = true;
				}
			}
			var wybor_przelotu = document.getElementById("wybor_przelot");
			for(i=1; i <  wybor_przelotu.options.length; i++)
			{
				if(i==1 || i==2)
				{
				 wybor_przelotu.options[i].disabled = false;
				}
				else
				{
				 wybor_przelotu.options[i].disabled = true;
				}
			}
			var wybor_ukladu_dlawnic = document.getElementById("wybor_ukladu_dlawnic");
			for(i=1; i <  wybor_ukladu_dlawnic.options.length; i++)
			{
				if(i==1 || i==3)
				{
				 wybor_ukladu_dlawnic.options[i].disabled = false;
				}
				else
				{
				 wybor_ukladu_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_mocowania = document.getElementById("wybor_mocowania");
			for(i=1; i < wybor_mocowania.options.length; i++)
			{
				if(i==12)
				{
				 wybor_mocowania.options[i].disabled = false;
				}
				else
				{
				wybor_mocowania.options[i].disabled = true;
				}
			}
			var wybor_wyposazenia_dodatkowego = document.getElementById("wybor_wyposazenia_dodatkowego");
			for(i=1; i < wybor_wyposazenia_dodatkowego.options.length; i++)
			{
				if(i==1 || i==5)
				{
				 wybor_wyposazenia_dodatkowego.options[i].disabled = false;
				}
				else
				{
				wybor_wyposazenia_dodatkowego.options[i].disabled = true;
				}
			}
		}
		if(wybrano == 'INS340LED')
		{
			istnienieWyposazeniaDodatkowego = false;
			//var obrazek = document.getElementById("obrazek");
			//obrazek.src = "INS340LED_oprawa.jpg";
			okablowanie="3";
			//var obudowa_oprawy = document.getElementById("4-obudowa");
			//obudowa_oprawy.className = "row pokazane";
			
				document.getElementById("linki").innerHTML = 
				'<p style="font-size: 20px; color: #666666;">Odnośniki&nbsp;&nbsp;&nbsp;&nbsp;<em class="fa fa-download"></em></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/produkty/oprawy-oswietleniowe-do-zakladow-produkcyjnych-i-hal-magazynowych/91-ins340led" target="_blank">Link do strony oprawy oświetleniowej</a></p> <p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/zaklady_produkcyjne_i_hale_magazynowe/INS340LED/INS340LED_karta_katalogowa.pdf" target="_blank">Karta katalogowa</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/zaklady_produkcyjne_i_hale_magazynowe/INS340LED/INS340LED_EU_declaration.pdf" target="_blank">Deklaracja UE</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/zaklady_produkcyjne_i_hale_magazynowe/INS340LED/Fotometria.zip" target="_blank">Fotometria wszystkich wersji</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a id=fotometriaDanegoTypu class="ukryte" href="" target="_blank">Fotometria wybranego typu</a></p>';
			
			var wybor_strumienia = document.getElementById("wybor_strumienia");
			for(i=1; i < wybor_strumienia.options.length; i++)
			{
				if(i==86 || i==87 || i==88 || i==89 || i==90)
				{
				wybor_strumienia.options[i].disabled = false;
				}
				else
				{
				wybor_strumienia.options[i].disabled = true;
				}
			}
			var wybor_obudowy = document.getElementById("wybor_obudowy");
			for(i=1; i < wybor_obudowy.options.length; i++)
			{
				if(i==1 || i==2)
				{
				wybor_obudowy.options[i].disabled = false;
				}
				else
				{
				wybor_obudowy.options[i].disabled = true;
				}
			}
			var wybor_klosza = document.getElementById("wybor_klosza");
			for(i=1; i < wybor_klosza.options.length; i++)
			{
				if(i==3)
				{
				wybor_klosza.options[i].disabled = false;
				}
				else
				{
				wybor_klosza.options[i].disabled = true;
				}
			}
			var wybor_material_dlawnic = document.getElementById("wybor_materialu_dlawnic");
			for(i=1; i < wybor_material_dlawnic.options.length; i++)
			{
				if(i==2 || i == 3)
				{
				wybor_material_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_material_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wielkosci_dlawnic = document.getElementById("wybor_wielkosci_dlawnic");
			for(i=1; i < wybor_wielkosci_dlawnic.options.length; i++)
			{
				if(i==1 || i == 2)
				{
				wybor_wielkosci_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_wielkosci_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wersji_awaryjnej = document.getElementById("wybor_awaryjna");
			for(i=1; i <  wybor_wersji_awaryjnej.options.length; i++)
			{
				if(i==1)
				{
				 wybor_wersji_awaryjnej.options[i].disabled = false;
				}
				else
				{
				wybor_wersji_awaryjnej.options[i].disabled = true;
				}
			}
			var wybor_przelotu = document.getElementById("wybor_przelot");
			for(i=1; i <  wybor_przelotu.options.length; i++)
			{
				if(i==1 || i==2)
				{
				 wybor_przelotu.options[i].disabled = false;
				}
				else
				{
				 wybor_przelotu.options[i].disabled = true;
				}
			}
			var wybor_ukladu_dlawnic = document.getElementById("wybor_ukladu_dlawnic");
			for(i=1; i <  wybor_ukladu_dlawnic.options.length; i++)
			{
				if(i==1 || i==2 || i==3 || i==4 || i==5)
				{
				 wybor_ukladu_dlawnic.options[i].disabled = false;
				}
				else
				{
				 wybor_ukladu_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_mocowania = document.getElementById("wybor_mocowania");
			for(i=1; i < wybor_mocowania.options.length; i++)
			{
				if(i==1 || i==13 || i==2 || i==3 || i==4 || i==14 || i==18)
				{
				 wybor_mocowania.options[i].disabled = false;
				}
				else
				{
				wybor_mocowania.options[i].disabled = true;
				}
			}
		}
		if(wybrano == 'INS370LED')
		{
			istnienieWyposazeniaDodatkowego = false;
			//var obrazek = document.getElementById("obrazek");
			//obrazek.src = "INS370LED_oprawa.jpg";
			okablowanie="3";
			//var obudowa_oprawy = document.getElementById("4-obudowa");
			//obudowa_oprawy.className = "row pokazane";
			
				document.getElementById("linki").innerHTML = 
				'<p style="font-size: 20px; color: #666666;">Odnośniki&nbsp;&nbsp;&nbsp;&nbsp;<em class="fa fa-download"></em></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/produkty/oprawy-oswietleniowe-do-zakladow-produkcyjnych-i-hal-magazynowych/94-ins370led" target="_blank">Link do strony oprawy oświetleniowej</a></p> <p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/zaklady_produkcyjne_i_hale_magazynowe/INS370LED/INS370LED_karta_katalogowa.pdf" target="_blank">Karta katalogowa</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/zaklady_produkcyjne_i_hale_magazynowe/INS370LED/INS370LED_EU_declaration.pdf" target="_blank">Deklaracja UE</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/zaklady_produkcyjne_i_hale_magazynowe/INS370LED/Fotometria.zip" target="_blank">Fotometria wszystkich wersji</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a id=fotometriaDanegoTypu class="ukryte" href="" target="_blank">Fotometria wybranego typu</a></p>';
			
			var wybor_strumienia = document.getElementById("wybor_strumienia");
			for(i=1; i < wybor_strumienia.options.length; i++)
			{
				if(i==91 || i==92 || i==93 || i==94 || i==95 || i==96)
				{
				wybor_strumienia.options[i].disabled = false;
				}
				else
				{
				wybor_strumienia.options[i].disabled = true;
				}
			}
			var wybor_obudowy = document.getElementById("wybor_obudowy");
			for(i=1; i < wybor_obudowy.options.length; i++)
			{
				if(i==1)
				{
				wybor_obudowy.options[i].disabled = false;
				}
				else
				{
				wybor_obudowy.options[i].disabled = true;
				}
			}
			var wybor_klosza = document.getElementById("wybor_klosza");
			for(i=1; i < wybor_klosza.options.length; i++)
			{
				if(i==3)
				{
				wybor_klosza.options[i].disabled = false;
				}
				else
				{
				wybor_klosza.options[i].disabled = true;
				}
			}
			var wybor_material_dlawnic = document.getElementById("wybor_materialu_dlawnic");
			for(i=1; i < wybor_material_dlawnic.options.length; i++)
			{
				if(i==1 || i == 2 || i == 3)
				{
				wybor_material_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_material_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wielkosci_dlawnic = document.getElementById("wybor_wielkosci_dlawnic");
			for(i=1; i < wybor_wielkosci_dlawnic.options.length; i++)
			{
				if(i==1 || i == 4)
				{
				wybor_wielkosci_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_wielkosci_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wersji_awaryjnej = document.getElementById("wybor_awaryjna");
			for(i=1; i <  wybor_wersji_awaryjnej.options.length; i++)
			{
				if(i==1)
				{
				 wybor_wersji_awaryjnej.options[i].disabled = false;
				}
				else
				{
				wybor_wersji_awaryjnej.options[i].disabled = true;
				}
			}
			var wybor_przelotu = document.getElementById("wybor_przelot");
			for(i=1; i <  wybor_przelotu.options.length; i++)
			{
				if(i==1 || i==2)
				{
				 wybor_przelotu.options[i].disabled = false;
				}
				else
				{
				 wybor_przelotu.options[i].disabled = true;
				}
			}
			var wybor_ukladu_dlawnic = document.getElementById("wybor_ukladu_dlawnic");
			for(i=1; i <  wybor_ukladu_dlawnic.options.length; i++)
			{
				if(i==5)
				{
				 wybor_ukladu_dlawnic.options[i].disabled = false;
				}
				else
				{
				 wybor_ukladu_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_mocowania = document.getElementById("wybor_mocowania");
			for(i=1; i < wybor_mocowania.options.length; i++)
			{
				if(i==15)
				{
				 wybor_mocowania.options[i].disabled = false;
				}
				else
				{
				wybor_mocowania.options[i].disabled = true;
				}
			}
		}
		if(wybrano == 'HPL440LED')
		{
			istnienieWyposazeniaDodatkowego = true;
			//var obrazek = document.getElementById("obrazek");
			//obrazek.src = "HPL440LED_oprawa.jpg";
			okablowanie="3";
			//var obudowa_oprawy = document.getElementById("4-obudowa");
			//obudowa_oprawy.className = "row pokazane";
			
				document.getElementById("linki").innerHTML = 
				'<p style="font-size: 20px; color: #666666;">Odnośniki&nbsp;&nbsp;&nbsp;&nbsp;<em class="fa fa-download"></em></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/produkty/oprawy-oswietleniowe-do-zakladow-produkcyjnych-i-hal-magazynowych/244-hpl440led" target="_blank">Link do strony oprawy oświetleniowej</a></p> <p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/zaklady_produkcyjne_i_hale_magazynowe/HPL440LED/HPL440LED_karta_katalogowa.pdf" target="_blank">Karta katalogowa</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/zaklady_produkcyjne_i_hale_magazynowe/HPL440LED/HPL440_EU_declaration.pdf" target="_blank">Deklaracja UE</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/zaklady_produkcyjne_i_hale_magazynowe/HPL440LED/Fotometria.zip" target="_blank">Fotometria wszystkich wersji</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a id=fotometriaDanegoTypu class="ukryte" href="" target="_blank">Fotometria wybranego typu</a></p>';
			
			var wybor_strumienia = document.getElementById("wybor_strumienia");
			for(i=1; i < wybor_strumienia.options.length; i++)
			{
				if(i==97 || i==98 || i==99 || i==100)
				{
				wybor_strumienia.options[i].disabled = false;
				}
				else
				{
				wybor_strumienia.options[i].disabled = true;
				}
			}
			var wybor_obudowy = document.getElementById("wybor_obudowy");
			for(i=1; i < wybor_obudowy.options.length; i++)
			{
				if(i==1)
				{
				wybor_obudowy.options[i].disabled = false;
				}
				else
				{
				wybor_obudowy.options[i].disabled = true;
				}
			}
			var wybor_klosza = document.getElementById("wybor_klosza");
			for(i=1; i < wybor_klosza.options.length; i++)
			{
				if(i==1)
				{
				wybor_klosza.options[i].disabled = false;
				}
				else
				{
				wybor_klosza.options[i].disabled = true;
				}
			}
			var wybor_material_dlawnic = document.getElementById("wybor_materialu_dlawnic");
			for(i=1; i < wybor_material_dlawnic.options.length; i++)
			{
				if(i==2)
				{
				wybor_material_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_material_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wielkosci_dlawnic = document.getElementById("wybor_wielkosci_dlawnic");
			for(i=1; i < wybor_wielkosci_dlawnic.options.length; i++)
			{
				if(i==1)
				{
				wybor_wielkosci_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_wielkosci_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wersji_awaryjnej = document.getElementById("wybor_awaryjna");
			for(i=1; i <  wybor_wersji_awaryjnej.options.length; i++)
			{
				if(i==1)
				{
				 wybor_wersji_awaryjnej.options[i].disabled = false;
				}
				else
				{
				wybor_wersji_awaryjnej.options[i].disabled = true;
				}
			}
			var wybor_przelotu = document.getElementById("wybor_przelot");
			for(i=1; i <  wybor_przelotu.options.length; i++)
			{
				if(i==2)
				{
				 wybor_przelotu.options[i].disabled = false;
				}
				else
				{
				 wybor_przelotu.options[i].disabled = true;
				}
			}
			var wybor_ukladu_dlawnic = document.getElementById("wybor_ukladu_dlawnic");
			for(i=1; i <  wybor_ukladu_dlawnic.options.length; i++)
			{
				if(i==3)
				{
				 wybor_ukladu_dlawnic.options[i].disabled = false;
				}
				else
				{
				 wybor_ukladu_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_mocowania = document.getElementById("wybor_mocowania");
			for(i=1; i < wybor_mocowania.options.length; i++)
			{
				if(i==12)
				{
				 wybor_mocowania.options[i].disabled = false;
				}
				else
				{
				wybor_mocowania.options[i].disabled = true;
				}
			}
			var wybor_wyposazenia_dodatkowego = document.getElementById("wybor_wyposazenia_dodatkowego");
			for(i=1; i < wybor_wyposazenia_dodatkowego.options.length; i++)
			{
				if(i==1 || i==5)
				{
				 wybor_wyposazenia_dodatkowego.options[i].disabled = false;
				}
				else
				{
				wybor_wyposazenia_dodatkowego.options[i].disabled = true;
				}
			}
		}
		if(wybrano == 'INX340LED')
		{
			istnienieWyposazeniaDodatkowego = false;
			//var obrazek = document.getElementById("obrazek");
			//obrazek.src = "INX340LED_oprawa.jpg";
			okablowanie="3";
			//var obudowa_oprawy = document.getElementById("4-obudowa");
			//obudowa_oprawy.className = "row pokazane";
			
				document.getElementById("linki").innerHTML = 
				'<p style="font-size: 20px; color: #666666;">Odnośniki&nbsp;&nbsp;&nbsp;&nbsp;<em class="fa fa-download"></em></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/produkty/oprawy-oswietleniowe-do-zakladow-produkcyjnych-i-hal-magazynowych/102-inx340led" target="_blank">Link do strony oprawy oświetleniowej</a></p> <p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/zaklady_produkcyjne_i_hale_magazynowe/INX340LED/INX340LED_karta_katalogowa.pdf" target="_blank">Karta katalogowa</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/zaklady_produkcyjne_i_hale_magazynowe/INX340LED/INX340LED_EU_declaration.pdf" target="_blank">Deklaracja UE</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/zaklady_produkcyjne_i_hale_magazynowe/INX340LED/Fotometria.zip" target="_blank">Fotometria wszystkich wersji</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a id=fotometriaDanegoTypu class="ukryte" href="" target="_blank">Fotometria wybranego typu</a></p>';
			
			var wybor_strumienia = document.getElementById("wybor_strumienia");
			for(i=1; i < wybor_strumienia.options.length; i++)
			{
				if(i==101 || i==102 || i==103 || i==104 || i==105 || i==106 || i==107 || i==108 || i==109 || i==110 || i==111 || i==112)
				{
				wybor_strumienia.options[i].disabled = false;
				}
				else
				{
				wybor_strumienia.options[i].disabled = true;
				}
			}
			var wybor_obudowy = document.getElementById("wybor_obudowy");
			for(i=1; i < wybor_obudowy.options.length; i++)
			{
				if(i==1 || i==2)
				{
				wybor_obudowy.options[i].disabled = false;
				}
				else
				{
				wybor_obudowy.options[i].disabled = true;
				}
			}
			var wybor_klosza = document.getElementById("wybor_klosza");
			for(i=1; i < wybor_klosza.options.length; i++)
			{
				if(i==3)
				{
				wybor_klosza.options[i].disabled = false;
				}
				else
				{
				wybor_klosza.options[i].disabled = true;
				}
			}
			var wybor_material_dlawnic = document.getElementById("wybor_materialu_dlawnic");
			for(i=1; i < wybor_material_dlawnic.options.length; i++)
			{
				if(i==2 || i==3)
				{
				wybor_material_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_material_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wielkosci_dlawnic = document.getElementById("wybor_wielkosci_dlawnic");
			for(i=1; i < wybor_wielkosci_dlawnic.options.length; i++)
			{
				if(i==1)
				{
				wybor_wielkosci_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_wielkosci_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wersji_awaryjnej = document.getElementById("wybor_awaryjna");
			for(i=1; i <  wybor_wersji_awaryjnej.options.length; i++)
			{
				if(i==1)
				{
				 wybor_wersji_awaryjnej.options[i].disabled = false;
				}
				else
				{
				wybor_wersji_awaryjnej.options[i].disabled = true;
				}
			}
			var wybor_przelotu = document.getElementById("wybor_przelot");
			for(i=1; i <  wybor_przelotu.options.length; i++)
			{
				if(i==2)
				{
				 wybor_przelotu.options[i].disabled = false;
				}
				else
				{
				 wybor_przelotu.options[i].disabled = true;
				}
			}
			var wybor_ukladu_dlawnic = document.getElementById("wybor_ukladu_dlawnic");
			for(i=1; i <  wybor_ukladu_dlawnic.options.length; i++)
			{
				if(i==1)
				{
				 wybor_ukladu_dlawnic.options[i].disabled = false;
				}
				else
				{
				 wybor_ukladu_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_mocowania = document.getElementById("wybor_mocowania");
			for(i=1; i < wybor_mocowania.options.length; i++)
			{
				if(i==1 || i==13 || i==2 || i==3 || i==4 || i==14)
				{
				 wybor_mocowania.options[i].disabled = false;
				}
				else
				{
				wybor_mocowania.options[i].disabled = true;
				}
			}
		}
		if(wybrano == 'INX230LED')
		{
			istnienieWyposazeniaDodatkowego = false;
			//var obrazek = document.getElementById("obrazek");
			//obrazek.src = "INX230LED_oprawa.jpg";
			okablowanie="3";
			//var obudowa_oprawy = document.getElementById("4-obudowa");
			//obudowa_oprawy.className = "row pokazane";
			
				document.getElementById("linki").innerHTML = 
				'<p style="font-size: 20px; color: #666666;">Odnośniki&nbsp;&nbsp;&nbsp;&nbsp;<em class="fa fa-download"></em></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/produkty/oprawy-oswietleniowe-do-zakladow-produkcyjnych-i-hal-magazynowych/100-inx230led" target="_blank">Link do strony oprawy oświetleniowej</a></p> <p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/zaklady_produkcyjne_i_hale_magazynowe/INX230LED/INX230LED_karta_katalogowa.pdf" target="_blank">Karta katalogowa</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/zaklady_produkcyjne_i_hale_magazynowe/INX230LED/INX230LED_EU_declaration.pdf" target="_blank">Deklaracja UE</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/zaklady_produkcyjne_i_hale_magazynowe/INX230LED/Fotometria.zip" target="_blank">Fotometria wszystkich wersji</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a id=fotometriaDanegoTypu class="ukryte" href="" target="_blank">Fotometria wybranego typu</a></p>';
			
			var wybor_strumienia = document.getElementById("wybor_strumienia");
			for(i=1; i < wybor_strumienia.options.length; i++)
			{
				if(i==113 || i==114 || i==115 || i==116 || i==117 || i==118 || i==119 || i==120 || i==121 || i==122)
				{
				wybor_strumienia.options[i].disabled = false;
				}
				else
				{
				wybor_strumienia.options[i].disabled = true;
				}
			}
			var wybor_obudowy = document.getElementById("wybor_obudowy");
			for(i=1; i < wybor_obudowy.options.length; i++)
			{
				if(i==3)
				{
				wybor_obudowy.options[i].disabled = false;
				}
				else
				{
				wybor_obudowy.options[i].disabled = true;
				}
			}
			var wybor_klosza = document.getElementById("wybor_klosza");
			for(i=1; i < wybor_klosza.options.length; i++)
			{
				if(i==3 || i==4 || i==5)
				{
				wybor_klosza.options[i].disabled = false;
				}
				else
				{
				wybor_klosza.options[i].disabled = true;
				}
			}
			var wybor_material_dlawnic = document.getElementById("wybor_materialu_dlawnic");
			for(i=1; i < wybor_material_dlawnic.options.length; i++)
			{
				if(i==2)
				{
				wybor_material_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_material_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wielkosci_dlawnic = document.getElementById("wybor_wielkosci_dlawnic");
			for(i=1; i < wybor_wielkosci_dlawnic.options.length; i++)
			{
				if(i==1 || i==2)
				{
				wybor_wielkosci_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_wielkosci_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wersji_awaryjnej = document.getElementById("wybor_awaryjna");
			for(i=1; i <  wybor_wersji_awaryjnej.options.length; i++)
			{
				if(i==1)
				{
				 wybor_wersji_awaryjnej.options[i].disabled = false;
				}
				else
				{
				wybor_wersji_awaryjnej.options[i].disabled = true;
				}
			}
			var wybor_przelotu = document.getElementById("wybor_przelot");
			for(i=1; i <  wybor_przelotu.options.length; i++)
			{
				if(i==2)
				{
				 wybor_przelotu.options[i].disabled = false;
				}
				else
				{
				 wybor_przelotu.options[i].disabled = true;
				}
			}
			var wybor_ukladu_dlawnic = document.getElementById("wybor_ukladu_dlawnic");
			for(i=1; i <  wybor_ukladu_dlawnic.options.length; i++)
			{
				if(i==1 || i==3)
				{
				 wybor_ukladu_dlawnic.options[i].disabled = false;
				}
				else
				{
				 wybor_ukladu_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_mocowania = document.getElementById("wybor_mocowania");
			for(i=1; i < wybor_mocowania.options.length; i++)
			{
				if(i==1 || i==13 || i==2 || i==3 || i==4 || i==14)
				{
				 wybor_mocowania.options[i].disabled = false;
				}
				else
				{
				wybor_mocowania.options[i].disabled = true;
				}
			}
		}
		if(wybrano == 'INS230LED')
		{
			istnienieWyposazeniaDodatkowego = false;
			//var obrazek = document.getElementById("obrazek");
			//obrazek.src = "INS230LED_oprawa.jpg";
			okablowanie="3";
			//var obudowa_oprawy = document.getElementById("4-obudowa");
			//obudowa_oprawy.className = "row pokazane";
			
				document.getElementById("linki").innerHTML = 
				'<p style="font-size: 20px; color: #666666;">Odnośniki&nbsp;&nbsp;&nbsp;&nbsp;<em class="fa fa-download"></em></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/produkty/oprawy-oswietleniowe-do-zakladow-produkcyjnych-i-hal-magazynowych/87-ins230led" target="_blank">Link do strony oprawy oświetleniowej</a></p> <p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/zaklady_produkcyjne_i_hale_magazynowe/INS230LED/INS230LED_karta_katalogowa.pdf" target="_blank">Karta katalogowa</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/zaklady_produkcyjne_i_hale_magazynowe/INS230LED/INS230LED_EU_declaration.pdf" target="_blank">Deklaracja UE</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/zaklady_produkcyjne_i_hale_magazynowe/INS230LED/INS230LED_dopuszczenie_CNBOP.pdf" target="_blank">Dopuszczenie CNBOP</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/zaklady_produkcyjne_i_hale_magazynowe/INS230LED/Fotometria.zip" target="_blank">Fotometria wszystkich wersji</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a id=fotometriaDanegoTypu class="ukryte" href="" target="_blank">Fotometria wybranego typu</a></p>';
			
			var wybor_strumienia = document.getElementById("wybor_strumienia");
			for(i=1; i < wybor_strumienia.options.length; i++)
			{
				if(i==123 || i==124 || i==125 || i==126 || i==127)
				{
				wybor_strumienia.options[i].disabled = false;
				}
				else
				{
				wybor_strumienia.options[i].disabled = true;
				}
			}
			var wybor_obudowy = document.getElementById("wybor_obudowy");
			for(i=1; i < wybor_obudowy.options.length; i++)
			{
				if(i==3)
				{
				wybor_obudowy.options[i].disabled = false;
				}
				else
				{
				wybor_obudowy.options[i].disabled = true;
				}
			}
			var wybor_klosza = document.getElementById("wybor_klosza");
			for(i=1; i < wybor_klosza.options.length; i++)
			{
				if(i==3 || i==4 || i==5)
				{
				wybor_klosza.options[i].disabled = false;
				}
				else
				{
				wybor_klosza.options[i].disabled = true;
				}
			}
			var wybor_material_dlawnic = document.getElementById("wybor_materialu_dlawnic");
			for(i=1; i < wybor_material_dlawnic.options.length; i++)
			{
				if(i==2|| i==3)
				{
				wybor_material_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_material_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wielkosci_dlawnic = document.getElementById("wybor_wielkosci_dlawnic");
			for(i=1; i < wybor_wielkosci_dlawnic.options.length; i++)
			{
				if(i==1 || i==2)
				{
				wybor_wielkosci_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_wielkosci_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wersji_awaryjnej = document.getElementById("wybor_awaryjna");
			for(i=1; i <  wybor_wersji_awaryjnej.options.length; i++)
			{
				if(i==1 || i==2 || i==3 || i==4 || i==5 || i==6 || i==7 || i==8 || i==9 || i==10 || i==11)
				{
				 wybor_wersji_awaryjnej.options[i].disabled = false;
				}
				else
				{
				wybor_wersji_awaryjnej.options[i].disabled = true;
				}
			}
			var wybor_przelotu = document.getElementById("wybor_przelot");
			for(i=1; i <  wybor_przelotu.options.length; i++)
			{
				if(i==1 || i==2)
				{
				 wybor_przelotu.options[i].disabled = false;
				}
				else
				{
				 wybor_przelotu.options[i].disabled = true;
				}
			}
			var wybor_ukladu_dlawnic = document.getElementById("wybor_ukladu_dlawnic");
			for(i=1; i <  wybor_ukladu_dlawnic.options.length; i++)
			{
				if(i==1 || i==2 || i==3 || i==4 || i==5)
				{
				 wybor_ukladu_dlawnic.options[i].disabled = false;
				}
				else
				{
				 wybor_ukladu_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_mocowania = document.getElementById("wybor_mocowania");
			for(i=1; i < wybor_mocowania.options.length; i++)
			{
				if(i==1 || i==13 || i==2 || i==3 || i==4 || i==14)
				{
				 wybor_mocowania.options[i].disabled = false;
				}
				else
				{
				wybor_mocowania.options[i].disabled = true;
				}
			}
		}
		if(wybrano == 'HPL430LED')
		{
			istnienieWyposazeniaDodatkowego = false;
			//var obrazek = document.getElementById("obrazek");
			//obrazek.src = "HPL430LED_oprawa.jpg";
			okablowanie="2";
			//var obudowa_oprawy = document.getElementById("4-obudowa");
			//obudowa_oprawy.className = "row pokazane";
			
				document.getElementById("linki").innerHTML = 
				'<p style="font-size: 20px; color: #666666;">Odnośniki&nbsp;&nbsp;&nbsp;&nbsp;<em class="fa fa-download"></em></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/produkty/oprawy-oswietleniowe-do-zakladow-produkcyjnych-i-hal-magazynowych/98-hpl430led" target="_blank">Link do strony oprawy oświetleniowej</a></p> <p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/zaklady_produkcyjne_i_hale_magazynowe/HPL430LED/HPL430LED_karta_katalogowa.pdf" target="_blank">Karta katalogowa</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/zaklady_produkcyjne_i_hale_magazynowe/HPL430LED/HPL430LED_EU_declaration.pdf" target="_blank">Deklaracja UE</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/zaklady_produkcyjne_i_hale_magazynowe/HPL430LED/Fotometria.zip" target="_blank">Fotometria wszystkich wersji</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a id=fotometriaDanegoTypu class="ukryte" href="" target="_blank">Fotometria wybranego typu</a></p>';
			
			var wybor_strumienia = document.getElementById("wybor_strumienia");
			for(i=1; i < wybor_strumienia.options.length; i++)
			{
				if(i==128 || i==129 || i==130)
				{
				wybor_strumienia.options[i].disabled = false;
				}
				else
				{
				wybor_strumienia.options[i].disabled = true;
				}
			}
			var wybor_obudowy = document.getElementById("wybor_obudowy");
			for(i=1; i < wybor_obudowy.options.length; i++)
			{
				if(i==6)
				{
				wybor_obudowy.options[i].disabled = false;
				}
				else
				{
				wybor_obudowy.options[i].disabled = true;
				}
			}
			var wybor_klosza = document.getElementById("wybor_klosza");
			for(i=1; i < wybor_klosza.options.length; i++)
			{
				if(i==1)
				{
				wybor_klosza.options[i].disabled = false;
				}
				else
				{
				wybor_klosza.options[i].disabled = true;
				}
			}
			var wybor_material_dlawnic = document.getElementById("wybor_materialu_dlawnic");
			for(i=1; i < wybor_material_dlawnic.options.length; i++)
			{
				if(i==1)
				{
				wybor_material_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_material_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wielkosci_dlawnic = document.getElementById("wybor_wielkosci_dlawnic");
			for(i=1; i < wybor_wielkosci_dlawnic.options.length; i++)
			{
				if(i==3)
				{
				wybor_wielkosci_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_wielkosci_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wersji_awaryjnej = document.getElementById("wybor_awaryjna");
			for(i=1; i <  wybor_wersji_awaryjnej.options.length; i++)
			{
				if(i==1)
				{
				 wybor_wersji_awaryjnej.options[i].disabled = false;
				}
				else
				{
				wybor_wersji_awaryjnej.options[i].disabled = true;
				}
			}
			var wybor_przelotu = document.getElementById("wybor_przelot");
			for(i=1; i <  wybor_przelotu.options.length; i++)
			{
				if(i==2)
				{
				 wybor_przelotu.options[i].disabled = false;
				}
				else
				{
				 wybor_przelotu.options[i].disabled = true;
				}
			}
			var wybor_ukladu_dlawnic = document.getElementById("wybor_ukladu_dlawnic");
			for(i=1; i <  wybor_ukladu_dlawnic.options.length; i++)
			{
				if(i==2)
				{
				 wybor_ukladu_dlawnic.options[i].disabled = false;
				}
				else
				{
				 wybor_ukladu_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_mocowania = document.getElementById("wybor_mocowania");
			for(i=1; i < wybor_mocowania.options.length; i++)
			{
				if(i==16 || i==17)
				{
				 wybor_mocowania.options[i].disabled = false;
				}
				else
				{
				wybor_mocowania.options[i].disabled = true;
				}
			}
		}
		if(wybrano == 'INS395LED')
		{
			istnienieWyposazeniaDodatkowego = false;
			//var obrazek = document.getElementById("obrazek");
			//obrazek.src = "INS395LED_oprawa.jpg";
			okablowanie="3";
			//var obudowa_oprawy = document.getElementById("4-obudowa");
			//obudowa_oprawy.className = "row pokazane";
			
				document.getElementById("linki").innerHTML = 
				'<p style="font-size: 20px; color: #666666;">Odnośniki&nbsp;&nbsp;&nbsp;&nbsp;<em class="fa fa-download"></em></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/produkty/oprawy-oswietleniowe-do-zakladow-produkcyjnych-i-hal-magazynowych/96-ins395led" target="_blank">Link do strony oprawy oświetleniowej</a></p> <p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/zaklady_produkcyjne_i_hale_magazynowe/INS395LED/INS395LED_karta_katalogowa.pdf" target="_blank">Karta katalogowa</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/zaklady_produkcyjne_i_hale_magazynowe/INS395LED/INS395LED_EU_declaration.pdf" target="_blank">Deklaracja UE</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/zaklady_produkcyjne_i_hale_magazynowe/INS395LED/Fotometria.zip" target="_blank">Fotometria wszystkich wersji</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a id=fotometriaDanegoTypu class="ukryte" href="" target="_blank">Fotometria wybranego typu</a></p>';
			/*
			var wybor_grupstrumienia = document.getElementsByTagName("optgroup");
			for(i=1; i < wybor_grupstrumienia.length; i++)
			{
				//wybor_grupstrumienia.options[i].disabled = false;
				wybor_grupstrumienia.item[i].disabled = false;
			}
			*/
			var wybor_strumienia = document.getElementById("wybor_strumienia");
			for(i=1; i < wybor_strumienia.options.length; i++)
			{
				if(i==131 || i==132 || i==133 || i==134 || i==135 || i==136 || i==137 || i==138)
				{
				wybor_strumienia.options[i].disabled = false;
				}
				else
				{
				wybor_strumienia.options[i].disabled = true;
				}
			}
			var wybor_obudowy = document.getElementById("wybor_obudowy");
			for(i=1; i < wybor_obudowy.options.length; i++)
			{
				if(i==1)
				{
				wybor_obudowy.options[i].disabled = false;
				}
				else
				{
				wybor_obudowy.options[i].disabled = true;
				}
			}
			var wybor_klosza = document.getElementById("wybor_klosza");
			for(i=1; i < wybor_klosza.options.length; i++)
			{
				if(i==1)
				{
				wybor_klosza.options[i].disabled = false;
				}
				else
				{
				wybor_klosza.options[i].disabled = true;
				}
			}
			var wybor_material_dlawnic = document.getElementById("wybor_materialu_dlawnic");
			for(i=1; i < wybor_material_dlawnic.options.length; i++)
			{
				if(i==1 || i==2 || i==3)
				{
				wybor_material_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_material_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wielkosci_dlawnic = document.getElementById("wybor_wielkosci_dlawnic");
			for(i=1; i < wybor_wielkosci_dlawnic.options.length; i++)
			{
				if(i==1 || i==3)
				{
				wybor_wielkosci_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_wielkosci_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wersji_awaryjnej = document.getElementById("wybor_awaryjna");
			for(i=1; i <  wybor_wersji_awaryjnej.options.length; i++)
			{
				if(i==1)
				{
				 wybor_wersji_awaryjnej.options[i].disabled = false;
				}
				else
				{
				wybor_wersji_awaryjnej.options[i].disabled = true;
				}
			}
			var wybor_przelotu = document.getElementById("wybor_przelot");
			for(i=1; i <  wybor_przelotu.options.length; i++)
			{
				if(i==1 || i==2)
				{
				 wybor_przelotu.options[i].disabled = false;
				}
				else
				{
				 wybor_przelotu.options[i].disabled = true;
				}
			}
			var wybor_ukladu_dlawnic = document.getElementById("wybor_ukladu_dlawnic");
			for(i=1; i <  wybor_ukladu_dlawnic.options.length; i++)
			{
				if(i==5)
				{
				 wybor_ukladu_dlawnic.options[i].disabled = false;
				}
				else
				{
				 wybor_ukladu_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_mocowania = document.getElementById("wybor_mocowania");
			for(i=1; i < wybor_mocowania.options.length; i++)
			{
				if(i==15)
				{
				 wybor_mocowania.options[i].disabled = false;
				}
				else
				{
				wybor_mocowania.options[i].disabled = true;
				}
			}
		}
		if(wybrano == 'INS350LED')
		{
			istnienieWyposazeniaDodatkowego = false;
			//var obrazek = document.getElementById("obrazek");
			//obrazek.src = "INS350LED_oprawa.jpg";
			okablowanie="3";
			wersja_dodatkowa="-C4";
			//var obudowa_oprawy = document.getElementById("4-obudowa");
			//obudowa_oprawy.className = "row pokazane";
			
				document.getElementById("linki").innerHTML = 
				'<p style="font-size: 20px; color: #666666;">Odnośniki&nbsp;&nbsp;&nbsp;&nbsp;<em class="fa fa-download"></em></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/produkty/oprawy-oswietleniowe-do-przemyslu-spozywczego-i-hodowli-zwierzat/262-ins350led" target="_blank">Link do strony oprawy oświetleniowej</a></p> <p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/oprawy_oswietleniowe_do_przemyslu_spozywczego_i_hodowli_zwierzat/INS350LED/INS350LED_karta_katalogowa.pdf" target="_blank">Karta katalogowa</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/oprawy_oswietleniowe_do_przemyslu_spozywczego_i_hodowli_zwierzat/INS350LED/INS350LED_EU_declaration.pdf" target="_blank">Deklaracja UE</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/oprawy_oswietleniowe_do_przemyslu_spozywczego_i_hodowli_zwierzat/INS350LED/INS350LED_atest_PZH.pdf" target="_blank">Atest PZH</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/oprawy_oswietleniowe_do_przemyslu_spozywczego_i_hodowli_zwierzat/INS350LED/Fotometria.zip" target="_blank">Fotometria wszystkich wersji</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a id=fotometriaDanegoTypu class="ukryte" href="" target="_blank">Fotometria wybranego typu</a></p>';
			/*
			var wybor_grupstrumienia = document.getElementsByTagName("optgroup");
			for(i=1; i < wybor_grupstrumienia.length; i++)
			{
				//wybor_grupstrumienia.options[i].disabled = false;
				wybor_grupstrumienia.item[i].disabled = false;
			}
			*/
			var wybor_strumienia = document.getElementById("wybor_strumienia");
			for(i=1; i < wybor_strumienia.options.length; i++)
			{
				if(i==139 || i==140 || i==141 || i==142 || i==164)
				{
				wybor_strumienia.options[i].disabled = false;
				}
				else
				{
				wybor_strumienia.options[i].disabled = true;
				}
			}
			var wybor_obudowy = document.getElementById("wybor_obudowy");
			for(i=1; i < wybor_obudowy.options.length; i++)
			{
				if(i==2)
				{
				wybor_obudowy.options[i].disabled = false;
				}
				else
				{
				wybor_obudowy.options[i].disabled = true;
				}
			}
			var wybor_klosza = document.getElementById("wybor_klosza");
			for(i=1; i < wybor_klosza.options.length; i++)
			{
				if(i==2 || i==3)
				{
				wybor_klosza.options[i].disabled = false;
				}
				else
				{
				wybor_klosza.options[i].disabled = true;
				}
			}
			var wybor_material_dlawnic = document.getElementById("wybor_materialu_dlawnic");
			for(i=1; i < wybor_material_dlawnic.options.length; i++)
			{
				if(i==4)
				{
				wybor_material_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_material_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wielkosci_dlawnic = document.getElementById("wybor_wielkosci_dlawnic");
			for(i=1; i < wybor_wielkosci_dlawnic.options.length; i++)
			{
				if(i==1 || i==2)
				{
				wybor_wielkosci_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_wielkosci_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wersji_awaryjnej = document.getElementById("wybor_awaryjna");
			for(i=1; i <  wybor_wersji_awaryjnej.options.length; i++)
			{
				if(i==1 || i==12)
				{
				 wybor_wersji_awaryjnej.options[i].disabled = false;
				}
				else
				{
				wybor_wersji_awaryjnej.options[i].disabled = true;
				}
			}
			var wybor_przelotu = document.getElementById("wybor_przelot");
			for(i=1; i <  wybor_przelotu.options.length; i++)
			{
				if(i==1 || i==2)
				{
				 wybor_przelotu.options[i].disabled = false;
				}
				else
				{
				 wybor_przelotu.options[i].disabled = true;
				}
			}
			var wybor_ukladu_dlawnic = document.getElementById("wybor_ukladu_dlawnic");
			for(i=1; i <  wybor_ukladu_dlawnic.options.length; i++)
			{
				if(i==1 || i==2)
				{
				 wybor_ukladu_dlawnic.options[i].disabled = false;
				}
				else
				{
				 wybor_ukladu_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_mocowania = document.getElementById("wybor_mocowania");
			for(i=1; i < wybor_mocowania.options.length; i++)
			{
				if(i==1 || i==2 || i==13 || i==18 || i==19)
				{
				 wybor_mocowania.options[i].disabled = false;
				}
				else
				{
				wybor_mocowania.options[i].disabled = true;
				}
			}
		}
		if(wybrano == 'INS250LED')
		{
			istnienieWyposazeniaDodatkowego = false;
			//var obrazek = document.getElementById("obrazek");
			//obrazek.src = "INS250LED_oprawa.jpg";
			okablowanie="3";
			//var obudowa_oprawy = document.getElementById("4-obudowa");
			//obudowa_oprawy.className = "row pokazane";
			
				document.getElementById("linki").innerHTML = 
				'<p style="font-size: 20px; color: #666666;">Odnośniki&nbsp;&nbsp;&nbsp;&nbsp;<em class="fa fa-download"></em></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/produkty/oprawy-oswietleniowe-do-przemyslu-spozywczego-i-hodowli-zwierzat/108-ins250led" target="_blank">Link do strony oprawy oświetleniowej</a></p> <p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/oprawy_oswietleniowe_do_przemyslu_spozywczego_i_hodowli_zwierzat/INS250LED/INS250LED_karta_katalogowa.pdf" target="_blank">Karta katalogowa</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/oprawy_oswietleniowe_do_przemyslu_spozywczego_i_hodowli_zwierzat/INS250LED/INS250LED_EU_declaration.pdf" target="_blank">Deklaracja UE</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/oprawy_oswietleniowe_do_przemyslu_spozywczego_i_hodowli_zwierzat/INS250LED/Atest_PZH_dla_INS250_INS250LED.pdf" target="_blank">Atest PZH</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/oprawy_oswietleniowe_do_przemyslu_spozywczego_i_hodowli_zwierzat/INS250LED/Fotometria.zip" target="_blank">Fotometria wszystkich wersji</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a id=fotometriaDanegoTypu class="ukryte" href="" target="_blank">Fotometria wybranego typu</a></p>';
			/*
			var wybor_grupstrumienia = document.getElementsByTagName("optgroup");
			for(i=1; i < wybor_grupstrumienia.length; i++)
			{
				//wybor_grupstrumienia.options[i].disabled = false;
				wybor_grupstrumienia.item[i].disabled = false;
			}
			*/
			var wybor_strumienia = document.getElementById("wybor_strumienia");
			for(i=1; i < wybor_strumienia.options.length; i++)
			{
				if(i==123 || i==124 || i==125 || i==126 || i==127)
				{
				wybor_strumienia.options[i].disabled = false;
				}
				else
				{
				wybor_strumienia.options[i].disabled = true;
				}
			}
			var wybor_obudowy = document.getElementById("wybor_obudowy");
			for(i=1; i < wybor_obudowy.options.length; i++)
			{
				if(i==4)
				{
				wybor_obudowy.options[i].disabled = false;
				}
				else
				{
				wybor_obudowy.options[i].disabled = true;
				}
			}
			var wybor_klosza = document.getElementById("wybor_klosza");
			for(i=1; i < wybor_klosza.options.length; i++)
			{
				if(i==3 || i==4 || i==5)
				{
				wybor_klosza.options[i].disabled = false;
				}
				else
				{
				wybor_klosza.options[i].disabled = true;
				}
			}
			var wybor_material_dlawnic = document.getElementById("wybor_materialu_dlawnic");
			for(i=1; i < wybor_material_dlawnic.options.length; i++)
			{
				if(i==2)
				{
				wybor_material_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_material_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wielkosci_dlawnic = document.getElementById("wybor_wielkosci_dlawnic");
			for(i=1; i < wybor_wielkosci_dlawnic.options.length; i++)
			{
				if(i==1)
				{
				wybor_wielkosci_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_wielkosci_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wersji_awaryjnej = document.getElementById("wybor_awaryjna");
			for(i=1; i <  wybor_wersji_awaryjnej.options.length; i++)
			{
				if(i==1)
				{
				 wybor_wersji_awaryjnej.options[i].disabled = false;
				}
				else
				{
				wybor_wersji_awaryjnej.options[i].disabled = true;
				}
			}
			var wybor_przelotu = document.getElementById("wybor_przelot");
			for(i=1; i <  wybor_przelotu.options.length; i++)
			{
				if(i==1 || i==2)
				{
				 wybor_przelotu.options[i].disabled = false;
				}
				else
				{
				 wybor_przelotu.options[i].disabled = true;
				}
			}
			var wybor_ukladu_dlawnic = document.getElementById("wybor_ukladu_dlawnic");
			for(i=1; i <  wybor_ukladu_dlawnic.options.length; i++)
			{
				if(i==1 || i==2)
				{
				 wybor_ukladu_dlawnic.options[i].disabled = false;
				}
				else
				{
				 wybor_ukladu_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_mocowania = document.getElementById("wybor_mocowania");
			for(i=1; i < wybor_mocowania.options.length; i++)
			{
				if(i==1 || i==2 || i==3 || i==4 || i==13 || i==14)
				{
				 wybor_mocowania.options[i].disabled = false;
				}
				else
				{
				wybor_mocowania.options[i].disabled = true;
				}
			}
		}
		if(wybrano == 'INS270LED')
		{
			istnienieWyposazeniaDodatkowego = false;
			//var obrazek = document.getElementById("obrazek");
			//obrazek.src = "INS270LED_oprawa.jpg";
			okablowanie="3";
			//var obudowa_oprawy = document.getElementById("4-obudowa");
			//obudowa_oprawy.className = "row pokazane";
			
				document.getElementById("linki").innerHTML = 
				'<p style="font-size: 20px; color: #666666;">Odnośniki&nbsp;&nbsp;&nbsp;&nbsp;<em class="fa fa-download"></em></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/produkty/oprawy-oswietleniowe-do-przemyslu-spozywczego-i-hodowli-zwierzat/110-ins270led" target="_blank">Link do strony oprawy oświetleniowej</a></p> <p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/oprawy_oswietleniowe_do_przemyslu_spozywczego_i_hodowli_zwierzat/INS270LED/INS270LED_karta_katalogowa.pdf" target="_blank">Karta katalogowa</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/oprawy_oswietleniowe_do_przemyslu_spozywczego_i_hodowli_zwierzat/INS270LED/INS270LED_EU_declaration.pdf" target="_blank">Deklaracja UE</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/oprawy_oswietleniowe_do_przemyslu_spozywczego_i_hodowli_zwierzat/INS270LED/Fotometria.zip" target="_blank">Fotometria wszystkich wersji</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a id=fotometriaDanegoTypu class="ukryte" href="" target="_blank">Fotometria wybranego typu</a></p>';
			/*
			var wybor_grupstrumienia = document.getElementsByTagName("optgroup");
			for(i=1; i < wybor_grupstrumienia.length; i++)
			{
				//wybor_grupstrumienia.options[i].disabled = false;
				wybor_grupstrumienia.item[i].disabled = false;
			}
			*/
			var wybor_strumienia = document.getElementById("wybor_strumienia");
			for(i=1; i < wybor_strumienia.options.length; i++)
			{
				if(i==143 || i==144 || i==145 || i==146 || i==147)
				{
				wybor_strumienia.options[i].disabled = false;
				}
				else
				{
				wybor_strumienia.options[i].disabled = true;
				}
			}
			var wybor_obudowy = document.getElementById("wybor_obudowy");
			for(i=1; i < wybor_obudowy.options.length; i++)
			{
				if(i==4)
				{
				wybor_obudowy.options[i].disabled = false;
				}
				else
				{
				wybor_obudowy.options[i].disabled = true;
				}
			}
			var wybor_klosza = document.getElementById("wybor_klosza");
			for(i=1; i < wybor_klosza.options.length; i++)
			{
				if(i==4)
				{
				wybor_klosza.options[i].disabled = false;
				}
				else
				{
				wybor_klosza.options[i].disabled = true;
				}
			}
			var wybor_material_dlawnic = document.getElementById("wybor_materialu_dlawnic");
			for(i=1; i < wybor_material_dlawnic.options.length; i++)
			{
				if(i==4)
				{
				wybor_material_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_material_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wielkosci_dlawnic = document.getElementById("wybor_wielkosci_dlawnic");
			for(i=1; i < wybor_wielkosci_dlawnic.options.length; i++)
			{
				if(i==1 || i==2)
				{
				wybor_wielkosci_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_wielkosci_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wersji_awaryjnej = document.getElementById("wybor_awaryjna");
			for(i=1; i <  wybor_wersji_awaryjnej.options.length; i++)
			{
				if(i==1)
				{
				 wybor_wersji_awaryjnej.options[i].disabled = false;
				}
				else
				{
				wybor_wersji_awaryjnej.options[i].disabled = true;
				}
			}
			var wybor_przelotu = document.getElementById("wybor_przelot");
			for(i=1; i <  wybor_przelotu.options.length; i++)
			{
				if(i==1 || i==2)
				{
				 wybor_przelotu.options[i].disabled = false;
				}
				else
				{
				 wybor_przelotu.options[i].disabled = true;
				}
			}
			var wybor_ukladu_dlawnic = document.getElementById("wybor_ukladu_dlawnic");
			for(i=1; i <  wybor_ukladu_dlawnic.options.length; i++)
			{
				if(i==1 || i==2)
				{
				 wybor_ukladu_dlawnic.options[i].disabled = false;
				}
				else
				{
				 wybor_ukladu_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_mocowania = document.getElementById("wybor_mocowania");
			for(i=1; i < wybor_mocowania.options.length; i++)
			{
				if(i==1 || i==2 || i==3 || i==4 || i==13 || i==14)
				{
				 wybor_mocowania.options[i].disabled = false;
				}
				else
				{
				wybor_mocowania.options[i].disabled = true;
				}
			}
		}
		if(wybrano == 'INS310LED')
		{
			istnienieWyposazeniaDodatkowego = false;
			//var obrazek = document.getElementById("obrazek");
			//obrazek.src = "INS310LED_oprawa.jpg";
			okablowanie="3";
			//var obudowa_oprawy = document.getElementById("4-obudowa");
			//obudowa_oprawy.className = "row pokazane";
			
				document.getElementById("linki").innerHTML = 
				'<p style="font-size: 20px; color: #666666;">Odnośniki&nbsp;&nbsp;&nbsp;&nbsp;<em class="fa fa-download"></em></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/produkty/oprawy-oswietleniowe-do-przemyslu-spozywczego-i-hodowli-zwierzat/112-ins310led" target="_blank">Link do strony oprawy oświetleniowej</a></p> <p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/oprawy_oswietleniowe_do_przemyslu_spozywczego_i_hodowli_zwierzat/INS310LED/INS310LED_karta_katalogowa.pdf" target="_blank">Karta katalogowa</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/oprawy_oswietleniowe_do_przemyslu_spozywczego_i_hodowli_zwierzat/INS310LED/INS310LED_EU_declaration.pdf" target="_blank">Deklaracja UE</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/oprawy_oswietleniowe_do_przemyslu_spozywczego_i_hodowli_zwierzat/INS310LED/Fotometria.zip" target="_blank">Fotometria wszystkich wersji</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a id=fotometriaDanegoTypu class="ukryte" href="" target="_blank">Fotometria wybranego typu</a></p>';
			/*
			var wybor_grupstrumienia = document.getElementsByTagName("optgroup");
			for(i=1; i < wybor_grupstrumienia.length; i++)
			{
				//wybor_grupstrumienia.options[i].disabled = false;
				wybor_grupstrumienia.item[i].disabled = false;
			}
			*/
			var wybor_strumienia = document.getElementById("wybor_strumienia");
			for(i=1; i < wybor_strumienia.options.length; i++)
			{
				if(i==148 || i==149 || i==150 || i==151 || i==152)
				{
				wybor_strumienia.options[i].disabled = false;
				}
				else
				{
				wybor_strumienia.options[i].disabled = true;
				}
			}
			var wybor_obudowy = document.getElementById("wybor_obudowy");
			for(i=1; i < wybor_obudowy.options.length; i++)
			{
				if(i==2)
				{
				wybor_obudowy.options[i].disabled = false;
				}
				else
				{
				wybor_obudowy.options[i].disabled = true;
				}
			}
			var wybor_klosza = document.getElementById("wybor_klosza");
			for(i=1; i < wybor_klosza.options.length; i++)
			{
				if(i==3)
				{
				wybor_klosza.options[i].disabled = false;
				}
				else
				{
				wybor_klosza.options[i].disabled = true;
				}
			}
			var wybor_material_dlawnic = document.getElementById("wybor_materialu_dlawnic");
			for(i=1; i < wybor_material_dlawnic.options.length; i++)
			{
				if(i==1)
				{
				wybor_material_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_material_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wielkosci_dlawnic = document.getElementById("wybor_wielkosci_dlawnic");
			for(i=1; i < wybor_wielkosci_dlawnic.options.length; i++)
			{
				if(i==3)
				{
				wybor_wielkosci_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_wielkosci_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wersji_awaryjnej = document.getElementById("wybor_awaryjna");
			for(i=1; i <  wybor_wersji_awaryjnej.options.length; i++)
			{
				if(i==1)
				{
				 wybor_wersji_awaryjnej.options[i].disabled = false;
				}
				else
				{
				wybor_wersji_awaryjnej.options[i].disabled = true;
				}
			}
			var wybor_przelotu = document.getElementById("wybor_przelot");
			for(i=1; i <  wybor_przelotu.options.length; i++)
			{
				if(i==1 || i==2)
				{
				 wybor_przelotu.options[i].disabled = false;
				}
				else
				{
				 wybor_przelotu.options[i].disabled = true;
				}
			}
			var wybor_ukladu_dlawnic = document.getElementById("wybor_ukladu_dlawnic");
			for(i=1; i <  wybor_ukladu_dlawnic.options.length; i++)
			{
				if(i==2 || i==3)
				{
				 wybor_ukladu_dlawnic.options[i].disabled = false;
				}
				else
				{
				 wybor_ukladu_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_mocowania = document.getElementById("wybor_mocowania");
			for(i=1; i < wybor_mocowania.options.length; i++)
			{
				if(i==10)
				{
				 wybor_mocowania.options[i].disabled = false;
				}
				else
				{
				wybor_mocowania.options[i].disabled = true;
				}
			}
		}
		if(wybrano == 'INS360LED')
		{
			istnienieWyposazeniaDodatkowego = false;
			//var obrazek = document.getElementById("obrazek");
			//obrazek.src = "INS360LED_oprawa.jpg";
			okablowanie="3";
			//var obudowa_oprawy = document.getElementById("4-obudowa");
			//obudowa_oprawy.className = "row pokazane";
			
				document.getElementById("linki").innerHTML = 
				'<p style="font-size: 20px; color: #666666;">Odnośniki&nbsp;&nbsp;&nbsp;&nbsp;<em class="fa fa-download"></em></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/produkty/oprawy-oswietleniowe-do-przemyslu-spozywczego-i-hodowli-zwierzat/114-ins360led" target="_blank">Link do strony oprawy oświetleniowej</a></p> <p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/oprawy_oswietleniowe_do_przemyslu_spozywczego_i_hodowli_zwierzat/INS360LED/INS360LED_karta_katalogowa.pdf" target="_blank">Karta katalogowa</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/oprawy_oswietleniowe_do_przemyslu_spozywczego_i_hodowli_zwierzat/INS360LED/Atest_PZH_dla_INS360_INS360LED.pdf" target="_blank">Deklaracja UE</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/oprawy_oswietleniowe_do_przemyslu_spozywczego_i_hodowli_zwierzat/INS360LED/Atest_PZH_dla_INS360_INS360LED.pdf" target="_blank">Atest PZH</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/oprawy_oswietleniowe_do_przemyslu_spozywczego_i_hodowli_zwierzat/INS360LED/Fotometria.zip" target="_blank">Fotometria wszystkich wersji</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a id=fotometriaDanegoTypu class="ukryte" href="" target="_blank">Fotometria wybranego typu</a></p>';
			/*
			var wybor_grupstrumienia = document.getElementsByTagName("optgroup");
			for(i=1; i < wybor_grupstrumienia.length; i++)
			{
				//wybor_grupstrumienia.options[i].disabled = false;
				wybor_grupstrumienia.item[i].disabled = false;
			}
			*/
			var wybor_strumienia = document.getElementById("wybor_strumienia");
			for(i=1; i < wybor_strumienia.options.length; i++)
			{
				if(i==153 || i==154 || i==155 || i==156)
				{
				wybor_strumienia.options[i].disabled = false;
				}
				else
				{
				wybor_strumienia.options[i].disabled = true;
				}
			}
			var wybor_obudowy = document.getElementById("wybor_obudowy");
			for(i=1; i < wybor_obudowy.options.length; i++)
			{
				if(i==2)
				{
				wybor_obudowy.options[i].disabled = false;
				}
				else
				{
				wybor_obudowy.options[i].disabled = true;
				}
			}
			var wybor_klosza = document.getElementById("wybor_klosza");
			for(i=1; i < wybor_klosza.options.length; i++)
			{
				if(i==2)
				{
				wybor_klosza.options[i].disabled = false;
				}
				else
				{
				wybor_klosza.options[i].disabled = true;
				}
			}
			var wybor_material_dlawnic = document.getElementById("wybor_materialu_dlawnic");
			for(i=1; i < wybor_material_dlawnic.options.length; i++)
			{
				if(i==3)
				{
				wybor_material_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_material_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wielkosci_dlawnic = document.getElementById("wybor_wielkosci_dlawnic");
			for(i=1; i < wybor_wielkosci_dlawnic.options.length; i++)
			{
				if(i==1)
				{
				wybor_wielkosci_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_wielkosci_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wersji_awaryjnej = document.getElementById("wybor_awaryjna");
			for(i=1; i <  wybor_wersji_awaryjnej.options.length; i++)
			{
				if(i==1)
				{
				 wybor_wersji_awaryjnej.options[i].disabled = false;
				}
				else
				{
				wybor_wersji_awaryjnej.options[i].disabled = true;
				}
			}
			var wybor_przelotu = document.getElementById("wybor_przelot");
			for(i=1; i <  wybor_przelotu.options.length; i++)
			{
				if(i==1 || i==2)
				{
				 wybor_przelotu.options[i].disabled = false;
				}
				else
				{
				 wybor_przelotu.options[i].disabled = true;
				}
			}
			var wybor_ukladu_dlawnic = document.getElementById("wybor_ukladu_dlawnic");
			for(i=1; i <  wybor_ukladu_dlawnic.options.length; i++)
			{
				if(i==1 || i==2)
				{
				 wybor_ukladu_dlawnic.options[i].disabled = false;
				}
				else
				{
				 wybor_ukladu_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_mocowania = document.getElementById("wybor_mocowania");
			for(i=1; i < wybor_mocowania.options.length; i++)
			{
				if(i==1 || i==2 || i==3 || i==4 || i==13 || i==14)
				{
				 wybor_mocowania.options[i].disabled = false;
				}
				else
				{
				wybor_mocowania.options[i].disabled = true;
				}
			}
		}
		if(wybrano == 'INS242LED')
		{
			istnienieWyposazeniaDodatkowego = false;
			//var obrazek = document.getElementById("obrazek");
			//obrazek.src = "INS242LED_oprawa.jpg";
			okablowanie="3";
			//var obudowa_oprawy = document.getElementById("4-obudowa");
			//obudowa_oprawy.className = "row pokazane";
			
				document.getElementById("linki").innerHTML = 
				'<p style="font-size: 20px; color: #666666;">Odnośniki&nbsp;&nbsp;&nbsp;&nbsp;<em class="fa fa-download"></em></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/produkty/oprawy_oswietleniowe_do_przemyslu_spozywczego_i_hodowli_zwierzat/114-ins360led" target="_blank">Link do strony oprawy oświetleniowej</a></p> <p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/oprawy_oswietleniowe_do_przemyslu_spozywczego_i_hodowli_zwierzat/INS360LED/INS360LED_karta_katalogowa.pdf" target="_blank">Karta katalogowa</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/oprawy_oswietleniowe_do_przemyslu_spozywczego_i_hodowli_zwierzat/INS360LED/INS360LED_EU_declaration.pdf" target="_blank">Deklaracja UE</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/oprawy_oswietleniowe_do_przemyslu_spozywczego_i_hodowli_zwierzat/INS360LED/Atest_PZH_dla_INS360_INS360LED.pdf" target="_blank">Deklaracja UE</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a href="https://atmlighting.pl/images/produkty/oprawy_oswietleniowe_do_przemyslu_spozywczego_i_hodowli_zwierzat/INS360LED/Fotometria.zip" target="_blank">Fotometria wszystkich wersji</a></p><p><em class="fa fa-file-pdf">&nbsp;&nbsp;</em><a id=fotometriaDanegoTypu class="ukryte" href="" target="_blank">Fotometria wybranego typu</a></p>';
			/*
			var wybor_grupstrumienia = document.getElementsByTagName("optgroup");
			for(i=1; i < wybor_grupstrumienia.length; i++)
			{
				//wybor_grupstrumienia.options[i].disabled = false;
				wybor_grupstrumienia.item[i].disabled = false;
			}
			*/
			var wybor_strumienia = document.getElementById("wybor_strumienia");
			for(i=1; i < wybor_strumienia.options.length; i++)
			{
				if(i==153 || i==154 || i==155 || i==156)
				{
				wybor_strumienia.options[i].disabled = false;
				}
				else
				{
				wybor_strumienia.options[i].disabled = true;
				}
			}
			var wybor_obudowy = document.getElementById("wybor_obudowy");
			for(i=1; i < wybor_obudowy.options.length; i++)
			{
				if(i==2)
				{
				wybor_obudowy.options[i].disabled = false;
				}
				else
				{
				wybor_obudowy.options[i].disabled = true;
				}
			}
			var wybor_klosza = document.getElementById("wybor_klosza");
			for(i=1; i < wybor_klosza.options.length; i++)
			{
				if(i==2)
				{
				wybor_klosza.options[i].disabled = false;
				}
				else
				{
				wybor_klosza.options[i].disabled = true;
				}
			}
			var wybor_material_dlawnic = document.getElementById("wybor_materialu_dlawnic");
			for(i=1; i < wybor_material_dlawnic.options.length; i++)
			{
				if(i==3)
				{
				wybor_material_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_material_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wielkosci_dlawnic = document.getElementById("wybor_wielkosci_dlawnic");
			for(i=1; i < wybor_wielkosci_dlawnic.options.length; i++)
			{
				if(i==1)
				{
				wybor_wielkosci_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_wielkosci_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_wersji_awaryjnej = document.getElementById("wybor_awaryjna");
			for(i=1; i <  wybor_wersji_awaryjnej.options.length; i++)
			{
				if(i==1)
				{
				 wybor_wersji_awaryjnej.options[i].disabled = false;
				}
				else
				{
				wybor_wersji_awaryjnej.options[i].disabled = true;
				}
			}
			var wybor_przelotu = document.getElementById("wybor_przelot");
			for(i=1; i <  wybor_przelotu.options.length; i++)
			{
				if(i==1 || i==2)
				{
				 wybor_przelotu.options[i].disabled = false;
				}
				else
				{
				 wybor_przelotu.options[i].disabled = true;
				}
			}
			var wybor_ukladu_dlawnic = document.getElementById("wybor_ukladu_dlawnic");
			for(i=1; i <  wybor_ukladu_dlawnic.options.length; i++)
			{
				if(i==1 || i==2)
				{
				 wybor_ukladu_dlawnic.options[i].disabled = false;
				}
				else
				{
				 wybor_ukladu_dlawnic.options[i].disabled = true;
				}
			}
			var wybor_mocowania = document.getElementById("wybor_mocowania");
			for(i=1; i < wybor_mocowania.options.length; i++)
			{
				if(i==1 || i==2 || i==3 || i==4 || i==13 || i==14)
				{
				 wybor_mocowania.options[i].disabled = false;
				}
				else
				{
				wybor_mocowania.options[i].disabled = true;
				}
			}
		}
		var obrazek = document.getElementById("obrazek");
		obrazek.src = nazwa_oprawy + wersja_dodatkowa + "/" + nazwa_oprawy + wersja_dodatkowa + "_oprawa.jpg";
	} // koniec selekcji konkretnych opraw
function Selekcja_strumienia(wybrano)
	{
		var obrazek = document.getElementById("obrazek");
		obrazek.src = nazwa_oprawy + wersja_dodatkowa + "/" + nazwa_oprawy + wersja_dodatkowa + "_typy.jpg";
		document.getElementById("wynikiDoUkrycia").className = "ukryte";
			var resetKopiuj = document.getElementById("kopiuj");
	resetKopiuj.className = "btn btn-secondary ukryte";
		var resetEmail = document.getElementById("wyslijEmail");
		resetEmail.className = "btn btn-success ukryte";
		document.getElementById("oblicz-button").disabled = true;
		var material_dlawnic = document.getElementById("6-material-dlawnice");
		material_dlawnic.className = "row pokazane";
		//UKRYCIE LIST PONIŻEJ
		var wielkosc_dlawnic = document.getElementById("7-wielkosc-dlawnice");
		wielkosc_dlawnic.className = "row ukryte";
		var awaryjna = document.getElementById("8-awaryjna");
		awaryjna.className = "row ukryte";
		var przelot = document.getElementById("9-przelot");
		przelot.className = "row ukryte";
		var uklad_dlawnic = document.getElementById("10-uklad-dlawnic");
		uklad_dlawnic.className = "row ukryte";
		var mocowanie = document.getElementById("11-mocowanie");
		mocowanie.className = "row ukryte";
		var wyposazenieDodatkowe = document.getElementById("12-dodatkowa");
		wyposazenieDodatkowe.className = "row ukryte";
		$("#wybor_materialu_dlawnic").val('default');
		material_dlawnic = "";
		$("#wybor_wielkosci_dlawnic").val('default');
		wielkosc_dlawnic = "";
		$("#wybor_awaryjna").val('default');
		wersje_awaryjne = "";
		$("#wybor_przelot").val('default');
		$("#wybor_ukladu_dlawnic").val('default');
		uklad_dlawnic = "";
		$("#wybor_mocowania").val('default');
		mocowanie="";
		$("#wybor_wyposazenia_dodatkowego").val('default');
		wyposazenieDodatkowe="";
		strumien_oprawy = document.forms.formularz.elements["strumien"].value
		var ikonaStrumien = document.getElementById("ikona-strumien");
		ikonaStrumien.src="ikony/ikona-" + wybrano +".jpg";
		/*
		if(wybrano == "0600-E2")
		{
			ikonaStrumien.src="ikony/ikona-0600-e2.jpg";
		}
		if(wybrano == "0600-E4")
		{
			ikonaStrumien.src="ikony/ikona-0600-e4.jpg";
		}
		if(wybrano == "1200-E4")
		{
			ikonaStrumien.src="ikony/ikona-1200-e4.jpg";
		}
		if(wybrano == "1200-E8")
		{
			ikonaStrumien.src="ikony/ikona-1200-e8.jpg";
		}
		if(wybrano == "1500-E6")
		{
			ikonaStrumien.src="ikony/ikona-1500-e6.jpg";
		}
		if(wybrano == "045-E4")
		{
			ikonaStrumien.src="ikony/ikona-045-e4.jpg";
		}
		if(wybrano == "090-E8")
		{
			ikonaStrumien.src="ikony/ikona-090-e8.jpg";
		}
		if(wybrano == "130-E12")
		{
			ikonaStrumien.src="ikony/ikona-130-e12.jpg";
		}
		if(wybrano == "0600-B2-1")
		{
			ikonaStrumien.src="ikony/ikona-0600-b2-1.jpg";
		}
		if(wybrano == "0600-B2-2")
		{
			ikonaStrumien.src="ikony/ikona-0600-b2-2.jpg";
		}
		if(wybrano == "0600-E4-1")
		{
			ikonaStrumien.src="ikony/ikona-0600-e4-1.jpg";
		}
		if(wybrano == "0600-E4-3")
		{
			ikonaStrumien.src="ikony/ikona-0600-4-3.jpg";
		}
		if(wybrano == "0600-F1")
		{
			ikonaStrumien.src="ikony/ikona-0600-f1.jpg";
		}
		if(wybrano == "0600-F2")
		{
			ikonaStrumien.src="ikony/ikona-0600-f2.jpg";
		}if(wybrano == "0600-GX2")
		{
			ikonaStrumien.src="ikony/ikona-0600-gx2.jpg";
		}
		if(wybrano == "0600-J2-1")
		{
			ikonaStrumien.src="ikony/ikona-0600-j2-1.jpg";
		}
		if(wybrano == "0600-J2-2")
		{
			ikonaStrumien.src="ikony/ikona-0600-j2-2.jpg";
		}
		if(wybrano == "0600-J2-3")
		{
			ikonaStrumien.src="ikony/ikona-0600-j2-3.jpg";
		}
		if(wybrano == "1200-B4-1")
		{
			ikonaStrumien.src="ikony/ikona-1200-b4-1.jpg";
		}
		if(wybrano == "1200-B4-2")
		{
			ikonaStrumien.src="ikony/ikona-1200-b4-2.jpg";
		}
		if(wybrano == "1200-B4-3")
		{
			ikonaStrumien.src="ikony/ikona-1200-4-3.jpg";
		}
		if(wybrano == "1200-E3-1")
		{
			ikonaStrumien.src="ikony/ikona-1200-E3-1.jpg";
		}
		if(wybrano == "1200-E3-3")
		{
			ikonaStrumien.src="ikony/ikona-1200-e3-3.jpg";
		}
		if(wybrano == "1200-E6-1")
		{
			ikonaStrumien.src="ikony/ikona-1200-e6-1.jpg";
		}
		if(wybrano == "1200-E6-3")
		{
			ikonaStrumien.src="ikony/ikona-1200-e6-3.jpg";
		}
		if(wybrano == "1200-F2")
		{
			ikonaStrumien.src="ikony/ikona-1200-f2.jpg";
		}
		if(wybrano == "1200-F4")
		{
			ikonaStrumien.src="ikony/ikona-1200-f4.jpg";
		}
		if(wybrano == "1200-FX2")
		{
			ikonaStrumien.src="ikony/ikona-1200-fx2.jpg";
		}
		if(wybrano == "1200-FX4")
		{
			ikonaStrumien.src="ikony/ikona-1200-fx4.jpg";
		}
		if(wybrano == "1200-G2")
		{
			ikonaStrumien.src="ikony/ikona-1200-g2.jpg";
		}
		if(wybrano == "1200-G4")
		{
			ikonaStrumien.src="ikony/ikona-1200-g4.jpg";
		}
		if(wybrano == "1200-GX4")
		{
			ikonaStrumien.src="ikony/ikona-1200-gx4.jpg";
		}
		if(wybrano == "1200-J4-1")
		{
			ikonaStrumien.src="ikony/ikona-1200-j4-1.jpg";
		}
		if(wybrano == "1200-J4-2")
		{
			ikonaStrumien.src="ikony/ikona-1200-j4-2.jpg";
		}
		if(wybrano == "1200-J4-3")
		{
			ikonaStrumien.src="ikony/ikona-1200-j4-3.jpg";
		}
		if(wybrano == "1500-J4M2-1")
		{
			ikonaStrumien.src="ikony/ikona-1500-j4m2-1.jpg";
		}
		if(wybrano == "1500-J4M2-2")
		{
			ikonaStrumien.src="ikony/ikona-1500-j4m2-2.jpg";
		}
		if(wybrano == "1500-J4M2-3")
		{
			ikonaStrumien.src="ikony/ikona-1500-j4m2-3.jpg";
		}
		*/
			//reset ikon ponizej
		var ikonaMaterialDlawnic = document.getElementById("ikona-material-dlawnic");
		ikonaMaterialDlawnic.src="";
		var ikonaWielkosciDlawnic = document.getElementById("ikona-wielkosc-dlawnic");
		ikonaWielkosciDlawnic.src="";
		var ikonaAwaryjnosc = document.getElementById("ikona-awaryjnosc");
		ikonaAwaryjnosc.src="";
		var ikonaUkladuDlawnic = document.getElementById("ikona-uklad-dlawnic");
		ikonaUkladuDlawnic.src="";
		var ikonaMocowanie = document.getElementById("ikona-mocowanie");
		ikonaMocowanie.src= "";
		
		
		
		wyborFotometrii = document.getElementById("fotometriaDanegoTypu");
		wyborFotometrii.className = "pokazane";
		wyborFotometrii.innerHTML = "Fotometria wybranego typu";
		
		
		wyborFotometrii.href = "https://atmlighting.pl/images/produkty" + dzialWyborFotometrii + nazwa_oprawy + wersja_dodatkowa + "/" + nazwa_oprawy + "-" + strumien_oprawy + wersja_dodatkowa + ".ldt";
		$("#linki").removeClass("animated pulse").addClass("linki animated pulse").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
					$(this).removeClass("animated pulse");
    							});


		
		var KlasaTrzecia = wybrano.includes("-D");
		
		if(KlasaTrzecia)
		{
				okablowanie="2";
				zasilanie_oprawy = "11E";
				mocowanie = "III";
				var wybor_wersji_awaryjnej = document.getElementById("wybor_awaryjna");
			for(i=1; i <  wybor_wersji_awaryjnej.options.length; i++)
			{
				if(i==1)
				{
				 wybor_wersji_awaryjnej.options[i].disabled = false;
				}
				else
				{
				wybor_wersji_awaryjnej.options[i].disabled = true;
				}
			}
			var wybor_wyposazenia_dodatkowego = document.getElementById("wybor_wyposazenia_dodatkowego");
			for(i=1; i < wybor_wyposazenia_dodatkowego.options.length; i++)
			{
				if(i==1 ||i==3 || i==4)
				{
				 wybor_wyposazenia_dodatkowego.options[i].disabled = false;
				}
				else
				{
				wybor_wyposazenia_dodatkowego.options[i].disabled = true;
				}
			}
		}

		if((nazwa_oprawy == "INP320LED" || nazwa_oprawy == "INP320LEDSF" || nazwa_oprawy == "INP320LEDRC") && KlasaTrzecia == false)
		{
			var wybor_wersji_awaryjnej = document.getElementById("wybor_awaryjna");
			for(i=1; i <  wybor_wersji_awaryjnej.options.length; i++)
			{
				if(i==1 || i==2 || i==4)
				{
				 wybor_wersji_awaryjnej.options[i].disabled = false;
				}
				else
				{
				wybor_wersji_awaryjnej.options[i].disabled = true;
				}
			}
			var wybor_wyposazenia_dodatkowego = document.getElementById("wybor_wyposazenia_dodatkowego");
			for(i=1; i < wybor_wyposazenia_dodatkowego.options.length; i++)
			{
				if(i==1 || i==3 || i==4 || i==6)
				{
				 wybor_wyposazenia_dodatkowego.options[i].disabled = false;
				}
				else
				{
				wybor_wyposazenia_dodatkowego.options[i].disabled = true;
				}
			}
		}
		/*
			if(nazwa_oprawy == "EXL210LED" && strumien_oprawy == "0600-E2")
			{
			wyborFotometrii.href = "https://atmlighting.pl/images/produkty/przeciwwybuchowe_oprawy_oswietleniowe/EXL210LED/Fotometria-EXL210LED-0600-E2.zip";
			}
			if(nazwa_oprawy == "EXL210LED" && strumien_oprawy == "0600-E4")
			{
			wyborFotometrii.href = "https://atmlighting.pl/images/produkty/przeciwwybuchowe_oprawy_oswietleniowe/EXL210LED/Fotometria-EXL210LED-0600-E4.zip";
			}
			if(nazwa_oprawy == "EXL210LED" && strumien_oprawy == "1200-E4")
			{
			wyborFotometrii.href = "https://atmlighting.pl/images/produkty/przeciwwybuchowe_oprawy_oswietleniowe/EXL210LED/Fotometria-EXL210LED-1200-E4.zip";
			}
			if(nazwa_oprawy == "EXL210LED" && strumien_oprawy == "1200-E8")
			{
			wyborFotometrii.href = "https://atmlighting.pl/images/produkty/przeciwwybuchowe_oprawy_oswietleniowe/EXL210LED/Fotometria-EXL210LED-1200-E8.zip";
			}
			if(nazwa_oprawy == "EXL210LED" && strumien_oprawy == "1500-E6")
			{
			wyborFotometrii.href = "https://atmlighting.pl/images/produkty/przeciwwybuchowe_oprawy_oswietleniowe/EXL210LED/Fotometria-EXL210LED-1500-E6.zip";
			}
			if(nazwa_oprawy == "EXL310LED" && strumien_oprawy == "0600-E2")
			{
			wyborFotometrii.href = "https://atmlighting.pl/images/produkty/przeciwwybuchowe_oprawy_oswietleniowe/EXL310LED/Fotometria-EXL310LED-0600-E2.zip";
			}
			if(nazwa_oprawy == "EXL310LED" && strumien_oprawy == "0600-E4")
			{
			wyborFotometrii.href = "https://atmlighting.pl/images/produkty/przeciwwybuchowe_oprawy_oswietleniowe/EXL310LED/Fotometria-EXL310LED-0600-E4.zip";
			}
			if(nazwa_oprawy == "EXL310LED" && strumien_oprawy == "1200-E4")
			{
			wyborFotometrii.href = "https://atmlighting.pl/images/produkty/przeciwwybuchowe_oprawy_oswietleniowe/EXL310LED/Fotometria-EXL310LED-1200-E4.zip";
			}
			if(nazwa_oprawy == "EXL310LED" && strumien_oprawy == "1200-E8")
			{
			wyborFotometrii.href = "https://atmlighting.pl/images/produkty/przeciwwybuchowe_oprawy_oswietleniowe/EXL310LED/Fotometria-EXL310LED-1200-E8.zip";
			}
			if(nazwa_oprawy == "EXL380LED" && strumien_oprawy == "045-E4")
			{
			wyborFotometrii.href = "https://atmlighting.pl/images/produkty/przeciwwybuchowe_oprawy_oswietleniowe/EXL380LED/Fotometria-EXL380LED-045-E4.zip";
			}
			if(nazwa_oprawy == "EXL380LED" && strumien_oprawy == "090-E8")
			{
			wyborFotometrii.href = "https://atmlighting.pl/images/produkty/przeciwwybuchowe_oprawy_oswietleniowe/EXL380LED/Fotometria-EXL380LED-090-E8.zip";
			}
			if(nazwa_oprawy == "EXL380LED" && strumien_oprawy == "130-E12")
			{
			wyborFotometrii.href = "https://atmlighting.pl/images/produkty/przeciwwybuchowe_oprawy_oswietleniowe/EXL380LED/Fotometria-EXL380LED-130-E12.zip";
			}
			if(nazwa_oprawy == "EXL390LED" && strumien_oprawy == "0600-E4-1")
			{
			wyborFotometrii.href = "https://atmlighting.pl/images/produkty/przeciwwybuchowe_oprawy_oswietleniowe/EXL390LED/Fotometria-EXL390LED-0600-E4-1.zip";
			}
			if(nazwa_oprawy == "EXL390LED" && strumien_oprawy == "0600-E4-3")
			{
			wyborFotometrii.href = "https://atmlighting.pl/images/produkty/przeciwwybuchowe_oprawy_oswietleniowe/EXL390LED/Fotometria-EXL390LED-0600-E4-3.zip";
			}
			if(nazwa_oprawy == "EXL390LED" && strumien_oprawy == "1200-E3-1")
			{
			wyborFotometrii.href = "https://atmlighting.pl/images/produkty/przeciwwybuchowe_oprawy_oswietleniowe/EXL390LED/Fotometria-EXL390LED-1200-E3-1.zip";
			}
			if(nazwa_oprawy == "EXL390LED" && strumien_oprawy == "1200-E3-3")
			{
			wyborFotometrii.href = "https://atmlighting.pl/images/produkty/przeciwwybuchowe_oprawy_oswietleniowe/EXL390LED/Fotometria-EXL390LED-1200-E3-3.zip";
			}
			if(nazwa_oprawy == "EXL390LED" && strumien_oprawy == "1200-E6-1")
			{
			wyborFotometrii.href = "https://atmlighting.pl/images/produkty/przeciwwybuchowe_oprawy_oswietleniowe/EXL390LED/Fotometria-EXL390LED-1200-E6-1.zip";
			}
			if(nazwa_oprawy == "EXL390LED" && strumien_oprawy == "1200-E6-3")
			{
			wyborFotometrii.href = "https://atmlighting.pl/images/produkty/przeciwwybuchowe_oprawy_oswietleniowe/EXL390LED/Fotometria-EXL390LED-1200-E6-3.zip";
			}
			*/


	}
function Selekcja_materialu_obudowy(wybrano)
	{
		var obrazek = document.getElementById("obrazek");
		obrazek.src = nazwa_oprawy + wersja_dodatkowa + "/" + nazwa_oprawy + wersja_dodatkowa + "_oprawa.jpg";
		document.getElementById("wynikiDoUkrycia").className = "ukryte";
			var resetKopiuj = document.getElementById("kopiuj");
	resetKopiuj.className = "btn btn-secondary ukryte";
		var resetEmail = document.getElementById("wyslijEmail");
		resetEmail.className = "btn btn-success ukryte";
		document.getElementById("oblicz-button").disabled = true;
		var klosz_oprawy = document.getElementById("5-klosz");
		klosz_oprawy.className = "row pokazane";
		wyborFotometrii = document.getElementById("fotometriaDanegoTypu");
		wyborFotometrii.className = "ukryte";
		//UKRYCIE LIST PONIŻEJ
		var strumien_oprawy = document.getElementById("3-strumien");
		strumien_oprawy.className = "row ukryte";
		var material_dlawnic = document.getElementById("6-material-dlawnice");
		material_dlawnic.className = "row ukryte";
		var wielkosc_dlawnic = document.getElementById("7-wielkosc-dlawnice");
		wielkosc_dlawnic.className = "row ukryte";
		var awaryjna = document.getElementById("8-awaryjna");
		awaryjna.className = "row ukryte";
		var przelot = document.getElementById("9-przelot");
		przelot.className = "row ukryte";
		var uklad_dlawnic = document.getElementById("10-uklad-dlawnic");
		uklad_dlawnic.className = "row ukryte";
		var wyposazenieDodatkowe = document.getElementById("12-dodatkowa");
		wyposazenieDodatkowe.className = "row ukryte";
		var mocowanie = document.getElementById("11-mocowanie");
		mocowanie.className = "row ukryte";
		$("#wybor_klosza").val('default');
		klosz_oprawy = "";
		$("#wybor_strumienia").val('default');
		strumien_oprawy = "";
		$("#wybor_materialu_dlawnic").val('default');
		material_dlawnic = "";
		$("#wybor_wielkosci_dlawnic").val('default');
		wielkosc_dlawnic = "";
		$("#wybor_awaryjna").val('default');
		wersje_awaryjne = "";
		$("#wybor_przelot").val('default');
		$("#wybor_ukladu_dlawnic").val('default');
		uklad_dlawnic = "";
		$("#wybor_mocowania").val('default');
		mocowanie="";	
		$("#wybor_wyposazenia_dodatkowego").val('default');
		wyposazenieDodatkowe="";
		
		obudowa_oprawy = document.forms.formularz.elements["obudowa"].value;
		//return obudowa_oprawy;
		
		var ikonaObudowa = document.getElementById("ikona-obudowa");
		if(wybrano == "PC")
		{
			ikonaObudowa.src="ikony/ikona-pc.jpg";
		}
		if(wybrano == "NIRO")
		{
			ikonaObudowa.src="ikony/ikona-niro.jpg";
		}
		if(wybrano == "GS")
		{
			ikonaObudowa.src="ikony/ikona-gs.jpg";
		}
		if(wybrano == "GRP")
		{
			ikonaObudowa.src="ikony/ikona-grp.jpg";
		}
		if(wybrano == "BRS")
		{
			ikonaObudowa.src="ikony/ikona-brs.jpg";
		}
		if(wybrano == "ALU")
		{
			ikonaObudowa.src="ikony/ikona-alu.jpg";
		}
		
		//reset ikon ponizej
		var ikonaKlosz = document.getElementById("ikona-klosz");
		ikonaKlosz.src="";
		var ikonaStrumien = document.getElementById("ikona-strumien");
		ikonaStrumien.src="";
		var ikonaMaterialDlawnic = document.getElementById("ikona-material-dlawnic");
		ikonaMaterialDlawnic.src="";
		var ikonaWielkosciDlawnic = document.getElementById("ikona-wielkosc-dlawnic");
		ikonaWielkosciDlawnic.src="";
		var ikonaAwaryjnosc = document.getElementById("ikona-awaryjnosc");
		ikonaAwaryjnosc.src="";
		var ikonaUkladuDlawnic = document.getElementById("ikona-uklad-dlawnic");
		ikonaUkladuDlawnic.src="";
		var ikonaMocowanie = document.getElementById("ikona-mocowanie");
		ikonaMocowanie.src= "";
		
		
	}
function Selekcja_materialu_klosza(wybrano)
	{
		var obrazek = document.getElementById("obrazek");
		obrazek.src = nazwa_oprawy + wersja_dodatkowa + "/" + nazwa_oprawy + wersja_dodatkowa + "_typy.jpg";
		document.getElementById("wynikiDoUkrycia").className = "ukryte";
		var resetKopiuj = document.getElementById("kopiuj");
		resetKopiuj.className = "btn btn-secondary ukryte";
		var resetEmail = document.getElementById("wyslijEmail");
		resetEmail.className = "btn btn-success ukryte";
		document.getElementById("oblicz-button").disabled = true;
		var strumien_oprawy = document.getElementById("3-strumien");
		strumien_oprawy.className = "row pokazane";
		//UKRYCIE LIST PONIŻEJ
		wyborFotometrii = document.getElementById("fotometriaDanegoTypu");
		wyborFotometrii.className = "ukryte";
		var material_dlawnic = document.getElementById("6-material-dlawnice");
		material_dlawnic.className = "row ukryte";
		var wielkosc_dlawnic = document.getElementById("7-wielkosc-dlawnice");
		wielkosc_dlawnic.className = "row ukryte";
		var awaryjna = document.getElementById("8-awaryjna");
		awaryjna.className = "row ukryte";
		var przelot = document.getElementById("9-przelot");
		przelot.className = "row ukryte";
		var uklad_dlawnic = document.getElementById("10-uklad-dlawnic");
		uklad_dlawnic.className = "row ukryte";
		var mocowanie = document.getElementById("11-mocowanie");
		mocowanie.className = "row ukryte";
		var wyposazenieDodatkowe = document.getElementById("12-dodatkowa");
		wyposazenieDodatkowe.className = "row ukryte";
		$("#wybor_strumienia").val('default');
		strumien_oprawy = "";
		$("#wybor_materialu_dlawnic").val('default');
		material_dlawnic = "";
		$("#wybor_wielkosci_dlawnic").val('default');
		wielkosc_dlawnic = "";
		$("#wybor_awaryjna").val('default');
		wersje_awaryjne = "";
		$("#wybor_przelot").val('default');
		$("#wybor_ukladu_dlawnic").val('default');
		uklad_dlawnic = "";
		$("#wybor_mocowania").val('default');
		mocowanie="";
		$("#wybor_wyposazenia_dodatkowego").val('default');
		wyposazenieDodatkowe="";
		//var material_dlawnic = document.getElementById("6-material-dlawnice");
		//material_dlawnic.className = "row pokazane";
		klosz_oprawy = document.forms.formularz.elements["klosz"].value;
		//return klosz_oprawy;
		/*
		var obrazek = document.getElementById("obrazek");

		if(nazwa_oprawy =="EXL210LED")
			{
				obrazek.src = "EXL210LED/EXL210LED_typy.jpg";
			}
		if(nazwa_oprawy =="EXL310LED")
			{
				obrazek.src = "EXL310LED/EXL310LED_typy.jpg";
			}
		if(nazwa_oprawy =="EXL380LED")
			{
				obrazek.src = "EXL380LED/EXL380LED_typy.jpg";
			}
		if(nazwa_oprawy =="EXL390LED")
			{
				obrazek.src = "EXL390LED/EXL390LED_typy.jpg";
			}
		if(nazwa_oprawy =="EXF200LED")
		{
			obrazek.src = "EXF200LED/EXF200LED_typy.jpg";
		}
		if(nazwa_oprawy =="EXF250LED")
		{
			obrazek.src = "EXF250LED/EXF250LED_typy.jpg";
		}
		if(nazwa_oprawy =="EXF300LED")
		{
			obrazek.src = "EXF300LED/EXF300LED_typy.jpg";
		}
			if(nazwa_oprawy =="FLX310LED")
		{
			obrazek.src = "FLX310LED/FLX310LED_typy.jpg";
		}
			if(nazwa_oprawy =="040324LED")
		{
			obrazek.src = "040324LED/040324LED_typy.jpg";
		}
			if(nazwa_oprawy =="PLFMLED")
		{
			obrazek.src = "PLFMLED/PLFMLED_typy.jpg";
		}
			if(nazwa_oprawy =="PLFSLED")
		{
			obrazek.src = "PLFS50LED/PLFS50LED_typy.jpg";
		}
		*/			
		var ikonaKlosz = document.getElementById("ikona-klosz");
		if(wybrano == "PC")
		{
			ikonaKlosz.src="ikony/ikona-pc.jpg";
		}
		if(wybrano == "GL")
		{
			ikonaKlosz.src="ikony/ikona-gl.jpg";
		}
			if(wybrano == "SGL")
		{
			ikonaKlosz.src="ikony/ikona-sgl.jpg";
		}
			if(wybrano == "PM")
		{
			ikonaKlosz.src="ikony/ikona-pm.jpg";
		}
			if(wybrano == "PT")
		{
			ikonaKlosz.src="ikony/ikona-pt.jpg";
		}
				
			//reset ikon ponizej
		
		var ikonaStrumien = document.getElementById("ikona-strumien");
		ikonaStrumien.src="";
		var ikonaMaterialDlawnic = document.getElementById("ikona-material-dlawnic");
		ikonaMaterialDlawnic.src="";
		var ikonaWielkosciDlawnic = document.getElementById("ikona-wielkosc-dlawnic");
		ikonaWielkosciDlawnic.src="";
		var ikonaAwaryjnosc = document.getElementById("ikona-awaryjnosc");
		ikonaAwaryjnosc.src="";
		var ikonaUkladuDlawnic = document.getElementById("ikona-uklad-dlawnic");
		ikonaUkladuDlawnic.src="";
		var ikonaMocowanie = document.getElementById("ikona-mocowanie");
		ikonaMocowanie.src= "";
			
			
	}
function Selekcja_materialu_dlawnic(wybrano)
	{
		var obrazek = document.getElementById("obrazek");
		obrazek.src = nazwa_oprawy + wersja_dodatkowa + "/" + nazwa_oprawy + wersja_dodatkowa + "_oprawa.jpg";
		document.getElementById("wynikiDoUkrycia").className = "ukryte";
			var resetKopiuj = document.getElementById("kopiuj");
	resetKopiuj.className = "btn btn-secondary ukryte";
		var resetEmail = document.getElementById("wyslijEmail");
		resetEmail.className = "btn btn-success ukryte";
		document.getElementById("oblicz-button").disabled = true;
		var wielkosc_dlawnic = document.getElementById("7-wielkosc-dlawnice");
		wielkosc_dlawnic.className = "row pokazane";
		//UKRYCIE LIST PONIŻEJ
		var awaryjna = document.getElementById("8-awaryjna");
		awaryjna.className = "row ukryte";
		var przelot = document.getElementById("9-przelot");
		przelot.className = "row ukryte";
		var uklad_dlawnic = document.getElementById("10-uklad-dlawnic");
		uklad_dlawnic.className = "row ukryte";
		var mocowanie = document.getElementById("11-mocowanie");
		mocowanie.className = "row ukryte";
		var wyposazenieDodatkowe = document.getElementById("12-dodatkowa");
		wyposazenieDodatkowe.className = "row ukryte";
		$("#wybor_wielkosci_dlawnic").val('default');
		wielkosc_dlawnic = "";
		$("#wybor_awaryjna").val('default');
		wersje_awaryjne = "";
		$("#wybor_przelot").val('default');
		$("#wybor_ukladu_dlawnic").val('default');
		uklad_dlawnic = "";
		$("#wybor_mocowania").val('default');
		mocowanie="";
		$("#wybor_wyposazenia_dodatkowego").val('default');
		wyposazenieDodatkowe="";
		
		

		material_dlawnic = document.forms.formularz.elements["material-dlawnic"].value;
		//return material_dlawnic;
		
		
		if((nazwa_oprawy =="INS370LED" || nazwa_oprawy =="INS395LED") && wybrano =="PCI")
			{
				var wybor_wielkosci_dlawnic = document.getElementById("wybor_wielkosci_dlawnic");
			for(i=1; i < wybor_wielkosci_dlawnic.options.length; i++)
			{
				if(i==3)
				{
				wybor_wielkosci_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_wielkosci_dlawnic.options[i].disabled = true;
				}
			}
			}
		if((nazwa_oprawy =="INS370LED" || nazwa_oprawy =="INS395LED") && (wybrano =="P" || wybrano =="M"))
			{
				var wybor_wielkosci_dlawnic = document.getElementById("wybor_wielkosci_dlawnic");
			for(i=1; i < wybor_wielkosci_dlawnic.options.length; i++)
			{
				if(i==1)
				{
				wybor_wielkosci_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_wielkosci_dlawnic.options[i].disabled = true;
				}
			}
			}
		
		var ikonaMaterialDlawnic = document.getElementById("ikona-material-dlawnic");
		ikonaMaterialDlawnic.src="ikony/ikona-" + wybrano + ".jpg";
		/*
		if(wybrano == "M")
		{
			ikonaMaterialDlawnic.src="ikony/ikona-m.jpg";
		}
		if(wybrano == "P")
		{
			ikonaMaterialDlawnic.src="ikony/ikona-p.jpg";
		}
		
		if(wybrano == "RST")
		{
			ikonaMaterialDlawnic.src="ikony/ikona-rst.jpg";
		}
		*/
		//reset ikon ponizej
		var ikonaWielkosciDlawnic = document.getElementById("ikona-wielkosc-dlawnic");
		ikonaWielkosciDlawnic.src="";
		var ikonaAwaryjnosc = document.getElementById("ikona-awaryjnosc");
		ikonaAwaryjnosc.src="";
		var ikonaUkladuDlawnic = document.getElementById("ikona-uklad-dlawnic");
		ikonaUkladuDlawnic.src="";
		var ikonaMocowanie = document.getElementById("ikona-mocowanie");
		ikonaMocowanie.src= "";
		
	}
function Selekcja_wielkosci_dlawnic(wybrano)
	{
		var obrazek = document.getElementById("obrazek");
		obrazek.src = nazwa_oprawy + wersja_dodatkowa + "/" + nazwa_oprawy + wersja_dodatkowa + "_oprawa.jpg";
		document.getElementById("wynikiDoUkrycia").className = "ukryte";
			var resetKopiuj = document.getElementById("kopiuj");
	resetKopiuj.className = "btn btn-secondary ukryte";
		var resetEmail = document.getElementById("wyslijEmail");
		resetEmail.className = "btn btn-success ukryte";
		document.getElementById("oblicz-button").disabled = true;
		var awaryjna = document.getElementById("8-awaryjna");
		awaryjna.className = "row pokazane";
		//UKRYCIE LIST PONIŻEJ
		var przelot = document.getElementById("9-przelot");
		przelot.className = "row ukryte";
		var uklad_dlawnic = document.getElementById("10-uklad-dlawnic");
		uklad_dlawnic.className = "row ukryte";
		var mocowanie = document.getElementById("11-mocowanie");
		mocowanie.className = "row ukryte";
		var wyposazenieDodatkowe = document.getElementById("12-dodatkowa");
		wyposazenieDodatkowe.className = "row ukryte";
		$("#wybor_awaryjna").val('default');
		wersje_awaryjne = "";
		$("#wybor_przelot").val('default');
		$("#wybor_ukladu_dlawnic").val('default');
		uklad_dlawnic = "";
		$("#wybor_mocowania").val('default');
		mocowanie="";
		$("#wybor_wyposazenia_dodatkowego").val('default');
		wyposazenieDodatkowe="";
		
		
		wielkosc_dlawnic = document.forms.formularz.elements["wielkosc-dlawnic"].value;
		if(wybrano == "przepust")
		{
		wielkosc_dlawnic = "";
		}


		if((nazwa_oprawy == "EXL210LED" || nazwa_oprawy =="EXL310LED") && wybrano == "25")
		{
				
			var wybor_ukladu_dlawnic = document.getElementById("wybor_ukladu_dlawnic");
			for(i=1; i <  wybor_ukladu_dlawnic.options.length; i++)
			{
				if(i==1 || i==2)
				{
				 wybor_ukladu_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_ukladu_dlawnic.options[i].disabled = true;
				}
			}
		}
		if((nazwa_oprawy == "EXL210LED" || nazwa_oprawy =="EXL310LED") && wybrano == "20")
		{
				
			var wybor_ukladu_dlawnic = document.getElementById("wybor_ukladu_dlawnic");
			for(i=1; i <  wybor_ukladu_dlawnic.options.length; i++)
			{
				if(i==1 || i==2 || i==3 || i==4 || i==5)
				{
				 wybor_ukladu_dlawnic.options[i].disabled = false;
				}
				else
				{
				wybor_ukladu_dlawnic.options[i].disabled = true;
				}
			}
		}
		
		
		var ikonaWielkosciDlawnic = document.getElementById("ikona-wielkosc-dlawnic");
		if(wybrano == "20")
		{
			ikonaWielkosciDlawnic.src="ikony/ikona-20.jpg";
		}
		if(wybrano == "25")
		{
			ikonaWielkosciDlawnic.src="ikony/ikona-25.jpg";
		}
		
			//reset ikon ponizej
		var ikonaAwaryjnosc = document.getElementById("ikona-awaryjnosc");
		ikonaAwaryjnosc.src="";
		var ikonaUkladuDlawnic = document.getElementById("ikona-uklad-dlawnic");
		ikonaUkladuDlawnic.src="";
		var ikonaMocowanie = document.getElementById("ikona-mocowanie");
		ikonaMocowanie.src= "";
	
	}
function Selekcja_awaryjnosci(wybrano)
	{
		var obrazek = document.getElementById("obrazek");
		obrazek.src = nazwa_oprawy + wersja_dodatkowa + "/" + nazwa_oprawy + wersja_dodatkowa + "_oprawa.jpg";
		document.getElementById("wynikiDoUkrycia").className = "ukryte";
			var resetKopiuj = document.getElementById("kopiuj");
	resetKopiuj.className = "btn btn-secondary ukryte";
		var resetEmail = document.getElementById("wyslijEmail");
		resetEmail.className = "btn btn-success ukryte";
		document.getElementById("oblicz-button").disabled = true;
		//var enable_przelot = document.getElementById("wybor_przelot");
		//enable_przelot.setAttribute("disabled", false);
		//$(".").removeAttr('disabled');
		$("#wybor_przelot").removeAttr('disabled');
		//$("#wybor_przelot").remove
		var przelot = document.getElementById("9-przelot");
		przelot.className = "row pokazane";
		//UKRYCIE LIST PONIŻEJ
		var uklad_dlawnic = document.getElementById("10-uklad-dlawnic");
		uklad_dlawnic.className = "row ukryte";
		var mocowanie = document.getElementById("11-mocowanie");
		mocowanie.className = "row ukryte";
		var wyposazenieDodatkowe = document.getElementById("12-dodatkowa");
		wyposazenieDodatkowe.className = "row ukryte";
		$("#wybor_przelot").val('default');
		$("#wybor_ukladu_dlawnic").val('default');
		uklad_dlawnic = "";
		$("#wybor_mocowania").val('default');
		mocowanie="";
		$("#wybor_wyposazenia_dodatkowego").val('default');
		wyposazenieDodatkowe="";
		wersje_awaryjne = document.forms.formularz.elements["wersje_awaryjne"].value;
		//return wersje_awaryjne;
		
		//ustawienie ikon
		var ikonaAwaryjnosc = document.getElementById("ikona-awaryjnosc");
		if(wybrano == "brak")
		{
			ikonaAwaryjnosc.src="";
		}
		if(wybrano == "-A3")
		{
			ikonaAwaryjnosc.src="ikony/ikona-a3.jpg";
		}
		if(wybrano == "-ZB")
		{
			ikonaAwaryjnosc.src="ikony/ikona-zb.jpg";
		}
		if(wybrano == "-ZBS")
		{
			ikonaAwaryjnosc.src="ikony/ikona-zbs.jpg";
		}
		if(wybrano == "-ZBC")
		{
			ikonaAwaryjnosc.src="ikony/ikona-zbc.jpg";
		}
		if(wybrano == "-ZBD")
		{
			ikonaAwaryjnosc.src="ikony/ikona-zbd.jpg";
		}
		if(wybrano == "-ZBH")
		{
			ikonaAwaryjnosc.src="ikony/ikona-zbh.jpg";
		}
		if(wybrano == "-ZBT")
		{
			ikonaAwaryjnosc.src="ikony/ikona-zbt.jpg";
		}
		if(wybrano == "-ZBM")
		{
			ikonaAwaryjnosc.src="ikony/ikona-zbm.jpg";
		}
		if(wybrano == "-ZBR")
		{
			ikonaAwaryjnosc.src="ikony/ikona-zbr.jpg";
		}
		if(wybrano == "-DALI")
		{
			ikonaAwaryjnosc.src="ikony/ikona-da.jpg";
		}
		
		//link do fotometrii danego typu
		wyborFotometrii = document.getElementById("fotometriaDanegoTypu");
		if(wybrano == "brak")
			{
				wersje_awaryjne="";
		wyborFotometrii.innerHTML = "Fotometria wybranego typu";
			wyborFotometrii.href = "https://atmlighting.pl/images/produkty" + dzialWyborFotometrii + nazwa_opraw + wersja_dodatkowa + "/" + nazwa_oprawy + "-" + strumien_oprawy + wersja_dodatkowa + ".ldt";
			}
		
		if(wybrano != "brak")
		{
		wyborFotometrii.innerHTML = "Fotometria wybranego typu wersji awaryjnej";
		wyborFotometrii.href = "https://atmlighting.pl/images/produkty" + dzialWyborFotometrii + nazwa_oprawy + wersja_dodatkowa + "/" + nazwa_oprawy + "-" + strumien_oprawy + wersja_dodatkowa + wersje_awaryjne + ".ldt";
		}
	}
function Selekcja_zasilania_oprawy(wybrano)
	{
		if(nazwa_oprawy =="HPL440LED" )
			{
			okablowanie="3";
			zasilanie_oprawy = "34E";
			wersje_awaryjne="";
			}
		if(nazwa_oprawy =="HPL430LED")
			{
			okablowanie="2";
			zasilanie_oprawy = "34E";
			wersje_awaryjne="";
			}
		
		var WysokieTemp = strumien_oprawy.includes("-W");
		var niskieTempY = strumien_oprawy.includes("-Y");
		var niskieTempX = strumien_oprawy.includes("-X");
		if(niskieTempY  || niskieTempX)
			{
				okablowanie="3";
				zasilanie_oprawy = "35E";
				wersje_awaryjne="";
			}
		if(WysokieTemp)
			{
				zasilanie_oprawy = "34E";
				wersje_awaryjne="";
				okablowanie="3";
			}
		
		var Wersja0600 = strumien_oprawy.includes("0600");
		var EXFY = nazwa_oprawy.includes("EXF");
		if(wybrano == "-A3" && Wersja0600 && (nazwa_oprawy == "EXL210LED" || nazwa_oprawy == "EXL310LED" || nazwa_oprawy == "EXF200LED"|| nazwa_oprawy == "EXF250LED"|| nazwa_oprawy == "EXF300LED"))
		{
			var wybor_przelotu = document.getElementById("wybor_przelot");
			for(i=1; i <  wybor_przelotu.options.length; i++)
			{
				if(i==2)
				{
				 wybor_przelotu.options[i].disabled = false;
				}
				else
				{
				 wybor_przelotu.options[i].disabled = true;
				}
			}
		}
		if(wybrano == "-A3" && Wersja0600==false && (nazwa_oprawy == "EXL210LED" || nazwa_oprawy == "EXL310LED" || nazwa_oprawy == "EXF200LED"|| nazwa_oprawy == "EXF250LED"|| nazwa_oprawy == "EXF300LED"))
		{
			var wybor_przelotu = document.getElementById("wybor_przelot");
			for(i=1; i <  wybor_przelotu.options.length; i++)
			{
				if(i==1 || i==2)
				{
				 wybor_przelotu.options[i].disabled = false;
				}
				else
				{
				 wybor_przelotu.options[i].disabled = true;
				}
			}
		}
		if(wybrano != "-A3" && (nazwa_oprawy == "EXL210LED" || nazwa_oprawy == "EXL310LED" || nazwa_oprawy == "EXF200LED"|| nazwa_oprawy == "EXF250LED"|| nazwa_oprawy == "EXF300LED"))
		{
			var wybor_przelotu = document.getElementById("wybor_przelot");
			for(i=1; i <  wybor_przelotu.options.length; i++)
			{
				if(i==1 || i==2)
				{
				 wybor_przelotu.options[i].disabled = false;
				}
				else
				{
				 wybor_przelotu.options[i].disabled = true;
				}
			}
		}
		if(nazwa_oprawy == "HPL425LED" && wersje_awaryjne == "-DALI")
			{
				var wybor_przelotu = document.getElementById("wybor_przelot");
				for(i=1; i <  wybor_przelotu.options.length; i++)
			{
				if(i==1 || i==2)
				{
				 wybor_przelotu.options[i].disabled = false;
				}
				else
				{
				 wybor_przelotu.options[i].disabled = true;
				}
			}
		}
		if(nazwa_oprawy == "HPL425LED" && wersje_awaryjne != "-DALI")
			{
				var wybor_przelotu = document.getElementById("wybor_przelot");
				for(i=1; i <  wybor_przelotu.options.length; i++)
			{
				if(i==1 || i==2)
				{
				 wybor_przelotu.options[i].disabled = false;
				}
				else
				{
				 wybor_przelotu.options[i].disabled = true;
				}
			}
		}
		/*
		else 
		{
		var wybor_przelotu = document.getElementById("wybor_przelot");
			for(i=1; i <  wybor_przelotu.options.length; i++)
			{
				if(i==1 || i==2)
				{
				 wybor_przelotu.options[i].disabled = false;
				}
				else
				{
				 wybor_przelotu.options[i].disabled = true;
				}
			}
		}
		*/
		
		if(EXFY==true && wybrano == "-A3")
		{
			zasilanie_oprawy = "35E";
			okablowanie="4";
		}

		if(wybrano == "-A3S" && dzial_opraw == "VANDAL")
		{

			zasilanie_oprawy = "34E";
			okablowanie="3";
		}
		if(wybrano == "-A3" && dzial_opraw == "VANDAL")
		{
			zasilanie_oprawy = "34E";
			okablowanie="3";
		}
		if(wybrano == "-ZB" && dzial_opraw == "VANDAL")
		{
			zasilanie_oprawy = "35E";
			okablowanie="2";
		}
		if(wybrano == "-ZBS" && dzial_opraw == "VANDAL")
		{
			zasilanie_oprawy = "35E";
			okablowanie="6";
		}
		if(wybrano == "-ZBH" && dzial_opraw == "VANDAL")
		{
			zasilanie_oprawy = "35E";
			okablowanie="5";
		}
		if(wybrano == "brak" && nazwa_oprawy == "INV360LED")
		{
			wersje_awaryjne="";
			zasilanie_oprawy = "34E";
			okablowanie="3";
		}
		if(wybrano == "brak" && (nazwa_oprawy == "INV320LED" || nazwa_oprawy == "INV320LEDSF" || nazwa_oprawy == "INV320LEDRC"))
		{
			wersje_awaryjne="";
			zasilanie_oprawy = "35E";
			okablowanie="2";
		}
		 if(wybrano == "brak" && (nazwa_oprawy == "INS230" || nazwa_oprawy == "INS340"))
		{
			wersje_awaryjne="";
			zasilanie_oprawy = "34E";
			okablowanie="2";
		}
		
		 	if(wybrano == "brak" && dzial_opraw != "VANDAL" && nazwa_oprawy != "HPL440LED" && nazwa_oprawy != "INX230LED" && nazwa_oprawy != "INX340LED"&& nazwa_oprawy != "HPL430LED")
		{
			wersje_awaryjne="";
			zasilanie_oprawy = "35E";
			okablowanie="3";
		}
		
		if(wybrano == "-A3" && dzial_opraw != "VANDAL" && EXFY==false)
		{
			zasilanie_oprawy = "34E";
			okablowanie="4";
		}
			if(wybrano == "-ZB" && dzial_opraw != "VANDAL")
		{
			zasilanie_oprawy = "35E";
			okablowanie="3";
		}
			if(wybrano == "-ZBS" && dzial_opraw != "VANDAL")
		{
			zasilanie_oprawy = "35E";
			okablowanie="5";
		}
			if(wybrano == "-ZBH" && dzial_opraw != "VANDAL")
		{
			zasilanie_oprawy = "35E";
			okablowanie="8";
		}
			if(wybrano == "-ZBT" && dzial_opraw != "VANDAL")
		{
			zasilanie_oprawy = "35E";
			okablowanie="6";
		}
			if(wybrano == "-ZBC" && dzial_opraw != "VANDAL")
		{
			zasilanie_oprawy = "35E";
			okablowanie="3";
		}
			if(wybrano == "-ZBD" && dzial_opraw != "VANDAL")
		{
			zasilanie_oprawy = "35E";
			okablowanie="5";
		}
			if(wybrano == "-ZBR" && dzial_opraw != "VANDAL")
		{
			zasilanie_oprawy = "35E";
			okablowanie="6";
		}
			if(wybrano == "-ZBM" && dzial_opraw != "VANDAL")
		{
			zasilanie_oprawy = "35E";
			okablowanie="5";
		}
			if(wybrano == "-DALI" && dzial_opraw != "VANDAL")
		{
			zasilanie_oprawy = "35E";
			okablowanie="5";
		}
	}
function Selekcja_przelotu(wybrano)
	{
		
		document.getElementById("wynikiDoUkrycia").className = "ukryte";
		var resetKopiuj = document.getElementById("kopiuj");
		resetKopiuj.className = "btn btn-secondary ukryte";
		var resetEmail = document.getElementById("wyslijEmail");
		resetEmail.className = "btn btn-success ukryte";
		document.getElementById("oblicz-button").disabled = true;
		var disable_przelot = document.getElementById("wybor_przelot");
		disable_przelot.setAttribute("disabled", true);
		
		var uklad_dlawnic = document.getElementById("10-uklad-dlawnic");
		uklad_dlawnic.className = "row pokazane";
		//UKRYCIE LIST PONIŻEJ
		var mocowanie = document.getElementById("11-mocowanie");
		mocowanie.className = "row ukryte";
		var wyposazenieDodatkowe = document.getElementById("12-dodatkowa");
		wyposazenieDodatkowe.className = "row ukryte";
		$("#wybor_ukladu_dlawnic").val('default');
		uklad_dlawnic = "";
		$("#wybor_mocowania").val('default');
		mocowanie="";
		$("#wybor_wyposazenia_dodatkowego").val('default');
		wyposazenieDodatkowe="";
		var wybor_ukladu_dlawnic = document.getElementById("wybor_ukladu_dlawnic");
			if(wybrano == "TAK")
			{
				{
					if(nazwa_oprawy == "EXL380LED" || nazwa_oprawy=="EXL390LED")
					{
					okablowanie=okablowanie + "0";
					}
					else{
					okablowanie=okablowanie + okablowanie;
					}
				if(nazwa_oprawy =="INS250LED" || nazwa_oprawy =="INS270LED"  || nazwa_oprawy =="INS350LED")
				{
				for(i=1; i <  wybor_ukladu_dlawnic.options.length; i++)
					{
						if(i==2)
						{
						wybor_ukladu_dlawnic.options[i].disabled = false;
						}
						else
						{
				 		wybor_ukladu_dlawnic.options[i].disabled = true;
						}
					}
				}
		}
			
			
			
			if(wielkosc_dlawnic == "25" && (dzial_opraw =="EX" || nazwa_oprawy == "INS230" || nazwa_oprawy == "INS340" || nazwa_oprawy == "INS340LED" || nazwa_oprawy == "INS230LED") && nazwa_oprawy != "EXL380LED" && nazwa_oprawy != "EXL390LED")
				{
					for(i=1; i <  wybor_ukladu_dlawnic.options.length; i++)
					{
						if(i==2)
						{
						wybor_ukladu_dlawnic.options[i].disabled = false;
						}
						else
						{
				 		wybor_ukladu_dlawnic.options[i].disabled = true;
						}
					}
				}
			if(wielkosc_dlawnic == "20" && (dzial_opraw =="EX" || nazwa_oprawy == "INS230" || nazwa_oprawy == "INS340" || nazwa_oprawy == "INS340LED" || nazwa_oprawy == "INS230LED") && nazwa_oprawy != "EXL380LED" && nazwa_oprawy != "EXL390LED")
				{
					for(i=1; i <  wybor_ukladu_dlawnic.options.length; i++)
					{
						if(i==2 || i==3 || i==4 || i==5)
						{
						wybor_ukladu_dlawnic.options[i].disabled = false;
						}
						else
						{
				 		wybor_ukladu_dlawnic.options[i].disabled = true;
						}
					}
				}
				if(nazwa_oprawy == "EXL380LED" || nazwa_oprawy == "EXL390LED")
				{
					for(i=1; i <  wybor_ukladu_dlawnic.options.length; i++)
					{
						if(i==2)
						{
						wybor_ukladu_dlawnic.options[i].disabled = false;
						}
						else
						{
				 		wybor_ukladu_dlawnic.options[i].disabled = true;
						}
					}
				}
			if(nazwa_oprawy == "HPL425LED")
				{
					for(i=1; i <  wybor_ukladu_dlawnic.options.length; i++)
					{
						if(i==3)
						{
				 		wybor_ukladu_dlawnic.options[i].disabled = false;
						}
						else
						{
				 		wybor_ukladu_dlawnic.options[i].disabled = true;
						}
					}
				}
		}
			if(wybrano == "NIE")
				{
				okablowanie=okablowanie + "0";
				var wybor_ukladu_dlawnic = document.getElementById("wybor_ukladu_dlawnic");
			
					if(wielkosc_dlawnic == "25" && (dzial_opraw =="EX" || nazwa_oprawy == "INS230" || nazwa_oprawy == "INS340"|| nazwa_oprawy == "INS340LED" || nazwa_oprawy == "INS230LED") && nazwa_oprawy != "EXL380LED" && nazwa_oprawy != "EXL390LED")
					{
						for(i=1; i <  wybor_ukladu_dlawnic.options.length; i++)
						{
							if(i==1)
							{
				 			wybor_ukladu_dlawnic.options[i].disabled = false;
							}
							else
							{
							wybor_ukladu_dlawnic.options[i].disabled = true;
							}
						}
					}
					if(wielkosc_dlawnic == "20" && (dzial_opraw =="EX" || nazwa_oprawy == "INS230" || nazwa_oprawy == "INS340"|| nazwa_oprawy == "INS340LED" || nazwa_oprawy == "INS230LED") && nazwa_oprawy != "EXL380LED" && nazwa_oprawy != "EXL390LED")
					{
							for(i=1; i <  wybor_ukladu_dlawnic.options.length; i++)
							{
								if(i==1 || i==3)
								{
				 				wybor_ukladu_dlawnic.options[i].disabled = false;
								}
								else
								{
				 				wybor_ukladu_dlawnic.options[i].disabled = true;
								}
							}
					}
					if(nazwa_oprawy == "EXL380LED" || nazwa_oprawy == "EXL390LED")
					{
						for(i=1; i <  wybor_ukladu_dlawnic.options.length; i++)
						{
							if(i==1 || i==2)
							{
							wybor_ukladu_dlawnic.options[i].disabled = false;
							}
							else
							{
							 wybor_ukladu_dlawnic.options[i].disabled = true;
							}
						}
					}
					if(nazwa_oprawy == "HPL425LED")
					{
							for(i=1; i <  wybor_ukladu_dlawnic.options.length; i++)
							{
								if(i==1)
								{
				 				wybor_ukladu_dlawnic.options[i].disabled = false;
								}
								else
								{
								wybor_ukladu_dlawnic.options[i].disabled = true;
								}
							}
					}
					if(nazwa_oprawy =="INS250LED" || nazwa_oprawy =="INS270LED"  || nazwa_oprawy =="INS350LED")
					{
					for(i=1; i <  wybor_ukladu_dlawnic.options.length; i++)
						{
							if(i==1)
							{
							wybor_ukladu_dlawnic.options[i].disabled = false;
							}
							else
							{
							 wybor_ukladu_dlawnic.options[i].disabled = true;
							}
						}
					}
				}
			var obrazek = document.getElementById("obrazek");
		if(nazwa_oprawy == "EXL380LED" || nazwa_oprawy == "EXL390LED")
		{
			obrazek.src = "EXL380LED/EXL380LED_wpusty.jpg";
		}
		else
		{
			obrazek.src = "konfiguracja_wpustow.jpg";
		}
	
		
		przelot = document.forms.formularz.elements["przelot"].value;
	}
function Selekcja_ukladu_dlawnic(wybrano)
	{
		document.getElementById("wynikiDoUkrycia").className = "ukryte";
			var resetKopiuj = document.getElementById("kopiuj");
	resetKopiuj.className = "btn btn-secondary ukryte";
		var resetEmail = document.getElementById("wyslijEmail");
		resetEmail.className = "btn btn-success ukryte";
		document.getElementById("oblicz-button").disabled = true;
		var mocowanie = document.getElementById("11-mocowanie");
		mocowanie.className = "row pokazane";
		
		var wyposazenieDodatkowe = document.getElementById("12-dodatkowa");
		wyposazenieDodatkowe.className = "row ukryte";
		
		$("#wybor_mocowania").val('default');
		mocowanie="";
		$("#wybor_wyposazenia_dodatkowego").val('default');
		wyposazenieDodatkowe="";
		uklad_dlawnic = document.forms.formularz.elements["uklad-dlawnic"].value;
		
		
		var obrazek = document.getElementById("obrazek");
		if(nazwa_oprawy =="EXF200LED" || nazwa_oprawy =="EXF250LED" || nazwa_oprawy =="EXL210LED" || nazwa_oprawy =="EXL310LED" || nazwa_oprawy =="EXL380LED" 
		|| nazwa_oprawy =="EXL390LED" || nazwa_oprawy =="INS230-II" || nazwa_oprawy =="INS230LED" || nazwa_oprawy =="INS250LED" || nazwa_oprawy =="INS340-II"  
		|| nazwa_oprawy =="INS340LED" || nazwa_oprawy =="INX230LED" || nazwa_oprawy =="INX340LED" || nazwa_oprawy =="INS270LED")
		{
		obrazek.src = nazwa_oprawy + wersja_dodatkowa + "/" + nazwa_oprawy + wersja_dodatkowa + "_mocowania.jpg";
		}
		else 
		{
			obrazek.src = nazwa_oprawy + wersja_dodatkowa + "/" + nazwa_oprawy + wersja_dodatkowa + "_oprawa.jpg";
		}
		/*
		if(nazwa_oprawy =="EXL210LED")
		{
		obrazek.src = "EXL210LED/EXL210LED_mocowania.jpg";
		}
		if(nazwa_oprawy =="EXL310LED")
		{
		obrazek.src = "EXL310LED/EXL310LED_mocowania.jpg";
		}
		if(nazwa_oprawy =="EXL380LED")
		{
		obrazek.src = "EXL380LED/EXL380LED_mocowania.jpg";
		}
		if(nazwa_oprawy =="EXL390LED" && typ_opraw =="Wpuszczana")
		{
		obrazek.src = "EXL390LED/EXL390LED_mocowania-RC.jpg";
		}
		if(nazwa_oprawy =="EXL390LED" && typ_opraw == "Napowierzchniowa")
		{
		obrazek.src = "EXL390LED/EXL390LED_mocowania-SF.jpg";
		}
		*/
		//return uklad_dlawnic;
		
		//ustawienie ikon
		var ikonaUkladuDlawnic = document.getElementById("ikona-uklad-dlawnic");
		if(wybrano == "10")
		{
			ikonaUkladuDlawnic.src="ikony/ikona-10.jpg";
		}
		if(wybrano == "11")
		{
			ikonaUkladuDlawnic.src="ikony/ikona-11.jpg";
		}
		if(wybrano == "20")
		{
			ikonaUkladuDlawnic.src="ikony/ikona-20.jpg";
		}
		if(wybrano == "21")
		{
			ikonaUkladuDlawnic.src="ikony/ikona-21.jpg";
		}
		if(wybrano == "22")
		{
			ikonaUkladuDlawnic.src="ikony/ikona-22.jpg";
		}
		
			//reset ikon ponizej
		var ikonaMocowanie = document.getElementById("ikona-mocowanie");
		ikonaMocowanie.src= "";
	}
function Selekcja_mocowania(wybrano)
	{
		var obrazek = document.getElementById("obrazek");
		if(nazwa_oprawy =="EXF200LED" || nazwa_oprawy =="EXF250LED" || nazwa_oprawy =="EXL210LED" || nazwa_oprawy =="EXL310LED" || nazwa_oprawy =="EXL380LED" 
		|| nazwa_oprawy =="EXL390LED" || nazwa_oprawy =="INS230-II" || nazwa_oprawy =="INS230LED" || nazwa_oprawy =="INS250LED" || nazwa_oprawy =="INS340-II"  
		|| nazwa_oprawy =="INS340LED" || nazwa_oprawy =="INX230LED" || nazwa_oprawy =="INX340LED" || nazwa_oprawy =="INS270LED")
		{
		obrazek.src = nazwa_oprawy + wersja_dodatkowa + "/" + nazwa_oprawy + wersja_dodatkowa + "_mocowania.jpg";
		}
		else 
		{
			obrazek.src = nazwa_oprawy + wersja_dodatkowa + "/" + nazwa_oprawy + wersja_dodatkowa + "_oprawa.jpg";
		}
		//ukrycie klucza
		document.getElementById("wynikiDoUkrycia").className = "ukryte";
		$("#wybor_wyposazenia_dodatkowego").val('default');
		wyposazenieDodatkowe="";
		//ukrycie przycisku skopiuj do schowka
		var resetKopiuj = document.getElementById("kopiuj");
		resetKopiuj.className = "btn btn-secondary ukryte";
	
		//ukrycie przycisku wyslania maila
		var resetEmail = document.getElementById("wyslijEmail");
		resetEmail.className = "btn btn-success ukryte";
		
		//odblokowanie przycisku oblicz
		if(istnienieWyposazeniaDodatkowego==false)
			{
		document.getElementById("oblicz-button").disabled = false;
			}
		
		//przypisanie wartosci mocowania do zmiennej uzytej pozniej w kluczu
		mocowanie = document.forms.formularz.elements["mocowanie"].value;
		
		//przypisywanie ikon mocowania po prawej od listy wybieralnej
		var ikonaMocowania = document.getElementById("ikona-mocowanie");
		ikonaMocowania.src="ikony/ikona-" + wybrano +".jpg";
		/*
		if(wybrano == "-AMO1")
		{
			ikonaMocowania.src="ikony/ikona-amo1.jpg";
		}
		if(wybrano == "-AMO3")
		{
			ikonaMocowania.src="ikony/ikona-amo3.jpg";
		}
		if(wybrano == "-AMO4")
		{
			ikonaMocowania.src="ikony/ikona-amo4.jpg";
		}
		if(wybrano == "-AMO5")
		{
			ikonaMocowania.src="ikony/ikona-amo5.jpg";
		}
		if(wybrano == "-BK")
		{
			ikonaMocowania.src="ikony/ikona-bk.jpg";
		}
		*/
		//przypisanie do klucza tylko wartosci zmiennych ( np. null dla EXL310LED)
		if(wybrano == "-WspornikEXL380LED" || wybrano == "-WspornikEXL310LED"  || wybrano == "-WspornikEXL390LED-RC" || wybrano == "-WspornikEXL390LED-SF" || wybrano == "-WspornikHPL425LED" || wybrano == "-WspornikINS370LED")
		{
			mocowanie="";
		}
		if((wybrano == "-WspornikINV320LED" || wybrano == "-WspornikINV320LEDRC") && strumien_oprawy.includes("-D")==false)
		{
			mocowanie="";
		}
		if(strumien_oprawy.includes("-D"))
		{
			mocowanie="-III";
		}
		if(nazwa_oprawy == "INV320LED" || nazwa_oprawy == "INV320LEDSF" || nazwa_oprawy == "INV320LEDRC")
			{
				mocowanie="-II";
			}
		if(istnienieWyposazeniaDodatkowego)
		{
		var wyposazenieDodatkowe = document.getElementById("12-dodatkowa");
		wyposazenieDodatkowe.className = "row pokazane";
		}
		
		
	}
function Selekcja_wyposazenia_dodatkowego(wybrano)
	{
		//ukrycie klucza
		document.getElementById("wynikiDoUkrycia").className = "ukryte";
		
		//ukrycie przycisku skopiuj do schowka
		var resetKopiuj = document.getElementById("kopiuj");
		resetKopiuj.className = "btn btn-secondary ukryte";
	
		//ukrycie przycisku wyslania maila
		var resetEmail = document.getElementById("wyslijEmail");
		resetEmail.className = "btn btn-success ukryte";
		
		//odblokowanie przycisku oblicz
		document.getElementById("oblicz-button").disabled = false;
		
		//przypisanie wartosci mocowania do zmiennej uzytej pozniej w kluczu
		wyposazenieDodatkowe = document.forms.formularz.elements["wyposazenie-dodatkowe"].value;
		
		var ikonaWyposazenia = document.getElementById("ikona-wyposazenie-dodatkowe");
		ikonaWyposazenia.src="ikony/ikona-" + wybrano +".jpg";

		if(wybrano == "normal")
		{
			wyposazenieDodatkowe="";
		}
		
		if(wybrano =="-NL")
		{
			strumien_oprawyNL = insert(strumien_oprawy, 7, "M1");
			if(wersje_awaryjne=="-A3")
				
			{
			if(przelot=="TAK")
			{
				okablowanie = 77;
			}
			if(przelot =="NIE")
			{
				okablowanie = 70;
			}
			}
			if(wersje_awaryjne!="-A3")
			{
				if(przelot=="TAK")
			{
				okablowanie = 66;
			}
			if(przelot =="NIE")
			{
				okablowanie = 60;
			}
		}

		}

		if(wybrano == "normal" && dzial_opraw == "PRISON")
		{
			if(wersje_awaryjne=="-A3")
			{
			if(przelot=="TAK")
			{
				okablowanie = 44;
			}
			if(przelot =="NIE")
			{
				okablowanie = 40;
			}
			}
			if(wersje_awaryjne!="-A3")
			{
			if(przelot=="TAK")
			{
				okablowanie = 33;
			}
			if(przelot =="NIE")
			{
				okablowanie = 30;
			}
			}
		}
		
		if(wybrano == "-SNS" && dzial_opraw == "PRISON")
		{
			if(wersje_awaryjne=="-A3")
			{
			if(przelot=="TAK")
			{
				okablowanie = 44;
			}
			if(przelot =="NIE")
			{
				okablowanie = 40;
			}
			}
			if(wersje_awaryjne!="-A3")
			{
			if(przelot=="TAK")
			{
				okablowanie = 33;
			}
			if(przelot =="NIE")
			{
				okablowanie = 30;
			}
			}
		}
		
		if(wybrano =="-II")
		{
			if(wersje_awaryjne=="-A3")
			{
			if(przelot=="TAK")
			{
				okablowanie = 33;
			}
			if(przelot =="NIE")
			{
				okablowanie = 30;
			}
			}
			if(wersje_awaryjne!="-A3")
			{
			if(przelot=="TAK")
			{
				okablowanie = 22;
			}
			if(przelot =="NIE")
			{
				okablowanie = 20;
			}
			}
		}

		
	}
function insert(str, index, value) 
	{
    return str.substr(0, index) + value + str.substr(index);
	}
function przeslij()
	{
		if(	dzial_opraw == "default" || wybranaStrefa == "default"|| typ_opraw == "default"|| nazwa_oprawy == "default"|| obudowa_oprawy == "default"|| klosz_oprawy == "default"|| strumien_oprawy == "default"|| material_dlawnic == "default"|| wielkosc_dlawnic == "default"|| wersje_awaryjne == "default"|| przelot == "default"|| uklad_dlawnic == "default"|| mocowanie == "default")
		{
		alert("Musisz wybrać w każdej opcji");
		}
		else
		{
		document.getElementById("wynikiDoUkrycia").className = "pokazane";
		var resetKopiuj = document.getElementById("kopiuj");
		resetKopiuj.className = "btn btn-secondary pokazane";
		var resetEmail = document.getElementById("wyslijEmail");
		resetEmail.className = "btn btn-success pokazane";
		//document.getElementById("wynik").innerHTML = "dzial: " + Selekcja_działu_opraw() + " | typ: " + Selekcja_typu_opraw() + " | nazwa oprawy: " + Selekcja_konkretnych_opraw() + " | strumien oprawy: " + Selekcja_strumienia() + " | układ dławnic oprawy: " + Selekcja_ukladu_dlawnic()  + " | materiał dlawnic oprawy: " + Selekcja_materialu_dlawnic() + " | wielosc dlawnic oprawy: " + Selekcja_wielkosci_dlawnic() + " | obudowa oprawy: " + Selekcja_materialu_obudowy() + " | klosz oprawy: " + Selekcja_materialu_klosza() + " | wersja awaryjna oprawy: " + Selekcja_awaryjnosci() ;
		if(wyposazenieDodatkowe != "-NL")
		{
		document.getElementById("klucz").innerHTML ="Kod produktu : " +  nazwa_oprawy + "-" + strumien_oprawy + "-" + zasilanie_oprawy + "-" + okablowanie + "-" + uklad_dlawnic + material_dlawnic + wielkosc_dlawnic + "-" + obudowa_oprawy + "-" + klosz_oprawy + wersje_awaryjne + mocowanie + wersja_dodatkowa + wyposazenieDodatkowe;
		}
		if(wyposazenieDodatkowe == "-NL")
		{
		document.getElementById("klucz").innerHTML ="Kod produktu : " +  nazwa_oprawy + "-" + strumien_oprawyNL + "-" + zasilanie_oprawy + "-" + okablowanie + "-" + uklad_dlawnic + material_dlawnic + wielkosc_dlawnic + "-" + obudowa_oprawy + "-" + klosz_oprawy + wersje_awaryjne + mocowanie + wersja_dodatkowa + wyposazenieDodatkowe;
		}
		$('html, body').animate({scrollTop:$(document).height()}, 'slow');
		}
		obrazek.src = nazwa_oprawy + wersja_dodatkowa + "/" + nazwa_oprawy + wersja_dodatkowa + "_oprawa.jpg";
	}
function restart()
	{
	var resetKopiuj = document.getElementById("kopiuj");
	resetKopiuj.className = "btn btn-secondary ukryte";
	var resetEmail = document.getElementById("wyslijEmail");
	resetEmail.className = "btn btn-success ukryte";
	zasilanie_oprawy = "";
	okablowanie = "";
	uklad_dlawnic = "";
	wersje_awaryjne = "";
	wielkosc_dlawnic = "";
	material_dlawnic = "";
	klosz_oprawy = "";
	obudowa_oprawy = "";
	strumien_oprawy = "";
	nazwa_oprawy = "";
	typ_opraw = "";
	dzial_opraw = "";
	wybranaStrefa = "";
	wersja_dodatkowa="";
	mocowanie="";
	przelot="";
	wyposazenieDodatkowe="";
		$("select").removeAttr('disabled');
		$(".pokazane").addClass('ukryte');
		$(".ukryte").removeClass('pokazane');
		$("#wybor_dzialu_oprawy").val('default');
		$("#wybor_dzialu_oprawy").val('default');
		$("#wybor_strefy_wybuchowej").val('default');
		$("#wybor_typu_oprawy").val('default');
		$("#wybor_konkretnej_oprawy").val('default');
		$("#wybor_strumienia").val('default');
		$("#wybor_obudowy").val('default');
		$("#wybor_klosza").val('default');
		$("#wybor_materialu_dlawnic").val('default');
		$("#wybor_wielkosci_dlawnic").val('default');
		$("#wybor_awaryjna").val('default');
		$("#wybor_przelot").val('default');
		$("#wybor_ukladu_dlawnic").val('default');
		$("#wybor_mocowania").val('default');
		$("#wybor_wyposazenia_dodatkowego").val('default');
		var obrazek = document.getElementById("obrazek");
		obrazek.src="dzialy_1.jpg";
		var ikona = document.getElementById("ikona");
		ikona.src="";
		var ikonaStrefa = document.getElementById("ikona-strefa");
		ikonaStrefa.src="";
		var ikonaObudowa = document.getElementById("ikona-obudowa");
		ikonaObudowa.src="";
		var ikonaKlosz = document.getElementById("ikona-klosz");
		ikonaKlosz.src="";
		var ikonaStrumien = document.getElementById("ikona-strumien");
		ikonaStrumien.src="";
		var ikonaMaterialDlawnic = document.getElementById("ikona-material-dlawnic");
		ikonaMaterialDlawnic.src="";
		var ikonaWielkosciDlawnic = document.getElementById("ikona-wielkosc-dlawnic");
		ikonaWielkosciDlawnic.src="";
		var ikonaAwaryjnosc = document.getElementById("ikona-awaryjnosc");
		ikonaAwaryjnosc.src="";
		var ikonaUkladuDlawnic = document.getElementById("ikona-uklad-dlawnic");
		ikonaUkladuDlawnic.src="";
		var ikonaMocowanie = document.getElementById("ikona-mocowanie");
		ikonaMocowanie.src= "";
		var ikonaWyposazenieDodatkowe = document.getElementById("ikona-wyposazenie-dodatkowe");
		ikonaWyposazenieDodatkowe.src= "";
		document.getElementById("klucz").innerHTML = "";
		document.getElementById("linki").innerHTML = "";
		document.getElementById("oblicz-button").disabled = true;
	}
