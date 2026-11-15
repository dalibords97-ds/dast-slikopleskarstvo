export interface Translation {
  nav: {
    services: string;
    calculator: string;
    whyUs: string;
    faq: string;
    contact: string;
    requestQuote: string;
  };
  hero: {
    badge: string;
    titlePart1: string;
    titlePart2: string;
    titlePart3: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    cleanliness: string;
    precision: string;
    deadlines: string;
  };
  services: {
    tag: string;
    title: string;
    items: {
      number: string;
      title: string;
      highlightTitle?: boolean;
      description: string;
      image: string;
      features: string[];
    }[];
  };
  calculator: {
    tag: string;
    title: string;
    subtitle: string;
    step1Title: string;
    serviceAirless: string;
    serviceAirlessSub: string;
    serviceKitanje: string;
    serviceKitanjeSub: string;
    servicePrenova: string;
    servicePrenovaSub: string;
    step2Title: string;
    presets: {
      studio: string;
      twoRoom: string;
      threeRoom: string;
      house: string;
    };
    highCeilingsLabel: string;
    estimateTitle: string;
    estimateBadge: string;
    estimateNote: string;
    durationLabel: string;
    daysOne: string;
    daysTwo: string;
    daysMany: string;
    includedTitle: string;
    includedItems: string[];
    ctaInspection: string;
    ctaWhatsapp: string;
  };
  difference: {
    tag: string;
    titlePart1: string;
    titleHighlight: string;
    subtitle: string;
    cards: {
      number: string;
      title: string;
      description: string;
      icon: 'tool' | 'wind' | 'document' | 'calendar';
    }[];
  };
  faq: {
    tag: string;
    title: string;
    subtitle: string;
    items: {
      q: string;
      a: string;
    }[];
    boxTitle: string;
    boxSubtitle: string;
    boxCta: string;
  };
  contact: {
    phone: string;
    workingHoursTitle: string;
    workingHoursText: string;
    requestInspection: string;
    whatsapp: string;
    bannerBadge: string;
    bannerTitle: string;
    modalTitle: string;
    modalSubtitle: string;
    nameLabel: string;
    phoneLabel: string;
    serviceLabel: string;
    areaLabel: string;
    locationLabel: string;
    messageLabel: string;
    submitButton: string;
    successMessage: string;
  };
  footer: {
    description: string;
    navTitle: string;
    contactTitle: string;
    rights: string;
  };
}

