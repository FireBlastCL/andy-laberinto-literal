# Andy: El Laberinto Literal

## 1. Vision general

**Genero:** dating sim, gestion de supervivencia y novela visual psicologica con humor negro.

**Premisa:** Andy despierta cada dia a las 08:00 en Valdivia con una mision aparentemente simple: socializar sin autodestruirse. El jugador debe administrar hambre, energia, dinero, confianza, intelecto, audacia y ansiedad durante 30 dias. La dificultad no nace solo de elegir la respuesta correcta, sino de llegar a las conversaciones en condiciones humanas aceptables.

**Tono:** anime oscuro, melancolia lluviosa, comedia literal, fracaso romantico PG y tension psicologica. El chiste debe recaer en Andy, no en la gente que interactua con el.

## 2. Pilares de diseno

1. Supervivencia social: cada interaccion cuesta energia, tiempo y estabilidad.
2. Literalidad como mecanica: las opciones iniciales son absurdas o demasiado textuales; las opciones maduras se desbloquean con progreso.
3. Valdivia como sistema: lluvia, distancias, ferias, noche y clima alteran rutas.
4. Alta dificultad justa: fallar genera escenas memorables, no solo castigo numerico.
5. Rutas no automaticas: amistades y romances requieren visitas, regalos y timing.

## 3. Ciclo diario

Cada dia empieza a las 08:00 en el departamento de Andy.

Flujo base:

1. Generar clima: Lluvia, Nublado o Despejado.
2. Aplicar pasivas del departamento.
3. Mostrar agenda disponible.
4. Lunes a viernes: habilitar turno laboral base de 4 horas.
5. Permitir desplazamientos de 30 minutos.
6. Ejecutar acciones: trabajo, cafe, cita, panorama, consejo, inventario.
7. Antes de medianoche: dormir o colapsar si se fuerza el limite.
8. Aplicar Ley del Olvido a personajes no visitados.

## 4. Estadisticas

| Stat | Rango | Funcion |
| --- | --- | --- |
| Hambre | 0-100 | A 100 dispara ansiedad y desestabiliza el resto. Debe estar bajo 50 para romper barreras romanticas. |
| Energia | 0-100 | Bateria social. A 0 fuera de casa provoca colapso, escena vergonzosa y -50 afinidad. |
| Dinero | CLP | Se gana trabajando o haciendo streams. A 0 habilita prestamo bancario de alto interes. |
| Confianza | 0-100 | Permite superar intimidacion inicial. |
| Intelecto | 0-100 | Desbloquea opciones logicas y lectura de textos complejos. |
| Audacia | 0-100 | Permite acciones de riesgo social. |
| Ansiedad | 0-100 | A 80 activa Modo Caotico y sabotaje visual de UI. |

## 5. Clima

| Clima | Efecto global | Efecto social |
| --- | --- | --- |
| Lluvia | Caminar cuesta mas energia sin abrigo correcto. | Intelectuales/goticos ganan afinidad x1.25; activos ganan x0.5. |
| Nublado | Balance neutro. | Conversaciones introspectivas tienen leve ventaja. |
| Despejado | Menor costo de energia al moverse. | Eventos masivos atraen mas personajes activos. |

## 6. Fines de semana

Sabado y domingo no hay turno laboral base. A cambio, aparecen eventos masivos en Costanera y Parque Saval. Estos dias son buenos para ver a varios personajes, pero el consumo de dinero y energia aumenta.

## 7. Amistades

| Personaje | Zona | Barrera | Beneficio |
| --- | --- | --- | --- |
| Cata | Calle Esmeralda | Intimidacion nocturna | Resistencia despues de las 21:00. |
| Mister Bis | Centro/Costanera | Verguenza performativa | Optimiza dinero y gadgets. |
| Jav Amargo | Tocatas underground | Presencia intensa | Plus pasivo de Audacia. |
| Zeta | Local exclusivo | Sofisticacion intimidante | Descuentos en alta cocina y fragancias. |
| Margarita Comedia | Cafeterias | Rapidez verbal | Reduce impacto de La Voz Chillona. |
| Darwin y El Chato | Ferias libres | Ritmo rural | Reducen hambre y energia en mandados. |

