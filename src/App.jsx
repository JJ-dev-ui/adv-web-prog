import "./App.css";
// import reyna from "./assets/reyna.jpg";
// import valoMap from "./assets/valoMap.jpg"
// import zhai from "./assets/zhai.png"
// import lance from "./assets/lance.png"
// import jacob from "./assets/jacob.png"
function App() {
  return (
    <>
      <nav
        className="flex items-center justify-between px-6 py-5 md:px-16
                   bg-black border-b border-zinc-800 sticky top-0 z-50"
      >
        <div className="text-2xl font-black tracking-widest uppercase">
          <span className="text-white">VAL</span>
          <span className="text-red-500">ORANT</span>
        </div>

        <ul
          className="hidden md:flex gap-8 text-sm font-semibold
                    uppercase items-center text-zinc-300"
        >
          <li>
            <a href="#" className="tracking-wide transition hover:text-red-500">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="tracking-wide transition hover:text-red-500">
              Agents
            </a>
          </li>
          <li>
            <a href="#" className="tracking-wide transition hover:text-red-500">
              Maps
            </a>
          </li>
          <li>
            <a href="#" className="tracking-wide transition hover:text-red-500">
              Ranked
            </a>
          </li>
          <li>
            <a href="#" className="tracking-wide transition hover:text-red-500">
              News
            </a>
          </li>
        </ul>
        <a
          href="#"
          className="hidden md:inline-block bg-red-600 text-white px-6 py-2
                     font-bold uppercase text-sm tracking-wide
                     hover:bg-red-700 transition"
        >
          Play Now
        </a>
      </nav>

      <section
        className="relative bg-zinc-950 px-6 md:px-16 py-24
                   flex flex-col md:flex-row items-center gap-12
                   border-b border-zinc-800"
      >
        <div className="w-full md:w-1/2 flex flex-col items-start">
          <span
            className="inline-block bg-red-600/20 text-red-500 text-xs
                       font-bold uppercase tracking-widest px-4 py-1
                       border border-red-600 mb-10"
          >
            Free To Play Tactical Shooter
          </span>
          <h1
            className="text-5xl md:text-6xl font-black uppercase
                       leading-tight mb-6"
          >
            <span className="block text-white">Defy</span>
            <span className="block mt-3">
              <span className="text-white">The </span>
              <span className="text-red-500">Limits</span>
            </span>
          </h1>
          <p className="mb-10 max-w-[590px] text-base md:text-lg leading-relaxed text-zinc-400">
            A 5v5 character-based tactical shooter. Precise gunplay meets unique
            agent abilities in every round.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center
                       md:justify-start"
          >
            <a
              href="#"
              className="bg-red-600 text-white px-8 py-3 font-bold uppercase
                         tracking-wide hover:bg-red-700 transition text-center"
            >
              Play For Free
            </a>

            <a
              href="#"
              className="border border-zinc-600 px-8 py-3 font-bold uppercase
                         tracking-wide hover:border-red-500 hover:text-red-500
                         transition text-center text-white"
            >
              Watch Trailer
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 h-72 md:h-[480px]">
          {/* <img
            src={reyna}
            alt="Reyna"
            className="w-full h-full object-cover border border-zinc-700"
          /> */}
        </div>
      </section>

      <section
        className="bg-black px-6 md:px-16 py-10 grid grid-cols-2
                   md:grid-cols-4 gap-6 text-center border-b border-zinc-800"
      >
        <div className="py-5">
          <div className="text-3xl font-black text-red-500">20+</div>
          <div className="mt-2 text-xs font-bold uppercase tracking-widest text-zinc-500">
            Agents
          </div>
        </div>
        <div className="py-5">
          <div className="text-3xl font-black text-red-500">9</div>
          <div className="mt-2 text-xs font-bold uppercase tracking-widest text-zinc-500">
            Maps
          </div>
        </div>
        <div className="py-5">
          <div className="text-3xl font-black text-red-500">8</div>
          <div className="mt-2 text-xs font-bold uppercase tracking-widest text-zinc-500">
            Rank Tiers
          </div>
        </div>
        <div className="py-5">
          <div className="text-3xl font-black text-red-500">15M+</div>
          <div className="mt-2 text-xs font-bold uppercase tracking-widest text-zinc-500">
            Active Players
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 border-b border-zinc-800 px-6 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-white mb-5">
            Choose Your Agent
          </h2>

          <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
            Every agent brings a unique set of abilities. Master your role and
            outplay the enemy team.
          </p>
        </div>
      </section>

      <section className="bg-zinc-950 px-6 md:px-14 py-6 pb-20 border-b border-zinc-800">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-zinc-900 border border-zinc-800 px-9 py-9 min-h-[228px] hover:border-red-600">
            <div
              className="w-[52px] h-[52px] border border-red-600
                        bg-red-950/30 flex items-center justify-center
                        text-red-500 font-black text-lg mb-7"
            >
              DL
            </div>

            <h4 className="text-white text-2xl font-black uppercase mb-3">
              Duelist
            </h4>

            <p className="text-zinc-400 text-base leading-relaxed">
              Self-sufficient fraggers who create and take space for their team
              to advance.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 px-9 py-9 min-h-[228px] hover:border-red-600">
            <div
              className="w-[52px] h-[52px] border border-red-600
                        bg-red-950/30 flex items-center justify-center
                        text-red-500 font-black text-lg mb-7"
            >
              CT
            </div>

            <h4 className="text-white text-2xl font-black uppercase mb-3">
              Controller
            </h4>

            <p className="text-zinc-400 text-base leading-relaxed">
              Area-denial specialists who cut off sightlines and control the
              pace of engagements.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 px-9 py-9 min-h-[228px] hover:border-red-600">
            <div
              className="w-[52px] h-[52px] border border-red-600
                        bg-red-950/30 flex items-center justify-center
                        text-red-500 font-black text-lg mb-7"
            >
              SN
            </div>

            <h4 className="text-white text-2xl font-black uppercase mb-3">
              Sentinel
            </h4>

            <p className="text-zinc-400 text-base leading-relaxed">
              Defensive experts who watch flanks, plant traps, and hold down the
              fort.
            </p>
          </div>
        </div>
      </section>

      <section
        className="bg-black px-6 md:px-14 py-20
                  grid grid-cols-1 md:grid-cols-2
                  items-center gap-12 border-b border-zinc-800"
      >
        <div className="w-full h-[420px] border border-zinc-700 overflow-hidden">
          {/* <img
            src={valoMap}
            alt="Valorant Map"
            className="w-full h-full object-cover"
          /> */}
        </div>

        <div className="w-full">
          <p
            className="text-red-500 text-sm font-black uppercase
                      tracking-widest mb-3"
          >
            The Battlefield
          </p>

          <h2
            className="text-white text-3xl md:text-4xl
                      font-black uppercase leading-tight mb-6"
          >
            Fight Across Iconic Maps
          </h2>
          <p
            className="text-zinc-400 text-base md:text-lg
                      leading-relaxed mb-7"
          >
            From tight corridors to wide-open sightlines, every map is built
            around tactical positioning, sound cues, and split-second decisions.
          </p>

          <ul className="space-y-4 text-zinc-200">
            <li className="flex items-center gap-4">
              <span className="w-2 h-2 bg-red-500"></span>
              <span>9 unique maps with rotating map pool</span>
            </li>

            <li className="flex items-center gap-4">
              <span className="w-2 h-2 bg-red-500"></span>
              <span>Attacker vs Defender round structure</span>
            </li>

            <li className="flex items-center gap-4">
              <span className="w-2 h-2 bg-red-500"></span>
              <span>Spike plant and defuse objectives</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ==================== RANKED / TESTIMONIALS ==================== */}
      <section className="px-6 md:px-16 py-20 bg-red-600 text-white">
        <div className="text-center max-w-xl mx-auto mb-14">
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-4">
            Climb The Ranks
          </h2>

          <p className="text-lg md:text-xl text-white">
            From Iron to Radiant. Prove yourself in competitive queue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-11">
          <div className="bg-black/20 border border-white/20 p-11">
            <p className="text-lg leading-relaxed mb-14">
              "Every match feels different. The abilities completely change how
              you approach each round."
            </p>

            <div className="flex items-center gap-4">
              {/* <img src={zhai} alt="Zhairris Surell" className="w-14 h-14 object-contain"/> */}
              <div>
                <h3 className="text-lg font-black uppercase">
                  Zhairris Surell
                </h3>
                <p className="text-base">Diamond 2</p>
              </div>
            </div>
          </div>

          <div className="bg-black/20 border border-white/20 p-11">
            <p className="text-lg leading-relaxed mb-8">
              "The gunplay is unmatched. Clean, precise, and rewards actual aim
              skill."
            </p>

            <div className="flex items-center gap-4">
              {/* <img src={jacob} alt="Jacob Casiple" className="w-14 h-14 object-contain"/> */}

              <div>
                <h3 className="text-lg font-black uppercase">Jacob Casiple</h3>

                <p className="text-base">Immortal 1</p>
              </div>
            </div>
          </div>

          <div className="bg-black/20 border border-white/20 p-11">
            <p className="text-lg leading-relaxed mb-8">
              "Best free-to-play shooter out there. The agent variety keeps it
              fresh every season."
            </p>

            <div className="flex items-center gap-4">
              {/* <img src={lance} alt="Lance Villegas" className="w-14 h-14 object-contain"/> */}

              <div>
                <h3 className="text-lg font-black uppercase">Lance Villegas</h3>

                <p className="text-base">Ascendant 3</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-16 py-20 text-center bg-zinc-950">
        <h2 className="mb-7 text-4xl md:text-3xl font-black uppercase text-white">
          Ready to drop in?
        </h2>

        <p className="mx-auto mb-9 max-w-xl text-zinc-400">
          Download now and join millions of players in the fight for Radiant.
        </p>

        <a
          href="#"
          className="inline-block bg-red-600 text-white px-10 py-3
                     font-bold uppercase tracking-wide hover:bg-red-700
                     transition"
        >
          Download Now
        </a>
      </section>

      <footer
        className="bg-black text-zinc-400 px-6 md:px-16 py-12
                   border-t border-zinc-800"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="mb-4 font-black uppercase text-white">Valorant</h3>

            <p className="text-sm text-zinc-600">
              A 5v5 tactical shooter from Riot Games.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase text-white">
              Game
            </h3>
            <div className="flex flex-col">
              <a href="#" className="mb-2 text-sm hover:text-red-500">
                Agents
              </a>
              <a href="#" className="mb-2 text-sm hover:text-red-500">
                Maps
              </a>
              <a href="#" className="mb-2 text-sm hover:text-red-500">
                Ranked
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase text-white">
              Resources
            </h3>
            <div className="flex flex-col">
              <a href="#" className="mb-2 text-sm hover:text-red-500">
                Patch Notes
              </a>
              <a href="#" className="mb-2 text-sm hover:text-red-500">
                Esports
              </a>
              <a href="#" className="mb-2 text-sm hover:text-red-500">
                Support
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase text-white">
              Contact
            </h3>
            <div className="flex flex-col">
              <a href="#" className="mb-2 text-sm hover:text-red-500">
                support@valorant.com
              </a>
              <a href="#" className="mb-2 text-sm hover:text-red-500">
                Riot Games Inc.
              </a>
              <a href="#" className="mb-2 text-sm hover:text-red-500">
                Los Angeles, CA
              </a>
            </div>
          </div>
        </div>

        <div
          className="border-t border-zinc-800 pt-6 text-center
                     text-xs text-zinc-600"
        >
          © 2026 Riot Games, Inc. Fan-made practice project — not affiliated
          with Riot Games.
        </div>
      </footer>
    </>
  );
}

export default App;
