export type Phrase = {
  fr: string;
  en: string;
  tl: string; // Tagalog meaning: please check and correct
  say: string; // approximate pronunciation, to be replaced by audio later
  note?: string;
};

export type Section = { title: string; phrases: Phrase[] };
export type Pack = { id: string; title: string; sections: Section[] };

export const housekeepingPack: Pack = {
  id: 'housekeeping',
  title: 'Femme / Homme de ménage',
  sections: [
    {
      title: '1. Arriver chez l’employeur',
      phrases: [
        {
          fr: 'Bonjour Madame / Bonjour Monsieur',
          en: 'Good morning, Ma’am / Sir',
          tl: 'Magandang araw po, Ma’am / Sir',
          say: 'bon-ZHOOR ma-DAM / bon-ZHOOR muh-SYUH',
          note: 'Use this with your employer. Add Madame or Monsieur.',
        },
        {
          fr: 'Comment allez-vous ?',
          en: 'How are you? (formal)',
          tl: 'Kumusta po kayo?',
          say: 'ko-MAHN ta-lay VOO',
          note: 'Formal. Use "vous" with employers, not "tu".',
        },
        {
          fr: 'Je m’appelle …',
          en: 'My name is …',
          tl: 'Ang pangalan ko po ay …',
          say: 'zhuh ma-PEL',
        },
        {
          fr: 'Je suis la nouvelle femme de ménage.',
          en: 'I am the new housekeeper. (woman)',
          tl: 'Ako po ang bagong kasambahay.',
          say: 'zhuh swee la noo-VEL fam duh may-NAZH',
          note: 'For a man: "Je suis le nouvel homme de ménage."',
        },
      ],
    },
    {
      title: '2. Produits et matériel',
      phrases: [
        {
          fr: 'la javel',
          en: 'bleach',
          tl: 'bleach',
          say: 'la zha-VEL',
          note: 'Never mix bleach with other cleaning products.',
        },
        {
          fr: 'le nettoyant multi-usage',
          en: 'all-purpose cleaner',
          tl: 'pangkalahatang panlinis',
          say: 'luh net-wa-YAHN mool-tee-oo-ZAZH',
        },
        {
          fr: 'le produit pour les vitres',
          en: 'glass cleaner',
          tl: 'panlinis ng salamin',
          say: 'luh pro-DWEE poor lay VEE-truh',
        },
        {
          fr: 'le détartrant',
          en: 'limescale remover',
          tl: 'pang-alis ng limescale (puting dumi ng tubig sa gripo at banyo)',
          say: 'luh day-tar-TRAHN',
          note: 'Used in the bathroom, toilets and kettles.',
        },
        {
          fr: 'le liquide vaisselle',
          en: 'dishwashing liquid',
          tl: 'sabon panghugas ng plato',
          say: 'luh lee-KEED vay-SEL',
        },
        {
          fr: 'l’éponge',
          en: 'sponge',
          tl: 'espongha',
          say: 'lay-PONZH',
        },
        {
          fr: 'la serpillière',
          en: 'floor cloth (for mopping)',
          tl: 'basahan sa sahig',
          say: 'la sehr-pee-YEHR',
        },
        {
          fr: 'l’aspirateur',
          en: 'vacuum cleaner',
          tl: 'vacuum cleaner',
          say: 'las-pee-ra-TUHR',
        },
        {
          fr: 'le balai',
          en: 'broom',
          tl: 'walis',
          say: 'luh ba-LAY',
        },
        {
          fr: 'la brosse WC',
          en: 'toilet brush',
          tl: 'brush sa inidoro',
          say: 'la BROSS vay-SAY',
        },
      ],
    },
    {
      title: '3. Poser des questions',
      phrases: [
        {
          fr: 'Où sont les produits d’entretien ?',
          en: 'Where are the cleaning products?',
          tl: 'Nasaan po ang mga panlinis?',
          say: 'oo sohn lay pro-DWEE dahn-truh-TYAN',
        },
        {
          fr: 'Quel produit dois-je utiliser pour … ?',
          en: 'Which product should I use for …?',
          tl: 'Anong produkto po ang dapat kong gamitin para sa …?',
          say: 'kel pro-DWEE dwazh ew-tee-lee-ZAY poor',
        },
        {
          fr: 'Pouvez-vous me montrer, s’il vous plaît ?',
          en: 'Can you show me, please?',
          tl: 'Pwede po bang ipakita ninyo sa akin?',
          say: 'poo-vay-VOO muh mohn-TRAY seel voo PLAY',
        },
        {
          fr: 'Je n’ai pas compris. Pouvez-vous répéter ?',
          en: 'I didn’t understand. Can you repeat?',
          tl: 'Hindi ko po naintindihan. Pwede po bang ulitin?',
          say: 'zhuh nay pa kohn-PREE. poo-vay-voo ray-pay-TAY',
          note: 'Very useful. Never be afraid to ask!',
        },
      ],
    },
    {
      title: '4. Les tâches',
      phrases: [
        {
          fr: 'passer l’aspirateur',
          en: 'to vacuum',
          tl: 'mag-vacuum',
          say: 'pa-SAY las-pee-ra-TUHR',
        },
        {
          fr: 'laver le sol',
          en: 'to mop the floor',
          tl: 'maglampaso ng sahig',
          say: 'la-VAY luh SOL',
        },
        {
          fr: 'faire la vaisselle',
          en: 'to do the dishes',
          tl: 'maghugas ng pinggan',
          say: 'fehr la vay-SEL',
        },
        {
          fr: 'repasser',
          en: 'to iron',
          tl: 'magplantsa',
          say: 'ruh-pa-SAY',
        },
        {
          fr: 'faire la lessive',
          en: 'to do the laundry',
          tl: 'maglaba',
          say: 'fehr la leh-SEEV',
        },
      ],
    },
  ],
};