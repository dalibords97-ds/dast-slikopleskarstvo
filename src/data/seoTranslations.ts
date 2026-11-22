import { SupportedLang } from './legalTranslations';

export interface RegionItem {
  eyebrow: string;
  name: string;
  cities: string[];
  description: string;
}

export interface SeoTranslation {
  imageAlts: {
    hero: string;
    serviceKitanje: string;
    serviceAirless: string;
    servicePrenova: string;
    showcase: string;
    logo: string;
  };
  serviceAreas: {
    tag: string;
    title: string;
    subtitle: string;
    regions: RegionItem[];
    specialtiesLabel: string;
    specialties: string[];
    cta: string;
  };
  a11y: {
    scrollDown: string;
    selectLanguage: string;
    toggleMenu: string;
    callPhone: string;
    sendWhatsApp: string;
    sendEmail: string;
    closeModal: string;
    areaSliderLabel: string;
    requestQuoteFor: string;
  };
}

export const seoTranslations: Record<SupportedLang, SeoTranslation> = {
  sl: {
    imageAlts: {
      hero: 'Strojno airless beljenje in glajenje sten Q4 Nova Gorica - DAST',
      serviceKitanje: 'Glajenje in kitanje sten Q1–Q4 ter suhomontažna dela Knauf Goriška - DAST',
      serviceAirless: 'Strojno airless slikopleskarstvo in beljenje prostorov Koper in Ljubljana - DAST',
      servicePrenova: 'Zaključna gradbena dela, sanacija vlage in plesni ter prenova sten - DAST',
      showcase: 'Vrhunska zaključna gradbena dela in gladke stene Q4 po meri - DAST',
      logo: 'DAST — Slikopleskarstvo in zaključna gradbena dela logotip',
    },
    serviceAreas: {
      tag: 'Področje delovanja',
      title: 'Zaključna gradbena dela na Goriškem, Obali in v Ljubljani',
      subtitle:
        'S sedežem v Šmartnem (Goriška Brda) hitro in zanesljivo izvajamo suhomontažna dela (Knauf), glajenje in kitanje sten Q4, strojno airless beljenje ter sanacijo vlage in plesni na objektih po zahodni in osrednji Sloveniji.',
      regions: [
        {
          eyebrow: 'Primarna regija · Sedež',
          name: 'Goriška & Nova Gorica',
          cities: [
            'Šmartno',
            'Nova Gorica',
            'Šempeter pri Gorici',
            'Solkan',
            'Ajdovščina',
          ],
          description:
            'Hitri brezplačni ogledi in izvedba slikopleskarskih, suhomontažnih ter zaključnih gradbenih del za novogradnje, hiše, stanovanja in poslovne prostore na celotnem Goriškem.',
        },
        {
          eyebrow: 'Primorska · Obalno-kraška',
          name: 'Obala & Koper',
          cities: ['Koper', 'Izola', 'Piran', 'Sežana'],
          description:
            'Specializirana sanacija vlage in plesni, protialergijski ter paroprepustni premazi in strojno airless beljenje apartmajev, vil in stanovanjskih objektov na Obali in Krasu.',
        },
        {
          eyebrow: 'Osrednja Slovenija',
          name: 'Osrednja Slovenija',
          cities: ['Ljubljana z okolico'],
          description:
            'Celovito glajenje in kitanje sten Q1–Q4, Knauf sistemi in vrhunsko airless barvanje večjih stanovanj, hiš in poslovnih prostorov v Ljubljani ter širši okolici.',
        },
      ],
      specialtiesLabel: 'Specializirane storitve na terenu',
      specialties: [
        'Zaključna gradbena dela',
        'Suhomontažna dela (Knauf)',
        'Glajenje in kitanje sten Q4',
        'Strojno airless beljenje',
        'Sanacija vlage in plesni',
      ],
      cta: 'Preveri razpoložljivost na tvoji lokaciji',
    },
    a11y: {
      scrollDown: 'Pomakni se na storitve',
      selectLanguage: 'Izberi jezik spletne strani',
      toggleMenu: 'Odpri ali zapri navigacijski meni',
      callPhone: 'Pokliči DAST po telefonu',
      sendWhatsApp: 'Pošlji sporočilo DAST na WhatsApp',
      sendEmail: 'Pošlji e-pošto na info@dast-finish.com',
      closeModal: 'Zapri obrazec za povpraševanje',
      areaSliderLabel: 'Okvirna kvadratura sten in stropov v kvadratnih metrih',
      requestQuoteFor: 'Pošlji povpraševanje za storitev',
    },
  },

  sr: {
    imageAlts: {
      hero: 'Mašinsko airless krečenje i gletovanje zidova Q4 Nova Gorica - DAST',
      serviceKitanje: 'Gletovanje i ravnanje zidova Q1–Q4 i suvomontažni radovi Knauf Goriška - DAST',
      serviceAirless: 'Mašinsko airless molerisanje prostora Koper i Ljubljana - DAST',
      servicePrenova: 'Završni građevinski radovi, sanacija vlage i buđi i obnova zidova - DAST',
      showcase: 'Vrhunski završni građevinski radovi i glatki zidovi Q4 - DAST',
      logo: 'DAST — Molerski i završni građevinski radovi logotip',
    },
    serviceAreas: {
      tag: 'Područje delovanja',
      title: 'Završni građevinski radovi u Goriškoj, na Obali i u Ljubljani',
      subtitle:
        'Sa sedištem u Šmartnom (Goriška Brda) brzo i pouzdano izvodimo suvomontažne radove (Knauf), gletovanje i ravnanje zidova Q4, mašinsko airless krečenje i sanaciju vlage i buđi širom zapadne i centralne Slovenije.',
      regions: [
        {
          eyebrow: 'Primarna regija · Sedište',
          name: 'Goriška & Nova Gorica',
          cities: [
            'Šmartno',
            'Nova Gorica',
            'Šempeter pri Gorici',
            'Solkan',
            'Ajdovščina',
          ],
          description:
            'Brzi besplatni obilasci i izvođenje molerskih, suvomontažnih i završnih građevinskih radova za novogradnje, kuće, stanove i poslovne prostore u celoj Goriškoj.',
        },
        {
          eyebrow: 'Primorska · Obala',
          name: 'Obala & Koper',
          cities: ['Koper', 'Izola', 'Piran', 'Sežana'],
          description:
            'Specijalizovana sanacija vlage i buđi, paropropusni premazi i mašinsko airless krečenje apartmana, vila i stambenih objekata na slovenačkoj obali i Krasu.',
        },
        {
          eyebrow: 'Centralna Slovenija',
          name: 'Centralna Slovenija',
          cities: ['Ljubljana sa okolinom'],
          description:
            'Kompletno gletovanje i ravnanje zidova Q1–Q4, Knauf sistemi i precizno airless farbanje većih stanova, kuća i poslovnih prostora u Ljubljani i okolini.',
        },
      ],
      specialtiesLabel: 'Specijalizovane usluge na terenu',
      specialties: [
        'Završni građevinski radovi',
        'Suvomontažni radovi (Knauf)',
        'Gletovanje i ravnanje zidova Q4',
        'Mašinsko airless krečenje',
        'Sanacija vlage i buđi',
      ],
      cta: 'Proveri dostupnost na tvojoj lokaciji',
    },
    a11y: {
      scrollDown: 'Pomeri se na usluge',
      selectLanguage: 'Izaberi jezik sajta',
      toggleMenu: 'Otvori ili zatvori navigacioni meni',
      callPhone: 'Pozovi DAST telefonom',
      sendWhatsApp: 'Pošalji poruku DAST-u na WhatsApp',
      sendEmail: 'Pošalji e-poštu na info@dast-finish.com',
      closeModal: 'Zatvori formu za upit',
      areaSliderLabel: 'Okvirna kvadratura zidova i plafona u kvadratnim metrima',
      requestQuoteFor: 'Pošalji upit za uslugu',
    },
  },

  en: {
    imageAlts: {
      hero: 'Airless spray painting and Q4 wall skimming in Nova Gorica - DAST',
      serviceKitanje: 'Q1–Q4 wall plastering, skimming and Knauf drywall works Goriška - DAST',
      serviceAirless: 'Machine airless interior painting in Koper and Ljubljana - DAST',
      servicePrenova: 'Interior finishing works, moisture and mold remediation - DAST',
      showcase: 'Luxury interior finishing works and flawless Q4 walls - DAST',
      logo: 'DAST — Painting and Interior Finishing Works Logo',
    },
    serviceAreas: {
      tag: 'Service Areas',
      title: 'Interior Finishing Works Across Goriška, Koper & Ljubljana',
      subtitle:
        'Based in Šmartno (Goriška Brda), we deliver reliable drywall systems (Knauf), Q1–Q4 wall skimming and plastering, machine airless painting, and moisture & mold remediation across western and central Slovenia.',
      regions: [
        {
          eyebrow: 'Primary Region · Headquarters',
          name: 'Goriška & Nova Gorica',
          cities: [
            'Šmartno',
            'Nova Gorica',
            'Šempeter pri Gorici',
            'Solkan',
            'Ajdovščina',
          ],
          description:
            'Fast free on-site inspections and complete painting, drywall, and interior finishing works for new builds, homes, apartments, and commercial properties across Goriška.',
        },
        {
          eyebrow: 'Coast & Karst',
          name: 'Coast & Koper',
          cities: ['Koper', 'Izola', 'Piran', 'Sežana'],
          description:
            'Specialized moisture and mold remediation, breathable mineral coatings, and airless spray painting for coastal villas, apartments, and residential properties.',
        },
        {
          eyebrow: 'Central Slovenia',
          name: 'Central Slovenia',
          cities: ['Ljubljana & Surroundings'],
          description:
            'Full Q1–Q4 wall skimming, Knauf drywall installation, and precision airless painting for larger residences, offices, and luxury renovations in Ljubljana.',
        },
      ],
      specialtiesLabel: 'On-site core specialties',
      specialties: [
        'Interior finishing works',
        'Drywall systems (Knauf)',
        'Q4 wall skimming & plastering',
        'Machine airless painting',
        'Moisture & mold remediation',
      ],
      cta: 'Check availability in your area',
    },
    a11y: {
      scrollDown: 'Scroll down to services',
      selectLanguage: 'Select website language',
      toggleMenu: 'Open or close navigation menu',
      callPhone: 'Call DAST by phone',
      sendWhatsApp: 'Message DAST on WhatsApp',
      sendEmail: 'Send email to info@dast-finish.com',
      closeModal: 'Close quote request modal',
      areaSliderLabel: 'Estimated wall and ceiling area in square meters',
      requestQuoteFor: 'Request a quote for service',
    },
  },

  de: {
    imageAlts: {
      hero: 'Maschinelles Airless-Streichen und Q4-Wandspachtelung Nova Gorica - DAST',
      serviceKitanje: 'Q1–Q4 Spachtelarbeiten und Knauf Trockenbau Goriška - DAST',
      serviceAirless: 'Professionelle Airless-Malerarbeiten in Koper und Ljubljana - DAST',
      servicePrenova: 'Innenausbau, Feuchtigkeits- und Schimmelsanierung - DAST',
      showcase: 'Hochwertiger Innenausbau und makellose Q4-Wandoberflächen - DAST',
      logo: 'DAST — Malerarbeiten und Innenausbau Logo',
    },
    serviceAreas: {
      tag: 'Einsatzgebiet',
      title: 'Maler- & Ausbauarbeiten in Goriška, Koper und Ljubljana',
      subtitle:
        'Mit Sitz in Šmartno (Goriška Brda) führen wir zuverlässig Trockenbauarbeiten (Knauf), Q1–Q4-Spachtel- und Glättarbeiten, maschinelles Airless-Streichen sowie Feuchtigkeits- und Schimmelsanierung in West- und Zentralslowenien aus.',
      regions: [
        {
          eyebrow: 'Hauptregion · Firmensitz',
          name: 'Goriška & Nova Gorica',
          cities: [
            'Šmartno',
            'Nova Gorica',
            'Šempeter pri Gorici',
            'Solkan',
            'Ajdovščina',
          ],
          description:
            'Schnelle kostenlose Besichtigungen sowie Maler-, Trockenbau- und Ausbauarbeiten für Neubauten, Häuser, Wohnungen und Gewerbeobjekte in der gesamten Region Goriška.',
        },
        {
          eyebrow: 'Küste & Karst',
          name: 'Küste & Koper',
          cities: ['Koper', 'Izola', 'Piran', 'Sežana'],
          description:
            'Fachgerechte Feuchtigkeits- und Schimmelsanierung, diffusionsoffene Anstriche und Airless-Malerarbeiten für Apartments, Villen und Wohnobjekte an der Küste.',
        },
        {
          eyebrow: 'Zentralslowenien',
          name: 'Zentralslowenien',
          cities: ['Ljubljana & Umgebung'],
          description:
            'Umfassende Q1–Q4-Spachtelarbeiten, Knauf-Systeme und präzise Airless-Beschichtungen für größere Wohnungen, Häuser und Geschäftsräume im Raum Ljubljana.',
        },
      ],
      specialtiesLabel: 'Kernleistungen vor Ort',
      specialties: [
        'Innenausbauarbeiten',
        'Trockenbau (Knauf)',
        'Q4-Wandglättung & Spachteln',
        'Maschinelles Airless-Streichen',
        'Feuchtigkeits- & Schimmelsanierung',
      ],
      cta: 'Verfügbarkeit an Ihrem Standort prüfen',
    },
    a11y: {
      scrollDown: 'Zu den Leistungen scrollen',
      selectLanguage: 'Sprache der Website auswählen',
      toggleMenu: 'Navigationsmenü öffnen oder schließen',
      callPhone: 'DAST telefonisch anrufen',
      sendWhatsApp: 'DAST über WhatsApp kontaktieren',
      sendEmail: 'E-Mail an info@dast-finish.com senden',
      closeModal: 'Anfrageformular schließen',
      areaSliderLabel: 'Geschätzte Wand- und Deckenfläche in Quadratmetern',
      requestQuoteFor: 'Angebot anfordern für Leistung',
    },
  },

  it: {
    imageAlts: {
      hero: 'Tinteggiatura airless e rasatura pareti Q4 Nova Gorica - DAST',
      serviceKitanje: 'Rasatura e stuccatura pareti Q1–Q4 e cartongesso Knauf Goriška - DAST',
      serviceAirless: 'Tinteggiatura meccanizzata airless a Capodistria e Lubiana - DAST',
      servicePrenova: 'Lavori di finitura edile, risanamento umidità e muffa - DAST',
      showcase: 'Finiture interne di pregio e pareti lisce Q4 - DAST',
      logo: 'DAST — Tinteggiatura e finiture edili logo',
    },
    serviceAreas: {
      tag: 'Area di intervento',
      title: 'Finiture edili nel Goriziano, sulla Costa e a Lubiana',
      subtitle:
        'Con sede a Šmartno (Goriška Brda), eseguiamo opere in cartongesso (Knauf), rasatura e stuccatura pareti Q4, tinteggiatura airless e risanamento da umidità e muffa nella Slovenia occidentale e centrale.',
      regions: [
        {
          eyebrow: 'Regione primaria · Sede',
          name: 'Goriška & Nova Gorica',
          cities: [
            'Šmartno',
            'Nova Gorica',
            'Šempeter pri Gorici',
            'Solkan',
            'Ajdovščina',
          ],
          description:
            'Sopralluoghi gratuiti rapidi e lavori completi di tinteggiatura, cartongesso e finitura edile per nuove costruzioni, case, appartamenti e locali commerciali.',
        },
        {
          eyebrow: 'Litorale · Capodistria',
          name: 'Costa & Capodistria (Koper)',
          cities: ['Koper', 'Izola', 'Piran', 'Sežana'],
          description:
            'Risanamento mirato di umidità e muffa, pitture traspiranti ad alte prestazioni e tinteggiatura airless per ville, appartamenti e immobili lungo la costa.',
        },
        {
          eyebrow: 'Slovenia centrale',
          name: 'Slovenia centrale',
          cities: ['Lubiana (Ljubljana) e dintorni'],
          description:
            'Rasatura completa Q1–Q4, sistemi Knauf e verniciatura airless di precisione per residenze, uffici e ristrutturazioni di pregio a Lubiana e dintorni.',
        },
      ],
      specialtiesLabel: 'Servizi specializzati sul territorio',
      specialties: [
        'Lavori di finitura edile',
        'Opere in cartongesso (Knauf)',
        'Rasatura e stuccatura pareti Q4',
        'Tinteggiatura meccanizzata airless',
        'Risanamento umidità e muffa',
      ],
      cta: 'Verifica la disponibilità nella tua zona',
    },
    a11y: {
      scrollDown: 'Scorri ai servizi',
      selectLanguage: 'Seleziona la lingua del sito',
      toggleMenu: 'Apri o chiudi il menu di navigazione',
      callPhone: 'Chiama DAST telefonicamente',
      sendWhatsApp: 'Invia un messaggio a DAST su WhatsApp',
      sendEmail: 'Invia una e-mail a info@dast-finish.com',
      closeModal: 'Chiudi la finestra di richiesta preventivo',
      areaSliderLabel: 'Superficie stimata di pareti e soffitti in metri quadrati',
      requestQuoteFor: 'Richiedi preventivo per il servizio',
    },
  },
};