export const translations: Record<string, Translation> = {
  sl: {
    nav: {
      services: 'Storitve',
      calculator: 'Kalkulator',
      whyUs: 'Zakaj mi',
      faq: 'FAQ',
      contact: 'Kontakt',
      requestQuote: 'Zahtevajte ponudbo',
    },
    hero: {
      badge: 'SKD 43.350 · SLIKOPLESKARSTVO',
      titlePart1: 'Sodobno in precizno',
      titlePart2: 'slikopleskarstvo',
      titlePart3: 'za vaš dom',
      subtitle:
        'Specializirani za kitanje, glajenje in barvanje z airless črpalkami za brezhibne površine brez črt.',
      ctaPrimary: 'Zahtevajte brezplačen ogled in ponudbo',
      ctaSecondary: 'Naše storitve',
      cleanliness: '100% Čistoča na gradbišču',
      precision: 'Natančna izvedba',
      deadlines: 'Upoštevanje rokov',
    },
    services: {
      tag: 'NAŠE STORITVE',
      title: 'Slikopleskarstvo od podlage do končnega nanosa',
      items: [
        {
          number: '01',
          title: 'Kitanje in glajenje',
          description:
            'Profesionalno kitanje in glajenje sten za brezhibno, ravno površino pripravljeno za barvanje.',
          image: '/images/service-kitanje.jpg',
          features: [
            'Glajenje po standardih Q1 do Q4',
            'Brezprašno strojno brušenje z odsesavanjem',
            'Bandažiranje stikov in odpravljanje razpok',
          ],
        },
        {
          number: '02',
          title: 'Airless barvanje',
          highlightTitle: true,
          description:
            'Barvanje z airless črpalkami za enakomeren nanos brez črt, kapljic in prehodov.',
          image: '/images/service-airless.jpg',
          features: [
            'Popolnoma enakomeren nanos brez sledi valjčka',
            'Visoka hitrost in optimalna debelina sloja',
            'Uporaba vrhunskih, visoko pralnih barv',
          ],
        },
        {
          number: '03',
          title: 'Zaščita in prenova',
          description:
            'Celovita zaščita tal, oken, pohištva in vtičnic pred začetkom kakršnegakoli dela.',
          image: '/images/service-prenova.jpg',
          features: [
            'Zaščitne folije visoke gostote',
            'Natančno lepljenje robov in zaščitni trakovi',
            'Okolje ostane popolnoma čisto po zaključku',
          ],
        },
      ],
    },
    calculator: {
      tag: 'KALKULATOR STORITEV',
      title: 'Informativni izračun za vaš projekt',
      subtitle: 'Izberite vrsto del in premaknite drsnik za hitro okvirno oceno stroškov ter trajanja izvedbe.',
      step1Title: '1. Izberite storitev',
      serviceAirless: 'Airless barvanje',
      serviceAirlessSub: '2x strojni nanos brez sledi valjčka',
      serviceKitanje: 'Kitanje + barvanje',
      serviceKitanjeSub: 'Glajenje Q3/Q4 + brezprašno brušenje',
      servicePrenova: 'Celovita prenova',
      servicePrenovaSub: 'Sanacija razpok, mreženje in finiš',
      step2Title: '2. Približna površina sten / tal',
      presets: {
        studio: 'Garsonjera (40 m²)',
        twoRoom: '2-sobno (90 m²)',
        threeRoom: '3-sobno (150 m²)',
        house: 'Hiša (250 m²)',
      },
      highCeilingsLabel: 'Objekt ima visoke strope nad 2.80 m (+15% zaradi odrov / posebnega dostopa)',
      estimateTitle: 'Ocena investicije',
      estimateBadge: 'Informativno',
      estimateNote: '*Okviren znesek z vključenim delom in osnovnim materialom.',
      durationLabel: 'Predviden čas izvedbe:',
      daysOne: 'delovni dan',
      daysTwo: 'delovna dni',
      daysMany: 'delovnih dni',
      includedTitle: 'Vedno vključeno:',
      includedItems: [
        '100% zaščita oken, vrat in tal s folijami',
        'Brezprašno strojno brušenje z odsesavanjem',
        'Vrhunske, visoko pokrivne pralne barve',
        'Temeljito čiščenje delovišča po zaključku',
      ],
      ctaInspection: 'Naročite brezplačen ogled',
      ctaWhatsapp: 'Pošlji ta izračun na WhatsApp',
    },
    difference: {
      tag: 'DAST DIFFERENCE',
      titlePart1: 'Zakaj izbrati nas? Ker sten ne prebarvamo — ',
      titleHighlight: 'jih izpopolnimo.',
      subtitle:
        'Vsak projekt obravnavamo kot svoj. Od priprave podlage do končnega nanosa delimo natančnost, čistočo in spoštovanje dogovorjenih rokov.',
      cards: [
        {
          number: '01',
          title: 'Profesionalno orodje',
          description:
            'Najnovejše airless črpalke, brezprašne brusilke in lasersko niveliranje za popolne rezultate.',
          icon: 'tool',
        },
        {
          number: '02',
          title: 'Brezprašno delo',
          description:
            'Brezprašno brušenje in airless aplikacija za čisto okolje med in po delu.',
          icon: 'wind',
        },
        {
          number: '03',
          title: 'Transparentne cene',
          description:
            'Podroben predračun brez skritih stroškov. Veste natančno, za kaj plačujete.',
          icon: 'document',
        },
        {
          number: '04',
          title: 'Strukturirana izvedba',
          description:
            'Jasni roki, terminski načrt in dnevno spremljanje napredka projekta.',
          icon: 'calendar',
        },
      ],
    },
    faq: {
      tag: 'POGOSTA VPRAŠANJA',
      title: 'Vse, kar morate vedeti pred začetkom del',
      subtitle: 'Zbrali smo odgovore na najpogostejša vprašanja naših strank glede izvedbe, rokov, čistoče in cen.',
      items: [
        {
          q: 'Kakšna je prednost Airless tehnologije v primerjavi s klasičnim valjčkom?',
          a: 'Airless sistem razprši barvo pod visokim pritiskom brez zračnega toka, kar ustvari popolnoma gladek, homogen mikro-sloj. Na steni ni nobenih sledi valjčka, črt, pikic ali neenakomernih debelin. Hkrati je nanos znatno hitrejši, barva pa bolj odporna na pranje in obrabo.',
        },
        {
          q: 'Ali moramo sami zaščititi pohištvo, okna in tla pred vašim prihodom?',
          a: 'Ne, celovita in strokovna zaščita prostora je del naše storitve. Z visokokakovostnimi debelimi folijami, filcem in namenskim trakom natančno zaščitimo vsa tla, okna, vrata, podboje, vtičnice in pohištvo. Po zaključku del vse zaščitne materiale varno odstranimo in prostor posesamo ter očistimo.',
        },
        {
          q: 'Koliko prahu nastane med kitanjem in brušenjem sten?',
          a: 'Pri delu uporabljamo profesionalne brusilne stroje (t.i. žirafe) z neposrednim priklopom na zmogljive industrijske sesalce z avtomatskim otresanjem in HEPA filtracijo. To pomeni, da se več kot 95 % prahu posesa neposredno ob viru brušenja, zato je bivanje v objektu neprimerljivo čistejše.',
        },
        {
          q: 'Koliko časa traja povprečen projekt (npr. stanovanje 80–100 m²)?',
          a: 'Za samo osvežitev z Airless barvanjem povprečno stanovanje običajno zaključimo v 1 do 2 delovnih dneh. Če projekt vključuje celovito kitanje in glajenje (več nanosov izravnalne mase, sušenje, strojno brušenje in nato barvanje), pa postopek običajno traja od 3 do 5 delovnih dni.',
        },
        {
          q: 'Kako poteka brezplačen ogled in ali je ponudba zavezujoča?',
          a: 'Ogled na vašem objektu kjerkoli v Sloveniji je 100 % brezplačen in popolnoma nezavezujoč. Na ogledu natančno premerimo površine, ocenimo stanje sten (ravnost, vlago, morebitne razpoke) ter se posvetujemo z vami. Nato vam v roku 24–48 ur pripravimo natančen predračun brez skritih stroškov.',
        },
        {
          q: 'Katere materiale in barve uporabljate?',
          a: 'Uporabljamo izključno certificirane profesionalne materiale priznanih proizvajalcev (JUB, Knauf, Caparol, Sto, Baumit), ki zagotavljajo odlično paroprepustnost, globoko mat izgled ter visoko pralnost in odpornost na madeže.',
        },
      ],
      boxTitle: 'Imate specifično vprašanje glede vašega projekta?',
      boxSubtitle: 'Pokličite nas ali nam pišite, z veseljem vam svetujemo.',
      boxCta: 'Zastavite vprašanje',
    },
    contact: {
      phone: '+386 69 950 491',
      workingHoursTitle: 'DELOVNI ČAS',
      workingHoursText: 'Pon–Pet: 7:00–17:00 · Sob: po dogovoru',
      requestInspection: 'Zahtevajte brezplačen ogled',
      whatsapp: 'WhatsApp',
      bannerBadge: 'DAST',
      bannerTitle: 'Radovi koji ostavljaju utisak.',
      modalTitle: 'Zahtevajte brezplačen ogled in ponudbo',
      modalSubtitle:
        'Izpolnite spodnji obrazec ali nas pokličite. Z veseljem se vam oglasimo v najkrajšem možnem času.',
      nameLabel: 'Ime in Priimek',
      phoneLabel: 'Telefonska številka',
      serviceLabel: 'Želena storitev',
      areaLabel: 'Približna kvadratura (m²)',
      locationLabel: 'Lokacija objekta',
      messageLabel: 'Sporočilo / posebne želje',
      submitButton: 'Pošlji povpraševanje',
      successMessage: 'Hvala! Vaše povpraševanje je bilo uspešno poslano.',
    },
    footer: {
      description:
        'Premier izvajalec slikopleskarstva v Sloveniji. Kitanje, glajenje, airless barvanje in dekorativni nanosi za brezhibne površine.',
      navTitle: 'NAVIGACIJA',
      contactTitle: 'KONTAKT',
      rights: '© 2026 DAST Slikopleskarstvo. Vse pravice pridržane.',
    },
  },

  sr: {
    nav: {
      services: 'Usluge',
      calculator: 'Kalkulator',
      whyUs: 'Zašto mi',
      faq: 'Česta pitanja',
      contact: 'Kontakt',
      requestQuote: 'Zatražite ponudu',
    },
    hero: {
      badge: 'SKD 43.350 · SLIKARSKI I ZAVRŠNI RADOVI',
      titlePart1: 'Savremeno i precizno',
      titlePart2: 'molerski radovi',
      titlePart3: 'za vaš dom',
      subtitle:
        'Specijalizovani za gletovanje, fino ravnanje i farbanje airless pumpama za besprekorne površine bez tragova valjka.',
      ctaPrimary: 'Zatražite besplatan pregled i ponudu',
      ctaSecondary: 'Naše usluge',
      cleanliness: '100% Čistoća na gradilištu',
      precision: 'Precizno izvođenje',
      deadlines: 'Poštovanje rokova',
    },
    services: {
      tag: 'NAŠE USLUGE',
      title: 'Molerski radovi od pripreme podloge do završnog nanosa',
      items: [
        {
          number: '01',
          title: 'Gletovanje i ravnanje zidova',
          description:
            'Profesionalno mašinsko gletovanje i fino ravnanje zidova za besprekorno ravnu površinu spremnu za bojenje.',
          image: '/images/service-kitanje.jpg',
          features: [
            'Gletovanje po standardima Q1 do Q4',
            'Brušenje bez prašine sa HEPA odsisavanjem',
            'Bandažiranje spojeva i sanacija pukotina',
          ],
        },
        {
          number: '02',
          title: 'Airless farbanje',
          highlightTitle: true,
          description:
            'Farbanje airless pumpama pod visokim pritiskom za ravnomeran nanos bez prelaza, linija i kapljica.',
          image: '/images/service-airless.jpg',
          features: [
            'Potpuno ravnomeran nanos bez tragova valjka',
            'Velika brzina i optimalna debljina sloja',
            'Upotreba vrhunskih, visoko perivih boja',
          ],
        },
        {
          number: '03',
          title: 'Zaštita i celovita renovacija',
          description:
            'Kompletna zaštita podova, prozora i nameštaja pre početka rada i profesionalna adaptacija prostora.',
          image: '/images/service-prenova.jpg',
          features: [
            'Zaštitne folije visoke gustine i precizno lepljenje',
            'Temeljna sanacija i priprema podloga za obradu',
            'Prostor ostaje potpuno čist nakon završetka radova',
          ],
        },
      ],
    },
    calculator: {
      tag: 'KALKULATOR USLUGA',
      title: 'Informativni proračun za vaš projekat',
      subtitle: 'Izaberite vrstu radova i pomerite klizač za brzu okvirnu procenu troškova i trajanja izvođenja.',
      step1Title: '1. Izaberite uslugu',
      serviceAirless: 'Airless farbanje',
      serviceAirlessSub: '2x mašinski nanos bez tragova valjka',
      serviceKitanje: 'Gletovanje + farbanje',
      serviceKitanjeSub: 'Fino ravnanje Q3/Q4 + brušenje bez prašine',
      servicePrenova: 'Kompletna adaptacija',
      servicePrenovaSub: 'Sanacija pukotina, mrežica i završni sloj',
      step2Title: '2. Približna površina zidova / plafona',
      presets: {
        studio: 'Garsonjera (40 m²)',
        twoRoom: '2-sobni stan (90 m²)',
        threeRoom: '3-sobni stan (150 m²)',
        house: 'Kuća (250 m²)',
      },
      highCeilingsLabel: 'Objekat ima visoke plafone preko 2.80 m (+15% zbog skela / specifičnog pristupa)',
      estimateTitle: 'Procena investicije',
      estimateBadge: 'Informativno',
      estimateNote: '*Okviran iznos sa uključenim radom i osnovnim materijalom.',
      durationLabel: 'Predviđeno vreme izvođenja:',
      daysOne: 'radni dan',
      daysTwo: 'radna dana',
      daysMany: 'radnih dana',
      includedTitle: 'Uvek uključeno:',
      includedItems: [
        '100% zaštita prozora, vrata i podova folijama',
        'Mašinsko brušenje bez prašine sa usisivačima',
        'Vrhunske, visoko pokrivne perive boje',
        'Temeljno čišćenje radnog prostora po završetku',
      ],
      ctaInspection: 'Zatražite besplatan pregled',
      ctaWhatsapp: 'Pošalji ovaj izračun na WhatsApp',
    },
    difference: {
      tag: 'DAST RAZLIKA',
      titlePart1: 'Zašto izabrati nas? Zidove ne samo da prefarbamo — ',
      titleHighlight: 'već ih usavršavamo.',
      subtitle:
        'Svakom projektu pristupamo kao svom. Od pripreme podloge do završnog sloja garantujemo preciznost, čistoću i poštovanje dogovorenih rokova.',
      cards: [
        {
          number: '01',
          title: 'Profesionalni alati',
          description:
            'Najnovije airless pumpe, brusilice bez prašine i lasersko nivelisanje za vrhunske rezultate.',
          icon: 'tool',
        },
        {
          number: '02',
          title: 'Rad bez prašine',
          description:
            'Brušenje sa direktnim usisavanjem i airless aplikacija za čisto radno okruženje.',
          icon: 'wind',
        },
        {
          number: '03',
          title: 'Transparentne cene',
          description:
            'Detaljan predračun bez skrivenih troškova. Tačno znate šta i koliko plaćate.',
          icon: 'document',
        },
        {
          number: '04',
          title: 'Strukturirano izvođenje',
          description:
            'Jasni rokovi, precizan vremenski plan i pouzdan završetak radova.',
          icon: 'calendar',
        },
      ],
    },
    faq: {
      tag: 'ČESTA PITANJA',
      title: 'Sve što treba da znate pre početka radova',
      subtitle: 'Prikupili smo odgovore na najčešća pitanja klijenata o izvođenju, rokovima, čistoći i cenama.',
      items: [
        {
          q: 'Koja je prednost Airless tehnologije u poređenju sa klasičnim valjkom?',
          a: 'Airless sistem raspršuje boju pod visokim pritiskom bez vazduha, stvarajući savršeno gladak, homogeni mikro-sloj. Na zidu nema tragova valjka, linija, kapljica ili neravnina. Nanos je znatno brži, a boja dugotrajnija i otpornija na pranje.',
        },
        {
          q: 'Da li moramo sami da zaštitimo nameštaj, prozore i podove?',
          a: 'Ne, kompletna i profesionalna zaštita prostora je naša briga. Debelim folijama, filcom i namenskim trakama precizno štitimo sve podove, stolariju, utičnice i nameštaj. Nakon završetka sve uklanjamo i prostor ostavljamo čistim.',
        },
        {
          q: 'Koliko prašine nastaje tokom gletovanja i brušenja zidova?',
          a: 'Koristimo profesionalne brusilice (tzv. žirafe) povezane sa snažnim industrijskim HEPA usisivačima. Preko 95% prašine se usisa direktno na mestu brušenja, što čuva vaš prostor čistim i bezbednim za boravak.',
        },
        {
          q: 'Koliko traje prosečan projekat (npr. stan 80–100 m²)?',
          a: 'Za osvežavanje Airless farbanjem stan se uobičajeno završava za 1 do 2 radna dana. Ako je potrebno kompletno gletovanje i ravnanje (više slojeva, sušenje, mašinsko brušenje i farbanje), radovi traju od 3 do 5 radnih dana.',
        },
        {
          q: 'Kako funkcioniše besplatan pregled i da li je ponuda obavezujuća?',
          a: 'Pregled vašeg objekta u Sloveniji je 100% besplatan i potpuno neobavezujući. Precizno merimo površine, ocenjujemo stanje zidova i savetujemo vas. Zatim u roku od 24–48h dobijate detaljan predračun bez skrivenih troškova.',
        },
        {
          q: 'Koje materijale i boje koristite?',
          a: 'Koristimo isključivo sertifikovane profesionalne materijale renomiranih proizvođača (JUB, Knauf, Caparol, Sto, Baumit), koji garantuju odličnu paropropusnost, mat izgled i visoku perivost.',
        },
      ],
      boxTitle: 'Imate specifično pitanje za vaš projekat?',
      boxSubtitle: 'Pozovite nas ili nam pišite, rado ćemo vas posavetovati.',
      boxCta: 'Postavite pitanje',
    },
    contact: {
      phone: '+386 69 950 491',
      workingHoursTitle: 'RADNO VREME',
      workingHoursText: 'Pon–Pet: 7:00–17:00 · Sub: po dogovoru',
      requestInspection: 'Zatražite besplatan pregled',
      whatsapp: 'WhatsApp',
      bannerBadge: 'DAST',
      bannerTitle: 'Radovi koji ostavljaju utisak.',
      modalTitle: 'Zatražite besplatan pregled i ponudu',
      modalSubtitle:
        'Popunite formular ispod ili nas pozovite. Sa zadovoljstvom ćemo vam odgovoriti u najkraćem roku.',
      nameLabel: 'Ime i Prezime',
      phoneLabel: 'Broj telefona',
      serviceLabel: 'Željena usluga',
      areaLabel: 'Približna kvadratura (m²)',
      locationLabel: 'Lokacija objekta',
      messageLabel: 'Poruka / posebne želje',
      submitButton: 'Pošaljite upit',
      successMessage: 'Hvala! Vaš upit je uspešno poslat.',
    },
    footer: {
      description:
        'Premier izvođač molersko-farbarskih radova u Sloveniji. Gletovanje, ravnanje, airless farbanje i dekorativni nanosi.',
      navTitle: 'NAVIGACIJA',
      contactTitle: 'KONTAKT',
      rights: '© 2026 DAST. Sva prava zadržana.',
    },
  },

  en: {
    nav: {
      services: 'Services',
      calculator: 'Calculator',
      whyUs: 'Why Us',
      faq: 'FAQ',
      contact: 'Contact',
      requestQuote: 'Request a Quote',
    },
    hero: {
      badge: 'SKD 43.350 · PAINTING & DECORATING',
      titlePart1: 'Modern and precise',
      titlePart2: 'wall finishing',
      titlePart3: 'for your home',
      subtitle:
        'Specialized in skim coating, plaster smoothing, and airless spray painting for flawless surfaces without streaks.',
      ctaPrimary: 'Request free inspection & quote',
      ctaSecondary: 'Our services',
      cleanliness: '100% Clean job site',
      precision: 'Precision workmanship',
      deadlines: 'Strict adherence to deadlines',
    },
    services: {
      tag: 'OUR SERVICES',
      title: 'Painting & finishing from foundation to final coat',
      items: [
        {
          number: '01',
          title: 'Plaster smoothing & skim coating',
          description:
            'Professional skimming and wall smoothing for a flawless, level surface ready for paint.',
          image: '/images/service-kitanje.jpg',
          features: [
            'Q1 through Q4 finishing standards',
            'Dustless sanding with HEPA vacuum extraction',
            'Joint taping and crack mitigation',
          ],
        },
        {
          number: '02',
          title: 'Airless spray painting',
          highlightTitle: true,
          description:
            'Airless pump spray application for an ultra-uniform coat free of roller marks, drips, or overlaps.',
          image: '/images/service-airless.jpg',
          features: [
            'Zero roller texture or brush lines',
            'Superior speed and optimal coat depth',
            'Premium washable architectural paints',
          ],
        },
        {
          number: '03',
          title: 'Protection & renovation',
          description:
            'Complete masking of flooring, joinery, and fixtures before any work starts.',
          image: '/images/service-prenova.jpg',
          features: [
            'High-density protective films',
            'Precision laser-straight masking',
            'Immaculately clean space upon completion',
          ],
        },
      ],
    },
    calculator: {
      tag: 'SERVICE CALCULATOR',
      title: 'Instant Cost & Timeline Estimate',
      subtitle: 'Select your required scope and adjust the surface area slider for an immediate transparent estimate.',
      step1Title: '1. Select service',
      serviceAirless: 'Airless Spray Painting',
      serviceAirlessSub: '2x uniform spray coat without roller texture',
      serviceKitanje: 'Skim Coating + Paint',
      serviceKitanjeSub: 'Q3/Q4 plaster smoothing + dust-free sanding',
      servicePrenova: 'Complete Renovation',
      servicePrenovaSub: 'Crack remediation, mesh reinforcement & finish',
      step2Title: '2. Approximate wall / ceiling area',
      presets: {
        studio: 'Studio (40 m²)',
        twoRoom: '2-Room (90 m²)',
        threeRoom: '3-Room (150 m²)',
        house: 'House (250 m²)',
      },
      highCeilingsLabel: 'Property has high ceilings above 2.80 m (+15% due to scaffolding requirements)',
      estimateTitle: 'Investment Estimate',
      estimateBadge: 'Informative',
      estimateNote: '*Estimated amount including expert labor and base materials.',
      durationLabel: 'Estimated timeline:',
      daysOne: 'workday',
      daysTwo: 'workdays',
      daysMany: 'workdays',
      includedTitle: 'Always included:',
      includedItems: [
        '100% floor, door & window masking with heavy-duty film',
        'Dust-free mechanical sanding with industrial vacuum',
        'Premium high-coverage washable paints',
        'Thorough post-job site cleanup',
      ],
      ctaInspection: 'Book free site inspection',
      ctaWhatsapp: 'Send this estimate via WhatsApp',
    },
    difference: {
      tag: 'DAST DIFFERENCE',
      titlePart1: "Why choose us? We don't just paint walls — ",
      titleHighlight: 'we perfect them.',
      subtitle:
        'We treat every project as our own. From surface preparation to final coat, we deliver precision, cleanliness, and strict deadlines.',
      cards: [
        {
          number: '01',
          title: 'Professional equipment',
          description:
            'Latest airless sprayers, dust-free sanding stations, and laser leveling for perfect finishes.',
          icon: 'tool',
        },
        {
          number: '02',
          title: 'Dust-free workflow',
          description:
            'Dustless sanding and airless application keep your environment clean during and after work.',
          icon: 'wind',
        },
        {
          number: '03',
          title: 'Transparent pricing',
          description:
            'Itemized quotes with zero hidden fees. You know precisely what you are paying for.',
          icon: 'document',
        },
        {
          number: '04',
          title: 'Structured execution',
          description:
            'Clear schedules, progress updates, and dependable delivery dates.',
          icon: 'calendar',
        },
      ],
    },
    faq: {
      tag: 'FREQUENTLY ASKED QUESTIONS',
      title: 'Everything you need to know before starting',
      subtitle: 'Answers to the most common questions regarding execution, timelines, cleanliness, and pricing.',
      items: [
        {
          q: 'What is the main advantage of Airless spraying over a traditional roller?',
          a: 'The airless system atomizes paint under high hydraulic pressure without air, creating an ultra-smooth, uniform microscopic film. There are zero roller streaks, stipples, or heavy edges, and the coating is noticeably more washable and durable.',
        },
        {
          q: 'Do we need to protect our furniture, windows, and floors ourselves?',
          a: 'No, complete masking and site protection is included in our service. We meticulously cover all floors, joinery, and fixtures with high-density film and specialized tape, leaving the premises spotless after completion.',
        },
        {
          q: 'How much dust is generated during plaster sanding?',
          a: 'We use professional sanders connected directly to high-capacity industrial HEPA vacuums. Over 95% of airborne dust is extracted directly at the sanding pad, ensuring a clean and healthy environment.',
        },
        {
          q: 'How long does an average project take (e.g. 80–100 m² apartment)?',
          a: 'For fresh Airless painting, an apartment is typically completed in 1 to 2 business days. If full skim coating is required (compound application, drying, sanding, and painting), it takes 3 to 5 business days.',
        },
        {
          q: 'How does the free site inspection work, and is the quote binding?',
          a: 'On-site inspections across Slovenia are 100% free with no obligation. We assess the wall condition, measure square footage, and deliver a transparent, itemized quote within 24–48 hours.',
        },
        {
          q: 'What materials and paints do you use?',
          a: 'We work exclusively with certified professional brands (JUB, Knauf, Caparol, Sto, Baumit) ensuring high breathability, rich matte aesthetic, and superior scrub resistance.',
        },
      ],
      boxTitle: 'Have a specific question about your project?',
      boxSubtitle: 'Call us or send a message, we are always glad to advise.',
      boxCta: 'Ask a question',
    },
    contact: {
      phone: '+386 69 950 491',
      workingHoursTitle: 'WORKING HOURS',
      workingHoursText: 'Mon–Fri: 7:00–17:00 · Sat: by appointment',
      requestInspection: 'Request a free site inspection',
      whatsapp: 'WhatsApp',
      bannerBadge: 'DAST',
      bannerTitle: 'Work that leaves an impression.',
      modalTitle: 'Request a free inspection & quote',
      modalSubtitle:
        'Fill out the form below or contact us directly. We will get back to you promptly.',
      nameLabel: 'Full Name',
      phoneLabel: 'Phone Number',
      serviceLabel: 'Service Required',
      areaLabel: 'Estimated Area (m²)',
      locationLabel: 'Location / City',
      messageLabel: 'Message / Notes',
      submitButton: 'Submit Request',
      successMessage: 'Thank you! Your inquiry has been sent successfully.',
    },
    footer: {
      description:
        'Premier painting and surface finishing specialist in Slovenia. Plaster smoothing, airless painting, and decorative coatings.',
      navTitle: 'NAVIGATION',
      contactTitle: 'CONTACT',
      rights: '© 2026 DAST Slikopleskarstvo. All rights reserved.',
    },
  },

  de: {
    nav: {
      services: 'Leistungen',
      calculator: 'Kalkulator',
      whyUs: 'Über uns',
      faq: 'FAQ',
      contact: 'Kontakt',
      requestQuote: 'Angebot anfordern',
    },
    hero: {
      badge: 'SKD 43.350 · MALER & ANSTRICHER',
      titlePart1: 'Modern und präzise',
      titlePart2: 'Malerarbeiten',
      titlePart3: 'für Ihr Zuhause',
      subtitle:
        'Spezialisiert auf Spachteln, Glätten und Airless-Farbspritzen für makellose streifenfreie Oberflächen.',
      ctaPrimary: 'Kostenlose Besichtigung & Angebot',
      ctaSecondary: 'Unsere Leistungen',
      cleanliness: '100% Baustellensauberkeit',
      precision: 'Präzise Ausführung',
      deadlines: 'Termintreue',
    },
    services: {
      tag: 'UNSERE LEISTUNGEN',
      title: 'Malerarbeiten vom Untergrund bis zum Finish',
      items: [
        {
          number: '01',
          title: 'Spachteln und Glätten',
          description:
            'Professionelles Spachteln und Glätten von Wänden für eine absolut ebene Oberfläche.',
          image: '/images/service-kitanje.jpg',
          features: [
            'Oberflächengüte Q1 bis Q4',
            'Staubfreies Schleifen mit Absaugung',
            'Riss- und Fugensanierung',
          ],
        },
        {
          number: '02',
          title: 'Airless Farbspritzen',
          highlightTitle: true,
          description:
            'Airless-Technologie für einen gleichmäßigen Farbauftrag ohne Streifen oder Rollerspuren.',
          image: '/images/service-airless.jpg',
          features: [
            'Keine Rollenstruktur oder Ansätze',
            'Höchste Gleichmäßigkeit & Schnelligkeit',
            'Hochwertige abriebfeste Farben',
          ],
        },
        {
          number: '03',
          title: 'Schutz & Renovierung',
          description:
            'Vollständige Abdeckung und Schutz aller Böden, Fenster und Möbel.',
          image: '/images/service-prenova.jpg',
          features: [
            'Robuste Schutzfolien & Vliese',
            'Präzise Abklebearbeiten',
            'Sauberer Zustand nach Fertigstellung',
          ],
        },
      ],
    },
    calculator: {
      tag: 'LEISTUNGSKALKULATOR',
      title: 'Unverbindliche Kosten- und Terminschätzung',
      subtitle: 'Wählen Sie Ihren Leistungsumfang und passen Sie die Quadratmeterzahl für ein transparentes Richtpreisangebot an.',
      step1Title: '1. Leistung wählen',
      serviceAirless: 'Airless Farbspritzen',
      serviceAirlessSub: '2x maschineller Auftrag ohne Rollenstruktur',
      serviceKitanje: 'Spachteln + Streichen',
      serviceKitanjeSub: 'Q3/Q4 Glätten + staubfreies Schleifen',
      servicePrenova: 'Komplettrenovierung',
      servicePrenovaSub: 'Risssanierung, Gewebearmierung & Finish',
      step2Title: '2. Ungefähre Wand- und Deckenfläche',
      presets: {
        studio: 'Studio (40 m²)',
        twoRoom: '2-Zimmer (90 m²)',
        threeRoom: '3-Zimmer (150 m²)',
        house: 'Haus (250 m²)',
      },
      highCeilingsLabel: 'Objekt hat hohe Decken über 2.80 m (+15% wegen Gerüstaufwand)',
      estimateTitle: 'Investitionsschätzung',
      estimateBadge: 'Informativ',
      estimateNote: '*Geschätzter Betrag inkl. Facharbeit und Grundmaterial.',
      durationLabel: 'Voraussichtliche Ausführungsdauer:',
      daysOne: 'Arbeitstag',
      daysTwo: 'Arbeitstage',
      daysMany: 'Arbeitstage',
      includedTitle: 'Immer inklusive:',
      includedItems: [
        '100% Abdeckung von Böden, Fenstern und Türen',
        'Staubfreies Schleifen mit HEPA-Absaugung',
        'Hochwertige hochdeckende waschbeständige Farben',
        'Gründliche Endreinigung der Baustelle',
      ],
      ctaInspection: 'Kostenlose Besichtigung anfordern',
      ctaWhatsapp: 'Diese Berechnung per WhatsApp senden',
    },
    difference: {
      tag: 'DAST DIFFERENCE',
      titlePart1: 'Warum wir? Weil wir Wände nicht nur streichen — ',
      titleHighlight: 'wir vollenden sie.',
      subtitle:
        'Jedes Projekt behandeln wir wie unser eigenes. Präzision, Sauberkeit und absolute Termintreue.',
      cards: [
        {
          number: '01',
          title: 'Profiausrüstung',
          description:
            'Modernste Airless-Pumpen, staubfreie Schleifgeräte und Laser-Nivellierung.',
          icon: 'tool',
        },
        {
          number: '02',
          title: 'Staubfreies Arbeiten',
          description:
            'Staubabsaugung und modernste Spritztechnik für ein sauberes Arbeitsumfeld.',
          icon: 'wind',
        },
        {
          number: '03',
          title: 'Transparente Preise',
          description:
            'Detaillierte Angebote ohne versteckte Kosten. Sie wissen genau, wofür Sie zahlen.',
          icon: 'document',
        },
        {
          number: '04',
          title: 'Strukturierte Umsetzung',
          description:
            'Verbindliche Termine, klarer Zeitplan und pünktliche Übergabe.',
          icon: 'calendar',
        },
      ],
    },
    faq: {
      tag: 'HÄUFIG GESTELLTE FRAGEN',
      title: 'Alles, was Sie vor Arbeitsbeginn wissen sollten',
      subtitle: 'Antworten auf die wichtigsten Fragen zu Ausführung, Fristen, Sauberkeit und Kosten.',
      items: [
        {
          q: 'Was ist der Hauptvorteil der Airless-Technologie gegenüber der Farbwalze?',
          a: 'Das Airless-System zerstäubt die Farbe unter hohem Druck ohne Luftstrom, wodurch ein extrem glatter, homogener Mikrofilm entsteht. Keine Rollenansätze, keine Struktur und maximale Waschbarkeit.',
        },
        {
          q: 'Müssen wir Möbel, Fenster und Böden selbst schützen?',
          a: 'Nein, das professionelle Abkleben und Schützen aller Oberflächen ist fester Bestandteil unserer Leistung. Nach Abschluss wird alles fachgerecht entfernt und gereinigt.',
        },
        {
          q: 'Wie viel Staub entsteht beim Spachteln und Schleifen?',
          a: 'Wir nutzen Profi-Schleifmaschinen mit Direktabsaugung an Industrie-Entstaubern mit HEPA-Filtern. Über 95% des Staubs werden direkt an der Wand abgesaugt.',
        },
        {
          q: 'Wie lange dauert ein durchschnittliches Projekt (z.B. 80–100 m²)?',
          a: 'Für reine Airless-Anstriche ist eine Wohnung meist in 1 bis 2 Werktagen fertig. Bei vollflächigem Glätten und Spachteln rechnen wir mit 3 bis 5 Werktagen.',
        },
        {
          q: 'Ist die Vor-Ort-Besichtigung kostenlos und unverbindlich?',
          a: 'Ja, unsere Besichtigung in Slowenien und das detaillierte Angebot sind 100% kostenfrei und völlig unverbindlich.',
        },
        {
          q: 'Welche Materialien und Farben verwenden Sie?',
          a: 'Wir verwenden ausschließlich geprüfte Markenprodukte führender Hersteller (JUB, Knauf, Caparol, Sto, Baumit) für höchste Deckkraft und Langlebigkeit.',
        },
      ],
      boxTitle: 'Haben Sie eine spezielle Frage zu Ihrem Projekt?',
      boxSubtitle: 'Rufen Sie uns an oder schreiben Sie uns, wir beraten Sie gerne.',
      boxCta: 'Frage stellen',
    },
    contact: {
      phone: '+386 69 950 491',
      workingHoursTitle: 'ÖFFNUNGSZEITEN',
      workingHoursText: 'Mo–Fr: 7:00–17:00 · Sa: nach Vereinbarung',
      requestInspection: 'Kostenlose Besichtigung anfordern',
      whatsapp: 'WhatsApp',
      bannerBadge: 'DAST',
      bannerTitle: 'Arbeiten, die Eindruck hinterlassen.',
      modalTitle: 'Kostenlose Besichtigung anfordern',
      modalSubtitle:
        'Füllen Sie das Formular aus oder rufen Sie uns direkt an. Wir melden uns umgehend bei Ihnen.',
      nameLabel: 'Vor- und Nachname',
      phoneLabel: 'Telefonnummer',
      serviceLabel: 'Gewünschte Leistung',
      areaLabel: 'Geschätzte Fläche (m²)',
      locationLabel: 'Standort / Ort',
      messageLabel: 'Nachricht / Anmerkungen',
      submitButton: 'Anfrage absenden',
      successMessage: 'Vielen Dank! Ihre Anfrage wurde erfolgreich übermittelt.',
    },
    footer: {
      description:
        'Ihr Premium-Spezialist für Maler- und Spachtelarbeiten in Slowenien. Glätten, Airless-Technik und hochwertige Beschichtungen.',
      navTitle: 'NAVIGATION',
      contactTitle: 'KONTAKT',
      rights: '© 2026 DAST Slikopleskarstvo. Alle Rechte vorbehalten.',
    },
  },

  it: {
    nav: {
      services: 'Servizi',
      calculator: 'Calcolatore',
      whyUs: 'Perché noi',
      faq: 'FAQ',
      contact: 'Contatto',
      requestQuote: 'Richiedi preventivo',
    },
    hero: {
      badge: 'SKD 43.350 · TINTEGGIATURA E FINITURE',
      titlePart1: 'Moderna e precisa',
      titlePart2: 'tinteggiatura',
      titlePart3: 'per la tua casa',
      subtitle:
        'Specializzati in rasatura, stuccatura e verniciatura airless per superfici impeccabili e uniformi.',
      ctaPrimary: 'Richiedi sopralluogo e preventivo gratuito',
      ctaSecondary: 'I nostri servizi',
      cleanliness: '100% Pulizia sul cantiere',
      precision: 'Esecuzione meticolosa',
      deadlines: 'Rispetto rigoroso dei tempi',
    },
    services: {
      tag: 'I NOSTRI SERVIZI',
      title: 'Tinteggiatura dalla preparazione alla finitura',
      items: [
        {
          number: '01',
          title: 'Stuccatura e rasatura',
          description:
            'Rasatura professionale delle pareti per una superficie perfettamente liscia e piana.',
          image: '/images/service-kitanje.jpg',
          features: [
            'Finiture standard da Q1 a Q4',
            'Levigatura senza polvere con aspirazione',
            'Riparazione crepe e stuccatura giunti',
          ],
        },
        {
          number: '02',
          title: 'Verniciatura Airless',
          highlightTitle: true,
          description:
            'Applicazione a spruzzo airless per uno strato uniforme senza striature o segni di rullo.',
          image: '/images/service-airless.jpg',
          features: [
            'Finitura liscia senza texture da rullo',
            'Velocità ed omogeneità perfetta',
            'Pitture lavabili di altissima qualità',
          ],
        },
        {
          number: '03',
          title: 'Protezione e ristrutturazione',
          description:
            'Protezione completa di pavimenti, infissi e arredi prima di ogni intervento.',
          image: '/images/service-prenova.jpg',
          features: [
            'Film protettivi ad alta densità',
            'Nastri di precisione per bordi netti',
            'Ambienti puliti a fine lavoro',
          ],
        },
      ],
    },
    calculator: {
      tag: 'CALCOLATORE SERVIZI',
      title: 'Stima indicativa per il tuo progetto',
      subtitle: 'Scegli il tipo di lavorazione e regola la superficie per ottenere subito un preventivo trasparente.',
      step1Title: '1. Scegli il servizio',
      serviceAirless: 'Tinteggiatura Airless',
      serviceAirlessSub: 'Doppia mano uniforme senza segni di rullo',
      serviceKitanje: 'Rasatura + Tinteggiatura',
      serviceKitanjeSub: 'Rasatura Q3/Q4 + levigatura aspirata',
      servicePrenova: 'Ristrutturazione completa',
      servicePrenovaSub: 'Risanamento crepe, rete e finitura',
      step2Title: '2. Superficie approssimativa pareti / soffitti',
      presets: {
        studio: 'Monolocale (40 m²)',
        twoRoom: 'Bilocale (90 m²)',
        threeRoom: 'Trilocale (150 m²)',
        house: 'Casa (250 m²)',
      },
      highCeilingsLabel: 'Soffitti alti superiori a 2.80 m (+15% per allestimento ponteggi)',
      estimateTitle: 'Stima investimento',
      estimateBadge: 'Indicativo',
      estimateNote: '*Importo stimato con manodopera specializzata e materiali inclusi.',
      durationLabel: 'Tempo stimato di esecuzione:',
      daysOne: 'giorno lavorativo',
      daysTwo: 'giorni lavorativi',
      daysMany: 'giorni lavorativi',
      includedTitle: 'Sempre incluso:',
      includedItems: [
        '100% protezione pavimenti, infissi e porte con teli',
        'Levigatura meccanica aspirata con filtri HEPA',
        'Pitture lavabili di qualità superiore ad alta copertura',
        'Pulizia accurata del cantiere al termine dei lavori',
      ],
      ctaInspection: 'Prenota sopralluogo gratuito',
      ctaWhatsapp: 'Invia questa stima su WhatsApp',
    },
    difference: {
      tag: 'DAST DIFFERENCE',
      titlePart1: 'Perché scegliere noi? Non ci limitiamo a tinteggiare — ',
      titleHighlight: 'perfezioniamo le tue pareti.',
      subtitle:
        'Trattiamo ogni progetto con la massima cura. Dalla preparazione alla mano finale: precisione, pulizia e rispetto dei tempi.',
      cards: [
        {
          number: '01',
          title: 'Attrezzatura professionale',
          description:
            'Pompe airless all’avanguardia, levigatrici senza polvere e allineamento laser.',
          icon: 'tool',
        },
        {
          number: '02',
          title: 'Lavoro senza polvere',
          description:
            'Levigatura aspirata e applicazione airless per ambienti sempre puliti.',
          icon: 'wind',
        },
        {
          number: '03',
          title: 'Prezzi trasparenti',
          description:
            'Preventivo chiaro e dettagliato senza costi nascosti.',
          icon: 'document',
        },
        {
          number: '04',
          title: 'Esecuzione strutturata',
          description:
            'Tempistiche certe, piano di lavoro programmato e monitoraggio continuo.',
          icon: 'calendar',
        },
      ],
    },
    faq: {
      tag: 'DOMANDE FREQUENTI',
      title: 'Tutto quello che c’è da sapere prima di iniziare',
      subtitle: 'Risposte alle domande più frequenti su tempi, pulizia, materiali e preventivi.',
      items: [
        {
          q: 'Qual è il vantaggio dell’Airless rispetto al rullo tradizionale?',
          a: 'Il sistema airless nebulizza la pittura ad alta pressione idraulica senza aria, creando un film liscio e omogeneo. Nessun segno di rullo o imperfezione, con maggiore lavabilità e durata.',
        },
        {
          q: 'Dobbiamo proteggere noi mobili, pavimenti e infissi?',
          a: 'No, la mascheratura e protezione accurata dell’immobile è totalmente a nostro carico con teli e nastri speciali.',
        },
        {
          q: 'Quanta polvere si genera durante la rasatura e carteggiatura?',
          a: 'Utilizziamo levigatrici a stelo collegate direttamente ad aspiratori professionali con filtri HEPA, aspirando oltre il 95% della polvere all’origine.',
        },
        {
          q: 'Quanto dura un intervento medio (es. appartamento 80–100 m²)?',
          a: 'Per una tinteggiatura airless standard servono solitamente 1–2 giorni lavorativi; per rasatura completa e tinteggiatura circa 3–5 giorni.',
        },
        {
          q: 'Il sopralluogo è gratuito e vincolante?',
          a: 'Il sopralluogo in Slovenia è 100% gratuito e senza alcun impegno. Forniamo un preventivo chiaro entro 24–48 ore.',
        },
        {
          q: 'Quali materiali e tinte utilizzate?',
          a: 'Utilizziamo esclusivamente marchi certificati di primo livello (JUB, Knauf, Caparol, Sto, Baumit) ad alta lavabilità e traspirabilità.',
        },
      ],
      boxTitle: 'Hai una domanda specifica sul tuo progetto?',
      boxSubtitle: 'Contattaci o scrivici, saremo felici di consigliarti al meglio.',
      boxCta: 'Fai una domanda',
    },
    contact: {
      phone: '+386 69 950 491',
      workingHoursTitle: 'ORARIO DI LAVORO',
      workingHoursText: 'Lun–Ven: 7:00–17:00 · Sab: su appuntamento',
      requestInspection: 'Richiedi un sopralluogo gratuito',
      whatsapp: 'WhatsApp',
      bannerBadge: 'DAST',
      bannerTitle: 'Lavori che lasciano il segno.',
      modalTitle: 'Richiedi sopralluogo e preventivo gratuito',
      modalSubtitle:
        'Compila il modulo o contattaci direttamente su WhatsApp o telefono.',
      nameLabel: 'Nome e Cognome',
      phoneLabel: 'Numero di telefono',
      serviceLabel: 'Servizio richiesto',
      areaLabel: 'Superficie stimata (m²)',
      locationLabel: 'Località / Città',
      messageLabel: 'Messaggio / Note',
      submitButton: 'Invia richiesta',
      successMessage: 'Grazie! La tua richiesta è stata inviata con successo.',
    },
    footer: {
      description:
        'Specialista leader nelle finiture murarie e tinteggiatura in Slovenia. Stuccatura, tinteggiatura airless e finiture di pregio.',
      navTitle: 'NAVIGAZIONE',
      contactTitle: 'CONTATTO',
      rights: '© 2026 DAST Slikopleskarstvo. Tutti i diritti riservati.',
    },
  },
};
