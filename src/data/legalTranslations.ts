export type SupportedLang = 'sl' | 'sr' | 'en' | 'de' | 'it';

export type LegalPageSlug = '/impressum' | '/splosni-pogoji' | '/politika-zasebnosti';

export interface LegalSection {
  number: string;
  title: string;
  content: string;
}

export interface ImpressumField {
  label: string;
  value: string;
  href?: string;
}

export interface LegalTranslation {
  ui: {
    legalTitle: string;
    backToHome: string;
    lastUpdatedLabel: string;
    lastUpdatedValue: string;
    primaryLanguageNote?: string;
    links: {
      impressum: string;
      terms: string;
      privacy: string;
    };
    formConsent: {
      prefix: string;
      termsLink: string;
      and: string;
      privacyLink: string;
      suffix: string;
    };
  };
  impressum: {
    seoTitle: string;
    seoDescription: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    fields: ImpressumField[];
    activitiesTitle: string;
    activitiesText: string;
  };
  terms: {
    seoTitle: string;
    seoDescription: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    sections: LegalSection[];
  };
  privacy: {
    seoTitle: string;
    seoDescription: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    sections: LegalSection[];
  };
}

export const legalTranslations: Record<SupportedLang, LegalTranslation> = {
  sl: {
    ui: {
      legalTitle: 'Pravne informacije',
      backToHome: 'Nazaj na domačo stran',
      lastUpdatedLabel: 'Zadnja posodobitev',
      lastUpdatedValue: 'November 2026',
      links: {
        impressum: 'Podatki o ponudniku',
        terms: 'Splošni pogoji poslovanja',
        privacy: 'Politika zasebnosti',
      },
      formConsent: {
        prefix: 'S pošiljanjem povpraševanja se strinjam s ',
        termsLink: 'Splošnimi pogoji poslovanja',
        and: ' in ',
        privacyLink: 'Politiko zasebnosti',
        suffix: '.',
      },
    },
    impressum: {
      seoTitle: 'Podatki o ponudniku (Impressum) — DAST',
      seoDescription:
        'Uradni podatki o ponudniku storitev DAST — ZAKLJUČNA GRADBENA DELA, DALIBOR STEFANOVIĆ, S.P., Šmartno 35, 5211 Kojsko, Slovenija.',
      eyebrow: 'Pravne informacije · Impressum',
      title: 'Podatki o ponudniku',
      subtitle:
        'Uradni identifikacijski in registrski podatki izvajalca storitev blagovne znamke DAST.',
      fields: [
        {
          label: 'Naziv podjetja',
          value: 'ZAKLJUČNA GRADBENA DELA, DALIBOR STEFANOVIĆ, S.P.',
        },
        {
          label: 'Blagovna znamka',
          value: 'DAST',
        },
        {
          label: 'Sedež podjetja',
          value: 'Šmartno 35, 5211 Kojsko, Slovenija',
        },
        {
          label: 'Matična številka',
          value: '9919937000',
        },
        {
          label: 'Davčna številka',
          value: '27431673 (ni zavezanec za DDV)',
        },
        {
          label: 'Registrski organ',
          value: 'AJPES',
        },
        {
          label: 'Odgovorna oseba',
          value: 'Dalibor Stefanović, s.p.',
        },
        {
          label: 'E-pošta',
          value: 'info@dast-finish.com',
          href: 'mailto:info@dast-finish.com',
        },
        {
          label: 'Spletna stran',
          value: 'https://dast-finish.com',
          href: 'https://dast-finish.com',
        },
      ],
      activitiesTitle: 'Glavne dejavnosti',
      activitiesText:
        'Suhomontažna dela, glajenje in kitanje sten (Q1–Q4), strojno (airless) in ročno slikopleskarstvo, sanacija vlage in plesni ter zaključna gradbena dela v regijah Goriška, Koper in Ljubljana.',
    },
    terms: {
      seoTitle: 'Splošni pogoji poslovanja — DAST',
      seoDescription:
        'Splošni pogoji poslovanja in omejitev odgovornosti za storitve blagovne znamke DAST (ZAKLJUČNA GRADBENA DELA, DALIBOR STEFANOVIĆ, S.P.).',
      eyebrow: 'Pravni pogoji · dast-finish.com',
      title: 'Splošni pogoji poslovanja in omejitev odgovornosti',
      subtitle:
        'Pogoji uporabe spletne strani dast-finish.com in izvedbe slikopleskarskih ter zaključnih gradbenih del.',
      sections: [
        {
          number: '01',
          title: 'Splošne določbe in veljavnost ponudb',
          content:
            'Ti splošni pogoji veljajo za vse obiskovalce spletne strani dast-finish.com ter za vse naročnike storitev podjetja ZAKLJUČNA GRADBENA DELA, DALIBOR STEFANOVIĆ, S.P. (blagovna znamka DAST, v nadaljevanju: izvajalec). Informacije in opisi storitev na spletni strani so informativne narave. Zavezujoča ponudba oziroma predračun se pripravi pisno na podlagi ogleda objekta in izmer. Veljavnost pisne ponudbe je 15 dni od izdaje, razen če je na ponudbi izrecno določeno drugače.',
        },
        {
          number: '02',
          title: 'Pogoji na gradbišču in obveznosti naročnika',
          content:
            'Naročnik pred pričetkom del zagotovi prost in varen dostop do objekta in delovnih površin, priključek na električno energijo (230V) in vodo ter ustrezne pogoje v prostoru v skladu s tehničnimi navodili proizvajalcev (praviloma temperatura med +10 °C in +25 °C ter ustrezno suhe podlage). Izvajalec ne odgovarja za napake, zamude ali poškodbe, ki nastanejo zaradi neprimernih pogojev na gradbišču, napak predhodnih izvajalcev ali gradbene vlage, na katero je bil naročnik opozorjen.',
        },
        {
          number: '03',
          title: 'Dodatna in nepredvidena dela',
          content:
            'Vsa dodatna dela, sanacija skritih napak podlage ali naknadne spremembe naročnika se obračunajo posebej po dogovoru oziroma ceniku izvajalca; rok izvedbe se v takšnih primerih ustrezno podaljša.',
        },
        {
          number: '04',
          title: 'Kakovost izvedbe (Q1–Q4) in primopredaja del',
          content:
            'Dela se izvajajo v skladu s strokovnimi pravili in dogovorjeno ravnjo obdelave (Q1–Q4; če ni posebej določeno, velja standard Q2). Morebitne očitne napake mora naročnik grajati ob primopredaji. Pregled površin poteka pri običajni dnevni svetlobi z razdalje vsaj 1,5 metra (razen če je bil izrecno dogovorjen in plačan standard Q4).',
        },
        {
          number: '05',
          title: 'Plačilni pogoji in lastninski pridržek',
          content:
            'Naročnik poravna obveznosti v rokih, navedenih na ponudbi oziroma računu. Ob zamudi ima izvajalec pravico do zakonskih zamudnih obresti in začasne prekinitve del. Vgrajeni material ostane v lasti izvajalca do celotnega plačila.',
        },
        {
          number: '06',
          title: 'Avtorske pravice',
          content:
            'Vse vsebine na dast-finish.com (besedila, logotipi, grafike, fotografije del in ponudbe) so avtorsko zaščitene in v lasti izvajalca (DAST). Kopiranje ali posredovanje ponudb tretjim osebam brez pisnega soglasja ni dovoljeno.',
        },
        {
          number: '07',
          title: 'Reševanje sporov',
          content:
            'Morebitne spore stranki rešujeta sporazumno, sicer je stvarno pristojno sodišče v Novi Gorici po pravu Republike Slovenije.',
        },
      ],
    },
    privacy: {
      seoTitle: 'Politika zasebnosti (GDPR / ZVOP-2) — DAST',
      seoDescription:
        'Informacije o obdelavi osebnih podatkov v skladu z GDPR in ZVOP-2 pri izvajalcu DAST (ZAKLJUČNA GRADBENA DELA, DALIBOR STEFANOVIĆ, S.P.).',
      eyebrow: 'Varstvo podatkov · GDPR / ZVOP-2',
      title: 'Politika zasebnosti',
      subtitle:
        'Transparentna obdelava in varstvo osebnih podatkov v skladu z Uredbo (EU) 2016/679 (GDPR) in Zakonom o varstvu osebnih podatkov (ZVOP-2).',
      sections: [
        {
          number: '01',
          title: 'Upravljavec osebnih podatkov',
          content:
            'ZAKLJUČNA GRADBENA DELA, DALIBOR STEFANOVIĆ, S.P. (DAST), Šmartno 35, 5211 Kojsko, Slovenija, e-pošta: info@dast-finish.com.',
        },
        {
          number: '02',
          title: 'Namen in pravna podlaga obdelave',
          content:
            'Podatke, posredovane preko kontaktnega obrazca, e-pošte ali telefona (ime, priimek, e-naslov, telefon, naslov objekta in opis povpraševanja), obdelujemo za pripravo ponudbe, izvedbo del, komunikacijo in izpolnjevanje zakonskih obveznosti (6. člen GDPR – točki b in c).',
        },
        {
          number: '03',
          title: 'Pogodbeni obdelovalci',
          content:
            'Podatkov ne prodajamo. Dostop imajo zgolj nujni tehnični in računovodski ponudniki (npr. Vercel, Resend, računovodstvo) ob spoštovanju GDPR.',
        },
        {
          number: '04',
          title: 'Rok hrambe',
          content:
            'Podatki iz neuresničenih povpraševanj se hranijo najdlje 12 mesecev od zadnjega stika, podatki na računih in poslovni dokumentaciji pa v skladu z zakonskimi roki (10 let).',
        },
        {
          number: '05',
          title: 'Pravice posameznika',
          content:
            'Pravica do vpogleda, popravka, izbrisa, omejitve obdelave in ugovora preko info@dast-finish.com ter pravica do pritožbe pri Informacijskem pooblaščencu RS.',
        },
      ],
    },
  },

  sr: {
    ui: {
      legalTitle: 'Pravne informacije',
      backToHome: 'Nazad na početnu stranicu',
      lastUpdatedLabel: 'Poslednje ažuriranje',
      lastUpdatedValue: 'Novembar 2026',
      primaryLanguageNote:
        'Napomena: Primarna pravno obavezujuća verzija pravnih dokumenata je na slovenačkom jeziku.',
      links: {
        impressum: 'Podaci o ponuđaču',
        terms: 'Opšti uslovi poslovanja',
        privacy: 'Politika privatnosti',
      },
      formConsent: {
        prefix: 'Slanjem upita slažem se sa ',
        termsLink: 'Opštim uslovima poslovanja',
        and: ' i ',
        privacyLink: 'Politikom privatnosti',
        suffix: '.',
      },
    },
    impressum: {
      seoTitle: 'Podaci o ponuđaču (Impressum) — DAST',
      seoDescription:
        'Zvanični podaci o ponuđaču usluga DAST — ZAKLJUČNA GRADBENA DELA, DALIBOR STEFANOVIĆ, S.P., Šmartno 35, 5211 Kojsko, Slovenija.',
      eyebrow: 'Pravne informacije · Impressum',
      title: 'Podaci o ponuđaču',
      subtitle:
        'Zvanični identifikacioni i registarski podaci izvođača usluga brenda DAST.',
      fields: [
        {
          label: 'Naziv firme',
          value: 'ZAKLJUČNA GRADBENA DELA, DALIBOR STEFANOVIĆ, S.P.',
        },
        {
          label: 'Brend',
          value: 'DAST',
        },
        {
          label: 'Sedište firme',
          value: 'Šmartno 35, 5211 Kojsko, Slovenija',
        },
        {
          label: 'Matični broj',
          value: '9919937000',
        },
        {
          label: 'Poreski broj',
          value: '27431673 (nije obveznik PDV-a)',
        },
        {
          label: 'Registarski organ',
          value: 'AJPES',
        },
        {
          label: 'Odgovorno lice',
          value: 'Dalibor Stefanović, s.p.',
        },
        {
          label: 'E-pošta',
          value: 'info@dast-finish.com',
          href: 'mailto:info@dast-finish.com',
        },
        {
          label: 'Veb stranica',
          value: 'https://dast-finish.com',
          href: 'https://dast-finish.com',
        },
      ],
      activitiesTitle: 'Glavne delatnosti',
      activitiesText:
        'Suvomontažni radovi, gletovanje i ravnanje zidova (Q1–Q4), mašinsko (airless) i ručno molerisanje, sanacija vlage i buđi, kao i završni građevinski radovi u regijama Goriška, Koper i Ljubljana.',
    },
    terms: {
      seoTitle: 'Opšti uslovi poslovanja — DAST',
      seoDescription:
        'Opšti uslovi poslovanja i ograničenje odgovornosti za usluge brenda DAST (ZAKLJUČNA GRADBENA DELA, DALIBOR STEFANOVIĆ, S.P.).',
      eyebrow: 'Pravni uslovi · dast-finish.com',
      title: 'Opšti uslovi poslovanja i ograničenje odgovornosti',
      subtitle:
        'Uslovi korišćenja veb stranice dast-finish.com i izvođenja molerskih i završnih građevinskih radova.',
      sections: [
        {
          number: '01',
          title: 'Opšte odredbe i važnost ponuda',
          content:
            'Ovi opšti uslovi važe za sve posetioce veb stranice dast-finish.com i za sve naručioce usluga preduzeća ZAKLJUČNA GRADBENA DELA, DALIBOR STEFANOVIĆ, S.P. (brend DAST, u daljem tekstu: izvođač). Informacije i opisi usluga na veb stranici su informativnog karaktera. Obavezujuća ponuda odnosno predračun priprema se pisanim putem na osnovu obilaska objekta i merenja. Važnost pisane ponude je 15 dana od izdavanja, osim ako na ponudi nije izričito navedeno drugačije.',
        },
        {
          number: '02',
          title: 'Uslovi na gradilištu i obaveze naručioca',
          content:
            'Naručilac pre početka radova obezbeđuje slobodan i bezbedan pristup objektu i radnim površinama, priključak na električnu energiju (230V) i vodu, kao i odgovarajuće uslove u prostoru u skladu sa tehničkim uputstvima proizvođača (po pravilu temperatura između +10 °C i +25 °C i adekvatno suve podloge). Izvođač ne odgovara za greške, kašnjenja ili oštećenja nastala usled neodgovarajućih uslova na gradilištu, grešaka prethodnih izvođača ili građevinske vlage na koju je naručilac bio upozoren.',
        },
        {
          number: '03',
          title: 'Dodatni i nepredviđeni radovi',
          content:
            'Svi dodatni radovi, sanacija skrivenih oštećenja podloge ili naknadne izmene naručioca obračunavaju se posebno po dogovoru odnosno cenovniku izvođača; rok izvođenja se u takvim slučajevima srazmerno produžava.',
        },
        {
          number: '04',
          title: 'Kvalitet izvođenja (Q1–Q4) i primopredaja radova',
          content:
            'Radovi se izvode u skladu sa pravilima struke i ugovorenim nivoom obrade (Q1–Q4; ako nije posebno ugovoreno, važi standard Q2). Eventualne vidljive nedostatke naručilac mora prijaviti prilikom primopredaje. Pregled površina vrši se pri uobičajenoj dnevnoj svetlosti sa udaljenosti od najmanje 1,5 metra (osim ako je izričito ugovoren i plaćen standard Q4).',
        },
        {
          number: '05',
          title: 'Uslovi plaćanja i zadržavanje prava svojine',
          content:
            'Naručilac izmiruje obaveze u rokovima navedenim na ponudi odnosno računu. U slučaju kašnjenja, izvođač ima pravo na zakonsku zateznu kamatu i privremenu obustavu radova. Ugrađeni materijal ostaje u vlasništvu izvođača do potpune isplate.',
        },
        {
          number: '06',
          title: 'Autorska prava',
          content:
            'Svi sadržaji na dast-finish.com (tekstovi, logotipi, grafike, fotografije radova i ponude) zaštićeni su autorskim pravima i u vlasništvu su izvođača (DAST). Kopiranje ili prosleđivanje ponuda trećim licima bez pisane saglasnosti nije dozvoljeno.',
        },
        {
          number: '07',
          title: 'Rešavanje sporova',
          content:
            'Eventualne sporove strane rešavaju sporazumno, u suprotnom je stvarno nadležan sud u Novoj Gorici po pravu Republike Slovenije.',
        },
      ],
    },
    privacy: {
      seoTitle: 'Politika privatnosti (GDPR / ZVOP-2) — DAST',
      seoDescription:
        'Informacije o obradi ličnih podataka u skladu sa GDPR i ZVOP-2 kod izvođača DAST (ZAKLJUČNA GRADBENA DELA, DALIBOR STEFANOVIĆ, S.P.).',
      eyebrow: 'Zaštita podataka · GDPR / ZVOP-2',
      title: 'Politika privatnosti',
      subtitle:
        'Transparentna obrada i zaštita ličnih podataka u skladu sa Uredbom (EU) 2016/679 (GDPR) i Zakonom o zaštiti ličnih podataka (ZVOP-2).',
      sections: [
        {
          number: '01',
          title: 'Rukovalac podacima',
          content:
            'ZAKLJUČNA GRADBENA DELA, DALIBOR STEFANOVIĆ, S.P. (DAST), Šmartno 35, 5211 Kojsko, Slovenija, e-pošta: info@dast-finish.com.',
        },
        {
          number: '02',
          title: 'Svrha i pravni osnov obrade',
          content:
            'Podatke dostavljene putem kontakt forme, e-pošte ili telefona (ime, prezime, e-adresa, telefon, adresa objekta i opis upita) obrađujemo radi pripreme ponude, izvođenja radova, komunikacije i ispunjavanja zakonskih obaveza (član 6. GDPR – tačke b i c).',
        },
        {
          number: '03',
          title: 'Ugovorni obrađivači',
          content:
            'Podatke ne prodajemo. Pristup imaju isključivo neophodni tehnički i računovodstveni pružaoci usluga (npr. Vercel, Resend, knjigovodstvo) uz puno poštovanje GDPR-a.',
        },
        {
          number: '04',
          title: 'Rok čuvanja',
          content:
            'Podaci iz nerealizovanih upita čuvaju se najduže 12 meseci od poslednjeg kontakta, dok se podaci na računima i poslovnoj dokumentaciji čuvaju u skladu sa zakonskim rokovima (10 godina).',
        },
        {
          number: '05',
          title: 'Prava pojedinca',
          content:
            'Imate pravo na uvid, ispravku, brisanje, ograničenje obrade i prigovor putem e-pošte info@dast-finish.com, kao i pravo na žalbu Informacionom povereniku Republike Slovenije.',
        },
      ],
    },
  },

  en: {
    ui: {
      legalTitle: 'Legal Information',
      backToHome: 'Back to Home',
      lastUpdatedLabel: 'Last updated',
      lastUpdatedValue: 'November 2026',
      primaryLanguageNote:
        'Note: Slovenian is the primary legally binding language of these legal notices.',
      links: {
        impressum: 'Legal Notice (Impressum)',
        terms: 'Terms & Conditions',
        privacy: 'Privacy Policy',
      },
      formConsent: {
        prefix: 'By submitting this inquiry, I agree to the ',
        termsLink: 'Terms & Conditions',
        and: ' and ',
        privacyLink: 'Privacy Policy',
        suffix: '.',
      },
    },
    impressum: {
      seoTitle: 'Legal Notice (Impressum) — DAST',
      seoDescription:
        'Official company details for DAST — ZAKLJUČNA GRADBENA DELA, DALIBOR STEFANOVIĆ, S.P., Šmartno 35, 5211 Kojsko, Slovenia.',
      eyebrow: 'Legal Notice · Impressum',
      title: 'Company Information',
      subtitle:
        'Official business identification and registration details for the DAST brand.',
      fields: [
        {
          label: 'Legal Entity Name',
          value: 'ZAKLJUČNA GRADBENA DELA, DALIBOR STEFANOVIĆ, S.P.',
        },
        {
          label: 'Brand Name',
          value: 'DAST',
        },
        {
          label: 'Registered Address',
          value: 'Šmartno 35, 5211 Kojsko, Slovenia',
        },
        {
          label: 'Registration Number',
          value: '9919937000',
        },
        {
          label: 'Tax ID Number',
          value: '27431673 (Non-VAT registered)',
        },
        {
          label: 'Registration Authority',
          value: 'AJPES (Slovenian Business Register)',
        },
        {
          label: 'Responsible Person',
          value: 'Dalibor Stefanović, s.p.',
        },
        {
          label: 'Email',
          value: 'info@dast-finish.com',
          href: 'mailto:info@dast-finish.com',
        },
        {
          label: 'Website',
          value: 'https://dast-finish.com',
          href: 'https://dast-finish.com',
        },
      ],
      activitiesTitle: 'Core Activities',
      activitiesText:
        'Drywall installation, wall skimming and plastering (Q1–Q4), machine (airless) and manual painting, moisture and mold remediation, and interior finishing construction works in the Goriška, Koper, and Ljubljana regions.',
    },
    terms: {
      seoTitle: 'Terms & Conditions — DAST',
      seoDescription:
        'General Terms and Conditions and Limitation of Liability for DAST services (ZAKLJUČNA GRADBENA DELA, DALIBOR STEFANOVIĆ, S.P.).',
      eyebrow: 'Legal Terms · dast-finish.com',
      title: 'General Terms & Conditions and Limitation of Liability',
      subtitle:
        'Terms governing the use of dast-finish.com and the execution of painting and finishing construction works.',
      sections: [
        {
          number: '01',
          title: 'General Provisions and Validity of Quotes',
          content:
            'These general terms and conditions apply to all visitors of dast-finish.com and to all clients of ZAKLJUČNA GRADBENA DELA, DALIBOR STEFANOVIĆ, S.P. (brand name DAST, hereinafter: the Contractor). Information and service descriptions on the website are for informational purposes only. A binding quote or pro forma invoice is prepared in writing following an on-site inspection and measurements. Written quotes are valid for 15 days from the date of issue unless expressly stated otherwise on the quote.',
        },
        {
          number: '02',
          title: 'Site Conditions and Client Obligations',
          content:
            'Prior to the commencement of work, the client must ensure unobstructed and safe access to the premises and working surfaces, electricity (230V) and water supply, and appropriate indoor conditions in accordance with manufacturer technical guidelines (typically temperatures between +10 °C and +25 °C and sufficiently dry substrates). The Contractor is not liable for defects, delays, or damage resulting from unsuitable site conditions, errors by previous contractors, or structural moisture about which the client was warned.',
        },
        {
          number: '03',
          title: 'Additional and Unforeseen Works',
          content:
            'Any additional works, remediation of hidden substrate defects, or subsequent client modifications are billed separately by mutual agreement or according to the Contractor’s price list; the completion deadline shall be extended accordingly in such cases.',
        },
        {
          number: '04',
          title: 'Workmanship Quality (Q1–Q4) and Handover',
          content:
            'Works are carried out in accordance with professional trade standards and the agreed surface finish level (Q1–Q4; unless otherwise specified, standard Q2 applies). Any apparent defects must be reported by the client upon handover. Surface inspection is conducted under normal daylight from a distance of at least 1.5 meters (unless standard Q4 has been expressly agreed upon and paid for).',
        },
        {
          number: '05',
          title: 'Payment Terms and Retention of Title',
          content:
            'The client shall settle all obligations within the deadlines specified on the quote or invoice. In the event of late payment, the Contractor is entitled to statutory default interest and temporary suspension of works. Installed materials remain the property of the Contractor until full payment is received.',
        },
        {
          number: '06',
          title: 'Copyright',
          content:
            'All content on dast-finish.com (texts, logos, graphics, project photographs, and quotes) is protected by copyright and owned by the Contractor (DAST). Copying or sharing quotes with third parties without prior written consent is prohibited.',
        },
        {
          number: '07',
          title: 'Dispute Resolution',
          content:
            'Any disputes shall be resolved amicably by the parties; failing that, the competent court in Nova Gorica shall have jurisdiction under the laws of the Republic of Slovenia.',
        },
      ],
    },
    privacy: {
      seoTitle: 'Privacy Policy (GDPR / ZVOP-2) — DAST',
      seoDescription:
        'Personal data processing policy under GDPR and Slovenian ZVOP-2 for DAST (ZAKLJUČNA GRADBENA DELA, DALIBOR STEFANOVIĆ, S.P.).',
      eyebrow: 'Data Protection · GDPR / ZVOP-2',
      title: 'Privacy Policy',
      subtitle:
        'Transparent processing and protection of personal data in accordance with Regulation (EU) 2016/679 (GDPR) and the Slovenian Personal Data Protection Act (ZVOP-2).',
      sections: [
        {
          number: '01',
          title: 'Data Controller',
          content:
            'ZAKLJUČNA GRADBENA DELA, DALIBOR STEFANOVIĆ, S.P. (DAST), Šmartno 35, 5211 Kojsko, Slovenia, email: info@dast-finish.com.',
        },
        {
          number: '02',
          title: 'Purpose and Legal Basis of Processing',
          content:
            'Personal data submitted via the contact form, email, or telephone (first name, last name, email address, phone number, property address, and inquiry description) is processed to prepare quotes, perform contracted works, communicate with you, and fulfill statutory obligations (Article 6(1)(b) and (c) GDPR).',
        },
        {
          number: '03',
          title: 'Data Processors',
          content:
            'We do not sell your personal data. Access is strictly limited to essential technical and accounting service providers (e.g., Vercel, Resend, accounting services) in full compliance with GDPR.',
        },
        {
          number: '04',
          title: 'Data Retention Period',
          content:
            'Data from unrealized inquiries is stored for a maximum of 12 months from the last contact, while data on invoices and business records is retained in accordance with statutory retention periods (10 years).',
        },
        {
          number: '05',
          title: 'Your Rights',
          content:
            'You have the right to access, rectify, erase, restrict processing, and object to the processing of your personal data by contacting info@dast-finish.com, as well as the right to lodge a complaint with the Information Commissioner of the Republic of Slovenia.',
        },
      ],
    },
  },

  de: {
    ui: {
      legalTitle: 'Rechtliches',
      backToHome: 'Zurück zur Startseite',
      lastUpdatedLabel: 'Letzte Aktualisierung',
      lastUpdatedValue: 'November 2026',
      primaryLanguageNote:
        'Hinweis: Die primäre rechtsverbindliche Fassung dieser Rechtshinweise ist die slowenische Sprache.',
      links: {
        impressum: 'Impressum',
        terms: 'AGB',
        privacy: 'Datenschutz',
      },
      formConsent: {
        prefix: 'Mit dem Absenden dieser Anfrage stimme ich den ',
        termsLink: 'Allgemeinen Geschäftsbedingungen',
        and: ' und der ',
        privacyLink: 'Datenschutzerklärung',
        suffix: ' zu.',
      },
    },
    impressum: {
      seoTitle: 'Impressum — DAST',
      seoDescription:
        'Offizielle Unternehmensangaben für DAST — ZAKLJUČNA GRADBENA DELA, DALIBOR STEFANOVIĆ, S.P., Šmartno 35, 5211 Kojsko, Slowenien.',
      eyebrow: 'Rechtliche Angaben · Impressum',
      title: 'Impressum',
      subtitle:
        'Offizielle Unternehmens- und Registrierungsdaten des Dienstleisters der Marke DAST.',
      fields: [
        {
          label: 'Firmenname',
          value: 'ZAKLJUČNA GRADBENA DELA, DALIBOR STEFANOVIĆ, S.P.',
        },
        {
          label: 'Markenname',
          value: 'DAST',
        },
        {
          label: 'Unternehmenssitz',
          value: 'Šmartno 35, 5211 Kojsko, Slowenien',
        },
        {
          label: 'Registernummer',
          value: '9919937000',
        },
        {
          label: 'Steuernummer',
          value: '27431673 (nicht mehrwertsteuerpflichtig)',
        },
        {
          label: 'Registerbehörde',
          value: 'AJPES (Slowenisches Unternehmensregister)',
        },
        {
          label: 'Verantwortliche Person',
          value: 'Dalibor Stefanović, s.p.',
        },
        {
          label: 'E-Mail',
          value: 'info@dast-finish.com',
          href: 'mailto:info@dast-finish.com',
        },
        {
          label: 'Website',
          value: 'https://dast-finish.com',
          href: 'https://dast-finish.com',
        },
      ],
      activitiesTitle: 'Haupttätigkeiten',
      activitiesText:
        'Trockenbauarbeiten, Glätten und Spachteln von Wänden (Q1–Q4), maschinelle (Airless-) und manuelle Malerarbeiten, Feuchtigkeits- und Schimmelsanierung sowie Ausbauarbeiten in den Regionen Goriška, Koper und Ljubljana.',
    },
    terms: {
      seoTitle: 'Allgemeine Geschäftsbedingungen (AGB) — DAST',
      seoDescription:
        'Allgemeine Geschäftsbedingungen und Haftungsbeschränkung für Leistungen der Marke DAST (ZAKLJUČNA GRADBENA DELA, DALIBOR STEFANOVIĆ, S.P.).',
      eyebrow: 'Geschäftsbedingungen · dast-finish.com',
      title: 'Allgemeine Geschäftsbedingungen und Haftungsbeschränkung',
      subtitle:
        'Bedingungen für die Nutzung von dast-finish.com sowie für die Ausführung von Maler- und Ausbauarbeiten.',
      sections: [
        {
          number: '01',
          title: 'Allgemeine Bestimmungen und Gültigkeit von Angeboten',
          content:
            'Diese Allgemeinen Geschäftsbedingungen gelten für alle Besucher der Website dast-finish.com sowie für alle Auftraggeber des Unternehmens ZAKLJUČNA GRADBENA DELA, DALIBOR STEFANOVIĆ, S.P. (Marke DAST, im Folgenden: Auftragnehmer). Informationen und Leistungsbeschreibungen auf der Website dienen ausschließlich der unverbindlichen Information. Ein verbindliches Angebot bzw. ein Kostenvoranschlag wird schriftlich nach Besichtigung und Aufmaß vor Ort erstellt. Schriftliche Angebote sind 15 Tage ab Ausstellungsdatum gültig, sofern im Angebot nicht ausdrücklich etwas anderes festgelegt ist.',
        },
        {
          number: '02',
          title: 'Baustellenbedingungen und Pflichten des Auftraggebers',
          content:
            'Der Auftraggeber sorgt vor Arbeitsbeginn für freien und sicheren Zugang zum Objekt und zu den Arbeitsflächen, für Strom- (230V) und Wasseranschluss sowie für geeignete Raumbedingungen gemäß den technischen Herstellervorgaben (in der Regel Temperaturen zwischen +10 °C und +25 °C sowie ausreichend trockene Untergründe). Der Auftragnehmer haftet nicht für Mängel, Verzögerungen oder Schäden, die auf ungeeignete Baustellenbedingungen, Fehler vorheriger Gewerke oder Baufeuchte zurückzuführen sind, auf die der Auftraggeber hingewiesen wurde.',
        },
        {
          number: '03',
          title: 'Zusatz- und unvorhergesehene Leistungen',
          content:
            'Alle Zusatzarbeiten, die Sanierung verdeckter Untergrundmängel oder nachträgliche Änderungswünsche des Auftraggebers werden gesondert nach Vereinbarung bzw. Preisliste des Auftragnehmers abgerechnet; die Ausführungsfrist verlängert sich in solchen Fällen entsprechend.',
        },
        {
          number: '04',
          title: 'Ausführungsqualität (Q1–Q4) und Abnahme',
          content:
            'Die Arbeiten werden fachgerecht gemäß den anerkannten Regeln der Technik und der vereinbarten Qualitätsstufe (Q1–Q4; sofern nicht gesondert vereinbart, gilt Standard Q2) ausgeführt. Offensichtliche Mängel sind vom Auftraggeber bei der Abnahme zu rügen. Die Prüfung der Oberflächen erfolgt bei normalem Tageslicht aus einem Abstand von mindestens 1,5 Metern (sofern nicht ausdrücklich Qualitätsstufe Q4 vereinbart und vergütet wurde).',
        },
        {
          number: '05',
          title: 'Zahlungsbedingungen und Eigentumsvorbehalt',
          content:
            'Der Auftraggeber begleicht die Forderungen innerhalb der im Angebot bzw. auf der Rechnung angegebenen Fristen. Bei Zahlungsverzug hat der Auftragnehmer Anspruch auf gesetzliche Verzugszinsen sowie auf vorübergehende Einstellung der Arbeiten. Eingebaute Materialien bleiben bis zur vollständigen Bezahlung Eigentum des Auftragnehmers.',
        },
        {
          number: '06',
          title: 'Urheberrecht',
          content:
            'Alle Inhalte auf dast-finish.com (Texte, Logos, Grafiken, Projektfotos und Angebote) sind urheberrechtlich geschützt und Eigentum des Auftragnehmers (DAST). Das Kopieren oder die Weitergabe von Angeboten an Dritte ohne schriftliche Zustimmung ist nicht gestattet.',
        },
        {
          number: '07',
          title: 'Streitbeilegung',
          content:
            'Eventuelle Streitigkeiten werden von den Parteien einvernehmlich gelöst; andernfalls ist das zuständige Gericht in Nova Gorica nach dem Recht der Republik Slowenien maßgeblich.',
        },
      ],
    },
    privacy: {
      seoTitle: 'Datenschutzerklärung (DSGVO / ZVOP-2) — DAST',
      seoDescription:
        'Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO und ZVOP-2 bei DAST (ZAKLJUČNA GRADBENA DELA, DALIBOR STEFANOVIĆ, S.P.).',
      eyebrow: 'Datenschutz · DSGVO / ZVOP-2',
      title: 'Datenschutzerklärung',
      subtitle:
        'Transparente Verarbeitung und Schutz personenbezogener Daten gemäß Verordnung (EU) 2016/679 (DSGVO) und dem slowenischen Datenschutzgesetz (ZVOP-2).',
      sections: [
        {
          number: '01',
          title: 'Verantwortlicher',
          content:
            'ZAKLJUČNA GRADBENA DELA, DALIBOR STEFANOVIĆ, S.P. (DAST), Šmartno 35, 5211 Kojsko, Slowenien, E-Mail: info@dast-finish.com.',
        },
        {
          number: '02',
          title: 'Zweck und Rechtsgrundlage der Verarbeitung',
          content:
            'Daten, die über das Kontaktformular, per E-Mail oder telefonisch übermittelt werden (Vorname, Nachname, E-Mail-Adresse, Telefonnummer, Objektadresse und Anfragebeschreibung), verarbeiten wir zur Angebotserstellung, Auftragsausführung, Kommunikation und Erfüllung gesetzlicher Pflichten (Art. 6 Abs. 1 lit. b und c DSGVO).',
        },
        {
          number: '03',
          title: 'Auftragsverarbeiter',
          content:
            'Wir verkaufen keine personenbezogenen Daten. Zugriff haben ausschließlich notwendige technische und buchhalterische Dienstleister (z. B. Vercel, Resend, Buchhaltung) unter Einhaltung der DSGVO.',
        },
        {
          number: '04',
          title: 'Speicherdauer',
          content:
            'Daten aus nicht realisierten Anfragen werden höchstens 12 Monate ab dem letzten Kontakt gespeichert; Daten auf Rechnungen und Geschäftsunterlagen werden gemäß den gesetzlichen Aufbewahrungsfristen (10 Jahre) aufbewahrt.',
        },
        {
          number: '05',
          title: 'Rechte der betroffenen Person',
          content:
            'Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und Widerspruch über info@dast-finish.com sowie das Beschwerderecht beim Informationsbeauftragten der Republik Slowenien.',
        },
      ],
    },
  },

  it: {
    ui: {
      legalTitle: 'Note legali',
      backToHome: 'Torna alla home',
      lastUpdatedLabel: 'Ultimo aggiornamento',
      lastUpdatedValue: 'Novembre 2026',
      primaryLanguageNote:
        'Nota: La lingua primaria legalmente vincolante dei presenti documenti legali è lo sloveno.',
      links: {
        impressum: 'Dati aziendali (Impressum)',
        terms: 'Termini e Condizioni',
        privacy: 'Informativa sulla Privacy',
      },
      formConsent: {
        prefix: 'Inviando la richiesta accetto i ',
        termsLink: 'Termini e Condizioni',
        and: ' e l’',
        privacyLink: 'Informativa sulla Privacy',
        suffix: '.',
      },
    },
    impressum: {
      seoTitle: 'Dati aziendali (Impressum) — DAST',
      seoDescription:
        'Dati ufficiali del fornitore DAST — ZAKLJUČNA GRADBENA DELA, DALIBOR STEFANOVIĆ, S.P., Šmartno 35, 5211 Kojsko, Slovenia.',
      eyebrow: 'Informazioni legali · Impressum',
      title: 'Dati aziendali',
      subtitle:
        'Dati ufficiali di identificazione e registrazione dell’impresa operante con il marchio DAST.',
      fields: [
        {
          label: 'Ragione sociale',
          value: 'ZAKLJUČNA GRADBENA DELA, DALIBOR STEFANOVIĆ, S.P.',
        },
        {
          label: 'Marchio',
          value: 'DAST',
        },
        {
          label: 'Sede legale',
          value: 'Šmartno 35, 5211 Kojsko, Slovenia',
        },
        {
          label: 'Numero di registrazione',
          value: '9919937000',
        },
        {
          label: 'Codice fiscale',
          value: '27431673 (non soggetto IVA)',
        },
        {
          label: 'Registro delle imprese',
          value: 'AJPES',
        },
        {
          label: 'Persona responsabile',
          value: 'Dalibor Stefanović, s.p.',
        },
        {
          label: 'E-mail',
          value: 'info@dast-finish.com',
          href: 'mailto:info@dast-finish.com',
        },
        {
          label: 'Sito web',
          value: 'https://dast-finish.com',
          href: 'https://dast-finish.com',
        },
      ],
      activitiesTitle: 'Attività principali',
      activitiesText:
        'Opere in cartongesso, rasatura e stuccatura pareti (Q1–Q4), tinteggiatura meccanizzata (airless) e manuale, risanamento da umidità e muffa e lavori di finitura edile nelle regioni di Goriška, Capodistria (Koper) e Lubiana.',
    },
    terms: {
      seoTitle: 'Termini e Condizioni Generali — DAST',
      seoDescription:
        'Termini e condizioni generali di servizio e limitazione di responsabilità per il marchio DAST (ZAKLJUČNA GRADBENA DELA, DALIBOR STEFANOVIĆ, S.P.).',
      eyebrow: 'Condizioni generali · dast-finish.com',
      title: 'Termini e Condizioni Generali e Limitazione di Responsabilità',
      subtitle:
        'Condizioni d’uso del sito dast-finish.com e di esecuzione dei lavori di tinteggiatura e finitura edile.',
      sections: [
        {
          number: '01',
          title: 'Disposizioni generali e validità dei preventivi',
          content:
            'I presenti termini e condizioni generali si applicano a tutti i visitatori del sito dast-finish.com e a tutti i committenti dei servizi di ZAKLJUČNA GRADBENA DELA, DALIBOR STEFANOVIĆ, S.P. (marchio DAST, di seguito: l’Appaltatore). Le informazioni e le descrizioni dei servizi sul sito hanno carattere puramente informativo. Il preventivo vincolante viene redatto per iscritto a seguito di sopralluogo e rilievo misure. La validità del preventivo scritto è di 15 giorni dalla data di emissione, salvo diversa indicazione espressa nel preventivo stesso.',
        },
        {
          number: '02',
          title: 'Condizioni di cantiere e obblighi del committente',
          content:
            'Prima dell’inizio dei lavori, il committente garantisce accesso libero e sicuro all’immobile e alle superfici di lavoro, allacciamento elettrico (230V) e idrico, nonché condizioni ambientali idonee in conformità alle schede tecniche dei produttori (di norma temperatura tra +10 °C e +25 °C e supporti adeguatamente asciutti). L’Appaltatore non risponde per difetti, ritardi o danni derivanti da condizioni di cantiere non idonee, errori di precedenti esecutori o umidità edile segnalata al committente.',
        },
        {
          number: '03',
          title: 'Lavori aggiuntivi e imprevisti',
          content:
            'Eventuali lavori extra, ripristino di difetti occulti del supporto o modifiche richieste successivamente dal committente sono conteggiati separatamente secondo accordo o listino prezzi dell’Appaltatore; in tali casi il termine di consegna viene prorogato in misura corrispondente.',
        },
        {
          number: '04',
          title: 'Qualità di esecuzione (Q1–Q4) e consegna dei lavori',
          content:
            'I lavori sono eseguiti a regola d’arte e secondo il livello di finitura concordato (Q1–Q4; in mancanza di specifica indicazione si applica lo standard Q2). Eventuali difetti palesi devono essere contestati dal committente al momento della consegna. La verifica delle superfici avviene con normale luce diurna da una distanza di almeno 1,5 metri (salvo che lo standard Q4 sia stato espressamente concordato e remunerato).',
        },
        {
          number: '05',
          title: 'Condizioni di pagamento e riserva di proprietà',
          content:
            'Il committente adempie agli obblighi di pagamento entro le scadenze indicate nel preventivo o in fattura. In caso di ritardo, l’Appaltatore ha diritto agli interessi legali di mora e alla sospensione temporanea dei lavori. I materiali posati restano di proprietà dell’Appaltatore fino al saldo integrale.',
        },
        {
          number: '06',
          title: 'Diritti d’autore',
          content:
            'Tutti i contenuti presenti su dast-finish.com (testi, loghi, grafiche, fotografie dei lavori e preventivi) sono protetti dal diritto d’autore e di proprietà dell’Appaltatore (DAST). È vietata la copia o la condivisione dei preventivi con terzi senza consenso scritto.',
        },
        {
          number: '07',
          title: 'Risoluzione delle controversie',
          content:
            'Eventuali controversie saranno risolte in via amichevole tra le parti; in caso contrario, è competente il tribunale di Nova Gorica secondo il diritto della Repubblica di Slovenia.',
        },
      ],
    },
    privacy: {
      seoTitle: 'Informativa sulla Privacy (GDPR / ZVOP-2) — DAST',
      seoDescription:
        'Informativa sul trattamento dei dati personali ai sensi del GDPR e dello ZVOP-2 per DAST (ZAKLJUČNA GRADBENA DELA, DALIBOR STEFANOVIĆ, S.P.).',
      eyebrow: 'Protezione dei dati · GDPR / ZVOP-2',
      title: 'Informativa sulla Privacy',
      subtitle:
        'Trattamento trasparente e protezione dei dati personali ai sensi del Regolamento (UE) 2016/679 (GDPR) e della legge slovena sulla protezione dei dati personali (ZVOP-2).',
      sections: [
        {
          number: '01',
          title: 'Titolare del trattamento',
          content:
            'ZAKLJUČNA GRADBENA DELA, DALIBOR STEFANOVIĆ, S.P. (DAST), Šmartno 35, 5211 Kojsko, Slovenia, e-mail: info@dast-finish.com.',
        },
        {
          number: '02',
          title: 'Finalità e base giuridica del trattamento',
          content:
            'I dati conferiti tramite modulo di contatto, e-mail o telefono (nome, cognome, indirizzo e-mail, telefono, indirizzo dell’immobile e descrizione della richiesta) sono trattati per la preparazione del preventivo, l’esecuzione dei lavori, le comunicazioni e l’adempimento di obblighi di legge (art. 6, par. 1, lett. b e c GDPR).',
        },
        {
          number: '03',
          title: 'Responsabili del trattamento',
          content:
            'Non vendiamo i dati personali. L’accesso è consentito esclusivamente ai fornitori tecnici e contabili strettamente necessari (es. Vercel, Resend, studio contabile) nel pieno rispetto del GDPR.',
        },
        {
          number: '04',
          title: 'Periodo di conservazione',
          content:
            'I dati relativi a richieste non finalizzate sono conservati per un massimo di 12 mesi dall’ultimo contatto, mentre i dati presenti su fatture e documentazione contabile sono conservati secondo i termini di legge (10 anni).',
        },
        {
          number: '05',
          title: 'Diritti dell’interessato',
          content:
            'L’interessato ha il diritto di accesso, rettifica, cancellazione, limitazione del trattamento e opposizione scrivendo a info@dast-finish.com, nonché il diritto di proporre reclamo al Garante per la protezione dei dati (Informacijski pooblaščenec RS).',
        },
      ],
    },
  },
};
