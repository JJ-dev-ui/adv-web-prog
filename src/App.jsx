import valomap from "./assets/valomap.webp";
import astra from "./assets/astra.avif";
import chamber from "./assets/chamber.avif";
import raze from "./assets/raze.avif";
import mapBottom from "./assets/mapBottom.avif";
import tenz from "./assets/tenz.jpg";
import aspas from "./assets/aspas.jpg";
import tarik from "./assets/tarik.jpg";

export default function App() {
  return (
    <div className="bg-zinc-950 text-white min-h-screen">
      {/* ============ NAVBAR ============ */}
      <nav className="flex items-center justify-between px-6 py-5 md:px-16
                      bg-black border-b border-zinc-800 sticky top-0 z-50">
        <div className="text-2xl font-black tracking-widest text-red-500">
          VALORANT
        </div>
        <ul className="hidden md:flex gap-8 text-sm font-semibold
                       uppercase tracking-wide text-zinc-300">
          <li className="hover:text-red-500 transition cursor-pointer">Home</li>
          <li className="hover:text-red-500 transition cursor-pointer">Agents</li>
          <li className="hover:text-red-500 transition cursor-pointer">Maps</li>
          <li className="hover:text-red-500 transition cursor-pointer">Ranked</li>
          <li className="hover:text-red-500 transition cursor-pointer">News</li>
        </ul>
        <a className="hidden md:inline-block bg-red-600 text-white px-6 py-2
                      font-bold uppercase text-sm tracking-wide
                      hover:bg-red-700 transition cursor-pointer">
          Play Now
        </a>
      </nav>

      {/* ============ HERO ============ */}
      <section className="relative bg-zinc-950 px-6 md:px-16 py-24
                          flex flex-col md:flex-row items-center gap-12
                          border-b border-zinc-800">
        <div className="flex-1">
          <span className="inline-block bg-red-600/20 text-red-500 text-xs
                           font-bold uppercase tracking-widest px-4 py-1
                           border border-red-600 mb-5">
            Free To Play Tactical Shooter
          </span>

          <h1 className="text-5xl md:text-6xl font-black uppercase
                         leading-tight mb-6">
            Defy The Limits
          </h1>

          <p className="text-zinc-400 text-lg mb-8 max-w-lg">
            A 5v5 character-based tactical shooter. Sharp gunplay meets
            unique agent abilities. Every round matters.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center
                          md:justify-start">
            <a className="bg-red-600 text-white px-8 py-3 font-bold uppercase
                          tracking-wide hover:bg-red-700 transition
                          cursor-pointer text-center">
              Play For Free
            </a>
            <a className="border border-zinc-600 px-8 py-3 font-bold uppercase
                          tracking-wide hover:border-red-500 hover:text-red-500
                          transition cursor-pointer text-center">
              Watch Trailer
            </a>
          </div>
        </div>

        <div className="w-full h-72 md:h-96 flex-1">
          <img
            src={valomap}
            alt="Valorant map key art"
            className="w-full h-full object-cover border border-zinc-700"
          />
        </div>
      </section>

      {/* ============ STATS STRIP ============ */}
      <section className="bg-black px-6 md:px-16 py-10 grid grid-cols-2
                          md:grid-cols-4 gap-6 text-center border-b border-zinc-800">
        <div>
          <div className="text-3xl md:text-4xl font-black text-red-500">20+</div>
          <div className="text-xs uppercase tracking-widest text-zinc-400 mt-1">
            Agents
          </div>
        </div>
        <div>
          <div className="text-3xl md:text-4xl font-black text-red-500">9</div>
          <div className="text-xs uppercase tracking-widest text-zinc-400 mt-1">
            Maps
          </div>
        </div>
        <div>
          <div className="text-3xl md:text-4xl font-black text-red-500">8</div>
          <div className="text-xs uppercase tracking-widest text-zinc-400 mt-1">
            Rank Tiers
          </div>
        </div>
        <div>
          <div className="text-3xl md:text-4xl font-black text-red-500">15M+</div>
          <div className="text-xs uppercase tracking-widest text-zinc-400 mt-1">
            Active Players
          </div>
        </div>
      </section>

      {/* ============ AGENTS ============ */}
      <section className="px-6 md:px-16 py-20">
        <div className="text-center max-w-xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-black uppercase mb-4">
            Choose Your Agent
          </h2>
          <p className="text-zinc-400">
            Creators, gunslingers, and vanguards. Pick your role.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-zinc-900 border border-zinc-800 p-8
                          hover:border-red-600 transition cursor-pointer">
            <img
              src={raze}
              alt="Raze"
              className="w-full h-72 md:h-80 object-cover object-top
                         bg-zinc-800 mb-6"
            />
            <h3 className="text-xl font-black uppercase mb-2">Raze</h3>
            <p className="text-xs uppercase tracking-widest text-red-500 mb-3">
              Duelist
            </p>
            <p className="text-sm text-zinc-400">
              Brazil's explosive expert. Raze blasts enemies out of cover with
              Paint Shells and Boom Bot, then rockets in for the kill.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 p-8
                          hover:border-red-600 transition cursor-pointer">
            <img
              src={astra}
              alt="Astra"
              className="w-full h-72 md:h-80 object-cover object-top
                         bg-zinc-800 mb-6"
            />
            <h3 className="text-xl font-black uppercase mb-2">Astra</h3>
            <p className="text-xs uppercase tracking-widest text-red-500 mb-3">
              Controller
            </p>
            <p className="text-sm text-zinc-400">
              Ghana's cosmic controller. Astra places stars across the map,
              then pulls, smokes, and stuns entire sites from astral form.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 p-8
                          hover:border-red-600 transition cursor-pointer">
            <img
              src={chamber}
              alt="Chamber"
              className="w-full h-72 md:h-80 object-cover object-top
                         bg-zinc-800 mb-6"
            />
            <h3 className="text-xl font-black uppercase mb-2">Chamber</h3>
            <p className="text-xs uppercase tracking-widest text-red-500 mb-3">
              Sentinel
            </p>
            <p className="text-sm text-zinc-400">
              France's armed designer. Chamber locks down angles with his
              Trademark and Headhunter, and teleports out of danger in style.
            </p>
          </div>
        </div>
      </section>

      {/* ============ MAPS / ABOUT ============ */}
      <section className="px-6 md:px-16 py-20 flex flex-col md:flex-row
                          items-center gap-12 border-t border-zinc-800">
        <div className="w-full h-72 md:h-96 flex-1">
          <img
            src={mapBottom}
            alt="Valorant map callout"
            className="w-full h-full object-cover border border-zinc-700"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-black uppercase mt-2 mb-5">
            Fight Across Iconic Maps
          </h2>
          <p className="text-zinc-400 mb-6">
            Each map is a playground for different tactics. Learn every
            angle, master every callout.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-red-500"></span>
              9 unique maps with rotating map pool
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-red-500"></span>
              Custom callouts and lineup spots for every site
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-red-500"></span>
              New maps added every act
            </li>
          </ul>
        </div>
      </section>

      {/* ============ RANKED / TESTIMONIALS ============ */}
      <section className="px-6 md:px-16 py-20 bg-red-600 text-white">
        <div className="text-center max-w-xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-black uppercase mb-4">
            Climb The Ranks
          </h2>
          <p className="text-red-100">
            From Iron to Radiant. Prove yourself every match.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-black/20 backdrop-blur p-8 border border-white/20">
            <p className="mb-6 italic">
              "Every match feels different. The abilities completely change
              how you approach each round."
            </p>
            <div className="flex items-center gap-4">
              <img
                src={tenz}
                alt="TenZ"
                className="w-14 h-14 object-cover rounded-full
                           border border-white/30 shrink-0"
              />
              <div>
                <div className="font-bold uppercase tracking-wide">TenZ</div>
                <div className="text-sm text-red-100 uppercase tracking-widest">
                  Radiant
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black/20 backdrop-blur p-8 border border-white/20">
            <p className="mb-6 italic">
              "The gunplay is unmatched. Clean, precise, and rewards actual
              aim skill."
            </p>
            <div className="flex items-center gap-4">
              <img
                src={aspas}
                alt="aspas"
                className="w-14 h-14 object-cover rounded-full
                           border border-white/30 shrink-0"
              />
              <div>
                <div className="font-bold uppercase tracking-wide">aspas</div>
                <div className="text-sm text-red-100 uppercase tracking-widest">
                  Immortal 3
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black/20 backdrop-blur p-8 border border-white/20">
            <p className="mb-6 italic">
              "Best free-to-play shooter out there. The agent variety keeps
              it fresh every season."
            </p>
            <div className="flex items-center gap-4">
              <img
                src={tarik}
                alt="tarik"
                className="w-14 h-14 object-cover rounded-full
                           border border-white/30 shrink-0"
              />
              <div>
                <div className="font-bold uppercase tracking-wide">tarik</div>
                <div className="text-sm text-red-100 uppercase tracking-widest">
                  Radiant
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="px-6 md:px-16 py-20 text-center bg-zinc-950">
        <h2 className="text-4xl md:text-5xl font-black uppercase mb-6">
          Ready To Defy?
        </h2>
        <p className="text-zinc-400 mb-8 max-w-lg mx-auto">
          Download VALORANT for free and jump into your first match today.
        </p>
        <a className="inline-block bg-red-600 text-white px-10 py-3
                      font-bold uppercase tracking-wide hover:bg-red-700
                      transition cursor-pointer">
          Download Now
        </a>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="bg-black text-zinc-400 px-6 md:px-16 py-12
                         border-t border-zinc-800">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-white font-black uppercase tracking-widest
                           text-sm mb-4">
              Valorant
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-red-500 cursor-pointer">About</li>
              <li className="hover:text-red-500 cursor-pointer">News</li>
              <li className="hover:text-red-500 cursor-pointer">Careers</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-black uppercase tracking-widest
                           text-sm mb-4">
              Game
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-red-500 cursor-pointer">Agents</li>
              <li className="hover:text-red-500 cursor-pointer">Maps</li>
              <li className="hover:text-red-500 cursor-pointer">Patch Notes</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-black uppercase tracking-widest
                           text-sm mb-4">
              Resources
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-red-500 cursor-pointer">Support</li>
              <li className="hover:text-red-500 cursor-pointer">Community</li>
              <li className="hover:text-red-500 cursor-pointer">Esports</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-black uppercase tracking-widest
                           text-sm mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-red-500 cursor-pointer">Discord</li>
              <li className="hover:text-red-500 cursor-pointer">Twitter</li>
              <li className="hover:text-red-500 cursor-pointer">YouTube</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-zinc-800 pt-6 text-center
                        text-sm text-zinc-600">
          (c) 2026 Riot Games, Inc. Fan-made practice project.
        </div>
      </footer>
    </div>
  );
}