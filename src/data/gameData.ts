import { Character, GameState, InventoryItem, LocationId } from "../game/types";

export const locations: Record<LocationId, { name: string; description: string }> = {
  departamento: {
    name: "Departamento de Andy",
    description: "El punto de reinicio. Cama, silencio y una taza sospechosamente antigua."
  },
  esmeralda: {
    name: "Calle Esmeralda",
    description: "Zona bohemia, luces húmedas, música nocturna y decisiones que Andy toma mal."
  },
  costanera: {
    name: "La Costanera",
    description: "Paseo fluvial para caminar, pensar demasiado y malinterpretar saludos."
  },
  saval: {
    name: "Parque Saval e Isla Teja",
    description: "Ferias, naturaleza y eventos donde todos parecen saber socializar menos Andy."
  },
  botanico: {
    name: "Jardín Botánico UACh",
    description: "Rama contemplativa: lluvia, árboles y conversaciones más largas que la batería social."
  },
  zeta: {
    name: "Local exclusivo de Zeta",
    description: "Alta cocina, perfumería y precios que hacen temblar la cuenta bancaria."
  },
  oficina: {
    name: "Oficina",
    description: "Trabajo base. Da dinero, quita energía y confirma que el capitalismo no coquetea."
  }
};

export const startingInventory: InventoryItem[] = [
  {
    id: "amuleto-suerte-absurda",
    name: "Amuleto de la Suerte Absurda",
    kind: "charm",
    description: "+15% de éxito crítico en decisiones socialmente improbables.",
    owned: true
  },
  {
    id: "cafe-instantaneo-caducado",
    name: "Café Instantáneo Caducado",
    kind: "consumable",
    description: "Reduce hambre, pero baja temporalmente la estabilidad mental.",
    owned: true
  },
  {
    id: "cafetera",
    name: "Cafetera de Especialidad",
    kind: "apartment",
    description: "Mejora permanente: +15 energía matinal y -5 ansiedad al iniciar el día.",
    owned: false
  },
  {
    id: "colchon-calidad",
    name: "Colchón de Calidad",
    kind: "apartment",
    description: "Mejora permanente: recupera más energía al dormir.",
    owned: false
  }
];

export const startingCharacters: Character[] = [
  {
    id: "cata",
    name: "Cata",
    role: "friend",
    location: "esmeralda",
    mood: "neutral",
    affinity: 0,
    intimidation: 45,
    unlocked: false,
    lastSeenDay: null,
    perk: "Resistencia nocturna: reduce pérdida de energía después de las 21:00."
  },
  {
    id: "mister-bis",
    name: "Mister Bis",
    role: "friend",
    location: "costanera",
    mood: "neutral",
    affinity: 0,
    intimidation: 35,
    unlocked: false,
    lastSeenDay: null,
    perk: "Optimiza dinero y desbloquea descuentos en gadgets."
  },
  {
    id: "jav-amargo",
    name: "Jav Amargo",
    role: "friend",
    location: "esmeralda",
    mood: "gotico",
    affinity: 0,
    intimidation: 55,
    unlocked: false,
    lastSeenDay: null,
    perk: "Plus pasivo de Audacia en tocatas underground."
  },
  {
    id: "zeta",
    name: "Zeta",
    role: "friend",
    location: "zeta",
    mood: "intelectual",
    affinity: 0,
    intimidation: 65,
    unlocked: false,
    lastSeenDay: null,
    perk: "Descuentos en alta cocina, café y fragancias."
  },
  {
    id: "margarita",
    name: "Margarita Comedia",
    role: "friend",
    location: "costanera",
    mood: "neutral",
    affinity: 0,
    intimidation: 40,
    unlocked: false,
    lastSeenDay: null,
    perk: "Reduce el impacto de La Voz Chillona mediante humor."
  },
  {
    id: "darwin-chato",
    name: "Darwin y El Chato",
    role: "friend",
    location: "saval",
    mood: "activo",
    affinity: 0,
    intimidation: 30,
    unlocked: false,
    lastSeenDay: null,
    perk: "Reducen hambre y energía gastada en mandados pesados."
  },
  {
    id: "romance-01",
    name: "Ruta Romántica I",
    role: "romance",
    location: "costanera",
    mood: "intelectual",
    affinity: 0,
    intimidation: 50,
    unlocked: false,
    lastSeenDay: null,
    routeLevel: 0,
    favoriteGift: "Libro subrayado de segunda mano"
  },
  {
    id: "romance-02",
    name: "Ruta Romántica II",
    role: "romance",
    location: "esmeralda",
    mood: "gotico",
    affinity: 0,
    intimidation: 60,
    unlocked: false,
    lastSeenDay: null,
    routeLevel: 0,
    favoriteGift: "Entrada a tocata underground"
  },
  {
    id: "romance-03",
    name: "Ruta Romántica III",
    role: "romance",
    location: "saval",
    mood: "activo",
    affinity: 0,
    intimidation: 45,
    unlocked: false,
    lastSeenDay: null,
    routeLevel: 0,
    favoriteGift: "Termo para caminata"
  },
  {
    id: "romance-04",
    name: "Ruta Romántica IV",
    role: "romance",
    location: "botanico",
    mood: "intelectual",
    affinity: 0,
    intimidation: 55,
    unlocked: false,
    lastSeenDay: null,
    routeLevel: 0,
    favoriteGift: "Postal botánica"
  },
  {
    id: "romance-05",
    name: "Ruta Romántica V",
    role: "romance",
    location: "zeta",
    mood: "neutral",
    affinity: 0,
    intimidation: 70,
    unlocked: false,
    lastSeenDay: null,
    routeLevel: 0,
    favoriteGift: "Fragancia cítrica"
  },
  {
    id: "romance-06",
    name: "Ruta Romántica VI",
    role: "romance",
    location: "costanera",
    mood: "activo",
    affinity: 0,
    intimidation: 40,
    unlocked: false,
    lastSeenDay: null,
    routeLevel: 0,
    favoriteGift: "Café al paso"
  },
  {
    id: "romance-07",
    name: "Ruta Romántica VII",
    role: "romance",
    location: "esmeralda",
    mood: "gotico",
    affinity: 0,
    intimidation: 62,
    unlocked: false,
    lastSeenDay: null,
    routeLevel: 0,
    favoriteGift: "Pin esmaltado absurdo"
  },
  {
    id: "romance-08",
    name: "Ruta Romántica VIII",
    role: "romance",
    location: "botanico",
    mood: "neutral",
    affinity: 0,
    intimidation: 48,
    unlocked: false,
    lastSeenDay: null,
    routeLevel: 0,
    favoriteGift: "Chocolate amargo"
  }
];

export const initialGameState: GameState = {
  stats: {
    hambre: 25,
    energia: 80,
    dinero: 30000,
    confianza: 35,
    intelecto: 40,
    audacia: 25,
    ansiedad: 30
  },
  clock: { day: 1, hour: 8, minute: 0 },
  weather: "Lluvia",
  location: "departamento",
  inventory: startingInventory,
  characters: startingCharacters,
  log: ["Día 1, 08:00. Andy despierta con la certeza equivocada de que hoy entenderá las indirectas."]
};
