let bibleVerses = [
  "Philippians 4:13 – I can do all things through Christ who strengthens me.",
  "Jeremiah 29:11 – For I know the plans I have for you, declares the Lord...",
  "Psalm 23:1 – The Lord is my shepherd; I shall not want.",
  "Romans 8:28 – All things work together for good to those who love God.",
  "John 3:16 – For God so loved the world that He gave His only Son...",
  "Isaiah 41:10 – Do not fear, for I am with you; do not be dismayed...",
  "Proverbs 3:5 – Trust in the Lord with all your heart and lean not on your own understanding.",
  "Matthew 5:16 – Let your light shine before others, that they may see your good deeds..."
];

let verseBox = document.getElementById('verseBox');
let newVerseBtn = document.getElementById('newVerse');

newVerseBtn.addEventListener('click', () => {
  let randomIndex = Math.floor(Math.random() * bibleVerses.length);
  verseBox.textContent = bibleVerses[randomIndex];
});