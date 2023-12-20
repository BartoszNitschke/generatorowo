import React from "react";

export const Knowledge = () => {
  return (
    <div
      name="wiedza"
      className="w-full min-h-screen bg-gradient-to-b from-[#131313] to-[#0a0a0a] flex justify-center items-start flex-col"
    >
      <div className="w-[90%] mx-auto text-white">
        <h1 className="text-[#ebdb04] text-[48px] font-bold mt-[150px]">
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
          <button className="text-black bg-[#ebdb04] text-[24px] py-3 px-4 mt-8 mx-auto rounded-xl shadow-md shadow-gray-500 mb-16">
            Pobierz PDF
          </button>
        </div>
      </div>
    </div>
  );
};
