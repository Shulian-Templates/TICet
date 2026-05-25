# TICet

Sistema de consulta de precios de entradas para el festival de música TIC.

## Consigna base

Implementá la función `calcularTotal` en `src/index.ts`. La función recibe el id de un artista, la cantidad de entradas y un código de descuento, y tiene que devolver el precio total a pagar.

Los precios por entrada son:

| ID artista | Precio (patacones) |
|------------|--------------------|
| sabrina    | 1000               |
| kgatlw     | 700                |
| lali       | 500                |
| magdalena  | 600                |
| viagra     | 400                |
| dillom     | 350                |
| marilina   | 200                |
| mugre      | 150                |

Los códigos de descuento son:

| Código | Descuento |
|--------|-----------|
| TIC10  | 10%       |
| TIC20  | 20%       |
| DARIO  | 50%       |

Si el id no corresponde a ningún artista conocido, el precio base es `0`. Si el código no es válido, no se aplica descuento.

Ejemplo: 3 entradas para `dillom` con código `TIC20`:

```text
calcularTotal('dillom', 3, 'TIC20') → 840
```

(350 × 3 × 0.80 = 840)

## Consigna manija: Lorem Ipsum

**ESTE EJERCICIO ES BASTANTE COMPLICADO CONCEPTUALMENTE: ENTER AT YOUR OWN RISK**

Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto. Es esencialmente un texto largo de prueba, y lo podemos hacer tan largo como necesitemos. Vamos a hacer una función generadora de lorem ipsum, pero para eso, tenemos que entender el concepto de **recursión**.

### Recursión

La recursión es el acto de **funciones que se llaman a sí mismas**. Es útil para hacer una misma operación muchas veces. Cada vez que la función se llama a sí misma, lo hace con una versión más simple del problema, y hay un punto en que deja de llamarse: eso se llama **caso base**.

Veamos un ejemplo para que se entienda mejor: el factorial. El factorial de un número n (escrito como n!) es el producto de todos los números enteros desde n hasta 1. Por ejemplo: 5! = 5 × 4 × 3 × 2 × 1 = 120. Esto se puede escribir de forma recursiva:

```typescript
function factorial(n: number): number {
  if (n === 1) {
    return 1; // caso base
  } else {
    return n * factorial(n - 1); // llamada recursiva
  }
}
```

¿Por qué funciona? El paso a paso de `factorial(3)`:

1. `factorial(3)` = 3 × `factorial(2)`
2. `factorial(3)` = 3 × 2 × `factorial(1)`
3. `factorial(3)` = 3 × 2 × 1 = 6

En recursión siempre hay dos etapas: el **paso recursivo** (la función se llama a sí misma con un problema más chico) y el **caso base** (el que corta la cadena de llamadas).

### Lo que hay que hacer

Usando recursión (no vale `while`, `for`, `forEach`, `map` ni `reduce`), implementá la función `generarLorem` en `src/manija.ts`. La función toma un número `n` y devuelve un string con el texto `"Lorem Ipsum"` repetido `n` veces, terminando con un punto.

Ejemplo:

```text
generarLorem(5) → 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.'
```

No te olvidés del punto final. **Tip:** tiene que ver con el caso base.

La función tiene que estar exportada (`export function generarLorem`).

## ¿Qué hay que editar?

Solo `src/index.ts` y `src/manija.ts`. Los archivos en `src/lib/` ya están completos y no hay que tocarlos.

## Primeros pasos

```bash
npm install
```

## Cómo correr el programa

Este ejercicio usa una interfaz web. A diferencia de los ejercicios anteriores donde `npm run start` mostraba resultados en la terminal, acá **abre automáticamente una página en el navegador**. Esa página es la interfaz con la que interactuás con el programa.

```bash
npm run start
```

Para la consigna manija:

```bash
npx tsx src/manija.ts
```

## Tests

```bash
npm run test-base    # tests de la consigna base
npm run test-manija  # tests de la consigna manija
npm test             # todos los tests
```
