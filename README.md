# Ecommerce-full-JS

Año 2014.
La interacción de todo el proceso de compra (navegar categorías, ver producto, resumen de
compra y checkout) debe programarse en un único documento HTML.
 Se deben aplicar las técnicas de manejo de DOM dictadas durante la cursada, haciendo especial
implementación en la creación y eliminación de objetos, alteraciones de CSS, etc.
 Debe poseer un catálogo de productos que pueda filtrarse por categorías.
 Los productos deben estar divididos, como mínimo, en tres categorías diferentes.
 El listado de productos debe obtenerse de un ARRAY multidimensional o de Objetos OBJECT.
 Cada vez que se cambia de categoría debe aparecer una oferta especial que se destaque durante
10 segundos a modo de banner flotante, luego esta oferta DEBE DESAPARECER.
 En la grilla de productos, mostrar: Nombre, descripción, precio y una imagen en miniatura.
 Debe haber un área del sitio que muestre (mientras el usuario navega por el sitio) la cantidad de
productos comprados y el monto a pagar.
Esto es una especie de ‘minicarrito’ que al hacerle click debe mostrar TODOS los productos
comprados con el subtotal por cada producto y el total de la compra.
Esto es un resumen que NO DEBE mostrar cada producto agregado (eso se pide más adelante).
 Los productos deben quitarse, ya sea de a uno como todos los que se han comprado (ambas).
 Debe haber un botón que indique el final de la selección de productos para dar paso al proceso de
ingreso de datos de envío y pago de la compra (también llamado checkout).
 En el checkout se debe solicitar la información del cliente (nombre, teléfono, email, lugar y fecha
de entrega) y del pago (método de pago, cuotas –si correponde–). Este proceso debe tener la
posibilidad de cancelarse para seguir agregando o eliminando productos del carro.
 Debe funcionar correctamente en Internet Explorer (el rango a tener en cuenta debería desde la
versión 10 u 11). Dejar constancia en un TXT de la versión en que fue probado.
 Ampliar la imagen de la grilla de productos al hacer click o mouseover (por ej. MercadoLibre).
No aplica el cambio de width/height de la imagen, se debe crear una imagen nueva.
 Si el ampliar la imagen ofrece más de una foto (a modo de galería de fotos), mejor.
 Si el ampliar la imagen, ofrece más datos que sólo ver la foto, mucho mejor.
 Si se selecciona más de una vez el mismo producto debe aparecer una única vez en el detalle de
la compra, indicando la cantidad de veces que se compró cada producto.
 Hacer que el banner rote aleatoriamente cada vez que se cambia de categoría y ofrecer alguna
interacción (ver o agregar un producto, ir a una categoría, etc.).
 En los datos del cliente, hacer que algunos datos sean obligatorios. La única validación solicitada
es que los datos no estén vacíos (con que no sea comilla-comilla, alcanza).
 Destacar visualmente los campos que no pasen no pasen satisfactoriamente la validación.
 Desarrollar funciones constructoras para los elementos de los cuales se deban crear instancias.
 Usar temporizadores –Intervalos y TimeOut– para suavizar los efectos y/o generar transiciones
(no cuenta el banner, que se debe quitar a los 10 segundos).
 Detección de teclado para los casos donde pueda implementarse (por ejemplo, cerrar la ventana
modal al usar la tecla escape, o moverse a la imagen anterior/siguiente con las flechas). Se
considerará cumplido este punto si se utiliza en dos ocasiones distintas.
 Resetear el carrito al finalizar la compra.
