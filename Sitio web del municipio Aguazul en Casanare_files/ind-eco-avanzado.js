
valIndEcoAvanzado=document.getElementById('IndEcoAvanzado');
if (valIndEcoAvanzado)
	{
	var valCode = 'no';
	if (!valIndEcoAvanzado.links)
		{
		valIndEcoAvanzado.links = valIndEcoAvanzado.getElementsByTagName('a');
		}
	for (var t=0; t<valIndEcoAvanzado.links.length; t++)
		{
		var valProv = valIndEcoAvanzado.links[t]; if (valProv.href.search('http://dolar.wilkinsonpc.com.co/') != -1)
			{
			if(valProv.getAttribute('rel') == 'nofollow')
				{
				} else {
				valCode='si'; break;
				} 
			} 
		}
	}

if(valIndEcoAvanzado&&valCode=='si')
{
while(valIndEcoAvanzado.firstChild){valIndEcoAvanzado.removeChild(valIndEcoAvanzado.firstChild)};
valIndEcoAvanzado.style.cssText='background:transparent;background-color:transparent;overflow:hidden;';
marko=document.write('<iframe SRC="http://dolar.wilkinsonpc.com.co/widgets/gratis/indicadores-economicos-max.html?ancho=245&alto=265&fondo=transparent&fsize=10&ffamily=sans-serif&fcolor=000000" id="IEDolar" style="width:245px;height:265px;" title="Dolar" width="245" height="265" ALIGN="top" frameborder="0" marginwidth=0 marginheight=0 SCROLLING=no name="IE-1" allowtransparency="true"></iframe>');
marko=document.createElement('font');
marko.id='check';
valIndEcoAvanzado.appendChild(marko);
}
else {
alert("ERROR: INDICADORES ECONOMICOS\n------------------------------------------------------------------------\nEl codigo introducido no es correcto\nVerifica tu codigo en: http://dolar.wilkinsonpc.com.co/indicadores-economicos-dolar.html\n\n* Recuerda que no se permite editar el codigo.\n\n- Copialo tal cual como aparece en nuestro sitio web.\n- Actualiza tu codigo por el mas reciente.");
}