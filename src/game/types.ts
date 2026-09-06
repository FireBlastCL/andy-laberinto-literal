export type Weather = "Lluvia" | "Nublado" | "Despejado";
export type LocationId =
  | "departamento"
  | "esmeralda"
  | "costanera"
  | "saval"
  | "botanico"
  | "zeta"
  | "oficina";

export type RouteMood = "intelectual" | "gotico" | "activo" | "neutral";

export interface AndyStats {
  hambre: number;
  energia: number;
  dinero: number;
  confianza: number;
  intelecto: number;
  audacia: number;
  ansiedad: number;
}

export interface ClockState {
  day: number;
  hour: number;
  minute: number;
}

export interface Character {
  id: string;
  name: string;
  role: "friend" | "romance";
  location: LocationId;
  mood: RouteMood;
  affinity: number;
  intimidation: number;
  unlocked: boolean;
  lastSeenDay: number | null;
  perk?: string;
  routeLevel?: 0 | 1 | 2 | 3 | 4;
  favoriteGift?: string;
}

export interface InventoryItem {
  id: string;
  name: string;
  kind: "consumable" | "charm" | "apartment";
  description: string;
  owned: boolean;
}

export interface GameState {
  stats: AndyStats;
  clock: ClockState;
  weather: Weather;
  location: LocationId;
  inventory: InventoryItem[];
  characters: Character[];
  log: string[];
}
