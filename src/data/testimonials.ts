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
];
