export interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  category: string;
  badge?: string;
  imageUrl: string;
  whatsappMessage: string;
}

export const featuredProducts: Product[] = [
  {
    id: 'chiffon-tape',
    title: 'Chiffon Tape',
    description: 'Soft and fluffy chiffon cake made with premium fermented cassava (tape). Available in Chocolate and Cheese flavors.',
    price: 'Rp50.000',
    category: 'Cake',
    badge: 'Best Seller',
    imageUrl: 'chiffon_slice.JPG',
    whatsappMessage: 'Halo Kana Tape & Kitchen, saya ingin memesan Chiffon Tape.',
  },
  {
    id: 'gethuk-original',
    title: 'Gethuk Original',
    description: 'Traditional homemade gethuk made from fresh cassava with a soft texture and authentic taste.',
    price: 'Mulai Rp10.000',
    category: 'Snack',
    badge: 'Favorite',
    imageUrl: 'gethuk_original.JPG',
    whatsappMessage: 'Halo Kana Tape & Kitchen, saya ingin memesan Gethuk Original.',
  },
  {
    id: 'tape-muffin-cake',
    title: 'Tape Muffin Cake',
    description: 'Soft muffin made with premium tape. Varian: Isi 2 (Rp10.000), Isi 4 (Rp20.000).',
    price: 'Mulai Rp10.000',
    category: 'Snack',
    badge: 'Signature',
    imageUrl: 'muffin_isi2.jpg',
    whatsappMessage: 'Halo Kana Tape & Kitchen, saya ingin memesan Tape Muffin Cake.',
  },
];

export const catalogProducts: Product[] = [
  {
    id: 'tape-fermentasi',
    title: 'Tape Fermentasi',
    description: 'Fresh homemade fermented cassava made daily using selected ingredients. Customers may request custom quantities in grams or kilograms.',
    price: 'Rp10.000 / 500g',
    category: 'Bahan',
    badge: 'Fresh',
    imageUrl: "tape.JPG",
    whatsappMessage: 'Halo Kana Tape & Kitchen, saya ingin memesan Tape Fermentasi.',
  },
  {
    id: 'chiffon-tape-catalog',
    title: 'Chiffon Tape (1 Loyang)',
    description: 'Soft chiffon cake combined with premium tape, available in Chocolate and Cheese flavors.',
    price: 'Rp50.000',
    category: 'Cake',
    badge: 'Best Seller',
    imageUrl: 'chiffon_loyang.png',
    whatsappMessage: 'Halo Kana Tape & Kitchen, saya ingin memesan Chiffon Tape.',
  },
  {
    id: 'gethuk-original-catalog',
    title: 'Gethuk Original',
    description: 'Traditional homemade gethuk with a soft texture and authentic cassava flavor.',
    price: 'Rp10.000',
    category: 'Snack',
    badge: 'Traditional',
    imageUrl: 'gethuk_original.JPG',
    whatsappMessage: 'Halo Kana Tape & Kitchen, saya ingin memesan Gethuk Original.',
  },
  {
    id: 'gethuk-gula-jawa',
    title: 'Gethuk Gula Jawa',
    description: 'Homemade gethuk topped with delicious traditional palm sugar.',
    price: 'Rp10.000',
    category: 'Snack',
    badge: 'Popular',
    imageUrl: 'gethuk_gulajawa.JPG',
    whatsappMessage: 'Halo Kana Tape & Kitchen, saya ingin memesan Gethuk Gula Jawa.',
  },
  {
    id: 'tape-muffin-cake-2',
    title: 'Tape Muffin Cake (Isi 2)',
    description: 'Soft homemade tape muffins. Package contains 2 pieces.',
    price: 'Rp10.000',
    category: 'Snack',
    badge: 'Favorite',
    imageUrl: 'muffin_isi2.jpg',
    whatsappMessage: 'Halo Kana Tape & Kitchen, saya ingin memesan Tape Muffin Cake (Isi 2).',
  },
  {
    id: 'tape-muffin-cake-4',
    title: 'Tape Muffin Cake (Isi 4)',
    description: 'Soft homemade tape muffins. Package contains 4 pieces.',
    price: 'Rp20.000',
    category: 'Snack',
    badge: 'Family Pack',
    imageUrl: 'muffin_isi4.jpg',
    whatsappMessage: 'Halo Kana Tape & Kitchen, saya ingin memesan Tape Muffin Cake (Isi 4).',
  },
];
