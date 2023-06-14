import { Story, StoryChapter, StoryCharacter } from "./types";
import {
  RzeckiImage,
  SędziaImage,
  AdwokatImage,
  DzieckoImage,
  StawskaImage,
  SłużącaImage,
  BaronowaImage,
  WokulskiImage,
  MaruszewiczImage,
  RozprawaSądowaImage,
  RozprawaSądowaAudio,
} from "../assets";

const ADWOKAT = 1;
const BARONOWA = 2;
const DZIECKO = 3;
const MARUSZEWICZ = 4;
const RZECKI = 5;
const SĘDZIA = 6;
const SŁUŻĄCA = 7;
const STAWSKA = 8;
const WOKULSKI = 9;
const KOBIETA_1 = 10;
const KOBIETA_2 = 11;
const MĘŻCZYZNA = 12;
const WIRSKI = 13;

const characters: Record<number, StoryCharacter> = {
  [ADWOKAT]: {
    name: "Adwokat",
    image: AdwokatImage,
  },
  [BARONOWA]: {
    name: "Baronowa Krzeszowska",
    image: BaronowaImage,
  },
  [DZIECKO]: {
    name: "Helunia",
    image: DzieckoImage,
  },
  [MARUSZEWICZ]: {
    name: "Maruszewicz",
    image: MaruszewiczImage,
  },
  [RZECKI]: {
    name: "Ignacy Rzecki",
    image: RzeckiImage,
  },
  [SĘDZIA]: {
    name: "Sędzia",
    image: SędziaImage,
  },
  [SŁUŻĄCA]: {
    name: "Służąca",
    image: SłużącaImage,
  },
  [STAWSKA]: {
    name: "Helena Stawska",
    image: StawskaImage,
  },
  [WOKULSKI]: {
    name: "Stanisław Wokulski",
    image: WokulskiImage,
  },
  [KOBIETA_1]: {
    name: "Kobieta 1",
  },
  [KOBIETA_2]: {
    name: "Kobieta 2",
  },
  [MĘŻCZYZNA]: {
    name: "Mężczyzna",
  },
  [WIRSKI]: {
    name: "Wirski",
  },
};

