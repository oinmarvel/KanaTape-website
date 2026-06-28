export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Gibran Dwi Anugrajaya',
    role: 'Content Creator',
    content: 'Baru kali ini makan chiffon tape yang lembut. Rasa manisnya pas, tapenya kerasa tapi nggak menyengat. Langganan buat acara kantor!',
    rating: 5,
  },
  {
    id: '2',
    name: 'Castorius Brian',
    role: 'Basketball Athelete',
    content: 'saya suka banget gethuk, gethuk originalnya best disini. Packaging-nya cantik banget, cocok buat oleh-oleh premium ke mertua. Very recommended!',
    rating: 5,
  },
  {
    id: '3',
    name: 'Reviyani',
    role: 'Ibu Rumah Tangga',
    content: 'Respon admin cepat, pengiriman aman. Chiffon-nya masih fresh banget enakk!',
    rating: 5,
  },
  {
    id: '4',
    name: 'Moreno Patrizio',
    role: 'Mahasiswa Binus',
    content: 'Tape fermentasinya beda banget dari yang di pasar, lebih wangi josjis pokoke. Beli buat ngemil sambil nugas, malah habis sebelum keburu dikerjain hahaha!',
    rating: 5,
  },
  {
    id: '5',
    name: 'Agus Setiawan',
    role: 'Pengusaha Kuliner',
    content: 'Sudah langganan hampir setahun untuk kebutuhan usaha saya. Kualitas tape Ibu Sukana konsisten, tidak pernah mengecewakan. Harga pun sangat terjangkau untuk kualitas sebagus ini.',
    rating: 5,
  },
];
