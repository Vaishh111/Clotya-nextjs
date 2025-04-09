import React from 'react';

const News = () => {
  const newsItems = [
    {
      category: 'COLLECTION',
      date: '25 Apr 2022',
      title: 'The Best Products That Shape Fashion',
      description: 'Donec rhoncus quis diam sit amet faucibus. Vivamus pellentesque, sem sed convallis ultricies, ante eros.',
      image: 'news-1.jpg',
    },
    {
      category: 'FASHION',
      date: '25 Apr 2022',
      title: 'New Finds From Tuckernuck',
      description: 'Donec rhoncus quis diam sit amet faucibus. Vivamus pellentesque, sem sed convallis ultricies, ante eros.',
      image: 'news-2.jpg',
    },
    {
      category: 'CLOTHING',
      date: '25 Apr 2022',
      title: 'Sunset Sets From Saks',
      description: 'Donec rhoncus quis diam sit amet faucibus. Vivamus pellentesque, sem sed convallis ultricies, ante eros.',
      image: 'news-3.jpg',
    },
  ];

  return (
    <section className="py-10 sm:px-6 md:px-12 mt-10 xl:px-24 px-5">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Our Latest News</h2>
        <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, and this and so sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {newsItems.map((item, index) => (
          <div key={index} className=" overflow-hidden shadow-lg">
            <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
            <div className="p-5">
              <p className="text-gray-500 text-sm font-semibold">{item.category} — {item.date}</p>
              <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;
