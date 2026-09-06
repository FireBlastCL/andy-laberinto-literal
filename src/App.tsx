import { Battery, Brain, BriefcaseBusiness, Clock, Coffee, Map, MessageCircle, Package, Umbrella } from "lucide-react";
import { useMemo, useState } from "react";
import { initialGameState, locations } from "./data/gameData";
import { formatClock, interact, isWeekend, moveTo, restUntilNextDay, workShift } from "./game/engine";
import { LocationId } from "./game/types";

const locationOrder: LocationId[] = ["departamento", "esmeralda", "costanera", "saval", "botanico", "zeta"];

function StatBar({ label, value, danger }: { label: string; value: number; danger?: boolean }) {
  return (
    <div className="stat">
      <span>{label}</span>
      <div className="meter">
        <i style={{ width: `${value}%` }} className={danger ? "danger" : ""} />
      </div>
      <b>{value}%</b>
    </div>
  );
}

export default function App() {
  const [game, setGame] = useState(initialGameState);
  const chaotic = game.stats.ansiedad >= 80;
  const presentCharacters = useMemo(
    () => game.characters.filter((character) => character.location === game.location),
    [game.characters, game.location]
  );

  const newestLog = game.log[game.log.length - 1];

  return (
    <main className={chaotic ? "app chaotic" : "app"}>
      <header className="topbar">
        <div className="brand">
          <span>Andy</span>
          <strong>El Laberinto Literal</strong>
        </div>
        <div className="timeWeather">
          <span><Clock size={16} /> {formatClock(game)}</span>
          <span><Umbrella size={16} /> {game.weather}</span>
          <span><BriefcaseBusiness size={16} /> ${game.stats.dinero.toLocaleString("es-CL")}</span>
        </div>
        <div className="statsGrid">
          <StatBar label="Hambre" value={game.stats.hambre} danger={game.stats.hambre >= 80} />
          <StatBar label="Energía" value={game.stats.energia} danger={game.stats.energia <= 20} />
          <StatBar label="Ansiedad" value={game.stats.ansiedad} danger={game.stats.ansiedad >= 80} />
        </div>
      </header>

      <section className="viewport">
        <div className={`scene scene-${game.location}`}>
          <div className="weatherLayer">{game.weather === "Lluvia" ? "//// //// ////" : ""}</div>
          <div className="andySprite">
            <div className="mask" />
            <span>ANDY</span>
          </div>
          <aside className="locationPanel">
            <p>{locations[game.location].name}</p>
            <small>{locations[game.location].description}</small>
          </aside>
          <div className="castRail">
            {presentCharacters.map((character) => (
              <button key={character.id} onClick={() => setGame(interact(game, character.id))}>
                <MessageCircle size={15} />
                {character.name}
                <small>Af. {character.affinity} | Int. {character.intimidation}</small>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="dialogueBox">
        <p className="speaker">Narrador interno, probablemente poco confiable</p>
        <p className="typeLine">{newestLog}</p>
        {chaotic && <strong className="chaosText">LA VOZ CHILLONA: si una opción dice café, quizá quiere decir abandono.</strong>}
      </section>

      <nav className="decisionArea">
        <button onClick={() => setGame(workShift(game))} disabled={isWeekend(game.clock.day)}>
          <BriefcaseBusiness size={18} /> Trabajar 4h
        </button>
        <button onClick={() => setGame(restUntilNextDay(game))}>
          <Battery size={18} /> Dormir
        </button>
        <button onClick={() => setGame({ ...game, stats: { ...game.stats, energia: Math.min(100, game.stats.energia + 15), ansiedad: Math.max(0, game.stats.ansiedad - 8) }, log: [...game.log, "Café de especialidad: +15 energía, -8 ansiedad. Andy casi parece funcional."] })}>
          <Coffee size={18} /> Café
        </button>
        <button>
          <Package size={18} /> Inventario
        </button>
        <button>
          <Brain size={18} /> Celular
        </button>
        <div className="mapButtons">
          <Map size={18} />
          {locationOrder.map((location) => (
            <button key={location} onClick={() => setGame(moveTo(game, location))}>
              {locations[location].name}
            </button>
          ))}
        </div>
      </nav>
    </main>
  );
}
