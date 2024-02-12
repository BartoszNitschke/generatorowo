import React from "react";

export const Knowledge = () => {
  return (
    <div
      name="wiedza"
      className="w-full min-h-screen bg-gradient-to-b from-[#131313] to-[#0a0a0a] flex justify-center items-start flex-col"
    >
      <div className="w-[90%] mx-auto text-white">
        <h1 className="text-[#ebdb04] text-[48px] font-bold">
          Co musisz wiedzieć...
        </h1>
        <h2 className="text-[#ebdb04] text-[28px] font-semibold mt-16">
          GENERATORY PRĄDOTWÓRCZE - ZASTOSOWANIE ORAZ PODŁĄCZENIE
        </h2>
        <p className="mt-3 text-[18px]">
          Wszystkie generatory marki{" "}
          <span className="font-semibold">KALTMANN</span> posiadają AVR, który
          odpowiada za stabilizację napięcia na gniazdach zasilających. W
          generatorach jedno fazowych napięcie 230V i częstotliwość 50 Hz W
          generatorach trój fazowych napięcia 230/400 V i częstotliwość 50 Hz Za
          częstotliwość 50 Hz odpowiadają obroty wirnika (3000 obrotów).
        </p>
        <p className="mt-3 text-[18px] text-[#ebdb04] font-semibold">
          Każdy generator przed uruchomieniem musi mieć podłączone uziemienie do
          zacisku uziemienia na panelu !!! Nie podłączenie uziemienia grozi
          porażeniem prądem elektrycznym, uszkodzeniem odbiorników do niego
          podłączonych lub generatora.
        </p>

        <h2 className="text-[#ebdb04] text-[28px] font-semibold mt-16">
          GENERATORY INDUKCYJNE - Z PRĄDNICĄ WYSOKONAPIĘCIOWĄ
        </h2>
        <p className="mt-3 text-[18px]">
          Pod generator można podłączyć każde urządzenie nie posiadające
          zaawansowanej elektroniki z pominięciem starego tupu urządzeń z
          zasilaczami transformatorowymi.
        </p>

        <h2 className="text-[#ebdb04] text-[28px] font-semibold mt-16">
          GENERATORY INWERTEROWE - Z PRĄDNICĄ NISKONAPIĘCIOWĄ I PRZETWORNICĄ
          IMPULSOWĄ (INWERTEREM)
        </h2>
        <p className="mt-3 text-[18px]">
          Generatory stworzone z myślą o najnowszych urządzeniach
          elektronicznych typu: komputery, piece sterowane komputerem, kasy
          fiskalne, telewizory LCD,LED, żarówki LED i ENERGOOSZCZĘDNE, można
          także podłączać elektro narzędzia.
        </p>

        <h2 className="text-[#ebdb04] text-[28px] font-semibold mt-16">
          PRZELICZANIE MOCY PRZY OBCIĄŻENIU GENERATORA
        </h2>
        <p className="mt-3 text-[18px]">
          Każde urządzenie, które posiada silnik elektryczny w momencie startu
          ma chwilowy pobór prądu minimum dwa razy większy niż ten, który jest
          podawany na tabliczce znamionowej. W zależności od typu silnika
          (indukcyjny z cewką lub kondensatorem rozruchowym, szczotkowy z
          kondensatorem) może mieć chwilowo nawet do 3,5 razy większy pobór
          prądu. Trzeba pamiętać o tym że pobór prądu przez urządzenie może być
          zmienny w zależności od obciążenia urządzenia, ale nie większy niż 3,5
          razy od tego co jest podane na tabliczce znamionowej urządzenia. W
          szczególnych przypadkach i przy maksymalnym obciążeniu urządzenia prąd
          szczytowy może być nawet do sześciu razy większy niż deklarowany przez
          producenta urządzenia. Nie dotyczy to urządzeń: czajniki elektryczne,
          grzejniki z grzałką ale bez dmuchawy, w tych urządzeniach pobór prądu
          jest zawsze stały i nie zmienny. (urządzenia oporowe). W generatorach
          trójfazowych gniazdo 230V wyprowadzone jest z jednej z trzech faz i
          jest na nim jedna trzecia mocy całkowitej generatora(jeśli generator
          trój fazowy ma 6kW) to na gnieździe 230V będzie 2kW.
        </p>

        <p className="mt-3 text-[18px] text-[#ebdb04] font-semibold">
          Zawsze przed uruchomieniem generatora trzeba się upewnić że nie jest
          do niego podłączony żaden z odbiorników !!!
        </p>

        <p className="mt-3 text-[18px]">
          Generator prądotwórczy jest alternatywnym źródłem zasilania. Używanym
          w czasie zaniku energii elektrycznej dostarczanej przez lokalnego
          dostawcę. Generatory z prądnicą indukcyjną służą do zasilania urządzeń
          elektrycznych: wiertarki, szlifierki, piły, przecinarki oraz
          urządzenia elektroniczne starszego typu. Generatory inwerterowe służą
          do zasilania wszystkich wyżej wymienionych urządzeń ale przede
          wszystkim do urządzeń elektronicznych nowszej generacji a w
          szczególności sterowniki pieców, komputery, zasilacze awaryjne UPS,
          przyrządy medyczne wspomagające funkcje życiowe. Wszystkie generatory
          z silnikiem spalinowym chłodzonym powietrzem nie są przystosowane do
          pracy ciągłej. Generator po wypaleniu całego zbiornika paliwa powinien
          zostać wyłączony na przynajmniej pół godziny w celu ostygnięcia. Po
          ostygnięciu generatora możemy uzupełnić paliwo w zbiorniku, sprawdzić
          poziom oleju, wyczyścić generator i ponownie go uruchomić. Utrzymanie
          generatora w czystości, regularne wymiany oleju oraz utrzymanie.
        </p>

        <h2 className="text-[#ebdb04] text-[28px] font-semibold mt-16">
          GENERATORY MARKI <span className="font-semibold">KALTMANN</span> SĄ
          WYRYWKOWO TESTOWANE!
        </h2>
        <p className="mt-3 text-[18px] pb-4">
          Każdy z testowanych generatorów przechodzi test silnika spalinowego
          oraz prądnicy i instalacji elektrycznej. Czas całego testu to 400
          roboczo godzin. Podczas wykonywania testu generator ma wymieniany olej
          oraz czyszczony/ wymieniany filtr powietrza, świece zapłonową zgodnie
          z instrukcją użytkownika. Przy testach prądnicy użyto elementu
          oporowego o wartości 60% mocy prądnicy generatora w trakcie długiego
          testu i podczas chwilowego testu obciążenie 100% mocy prądnicy.
        </p>
        <div className="flex items-center justify-center">
          <button className="mt-10 relative md:inline-flex items-center justify-center w-[250px] h-[60px] text-[20px] p-4 px-6 py-3 overflow-hidden font-semibold  transition duration-300 ease-out border-2 rounded-full group">
            <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-y-full bg-jade group-hover:translate-y-0 ease">
              <svg
                width="45px"
                height="45px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5535 16.5061C12.4114 16.6615 12.2106 16.75 12 16.75C11.7894 16.75 11.5886 16.6615 11.4465 16.5061L7.44648 12.1311C7.16698 11.8254 7.18822 11.351 7.49392 11.0715C7.79963 10.792 8.27402 10.8132 8.55352 11.1189L11.25 14.0682V3C11.25 2.58579 11.5858 2.25 12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V14.0682L15.4465 11.1189C15.726 10.8132 16.2004 10.792 16.5061 11.0715C16.8118 11.351 16.833 11.8254 16.5535 12.1311L12.5535 16.5061Z"
                  fill="#ebdb04"
                  stroke="#ebdb04"
                  strokeWidth="0.5"
                />
                <path
                  d="M3.75 15C3.75 14.5858 3.41422 14.25 3 14.25C2.58579 14.25 2.25 14.5858 2.25 15V15.0549C2.24998 16.4225 2.24996 17.5248 2.36652 18.3918C2.48754 19.2919 2.74643 20.0497 3.34835 20.6516C3.95027 21.2536 4.70814 21.5125 5.60825 21.6335C6.47522 21.75 7.57754 21.75 8.94513 21.75H15.0549C16.4225 21.75 17.5248 21.75 18.3918 21.6335C19.2919 21.5125 20.0497 21.2536 20.6517 20.6516C21.2536 20.0497 21.5125 19.2919 21.6335 18.3918C21.75 17.5248 21.75 16.4225 21.75 15.0549V15C21.75 14.5858 21.4142 14.25 21 14.25C20.5858 14.25 20.25 14.5858 20.25 15C20.25 16.4354 20.2484 17.4365 20.1469 18.1919C20.0482 18.9257 19.8678 19.3142 19.591 19.591C19.3142 19.8678 18.9257 20.0482 18.1919 20.1469C17.4365 20.2484 16.4354 20.25 15 20.25H9C7.56459 20.25 6.56347 20.2484 5.80812 20.1469C5.07435 20.0482 4.68577 19.8678 4.40901 19.591C4.13225 19.3142 3.9518 18.9257 3.85315 18.1919C3.75159 17.4365 3.75 16.4354 3.75 15Z"
                  fill="#ebdb04"
                  stroke="#ebdb04"
                  strokeWidth="0.5"
                />
              </svg>
            </span>
            <span class="absolute flex items-center justify-center w-full h-full text-jade transition-all duration-300 transform group-hover:translate-y-full ease">
              Pobierz PDF
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
