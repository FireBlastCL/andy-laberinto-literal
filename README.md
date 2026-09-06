# Andy: El Laberinto Literal - Bolt Starter

Base inicial para llevar a Bolt.new un dating sim de supervivencia social ambientado en Valdivia.

## Como usar en Bolt.new

1. Crea un proyecto React + TypeScript.
2. Copia los archivos de este paquete manteniendo la estructura.
3. Ejecuta `npm install`.
4. Ejecuta `npm run dev`.

## Contenido

- `docs/GDD_TDD.md`: guia narrativa, mecanica y tecnica.
- `src/data/gameData.ts`: locaciones, inventario y elenco inicial.
- `src/game/types.ts`: modelos de datos.
- `src/game/engine.ts`: reglas principales del ciclo de juego.
- `src/App.tsx`: UI base con cuatro bloques.
- `src/styles.css`: estetica anime oscuro, responsive y Modo Caotico.

## Siguiente implementacion sugerida

- Agregar dialogos ramificados por personaje.
- Persistir partida en `localStorage`.
- Crear pantalla real de inventario, celular y mapa.
- Reemplazar placeholders visuales por fondos y sprites finales.
