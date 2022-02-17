const favouriteTvShows = [
  'Lost',
  'Stranger Things',
  'Breaking Bad',
  'Game of Thrones',
  '24',
  'The Office',
  'Community',
  'Parks and Rec.',
  'Power',
  'BoJack Horseman',
  'The Witcher',
  'Homeland',
  'Disenchantment',
  'Euphoria',
  'Degrassi',
  'Drake and Josh',
  'The Walking Dead',
  'Adventure Time',
  'Futurama',
  'Family Guy',
  'South Park',
  'Malcolm in the Middle',
  'Simpsons',
  'Keeping Up With the Kardashian',
  'SpongeBob'
];

const randomIndex = (length) => {
  return Math.floor(Math.random() * length);
}

const randomItem = favouriteTvShows[randomIndex(favouriteTvShows.length)];

document.querySelector('.output').textContent = randomItem;

