import { MousePointer2, Target, Users, Repeat, BarChart3, TrendingUp, Handshake } from 'lucide-react';

export interface KPI {
  id: string;
  name: string;
  fullName: string;
  description: string;
  metaphor: string;
  vignette: string;
  icon: any;
  formula: string;
  imageUrl?: string;
}

export const kpis: KPI[] = [
  {
    id: 'ctr',
    name: 'CTR',
    fullName: 'Click-Through Rate',
    description: 'La percentuale di persone che cliccano sul tuo annuncio dopo averlo visto.',
    metaphor: 'L\'Amo Magnetico',
    vignette: 'Immagina un pescatore con un amo che brilla. Più l\'esca è invitante, più pesci abboccano. Il CTR misura quanto è "magnetica" la tua esca creativa.',
    icon: MousePointer2,
    formula: '(Click / Impression) * 100'
  },
  {
    id: 'cpc',
    name: 'CPC',
    fullName: 'Cost Per Click',
    description: 'Quanto paghi mediamente per ogni singolo click ricevuto.',
    metaphor: 'Il Biglietto d\'Ingresso',
    vignette: 'È come pagare un biglietto per far entrare qualcuno nel tuo negozio. Se il biglietto costa troppo e nessuno compra, stai sprecando soldi alla porta.',
    icon: Target,
    formula: 'Costo Totale / Click Totali'
  },
  {
    id: 'retention',
    name: 'Retention',
    fullName: 'Retention Rate',
    description: 'La capacità di mantenere i tuoi utenti attivi nel tempo.',
    metaphor: 'L\'Amico di una Vita',
    vignette: 'Non è importante quante persone conosci a una festa, ma quante di loro decidono di restare a chiacchierare con te fino all\'alba e tornare a trovarti il giorno dopo.',
    icon: Repeat,
    formula: '(Utenti Fine Periodo - Nuovi Utenti) / Utenti Inizio Periodo'
  },
  {
    id: 'engagement',
    name: 'Engagement',
    fullName: 'Engagement Rate',
    description: 'Il livello di interazione (like, commenti, condivisioni) rispetto al pubblico raggiunto.',
    metaphor: 'L\'Atmosfera della Festa',
    vignette: 'Se metti la musica e nessuno balla, la festa è un flop. L\'engagement è il volume degli applausi e il numero di persone in pista.',
    icon: Handshake,
    formula: '(Interazioni / Copertura) * 100'
  },
  {
    id: 'cpm',
    name: 'CPM',
    fullName: 'Cost Per Mille',
    description: 'Il costo per mostrare il tuo annuncio a 1.000 persone.',
    metaphor: 'Il Cartellone in Autostrada',
    vignette: 'Paghi per lo spazio pubblicitario sperando che chi passa lo guardi. Non ti importa se cliccano, ti importa che ti vedano in tanti.',
    icon: Users,
    formula: '(Costo Totale / Impression) * 1000'
  },
  {
    id: 'cpa',
    name: 'CPA',
    fullName: 'Cost Per Acquisition',
    description: 'Il costo per ottenere un\'azione specifica (es. un acquisto o un lead).',
    metaphor: 'Il Premio Finale',
    vignette: 'È l\'investimento necessario per convincere qualcuno a completare la caccia al tesoro e arrivare al forziere.',
    icon: TrendingUp,
    formula: 'Costo Totale / Conversioni'
  },
  {
    id: 'cr',
    name: 'CR',
    fullName: 'Conversion Rate',
    description: 'La percentuale di utenti che compiono l\'azione desiderata.',
    metaphor: 'Il Traguardo',
    vignette: 'Quanti dei visitatori del tuo negozio escono con un sacchetto in mano? Quello è il tuo tasso di conversione.',
    icon: BarChart3,
    formula: '(Conversioni / Visitatori) * 100'
  }
];

export const profiles = [
  {
    name: 'Influencer',
    focus: ['Engagement', 'Retention'],
    description: 'Punta tutto sulla community e sulla fedeltà del pubblico.',
    color: 'bg-pink-100 text-pink-700 border-pink-200'
  },
  {
    name: 'E-commerce',
    focus: ['CPA', 'CR', 'CPC'],
    description: 'Obiettivo vendite: ogni centesimo deve generare un ritorno.',
    color: 'bg-blue-100 text-blue-700 border-blue-200'
  },
  {
    name: 'Brand Awareness',
    focus: ['CPM', 'CTR'],
    description: 'Vuole essere visto da più persone possibili per restare impresso.',
    color: 'bg-emerald-100 text-emerald-700 border-emerald-200'
  },
  {
    name: 'SaaS / App',
    focus: ['Retention', 'CPA'],
    description: 'Mantenere l\'utente è vitale quanto acquisirlo.',
    color: 'bg-amber-100 text-amber-700 border-amber-200'
  }
];
