export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    id: '1',
    question: 'Apakah produk dibuat setiap hari?',
    answer: 'Ya. Semua produk dibuat secara fresh setiap hari menggunakan bahan pilihan.',
  },
  {
    id: '2',
    question: 'Apakah bisa memesan dalam jumlah besar?',
    answer: 'Bisa. Kami melayani pesanan untuk acara keluarga, kantor, hajatan, arisan, maupun oleh-oleh.',
  },
  {
    id: '3',
    question: 'Apakah Tape bisa dipesan dalam jumlah kilogram?',
    answer: 'Ya. Tape dapat dipesan mulai dari 500 gram maupun sesuai kebutuhan dalam satuan gram atau kilogram.',
  },
  {
    id: '4',
    question: 'Apa saja varian Chiffon Tape?',
    answer: 'Tersedia dua varian: Coklat dan Keju.',
  },
  {
    id: '5',
    question: 'Apakah menerima catering?',
    answer: 'Ya. Kana Tape & Kitchen menerima pesanan catering untuk berbagai acara.',
  },
  {
    id: '6',
    question: 'Bagaimana cara pemesanan?',
    answer: 'Pemesanan dapat dilakukan langsung melalui tombol WhatsApp yang tersedia di website.',
  },
  {
    id: '7',
    question: 'Metode pembayaran apa saja?',
    answer: 'Transfer Bank dan pembayaran tunai.',
  },
];