Regla de amistad: si se descuidan por varios dias, intentar interactuar duplica el costo de tiempo. No son perks gratis; hay que sostener el vinculo.

## 8. Rutas romanticas

Cada ruta tiene 5 estados reales:

| Nivel | Estado | Requisitos |
| --- | --- | --- |
| 0 | Bloqueada por miedo | Requiere Confianza > intimidacion y Hambre < 50. |
| 1 | Primer contacto | Salidas breves, opciones literales, errores leves. |
| 2 | Salida casual | Preguntas superficiales y humor contextual. |
| 3 | Interes mutuo | Regalos especificos y conversaciones menos defensivas. |
| 4 | Formalizacion | Dialogos profundos, confesional final y cierre de ruta. |

Ley del Olvido: si Andy deja pasar varios dias sin interactuar con una ruta desbloqueada, la afinidad baja por ghosting accidental.

## 9. Acciones y costos

| Accion | Tiempo | Efecto base |
| --- | --- | --- |
| Trabajo oficina | 4h | +dinero, -energia, +hambre, +ansiedad. |
| Cita formal | 3h | Alta ganancia o perdida de afinidad. |
| Evento masivo | 2-3h | Multiples personajes, alto costo. |
| Cafe al paso | 1h | +energia moderada, -ansiedad si es especialidad. |
| Desplazamiento | 30m | -energia, +hambre, clima modifica costo. |
| Huir con dignidad | 15-30m | Evita perdida mayor, sube ansiedad levemente. |

## 10. Inventario

| Item | Tipo | Efecto |
| --- | --- | --- |
| Amuleto de la Suerte Absurda | Amuleto | +15% exito critico. |
| Cafe Instantaneo Caducado | Consumible | Quita hambre, -20 estabilidad mental temporal. |
| Bebida Energetica | Consumible | +30 energia, +ansiedad. |
| Cafe de Especialidad | Consumible | +15 energia, -ansiedad. |
| Cafetera | Departamento | Pasiva matinal de energia y ansiedad. |
| Colchon de calidad | Departamento | Mayor recuperacion al dormir. |

## 11. Modo Caotico

Se activa con Ansiedad >= 80.

Requerimientos UI:

- Botones con animacion CSS `shake`.
- Garabatos o overlays de texto literal.
- Opciones de dialogo parcialmente saboteadas.
- Audio opcional: pitido suave o murmullo.
- Margarita Comedia puede reducir la intensidad del modo.

## 12. UI Bolt.new

La pantalla se divide en cuatro bloques fijos:

1. Barra superior: dia, hora, clima, dinero, hambre, energia y ansiedad.
2. Viewport grafico: fondo de locacion, clima, sprite de Andy y personajes presentes.
3. Caja de dialogo: speaker, texto con efecto maquina de escribir y alertas de ansiedad.
4. Area de decisiones: acciones principales, inventario, mapa y celular.

Responsive/APK:

- Mobile-first despues de desktop funcional.
- Controles grandes, legibles y tocables.
- Sin hover obligatorio.
- Estado guardable en localStorage en fase 2.
- Preparado para Capacitor si se exporta a APK.

## 13. Requerimientos tecnicos

Stack recomendado para Bolt.new:

- React + TypeScript + Vite.
- Estado inicial con `useState`; migrar luego a Zustand si crece.
- Datos en archivos separados: personajes, locaciones, items, dialogos.
- CSS puro inicialmente; evitar dependencias visuales pesadas.
- Iconos: lucide-react.

Fase 2:

- Sistema de guardado/carga.
- Dialogos ramificados por nivel.
- Eventos por calendario.
- Tienda y prestamos.
- Inventario funcional.
- Pantallas de celular: mensajes, agenda y mapa.

Fase 3:

- Sprites reales.
- Fondos ilustrados por locacion.
- Sonido ambiente.
- Build APK con Capacitor.

## 14. Criterios de aceptacion inicial

- El jugador puede moverse por Valdivia.
- El clima afecta el costo de movimiento y afinidad.
- Las stats suben y bajan.
- El modo caotico se activa sobre 80 ansiedad.
- Hay personajes filtrados por locacion.
- Las amistades y rutas romanticas tienen afinidad, intimidacion y desbloqueo.
- La UI mantiene los cuatro bloques pedidos en desktop y mobile.
