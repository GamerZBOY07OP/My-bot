const mineflayer = require('mineflayer');

const botOptions = {
  host: 'MCSiftRevealer.aternos.me',
  port: 18403,
  username: 'Afk_hu_mt_bula',
  version: '26.3' // তোমার সার্ভারের ভার্সন এখানে ঠিকমতো দেওয়া আছে
};

function createBot() {
  const bot = mineflayer.createBot(botOptions);

  bot.on('spawn', () => {
    console.log('বট সফলভাবে সার্ভারে ঢুকেছে!');
    
    // ছোটখাটো নড়াচড়া বা অ্যান্টি-এএফকে সিস্টেম
    setInterval(() => {
      bot.setControlState('jump', true);
      setTimeout(() => bot.setControlState('jump', false), 500);
    }, 10000); // প্রতি ১০ সেকেন্ডে একবার লাফাবে
  });

  bot.on('error', (err) => {
    console.log('এরর এসেছে:', err);
  });

  bot.on('end', () => {
    console.log('ডিসকানেক্ট হয়ে গেছে। ৫ সেকেন্ড পর আবার কানেক্ট করার চেষ্টা করছে...');
    setTimeout(createBot, 5000); // ডিসকানেক্ট হলে ৫ সেকেন্ড পর রিকানেক্ট করবে
  });
}

createBot();
