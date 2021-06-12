# GifsApp

En esta aplocación ponemos en prática los siguientes consceptos:

- Modularización de la aplicación
- Estructura de la aplicación de media a gran escapa
- Componentes
- ViewChild
- Servicios
- Historial de búsquedas
- Uso de Api Keys
- LocalStorage
- Peticiones HTTP
- Animaciones mediante css

## ViewChild

En el componente de `busqueda` utilizamos  el `ViewChild` para acceder al contenido del `input` en lugar de `ngModel` o `form`

## [Operador de aserción no nulo](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#non-null-assertion-operator)

Se ! puede usar un nuevo operador de expresión posterior a la corrección para afirmar que su operando no es nulo y no está definido en contextos donde el verificador de tipos no puede concluir ese hecho. Específicamente, la operación x!produce un valor del tipo xcon nully undefinedexcluido. Similar a las aserciones de tipo de los formularios `<T> xy x as T`, el !operador de aserción no nulo simplemente se elimina en el código JavaScript emitido.

Ejemplo:

``` codigo
ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;
```

## Uso de Api Keys

Para el ejemplo de consumo de API Key lo haremon con la página [giphy.com](https://developers.giphy.com)

## Animaciones mediante css

Para las animaciones de CSS usaremos [animate.style](https://animate.style) que es una página que nos proporciona animaciones listas para usuar.