const chapters: Record<string, StoryChapter> = {
  "rozprawa-sądowa": {
    name: "Rozprawa Sądowa",
    description:
      "Baronowej Krzeszowskiej zniknęła lalka - jedyne, co pozostało jej po zmarłej córce. Jej podejrzenie pada na Helenę Stawską, córce której ta lalka bardzo się spodobała. Ostatecznie baronowa błędnie oskarża Stawską i składa na nią pozew do sądu. Pomóż Stawskiej wygrać proces sądowy i nie zostać bezpodstawnie ukaraną.",
    audio: RozprawaSądowaAudio,
    image: RozprawaSądowaImage,
    dialogs: {
      1: {
        text: "Sędzia przez parę minut coś pisał, a skończywszy zawiadomił obecnych, że teraz toczyć się będzie sprawa",
        characterId: SĘDZIA,
        choices: [
          { text: "Krzeszowskiej przeciw Stawskiej o kradzież lalki", next: 2 },
          { text: "Wokulskiego przeciw Stawskiej o kradzież lalki", next: 98 },
        ],
      },
      2: {
        text: "Sędzia zawezwał obie strony oraz świadków na środek sali.",
        characterId: SĘDZIA,
        choices: [{ text: "Dalej", next: 3 }],
      },
      3: {
        text: "Rzecki siada w ławce, przysłuchując się rozmowie dwóch kobiet. Jedna z kumoszek tłumaczyła drugiej...",
        characterId: RZECKI,
        choices: [{ text: "Dalej", next: 4 }],
      },
      4: {
        text: "To widzi pani: ta ładna pani ukradła tamtej pani lalkę...",
        characterId: KOBIETA_1,
        choices: [{ text: "Dalej", next: 5 }],
      },
      5: {
        text: "Także miała się na co łakomić!...",
        characterId: KOBIETA_2,
        choices: [{ text: "Dalej", next: 6 }],
      },
      6: {
        text: "Ha, trudno. Nie każdy może kraść magle...",
        characterId: KOBIETA_1,
        choices: [{ text: "Dalej", next: 7 }],
      },
      7: {
        text: "To pani ukradłaś magle. Nie ten złodziej, co zabiera swoją własność, ale ten, co da piętnaście rubli zadatku i myśli, że już kupił...",
        characterId: MĘŻCZYZNA,
        choices: [{ text: "Dalej", next: 8 }],
      },
      8: {
        text: "Helunia wbiega na salę i chwyta matkę za rękę",
        characterId: DZIECKO,
        choices: [{ text: "Dalej", next: 9 }],
      },
      9: {
        text: "Mamo, czego ten pan kazał mamie tu przyjść?... Ja coś powiem do uszka: pewnie mama była niegrzeczna i teraz będzie stać w kącie...",
        characterId: DZIECKO,
        choices: [{ text: "Dalej", next: 10 }],
      },
      10: {
        text: "To wyuczone!...",
        characterId: KOBIETA_1,
        choices: [{ text: "Dalej", next: 11 }],
      },
      11: {
        text: "Żebyś pani tak zdrowa była!",
        characterId: MĘŻCZYZNA,
        choices: [{ text: "Dalej", next: 12 }],
      },
      12: {
        text: "Pan będziesz zdrów za moją krzywdę...",
        characterId: KOBIETA_1,
        choices: [{ text: "Dalej", next: 13 }],
      },
      13: {
        text: "A pani skonasz na konwulsje i będą cię w piekle maglować na moich maglach",
        characterId: MĘŻCZYZNA,
        choices: [
          { text: "Sędzia ucisza tłum", next: 15 },
          {
            text: "Rzecki wtrąca się do kłótni stając w obronie Stawskiej",
            next: 14,
          },
        ],
      },
      14: {
        text: "Panie Rzecki! Zaburza pan porządek na sali sądowej! Nie możemy tak rozpocząć procesu. Będę niestety musiał pana stąd wyprosić. Proszę opuścić salę.",
        characterId: SĘDZIA,
        choices: [{ text: "Dalej", next: 99 }],
      },
      15: {
        text: "Cisza na sali! Co pani Krzeszowska mówi o sprawie?",
        characterId: SĘDZIA,
        choices: [{ text: "Dalej", next: 16 }],
      },
      16: {
        text: "Wysłuchaj mnie, panie sędzio! Po zmarłym dziecku została mi, jako najdroższa pamiątka, lalka, która bardzo podobała się tej oto pani i jej córce",
        characterId: BARONOWA,
        choices: [{ text: "Dalej", next: 17 }],
      },
      17: {
        text: "Oskarżona była u pani?",
        characterId: SĘDZIA,
        choices: [{ text: "Dalej", next: 18 }],
      },
      18: {
        text: "Tak, wynajmowałam ją do szycia...",
        characterId: BARONOWA,
        choices: [{ text: "Dalej", next: 19 }],
      },
      19: {
        text: "Alem jej nic nie zapłaciła!",
        characterId: WIRSKI,
        choices: [{ text: "Dalej", next: 20 }],
      },
      20: {
        text: "Ciszej! Proszę kontynuować",
        characterId: SĘDZIA,
        choices: [{ text: "Dalej", next: 21 }],
      },
      21: {
        text: "W dniu, w którym tę panią oddaliłam od siebie, zginęła mi lalka. Myślałam, że umrę z żalu, i zaraz na nią powzięłam podejrzenie...",
        characterId: BARONOWA,
        choices: [{ text: "Dalej", next: 22 }],
      },
      22: {
        text: "Miałam dobre przeczucie, gdyż w kilka dni później przyjaciel mój, pan Maruszewicz, zobaczył z okna, że ta pani (która mieszka vis a vis niego) ma u siebie moją lalkę i dla niepoznaki przebiera ją w inną suknię.",
        characterId: BARONOWA,
        choices: [{ text: "Dalej", next: 23 }],
      },
      23: {
        text: "Wtedy poszłam do jego mieszkania z moim doradcą prawnym i zobaczyłam przez lornetkę, że moja lalka jest rzeczywiście u tej pani. Na drugi dzień więc udałam się do niej, zabrałam lalkę, którą tu widzę na stole, i podałam skargę.",
        characterId: BARONOWA,
        choices: [{ text: "Dalej", next: 24 }],
      },
      24: {
        text: "A pan Maruszewicz jest pewny, że to ta sama lalka, która była u pani Krzeszowskiej?",
        characterId: SĘDZIA,
        choices: [{ text: "Dalej", next: 25 }],
      },
      25: {
        text: "Marusiewicz wstał i powiedział:",
        characterId: MARUSZEWICZ,
        choices: [
          {
            text: "To jest... właściwie mówiąc... pewności nie mam żadnej",
            next: 27,
          },
          { text: "Jestem pewny, widziałem na własne oczy!", next: 26 },
        ],
      },
      26: {
        text: "Zatem świadków jest dużo. Jeśli lalka rzeczywiście wygląda podobnie - w co jestem skłonny uwierzyć - to muszę przyznać winę pannie Helenie Stawskiej.",
        characterId: SĘDZIA,
        choices: [{ text: "Dalej", next: 100 }],
      },
      27: {
        text: "Tak dlaczegóż pan Maruszewicz powiedział to pani Krzeszowskiej?",
        characterId: SĘDZIA,
        choices: [{ text: "Dalej", next: 28 }],
      },
      28: {
        text: "Właściwie... ja nie w tym znaczeniu...",
        characterId: MARUSZEWICZ,
        choices: [{ text: "Dalej", next: 29 }],
      },
      29: {
        text: "Nie kłam pan! Przybiegłeś do mnie, śmiejąc się, powiedziałeś, że Stawka ukradła lalkę i że to do niej podobne...",
        characterId: BARONOWA,
        choices: [{ text: "Dalej", next: 30 }],
      },
      30: {
        text: "Podlec!",
        characterId: WOKULSKI,
        choices: [{ text: "Dalej", next: 31 }],
      },
      31: {
        text: "U was była ta lalka?",
        characterId: SĘDZIA,
        choices: [{ text: "Dalej", next: 32 }],
      },
      32: {
        text: "Stawska nieśmiało powiedziała:",
        characterId: STAWSKA,
        choices: [
          { text: "Tak...", next: 101 },
          { text: "Nie wiem która...", next: 33 },
        ],
      },
      33: {
        text: "Sędzia wyciągnął do niej lalkę, ale służąca milczała mrugając oczyma i załamując ręce.",
        characterId: SĘDZIA,
        choices: [{ text: "Dalej", next: 34 }],
      },
      34: {
        text: "Ach, to Mimi!...",
        characterId: DZIECKO,
        choices: [{ text: "Dalej", next: 35 }],
      },
      35: {
        text: "O, panie sędzio! Córka świadczy przeciw matce...",
        characterId: BARONOWA,
        choices: [{ text: "Dalej", next: 36 }],
      },
      36: {
        text: "Znasz tę lalkę?",
        characterId: SĘDZIA,
        choices: [{ text: "Dalej", next: 37 }],
      },
      37: {
        text: "O, znam!... Zupełnie taka sama była u pani tam w pokoiku...",
        characterId: DZIECKO,
        choices: [{ text: "Dalej", next: 38 }],
      },
      38: {
        text: "Czy to jest ta sama?",
        characterId: SĘDZIA,
        choices: [{ text: "Dalej", next: 39 }],
      },
      39: {
        text: "O, nie, nie ta... Tamta miała...",
        characterId: DZIECKO,
        choices: [
          {
            text: "...popielatą sukienkę i czarne buciki, a ta ma brązowe buciki!...",
            next: 41,
          },
          {
            text: "...czerwoną sukienkę i czarne buciki, a ta ma brązowe buciki!...",
            next: 40,
          },
        ],
      },
      40: {
        text: "Kłamstwo! Moja lalka nie miała czerwonej sukienki. Panie sędzio, czy skoro kłamią w takich drobnostkach, czy można im ufać w ogóle?",
        characterId: BARONOWA,
        choices: [{ text: "Dalej", next: 102 }],
      },
      41: {
        text: "Co pani Stawska powie?...",
        characterId: SĘDZIA,
        choices: [{ text: "Dalej", next: 42 }],
      },
      42: {
        text: "Lalkę tę kupiłam w sklepie pana Wokulskiego...",
        characterId: STAWSKA,
        choices: [{ text: "Dalej", next: 43 }],
      },
      43: {
        text: "A ile pani dała za nią?...",
        characterId: BARONOWA,
        choices: [{ text: "Dalej", next: 44 }],
      },
      44: {
        text: "Stawska odpowiedziała:",
        characterId: STAWSKA,
        choices: [
          { text: "Piętnaście rubli.", next: 45 },
          { text: "Trzy ruble.", next: 46 },
        ],
      },
      45: {
        text: "Tyle, co zapłaciłam ja! Czy to nie jest jednoznacznym dowodem na to, że to jest ta sama lalka, która została u mnie przez nią skradziona?",
        characterId: BARONOWA,
        choices: [{ text: "Dalej", next: 103 }],
      },
      46: {
        text: "Cha! Cha! Cha!... Ta lalka kosztuje piętnaście...",
        characterId: BARONOWA,
        choices: [{ text: "Dalej", next: 47 }],
      },
      47: {
        text: "Kto pani sprzedał tę lalkę?",
        characterId: SĘDZIA,
        choices: [{ text: "Dalej", next: 48 }],
      },
      48: {
        text: "Stawska odpowiedziała:",
        characterId: STAWSKA,
        choices: [
          { text: "Pan Mraczewski.", next: 49 },
          { text: "Pan Rzecki.", next: 50 },
        ],
      },
      49: {
        text: "Nie jest to możliwe. Słyszałem, iż pan Mraczewski już dawno nie pracuje w sklepie J. Mincel i S. Wokulski. Szanowna Pani skłamała.",
        characterId: SĘDZIA,
        choices: [{ text: "Dalej", next: 104 }],
      },
      50: {
        text: "Co powie pan Rzecki?...",
        characterId: SĘDZIA,
        choices: [{ text: "Dalej", next: 51 }],
      },
      51: {
        text: "Szanowny sędzio!... Z bolesnym zdumieniem przychodzi mi... To jest... widzę przed sobą triumfującą złość i tego... uciśnioną...",
        characterId: RZECKI,
        choices: [{ text: "Dalej", next: 52 }],
      },
      52: {
        text: "Wokulski postanowił:",
        characterId: WOKULSKI,
        choices: [
          { text: "Nie wtrącać się.", next: 105 },
          { text: "Wtrącić się.", next: 53 },
        ],
      },
      53: {
        text: "Rzecki był tylko obecny przy kupnie, lalkę ja sprzedałem.",
        characterId: WOKULSKI,
        choices: [{ text: "Dalej", next: 54 }],
      },
      54: {
        text: "Za trzy ruble?",
        characterId: BARONOWA,
        choices: [{ text: "Dalej", next: 55 }],
      },
      55: {
        text: "Tak, za trzy ruble. Jest to towar wybrakowany, którego się pozbywamy.",
        characterId: WOKULSKI,
        choices: [{ text: "Dalej", next: 56 }],
      },
      56: {
        text: "Czy i mnie pan sprzedałby taką lalkę za trzy ruble?",
        characterId: BARONOWA,
        choices: [{ text: "Dalej", next: 57 }],
      },
      57: {
        text: "Nie! Pani już nic i nigdy nie sprzedadzą w moim sklepie.",
        characterId: WOKULSKI,
        choices: [{ text: "Dalej", next: 58 }],
      },
      58: {
        text: "Jaki pan ma dowód, że ta lalka jest kupiona u pana?",
        characterId: SĘDZIA,
        choices: [{ text: "Dalej", next: 59 }],
      },
      59: {
        text: "Otóż to! Jaki dowód?...",
        characterId: BARONOWA,
        choices: [{ text: "Dalej", next: 60 }],
      },
      60: {
        text: "Ciszej!...",
        characterId: SĘDZIA,
        choices: [{ text: "Dalej", next: 61 }],
      },
      61: {
        text: "Gdzie pani swoją lalkę kupiła?",
        characterId: WOKULSKI,
        choices: [{ text: "Dalej", next: 62 }],
      },
      62: {
        text: "Baronowa powiedziała:",
        characterId: BARONOWA,
        choices: [
          { text: "U pana Wokulskiego", next: 106 },
          { text: "U Lessera", next: 63 },
        ],
      },
      63: {
        text: "Więc mamy dowód. Lalki takie sprowadzałem z zagranicy w kawałkach: oddzielnie głowy, oddzielnie korpusy.",
        characterId: WOKULSKI,
        choices: [{ text: "Dalej", next: 64 }],
      },
      64: {
        text: "Po czym postanowił:",
        characterId: WOKULSKI,
        choices: [
          { text: "Odpruć lalkę", next: 67 },
          { text: "Powiedzieć, że takie lalki sprzedaje tylko on", next: 65 },
        ],
      },
      65: {
        text: "Panie sędzio, nikt inny w całej Warszawie tak nie robi. Wszyscy sprzedają zrobione od razu w całości lalki, ale kosztem większej ceny.",
        characterId: WOKULSKI,
        choices: [{ text: "Dalej", next: 66 }],
      },
      66: {
        text: "Nie jestem przekonany, panie Wokulski. Nie mamy dowodu, że ta lalka rzeczywiście jest zrobiona z osobnych kawałków. Nie mogę panu uwierzyć na słowo.",
        characterId: SĘDZIA,
        choices: [{ text: "Dalej", next: 107 }],
      },
      67: {
        text: "Niech więc pan sędzia odpruje głowę, a wewnątrz znajdzie moją firmę.",
        characterId: WOKULSKI,
        choices: [{ text: "Dalej", next: 68 }],
      },
      68: {
        text: "Sędzia wziął do rąk lalkę, która tyle narobiła zgryzoty, i urzędowym scyzorykiem rozciął jej naprzód stanik, a następnie począł z wielką uwagą odpruwać głowę od tułowia.",
        characterId: SĘDZIA,
        choices: [{ text: "Dalej", next: 69 }],
      },
      69: {
        text: "Mamo, dlaczego ten pan rozbiera Mimi? Przecież ona będzie się wstydzić...",
        characterId: DZIECKO,
        choices: [{ text: "Dalej", next: 70 }],
      },
      70: {
        text: "Nagle zrozumiawszy, o co chodzi, wybuchnęła płaczem i kryjąc twarz w suknię pani Stawskiej, zawołała:",
        characterId: DZIECKO,
        choices: [{ text: "Dalej", next: 71 }],
      },
      71: {
        text: "Ach, mamo, po co on ją kraje?... To strasznie boli... O mamo, mamo, już nie chcę, ażeby Mimi krajali...",
        characterId: DZIECKO,
        choices: [{ text: "Dalej", next: 72 }],
      },
      72: {
        text: "Nie płacz, Heluniu. Mimi będzie zdrowa i jeszcze ładniejsza...",
        characterId: WOKULSKI,
        choices: [{ text: "Dalej", next: 73 }],
      },
      73: {
        text: "Nu, niech pani przeczyta, co tam napisano?",
        characterId: SĘDZIA,
        choices: [{ text: "Dalej", next: 74 }],
      },
      74: {
        text: "...",
        characterId: BARONOWA,
        choices: [{ text: "Dalej", next: 75 }],
      },
      75: {
        text: "To niech pan Maruszewicz przeczyta głośno, co tam jest.",
        characterId: SĘDZIA,
        choices: [{ text: "Dalej", next: 76 }],
      },
      76: {
        text: "Jan Mincel i Stanisław Wokulski.",
        characterId: MARUSZEWICZ,
        choices: [{ text: "Dalej", next: 77 }],
      },
      77: {
        text: "Zatem nie Lesser?",
        characterId: SĘDZIA,
        choices: [{ text: "Dalej", next: 78 }],
      },
      78: {
        text: "Nie.",
        characterId: MARUSZEWICZ,
        choices: [{ text: "Dalej", next: 79 }],
      },
      79: {
        text: "Teraz panna nam powie, co to było z lalką? Tylko proszę prawdę, bo panna stanie do przysięgi...",
        characterId: SĘDZIA,
        choices: [{ text: "Dalej", next: 80 }],
      },
      80: {
        text: "Lalka stłukła się, panie...",
        characterId: SŁUŻĄCA,
        choices: [{ text: "Dalej", next: 81 }],
      },
      81: {
        text: "Ta wasza lalka, od pani Krzeszowskiej?...",
        characterId: SĘDZIA,
        choices: [{ text: "Dalej", next: 82 }],
      },
      82: {
        text: "Ta...",
        characterId: SŁUŻĄCA,
        choices: [{ text: "Dalej", next: 83 }],
      },
      83: {
        text: "Nu, to stłukła się jej tylko głowa, a reszta gdzie?...",
        characterId: SĘDZIA,
        choices: [{ text: "Dalej", next: 84 }],
      },
      84: {
        text: "Na strychu, panie... Oj, co ja będę miała!",
        characterId: SŁUŻĄCA,
        choices: [{ text: "Dalej", next: 85 }],
      },
      85: {
        text: "Nic panna nie będzie miała; gorzej byłoby nie odpowiedzieć prawdy. A pani oskarżycielka słyszy, co jest?...",
        characterId: SĘDZIA,
        choices: [{ text: "Dalej", next: 86 }],
      },
      86: {
        text: "...",
        characterId: BARONOWA,
        choices: [{ text: "Dalej", next: 87 }],
      },
      87: {
        text: "Sędzia zaczął pisać.",
        characterId: SĘDZIA,
        choices: [{ text: "Dalej", next: 88 }],
      },
      88: {
        text: "Siedzący w drugiej ławce mężczyzna odezwał się do damy czerwonej na twarzy:",
        characterId: MĘŻCZYZNA,
        choices: [{ text: "Dalej", next: 89 }],
      },
      89: {
        text: "A co, ukradła?... Widzisz pani, co się teraz zrobiło z paninej gęby?... Hę?...",
        characterId: MĘŻCZYZNA,
        choices: [{ text: "Dalej", next: 90 }],
      },
      90: {
        text: "Jak kobieta jest ładna, to się i z kryminału wygrzebie.",
        characterId: KOBIETA_1,
        choices: [{ text: "Dalej", next: 91 }],
      },
      91: {
        text: "Ale pani się nie wygrzebiesz...",
        characterId: MĘŻCZYZNA,
        choices: [{ text: "Dalej", next: 92 }],
      },
      92: {
        text: "Głupiś pan!...",
        characterId: KOBIETA_1,
        choices: [{ text: "Dalej", next: 93 }],
      },
      93: {
        text: "Paniś głupsza...",
        characterId: MĘŻCZYZNA,
        choices: [{ text: "Dalej", next: 94 }],
      },
      94: {
        text: "Ciszej!...",
        characterId: SĘDZIA,
        choices: [{ text: "Dalej", next: 95 }],
      },
      95: {
        text: "Teraz może pani podać skargę o potwarz.",
        characterId: SĘDZIA,
        choices: [{ text: "Dalej", next: 96 }],
      },
      96: {
        text: "Bardzo mi przykro, żem panią sądził, i bardzo mi przyjemnie, że mogę powinszować.",
        characterId: SĘDZIA,
        choices: [{ text: "Dalej", next: 97 }],
      },
      97: {
        text: "Brawo Graczu! Wykazałeś się znajomością lektury. Dzięki Tobie uniewinniono Helenę Stawską. Składamy szczere gratulacje od całej ekipy twórców",
        success: true,
      },
      98: {
        text: "Mam wrażenie, że nie przeczytałeś lektury. Spróbuj ponownie",
      },
      99: {
        text: "Ignacy Rzecki został wyproszony z sali rozpraw, przez co później nie mógł udzielić pomocy w obronie przed zarzutami baronowej Krzeszowskiej. Stawska przegrała proces.",
      },
      100: {
        text: "Sędzia uwierzył w kłamstwo Marusiewicza. Stawska przegrała proces.",
      },
      101: {
        text: "Pani Stawska nie mogła wytrzymać stresu, który w niej powodowała rozprawa. Liczyła, że dzięki pomocy Ignacego Rzeckiego i Stanisława Wokulskiego uda jej się dojść do wystarczająco pokojowego rozwiązania konfliktu. Niestety baronowa Krzeszowska dobijała się o największą możliwą karę dla Heleny. Niewiele pomogły słowa Rzeckiego i Wokulskiego, kiedy sama przyznała się do rzekomej winy. Stawska przegrała proces",
      },
      102: {
        text: "Słowa strony Stawskiej były odbierane z o wiele mniejszym zaufaniem. Ostatecznie baronowej Krzeszowskiej udało się przekonać sędzię o swojej racji. Stawska przegrała proces.",
      },
      103: {
        text: "Baronowa Krzeszowska przeciągnęła sędzie na swoją stronę. Skłamała później, że lalkę kupiła w sklepie Stanisława Wokulskiego. Postanowiono, iż baronowa mogła kupić Lalkę w momencie, kiedy w pobliżu nie było ani Rzeckiego, ani Wokulskiego, a więc ich zaprzeczenia słów Krzeszowskiej zostały odebrane jako kłamstwa w celu wybielenia Stawskiej. Stawska przegrała proces.",
      },
      104: {
        text: "Pani Stawska została uznana za kłamczynię. Baronowa Krzeszowska więc bez dużego wysiłku przekonała sędzię i ławę przysiężnych, iż jej wersja jest prawdziwa. Nikt nie zwątpił nawet w jej kłamstwo - że rzekomo kupiła lalkę u Wokulskiego. Stawska przegrała proces.",
      },
      105: {
        text: "Ignacy Rzecki zaczął się gubić w myślach, więc nie mógł zaoferować pożytecznej pomocy dla Heleny Stawskiej. Sama Pani Stawska nie dała rady obronić.",
      },
      106: {
        text: "Kłamstwo baronowej Krzeszowskiej wydało się wiarygodnym zarówno sędziemu, jak i ławie przysiężnych. Dodatkowo zostało potwierdzone przez jej służącą. Zaprzeczenia Stanisława Wokulskiego zostały potraktowane jako kłamstwo w celu wybielenia Heleny Stawskiej. Ostatecznie Krzeszowska zwyciężyła. Stawska przegrała proces.",
      },
      107: {
        text: "Stanisław Wokulski postanowił nie robić przykrości Heluni niszcząc jej zabawkę na jej oczach. Niestety przez to sędzia nie mógł zobaczyć napisu w środku lalki, który posłużyłby jednoznacznym dowodem. Nie udało się znaleźć wystarczająco dobrych argumentów i baronowej Krzeszowskiej udało się przekonać sędzię, iż ma rację. Stawska przegrała proces.",
      },
    },
  },
};

export const story: Story = { chapters, characters };
