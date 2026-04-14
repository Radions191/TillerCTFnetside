export default function MainPage() {
  return (
    <div className="text-white">
      <div
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/BackgroundOriginal.png')",
          backgroundPositionY: "1px",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/40 to-black"></div>

        <div className="relative flex items-end  justify-center h-full text-4xl font-bold"></div>
      </div>

      <div className="bg-black min-h-screen pt-40 px-10 pb-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div id="om-oss" className="text-center">
            <h2 className="text-3xl text-green-700">Hva er CTF?</h2>
            <p className="mt-4 opacity-80 text-xl max-w-md">
              CTF (Capture the Flag) er en konkurranse innen cybersikkerhet hvor
              deltakerne løser oppgaver for å finne skjulte "flagg". Oppgavene
              kan innebære analyse av programmer, nettsider eller systemer.
            </p>
          </div>

          <div id="hvorfor" className="text-center">
            <h2 className="text-3xl text-green-700">Hvorfor CTF?</h2>
            <p className="mt-4 opacity-80 text-xl font-Aldrich max-w-md">
              CTF brukes til læring, konkurranse og rekruttering av talenter.
              Deltakere utvikler ferdigheter innen problemløsning, programmering
              og sikkerhet.
            </p>
          </div>

          <div id="kategorier" className="text-center">
            <h2 className="text-3xl justify-center text-green-700">
              Kategorier
            </h2>
            <p className="mt-4 opacity-80 text-xl font-Aldrich max-w-md">
              Vanlige kategorier inkluderer kryptografi, web-sikkerhet,
              forensics, reverse engineering, OSINT og nettverk.
            </p>
          </div>

          <div id="tillerctf" className="text-center">
            <h2 className="text-3xl text-green-700">Om TillerCTF</h2>
            <p className="mt-4 opacity-80 text-xl font-Aldrich max-w-md">
              TillerCTF arrangeres siden 2023 og har som mål å skape en
              spennende konkurranse tilpasset elevenes nivå, samt øke interessen
              for cybersikkerhet på skolen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
