import { Character, GameState, LocationId, Weather } from "./types";

const clamp = (value: number, min = 0, max = 100) => Math.max(min, Math.min(max, value));

export function randomWeather(): Weather {
  const values: Weather[] = ["Lluvia", "Nublado", "Despejado"];
  return values[Math.floor(Math.random() * values.length)];
}

export function isWeekend(day: number) {
  const weekday = ((day - 1) % 7) + 1;
  return weekday === 6 || weekday === 7;
}

export function formatClock(state: GameState) {
  const hh = String(state.clock.hour).padStart(2, "0");
  const mm = String(state.clock.minute).padStart(2, "0");
  return `Día ${state.clock.day} - ${hh}:${mm}`;
}

export function advanceTime(state: GameState, minutes: number): GameState {
  let total = state.clock.hour * 60 + state.clock.minute + minutes;
  let day = state.clock.day;
  const log = [...state.log];

  if (total >= 24 * 60) {
    day += 1;
    total = 8 * 60;
    log.push(`Andy sobrevive al día. Amanece el día ${day} a las 08:00.`);
  }

  return {
    ...state,
    clock: {
      day,
      hour: Math.floor(total / 60),
      minute: total % 60
    },
    log
  };
}

export function applyStatDelta(state: GameState, delta: Partial<GameState["stats"]>) {
  return {
    ...state,
    stats: {
      hambre: clamp(state.stats.hambre + (delta.hambre ?? 0)),
      energia: clamp(state.stats.energia + (delta.energia ?? 0)),
      dinero: Math.max(0, state.stats.dinero + (delta.dinero ?? 0)),
      confianza: clamp(state.stats.confianza + (delta.confianza ?? 0)),
      intelecto: clamp(state.stats.intelecto + (delta.intelecto ?? 0)),
      audacia: clamp(state.stats.audacia + (delta.audacia ?? 0)),
      ansiedad: clamp(state.stats.ansiedad + (delta.ansiedad ?? 0))
    }
  };
}

export function moveTo(state: GameState, location: LocationId): GameState {
  const rainPenalty = state.weather === "Lluvia" ? -8 : -4;
  const weekendPenalty = isWeekend(state.clock.day) ? -3 : 0;
  const next = advanceTime(applyStatDelta(state, {
    energia: rainPenalty + weekendPenalty,
    hambre: 4,
    ansiedad: state.weather === "Lluvia" ? 3 : 1
  }), 30);

  return {
    ...next,
    location,
    log: [...next.log, `Andy se desplaza a ${location}. El trayecto consume 30 minutos.`]
  };
}

export function affinityWeatherMultiplier(weather: Weather, character: Character) {
  if (weather !== "Lluvia") return 1;
  if (character.mood === "intelectual" || character.mood === "gotico") return 1.25;
  if (character.mood === "activo") return 0.5;
  return 1;
}

export function interact(state: GameState, characterId: string): GameState {
  const character = state.characters.find((item) => item.id === characterId);
  if (!character) return state;

  const canUnlock = state.stats.confianza > character.intimidation && state.stats.hambre < 50;
  const gain = Math.round(10 * affinityWeatherMultiplier(state.weather, character));
  const cost = character.lastSeenDay !== null && state.clock.day - character.lastSeenDay > 4 ? 120 : 60;

  const nextCharacters = state.characters.map((item) => {
    if (item.id !== characterId) return item;
    if (!item.unlocked && !canUnlock) {
      return item;
    }

    const affinity = clamp(item.affinity + gain);
    const routeLevel = item.role === "romance"
      ? affinity >= 85 ? 4 : affinity >= 65 ? 3 : affinity >= 35 ? 2 : 1
      : item.routeLevel;

    return {
      ...item,
      unlocked: true,
      affinity,
      routeLevel,
      lastSeenDay: state.clock.day
    };
  });

  const next = advanceTime(applyStatDelta(state, {
    energia: -10,
    hambre: 5,
    confianza: canUnlock ? 3 : -2,
    ansiedad: canUnlock ? -3 : 8
  }), cost);

  return {
    ...next,
    characters: nextCharacters,
    log: [
      ...next.log,
      canUnlock
        ? `${character.name} escucha a Andy. Afinidad +${gain}.`
        : `${character.name} intimida demasiado a Andy. La conversación muere de pie.`
    ]
  };
}

export function workShift(state: GameState): GameState {
  if (isWeekend(state.clock.day)) {
    return {
      ...state,
      log: [...state.log, "Es fin de semana. La oficina está cerrada y Andy queda a merced de sus decisiones."]
    };
  }

  const next = advanceTime(applyStatDelta(state, {
    dinero: 18000,
    energia: -28,
    hambre: 18,
    ansiedad: 12,
    confianza: 2
  }), 240);

  return {
    ...next,
    location: "oficina",
    log: [...next.log, "Turno de oficina completado: +$18.000, -28 energía, +12 ansiedad."]
  };
}

export function restUntilNextDay(state: GameState): GameState {
  const hasGoodMattress = state.inventory.some((item) => item.id === "colchon-calidad" && item.owned);
  const hasCoffeeMachine = state.inventory.some((item) => item.id === "cafetera" && item.owned);
  const recovery = hasGoodMattress ? 70 : 55;
  const nextDay = Math.min(30, state.clock.day + 1);

  return {
    ...state,
    clock: { day: nextDay, hour: 8, minute: 0 },
    weather: randomWeather(),
    location: "departamento",
    stats: {
      ...state.stats,
      energia: clamp(recovery + (hasCoffeeMachine ? 15 : 0)),
      hambre: clamp(state.stats.hambre + 15),
      ansiedad: clamp(state.stats.ansiedad - (hasCoffeeMachine ? 15 : 8))
    },
    log: [
      ...state.log,
      `Día ${nextDay}, 08:00. Andy despierta. El clima define si Valdivia será ciudad o prueba psicológica.`
    ]
  };
}
