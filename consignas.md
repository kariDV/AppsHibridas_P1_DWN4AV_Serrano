# PRIMER PARCIAL

El objetivo de este parcial es el armado de una API RESTful de tematica libre.

**Crear un servidor web que contemple los siguientes puntos:**

## La pagina principal debe mostrar un html informando de que trata la api con la posibilidad de acceder a los endpoints mediante url. Debe contar con un pie de pagina con el nombre del desarrollador/a, nombre la materia, nombre del profesor, comisión y año.

## Debe por lo menos tener 2 rutas. Ejemplo: Supongamos que hacen una api sobre libros, en ese caso, debería poder llamar, por lo menos, a libros y autores.

## En las rutas se debe poder:

- Ver todos los documentos de una colección
- Traer un documento en específico, por medio de Id.
- Actualizar la información de un documento
- Eliminar un documento
- Por lo menos dos filtrados
- Búsqueda por nombre
- Ordenamiento (posibilidad de recibir los datos ordenados llamando a este endpoint)
- Posibilidad de traer los datos con paginado (recibiendo en la ruta el rango de documentos a devolver)

## Aplicar autenticación en las rutas (esto sera simulado, pidiendo un token por query)

## Aplicar las validaciones que consideren necesarias

## Se evaluara:

- Modelado de base de datos
- API (manejo correcto de las reglas basicas)
- División de Responsabilidades (manejo correcto de views, controllers, service, routes...)
- Correcto uso de ECMAScript modules
- Correcto uso de Express

## Para las imágenes, si hubiese, pueden utilizar https://picsum.photos que es un generador de imágenes aleatoria.

## El código debe estar en github (envian solo el link al repositorio)
