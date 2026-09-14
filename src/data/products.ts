export type ProductCategory = 'Cookies' | 'Crinkles' | 'Loaves & muffins';

export type PriceOption = {
  label: string;
  value: string;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: ProductCategory;
  image: string;
  imageAlt: string;
  prices: PriceOption[];
  badge?: 'New' | 'Signature';
  featured?: boolean;
  note?: string;
};

// Add a product here. The menu and featured sections render from this single list.
export const products: Product[] = [
  {
    id: 'dubai-pistachio-cookie',
    name: 'Dubai Chewy Pistachio Cookie',
    slug: 'dubai-chewy-pistachio-cookie',
    description: 'A generously sized, bakery-soft cookie with a rich pistachio-inspired finish.',
    category: 'Cookies',
    image: '/assets/products/cookies-signature.jpeg',
    imageAlt: 'Assorted freshly baked cookies on a cooling rack',
    prices: [
      { label: '1 piece', value: '₱110' },
      { label: '4 pieces', value: '₱400' },
    ],
    badge: 'Signature',
    featured: true,
  },
  {
    id: 'oreo-cookie',
    name: 'Oreo Cookie',
    slug: 'oreo-cookie',
    description: 'A chewy, chocolatey cookie with a generous Oreo crunch.',
    category: 'Cookies',
    image: '/assets/products/cookies-oreo.jpeg',
    imageAlt: 'Oreo cookies resting on a cooling rack',
    prices: [{ label: 'per piece', value: '₱30' }],
    featured: true,
  },
  {
    id: 'smores-cookie',
    name: "S'mores Cookie",
    slug: 'smores-cookie',
    description: 'Toasted marshmallow goodness with chocolate in every soft bite.',
    category: 'Cookies',
    image: '/assets/products/cookies-cream-cheese.jpeg',
    imageAlt: 'Stuffed cookies with creamy centers and chocolate chips',
    prices: [{ label: 'per piece', value: '₱30' }],
  },
  {
    id: 'red-velvet-cookie',
    name: 'Red Velvet Cookie',
    slug: 'red-velvet-cookie',
    description: 'A classic, tender red velvet cookie for a familiar sweet moment.',
    category: 'Cookies',
    image: '/assets/products/cookies-signature.jpeg',
    imageAlt: 'Fresh cookies arranged on a rack',
    prices: [{ label: 'per piece', value: '₱30' }],
  },
  {
    id: 'classic-chocolate-cookie',
    name: 'Classic Chocolate Cookie',
    slug: 'classic-chocolate-cookie',
    description: 'Deep cocoa and plenty of chocolate in a satisfyingly soft cookie.',
    category: 'Cookies',
    image: '/assets/products/cookies-chocolate.jpeg',
    imageAlt: 'Close-up of chocolate cookies on a cooling rack',
    prices: [{ label: 'per piece', value: '₱30' }],
    badge: 'New',
  },
  {
    id: 'matcha-cookie',
    name: 'Matcha Cookie',
    slug: 'matcha-cookie',
    description: 'A mellow matcha cookie with a delicate, earthy sweetness.',
    category: 'Cookies',
    image: '/assets/products/cookies-signature.jpeg',
    imageAlt: 'Assorted handmade cookies',
    prices: [{ label: 'per piece', value: '₱35' }],
  },
  {
    id: 'chocolate-walnut-cookie',
    name: 'Chocolate Walnut Cookie',
    slug: 'chocolate-walnut-cookie',
    description: 'Chocolate and walnut baked into a cozy, craveable cookie.',
    category: 'Cookies',
    image: '/assets/products/cookies-chocolate.jpeg',
    imageAlt: 'Chocolate cookie close-up',
    prices: [{ label: 'per piece', value: '₱35' }],
  },
  {
    id: 'white-chocolate-macadamia',
    name: 'White Chocolate Macadamia',
    slug: 'white-chocolate-macadamia',
    description: 'Creamy white chocolate and macadamia in a buttery cookie.',
    category: 'Cookies',
    image: '/assets/products/cookies-cream-cheese.jpeg',
    imageAlt: 'Soft cookies with cream cheese centers',
    prices: [{ label: 'per piece', value: '₱35' }],
  },
  {
    id: 'white-chocolate-biscoff',
    name: 'White Chocolate Biscoff',
    slug: 'white-chocolate-biscoff',
    description: 'A caramel-spiced cookie with creamy white chocolate.',
    category: 'Cookies',
    image: '/assets/products/cookies-biscoff.jpeg',
    imageAlt: 'Biscoff-topped cookies on a cooling rack',
    prices: [{ label: 'per piece', value: '₱45' }],
  },
  {
    id: 'red-velvet-cream-cheese-crinkles',
    name: 'Red Velvet Cream Cheese Crinkles',
    slug: 'red-velvet-cream-cheese-crinkles',
    description: 'Fudgy red velvet crinkles paired with a creamy cheese center.',
    category: 'Crinkles',
    image: '/assets/products/crinkles-branded.jpeg',
    imageAlt: 'NC Delights red velvet cream cheese crinkles in branded boxes',
    prices: [
      { label: 'Box of 2', value: '₱65' },
      { label: 'Box of 4', value: '₱120' },
      { label: 'Box of 6', value: '₱170' },
    ],
    featured: true,
  },
  {
    id: 'choco-lava-crinkles',
    name: 'Choco Lava Crinkles',
    slug: 'choco-lava-crinkles',
    description: 'Dark, crackly crinkles made for chocolate lovers.',
    category: 'Crinkles',
    image: '/assets/products/crinkles-branded.jpeg',
    imageAlt: 'Packaged chocolate crinkles',
    prices: [
      { label: 'Box of 2', value: '₱55' },
      { label: 'Box of 4', value: '₱100' },
      { label: 'Box of 6', value: '₱140' },
    ],
  },
  {
    id: 'chocolate-crinkles',
    name: 'Chocolate Crinkles',
    slug: 'chocolate-crinkles',
    description: 'A classic batch of soft, deeply chocolatey crinkles.',
    category: 'Crinkles',
    image: '/assets/products/crinkles-branded.jpeg',
    imageAlt: 'Chocolate crinkles in NC Delights packaging',
    prices: [{ label: '10 pieces', value: '₱100' }],
  },
  {
    id: 'banana-bread',
    name: 'Banana Bread',
    slug: 'banana-bread',
    description: 'Moist banana bread topped with chocolate, nuts, and care.',
    category: 'Loaves & muffins',
    image: '/assets/products/banana-bread.jpeg',
    imageAlt: 'Freshly prepared banana bread loaves with chocolate and walnuts',
    prices: [{ label: 'loaf', value: '₱150' }],
    featured: true,
  },
  {
    id: 'choco-banana-cream-cheese-muffin',
    name: 'Choco Banana Cream Cheese Muffin',
    slug: 'choco-banana-cream-cheese-muffin',
    description: 'Soft, moist banana muffins topped with cream cheese and chocolate pieces.',
    category: 'Loaves & muffins',
    image: '/assets/products/muffins.png',
    imageAlt: 'Choco banana cream cheese muffins in patterned baking cups',
    prices: [{ label: '4 pieces', value: '₱250' }],
    badge: 'New',
    featured: true,
    note: 'Soft, moist, and topped with cream cheese and chocolate pieces.',
  },
];

export const categories: ProductCategory[] = ['Cookies', 'Crinkles', 'Loaves & muffins'];
