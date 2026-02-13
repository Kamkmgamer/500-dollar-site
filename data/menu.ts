export const menuCategories = [
  {
    id: 'antipasti',
    name: 'Antipasti',
    description: 'Traditional Italian starters to begin your culinary journey',
    items: [
      { id: '1', name: 'Bruschetta Classica', description: 'Toasted ciabatta with fresh tomatoes, garlic, basil, and extra virgin olive oil', price: 8, tags: ['vegetarian'], popular: true, image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&q=80' },
      { id: '2', name: 'Calamari Fritti', description: 'Crispy fried calamari served with house-made marinara sauce', price: 14, tags: [], image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&q=80' },
      { id: '3', name: 'Caprese Salad', description: 'Fresh buffalo mozzarella, vine tomatoes, and basil with balsamic glaze', price: 12, tags: ['vegetarian', 'gluten-free'], popular: true, image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=400&q=80' },
      { id: '4', name: 'Arancini', description: 'Crispy saffron risotto balls stuffed with mozzarella', price: 11, tags: ['vegetarian'], image: 'https://images.unsplash.com/photo-1541529086526-db283c563270?w=400&q=80' },
      { id: '5', name: 'Prosciutto e Melone', description: 'Thinly sliced prosciutto di Parma with fresh cantaloupe', price: 16, tags: ['gluten-free'], image: 'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=400&q=80' },
    ],
  },
  {
    id: 'pasta',
    name: 'Pasta',
    description: 'Handmade pasta crafted daily with traditional recipes',
    items: [
      { id: '6', name: 'Spaghetti Carbonara', description: 'Classic Roman pasta with eggs, pecorino Romano, and guanciale', price: 18, tags: [], popular: true, image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&q=80' },
      { id: '7', name: 'Fettuccine Alfredo', description: 'Fresh fettuccine in a creamy parmesan sauce', price: 17, tags: ['vegetarian'], image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=400&q=80' },
      { id: '8', name: 'Lasagna Bolognese', description: 'Layered fresh pasta with slow-cooked meat ragù and béchamel', price: 20, tags: [], popular: true, image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400&q=80' },
      { id: '9', name: 'Penne Arrabbiata', description: 'Penne pasta in spicy tomato sauce with garlic and chili', price: 16, tags: ['vegetarian', 'vegan', 'spicy'], image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&q=80' },
      { id: '10', name: 'Gnocchi al Pesto', description: 'Potato gnocchi with fresh basil pesto and pine nuts', price: 18, tags: ['vegetarian'], image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400&q=80' },
      { id: '11', name: 'Linguine alle Vongole', description: 'Linguine with fresh clams, garlic, white wine, and parsley', price: 24, tags: [], image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&q=80' },
    ],
  },
  {
    id: 'pizza',
    name: 'Pizza',
    description: 'Wood-fired Neapolitan-style pizzas',
    items: [
      { id: '12', name: 'Margherita', description: 'San Marzano tomatoes, fresh mozzarella, basil, extra virgin olive oil', price: 16, tags: ['vegetarian'], popular: true, image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80' },
      { id: '13', name: 'Quattro Formaggi', description: 'Four cheese blend: mozzarella, gorgonzola, fontina, and parmesan', price: 18, tags: ['vegetarian'], image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80' },
      { id: '14', name: 'Diavola', description: 'Spicy salami, mozzarella, tomato sauce, and fresh chili', price: 19, tags: ['spicy'], image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=80' },
      { id: '15', name: 'Prosciutto e Rucola', description: 'Prosciutto di Parma, fresh arugula, shaved parmesan', price: 20, tags: [], image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80' },
      { id: '16', name: 'Funghi Trifolati', description: 'Wild mushrooms, truffle oil, mozzarella, and thyme', price: 19, tags: ['vegetarian'], image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80' },
    ],
  },
  {
    id: 'secondi',
    name: 'Secondi',
    description: 'Main courses featuring premium proteins',
    items: [
      { id: '17', name: 'Chicken Parmesan', description: 'Breaded chicken breast with marinara and melted mozzarella, served with spaghetti', price: 22, tags: [], popular: true, image: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=400&q=80' },
      { id: '18', name: 'Grilled Salmon', description: 'Atlantic salmon with lemon butter sauce and seasonal vegetables', price: 26, tags: ['gluten-free'], image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&q=80' },
      { id: '19', name: 'Veal Marsala', description: 'Sautéed veal medallions with Marsala wine and wild mushrooms', price: 28, tags: [], image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80' },
      { id: '20', name: 'Osso Buco', description: 'Braised veal shanks with gremolata, served with risotto Milanese', price: 32, tags: [], popular: true, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80' },
      { id: '21', name: 'Branzino al Forno', description: 'Oven-roasted Mediterranean sea bass with herbs and vegetables', price: 30, tags: ['gluten-free'], image: 'https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b?w=400&q=80' },
    ],
  },
  {
    id: 'dolci',
    name: 'Dolci',
    description: 'Sweet endings to your Italian feast',
    items: [
      { id: '22', name: 'Tiramisu', description: 'Classic Italian dessert with mascarpone, espresso-soaked ladyfingers, and cocoa', price: 10, tags: ['vegetarian'], popular: true, image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80' },
      { id: '23', name: 'Panna Cotta', description: 'Vanilla bean cream custard with seasonal berry compote', price: 9, tags: ['vegetarian', 'gluten-free'], image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80' },
      { id: '24', name: 'Cannoli', description: 'Crispy shells filled with sweet ricotta and chocolate chips', price: 8, tags: ['vegetarian'], image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&q=80' },
      { id: '25', name: 'Gelato Trio', description: 'Three scoops of our house-made Italian ice cream', price: 8, tags: ['vegetarian'], image: 'https://images.unsplash.com/photo-1557142046-c704a3a5f382?w=400&q=80' },
      { id: '26', name: 'Affogato', description: 'Vanilla gelato drowned in hot espresso', price: 7, tags: ['vegetarian'], image: 'https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=400&q=80' },
    ],
  },
];

export const testimonials = [
  {
    id: '1',
    quote: 'The best Italian food outside of Italy! The pasta is made fresh daily and you can taste the difference. The carbonara is absolutely divine.',
    author: 'Sarah M.',
    rating: 5,
    date: '2 weeks ago',
    source: 'google' as const,
  },
  {
    id: '2',
    quote: 'Our go-to date night spot. Romantic atmosphere, incredible wine selection, and the staff makes you feel like family. Highly recommend the Osso Buco!',
    author: 'James & Lisa K.',
    rating: 5,
    date: '1 month ago',
    source: 'yelp' as const,
  },
  {
    id: '3',
    quote: 'The lasagna is to die for! Friendly staff, cozy ambiance, and generous portions. This place is a hidden gem in Anytown.',
    author: 'Michael R.',
    rating: 5,
    date: '3 weeks ago',
    source: 'google' as const,
  },
  {
    id: '4',
    quote: 'We celebrated our anniversary here and it was perfect. The wine pairing was exceptional, and the tiramisu was the best I\'ve ever had.',
    author: 'Emily W.',
    rating: 5,
    date: '2 months ago',
    source: 'facebook' as const,
  },
];

export const team = [
  {
    name: 'Marco Rossi',
    role: 'Executive Chef',
    bio: 'Born in Bologna, Chef Marco brings 20 years of culinary experience from Michelin-starred restaurants across Italy.',
    years: '20+ years',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&q=80',
  },
  {
    name: 'Sofia Bianchi',
    role: 'Pastry Chef',
    bio: 'Sofia trained in Naples and specializes in traditional Italian desserts and modern interpretations.',
    years: '12 years',
    image: 'https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=400&q=80',
  },
  {
    name: 'Antonio Ricci',
    role: 'Sommelier',
    bio: 'A certified sommelier with expertise in Italian wines, Antonio curates our award-winning wine list.',
    years: '10 years',
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&q=80',
  },
];

export const galleryImages = [
  { id: 1, category: 'interior', title: 'Main Dining Room', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80' },
  { id: 2, category: 'interior', title: 'Private Dining Area', image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80' },
  { id: 3, category: 'food', title: 'Fresh Pasta', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80' },
  { id: 4, category: 'food', title: 'Wood-Fired Pizza', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80' },
  { id: 5, category: 'food', title: 'Tiramisu', image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80' },
  { id: 6, category: 'events', title: 'Wine Tasting Event', image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&q=80' },
  { id: 7, category: 'team', title: 'Chef Marco', image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80' },
  { id: 8, category: 'interior', title: 'Bar Area', image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800&q=80' },
  { id: 9, category: 'food', title: 'Fresh Ingredients', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80' },
];
