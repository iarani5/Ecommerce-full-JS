function ce(e){
	return document.createElement(e);
}
function ac(p,e){
	
	return p.appendChild(e);
}
function rc(p,e){
	
	return p.removeChild(e);
}
function tn(p,e,n){
	
	if(!isNaN(n))
	{
		return p.getElementsByTagName(e)[n];
	}
	return p.getElementsByTagName(e);
}
function id(e){
	
	return document.getElementById(e);
}
function txt(s){
	
	return document.createTextNode(s);
}
function cerrar_modal(e){
	rc(e.parentNode,e);
}
function cargar_todos(){
	for(var i in recursos){
		if(i=='perros'||i=='gatos'||i=='ofertas'){
			for(var j in recursos[i]){
				crear_producto(i,j);
			}	
		}
	}
}
function crear_producto(i,j){
	img=ce('img');
	miniSection=ce('section');
	if(i=='ofertas'){
		var imgP=ce('img');
		imgP.src='img/pack.png';
		imgP.alt='Ahorro Pack';
		imgP.style.cssFloat='left';
		imgP.style.zIndex='1';
		imgP.style.paddingLeft='2.5em';
		imgP.style.display='inline-block';
		imgP.style.position='absolute';
		imgP.style.margin='1em';
		ac(miniSection,imgP);
		if(j=='cuatro'){
			rc(miniSection,imgP);
		}
	}
	miniSection.style.border='#72ad3c .1em solid';
	miniSection.style.height='515px';
	miniSection.style.width='250px';
	miniSection.style.display='inline-block';
	miniSection.style.verticalAlign='top';
	miniSection.style.margin='2em';
	var footerM=ce('footer');
	var tx=txt('VER MÁS');
	ac(footerM,tx);
	footerM.style.color='white';
	footerM.style.width='80%';
	footerM.style.height='auto';
	footerM.style.padding='.5em';
	footerM.style.marginTop='1em';
	footerM.style.background='#72ad3c';
	footerM.style.boxShadow='black 2px 2px 5px';
	footerM.style.display='inline-block';
	footerM.style.margin='1em';
	ul=ce('ul');
	ul.style.listStyle='none';
	ul.style.padding='1em';
	ul.style.width='80%';
	ul.style.height='180px';
	ul.style.display='inline-block';
	img.src=recursos[i][j].fotoM;
	img.alt=recursos[i][j].titulo;
	img.style.cssFloat='right';
	img.style.overflow='hidden';
	ac(miniSection,img);
	var dive=cargar_estrellas(recursos[i][j].estrellas);
	ac(miniSection,dive); 
	li=ce('li');
	var tx=txt(recursos[i][j].titulo);
	ac(li,tx);
	li.style.color='#00a1ac';
	li.style.textAlign='center';
	ac(ul,li);
	li=ce('li');
	var tx=txt(recursos[i][j].Descripcion.d.substring(0,118)+'...');
	ac(li,tx);
	li.style.color='#6d6d6d';
	li.style.textAlign='left';
	li.style.fontSize='.9em';
	li.style.margin='.5em 0';
	ac(ul,li);
	li=ce('li');
	var tx=txt('$'+recursos[i][j].Precio+',00');
	ac(li,tx);
	li.style.color='#72ad3c';
	li.style.verticalAlign='bottom';
	li.style.cssFloat='right';
	li.style.fontSize='1.1em';
	ac(ul,li);
	ac(miniSection,ul);
	ac(miniSection,footerM);
	productos[k]=miniSection;
	k++;
	return miniSection;
}
function cargar_estrellas(n){
	var m=0;
	var ul=ce('ul');
	var div=ce('div');
	var estrella;
	var otx;
	while(m<n){
		estrella=ce('li');
		estrella.style.background='url('+'img/estrellaverde.png'+')';
		otx=txt('*');
		ac(estrella,otx);
		estrella.style.display='inline-block';
		estrella.style.width='15px';
		estrella.style.height='13px';
		estrella.style.textIndent='-30px';
		estrella.style.overflow='hidden';
		m++;
		ac(ul,estrella);
	}
	while(n<5){
		estrella=ce('li');
		estrella.style.background='url('+'img/vacia.png'+')';
		otx=txt('-');
		ac(estrella,otx);
		estrella.style.display='inline-block';
		estrella.style.width='15px';
		estrella.style.height='13px';
		estrella.style.textIndent='-30px';
		estrella.style.overflow='hidden';
		ac(ul,estrella);
		n++;
	}
	ac(div,ul);
	return div;
}
function cargar_descripcion(objeto,section){
		var p=ce('p');
		var div=ce('div');
		var otx;
		div.style.borderTop='solid .1em #72ad3c';
		for(var i in objeto.Descripcion){
			var tipo=typeof(objeto.Descripcion[i]);
			var nombre=i;
			if(i=='d'){
				var h2=ce('h2');
				h2.style.color='rgb(0, 161, 172)';
				h2.style.textAlign='left';
				h2.style.margin='1em .5em 0 2em';
				h2.style.marginBottom='.5em';
				h2.style.fontSize='1.3em';
				otx=txt(objeto.titulo);
				ac(h2,otx);
				p.style.color='black';
				p.style.textAlign='left';
				p.style.fontSize='.9em';
				p.style.display='inline-block';
				p.style.margin='0 3em .5em 3em';
				p.style.lineHeight='1.5em';
				otx=txt(objeto.Descripcion.d);
				ac(div,h2);
				ac(p,otx);
				ac(div,p);
			}
			else if(tipo=='object'){
				var ul=ce('ul');
				ul.style.marginBottom='2em';
				var h3=ce('h3');
				h3.style.color='grey';
				h3.style.margin='1em 0 .4em 2.5em';
				h3.style.fontSize='1em';
				h3.style.textAlign='left';
				if(i=='Pack'){
					otx=txt('Este Pack contiene:');
					h3.style.textAlign='center';
					h3.style.backgroundColor='#72ad3c';
					h3.style.width='686px';
					h3.style.color='white';
					h3.style.marginBottom='0';
					h3.style.marginLeft='150px';
					h3.style.padding='.5em 0 0 0';
				}
				else{
					otx=txt(i+':');
				}
				ac(h3,otx);
				ac(div,h3);
				for(var j in objeto.Descripcion[i]){
					var li=ce('li');
					li.style.textAlign='left';
					li.style.fontSize='.9em';
					li.style.margin='0 4em';
					li.style.lineHeight='1.5em';
					if(nombre=='Colores'){
						var divcolor=ce('div');
						li.style.listStyle='none';
						divcolor.style.backgroundColor=objeto.Descripcion[i][j];
						divcolor.style.border='solid .3em #72ad3c';
						li.style.display='inline-block';
						li.style.margin='0 .5em';
						ul.style.marginLeft='3em';
						divcolor.style.width='30px';
						divcolor.style.height='30px';
						ac(li,divcolor);
					}
					else{
						otx=txt(objeto.Descripcion[i][j]);
						if(objeto.Descripcion[i][j]=='Frontline Combo Spot On Gatos: 6 Pipetas.'){
							li.style.paddingTop='2em';
						}
						ac(li,otx);
					}
					if(nombre=='Pack'){
						ul.style.background='#72ad3c url('+'img/mano.png'+') no-repeat left center';
						ul.style.padding='1em';
						ul.style.display='inline-block';
						ul.style.minHeight='120px';
						ul.style.paddingLeft='120px';
						li.style.color='white';
						ul.style.width='550px';
						ul.style.marginLeft='150px';
					} 
					ac(ul,li);
				}
				ac(div,ul);
			} 
			else{
				if(nombre=='imgaux'){
					var figure=ce('figure');
					var picture=ce('picture');
					var img=ce('img');
					img.src=objeto.Descripcion.imgaux;
					img.alt='imagen ilustrativa';
					ac(picture,img);
					ac(figure,picture);
					figure.style.textAlign='center';
					ac(div,figure);
				}
				else{
					var p=ce('p');
					otx=txt(objeto.Descripcion[i]);
					ac(p,otx);
					p.style.fontSize='.9em';
					p.style.display='inline-block';
					p.style.margin='0 3em .5em 3em';
					p.style.lineHeight='1.5em';
					if(nombre=='footer'){
						p.style.display='block';
						p.style.textAlign='center';
						p.style.fontWeight='bold';
						p.style.fontStyle='italic';
					}
					else if(nombre=='numprod'){
						p.style.textAlign='right';
						p.style.display='block';
						p.style.color='grey';
						p.style.marginBottom='3em';
					}
					else{
						var h3=ce('h3');
						h3.style.color='grey';
						h3.style.margin='1em 0 .4em 2.5em';
						h3.style.fontSize='1em';
						h3.style.textAlign='left';
						otx=txt(i+':');
						ac(h3,otx);
						ac(div,h3);
					}
					ac(div,p);
				}
			}
		}
		div.style.opacity='0.1';
		setTimeout(function () {
			div.style.opacity='1';
		}, 100);
		ac(section,div);			
}
function cargar_foto_valoracion(t){
	var objeto, objetoP;
	for(var i in recursos){
		for(var j in recursos[i]){
			for(var k in recursos[i][j]){
				for(var l in recursos[i][j][k]){
					for(var m in recursos[i][j][k][l]){
						if(t==recursos[i][j][k][l][m]){
							objeto=recursos[i][j][k][l];
							objetoP=recursos[i][j];
						}
					}
				}
			}
		}
	}
	var div=ce('div');
	var p;
	var modal=ce('div');
	modal.className='modal';
	modal.id="modal";
	var img=ce('img');
	var figure=ce('figure');
	var picture=ce('picture');
	img.src=objeto.foto;
	img.alt='foto de usuario';
	img.style.display='inline-block';
	figure.style.textAlign='center';
	figure.style.marginTop='3em';
	figure.style.paddingTop='1em';
	figure.style.width='100%';
	figure.style.borderTop='solid .2em #72ad3c';
	ac(picture,img);
	ac(figure,picture);
	div.style.backgroundColor='#e0dfdf';
	div.style.width='590px';
	var cruz=crear_cruz();
	var dive;
	ac(div,cruz);
	var ban=0;
	for(var i in objeto){
			switch(i){
				case 'f':
					for(var j=0;j<objeto[i].length;j++){
						if(objeto[i][j]==','){
							var otx=txt(objeto[i].substring((j+6),objeto[i].length));
							var pu=ce('p');
							ac(pu,otx);
							otx=txt(objeto[i].substring(0,(j+6)));
							var pf=ce('p');
							ac(pf,otx);
						}
					}
					pu.style.display='inline-block';
					pu.style.marginTop='30px';
					pu.style.marginLeft='15px';
					pu.style.fontWeight='bold';
					pu.style.cssFloat='left';
					pf.style.display='inline-block';
					pf.style.cssFloat='right';
					pf.style.marginTop='30px';
					ac(div,pu);
					ac(div,pf);
				break;
				case 'v':
					p=ce('p');
					var otx=txt(objeto[i]);
					p.style.marginTop='1em';
					p.style.textAlign='left';
					p.style.textIndent='28px';
					p.style.overflow='fixed';
					p.style.background='url('+'img/comilla.png'+') no-repeat';
					ac(p,otx);
				break;
				case 'e':
					dive=cargar_estrellas(objetoP.estrellas);
					dive.style.cssFloat='left';
					dive.style.margin='.3em 0 .3em 440px';
					dive.style.display='inline-block';
				break;
			}
	}
	cruz.onclick=function(){
		cerrar_menu();
		cerrar_modal(modal);
		modal.innerHTML='';
	}
	ac(div,dive);
	ac(div,figure);
	ac(div,p);
	ac(modal,div);
	opacidad(div);
	var section=id('home');
	ac(section,modal);
}
function cambiar_galeria(t,galeria,img){
	var suma='';
		for(var j=0;j<img.src.length;j++){
			suma+=img.src[j];
			var palabra=suma.substring(suma.length-2,suma.length);
			if(palabra=='1/'){
				switch(t.alt){
					case 'sig':
					for(var k=0;k<galeria.length;k++){
						if(img.src==suma+galeria[k]){
							if(galeria[k+1]!=undefined){
								img.src=galeria[k+1];
								return false;
							} 
							else{
								img.src=galeria[0];
								return false;
							}
						}
					}
					break;
					case 'ant':
					for(var k=0;k<galeria.length;k++){
						if(img.src==suma+galeria[k]){
							if(galeria[k-1]!=undefined){
								img.src=galeria[k-1];
								return false;
							} 
							else{
								img.src=galeria[galeria.length-1];
								return false;
							}
						}
					}
					break;
				}
			}
		}
}
function opacidad(t){
	t.style.opacity='0.1';
	setTimeout(function () {
	t.style.opacity='1';
	}, 100);
}
function cargar_valoraciones(objeto,section){
	var otx, n=0;
	var  div=ce('div');
	var lis=[];
	div.style.minHeight='500px';
	div.style.borderTop='solid .1em #72ad3c';
	if(objeto.Valoraciones!=undefined){
		for(var i in objeto.Valoraciones){
			var ul=ce('ul');
			ul.style.padding='50px';
			for(var j in objeto.Valoraciones[i]){
				var li=ce('li');
				li.style.listStyle='none';
				li.style.padding='.5em';
				li.style.textAlign='left';
				if(j=='v'){
					li.style.lineHeight='1.3em';
					otx=txt(objeto.Valoraciones[i][j]);
					ac(li,otx);
					li.style.textIndent='20px';
					li.style.minHeight='20px';
					li.style.background='url('+'img/comilla.png'+') no-repeat ';
				}
				else if(j=='foto'){
					li.style.background='url('+'img/foto.png'+') no-repeat center';
					li.style.width='118px';
					li.style.textIndent='-250px';
					li.style.display='inline-block';
					li.style.cssFloat='right';
					li.style.overflow='hidden';
					otx=txt('Ver foto');
					ac(li,otx);
					lis[n]=li;
					n++;
				}
				else{
					otx=txt(objeto.Valoraciones[i][j]);
					ac(li,otx);
					if(j=='f'){
						li.style.color='rgb(167, 109, 192)';
						li.style.fontWeight='bold';
						li.style.marginLeft='3em';
						li.style.fontSize='.9em';
					}
					else if(j=='e'){
						var num=parseInt(objeto.Valoraciones[i][j].substring(0,1));
						var dive=cargar_estrellas(num);
						li.style.fontSize='.9em';
						li.style.fontStyle='italic';
						li.style.color='grey';
						li.style.display='inline-block';
						dive.style.display='inline-block';
						dive.style.marginLeft='3em';
						ac(ul,dive);
					}
				}	
				ac(ul,li);
			}
			ul.style.border='solid .1em #72ad3c';
			ac(div,ul);
		}
		opacidad(div);
		ac(section,div);
	}
	else{
		var p=ce('p');
		p.style.margin='2em';
		p.style.textAlign='center';
		p.style.color='grey';
		otx=txt('No se ha valorado este producto aún.');
		ac(p,otx);
		p.style.fontSize='1.5em';
		div.style.minHeight='400px';
		ac(div,p);
		opacidad(div);
		ac(section,div);
	}
	for(var j=0;j<lis.length;j++){
		lis[j].onclick=function(){
			cerrar_menu();
			cargar_foto_valoracion(tn(this.parentNode,'li',0).innerHTML);
		}
	}
}
function cargar_form_pregunta(){
	var sectionH=id('home');
	var div=tn(sectionH,'ul',2).nextSibling;
	if(div==undefined){
		div=ce('div');
	}
	var inputs=[];
	var cont=0;
	var section=tn(sectionH,'section',0);
		if(section!=undefined){
			rc(section.parentNode,section);
			section.length='';
		}
		section=ce('section');
		var hr=ce('hr');
		var form=ce('form');
		form.style.background='url('+'img/perropc.png'+') 100% 69% no-repeat';
		form.method="post";
		form.action='#';
		form.onsubmit = function(){
			form.reset();
			return false;
		}
		var h2=ce('h2');
		var p=ce('p');
		var otx=txt('¿Le falta información sobre este producto? Pregúntenos.');
		ac(h2,otx);
		ac(form,h2);
		ac(form,hr);
		otx=txt('Si tiene cualquier duda, pregunta o sugerencia sobre este producto, pregúntenos y le informaremos con mucho gusto. Y si la pregunta es de interés general, la podemos publicar aquí, para beneficio de los demás usuarios (sólo la pregunta, no publicaremos sus datos).');
		p.style.margin='1em 0';
		ac(p,otx);
		ac(form,p);
		section.style.background='#a76dc0';
		id("home").style.paddingBottom="0";
		section.style.borderTop='solid .1em #72ad3c';
		section.style.color='white';
		section.style.padding='2em 5em';
		for(var i=0;i<4;i++){
			switch(i){
				case 0:
				case 1:
					var input=ce('input');
					input.style.display='inline-block';
					input.required='required';
					input.style.width='57%';
					input.style.margin='1em 0';
					input.style.padding='.3em';
					if(i==0){
						input.placeholder='Nombre';
						input.name='nombre';
						input.type='text';
					}
					else{
						input.placeholder='Mail';
						input.type='email';
						input.name='mail';
					}
					ac(form,input);
					inputs[i]=input;
				break;
				case 2:
					var textarea=ce('textarea');
					textarea.style.display='inline-block';
					textarea.style.margin='1em 0 0 0';
					textarea.style.width='57%';
					textarea.rows='6';
					textarea.style.padding='.3em';
					textarea.style.resize='none';
					textarea.cols='60';
					textarea.required='required';
					textarea.placeholder='Pregunta';
					textarea.name='pregunta';
					textarea.style.display='inline-block';
					ac(form,textarea);
					inputs[i]=textarea;
				break;
				case 3:
					input=ce('input');
					input.value='ENVIAR';
					input.type='submit';
					input.style.boxShadow='black 2px 2px 5px';
					input.style.background='rgb(114, 173, 60)';
					input.style.padding='.5em';
					input.style.display='inline-block';
					input.style.width='auto';
					input.style.margin='0 0 .4em 33%';
					input.style.verticalAlign='bottom';
					input.style.color='white';
					ac(form,input);
					input.onclick=function(){
						cerrar_menu();
						cont=0;
						for(var i=0;i<inputs.length;i++){
							if(inputs[i].validity.valid){
								cont++;
							}
						}
						if(cont==3){
							var modal=ce('div');
							var p=ce('p');
							otx=txt('Gracias por su consulta. Recibirá la respuesta en breve...');
							p.style.color='grey';
							p.style.textAlign='center';
							modal.className='modal';
							modal.id="modal";
							modal.style.background='none';
							p.style.background='url('+'img/logoficial.png'+') no-repeat bottom center white';
							p.style.height='90px';
							p.style.paddingTop='.5em';
							p.style.marginTop='1em';
							p.style.border='solid .1em #72ad3c';
							var cruz=crear_cruz();
							ac(p,cruz);
							ac(p,otx);
							ac(modal,p);
							ac(section,modal);
							cruz.onclick=function(){
								cerrar_menu();
								cerrar_modal(modal);
								modal.innerHTML='';
							}
						}
					}
				break;
			}
		}
		ac(section,form);
		ac(div,section);
		opacidad(div);
		ac(sectionH,div);
}
function cargar_preguntas(objeto,section){
	var div=ce('div');
	if(objeto.Preguntas!=undefined){
		for(var i in objeto.Preguntas){
			var ul=ce('ul');
			ul.style.padding='2em 4em';
			ul.style.borderTop='solid .1em #72ad3c';
			for(var j in objeto.Preguntas[i]){
				var li=ce('li');
				li.style.textAlign='left';
				li.style.listStyle='none';
				li.style.padding='.5em 0';
				var otx=txt(objeto.Preguntas[i][j]);
				ac(li,otx);
				switch(j){
					case 'p':
						li.style.fontWeight='bold';
					break;
					case 'u':
						li.style.color='rgb(167, 109, 192)';
						li.style.fontSize='.9em';
						li.style.textAlign='right';
					break;
					case 'r':
						li.style.fontStyle='italic';
						li.style.marginLeft='2em';
					break;
				}
				ac(ul,li);
			}
			ac(div,ul);
		}
		opacidad(div);
		ac(section,div);
	}
	cargar_form_pregunta();
}
function borrar_contenido(){
	var ul=tn(id('home'),'ul',2);
	var div=ul.nextSibling;
	var titulo=tn(id('home'),'h1',0).innerHTML;
	if(div!=undefined){
			rc(div.parentNode,div);
			div.length=0;
	} 
	for(var j in recursos){
		for(var k in recursos[j]){
			for(var l in recursos[j][k]){
				if(recursos[j][k][l]==titulo){
					objeto=recursos[j][k];
				}
			}
		}
	}
	return objeto;
}
function cambiar_fondo(t){
	var ulo=tn(id('home'),'ul',1).nextSibling.nextSibling;
	var lis=tn(ulo,'li');
	for(var i=0;i<lis.length;i++){
		if(tn(lis[i],'a',0).innerHTML!=t){
			lis[i].style.background='#72ad3c';
		}
		else{
			lis[i].style.background='rgb(218, 145, 249)';
		}
	}
}
function crear_cruz(){
	var cruz=ce('img');
	cruz.src='img/cruz.png';
	cruz.alt='cerrar';
	cruz.style.display='inline-block';
	cruz.style.cssFloat='right';
	cruz.style.cursor='pointer';
	cruz.style.margin='.5em .5em 0 0';
	return cruz;
}
function random(){
	var ban=0;
	var esIgual=0, n;
	var numeros=[];
	do{
		if(ban==0){
			n = Math.round(Math.random( )*(productos.length-1));
			numeros.push(n);
			ac(section,productos[n]);
			ban=1;
		}
		else{
			do{
				n = Math.round(Math.random( )*(productos.length-1));
					for(var j=0;j<numeros.length;j++){	
						if(numeros[j]==n){
							esIgual=1;
						}
					}
					if(esIgual==0){
						numeros.push(n);
						ac(section,productos[n]);
					}
			}while(esIgual!=1)
			esIgual=0;
		}
	}while(numeros.length<12)
	return section;
}	
function crear_home(){ 
	var figure=ce('figure');
	var picture=ce('picture');
	var img=ce('img');
	figure.style.height='170px';
	img.src=recursos['banners'].main;
	img.alt='Seresto';
	img.style.cursor='pointer';
	img.onclick=function(){
		cerrar_menu();
		un_producto('gatos',1,'dos');
	}
	ac(picture,img);
	ac(figure,picture);
	opacidad(figure);
	ac(main,figure);
	section=ce('section');
	h1=ce('h1');
	var tx=txt('Catálogo de productos');
	ac(h1,tx);
	section.id='home';
	ac(section,h1);
	cargar_todos();
	section=random();
	opacidad(section);
	ac(main,section); 
}
function cerrar_menu(){
	var ul=tn(tn(nav,'li',0),'ul',0);
	if(ul!=undefined){
		rc(ul.parentNode,ul);
	}
	ban1=0;
}
function un_producto(p,n,i){
	var section=id('home');
	var objeto;
	var galeria=[];
	var zoom=[];
	var banner=tn(main,'figure',0);
	if(n==0){
		var titulo=tn(tn(p,'ul',1),'li',0).innerHTML;
	}
	else if(n==1){
		var titulo=recursos[p][i].titulo;
	}
	if(banner!=undefined){
		rc(banner.parentNode,banner);
		banner.innerHTML='';
	}
	if(section!=null){
		rc(main,section);
		section.innerHTML='';
	}
	for(var j in recursos){
		for(var k in recursos[j]){
			if(titulo==recursos[j][k].titulo){
				var lupa=ce('img');
				lupa.src='img/lupa.png';
				lupa.alt='zoom';
				lupa.style.cssFloat='right';
				lupa.style.overflow='hidden';
				lupa.style.display='inline-block';
				lupa.style.margin='.5em';
				lupa.style.marginRight='1.5em';
				lupa.style.marginBottom='0';
				lupa.style.paddingLeft='1em';
				lupa.style.borderLeft='#da91f9 solid .1em';
				var figure=ce('figure');
				var picture=ce('picture');
				var img=ce('img');
				var div=ce('div');
				div.style.display='inline-block';
				div.style.paddingTop='.2em';
				img.style.cssFloat='right';
				img.style.overflow='hidden';
				section=ce('section');
				section.id='home';
				section.style.minHeight='500px';
				section.style.textAlign='left';
				figure.style.margin='4em';
				figure.style.marginRight='0';
				figure.style.marginTop='0';
				figure.style.display='inline-block';
				figure.style.width='250px';
				figure.style.height='250px';
				figure.style.cursor='pointer';
				objeto=recursos[j][k];
				for(var l in recursos[j][k]){
					switch(l){
						case 'titulo':
							h1=ce('h1');
							var tx=txt(recursos[j][k][l]);
							ac(h1,tx);
							ac(section,h1);
						break;
						case 'fotoM':
							img.src=recursos[j][k][l];
							zoom[0]=img;
						break;			
						case 'estrellas':
							var dive=cargar_estrellas(recursos[j][k][l]);
							dive.style.display='inline-block';
							dive.style.cssFloat='left';
							dive.style.overflow='hidden';
							dive.style.width='auto';
							dive.style.marginTop='.5em';
							dive.style.marginLeft='1.5em';
							var a=ce('a');
							a.style.display='block';
							a.href='#Valoraciones';
							ac(a,dive);
							ac(div,a);
						break;
					}
				} 
			var usuarios=ce('a');
				var cantval;
				if(objeto.Valoraciones!=undefined){
					for(var i in objeto.Valoraciones){
						cantval=i;
						if(cantval==1){
							otx=txt(cantval+' usuario valoró este producto');
						}
						else{
							otx=txt(cantval+' usuarios valoraron este producto');
						}
					}
				}
				else{
					cantval=0;
					otx=txt(cantval+' usuarios valoraron este producto');
				}
				usuarios.href='#Valoraciones';
				usuarios.style.textDecoration='none';
				usuarios.style.display='inline-block';
				usuarios.style.color='#72ad3c';
				usuarios.style.textAlign='center';
				usuarios.style.marginLeft='1.5em';
				usuarios.style.fontSize='.8em';
				ac(picture,img);
				ac(figure,picture);
				ac(figure,div);
				ac(picture,lupa);
				zoom[1]=lupa;
				ac(usuarios,otx);
				ac(figure,usuarios);
				ac(section,figure);
				if(objeto.Descripcion.Colores!=undefined){
					var divp=ce('div');
					divp.style.background='rgb(237, 237, 237)';
					divp.style.padding='.5em 0 .5em .5em ';
					divp.style.margin='.5em';
					var p=ce('p');
					p.style.display='inline-block';
					p.style.verticalAlign='top';
					p.style.marginTop='.6em';
					var otx=txt('Disponible en:');
					ac(p,otx);
					ac(divp,p);
					for(var i in objeto.Descripcion.Colores){
						var divm=ce('div');
						divm.style.background=objeto.Descripcion.Colores[i];
						divm.style.border='solid .1em #72ad3c';
						divm.style.width='30px';
						divm.style.height='30px';
						divm.style.display='inline-block';
						divm.style.margin='0 .5em';
						ac(divp,divm);
					}
					divm.style.outline='#a5c7fe .2em solid'; 
					ac(figure,divp);
					var divs=tn(divp,'div');
					for(var i=0;i<divs.length;i++){
						divs[i].onclick=function(){
							cerrar_menu();
							this.style.outline='#a5c7fe .2em solid'; 
							if(this==divs[0]&&divs[1]!=undefined){
								divs[1].style.outline='none';
							}
							else if(divs[1]!=undefined){
								divs[0].style.outline='none';
							}
						}
					}
				}
			var ban4=0, objeto;
			ul=ce('ul');
			ul.style.marginTop='0';
			ul.style.display='inline-block';
			ul.style.cssFloat='right';
			ul.style.listStyle='none';
			ul.style.verticalAlign='top';
			ul.style.color='white';
			ul.style.width='573px';
			ul.style.marginRight='65px';
			ul.style.background='#72ad3c';
			ac(section,ul);
			for(var l=0;l<3;l++){
				var li=ce('li');
				var a=ce('a'); 
				a.style.textDecoration='none';
				a.style.display='block';
				a.style.marginLeft='1em';
				a.style.color='white';
				li.style.width='150px';
				li.style.display='inline-block';
				li.style.padding='.5em';
				li.style.margin='0';
				li.style.borderLeft='rgb(203, 202, 206) solid .1em';
				li.style.cursor='pointer';
				if(l==0){
					var tx=txt('Descripción');
					a.href='#Descripción';
					a.style.display='block';
					a.style.background='url('+'img/descripcion.png'+') no-repeat left center';
					li.style.borderLeft='none';
					var div=ce('div');
					var p=ce('p');
					var precio=ce('p');
					var otx;
					var numprod=ce('p');
					otx=txt(objeto.Descripcion.numprod);
					ac(numprod,otx);
					numprod.style.display='inline-block';
					numprod.style.cssFloat='left';
					numprod.style.marginLeft='82%';
					numprod.style.color='grey';
					precio.style.display='inline-block';
					precio.style.fontSize='2em';
					precio.style.color='#72ad3c';
					precio.style.fontWeight='bold';
					precio.style.marginTop='.6em';
					precio.style.marginLeft='1em';
					otx=txt('$'+objeto.Precio+',00');
					objeto.preciomod=objeto.Precio;
					ac(precio,otx);
					p.style.color='black';
					p.style.display='inline-block';
					p.style.width='500px';
					p.style.height='2.8em';
					p.style.fontSize='.8em';
					p.style.margin='1em 2em 0 2em';
					p.style.overflow='hidden';
					var span=ce('span');
					otx=txt('c/u');
					ac(span,otx);
					span.style.color='grey';
					span.style.fontSize='12px';
					span.style.paddingTop='18px';
					span.style.paddingLeft='5px';
					span.style.fontWeight='none';
					var oa=ce('a');
					oa.style.display='inline-block';
					oa.style.cssFloat='right';
					oa.href='#Descripción';
					otx=txt('Leer más');
					ac(oa,otx);
					oa.style.color='#72ad3c';
					oa.style.textDecoration='none';
					oa.style.marginRight='2em';
					oa.style.fontSize='.8em';
					oa.style.cursor='pointer';
					oa.href='#Descripción';
					otx=txt(objeto.Descripcion.d);
					ac(p,otx);
					ac(div,p);
					ac(div,oa);
					ac(div,precio);
					ac(div,span);
					ac(div,numprod);
					div.style.display='inline-block';
					div.style.cssFloat='right';
					div.style.width='571px';
					div.style.minHeight='249px';
					div.style.background='white';
					div.style.border='solid .1em #72ad3c';
					div.style.verticalAlign='top';
					li.style.background='#da91f9';
					var cantidad=ce('input');
					var pcantidad=ce('p');
					otx=txt('Cantidad:');
					ac(pcantidad,otx);
					pcantidad.style.marginRight='.5em';
					cantidad.type='number';
					cantidad.name='cantidad';
					cantidad.min='1';
					cantidad.max='10';
					cantidad.placeholder='1';
					cantidad.style.display='inline-block';
					cantidad.style.background='#ededed';
					cantidad.style.height='28px';
					cantidad.style.width='auto';
					cantidad.style.textAlign='center';
					cantidad.style.cssFloat='left';
					cantidad.style.border='.1em solid grey';
					pcantidad.style.display='inline-block';
					pcantidad.style.color='black';
					pcantidad.style.cssFloat='left';
					pcantidad.style.marginTop='.3em';
					pcantidad.style.marginLeft='2em';
					var tipo=typeof(objeto.Descripcion.Tamaños);
					ac(div,pcantidad);
					ac(div,cantidad);
					if(tipo=='object'){
						var mindiv=ce('div');
						var ptam=ce('p');
						ptam.style.display='inline-block';
						ptam.style.color='black';
						ptam.style.cssFloat='left';
						ptam.style.marginTop='.3em';
						ptam.style.marginLeft='2em';
						otx=txt('Tamaño:');
						ac(ptam,otx);
						ac(mindiv,ptam);
						var input1=ce('input');
						input1.type='text';
						input1.placeholder=objeto.Descripcion.Tamaños['1'];
						input1.id='medida';
						input1.readOnly='true';
						input1.style.textAlign='center';
						input1.style.width='13%';
						input1.style.background='#ededed';
						input1.style.padding='.4em';
						input1.style.marginLeft='1em';
						ac(mindiv,input1);
						var input=ce('input');
						input.type='range';
						input.name='tamaño';
						input.style.margin='.5em 0 0 1em';
						input.style.verticalAlign='top';
						input.id='tm';
						input.step='1';
						input.min='1';
						input.value='1';
						input.placeholder=objeto.Descripcion.Tamaños[input.min];
						for(var o in objeto.Descripcion.Tamaños){
							input.max=o;
						}
						ac(mindiv,input);
						var coma, porcentaje, precio, numero;
						input.onchange=function(){
							precio=tn(this.parentNode.parentNode,'p',1);
							numero=parseFloat(objeto.Precio);
							porcentaje=parseInt((numero/100)*5);
							if(tm.value=='1'){
								precio.innerHTML='$'+objeto.Precio+',00';
								objeto.preciomod=objeto.Precio;
							}
							else{
								objeto.preciomod=numero+porcentaje*tm.value;
								precio.innerHTML='$'+objeto.preciomod+',00';
							}
							medida.value = objeto.Descripcion.Tamaños[tm.value];
						}
						ac(div,mindiv);
					}	
					var boton=ce('input');
					var telefono=ce('img');
					var envio=ce('img');
					var tel=ce('p');
					var otrodiv=ce('div');
					otrodiv.style.display='inline-block';
					if(tipo!='object'){
						otrodiv.style.paddingTop='19px';
					}
					otrodiv.style.marginLeft='2em';
					otrodiv.style.cssFloat='right';
					otrodiv.style.marginTop='1em';
					otrodiv.style.width='307px';
					boton.style.padding='.6em 2em .6em .7em';
					boton.style.fontSize='1.3em';
					boton.style.color='white';
					boton.style.fontSize='1em';
					boton.type='button';
					boton.style.cursor="pointer";
					boton.value='Añadir a la cesta';
					boton.style.display='inline-block';
					boton.style.cssFloat='right';
					boton.style.marginTop='1.5em';
					boton.style.marginRight='2.2em';
					boton.style.background="url('img/cestaM.png') #a76dc0 no-repeat 94% 45%";
					boton.onclick=function(){
						var producto={};
						producto.Titulo=tn(id('home'),'h1',0).innerHTML;
						producto.img=objeto.fotoM;
						var contenido=tn(tn(id('home'),'ul',1),'div',0);
						producto.Precio=tn(contenido,'p',1).innerHTML;
						producto.ref=tn(contenido,'p',2).innerHTML;
						var cantidad=tn(contenido,'input',0).value;
						producto.Cantidad=cantidad;
						ok=1;
						if(producto.Cantidad==''){
							producto.Cantidad=tn(contenido,'input',0).placeholder;
							cantidad=producto.Cantidad;
						}
						var tam=tn(contenido,'input',1).value;
						if(tam==''){
							producto.Tamaños=tn(contenido,'input',0).placeholder;
							if(producto.Tamaños=='1'){
								producto.Tamaños=objeto.Descripcion.Tamaños['1'];
							}
						}
						else if(tam!='Añadir a la cesta'){
							producto.Tamaños=tam;
						}
						var colores=tn(this.parentNode.parentNode.previousSibling,'div',2);
						if(colores!=undefined){
							colores=tn(tn(this.parentNode.parentNode.previousSibling,'div',2),'div');
							for(var j=0;j<colores.length;j++){
								if(colores[j].style.outline=='rgb(165, 199, 254) solid 0.2em'){
									producto.Color=colores[j].style.backgroundColor;
								}
							}
						}
						var minc=tn(tn(tn(tn(nav,'ul',0),'li',1),'ul',0),'li');
						sumac+=parseInt(producto.Precio.substring(producto.Precio.lastIndexOf("$")+1,producto.Precio.lastIndexOf(",")))*parseInt(producto.Cantidad);
						tn(tn(minc[0],'p',0),'span',0).innerHTML=sumac+',00';
						var unab=0;
						do{
							original.push(producto);
							unab++;
						}while(unab<cantidad)
						tn(minc[1],'p',0).innerHTML=original.length;
						for(var t=0;t<original.length;t++){
							original[t].Cantidad='1';
						}
					}
					telefono.src='img/telheader.png';
					telefono.alt='Telefono:4759-1134 Lun a Vier 9am a 21pm';
					telefono.style.display='inline-block';
					telefono.style.padding='.5em';
					telefono.style.cssFloat='left';
					telefono.style.borderRight='rgb(203, 202, 206) solid .1em';
					envio.src='img/envioheader.png';
					envio.style.padding='.5em';
					envio.alt='Envio gratis en 24/48hs';
					envio.style.paddingTop='.6em';
					envio.style.display='inline-block';
					otx=txt('Pide por telefono:');
					tel.style.color='rgb(0, 161, 172)';
					tel.style.fontSize='.8em';
					tel.style.paddingLeft='1.4em';
					ac(tel,otx);
					ac(otrodiv,tel);
					ac(otrodiv,telefono);
					ac(otrodiv,envio);
					ac(div,otrodiv);
					ac(div,boton);
				}
				else if(l==1){
					var tx=txt('Valoraciones');
					a.href='#Valoraciones';
					a.style.paddingLeft='1em';
					a.style.display='block';
					a.style.background='url('+'img/valoraciones.png'+') no-repeat left center';
				}
				else{
					var tx=txt('Preguntas');
					a.href='#Preguntas';
					a.style.paddingLeft='0';
					a.style.display='block';
					a.style.width='116px';
					a.style.background='url('+'img/preguntas.png'+') no-repeat left center';
				}
				ac(a,tx);
				ac(li,a);
				menuProducto[n]=li;
				n++;
				ac(ul,li);
			}
			ac(ul,div);
			opacidad(section);
			ac(main,section);
			div=ce('div');
			div.style.display='inline-block';
			div.style.width='60%';
			ul=ce('ul');
			for(var m=0;m<zoom.length;m++){
				zoom[m].onclick=function(){
					div=ce('div');
					var cruz=crear_cruz();
					var titulo=tn(id('home'),'h1',0).innerHTML;
					var modal=ce('div');
					modal.className='modal';
					modal.id="modal";
					for(var i in recursos){
						for(var j in recursos[i]){
							for(var k in recursos[i][j]){
								if(recursos[i][j][k]==titulo){
									objeto=recursos[i][j];
								}
							}
						}
					}
					var imgG=ce('img');
					var figure=ce('figure');
					figure.style.textAlign='center';
					var picture=ce('picture');
					var h1=ce('h1');
					var otx=txt(objeto.titulo);
					ac(h1,otx);
					h1.style.color='rgb(167, 109, 192)';
					h1.style.borderTop='none';
					h1.style.borderBottom='#72ad3c solid .1em';
					h1.style.padding='.5em 0';
					imgG.src=objeto.foto;
					imgG.alt=objeto.titulo;
					imgG.style.display='inline-block';
					ac(div,cruz);
					ac(div,h1);
					if(objeto.imagenes!=undefined){
						galeria[0]=objeto.foto;
						for(var n in objeto.imagenes){
							galeria[n]=objeto.imagenes[n];
						}
						var siguiente=ce('div');
						var anterior=ce('div');
						siguiente.alt='sig';
						anterior.alt='ant';
						siguiente.style.display='inline-block';
						anterior.style.display='inline-block';
						siguiente.style.width='25px';
						anterior.style.width='25px';
						siguiente.style.height='42px';
						anterior.style.height='42px';
						anterior.style.cssFloat='left';
						siguiente.style.cssFloat='right';
						siguiente.style.marginTop='13em';
						anterior.style.marginTop='13em';
						siguiente.style.backgroundImage='url('+'img/siguiente.png'+')';
						anterior.style.backgroundImage='url('+'img/anterior.png'+')';
						div.style.width='550px';
						imgG.onclick=function(e){
							var evento = e || window.event;
							evento.stopPropagation();
						}
						ac(div,anterior);
						ac(div,siguiente);
						ac(picture,imgG);
						ac(figure,picture);
						ac(div,figure);
						siguiente.onclick=function(){
							cambiar_galeria(this,galeria,imgG);
						}
						anterior.onclick=function(){
							cambiar_galeria(this,galeria,imgG);
						}
					}
					else{
						ac(picture,imgG);
						ac(figure,picture);
						ac(div,figure);
					}
					ac(modal,div);
					opacidad(div);
					ac(section,modal);
					cruz.onclick=function(){
						cerrar_menu();
						cerrar_modal(modal);
						modal.innerHTML='';
					}
				} 
			}
		}
	}
}

var imgpr=ce('div');
imgpr.style.background='url(img/proceso.jpg)';
imgpr.style.display='inline-block';
imgpr.style.width='500px';
imgpr.style.height='104px';
imgpr.style.marginLeft='250px';
imgpr.style.marginTop='40px';
ul=ce('ul');
ul.style.listStyle='none';
ul.style.marginTop='3em';
ul.style.textAlign='right';
ul.style.color='white';
ac(section,imgpr);
ac(section,ul);
for(var l=0;l<3;l++){
	var li=ce('li');
	var a=ce('a'); 
	a.style.textDecoration='none';
	a.style.display='block';
	a.style.marginLeft='1em';
	a.style.color='white';
	li.style.width='150px';
	li.style.display='inline-block';
	li.style.background='#72ad3c';
	li.style.padding='.5em';
	li.style.margin='0';
	li.style.borderLeft='rgb(203, 202, 206) solid .1em';
	li.style.cursor='pointer';
	if(l==0){
		a.style.background='url('+'img/descripcion.png'+') no-repeat left center';
		var tx=txt('Descripción');
		a.id='Descripción';
		li.style.borderLeft='none';
		li.style.background='#da91f9';
		cargar_descripcion(objeto,section);
	}
	else if(l==1){
		var tx=txt('Valoraciones');
		a.style.paddingLeft='1em';
		a.id='Valoraciones';
		a.style.background='url('+'img/valoraciones.png'+') no-repeat left center';
	}
	else{
		var tx=txt('Preguntas');
		a.style.paddingLeft='0';
		a.style.width='116px';
		a.id='Preguntas';
		a.style.background='url('+'img/preguntas.png'+') no-repeat left center';
	}
	ac(a,tx);
	ac(li,a);
	menuProducto[n]=li;
	n++;
	ac(ul,li);
}
var leermas=tn(tn(tn(id('home'),'ul',1),'div',0),'a',0);
var divestrellas=tn(tn(id('home'),'figure',0),'a',0);
var usuarios=tn(tn(id('home'),'figure',0),'a',1);
usuarios.nombre='usuarios';
divestrellas.nombre='divestrellas';
menuProducto[n]=leermas;
n++;
menuProducto[n]=divestrellas;
n++;
menuProducto[n]=usuarios;
for(var i=0;i<menuProducto.length;i++){
	if(menuProducto[i]!=undefined){
		menuProducto[i].onclick=function(){
			var titulo, objeto;
			cerrar_menu();
			if(this.nombre=='divestrellas'){
				var nombre='divestrellas';
			}
			else if(this.innerHTML=='Leer más'){
				var nombre='leermas';
			}
			else if(this.nombre=='usuarios'){
				var nombre='usuarios';
			}
			else{
				var nombre=tn(this,'a',0).innerHTML;
				cambiar_fondo(nombre);
			}
			switch(nombre){
				case 'Descripción':
				case 'leermas':
					if(nombre=='leermas'){
						cambiar_fondo('Descripción');
					}
					objeto=borrar_contenido();
					cargar_descripcion(objeto,section); 
				break;
				case 'Valoraciones':
				case 'divestrellas':
				case 'usuarios':
					if(nombre=='divestrellas'||nombre=='usuarios'){
						cambiar_fondo('Valoraciones');
					}
					objeto=borrar_contenido();
					cargar_valoraciones(objeto,section);
				break;
				case 'Preguntas':
					objeto=borrar_contenido();
					cargar_preguntas(objeto,section);
				break;
			}
		}
	}
}
ac(main,section);
}
function validar(form){
	var divs=tn(tn(form,"fieldset",0),"div");
	var inputs=[], cual;
	for(var i=0;i<divs.length;i++){
		inputs.push(tn(divs[i],"input",0));
	}
	cual=inputs[0].name;
	for(var j=0,p=0;j<inputs.length;j++){
		if(inputs[j].name.charAt(inputs[j].name.length-1)=="1"){
			if(inputs[j].value==""){
				inputs[j].style.border="red solid 1px";
			}
			else{
				p++;
			}
		}
		else{
			p++;
		}
		inputs[j].onchange=function(){
			this.style.border="1px solid grey";
		}
	}
	if(p==10&&cual=="No1"){
		var as=tn(id("nued"),"div");
		as[1].style.background=as[0].style.background;
		as[0].style.background="rgb(167, 109, 197)";
		medio_pago(form.parentNode.parentNode);
		rc(form.parentNode.parentNode,form.parentNode);
	}
	else if(p==5&&cual=="Cu1"){
		vaciar_todo(lista2aux);
		var p=ce("p");
		p.style.fontSize="2em";
		p.style.paddingTop="23%";
		p.style.fontFamily='Special Elite';
		var tx=txt("Felicidades! La compra se ha realizado con éxito.");
		ac(p,tx);
		ac(form.parentNode.parentNode,p);
		p.parentNode.style.background="url(img/felicidades.jpg) no-repeat bottom center white";
		rc(form.parentNode.parentNode,form.parentNode);
		rc(id("nued").previousSibling.parentNode,id("nued").previousSibling);
		rc(id("nued").parentNode,id("nued"));
		original.length=0;
	}
}
function medio_pago(d2){
	var d3=ce("div");
	var anterior=ce('div');
	anterior.alt='ant';
	anterior.id='ant';
	anterior.className="flechas";
	anterior.style.cssFloat='left';
	anterior.style.backgroundImage="url('img/anterior.png')";
	ac(d3,anterior);
	opacidad(d3);
	ac(d2,d3);
	d2aux=d2;
	tn(d2,"h2",0).innerHTML="Medio de pago";
	anterior.onclick=function(){
		var as=tn(id("nued"),"div");
		as[0].style.background=as[1].style.background;
		as[1].style.background="rgb(167, 109, 197)";
		rc(d2,d3);
		tus_datos(d2);
	}
	var ul=ce("ul");
	ul.style.paddingTop="25%";
	var uls=[];
	ul.id="tarjetas";
	var tarjeta=1;
	do{
		var li=ce("li");
		var img=ce("img");
		switch(tarjeta){
			case 1:
				img.alt="Visa";
				img.title="Visa";
			break;
			case 2:
				img.alt="MasterCard";
				img.title="MasterCard";
			break;
			case 3:
				img.alt="AmericanExpress";
				img.title="AmericanExpress";
			break;
		}
		img.src="img/tarjetas/"+tarjeta+".png";
		ac(li,img);
		ac(ul,li);
		uls.push(li);
		tarjeta++;
	}while(tarjeta<4);
	ac(d3,ul);
	for(var k=0;k<uls.length;k++){
		uls[k].onclick=function(e){
			var evento = e || window.event;
			evento.stopPropagation();
			var ob=this;
			for(var l=0;l<uls.length;l++){
				if(!(uls[l].innerHTML==ob.innerHTML)){
					rc(uls[l].parentNode,uls[l]);
				}
				else{
					ul.style.paddingTop="1.5em";
					ob.style.background="#72AD3C";
					var form=ce("form");
					form.id="tusdatos";
					var nombres=["Cuotas*","Numero*","Titular*","Código de seguridad*","Fecha de vencimiento*"];
					var fieldset=ce("fieldset");
					form.style.display="inline-block";
					for(var i=0;i<nombres.length;i++){
						var div=ce("div");
						var input=ce("input");
						var span=ce("span");
						if(nombres[i]=="Código de seguridad*"){
							input.style.width="38%";
							span.style.width="180px";
						}
						if(nombres[i]=="Fecha de vencimiento*"){
							input.style.width="35%";
							span.style.width="190px";
							input.placeholder="dd/mm/aaaa";
						}
						input.type="text";
						var tx=txt(nombres[i]);
						input.name=nombres[i].substring(0,1)+"1";
						if(nombres[i]=="Cuotas*"){
							input.name="Cu1";
						}
						ac(span,tx);
						ac(div,span);
						ac(div,input);
						ac(fieldset,div);
					}
					var btn=ce("input");
					btn.type="button";
					btn.value="Ir a la caja";
					btn.className="caja";
					btn.onclick=function(){
						validar(form);
					}
					ac(form,fieldset);
					ac(form,btn);
					ac(d3,form);
					ac(d2,d3);
				}
			}
		}
	}
}
function tus_datos(d2){
	var d3=ce("div");
	var form=ce("form");
	form.id="tusdatos";
	var nombres=["Nombre*","Apellido*","Teléfono*","Email*","Localidad*","Calle*","Numero*","Piso","Dpto.","Fecha de entrega*"];
	var fieldset=ce("fieldset");
	form.style.display="inline-block";
	for(var i=0;i<nombres.length;i++){
		var div=ce("div");
		var input=ce("input");
		input.style.border="1px solid grey";
		var span=ce("span");
		if(nombres[i]=="Fecha de entrega*"){
			input.placeholder="dd/mm/aaaa";
			input.style.width="38%";
			span.style.width="180px";
		}
		else if(nombres[i]=="Email*"){
			input.type="email";
		}
		input.type="text";
		var tx=txt(nombres[i]);
		input.name=nombres[i].substring(0,1);
		if(nombres[i]=="Nombre*"){
			input.name="No1";
		}
		else if(nombres[i].charAt(nombres[i].length-1)=="*"){
			input.name=input.name+"1";
		}
		ac(span,tx);
		ac(div,span);
		ac(div,input);
		ac(fieldset,div);
	}
	ac(form,fieldset);
	var siguiente=ce('div');
	siguiente.alt='sig';
	siguiente.id='sig';
	siguiente.className="flechas";
	siguiente.style.cssFloat='right';
	siguiente.style.backgroundImage="url('img/siguiente.png')";
	ac(d3,siguiente);
	ac(d3,form);
	tn(d2,"h2",0).innerHTML="Tus datos";
	opacidad(d3);
	ac(d2,d3);
	formaux=form;
	siguiente.onclick=function(){
		validar(form);
	}
}
function finalizar_compra(lista2){
	var d=ce("div");
	var d2=ce("div");
	var uno=ce("div");
	var dos=ce("div");
	uno.className="num";
	dos.className="num";
	uno.style.background="rgba(167, 109, 197,0.6)";
	var tx=txt("1");
	ac(uno,tx);
	var tx=txt("2");
	ac(dos,tx);
	d.className="modal";
	d.id="modal";
	var cruz=crear_cruz();
	ac(d2,cruz);
	var h2=ce("h2");
	h2.style.color='rgb(167, 109, 192)';
	h2.style.borderTop='none';
	h2.style.borderBottom='#72ad3c solid .1em';
	h2.style.padding='.5em 0';
	h2.style.fontFamily='Special Elite';
	ac(d2,h2);
	var nued=ce("div");
	nued.id="nued";
	ac(nued,uno);
	ac(nued,dos);
	ac(d2,nued);
	tus_datos(d2);
	ac(d,d2);
	ac(id("home"),d);
	cruz.onclick=function(){
		cerrar_menu();
		cerrar_modal(d);
		d.innerHTML='';
	}
}
function vaciar_todo(lista2){
	original.length=0;
	sumac=0;
	lista2.length=0;
	var mini=id("miniresumen");
	tn(tn(mini,"li",0),"span",0).innerHTML="0";
	id("precio").innerHTML="Total: $0,00";
	tn(tn(mini,"li",1),"p",0).innerHTML="0";
	var eldiv=tn(id("home"),"div",2);
	rc(eldiv.parentNode,eldiv);
	bt=id("vaciar");
	bt2=id("finalizar");
	bt.disabled="disabled";
	bt2.disabled="disabled";
	bt2.style.color=bt.style.color;
	bt.style.cursor="auto";
	bt2.style.cursor="auto";
	var ans=ce("p");
	id("home").style.height="420px";
	var tx=txt("No se han seleccionado porductos aún.");
	ans.style.paddingTop="3em";
	ans.style.color="red";
	ac(ans,tx);
	opacidad(ans);
	ac(id("home"),ans);
}
function min_random(){
	var banner=Math.round(Math.random()*2);
	switch(banner){
		case 0:
			banner="gatos";
		break;
		case 1:
			banner="perros";
		break;
		case 2:
			banner="ofertas";
		break;
	}
	return banner;
}
function ver_categoria(s,n){
	var banner=tn(main,'figure',0);
	if(banner!=undefined){
		rc(banner.parentNode,banner);
		banner.innerHTML='';
	}
	var categoria=[];
	var i=0;
	var mini;
	var h1=ce('h1');
	var img=ce('img');
	if(n==0){
		var subindice=s.innerHTML.toLowerCase();
	}
	else{
		subindice=s;
	}
	var tx=txt('Categoria: '+subindice);
	var cruz=ce('img');
	var section=ce('section');
	section.id='home';
	ac(h1,tx);
	ac(section,h1);
		for(var j in recursos){
			if(j=='banners'){ 
				cruz.src='img/cruzM.png';
				cruz.alt='cerrar';
				cruz.style.background='#a76dc0';
				cruz.style.display='inline-block';
				cruz.style.cssFloat='right';
				cruz.style.padding='.2em';
				var c=min_random();
				img.src=recursos[j][c];
				img.titulo=recursos[j][c];
				img.alt='publicidad';
				img.style.border='#a76dc0 solid .2em';
				img.style.bottom='0px';
				img.style.display='inline-block';
				img.style.cssFloat='right';
				img.style.left='16px';
				img.style.bottom='0';
				img.style.position='fixed';
				img.style.cursor='pointer';
				img.onclick=function(){
				switch(img.titulo){
						case 'img/serecto.jpg':
							un_producto('gatos',1,'dos');
						break;
						case 'img/banner-light.jpg':
							un_producto('ofertas',1,'dos');
						break;
						case 'img/banner-cepillos.gif':
							un_producto('ofertas',1,'cuatro');
						break;
					}
				} 
			}
			else if(j==subindice){
				var k=0;
				mini=ce('section');
				mini=crear_producto(subindice,'uno');
				categoria[k]=mini;
				k++;
				ac(section,mini);
				mini=ce('section');
				mini=crear_producto(subindice,'dos');
				categoria[k]=mini;
				k++;
				ac(section,mini);
				mini=ce('section');
				mini=crear_producto(subindice,'tres');
				categoria[k]=mini;
				ac(section,mini);	
				k++;
				ac(section,mini);
				mini=ce('section');
				mini=crear_producto(subindice,'cuatro');
				categoria[k]=mini;
				ac(section,mini);
			}
		}
		ac(section,img);
		opacidad(section);
		ac(main,section);
		var p = ce('p');
		p.style.display='inline-block';
		p.style.cssFloat='right';
		p.style.left='16px';
		p.style.bottom='0';
		p.style.position='fixed';
		p.style.color='white';
		p.style.background='#a76dc0';
		p.style.padding='.5em';
		var tx=txt('9');
		ac(p,tx);
		var publicidad=tn(section,'img',0);
		ac(section,p);
		var contador = setInterval( 
		function(){
			p.innerHTML--;	
			if(p.innerHTML<=0){
				clearTimeout(contador);
				if(img.parentNode!=null){
					if(img.parentNode.length!=0){
						rc(img.parentNode,img);
						rc(p.parentNode,p);						
						img.length=0;
					}
				}
			}
		},
		1000);
		for(var k=0;k<categoria.length;k++){
			categoria[k].style.cursor='pointer';
			categoria[k].onclick=function(){
				cerrar_menu();
				un_producto(this,0);
			}
		}
}
function cargar_cesta_productos(lista2){
	var main2=tn(main,'section',0);
	if(tn(main,'section',0)!=undefined){
		rc(main2.parentNode,main2);
	}
	var figure=tn(main,'figure',0);
	if(figure!=undefined){
		rc(figure.parentNode,figure);
		figure.length=0;
	}
	var section=tn(main,'section',0);
	if(section!=undefined){
		rc(section.parentNode,section);
		section.length=0;
	}
	section=ce('section');
	section.id='home';
	eldiv=ce("div");
	section.style.background='rgb(227,227,227)';
	var otx=txt('Mi cesta');
	var div=ce('div');
	h1=ce('h1');
	h1.style.display='inline-block';
	h1.style.textAlign='left';
	ac(h1,otx);
	ac(div,h1);
	var p=ce('p');
	p.id="precio";
	p.style.display='inline-block';
	p.style.fontFamily='Verdana';
	p.style.fontSize='1.2em';
	p.style.color='rgb(114, 173, 60)';
	p.style.fontWeight='bold';
	p.style.cssFloat='right';
	p.style.marginRight='2.5em';
	p.style.marginTop='1.5em';
	var total=txt("Total: $"+sumac+",00");
	ac(p,total);
	ac(div,p);
	h1.style.border='none';
	ac(section,div);
		if(id('vaciar')!=undefined){
			rc(id('vaciar').parentNode,id('vaciar'));
		}
		if(id('finalizar')!=undefined){
			rc(id('finalizar').parentNode,id('finalizar'));
		}
		var bt=ce("input");
		var bt2=ce("input");
		var und=ce("div");
		bt.type="button";
		bt2.type="button";
		bt.id='vaciar';
		bt2.id='finalizar';
		bt2.style.background="#a76dc0";
		bt2.style.color="white";
		bt2.style.fontWeight="bold";
		bt.className="bt";
		bt2.className="bt";
		bt2.value="Finalizar compra";
		bt.value="Vaciar cesta";
		und.style.paddingLeft="60%";
		ac(und,bt);
		ac(und,bt2);
		ac(section,und);
		if(!original.length){
			bt.disabled="disabled";
			bt2.disabled="disabled";
			bt2.style.color=bt.style.color;
			bt.style.cursor="auto";
			bt2.style.cursor="auto";
			var ans=ce("p");
			section.style.minHeight="420px";
			var tx=txt("No se han seleccionado porductos aún.");
			ans.style.paddingTop="3em";
			ans.style.color="red";
			ac(ans,tx);
			opacidad(ans);
			ac(section,ans);
		}
		else{
			bt.disabled=false;
			bt2.disabled=false;
			bt2.style.color="white";
		}
	for(var i=0;i<lista2.length;i++){
		var ul=ce('ul');
		ul.style.fontSize='.9em';
		ul.style.borderRadius="5px";
		ul.style.background='white';
		ul.style.border='#A76DC0 .2em solid';
		ul.style.display='inline-block';
		ul.style.fontSize='.9em';
		ul.style.height='467px';
		ul.style.verticalAlign='top';
		ul.style.margin='1em';
		var divm=ce('div');
		divm.style.padding='.5em';
		for(var j in lista2[i]){
			var lim=ce('li');
			lim.style.textAlign='left';
			if(j=='img'){
				var img=ce('img');
				var cruz=crear_cruz();
				ac(ul,cruz);
				img.src=lista2[i].img;
				img.alt=lista2[i].Titulo;
				lim.style.listStyle='none';
				ac(lim,img);
				ac(ul,lim);
			}
			else{
				lim.style.margin='.8em 0 .8em 2em';
				if(j!='ref'){
					var otx=txt(j+':  ');
					ac(lim,otx);
				}
				if(j=='Color'){
					var divmin=ce('div');
					divmin.style.background=lista2[i][j];
					divmin.style.border='.1em solid #72ad3c';
					divmin.style.display='inline-block';
					divmin.style.width='20px';
					divmin.style.height='10px';
					ac(lim,divmin);
				}
				else{
					var otx=txt(lista2[i][j]);
					ac(lim,otx);
					if(j=='Precio'){
						if(parseInt(lista2[i].Cantidad)>1){
							var cu=ce('span');
							var otx=txt('c/u');
							ac(cu,otx);
							cu.style.color='grey';
							cu.style.fontSize='.8em';
							cu.style.paddingLeft='.5em';
							ac(lim,cu);
						}
					}
				}
			divm.style.maxWidth='250px';
			ac(divm,lim);	
			}
			ac(ul,divm);
		}
		ac(eldiv,ul);
	}
	lista2aux=lista2;
	ac(section,eldiv);
	opacidad(section);
	ac(main,section);
	if(id("vaciar")!=undefined){
		id("vaciar").onclick=function(){
			vaciar_todo(lista2);
		}
	}
	if(id("finalizar")!=undefined){
		id("finalizar").onclick=function(){
			finalizar_compra(lista2);
		}
	}
}
function abrir_cesta(){
	var lista2=[];
	if(original.length>=1&&ok){
		var lista2=[];
		ok=0;
		lista2[0]=original[0];
		for(var j=1;j<original.length;j++){
		var estado=0;
			for(var i=0;i<lista2.length;i++){
				if(lista2[i].Titulo==original[j].Titulo){
					if(lista2[i].Tamaños!=undefined&&original[j].Tamaños!=undefined){
						if(lista2[i].Tamaños==original[j].Tamaños){
							if(lista2[i].Color!=undefined&&original[j].Color!=undefined){
								if(lista2[i].Color==original[j].Color){
									estado=1;
									lista2[i].Cantidad++;
								}
							}
							else{
								estado=1;
								lista2[i].Cantidad++;
							}
						}	
					}
					else{
						estado=1;
						lista2[i].Cantidad++;
					}
				}
			}
			if(estado==0){
				lista2.push(original[j]);
			}
		}
	}
	else if(original.length>=1&&!ok){
		var lista2=[];
		lista2[0]=original[0];
		for(var j=1;j<original.length;j++){
		var estado=0;
			for(var i=0;i<lista2.length;i++){
				if(lista2[i].Titulo==original[j].Titulo){
					if(lista2[i].Tamaños!=undefined&&original[j].Tamaños!=undefined){
						if(lista2[i].Tamaños==original[j].Tamaños){
							if(lista2[i].Color!=undefined&&original[j].Color!=undefined){
								if(lista2[i].Color==original[j].Color){
									estado=1;
								}
							}
							else{
								estado=1;
							}
						}	
					}
					else{
						estado=1;
					}
				}
			}
			if(estado==0){
				lista2.push(original[j]);
			}
		}
	}
	cargar_cesta_productos(lista2);
	var listaprods=tn(tn(id("home"),"div",2),"ul");
	for(var i=0;i<listaprods.length;i++){
		var sacar=tn(listaprods[i],'img',0);
		sacar.onclick=function(){
			var prod={}, precioprod;
			cerrar_menu();
			var list=tn(tn(this.parentNode,'div',0),'li');
			for(var k=0;k<list.length;k++){
				switch(k){
					case 0:
						prod.titulo=list[k].innerHTML.substring(9,list[k].length);
					break;
					case 1:
						prod.precio=list[k].innerHTML.substring(list[k].innerHTML.lastIndexOf("$")+1,list[k].innerHTML.lastIndexOf(","));
						precioprod=prod.precio;
						prod.precio="$"+prod.precio+",00";
					break;
					case 3:
						prod.cant=parseInt(list[k].innerHTML.substring(10,list[k].length));
					break; 
					case 4:
						prod.tam=list[k].innerHTML.substring(10,list[k].innerHTML.length);
					break;
					case 5:
						prod.color=tn(list[k],'div',0).style.background;
					break;
				}
			}
			var suplente=[];
			for(var l=0, s=0;l<original.length;l++){
				if(original[l].Titulo==prod.titulo){
					if(original[l].Tamaños!=undefined&&prod.tam!=undefined){
						if(original[l].Tamaños==prod.tam){
							if(original[l].Color!=undefined&&prod.color!=undefined){
								if(original[l].Color==prod.color){
									suplente.push(l);
								}
							}
							else{
								suplente.push(l);
							}
						}
					}
					else{
						suplente.push(l);
					}
				}
			}
			var loc=[];
			for(var j=0;j<original.length;j++){
				var k=0;
				for(var l=0;l<suplente.length;l++){
					if(j===suplente[l]){
						k=1;
					}
				}
				if(!k){
					loc.push(original[j]);
				}
			}
			if(loc.length){
				original=loc;
				ok2=1;
			}
			sumac-=parseInt(prod.cant)*parseInt(precioprod);
			tn(tn(id("miniresumen"),"li",0),'span',0).innerHTML=sumac+",00";
			tn(tn(id("miniresumen"),"li",1),"p",0).innerHTML=parseInt(tn(tn(id("miniresumen"),"li",1),"p",0).innerHTML)-parseInt(prod.cant);
			id("precio").innerHTML="Total: $"+sumac+",00";
			if(tn(id("home"),"div",2).childNodes.length==1){
				vaciar_todo(lista2);
			}
			rc(this.parentNode.parentNode,this.parentNode);
		}
	}
}
function cargar_cesta_resumen(){
	var cesta=ce('ul');
	var b=0;
	cesta.id="miniresumen";
	cesta.style.background='url('+'img/resumencesta.png'+') no-repeat';
	cesta.style.border='none';
	cesta.style.display='block';
	cesta.style.width='110px';
	cesta.style.top='5.6em';
	cesta.style.paddingLeft='2em';
	cesta.style.position='absolute';
	cesta.style.textAlign='center';
	cesta.style.height='auto';
	cesta.style.bottom='0';  
	cesta.style.left='1076px';
	for(var i=0;i<2;i++){
		var li=ce('li');
		var p=ce('p');
		p.style.marginBottom='.3em';
		li.style.color='white';
		li.style.fontWeight='bold';
		li.style.width='5em';
		li.style.padding='.5em';
		li.style.fontFamily='Arial';
		li.style.cursor='pointer';
		var otx;
		if(i==0){
			otx=txt('Total:');
			ac(li,otx);
			otx=txt('$');
			ac(p,otx);
			var span=ce('span');
			ac(p,span);
			otx=txt('0');
			ac(span,otx);
			ac(li,p);
		}
		else{
			otx=txt('Productos:');
			ac(li,otx);
			otx=txt('0');
			ac(p,otx);
			ac(li,p);
		}
		ac(cesta,li);
		if(b==0){
			var hr=ce('hr');
			ac(cesta,hr);
			b=1;
		}
	}	
	ac(tn(nav,'li',1),cesta);
	cesta.onclick=function(){
		cerrar_menu();
		abrir_cesta();
	}
}
window.onkeydown=function(e){
	switch(e.keyCode){
		case 27: 
		if(id('modal')){
			var m = id('modal');
			rc(m.parentNode,m);
		}
		break;
		case 39: 
			var s = id('sig');
			validar(formaux);
		break;
		case 37: 
			var s = id('ant');
			rc(id("nued").nextSibling.parentNode,id("nued").nextSibling);
			tus_datos(d2aux);
		break;
	}
}
var header=tn(document,'header',0);
var footer=tn(document,'footer',0);
var main=tn(document,'main',0);
var body=tn(document,'body',0);
var nav=tn(header,'nav',0);
var menu=tn(nav,'a');
var productos=[];
var h2, h1, section, div, input, ban=0, li, ul, cont=0, ban2, ban1, n=0, bandera=0, totalc, cantc, lista=[], contlista=1, inc=0, sumac=0, cantprodc=0, ok=0, ok2=0, original=[], formaux, d2aux, lista2aux;
var miniSection, k=0;
var menuProducto=[];
var logo=tn(header,'figure',0);
var imgLogo=tn(logo,'img',0);
imgLogo.style.cursor='pointer';
if(k==0){
	crear_home('home');
}
imgLogo.onclick=function(){ 
	cerrar_menu();
	main.innerHTML='';
	productos.length=0;
	k=0;
	crear_home();
	for(var i=0;i<productos.length;i++){
		productos[i].style.cursor='pointer';
		productos[i].onclick=function(){
			cerrar_menu();
			un_producto(this,0);
		}
	}
}
var sectionG=id('home');
var sections=tn(sectionG,'section');
for(var i=0;i<sections.length;i++){
	sections[i].style.cursor='pointer';
	sections[i].onclick=function(){
		cerrar_menu();
		un_producto(this,0);
	}
}
var bannerFooter=tn(footer,'img',0);
bannerFooter.style.cursor='pointer';
bannerFooter.onclick=function(){
	main.innerHTML='';
	cerrar_menu();
	ver_categoria('ofertas');
}
section=ce('section');
section.style.background='#e7e7e7';
section.style.textAlign='center';
p=ce('p');
p.style.fontFamily='Special Elite';
input=ce('input');
var tx=txt('Suscribite a nuestro newsletter y obten un 15% de descuento en tu proxima compra');
ac(p,tx);
input.type='email';
input.style.margin='1em';
input.style.marginRight='0';
input.style.padding='.2em';
input.name='mail';
input.placeholder='Mail...';
p.style.background='#a76dc0 url('+'img/medalla.png'+') no-repeat left top';
p.style.fontSize='.9em';
p.style.boxShadow='black 2px 2px 5px';
p.style.display='inline-block';
p.style.textAlign='center';
p.style.color='white';
p.style.margin='2em';
p.style.padding='.5em';
p.style.paddingLeft='2.5em';
ac(p,input);
input=ce('input');
input.style.margin='1em';
input.style.marginLeft='.1em';
input.style.padding='.2em .3em';
input.type='submit';
input.name='enviar';
input.value='>';
ac(p,input);
ac(section,p);
ac(footer,section);
var botones=tn(nav,'li');
for(var i=0;i<botones.length;i++){
	botones[i].style.cursor='pointer';
} 
var ban1=0;
botones[0].onclick=function(){
	var ulm=ce('ul');
	ulm.style.display='block';
	ulm.style.margin='0';
	ulm.style.border='none';
	ulm.style.width='150px';
	ulm.style.position='absolute';
	ulm.style.color='white';
	ulm.style.height='auto';
	ulm.style.background='#a76dc0';
	ulm.style.cursor='pointer';
	opacidad(ulm);
	if(ban1==0){
		for(var i=0;i<3;i++){
			li=ce('li');
			li.style.display='inline-block';
			li.style.margin='0';
			li.style.width='100%';
			li.style.padding='.5em 0';
			li.style.borderBottom='#da91f9 solid .1em';
			if(i==0){
				var tx=txt('Perros');
				ac(li,tx);
				ac(ulm,li);
			}
			else if(i==1){
				var tx=txt('Gatos');
				ac(li,tx);
				ac(ulm,li);
			}
			else if(i==2){
				var tx=txt('Ofertas');
				ac(li,tx);
				ac(ulm,li);
			}
		}
		ban1=1;
		ac(this,ulm);
	}
	else if(ban1!=0){
		ulm=tn(this,'ul',0);
		if(ulm!=undefined){
			rc(this,ulm); 
			ulm.innerHTML='';
		}
		ban1=0;
	}
	if(ulm!=undefined){
		var lis=tn(ulm,'li');
			for(var i=0;i<lis.length;i++){
				lis[i].onmouseover=function(){
					this.style.backgroundColor="#D5A7E9";
				}
				lis[i].onmouseout=function(){
					this.style.backgroundColor="#a76dc0";
				}
				lis[i].onclick=function(){
					rc(this.parentNode.parentNode,this.parentNode);
					main.innerHTML='';
					ver_categoria(this,0);
					return false;
				}
			}
	}	
}
cargar_cesta_resumen();	
var ace=tn(id("cesta"),"a",0);
ace.onclick=function(){
	cerrar_menu();
	abrir_cesta();
}