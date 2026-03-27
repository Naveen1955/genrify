const STATIC = {
  hollywood: {
    action: [
      { title: 'The Dark Knight', subtitle: '2008', description: 'Batman raises the stakes in his war on crime against the Joker, a criminal mastermind who wants to plunge Gotham into anarchy.', rating: '9.0', platforms: ['Netflix', 'Prime Video'], external_url: 'https://www.justwatch.com/in/movie/the-dark-knight', poster: 'https://image.tmdb.org/t/p/w200/qJ2tW6WMUDux911r6m7haRef0WH.jpg' },
      { title: 'Mad Max: Fury Road', subtitle: '2015', description: 'In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with a group of female prisoners.', rating: '8.1', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/mad-max-fury-road', poster: 'https://image.tmdb.org/t/p/w200/hA2ple9q4qnwxp3hKVNhroipsir.jpg' },
      { title: 'John Wick', subtitle: '2014', description: 'An ex-hitman comes out of retirement to track down the gangsters who killed his dog and stole his car.', rating: '7.4', platforms: ['Prime Video', 'Netflix'], external_url: 'https://www.justwatch.com/in/movie/john-wick', poster: 'https://image.tmdb.org/t/p/w200/fZPSd91qGqdqEqHwzZkMiBYfROR.jpg' },
    ],
    drama: [
      { title: 'The Shawshank Redemption', subtitle: '1994', description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.', rating: '9.3', platforms: ['Netflix', 'Prime Video'], external_url: 'https://www.justwatch.com/in/movie/the-shawshank-redemption', poster: 'https://image.tmdb.org/t/p/w200/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg' },
      { title: 'Forrest Gump', subtitle: '1994', description: 'The life story of a man with a low IQ who achieves great things and experiences key moments of American history.', rating: '8.8', platforms: ['Prime Video'], external_url: 'https://www.justwatch.com/in/movie/forrest-gump', poster: 'https://image.tmdb.org/t/p/w200/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg' },
      { title: "Schindler's List", subtitle: '1993', description: 'In German-occupied Poland, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution.', rating: '9.0', platforms: ['Prime Video'], external_url: 'https://www.justwatch.com/in/movie/schindlers-list', poster: 'https://image.tmdb.org/t/p/w200/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg' },
    ],
    thriller: [
      { title: 'Se7en', subtitle: '1995', description: 'Two detectives hunt a serial killer who uses the seven deadly sins as his modus operandi.', rating: '8.6', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/se7en', poster: 'https://image.tmdb.org/t/p/w200/6yoghtyTpznpBik8EngEmJskVnS.jpg' },
      { title: 'Gone Girl', subtitle: '2014', description: 'When his wife goes missing, a man becomes the prime suspect as dark secrets about their marriage emerge.', rating: '8.1', platforms: ['Disney+'], external_url: 'https://www.justwatch.com/in/movie/gone-girl', poster: 'https://image.tmdb.org/t/p/w200/fCayJrkfRaCRCTh8GqN30f8oyQF.jpg' },
      { title: 'Prisoners', subtitle: '2013', description: 'When his daughter goes missing, a desperate father takes matters into his own hands while a detective searches for the truth.', rating: '8.1', platforms: ['Prime Video'], external_url: 'https://www.justwatch.com/in/movie/prisoners', poster: 'https://image.tmdb.org/t/p/w200/iMOGJIEFpKpNLXxAoiY1vKz0PbN.jpg' },
    ],
    horror: [
      { title: 'The Conjuring', subtitle: '2013', description: 'Paranormal investigators Ed and Lorraine Warren help a family terrorized by a dark presence in their farmhouse.', rating: '7.5', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/the-conjuring', poster: 'https://image.tmdb.org/t/p/w200/wVYREutTvI2tmxr6ujrHT704wGF.jpg' },
      { title: 'Get Out', subtitle: '2017', description: "A young African-American visits his white girlfriend's parents where his uneasiness about their community becomes terrifying reality.", rating: '7.7', platforms: ['Prime Video'], external_url: 'https://www.justwatch.com/in/movie/get-out', poster: 'https://image.tmdb.org/t/p/w200/tFXcEccSQMVl9dsvXyJpOdnDKoc.jpg' },
      { title: 'Hereditary', subtitle: '2018', description: 'A grieving family is haunted by disturbing occurrences after the death of their secretive grandmother.', rating: '7.3', platforms: ['Prime Video'], external_url: 'https://www.justwatch.com/in/movie/hereditary', poster: 'https://image.tmdb.org/t/p/w200/4O73wJ4ukys9K1os4WFElaJNBnl.jpg' },
    ],
    romance: [
      { title: 'Titanic', subtitle: '1997', description: 'A young aristocrat falls in love with a kind but poor artist aboard the ill-fated R.M.S. Titanic.', rating: '7.9', platforms: ['Prime Video', 'Netflix'], external_url: 'https://www.justwatch.com/in/movie/titanic', poster: 'https://image.tmdb.org/t/p/w200/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg' },
      { title: 'The Notebook', subtitle: '2004', description: 'A passionate young man falls in love with a rich young woman, giving her a choice between her social class and true love.', rating: '7.8', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/the-notebook', poster: 'https://image.tmdb.org/t/p/w200/rNzQyW4f8B8cQeg7Dgj3n6eT5k9.jpg' },
      { title: 'Pride and Prejudice', subtitle: '2005', description: 'Sparks fly when spirited Elizabeth Bennet meets single, rich, and proud Mr. Darcy in Regency-era England.', rating: '7.8', platforms: ['Netflix', 'Prime Video'], external_url: 'https://www.justwatch.com/in/movie/pride-prejudice-2005', poster: 'https://image.tmdb.org/t/p/w200/1mDw60BmHFfFyQ9SNEyiHAAAA0.jpg' },
    ],
    comedy: [
      { title: 'The Grand Budapest Hotel', subtitle: '2014', description: 'The adventures of a legendary concierge and his trusted lobby boy at a famous European hotel between the wars.', rating: '8.1', platforms: ['Disney+'], external_url: 'https://www.justwatch.com/in/movie/the-grand-budapest-hotel', poster: 'https://image.tmdb.org/t/p/w200/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg' },
      { title: 'Home Alone', subtitle: '1990', description: 'An eight-year-old troublemaker is mistakenly left behind when his family flies to France for Christmas vacation.', rating: '7.7', platforms: ['Disney+'], external_url: 'https://www.justwatch.com/in/movie/home-alone', poster: 'https://image.tmdb.org/t/p/w200/onTSipZ8R3bliBdKfPtsDaxA2wT.jpg' },
      { title: 'The Hangover', subtitle: '2009', description: 'Three buddies wake up from a bachelor party in Las Vegas with no memory of the previous night and the groom missing.', rating: '7.7', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/the-hangover', poster: 'https://image.tmdb.org/t/p/w200/uluhlXubGu1VxU63boQXRFSk90z.jpg' },
    ],
    fantasy: [
      { title: 'The Lord of the Rings: The Fellowship of the Ring', subtitle: '2001', description: 'A meek Hobbit and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth.', rating: '8.8', platforms: ['Prime Video'], external_url: 'https://www.justwatch.com/in/movie/the-lord-of-the-rings-the-fellowship-of-the-ring', poster: 'https://image.tmdb.org/t/p/w200/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg' },
      { title: "Harry Potter and the Philosopher's Stone", subtitle: '2001', description: 'An orphaned boy discovers he is a wizard and is invited to study at Hogwarts School of Witchcraft and Wizardry.', rating: '7.9', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/harry-potter-and-the-sorcerers-stone', poster: 'https://image.tmdb.org/t/p/w200/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg' },
      { title: 'The Chronicles of Narnia', subtitle: '2005', description: 'Four kids travel through a wardrobe to Narnia and learn of their destiny to free it from a White Witch\'s eternal winter.', rating: '6.9', platforms: ['Disney+'], external_url: 'https://www.justwatch.com/in/movie/the-chronicles-of-narnia-the-lion-the-witch-and-the-wardrobe', poster: 'https://image.tmdb.org/t/p/w200/uFQ79mwOFxAQauQUiDsUllPWvIz.jpg' },
    ],
    'sci-fi': [
      { title: 'Interstellar', subtitle: '2014', description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.', rating: '8.6', platforms: ['Prime Video', 'Netflix'], external_url: 'https://www.justwatch.com/in/movie/interstellar', poster: 'https://image.tmdb.org/t/p/w200/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg' },
      { title: 'The Matrix', subtitle: '1999', description: 'A computer hacker learns about the true nature of reality and his role in the war against its controllers.', rating: '8.7', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/the-matrix', poster: 'https://image.tmdb.org/t/p/w200/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg' },
      { title: 'Inception', subtitle: '2010', description: 'A thief who steals corporate secrets through dream-sharing technology is given the task of planting an idea into a CEO\'s mind.', rating: '8.8', platforms: ['Netflix', 'Prime Video'], external_url: 'https://www.justwatch.com/in/movie/inception', poster: 'https://image.tmdb.org/t/p/w200/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg' },
    ],
    mystery: [
      { title: 'Knives Out', subtitle: '2019', description: 'A detective investigates the death of a patriarch of an eccentric, combative family.', rating: '7.9', platforms: ['Prime Video'], external_url: 'https://www.justwatch.com/in/movie/knives-out', poster: 'https://image.tmdb.org/t/p/w200/pThyQovXQrw2m0s9x82twj48Jq4.jpg' },
      { title: 'Zodiac', subtitle: '2007', description: 'A San Francisco cartoonist becomes an amateur detective obsessed with tracking the Zodiac Killer.', rating: '7.7', platforms: ['Prime Video'], external_url: 'https://www.justwatch.com/in/movie/zodiac', poster: 'https://image.tmdb.org/t/p/w200/e6rUPkCMSBOCTGKGnTFcOaFofpL.jpg' },
      { title: 'The Girl with the Dragon Tattoo', subtitle: '2011', description: 'A journalist and a young hacker investigate a woman who has been missing for 40 years.', rating: '7.8', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/the-girl-with-the-dragon-tattoo-2011', poster: 'https://image.tmdb.org/t/p/w200/ed4X8wn6yyeUCFXFAlbCpCFxGLZ.jpg' },
    ],
    history: [
      { title: 'Oppenheimer', subtitle: '2023', description: 'The story of J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II.', rating: '8.3', platforms: ['Prime Video'], external_url: 'https://www.justwatch.com/in/movie/oppenheimer', poster: 'https://image.tmdb.org/t/p/w200/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg' },
      { title: 'Gladiator', subtitle: '2000', description: 'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family.', rating: '8.5', platforms: ['Netflix', 'Prime Video'], external_url: 'https://www.justwatch.com/in/movie/gladiator', poster: 'https://image.tmdb.org/t/p/w200/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg' },
      { title: 'Braveheart', subtitle: '1995', description: 'Scottish warrior William Wallace leads his countrymen in a rebellion against the tyranny of King Edward I.', rating: '8.3', platforms: ['Prime Video'], external_url: 'https://www.justwatch.com/in/movie/braveheart', poster: 'https://image.tmdb.org/t/p/w200/or1gBugydmjToAEq7OZY0owwFk.jpg' },
    ],
    psychology: [
      { title: 'A Beautiful Mind', subtitle: '2001', description: 'After Nobel laureate John Nash accepts secret work in cryptography, his life takes a nightmarish turn.', rating: '8.2', platforms: ['Prime Video'], external_url: 'https://www.justwatch.com/in/movie/a-beautiful-mind', poster: 'https://image.tmdb.org/t/p/w200/1OeEqiXrFtEMHX5GjRrHK0KN6gA.jpg' },
      { title: 'Shutter Island', subtitle: '2010', description: 'A US Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane.', rating: '8.2', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/shutter-island', poster: 'https://image.tmdb.org/t/p/w200/kve20tXygZW4zvaxOP0p7sMIScz.jpg' },
      { title: 'Black Swan', subtitle: '2010', description: 'A committed dancer wins the lead role in Swan Lake only to find herself struggling to maintain her sanity.', rating: '8.0', platforms: ['Disney+'], external_url: 'https://www.justwatch.com/in/movie/black-swan', poster: 'https://image.tmdb.org/t/p/w200/4W9oQKHgRtQVPJSKCTNEPBMRzPC.jpg' },
    ],
    technology: [
      { title: 'The Social Network', subtitle: '2010', description: 'The story of the founding of Facebook and the legal battles between co-founders that followed.', rating: '7.8', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/the-social-network', poster: 'https://image.tmdb.org/t/p/w200/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg' },
      { title: 'Ex Machina', subtitle: '2014', description: 'A programmer is invited to administer the Turing test to an AI with remarkable human qualities.', rating: '7.7', platforms: ['Prime Video', 'Netflix'], external_url: 'https://www.justwatch.com/in/movie/ex-machina', poster: 'https://image.tmdb.org/t/p/w200/btbNDmEKSqT0sHLBLkdHmxLNMzb.jpg' },
      { title: 'Her', subtitle: '2013', description: 'A lonely writer develops an unlikely relationship with an operating system designed to meet his every need.', rating: '8.0', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/her', poster: 'https://image.tmdb.org/t/p/w200/sPOaQCBMhGkRCHMV9oGOQaXwFYQ.jpg' },
    ],
    business: [
      { title: 'The Wolf of Wall Street', subtitle: '2013', description: 'The true story of Jordan Belfort, from his rise to a wealthy stockbroker to his fall involving crime and corruption.', rating: '8.2', platforms: ['Netflix', 'Prime Video'], external_url: 'https://www.justwatch.com/in/movie/the-wolf-of-wall-street', poster: 'https://image.tmdb.org/t/p/w200/pWHf4khOloNVfCxscsXFj3jj6gP.jpg' },
      { title: 'The Big Short', subtitle: '2015', description: 'Four outsiders saw what the big banks refused to — the collapse of the housing market — and bet against it.', rating: '7.8', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/the-big-short', poster: 'https://image.tmdb.org/t/p/w200/gOHiWAVkiCqX8UeSeVEJBrFvAiR.jpg' },
      { title: 'Moneyball', subtitle: '2011', description: "Oakland A's manager Billy Beane's attempt to assemble a baseball team on a lean budget using data analysis.", rating: '7.6', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/moneyball', poster: 'https://image.tmdb.org/t/p/w200/3oAa8mJJ97CH9AeGEY6vjAxqcvZ.jpg' },
    ],
    animation: [
      { title: 'Spirited Away', subtitle: '2001', description: 'During her family\'s move, a 10-year-old girl wanders into a world ruled by gods, witches and spirits and must find a way back.', rating: '8.6', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/spirited-away', poster: 'https://image.tmdb.org/t/p/w200/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg' },
      { title: 'The Lion King', subtitle: '1994', description: 'Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.', rating: '8.5', platforms: ['Disney+'], external_url: 'https://www.justwatch.com/in/movie/the-lion-king', poster: 'https://image.tmdb.org/t/p/w200/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg' },
      { title: 'Up', subtitle: '2009', description: 'A 78-year-old balloon salesman flies his house to South America with an 8-year-old stowaway aboard.', rating: '8.3', platforms: ['Disney+'], external_url: 'https://www.justwatch.com/in/movie/up', poster: 'https://image.tmdb.org/t/p/w200/kiWlADVnjhrkmQ1B5JkjZ3r814K.jpg' },
    ],
  },
  bollywood: {
    action: [
      { title: 'Sholay', subtitle: '1975', description: 'Two criminals are hired by a retired police officer to capture a ruthless dacoit who terrorizes a small village.', rating: '8.2', platforms: ['Prime Video', 'Netflix'], external_url: 'https://www.justwatch.com/in/movie/sholay', poster: 'https://image.tmdb.org/t/p/w200/qJ2tW6WMUDux911r6m7haRef0WH.jpg' },
      { title: 'Pathaan', subtitle: '2023', description: 'An Indian spy takes on the leader of a mercenary organization called Outfit X which has vowed to attack India.', rating: '5.8', platforms: ['Prime Video'], external_url: 'https://www.justwatch.com/in/movie/pathaan', poster: 'https://image.tmdb.org/t/p/w200/hqkIcbrOHL86UncnHIsHVcVmzue.jpg' },
      { title: 'War', subtitle: '2019', description: 'An Indian soldier is assigned to eliminate his former mentor who has gone rogue and is involved in terrorist activities.', rating: '5.1', platforms: ['Netflix', 'Prime Video'], external_url: 'https://www.justwatch.com/in/movie/war-2019', poster: 'https://image.tmdb.org/t/p/w200/rUjmAPNe7lv9mWzxCBxkqxlLJkR.jpg' },
    ],
    drama: [
      { title: 'Dil Chahta Hai', subtitle: '2001', description: 'Three inseparable childhood friends have a falling out and go their separate ways when they realize their different outlooks on life and love.', rating: '8.1', platforms: ['Netflix', 'Prime Video'], external_url: 'https://www.justwatch.com/in/movie/dil-chahta-hai', poster: 'https://image.tmdb.org/t/p/w200/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg' },
      { title: 'Zindagi Na Milegi Dobara', subtitle: '2011', description: 'Three friends turn their bachelor trip into a journey of self-discovery through the roads of Spain.', rating: '8.2', platforms: ['Netflix', 'Prime Video'], external_url: 'https://www.justwatch.com/in/movie/zindagi-na-milegi-dobara', poster: 'https://image.tmdb.org/t/p/w200/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg' },
      { title: 'Taare Zameen Par', subtitle: '2007', description: 'An eight-year-old boy thought to be a troublemaker has a unique way of looking at the world that only his art teacher recognizes.', rating: '8.4', platforms: ['Netflix', 'Prime Video'], external_url: 'https://www.justwatch.com/in/movie/taare-zameen-par', poster: 'https://image.tmdb.org/t/p/w200/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg' },
    ],
    romance: [
      { title: 'Dilwale Dulhania Le Jayenge', subtitle: '1995', description: 'A young man and woman fall in love on a Europe trip, but her father has arranged her marriage to another man.', rating: '8.1', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/dilwale-dulhania-le-jayenge', poster: 'https://image.tmdb.org/t/p/w200/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg' },
      { title: 'Kabir Singh', subtitle: '2019', description: 'A short-tempered house surgeon gets self-destructive after his girlfriend is married to someone else.', rating: '7.1', platforms: ['Prime Video', 'Netflix'], external_url: 'https://www.justwatch.com/in/movie/kabir-singh', poster: 'https://image.tmdb.org/t/p/w200/rNzQyW4f8B8cQeg7Dgj3n6eT5k9.jpg' },
      { title: 'Veer-Zaara', subtitle: '2004', description: 'An Indian Air Force pilot falls in love with a Pakistani girl and their love story spans across 22 years.', rating: '7.7', platforms: ['Netflix', 'Prime Video'], external_url: 'https://www.justwatch.com/in/movie/veer-zaara', poster: 'https://image.tmdb.org/t/p/w200/1mDw60BmHFfFyQ9SNEyiHAAAA0.jpg' },
    ],
    comedy: [
      { title: '3 Idiots', subtitle: '2009', description: 'Two friends search for their long lost companion and recall their time together at an engineering college.', rating: '8.4', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/3-idiots', poster: 'https://image.tmdb.org/t/p/w200/66A9MqXZyHKIBWFHinUpJfoeomS.jpg' },
      { title: 'Hera Pheri', subtitle: '2000', description: 'Three men accidentally get involved in a kidnapping and the ensuing chaos that follows.', rating: '8.2', platforms: ['Prime Video', 'Netflix'], external_url: 'https://www.justwatch.com/in/movie/hera-pheri', poster: 'https://image.tmdb.org/t/p/w200/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg' },
      { title: 'Andaz Apna Apna', subtitle: '1994', description: 'Two lazy young men compete to woo a rich heiress, leading to hilarious chaos and confusion.', rating: '7.9', platforms: ['Prime Video'], external_url: 'https://www.justwatch.com/in/movie/andaz-apna-apna', poster: 'https://image.tmdb.org/t/p/w200/onTSipZ8R3bliBdKfPtsDaxA2wT.jpg' },
    ],
    thriller: [
      { title: 'Andhadhun', subtitle: '2018', description: 'A series of mysterious events changes the life of a blind pianist who unexpectedly becomes a witness to a murder.', rating: '8.2', platforms: ['Netflix', 'Prime Video'], external_url: 'https://www.justwatch.com/in/movie/andhadhun', poster: 'https://image.tmdb.org/t/p/w200/6yoghtyTpznpBik8EngEmJskVnS.jpg' },
      { title: 'Drishyam', subtitle: '2015', description: 'A man goes to extreme lengths to protect his family from the consequences of an accidental crime they committed.', rating: '8.3', platforms: ['Prime Video', 'Netflix'], external_url: 'https://www.justwatch.com/in/movie/drishyam', poster: 'https://image.tmdb.org/t/p/w200/iMOGJIEFpKpNLXxAoiY1vKz0PbN.jpg' },
      { title: 'Kahaani', subtitle: '2012', description: "A pregnant woman's search for her missing husband in Kolkata leads to a shocking revelation.", rating: '8.1', platforms: ['Prime Video', 'Netflix'], external_url: 'https://www.justwatch.com/in/movie/kahaani', poster: 'https://image.tmdb.org/t/p/w200/fCayJrkfRaCRCTh8GqN30f8oyQF.jpg' },
    ],
    history: [
      { title: 'Lagaan', subtitle: '2001', description: 'The people of a small village in Victorian India stake their future on a cricket match against their British rulers.', rating: '8.1', platforms: ['Netflix', 'Prime Video'], external_url: 'https://www.justwatch.com/in/movie/lagaan', poster: 'https://image.tmdb.org/t/p/w200/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg' },
      { title: 'Sardar Udham', subtitle: '2021', description: 'The story of Udham Singh who assassinated the colonial administrator responsible for the Jallianwala Bagh massacre.', rating: '8.4', platforms: ['Prime Video'], external_url: 'https://www.justwatch.com/in/movie/sardar-udham', poster: 'https://image.tmdb.org/t/p/w200/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg' },
      { title: 'The Legend of Bhagat Singh', subtitle: '2002', description: 'The story of Bhagat Singh, one of the most influential revolutionaries of the Indian independence movement.', rating: '8.0', platforms: ['Prime Video'], external_url: 'https://www.justwatch.com/in/movie/the-legend-of-bhagat-singh', poster: 'https://image.tmdb.org/t/p/w200/or1gBugydmjToAEq7OZY0owwFk.jpg' },
    ],
    fantasy: [
      { title: 'Brahmastra Part One: Shiva', subtitle: '2022', description: 'A young man discovers his unique connection with fire and the power of the Brahmastra, an ancient superweapon.', rating: '5.6', platforms: ['Disney+ Hotstar'], external_url: 'https://www.justwatch.com/in/movie/brahmastra-part-one-shiva', poster: 'https://image.tmdb.org/t/p/w200/sz4GHR1MnqAhpEKBa5NHFY0JjES.jpg' },
      { title: 'PK', subtitle: '2014', description: 'An alien on Earth loses the only device he can use to communicate with his spaceship and must learn from humans.', rating: '8.1', platforms: ['Netflix', 'Prime Video'], external_url: 'https://www.justwatch.com/in/movie/pk', poster: 'https://image.tmdb.org/t/p/w200/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg' },
      { title: 'Jodhaa Akbar', subtitle: '2008', description: 'The epic love story of the great Mughal emperor Akbar and Rajput princess Jodhaa.', rating: '7.5', platforms: ['Netflix', 'Prime Video'], external_url: 'https://www.justwatch.com/in/movie/jodhaa-akbar', poster: 'https://image.tmdb.org/t/p/w200/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg' },
    ],
    'sci-fi': [
      { title: 'Koi... Mil Gaya', subtitle: '2003', description: 'A developmentally disabled young man makes contact with an alien and becomes superhuman after being exposed to its energy.', rating: '7.1', platforms: ['Prime Video'], external_url: 'https://www.justwatch.com/in/movie/koi-mil-gaya', poster: 'https://image.tmdb.org/t/p/w200/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg' },
      { title: 'Ra.One', subtitle: '2011', description: 'A video game developer creates a supervillain who escapes into the real world and must be stopped.', rating: '4.8', platforms: ['Netflix', 'Prime Video'], external_url: 'https://www.justwatch.com/in/movie/ra-one', poster: 'https://image.tmdb.org/t/p/w200/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg' },
      { title: '2.0', subtitle: '2018', description: 'A scientist creates a humanoid robot to battle a giant bird-like supervillain terrorizing the city.', rating: '6.8', platforms: ['Netflix', 'Prime Video'], external_url: 'https://www.justwatch.com/in/movie/20', poster: 'https://image.tmdb.org/t/p/w200/btbNDmEKSqT0sHLBLkdHmxLNMzb.jpg' },
    ],
    mystery: [
      { title: 'Talaash', subtitle: '2012', description: 'A police officer investigates a case while battling his own personal demons and a troubled marriage.', rating: '7.5', platforms: ['Prime Video'], external_url: 'https://www.justwatch.com/in/movie/talaash', poster: 'https://image.tmdb.org/t/p/w200/pThyQovXQrw2m0s9x82twj48Jq4.jpg' },
      { title: 'Badla', subtitle: '2019', description: 'A businesswoman locked in a hotel room with a dead body hires a lawyer to uncover the truth.', rating: '7.7', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/badla', poster: 'https://image.tmdb.org/t/p/w200/ed4X8wn6yyeUCFXFAlbCpCFxGLZ.jpg' },
      { title: 'Ugly', subtitle: '2013', description: 'A missing girl case exposes the dark underbelly of Mumbai and the corruption within the police force.', rating: '8.2', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/ugly-2013', poster: 'https://image.tmdb.org/t/p/w200/e6rUPkCMSBOCTGKGnTFcOaFofpL.jpg' },
    ],
    psychology: [
      { title: 'My Name is Khan', subtitle: '2010', description: 'A Muslim man with Asperger\'s syndrome sets out on a journey to meet the President of the United States.', rating: '7.9', platforms: ['Netflix', 'Prime Video'], external_url: 'https://www.justwatch.com/in/movie/my-name-is-khan', poster: 'https://image.tmdb.org/t/p/w200/1OeEqiXrFtEMHX5GjRrHK0KN6gA.jpg' },
      { title: 'Dear Zindagi', subtitle: '2016', description: 'A young woman finds the key to happiness when she meets a carefree therapist who encourages her to explore a new way of living.', rating: '7.3', platforms: ['Netflix', 'Prime Video'], external_url: 'https://www.justwatch.com/in/movie/dear-zindagi', poster: 'https://image.tmdb.org/t/p/w200/kve20tXygZW4zvaxOP0p7sMIScz.jpg' },
      { title: 'Kapoor and Sons', subtitle: '2016', description: 'Two brothers return home to their dysfunctional family and face buried secrets and long-held grudges.', rating: '7.8', platforms: ['Netflix', 'Prime Video'], external_url: 'https://www.justwatch.com/in/movie/kapoor-and-sons', poster: 'https://image.tmdb.org/t/p/w200/4W9oQKHgRtQVPJSKCTNEPBMRzPC.jpg' },
    ],
    technology: [
      { title: 'Guru', subtitle: '2007', description: 'The story of a villager who rises to become a powerful business magnate in India, inspired by Dhirubhai Ambani.', rating: '7.6', platforms: ['Netflix', 'Prime Video'], external_url: 'https://www.justwatch.com/in/movie/guru-2007', poster: 'https://image.tmdb.org/t/p/w200/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg' },
      { title: 'Rocket Singh: Salesman of the Year', subtitle: '2009', description: 'A mediocre student enters the corporate world and starts his own company from within his employer\'s office.', rating: '7.7', platforms: ['Netflix', 'Prime Video'], external_url: 'https://www.justwatch.com/in/movie/rocket-singh-salesman-of-the-year', poster: 'https://image.tmdb.org/t/p/w200/sPOaQCBMhGkRCHMV9oGOQaXwFYQ.jpg' },
      { title: 'iSmart Shankar', subtitle: '2019', description: 'A man is implanted with a criminal\'s memories and must deal with the consequences.', rating: '6.4', platforms: ['Prime Video'], external_url: 'https://www.justwatch.com/in/movie/ismart-shankar', poster: 'https://image.tmdb.org/t/p/w200/btbNDmEKSqT0sHLBLkdHmxLNMzb.jpg' },
    ],
    business: [
      { title: 'Guru', subtitle: '2007', description: 'A villager rises to become the most powerful business magnate in India through sheer determination and wit.', rating: '7.6', platforms: ['Netflix', 'Prime Video'], external_url: 'https://www.justwatch.com/in/movie/guru-2007', poster: 'https://image.tmdb.org/t/p/w200/pWHf4khOloNVfCxscsXFj3jj6gP.jpg' },
      { title: 'Scam 1992', subtitle: '2020', description: 'The story of Harshad Mehta, a stockbroker who single-handedly took the stock market to dizzying heights.', rating: '9.3', platforms: ['SonyLIV'], external_url: 'https://www.justwatch.com/in/movie/scam-1992', poster: 'https://image.tmdb.org/t/p/w200/gOHiWAVkiCqX8UeSeVEJBrFvAiR.jpg' },
      { title: 'Dil Dhadakne Do', subtitle: '2015', description: 'A dysfunctional family goes on a Mediterranean cruise and each member confronts their own demons.', rating: '7.3', platforms: ['Netflix', 'Prime Video'], external_url: 'https://www.justwatch.com/in/movie/dil-dhadakne-do', poster: 'https://image.tmdb.org/t/p/w200/3oAa8mJJ97CH9AeGEY6vjAxqcvZ.jpg' },
    ],
    animation: [
      { title: 'Roadside Romeo', subtitle: '2008', description: 'A pampered pet dog is abandoned on the streets of Mumbai and must learn to survive with the help of street dogs.', rating: '6.5', platforms: ['Disney+ Hotstar'], external_url: 'https://www.justwatch.com/in/movie/roadside-romeo', poster: 'https://image.tmdb.org/t/p/w200/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg' },
      { title: 'Hanuman', subtitle: '2005', description: 'The story of the Hindu god Hanuman and his adventures with Lord Rama as told to a young boy.', rating: '7.5', platforms: ['Prime Video'], external_url: 'https://www.justwatch.com/in/movie/hanuman-2005', poster: 'https://image.tmdb.org/t/p/w200/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg' },
      { title: 'Arjun: The Warrior Prince', subtitle: '2012', description: 'The story of Arjuna, the greatest warrior of the Mahabharata, from his childhood to the Battle of Kurukshetra.', rating: '7.0', platforms: ['Prime Video'], external_url: 'https://www.justwatch.com/in/movie/arjun-the-warrior-prince', poster: 'https://image.tmdb.org/t/p/w200/kiWlADVnjhrkmQ1B5JkjZ3r814K.jpg' },
    ],
    horror: [
      { title: 'Stree', subtitle: '2018', description: 'A small town is terrorized by a witch who abducts men, and a group of friends must uncover the truth behind the legend.', rating: '7.8', platforms: ['Prime Video', 'Netflix'], external_url: 'https://www.justwatch.com/in/movie/stree', poster: 'https://image.tmdb.org/t/p/w200/wVYREutTvI2tmxr6ujrHT704wGF.jpg' },
      { title: 'Tumbbad', subtitle: '2018', description: 'A man seeks a mythological treasure hidden by a goddess and the greed it awakens across generations.', rating: '8.2', platforms: ['Prime Video'], external_url: 'https://www.justwatch.com/in/movie/tumbbad', poster: 'https://image.tmdb.org/t/p/w200/tFXcEccSQMVl9dsvXyJpOdnDKoc.jpg' },
      { title: 'Raat Akeli Hai', subtitle: '2020', description: 'A police officer investigates the death of a wealthy man on his wedding night in a mansion full of secrets.', rating: '7.3', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/raat-akeli-hai', poster: 'https://image.tmdb.org/t/p/w200/4O73wJ4ukys9K1os4WFElaJNBnl.jpg' },
    ],
  },
  tollywood: {
    action: [
      { title: 'RRR', subtitle: '2022', description: 'A fictitious story about two legendary revolutionaries and their journey far from home before they started fighting for their country in the 1920s.', rating: '7.8', platforms: ['Netflix', 'Prime Video'], external_url: 'https://www.justwatch.com/in/movie/rrr', poster: 'https://image.tmdb.org/t/p/w200/nEufeZlyAOLqO6larWr8V4Tx4zP.jpg' },
      { title: 'Pushpa: The Rise', subtitle: '2021', description: 'A labourer rises through the ranks of a red sandalwood smuggling syndicate, encountering many enemies along the way.', rating: '7.6', platforms: ['Prime Video'], external_url: 'https://www.justwatch.com/in/movie/pushpa-the-rise', poster: 'https://image.tmdb.org/t/p/w200/iSPmXOlCXyJqNKKhBxrTm2RLOyU.jpg' },
      { title: 'Saaho', subtitle: '2019', description: 'A cop with a mysterious past takes on a powerful crime lord in this action-packed thriller.', rating: '4.7', platforms: ['Prime Video', 'Netflix'], external_url: 'https://www.justwatch.com/in/movie/saaho', poster: 'https://image.tmdb.org/t/p/w200/hA2ple9q4qnwxp3hKVNhroipsir.jpg' },
    ],
    fantasy: [
      { title: 'Baahubali: The Beginning', subtitle: '2015', description: 'In ancient India, an adventurous man becomes involved in a decades-old feud between two warring peoples.', rating: '8.0', platforms: ['Netflix', 'Prime Video'], external_url: 'https://www.justwatch.com/in/movie/baahubali-the-beginning', poster: 'https://image.tmdb.org/t/p/w200/cIPdFVQWfOFnMn1WEsZiCqVIACC.jpg' },
      { title: 'Baahubali 2: The Conclusion', subtitle: '2017', description: 'Shiva, the son of Bahubali, learns about his heritage and begins to look for answers through his mother\'s eyes.', rating: '8.2', platforms: ['Netflix', 'Prime Video'], external_url: 'https://www.justwatch.com/in/movie/baahubali-2-the-conclusion', poster: 'https://image.tmdb.org/t/p/w200/ioUe9B1JRFCRGLJNaXHBnfThbPl.jpg' },
      { title: 'Magadheera', subtitle: '2009', description: 'A warrior\'s spirit from the past is reborn in the modern world to battle evil and protect a princess he loved centuries ago.', rating: '7.8', platforms: ['Prime Video', 'Netflix'], external_url: 'https://www.justwatch.com/in/movie/magadheera', poster: 'https://image.tmdb.org/t/p/w200/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg' },
    ],
    drama: [
      { title: 'Jersey', subtitle: '2019', description: 'A failed cricketer decides to revive his career in his late 30s to fulfil his young son\'s wish for a jersey.', rating: '8.6', platforms: ['Netflix', 'Prime Video'], external_url: 'https://www.justwatch.com/in/movie/jersey-2019', poster: 'https://image.tmdb.org/t/p/w200/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg' },
      { title: 'Arjun Reddy', subtitle: '2017', description: 'A short-tempered house surgeon falls into self-destruction after his girlfriend is married to someone else.', rating: '8.1', platforms: ['Prime Video', 'Netflix'], external_url: 'https://www.justwatch.com/in/movie/arjun-reddy', poster: 'https://image.tmdb.org/t/p/w200/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg' },
      { title: 'Mahanati', subtitle: '2018', description: 'The biopic of legendary actress Savitri, known as the Mahanati (Great Actress) of Indian cinema.', rating: '8.6', platforms: ['Prime Video', 'Netflix'], external_url: 'https://www.justwatch.com/in/movie/mahanati', poster: 'https://image.tmdb.org/t/p/w200/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg' },
    ],
    thriller: [
      { title: 'Vikram', subtitle: '2022', description: 'A former black ops agent investigates the murder of his colleagues and uncovers a bigger conspiracy.', rating: '7.9', platforms: ['Disney+ Hotstar', 'Prime Video'], external_url: 'https://www.justwatch.com/in/movie/vikram-2022', poster: 'https://image.tmdb.org/t/p/w200/6yoghtyTpznpBik8EngEmJskVnS.jpg' },
      { title: 'Sye Raa Narasimha Reddy', subtitle: '2019', description: 'The story of Uyyalawada Narasimha Reddy, one of the first freedom fighters who revolted against the British in 1847.', rating: '6.6', platforms: ['Prime Video', 'Netflix'], external_url: 'https://www.justwatch.com/in/movie/sye-raa-narasimha-reddy', poster: 'https://image.tmdb.org/t/p/w200/iMOGJIEFpKpNLXxAoiY1vKz0PbN.jpg' },
      { title: 'Khaidi No. 150', subtitle: '2017', description: 'A prisoner fights against a corrupt politician who is destroying the lives of farmers.', rating: '7.2', platforms: ['Prime Video'], external_url: 'https://www.justwatch.com/in/movie/khaidi-no-150', poster: 'https://image.tmdb.org/t/p/w200/fCayJrkfRaCRCTh8GqN30f8oyQF.jpg' },
    ],
    romance: [
      { title: 'Geetha Govindam', subtitle: '2018', description: 'A traditional young man falls in love with a free-spirited girl who hates him due to a misunderstanding.', rating: '7.3', platforms: ['Prime Video', 'Netflix'], external_url: 'https://www.justwatch.com/in/movie/geetha-govindam', poster: 'https://image.tmdb.org/t/p/w200/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg' },
      { title: 'Ye Maaya Chesave', subtitle: '2010', description: 'A Hindu man falls in love with a Christian girl and the obstacles they face to be together.', rating: '7.8', platforms: ['Prime Video', 'Netflix'], external_url: 'https://www.justwatch.com/in/movie/ye-maaya-chesave', poster: 'https://image.tmdb.org/t/p/w200/rNzQyW4f8B8cQeg7Dgj3n6eT5k9.jpg' },
      { title: 'Ninnu Kori', subtitle: '2017', description: 'A man who still loves his ex-girlfriend is in a dilemma when she asks for his help to save her marriage.', rating: '7.5', platforms: ['Prime Video'], external_url: 'https://www.justwatch.com/in/movie/ninnu-kori', poster: 'https://image.tmdb.org/t/p/w200/1mDw60BmHFfFyQ9SNEyiHAAAA0.jpg' },
    ],
    comedy: [
      { title: 'F2: Fun and Frustration', subtitle: '2019', description: 'Two hen-pecked husbands go on a trip and find temporary freedom from their domineering wives.', rating: '7.2', platforms: ['Prime Video', 'Netflix'], external_url: 'https://www.justwatch.com/in/movie/f2-fun-and-frustration', poster: 'https://image.tmdb.org/t/p/w200/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg' },
      { title: 'Jabardasth', subtitle: '2013', description: 'Three friends seek revenge on a corrupt politician while falling in love along the way.', rating: '6.8', platforms: ['Prime Video'], external_url: 'https://www.justwatch.com/in/movie/jabardasth', poster: 'https://image.tmdb.org/t/p/w200/onTSipZ8R3bliBdKfPtsDaxA2wT.jpg' },
      { title: 'Julayi', subtitle: '2012', description: 'A lazy man who hates hard work accidentally becomes part of a high-profile bank robbery.', rating: '7.3', platforms: ['Prime Video'], external_url: 'https://www.justwatch.com/in/movie/julayi', poster: 'https://image.tmdb.org/t/p/w200/uluhlXubGu1VxU63boQXRFSk90z.jpg' },
    ],
    history: [
      { title: 'RRR', subtitle: '2022', description: 'A fictional tale of two Indian revolutionaries — Alluri Sitarama Raju and Komaram Bheem — and their fight for freedom.', rating: '7.8', platforms: ['Netflix', 'Prime Video'], external_url: 'https://www.justwatch.com/in/movie/rrr', poster: 'https://image.tmdb.org/t/p/w200/nEufeZlyAOLqO6larWr8V4Tx4zP.jpg' },
      { title: 'Sye Raa Narasimha Reddy', subtitle: '2019', description: 'The story of one of the first freedom fighters who revolted against the British in 1847.', rating: '6.6', platforms: ['Prime Video', 'Netflix'], external_url: 'https://www.justwatch.com/in/movie/sye-raa-narasimha-reddy', poster: 'https://image.tmdb.org/t/p/w200/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg' },
      { title: 'Mahanati', subtitle: '2018', description: 'The biopic of legendary actress Savitri, a golden-era icon of Telugu and Tamil cinema.', rating: '8.6', platforms: ['Prime Video', 'Netflix'], external_url: 'https://www.justwatch.com/in/movie/mahanati', poster: 'https://image.tmdb.org/t/p/w200/or1gBugydmjToAEq7OZY0owwFk.jpg' },
    ],
    'sci-fi': [
      { title: 'Kalki 2898 AD', subtitle: '2024', description: 'Set in a futuristic world, a warrior is destined to protect a divine child who will bring hope to a dying civilization.', rating: '6.9', platforms: ['Prime Video', 'Netflix'], external_url: 'https://www.justwatch.com/in/movie/kalki-2898-ad', poster: 'https://image.tmdb.org/t/p/w200/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg' },
      { title: 'Eega', subtitle: '2012', description: 'A man is murdered and reincarnated as a housefly to take revenge on the killer who stole his love.', rating: '8.0', platforms: ['Prime Video', 'Netflix'], external_url: 'https://www.justwatch.com/in/movie/eega', poster: 'https://image.tmdb.org/t/p/w200/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg' },
      { title: 'Awe!', subtitle: '2018', description: 'Six characters with very different lives are linked in unexpected ways in this experimental anthology film.', rating: '7.4', platforms: ['Prime Video'], external_url: 'https://www.justwatch.com/in/movie/awe', poster: 'https://image.tmdb.org/t/p/w200/btbNDmEKSqT0sHLBLkdHmxLNMzb.jpg' },
    ],
    mystery: [
      { title: 'Evaru', subtitle: '2019', description: 'A police officer suspects a woman who claims to have killed a corrupt politician in self-defence.', rating: '8.0', platforms: ['Prime Video', 'Netflix'], external_url: 'https://www.justwatch.com/in/movie/evaru', poster: 'https://image.tmdb.org/t/p/w200/pThyQovXQrw2m0s9x82twj48Jq4.jpg' },
      { title: 'HIT: The First Case', subtitle: '2020', description: 'A cop from the Homicide Intervention Team investigates the mysterious disappearance of a young woman.', rating: '7.4', platforms: ['Netflix', 'Prime Video'], external_url: 'https://www.justwatch.com/in/movie/hit-the-first-case', poster: 'https://image.tmdb.org/t/p/w200/ed4X8wn6yyeUCFXFAlbCpCFxGLZ.jpg' },
      { title: 'Drushyam', subtitle: '2014', description: 'A man protects his family from a police investigation after they accidentally kill a person.', rating: '8.3', platforms: ['Prime Video', 'Netflix'], external_url: 'https://www.justwatch.com/in/movie/drushyam', poster: 'https://image.tmdb.org/t/p/w200/e6rUPkCMSBOCTGKGnTFcOaFofpL.jpg' },
    ],
    psychology: [
      { title: 'Awe!', subtitle: '2018', description: 'An experimental anthology film exploring six characters whose stories interconnect in surprising ways.', rating: '7.4', platforms: ['Prime Video'], external_url: 'https://www.justwatch.com/in/movie/awe', poster: 'https://image.tmdb.org/t/p/w200/1OeEqiXrFtEMHX5GjRrHK0KN6gA.jpg' },
      { title: 'Ishq', subtitle: '2019', description: 'Two love stories that explore the darker side of obsession and what happens when love turns toxic.', rating: '7.6', platforms: ['Prime Video'], external_url: 'https://www.justwatch.com/in/movie/ishq-2019', poster: 'https://image.tmdb.org/t/p/w200/kve20tXygZW4zvaxOP0p7sMIScz.jpg' },
      { title: 'Colour Photo', subtitle: '2020', description: 'A love story set in the 1990s that explores casteism and its impact on a relationship between two young people.', rating: '8.4', platforms: ['Prime Video'], external_url: 'https://www.justwatch.com/in/movie/colour-photo', poster: 'https://image.tmdb.org/t/p/w200/4W9oQKHgRtQVPJSKCTNEPBMRzPC.jpg' },
    ],
    technology: [
      { title: 'iSmart Shankar', subtitle: '2019', description: 'A man implanted with a criminal\'s memories must deal with the dangerous consequences.', rating: '6.4', platforms: ['Prime Video'], external_url: 'https://www.justwatch.com/in/movie/ismart-shankar', poster: 'https://image.tmdb.org/t/p/w200/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg' },
      { title: 'Kalki 2898 AD', subtitle: '2024', description: 'A futuristic dystopia where technology and mythology collide in an epic battle for survival.', rating: '6.9', platforms: ['Prime Video', 'Netflix'], external_url: 'https://www.justwatch.com/in/movie/kalki-2898-ad', poster: 'https://image.tmdb.org/t/p/w200/sPOaQCBMhGkRCHMV9oGOQaXwFYQ.jpg' },
      { title: 'Agent Sai Srinivasa Athreya', subtitle: '2019', description: 'A self-proclaimed detective takes on a missing persons case in a small town.', rating: '8.0', platforms: ['Netflix', 'Prime Video'], external_url: 'https://www.justwatch.com/in/movie/agent-sai-srinivasa-athreya', poster: 'https://image.tmdb.org/t/p/w200/btbNDmEKSqT0sHLBLkdHmxLNMzb.jpg' },
    ],
    business: [
      { title: 'Baahubali 2: The Conclusion', subtitle: '2017', description: 'Power, politics and betrayal in an ancient kingdom — the ultimate story of leadership and legacy.', rating: '8.2', platforms: ['Netflix', 'Prime Video'], external_url: 'https://www.justwatch.com/in/movie/baahubali-2-the-conclusion', poster: 'https://image.tmdb.org/t/p/w200/ioUe9B1JRFCRGLJNaXHBnfThbPl.jpg' },
      { title: 'Jersey', subtitle: '2019', description: 'Against all odds, a man fights to revive his career showing that it is never too late to chase your dreams.', rating: '8.6', platforms: ['Netflix', 'Prime Video'], external_url: 'https://www.justwatch.com/in/movie/jersey-2019', poster: 'https://image.tmdb.org/t/p/w200/gOHiWAVkiCqX8UeSeVEJBrFvAiR.jpg' },
      { title: 'Jalsa', subtitle: '2008', description: 'A journalist who speaks truth to power faces consequences when he takes on a powerful politician.', rating: '7.5', platforms: ['Prime Video'], external_url: 'https://www.justwatch.com/in/movie/jalsa', poster: 'https://image.tmdb.org/t/p/w200/3oAa8mJJ97CH9AeGEY6vjAxqcvZ.jpg' },
    ],
    animation: [
      { title: 'Baahubali: The Lost Legends', subtitle: '2017', description: 'Animated adventures of the legendary warrior Baahubali set before the events of the main film.', rating: '7.2', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/baahubali-the-lost-legends', poster: 'https://image.tmdb.org/t/p/w200/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg' },
      { title: 'Hanuman', subtitle: '2005', description: 'The animated story of Hanuman and his adventures with Lord Rama as told to a young boy.', rating: '7.5', platforms: ['Prime Video'], external_url: 'https://www.justwatch.com/in/movie/hanuman-2005', poster: 'https://image.tmdb.org/t/p/w200/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg' },
      { title: 'Chhota Bheem: Kung Fu Dhamaka', subtitle: '2019', description: 'Bheem and his friends travel to China for a martial arts competition and must battle an evil force.', rating: '6.5', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/chhota-bheem-kung-fu-dhamaka', poster: 'https://image.tmdb.org/t/p/w200/kiWlADVnjhrkmQ1B5JkjZ3r814K.jpg' },
    ],
    horror: [
      { title: 'Raju Gari Gadhi 2', subtitle: '2017', description: 'A family moves into a haunted mansion and encounters the spirit of a tragic past love story.', rating: '6.8', platforms: ['Prime Video', 'Netflix'], external_url: 'https://www.justwatch.com/in/movie/raju-gari-gadhi-2', poster: 'https://image.tmdb.org/t/p/w200/wVYREutTvI2tmxr6ujrHT704wGF.jpg' },
      { title: 'Gruham', subtitle: '2017', description: 'A family moves into a new house and starts experiencing terrifying supernatural events.', rating: '7.0', platforms: ['Prime Video'], external_url: 'https://www.justwatch.com/in/movie/gruham', poster: 'https://image.tmdb.org/t/p/w200/tFXcEccSQMVl9dsvXyJpOdnDKoc.jpg' },
      { title: 'Anando Brahma', subtitle: '2017', description: 'Four drunkards are hired to spend a night in a haunted house and encounter more than they bargained for.', rating: '7.4', platforms: ['Prime Video'], external_url: 'https://www.justwatch.com/in/movie/anando-brahma', poster: 'https://image.tmdb.org/t/p/w200/4O73wJ4ukys9K1os4WFElaJNBnl.jpg' },
    ],
  },
  korean: {
    action: [
      { title: 'The Roundup', subtitle: '2022', description: 'A Korean detective travels to Vietnam to bring back a murder suspect and uncovers a larger criminal operation.', rating: '7.4', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/the-roundup', poster: 'https://image.tmdb.org/t/p/w200/qJ2tW6WMUDux911r6m7haRef0WH.jpg' },
      { title: 'The Man from Nowhere', subtitle: '2010', description: 'A quiet pawnshop keeper befriends a lonely little girl and must fight to save her from a drug trafficking ring.', rating: '7.8', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/the-man-from-nowhere', poster: 'https://image.tmdb.org/t/p/w200/hA2ple9q4qnwxp3hKVNhroipsir.jpg' },
      { title: 'Assassination', subtitle: '2015', description: 'During the Japanese colonial period, a group of independence fighters plan to assassinate a Japanese commander.', rating: '7.4', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/assassination-2015', poster: 'https://image.tmdb.org/t/p/w200/fZPSd91qGqdqEqHwzZkMiBYfROR.jpg' },
    ],
    drama: [
      { title: 'Parasite', subtitle: '2019', description: 'Greed and class discrimination threaten the symbiotic relationship between the wealthy Park family and the destitute Kim clan.', rating: '8.5', platforms: ['Prime Video'], external_url: 'https://www.justwatch.com/in/movie/parasite-2019', poster: 'https://image.tmdb.org/t/p/w200/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg' },
      { title: 'Oasis', subtitle: '2002', description: 'A man just released from prison falls in love with a woman with cerebral palsy in this deeply moving drama.', rating: '8.2', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/oasis', poster: 'https://image.tmdb.org/t/p/w200/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg' },
      { title: 'Poetry', subtitle: '2010', description: 'A grandmother caring for her grandson discovers a talent for poetry while trying to hide a shocking secret.', rating: '7.9', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/poetry', poster: 'https://image.tmdb.org/t/p/w200/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg' },
    ],
    thriller: [
      { title: 'Oldboy', subtitle: '2003', description: 'After being kidnapped and imprisoned for 15 years, a man is released and sets out to find his captor.', rating: '8.4', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/oldboy', poster: 'https://image.tmdb.org/t/p/w200/6yoghtyTpznpBik8EngEmJskVnS.jpg' },
      { title: 'I Saw the Devil', subtitle: '2010', description: 'A secret agent exacts revenge upon a serial killer in a twisted cat-and-mouse game.', rating: '7.8', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/i-saw-the-devil', poster: 'https://image.tmdb.org/t/p/w200/fCayJrkfRaCRCTh8GqN30f8oyQF.jpg' },
      { title: 'A Bittersweet Life', subtitle: '2005', description: 'A crime boss\'s right-hand man is betrayed and seeks revenge against his former employer.', rating: '7.8', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/a-bittersweet-life', poster: 'https://image.tmdb.org/t/p/w200/iMOGJIEFpKpNLXxAoiY1vKz0PbN.jpg' },
    ],
    horror: [
      { title: 'Train to Busan', subtitle: '2016', description: 'While a zombie virus breaks out in South Korea, passengers struggle to survive on a train to Busan.', rating: '7.6', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/train-to-busan', poster: 'https://image.tmdb.org/t/p/w200/wVYREutTvI2tmxr6ujrHT704wGF.jpg' },
      { title: 'The Wailing', subtitle: '2016', description: 'A policeman investigates a series of mysterious deaths in a village after a stranger arrives.', rating: '7.9', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/the-wailing', poster: 'https://image.tmdb.org/t/p/w200/tFXcEccSQMVl9dsvXyJpOdnDKoc.jpg' },
      { title: 'A Tale of Two Sisters', subtitle: '2003', description: 'Two sisters return home after a stay in a mental institution and discover their stepmother has a dark secret.', rating: '7.4', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/a-tale-of-two-sisters', poster: 'https://image.tmdb.org/t/p/w200/4O73wJ4ukys9K1os4WFElaJNBnl.jpg' },
    ],
    romance: [
      { title: 'My Sassy Girl', subtitle: '2001', description: 'A college student meets a drunk and unruly girl on the subway and finds himself falling in love with her.', rating: '7.8', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/my-sassy-girl', poster: 'https://image.tmdb.org/t/p/w200/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg' },
      { title: 'Architecture 101', subtitle: '2012', description: 'A man reconnects with his first love from college when she hires him to design her house on Jeju Island.', rating: '7.4', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/architecture-101', poster: 'https://image.tmdb.org/t/p/w200/rNzQyW4f8B8cQeg7Dgj3n6eT5k9.jpg' },
      { title: 'A Moment to Remember', subtitle: '2004', description: 'A couple builds a life together until the wife is diagnosed with early-onset Alzheimer\'s disease.', rating: '7.9', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/a-moment-to-remember', poster: 'https://image.tmdb.org/t/p/w200/1mDw60BmHFfFyQ9SNEyiHAAAA0.jpg' },
    ],
    comedy: [
      { title: 'Extreme Job', subtitle: '2019', description: 'A narcotics team goes undercover by running a fried chicken restaurant and accidentally becomes famous for their food.', rating: '7.3', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/extreme-job', poster: 'https://image.tmdb.org/t/p/w200/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg' },
      { title: 'Miss Granny', subtitle: '2014', description: 'A 70-year-old woman wakes up in the body of her 20-year-old self and gets a second chance at life and love.', rating: '7.5', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/miss-granny', poster: 'https://image.tmdb.org/t/p/w200/onTSipZ8R3bliBdKfPtsDaxA2wT.jpg' },
      { title: 'The Outlaws', subtitle: '2017', description: 'A violent gangster from China arrives in a Korean neighbourhood and clashes with the local detective.', rating: '7.2', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/the-outlaws', poster: 'https://image.tmdb.org/t/p/w200/uluhlXubGu1VxU63boQXRFSk90z.jpg' },
    ],
    fantasy: [
      { title: 'Along with the Gods: The Two Worlds', subtitle: '2017', description: 'After a heroic death, a firefighter is escorted by three guardians through 49 days of trials in the afterlife.', rating: '7.4', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/along-with-the-gods-the-two-worlds', poster: 'https://image.tmdb.org/t/p/w200/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg' },
      { title: 'The Admiral: Roaring Currents', subtitle: '2014', description: 'Korean Admiral Yi Sun-sin faces the Japanese invasion with only 12 ships against 330.', rating: '7.0', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/the-admiral-roaring-currents', poster: 'https://image.tmdb.org/t/p/w200/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg' },
      { title: 'Rampant', subtitle: '2018', description: 'A prince returns home to find his kingdom in chaos, overrun by vicious creatures that prey on humans at night.', rating: '6.3', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/rampant', poster: 'https://image.tmdb.org/t/p/w200/uFQ79mwOFxAQauQUiDsUllPWvIz.jpg' },
    ],
    'sci-fi': [
      { title: 'Space Sweepers', subtitle: '2021', description: 'In 2092, the crew of a garbage-collecting spaceship discovers a humanoid robot that may be a weapon of mass destruction.', rating: '6.7', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/space-sweepers', poster: 'https://image.tmdb.org/t/p/w200/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg' },
      { title: 'The Host', subtitle: '2006', description: 'A monster emerges from Seoul\'s Han River and a family whose daughter is taken by the creature fights to save her.', rating: '7.0', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/the-host', poster: 'https://image.tmdb.org/t/p/w200/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg' },
      { title: 'Snowpiercer', subtitle: '2013', description: 'In a future where a failed climate experiment kills all life on Earth, survivors board the Snowpiercer train.', rating: '7.1', platforms: ['Netflix', 'Prime Video'], external_url: 'https://www.justwatch.com/in/movie/snowpiercer', poster: 'https://image.tmdb.org/t/p/w200/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg' },
    ],
    mystery: [
      { title: 'Memories of Murder', subtitle: '2003', description: 'Based on the true story of South Korea\'s first serial murders, two detectives investigate with very different methods.', rating: '8.1', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/memories-of-murder', poster: 'https://image.tmdb.org/t/p/w200/pThyQovXQrw2m0s9x82twj48Jq4.jpg' },
      { title: 'The Chaser', subtitle: '2008', description: 'A former detective turned pimp realizes one of his girls has gone missing and the client might be a serial killer.', rating: '7.9', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/the-chaser', poster: 'https://image.tmdb.org/t/p/w200/ed4X8wn6yyeUCFXFAlbCpCFxGLZ.jpg' },
      { title: 'Missing', subtitle: '2016', description: 'A woman who goes missing in the mountains and the desperate search by her sister leads to shocking discoveries.', rating: '7.0', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/missing-2016', poster: 'https://image.tmdb.org/t/p/w200/e6rUPkCMSBOCTGKGnTFcOaFofpL.jpg' },
    ],
    history: [
      { title: 'The Admiral: Roaring Currents', subtitle: '2014', description: 'The legendary Battle of Myeongnyang where Admiral Yi Sun-sin faced 330 Japanese warships with only 12 ships.', rating: '7.0', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/the-admiral-roaring-currents', poster: 'https://image.tmdb.org/t/p/w200/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg' },
      { title: 'The Age of Shadows', subtitle: '2016', description: 'A Japanese agent who was once a Korean independence fighter is tasked with infiltrating a resistance group.', rating: '7.5', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/the-age-of-shadows', poster: 'https://image.tmdb.org/t/p/w200/or1gBugydmjToAEq7OZY0owwFk.jpg' },
      { title: 'Assassination', subtitle: '2015', description: 'A group of independence fighters plan to assassinate a Japanese commander and a pro-Japanese businessman.', rating: '7.4', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/assassination-2015', poster: 'https://image.tmdb.org/t/p/w200/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg' },
    ],
    psychology: [
      { title: 'Mother', subtitle: '2009', description: 'A mother desperately works to exonerate her son when he is arrested for the murder of a young girl.', rating: '8.0', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/mother-2009', poster: 'https://image.tmdb.org/t/p/w200/1OeEqiXrFtEMHX5GjRrHK0KN6gA.jpg' },
      { title: 'A Taxi Driver', subtitle: '2017', description: 'A Seoul taxi driver unknowingly drives a German journalist to Gwangju during the 1980 uprising.', rating: '7.9', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/a-taxi-driver', poster: 'https://image.tmdb.org/t/p/w200/kve20tXygZW4zvaxOP0p7sMIScz.jpg' },
      { title: 'Burning', subtitle: '2018', description: 'A young man becomes obsessed with a mysterious man who his childhood acquaintance starts dating.', rating: '7.5', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/burning', poster: 'https://image.tmdb.org/t/p/w200/4W9oQKHgRtQVPJSKCTNEPBMRzPC.jpg' },
    ],
    technology: [
      { title: 'Space Sweepers', subtitle: '2021', description: 'A crew of space garbage collectors discover a humanoid robot in the year 2092 that could destroy humanity.', rating: '6.7', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/space-sweepers', poster: 'https://image.tmdb.org/t/p/w200/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg' },
      { title: 'Socialphobia', subtitle: '2014', description: 'Two students track down an anonymous troll online, only to find a dead body when they arrive.', rating: '6.8', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/socialphobia', poster: 'https://image.tmdb.org/t/p/w200/sPOaQCBMhGkRCHMV9oGOQaXwFYQ.jpg' },
      { title: 'Snowpiercer', subtitle: '2013', description: 'A class revolution erupts among the last survivors of humanity who live on a perpetually moving train.', rating: '7.1', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/snowpiercer', poster: 'https://image.tmdb.org/t/p/w200/btbNDmEKSqT0sHLBLkdHmxLNMzb.jpg' },
    ],
    business: [
      { title: 'Parasite', subtitle: '2019', description: 'A masterclass in class warfare — the story of two families at opposite ends of society whose lives collide.', rating: '8.5', platforms: ['Prime Video'], external_url: 'https://www.justwatch.com/in/movie/parasite-2019', poster: 'https://image.tmdb.org/t/p/w200/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg' },
      { title: 'The Man Standing Next', subtitle: '2020', description: 'The story of the 40 days leading up to the assassination of the President of South Korea in 1979.', rating: '7.3', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/the-man-standing-next', poster: 'https://image.tmdb.org/t/p/w200/gOHiWAVkiCqX8UeSeVEJBrFvAiR.jpg' },
      { title: 'Extreme Job', subtitle: '2019', description: 'Undercover cops accidentally become successful fried chicken restaurant owners in this hilarious comedy.', rating: '7.3', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/extreme-job', poster: 'https://image.tmdb.org/t/p/w200/3oAa8mJJ97CH9AeGEY6vjAxqcvZ.jpg' },
    ],
    animation: [
      { title: 'The King of Pigs', subtitle: '2011', description: 'Two men reconnect after 15 years and recall their traumatic school days in this dark animated drama.', rating: '7.0', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/the-king-of-pigs', poster: 'https://image.tmdb.org/t/p/w200/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg' },
      { title: 'Leafie, A Hen into the Wild', subtitle: '2011', description: 'A chicken escapes the farm to experience the outside world and becomes an unlikely mother to a duckling.', rating: '7.7', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/leafie-a-hen-into-the-wild', poster: 'https://image.tmdb.org/t/p/w200/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg' },
      { title: 'Seoul Station', subtitle: '2016', description: 'A prequel to Train to Busan showing the zombie outbreak beginning at Seoul Station.', rating: '6.2', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/seoul-station', poster: 'https://image.tmdb.org/t/p/w200/kiWlADVnjhrkmQ1B5JkjZ3r814K.jpg' },
    ],
  },
  japanese: {
    animation: [
      { title: 'Spirited Away', subtitle: '2001', description: 'During her family\'s move, a 10-year-old girl wanders into a world ruled by gods, witches and spirits.', rating: '8.6', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/spirited-away', poster: 'https://image.tmdb.org/t/p/w200/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg' },
      { title: 'Your Name', subtitle: '2016', description: 'Two strangers find they are mysteriously able to switch bodies and must find each other before time runs out.', rating: '8.4', platforms: ['Netflix', 'Prime Video'], external_url: 'https://www.justwatch.com/in/movie/your-name', poster: 'https://image.tmdb.org/t/p/w200/q719jXXEzOoYaps6babgKnONONX.jpg' },
      { title: 'Princess Mononoke', subtitle: '1997', description: 'A prince becomes caught in a struggle between the gods of a forest and the humans who consume its resources.', rating: '8.4', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/princess-mononoke', poster: 'https://image.tmdb.org/t/p/w200/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg' },
    ],
    fantasy: [
      { title: "Howl's Moving Castle", subtitle: '2004', description: 'A young woman is transformed into an old woman by a witch and seeks help from a wizard called Howl.', rating: '8.2', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/howls-moving-castle', poster: 'https://image.tmdb.org/t/p/w200/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg' },
      { title: 'Nausicaä of the Valley of the Wind', subtitle: '1984', description: 'A princess of a small kingdom must prevent two warring nations from unleashing an ancient destroyer in a post-apocalyptic world.', rating: '8.1', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/nausicaa-of-the-valley-of-the-wind', poster: 'https://image.tmdb.org/t/p/w200/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg' },
      { title: 'Castle in the Sky', subtitle: '1986', description: 'A young boy and girl race against pirates and the government to find a legendary floating castle.', rating: '8.0', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/castle-in-the-sky', poster: 'https://image.tmdb.org/t/p/w200/uFQ79mwOFxAQauQUiDsUllPWvIz.jpg' },
    ],
    drama: [
      { title: 'Nobody Knows', subtitle: '2004', description: 'Four children are left to fend for themselves after their mother abandons them in a Tokyo apartment.', rating: '8.1', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/nobody-knows', poster: 'https://image.tmdb.org/t/p/w200/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg' },
      { title: 'After Life', subtitle: '1998', description: 'The recently deceased must choose one memory from their lives to take with them into eternity.', rating: '7.8', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/after-life-1998', poster: 'https://image.tmdb.org/t/p/w200/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg' },
      { title: 'Shoplifters', subtitle: '2018', description: 'A family survives by petty crimes until an abandoned girl is found and questions arise about their bond.', rating: '7.9', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/shoplifters', poster: 'https://image.tmdb.org/t/p/w200/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg' },
    ],
    thriller: [
      { title: 'Battle Royale', subtitle: '2000', description: 'In the future, a class of students is taken to a deserted island and forced to fight to the death.', rating: '7.6', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/battle-royale', poster: 'https://image.tmdb.org/t/p/w200/6yoghtyTpznpBik8EngEmJskVnS.jpg' },
      { title: 'Confessions', subtitle: '2010', description: 'A teacher announces to her class that two of them killed her daughter and she plans to exact revenge.', rating: '7.8', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/confessions', poster: 'https://image.tmdb.org/t/p/w200/fCayJrkfRaCRCTh8GqN30f8oyQF.jpg' },
      { title: 'Audition', subtitle: '1999', description: 'A widower holds auditions for a fake film to find a new wife, but the woman he becomes obsessed with harbours dark secrets.', rating: '7.2', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/audition', poster: 'https://image.tmdb.org/t/p/w200/iMOGJIEFpKpNLXxAoiY1vKz0PbN.jpg' },
    ],
    horror: [
      { title: 'Ringu', subtitle: '1998', description: 'A journalist investigates a mysterious cursed videotape that causes anyone who watches it to die in seven days.', rating: '7.2', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/ringu', poster: 'https://image.tmdb.org/t/p/w200/wVYREutTvI2tmxr6ujrHT704wGF.jpg' },
      { title: 'Ju-On: The Grudge', subtitle: '2002', description: 'A series of people are affected by a supernatural curse that spreads from a house where a brutal murder occurred.', rating: '6.7', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/ju-on-the-grudge', poster: 'https://image.tmdb.org/t/p/w200/tFXcEccSQMVl9dsvXyJpOdnDKoc.jpg' },
      { title: 'Pulse', subtitle: '2001', description: 'Students discover what appears to be dead souls of people communicating through the internet.', rating: '6.8', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/pulse', poster: 'https://image.tmdb.org/t/p/w200/4O73wJ4ukys9K1os4WFElaJNBnl.jpg' },
    ],
    romance: [
      { title: 'Your Name', subtitle: '2016', description: 'Two strangers find they are mysteriously body-swapping and must find each other before time runs out.', rating: '8.4', platforms: ['Netflix', 'Prime Video'], external_url: 'https://www.justwatch.com/in/movie/your-name', poster: 'https://image.tmdb.org/t/p/w200/q719jXXEzOoYaps6babgKnONONX.jpg' },
      { title: 'Weathering with You', subtitle: '2019', description: 'A runaway boy meets an orphan girl who can manipulate the weather and must decide between love and the world.', rating: '7.5', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/weathering-with-you', poster: 'https://image.tmdb.org/t/p/w200/rNzQyW4f8B8cQeg7Dgj3n6eT5k9.jpg' },
      { title: '5 Centimeters per Second', subtitle: '2007', description: 'Three interconnected segments about a young man and his relationships with various women over many years.', rating: '7.5', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/5-centimeters-per-second', poster: 'https://image.tmdb.org/t/p/w200/1mDw60BmHFfFyQ9SNEyiHAAAA0.jpg' },
    ],
    action: [
      { title: 'Rurouni Kenshin', subtitle: '2012', description: 'A legendary assassin from the Meiji Revolution must face enemies from his past while living as a wanderer.', rating: '7.6', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/rurouni-kenshin', poster: 'https://image.tmdb.org/t/p/w200/qJ2tW6WMUDux911r6m7haRef0WH.jpg' },
      { title: 'Blade of the Immortal', subtitle: '2017', description: 'An immortal samurai fights to protect a young girl who seeks revenge against the killers of her parents.', rating: '6.8', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/blade-of-the-immortal', poster: 'https://image.tmdb.org/t/p/w200/hA2ple9q4qnwxp3hKVNhroipsir.jpg' },
      { title: 'Sword of the Stranger', subtitle: '2007', description: 'A wandering samurai with a dark past protects a young boy being hunted by Ming dynasty warriors.', rating: '8.1', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/sword-of-the-stranger', poster: 'https://image.tmdb.org/t/p/w200/fZPSd91qGqdqEqHwzZkMiBYfROR.jpg' },
    ],
    comedy: [
      { title: 'Kamome Diner', subtitle: '2006', description: 'A Japanese woman opens a small diner in Finland and gradually finds community with locals and fellow Japanese.', rating: '7.2', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/kamome-diner', poster: 'https://image.tmdb.org/t/p/w200/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg' },
      { title: 'Tampopo', subtitle: '1985', description: 'Two truck drivers help a woman perfect her ramen recipe in this quirky comedy about food and love.', rating: '7.9', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/tampopo', poster: 'https://image.tmdb.org/t/p/w200/uluhlXubGu1VxU63boQXRFSk90z.jpg' },
      { title: 'The Great Yokai War', subtitle: '2005', description: 'A young boy becomes the chosen hero of Japan\'s supernatural creatures in this fun fantasy adventure.', rating: '6.7', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/the-great-yokai-war', poster: 'https://image.tmdb.org/t/p/w200/onTSipZ8R3bliBdKfPtsDaxA2wT.jpg' },
    ],
    mystery: [
      { title: 'Detective Conan: Zero the Enforcer', subtitle: '2018', description: 'Conan investigates a bombing at a law enforcement exhibition linked to a shadowy government agent.', rating: '7.3', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/detective-conan-zero-the-enforcer', poster: 'https://image.tmdb.org/t/p/w200/pThyQovXQrw2m0s9x82twj48Jq4.jpg' },
      { title: 'Confessions', subtitle: '2010', description: 'A grieving teacher announces her plans for revenge against the students who killed her daughter.', rating: '7.8', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/confessions', poster: 'https://image.tmdb.org/t/p/w200/ed4X8wn6yyeUCFXFAlbCpCFxGLZ.jpg' },
      { title: 'Cure', subtitle: '1997', description: 'A detective investigates a series of murders in which the suspects all claim to have no memory of the killings.', rating: '7.6', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/cure-1997', poster: 'https://image.tmdb.org/t/p/w200/e6rUPkCMSBOCTGKGnTFcOaFofpL.jpg' },
    ],
    history: [
      { title: 'The Last Samurai', subtitle: '2003', description: 'An American military advisor embraces the samurai culture he was hired to destroy after being captured in 19th-century Japan.', rating: '7.8', platforms: ['Netflix', 'Prime Video'], external_url: 'https://www.justwatch.com/in/movie/the-last-samurai', poster: 'https://image.tmdb.org/t/p/w200/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg' },
      { title: 'Grave of the Fireflies', subtitle: '1988', description: 'A young boy and his sister struggle to survive in Japan during World War II after their mother is killed.', rating: '8.5', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/grave-of-the-fireflies', poster: 'https://image.tmdb.org/t/p/w200/or1gBugydmjToAEq7OZY0owwFk.jpg' },
      { title: 'Ran', subtitle: '1985', description: 'An aging warlord tries to retire and divide his kingdom between his three sons, causing civil war.', rating: '8.2', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/ran', poster: 'https://image.tmdb.org/t/p/w200/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg' },
    ],
    psychology: [
      { title: 'Perfect Blue', subtitle: '1997', description: 'A pop idol retires to become an actress, but is haunted by a crazed fan and begins to lose her grip on reality.', rating: '8.0', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/perfect-blue', poster: 'https://image.tmdb.org/t/p/w200/1OeEqiXrFtEMHX5GjRrHK0KN6gA.jpg' },
      { title: 'Paprika', subtitle: '2006', description: 'A research psychologist uses a machine to enter patients\' dreams and must stop a terrorist using the same technology.', rating: '7.7', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/paprika', poster: 'https://image.tmdb.org/t/p/w200/kve20tXygZW4zvaxOP0p7sMIScz.jpg' },
      { title: 'Tokyo Story', subtitle: '1953', description: 'An aging couple visits their grown children in Tokyo and discovers they are too busy to spend time with them.', rating: '8.2', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/tokyo-story', poster: 'https://image.tmdb.org/t/p/w200/4W9oQKHgRtQVPJSKCTNEPBMRzPC.jpg' },
    ],
    technology: [
      { title: 'Ghost in the Shell', subtitle: '1995', description: 'A cyborg policewoman hunts a mysterious hacker known as the Puppet Master in a cyberpunk future.', rating: '8.0', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/ghost-in-the-shell', poster: 'https://image.tmdb.org/t/p/w200/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg' },
      { title: 'Paprika', subtitle: '2006', description: 'Scientists develop a device to enter people\'s dreams — until it falls into the wrong hands.', rating: '7.7', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/paprika', poster: 'https://image.tmdb.org/t/p/w200/sPOaQCBMhGkRCHMV9oGOQaXwFYQ.jpg' },
      { title: 'Akira', subtitle: '1988', description: 'A secret military project endangers Neo-Tokyo when it turns a biker gang member into a rampaging psychic.', rating: '8.0', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/akira', poster: 'https://image.tmdb.org/t/p/w200/btbNDmEKSqT0sHLBLkdHmxLNMzb.jpg' },
    ],
    business: [
      { title: 'Jiro Dreams of Sushi', subtitle: '2011', description: 'An 85-year-old sushi master who has dedicated his entire life to perfecting his craft in a tiny Tokyo restaurant.', rating: '7.9', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/jiro-dreams-of-sushi', poster: 'https://image.tmdb.org/t/p/w200/pWHf4khOloNVfCxscsXFj3jj6gP.jpg' },
      { title: 'Tampopo', subtitle: '1985', description: 'A truck driver helps a ramen restaurant owner perfect her craft, exploring Japanese obsession with food and excellence.', rating: '7.9', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/tampopo', poster: 'https://image.tmdb.org/t/p/w200/gOHiWAVkiCqX8UeSeVEJBrFvAiR.jpg' },
      { title: 'The Story of Yonosuke', subtitle: '2013', description: 'A cheerful and carefree man has a profound impact on the people around him in 1980s Tokyo.', rating: '7.5', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/the-story-of-yonosuke', poster: 'https://image.tmdb.org/t/p/w200/3oAa8mJJ97CH9AeGEY6vjAxqcvZ.jpg' },
    ],
    'sci-fi': [
      { title: 'Akira', subtitle: '1988', description: 'A secret military project turns a biker gang member into a rampaging psychic, threatening Neo-Tokyo.', rating: '8.0', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/akira', poster: 'https://image.tmdb.org/t/p/w200/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg' },
      { title: 'Ghost in the Shell', subtitle: '1995', description: 'A cyborg policewoman and her partner hunt a mysterious and powerful hacker called the Puppet Master.', rating: '8.0', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/ghost-in-the-shell', poster: 'https://image.tmdb.org/t/p/w200/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg' },
      { title: 'Evangelion: 1.0 You Are (Not) Alone', subtitle: '2007', description: 'Teenager Shinji pilots a giant biomechanical robot to defend Earth from mysterious beings called Angels.', rating: '7.8', platforms: ['Netflix'], external_url: 'https://www.justwatch.com/in/movie/evangelion-10-you-are-not-alone', poster: 'https://image.tmdb.org/t/p/w200/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg' },
    ],
  },
}

const BOOKS = {
  fantasy: [
    { title: 'The Name of the Wind', subtitle: 'Patrick Rothfuss · 2007', description: 'The riveting narrative of Kvothe, a magically gifted young man who grows to be the most notorious wizard his world has ever seen.', rating: '4.5', links: { google: 'https://books.google.com/books?q=the+name+of+the+wind', amazon: 'https://www.amazon.in/s?k=the+name+of+the+wind', goodreads: 'https://www.goodreads.com/book/show/186074' } },
    { title: 'The Way of Kings', subtitle: 'Brandon Sanderson · 2010', description: 'Epic fantasy set in a world of storms, ancient magic, and a war for survival against forces of darkness.', rating: '4.6', links: { google: 'https://books.google.com/books?q=the+way+of+kings', amazon: 'https://www.amazon.in/s?k=the+way+of+kings', goodreads: 'https://www.goodreads.com/book/show/7235533' } },
    { title: 'A Wizard of Earthsea', subtitle: 'Ursula K. Le Guin · 1968', description: 'A young boy becomes the greatest sorcerer in all of Earthsea through his reckless use of magical powers.', rating: '4.3', links: { google: 'https://books.google.com/books?q=a+wizard+of+earthsea', amazon: 'https://www.amazon.in/s?k=a+wizard+of+earthsea', goodreads: 'https://www.goodreads.com/book/show/13642' } },
  ],
  'sci-fi': [
    { title: 'Dune', subtitle: 'Frank Herbert · 1965', description: 'A mythic and epic tale set on the desert planet Arrakis, the only source of the most precious substance in the universe.', rating: '4.7', links: { google: 'https://books.google.com/books?q=dune+frank+herbert', amazon: 'https://www.amazon.in/s?k=dune', goodreads: 'https://www.goodreads.com/book/show/44767458' } },
    { title: 'Neuromancer', subtitle: 'William Gibson · 1984', description: 'A washed-up computer hacker is hired by a mysterious employer to pull off the ultimate hack in cyberspace.', rating: '4.2', links: { google: 'https://books.google.com/books?q=neuromancer', amazon: 'https://www.amazon.in/s?k=neuromancer', goodreads: 'https://www.goodreads.com/book/show/22328' } },
    { title: "The Hitchhiker's Guide to the Galaxy", subtitle: 'Douglas Adams · 1979', description: 'Seconds before Earth is demolished for a hyperspace bypass, Arthur Dent is whisked off into the universe.', rating: '4.5', links: { google: 'https://books.google.com/books?q=hitchhikers+guide', amazon: 'https://www.amazon.in/s?k=hitchhikers+guide+to+the+galaxy', goodreads: 'https://www.goodreads.com/book/show/11' } },
  ],
  action: [
    { title: 'No Country for Old Men', subtitle: 'Cormac McCarthy · 2005', description: 'A hunter stumbles upon a drug deal gone wrong and takes the money, setting off a violent chase across Texas.', rating: '4.2', links: { google: 'https://books.google.com/books?q=no+country+for+old+men', amazon: 'https://www.amazon.in/s?k=no+country+for+old+men', goodreads: 'https://www.goodreads.com/book/show/12497' } },
    { title: 'The Bourne Identity', subtitle: 'Robert Ludlum · 1980', description: 'A man found floating in the sea with no memory tries to discover who he is and uncovers a deadly secret.', rating: '4.1', links: { google: 'https://books.google.com/books?q=the+bourne+identity', amazon: 'https://www.amazon.in/s?k=the+bourne+identity', goodreads: 'https://www.goodreads.com/book/show/7960' } },
    { title: 'Casino Royale', subtitle: 'Ian Fleming · 1953', description: "James Bond's first mission requires him to defeat a Soviet operative in a high-stakes game of baccarat.", rating: '3.9', links: { google: 'https://books.google.com/books?q=casino+royale+ian+fleming', amazon: 'https://www.amazon.in/s?k=casino+royale', goodreads: 'https://www.goodreads.com/book/show/3758' } },
  ],
  drama: [
    { title: 'To Kill a Mockingbird', subtitle: 'Harper Lee · 1960', description: 'A powerful story of racial injustice and childhood innocence set in the American South during the 1930s.', rating: '4.6', links: { google: 'https://books.google.com/books?q=to+kill+a+mockingbird', amazon: 'https://www.amazon.in/s?k=to+kill+a+mockingbird', goodreads: 'https://www.goodreads.com/book/show/2657' } },
    { title: 'The Kite Runner', subtitle: 'Khaled Hosseini · 2003', description: 'A story of friendship, betrayal and the price of loyalty set against the backdrop of Afghanistan.', rating: '4.4', links: { google: 'https://books.google.com/books?q=the+kite+runner', amazon: 'https://www.amazon.in/s?k=the+kite+runner', goodreads: 'https://www.goodreads.com/book/show/77203' } },
    { title: 'A Little Life', subtitle: 'Hanya Yanagihara · 2015', description: 'Four college classmates struggle through adulthood in New York in this devastating portrait of trauma and friendship.', rating: '4.4', links: { google: 'https://books.google.com/books?q=a+little+life', amazon: 'https://www.amazon.in/s?k=a+little+life', goodreads: 'https://www.goodreads.com/book/show/22822858' } },
  ],
  thriller: [
    { title: 'The Silent Patient', subtitle: 'Alex Michaelides · 2019', description: 'A famous painter shoots her husband and never speaks another word. A psychotherapist is obsessed with uncovering her motive.', rating: '4.2', links: { google: 'https://books.google.com/books?q=the+silent+patient', amazon: 'https://www.amazon.in/s?k=the+silent+patient', goodreads: 'https://www.goodreads.com/book/show/40097951' } },
    { title: 'Gone Girl', subtitle: 'Gillian Flynn · 2012', description: "On their fifth anniversary, Nick Dunne's wife Amy disappears and dark secrets about their marriage emerge.", rating: '4.0', links: { google: 'https://books.google.com/books?q=gone+girl', amazon: 'https://www.amazon.in/s?k=gone+girl', goodreads: 'https://www.goodreads.com/book/show/19288043' } },
    { title: 'The Girl on the Train', subtitle: 'Paula Hawkins · 2015', description: 'A psychological thriller told from three perspectives whose lives become intertwined in a missing persons case.', rating: '3.9', links: { google: 'https://books.google.com/books?q=the+girl+on+the+train', amazon: 'https://www.amazon.in/s?k=the+girl+on+the+train', goodreads: 'https://www.goodreads.com/book/show/22557272' } },
  ],
  horror: [
    { title: 'It', subtitle: 'Stephen King · 1986', description: 'A shape-shifting monster that exploits the fears of its victims terrorizes a small town in Maine.', rating: '4.3', links: { google: 'https://books.google.com/books?q=it+stephen+king', amazon: 'https://www.amazon.in/s?k=it+stephen+king', goodreads: 'https://www.goodreads.com/book/show/830502' } },
    { title: 'The Shining', subtitle: 'Stephen King · 1977', description: 'A family heads to an isolated hotel where a sinister presence influences the father into violence.', rating: '4.3', links: { google: 'https://books.google.com/books?q=the+shining', amazon: 'https://www.amazon.in/s?k=the+shining', goodreads: 'https://www.goodreads.com/book/show/11588' } },
    { title: 'House of Leaves', subtitle: 'Mark Z. Danielewski · 2000', description: "A blind man's manuscript about a house that is bigger on the inside than the outside.", rating: '4.1', links: { google: 'https://books.google.com/books?q=house+of+leaves', amazon: 'https://www.amazon.in/s?k=house+of+leaves', goodreads: 'https://www.goodreads.com/book/show/24800' } },
  ],
  romance: [
    { title: 'Pride and Prejudice', subtitle: 'Jane Austen · 1813', description: 'The story of Elizabeth Bennet as she deals with issues of manners, upbringing, morality and marriage in Regency England.', rating: '4.5', links: { google: 'https://books.google.com/books?q=pride+and+prejudice', amazon: 'https://www.amazon.in/s?k=pride+and+prejudice', goodreads: 'https://www.goodreads.com/book/show/1885' } },
    { title: 'Outlander', subtitle: 'Diana Gabaldon · 1991', description: 'A WWII combat nurse is sent back in time to 18th-century Scotland, where she falls in love with a warrior.', rating: '4.3', links: { google: 'https://books.google.com/books?q=outlander+diana+gabaldon', amazon: 'https://www.amazon.in/s?k=outlander', goodreads: 'https://www.goodreads.com/book/show/10964' } },
    { title: 'The Fault in Our Stars', subtitle: 'John Green · 2012', description: 'Two teenagers meet in a cancer support group and fall in love while confronting the challenges of their illness.', rating: '4.2', links: { google: 'https://books.google.com/books?q=the+fault+in+our+stars', amazon: 'https://www.amazon.in/s?k=the+fault+in+our+stars', goodreads: 'https://www.goodreads.com/book/show/11870085' } },
  ],
  mystery: [
    { title: 'The Da Vinci Code', subtitle: 'Dan Brown · 2003', description: 'Harvard symbologist Robert Langdon uncovers a secret society while investigating a murder in the Louvre.', rating: '3.7', links: { google: 'https://books.google.com/books?q=da+vinci+code', amazon: 'https://www.amazon.in/s?k=da+vinci+code', goodreads: 'https://www.goodreads.com/book/show/968' } },
    { title: 'Big Little Lies', subtitle: 'Liane Moriarty · 2014', description: "Three women's lives unravel to the point of murder in this darkly comedic tale of friendship and secrets.", rating: '4.2', links: { google: 'https://books.google.com/books?q=big+little+lies', amazon: 'https://www.amazon.in/s?k=big+little+lies', goodreads: 'https://www.goodreads.com/book/show/19486412' } },
    { title: 'In the Woods', subtitle: 'Tana French · 2007', description: 'Dublin Murder Squad detective Rob Ryan investigates a case that echoes a childhood trauma he has tried to forget.', rating: '4.0', links: { google: 'https://books.google.com/books?q=in+the+woods+tana+french', amazon: 'https://www.amazon.in/s?k=in+the+woods+tana+french', goodreads: 'https://www.goodreads.com/book/show/843978' } },
  ],
  history: [
    { title: 'Sapiens', subtitle: 'Yuval Noah Harari · 2011', description: 'A brief history of humankind from the Stone Age to the present, exploring how Homo sapiens came to dominate the world.', rating: '4.4', links: { google: 'https://books.google.com/books?q=sapiens', amazon: 'https://www.amazon.in/s?k=sapiens', goodreads: 'https://www.goodreads.com/book/show/23692271' } },
    { title: 'The Diary of a Young Girl', subtitle: 'Anne Frank · 1947', description: 'The diary of a Jewish teenager hiding during the Nazi occupation of the Netherlands during World War II.', rating: '4.5', links: { google: 'https://books.google.com/books?q=diary+of+a+young+girl', amazon: 'https://www.amazon.in/s?k=diary+of+a+young+girl', goodreads: 'https://www.goodreads.com/book/show/48855' } },
    { title: 'The Guns of August', subtitle: 'Barbara Tuchman · 1962', description: 'A detailed account of the first month of World War I and the events leading up to the conflict.', rating: '4.3', links: { google: 'https://books.google.com/books?q=the+guns+of+august', amazon: 'https://www.amazon.in/s?k=the+guns+of+august', goodreads: 'https://www.goodreads.com/book/show/11366' } },
  ],
  psychology: [
    { title: 'Thinking, Fast and Slow', subtitle: 'Daniel Kahneman · 2011', description: 'A tour of the mind explaining the two systems that drive how we think and the biases that influence our decisions.', rating: '4.2', links: { google: 'https://books.google.com/books?q=thinking+fast+and+slow', amazon: 'https://www.amazon.in/s?k=thinking+fast+and+slow', goodreads: 'https://www.goodreads.com/book/show/11468377' } },
    { title: "Man's Search for Meaning", subtitle: 'Viktor Frankl · 1946', description: 'A Holocaust survivor describes finding meaning in all forms of existence, even the most suffering ones.', rating: '4.4', links: { google: 'https://books.google.com/books?q=mans+search+for+meaning', amazon: 'https://www.amazon.in/s?k=mans+search+for+meaning', goodreads: 'https://www.goodreads.com/book/show/4069' } },
    { title: 'The Body Keeps the Score', subtitle: 'Bessel van der Kolk · 2014', description: 'How trauma reshapes body and brain and what innovative treatments can help sufferers reclaim their lives.', rating: '4.4', links: { google: 'https://books.google.com/books?q=the+body+keeps+the+score', amazon: 'https://www.amazon.in/s?k=the+body+keeps+the+score', goodreads: 'https://www.goodreads.com/book/show/18693771' } },
  ],
  technology: [
    { title: 'Zero to One', subtitle: 'Peter Thiel · 2014', description: "Notes on startups and how to build the future from one of Silicon Valley's most successful investors.", rating: '4.2', links: { google: 'https://books.google.com/books?q=zero+to+one', amazon: 'https://www.amazon.in/s?k=zero+to+one', goodreads: 'https://www.goodreads.com/book/show/18050143' } },
    { title: 'The Innovators', subtitle: 'Walter Isaacson · 2014', description: 'The story of the people who created the computer and the internet.', rating: '4.2', links: { google: 'https://books.google.com/books?q=the+innovators+isaacson', amazon: 'https://www.amazon.in/s?k=the+innovators', goodreads: 'https://www.goodreads.com/book/show/21856367' } },
    { title: 'Clean Code', subtitle: 'Robert C. Martin · 2008', description: 'A handbook of agile software craftsmanship that helps programmers write better, cleaner code.', rating: '4.3', links: { google: 'https://books.google.com/books?q=clean+code', amazon: 'https://www.amazon.in/s?k=clean+code', goodreads: 'https://www.goodreads.com/book/show/3735293' } },
  ],
  business: [
    { title: 'The Lean Startup', subtitle: 'Eric Ries · 2011', description: "How today's entrepreneurs use continuous innovation to create radically successful businesses.", rating: '4.1', links: { google: 'https://books.google.com/books?q=the+lean+startup', amazon: 'https://www.amazon.in/s?k=the+lean+startup', goodreads: 'https://www.goodreads.com/book/show/10127019' } },
    { title: 'Good to Great', subtitle: 'Jim Collins · 2001', description: "Why some companies make the leap to greatness and others don't, based on a 5-year research project.", rating: '4.1', links: { google: 'https://books.google.com/books?q=good+to+great', amazon: 'https://www.amazon.in/s?k=good+to+great', goodreads: 'https://www.goodreads.com/book/show/76865' } },
    { title: 'The Hard Thing About Hard Things', subtitle: 'Ben Horowitz · 2014', description: 'Building a business when there are no easy answers from a seasoned entrepreneur and investor.', rating: '4.2', links: { google: 'https://books.google.com/books?q=the+hard+thing+about+hard+things', amazon: 'https://www.amazon.in/s?k=the+hard+thing+about+hard+things', goodreads: 'https://www.goodreads.com/book/show/18176747' } },
  ],
  comedy: [
    { title: 'Good Omens', subtitle: 'Terry Pratchett and Neil Gaiman · 1990', description: 'An angel and a demon work together to prevent the apocalypse in this hilarious and touching novel.', rating: '4.4', links: { google: 'https://books.google.com/books?q=good+omens', amazon: 'https://www.amazon.in/s?k=good+omens', goodreads: 'https://www.goodreads.com/book/show/12067' } },
    { title: 'Three Men in a Boat', subtitle: 'Jerome K. Jerome · 1889', description: 'A comic tale of three friends and a dog on a boat trip along the Thames, filled with humorous mishaps.', rating: '4.1', links: { google: 'https://books.google.com/books?q=three+men+in+a+boat', amazon: 'https://www.amazon.in/s?k=three+men+in+a+boat', goodreads: 'https://www.goodreads.com/book/show/4921' } },
    { title: 'Catch-22', subtitle: 'Joseph Heller · 1961', description: 'A satirical novel about a WWII bombardier trying to get grounded from dangerous missions.', rating: '4.1', links: { google: 'https://books.google.com/books?q=catch+22', amazon: 'https://www.amazon.in/s?k=catch+22', goodreads: 'https://www.goodreads.com/book/show/168668' } },
  ],
  animation: [
    { title: 'The Complete Persepolis', subtitle: 'Marjane Satrapi · 2000', description: 'A graphic memoir about growing up in Iran during the Islamic Revolution.', rating: '4.4', links: { google: 'https://books.google.com/books?q=persepolis', amazon: 'https://www.amazon.in/s?k=persepolis', goodreads: 'https://www.goodreads.com/book/show/9516' } },
    { title: 'Maus', subtitle: 'Art Spiegelman · 1991', description: 'A Holocaust survivor tells his story with Jews as mice and Nazis as cats in this Pulitzer Prize-winning graphic novel.', rating: '4.5', links: { google: 'https://books.google.com/books?q=maus', amazon: 'https://www.amazon.in/s?k=maus+spiegelman', goodreads: 'https://www.goodreads.com/book/show/15195' } },
    { title: 'My Neighbor Totoro', subtitle: 'Hayao Miyazaki · 1988', description: 'Two young girls encounter friendly forest spirits near their new country home in this beloved Ghibli classic.', rating: '4.5', links: { google: 'https://books.google.com/books?q=my+neighbor+totoro', amazon: 'https://www.amazon.in/s?k=my+neighbor+totoro', goodreads: 'https://www.goodreads.com/book/show/93345' } },
  ],
}

const PODCASTS = {
  fantasy: [
    { title: 'Tolkien Professor', subtitle: 'Corey Olsen · YouTube', desc: 'Deep academic dives into Tolkien and fantasy literature.', url: 'https://www.youtube.com/@TolkienProfessor' },
    { title: 'Hello Future Me', subtitle: 'Tim Hickson · YouTube', desc: 'Worldbuilding and storytelling for fantasy writers and fans.', url: 'https://www.youtube.com/@HelloFutureMe' },
    { title: 'Mythpodcast', subtitle: 'Various · YouTube', desc: 'Exploring myths, legends and fantasy worlds in depth.', url: 'https://www.youtube.com/@mythpodcast' },
  ],
  'sci-fi': [
    { title: 'StarTalk Radio', subtitle: 'Neil deGrasse Tyson · YouTube', desc: 'Science meets pop culture with the universe as your playground.', url: 'https://www.youtube.com/@StarTalk' },
    { title: 'Lex Fridman Podcast', subtitle: 'Lex Fridman · YouTube', desc: "AI, science and technology with the world's top minds.", url: 'https://www.youtube.com/@lexfridman' },
    { title: 'Isaac Arthur', subtitle: 'Isaac Arthur · YouTube', desc: 'Futurism and science fiction concepts explained in stunning detail.', url: 'https://www.youtube.com/@isaacarthur' },
  ],
  action: [
    { title: 'The Tim Ferriss Show', subtitle: 'Tim Ferriss · YouTube', desc: 'World-class performers share their habits and mental models.', url: 'https://www.youtube.com/@timferriss' },
    { title: 'MMA Fighting', subtitle: 'Various · YouTube', desc: 'News, analysis and interviews from the world of MMA.', url: 'https://www.youtube.com/@MMAFighting' },
    { title: 'Lex Fridman Podcast', subtitle: 'Lex Fridman · YouTube', desc: 'Long-form conversations with brilliant minds.', url: 'https://www.youtube.com/@lexfridman' },
  ],
  drama: [
    { title: 'Armchair Expert', subtitle: 'Dax Shepard · YouTube', desc: 'Dax Shepard talks to experts about the messiness of being human.', url: 'https://www.youtube.com/@armchairexpertpod' },
    { title: 'Hidden Brain', subtitle: 'Shankar Vedantam · YouTube', desc: 'Science exploring the unconscious patterns that drive human behaviour.', url: 'https://www.youtube.com/@hiddenbrain' },
    { title: 'The Tim Ferriss Show', subtitle: 'Tim Ferriss · YouTube', desc: 'World-class performers share their habits and mental models.', url: 'https://www.youtube.com/@timferriss' },
  ],
  thriller: [
    { title: 'Crime Junkie', subtitle: 'Ashley Flowers · YouTube', desc: 'A weekly podcast dedicated to giving you your true crime fix.', url: 'https://www.youtube.com/@crimejunkiepodcast' },
    { title: 'Hidden Brain', subtitle: 'Shankar Vedantam · YouTube', desc: 'Science exploring the unconscious patterns that drive human behaviour.', url: 'https://www.youtube.com/@hiddenbrain' },
    { title: 'My Favorite Murder', subtitle: 'Karen Kilgariff · YouTube', desc: 'Two comedians discuss their favorite true crime cases.', url: 'https://www.youtube.com/@myfavoritemurder' },
  ],
  horror: [
    { title: 'Dead Meat', subtitle: 'James A. Janisse · YouTube', desc: 'Kill counts and reviews of your favorite horror films.', url: 'https://www.youtube.com/@deadmeat' },
    { title: 'Horror Geek Life', subtitle: 'Various · YouTube', desc: 'News, reviews and discussions about all things horror.', url: 'https://www.youtube.com/@HorrorGeekLife' },
    { title: 'Crime Junkie', subtitle: 'Ashley Flowers · YouTube', desc: 'A weekly podcast dedicated to giving you your true crime fix.', url: 'https://www.youtube.com/@crimejunkiepodcast' },
  ],
  romance: [
    { title: 'Hidden Brain', subtitle: 'Shankar Vedantam · YouTube', desc: 'Science exploring love, attraction and human relationships.', url: 'https://www.youtube.com/@hiddenbrain' },
    { title: 'Armchair Expert', subtitle: 'Dax Shepard · YouTube', desc: 'Honest conversations about love, life and relationships.', url: 'https://www.youtube.com/@armchairexpertpod' },
    { title: 'The Tim Ferriss Show', subtitle: 'Tim Ferriss · YouTube', desc: 'World-class performers share their philosophy on life.', url: 'https://www.youtube.com/@timferriss' },
  ],
  mystery: [
    { title: 'Crime Junkie', subtitle: 'Ashley Flowers · YouTube', desc: 'A weekly podcast dedicated to giving you your true crime fix.', url: 'https://www.youtube.com/@crimejunkiepodcast' },
    { title: 'My Favorite Murder', subtitle: 'Karen Kilgariff · YouTube', desc: 'Two comedians discuss their favorite true crime cases.', url: 'https://www.youtube.com/@myfavoritemurder' },
    { title: 'Unsolved Mysteries', subtitle: 'Various · YouTube', desc: 'Deep dives into the most baffling unsolved cases.', url: 'https://www.youtube.com/@UnsolvedMysteries' },
  ],
  history: [
    { title: 'Hardcore History', subtitle: 'Dan Carlin · YouTube', desc: 'Epic storytelling about the most dramatic moments in history.', url: 'https://www.youtube.com/@dancarlin' },
    { title: 'Revolutions', subtitle: 'Mike Duncan · YouTube', desc: 'A detailed history of the great political revolutions.', url: 'https://www.youtube.com/@revolutionspodcast' },
    { title: 'The History of Rome', subtitle: 'Mike Duncan · YouTube', desc: 'The complete history of Rome from founding to fall.', url: 'https://www.youtube.com/@thehistoryofrome' },
  ],
  psychology: [
    { title: 'Huberman Lab', subtitle: 'Andrew Huberman · YouTube', desc: 'Science-based tools for health, mind and performance.', url: 'https://www.youtube.com/@hubermanlab' },
    { title: 'Hidden Brain', subtitle: 'Shankar Vedantam · YouTube', desc: 'Science exploring the unconscious patterns that drive human behaviour.', url: 'https://www.youtube.com/@hiddenbrain' },
    { title: 'The Tim Ferriss Show', subtitle: 'Tim Ferriss · YouTube', desc: 'World-class performers share their mental models.', url: 'https://www.youtube.com/@timferriss' },
  ],
  technology: [
    { title: 'Lex Fridman Podcast', subtitle: 'Lex Fridman · YouTube', desc: "AI, science and technology with the world's top minds.", url: 'https://www.youtube.com/@lexfridman' },
    { title: 'Fireship', subtitle: 'Jeff Delaney · YouTube', desc: 'High-intensity code tutorials and tech news in record time.', url: 'https://www.youtube.com/@Fireship' },
    { title: 'Theo t3.gg', subtitle: 'Theo · YouTube', desc: 'Web development and the tech industry explained.', url: 'https://www.youtube.com/@t3dotgg' },
  ],
  business: [
    { title: 'How I Built This', subtitle: 'Guy Raz · YouTube', desc: 'Stories behind the most successful companies in the world.', url: 'https://www.youtube.com/@howibuiltthis' },
    { title: 'My First Million', subtitle: 'Sam Parr and Shaan Puri · YouTube', desc: 'Brainstorming business ideas that work today.', url: 'https://www.youtube.com/@MyFirstMillionPod' },
    { title: 'The Knowledge Project', subtitle: 'Shane Parrish · YouTube', desc: 'Mastering what other people have already figured out.', url: 'https://www.youtube.com/@ShaneAParrish' },
  ],
  comedy: [
    { title: 'The Joe Rogan Experience', subtitle: 'Joe Rogan · YouTube', desc: 'Long-form conversations with comedians, athletes and intellectuals.', url: 'https://www.youtube.com/@joerogan' },
    { title: "Conan O'Brien Needs a Friend", subtitle: "Conan O'Brien · YouTube", desc: "Conan O'Brien searches for his perfect friend.", url: 'https://www.youtube.com/@ConanOBrien' },
    { title: 'SmoshCast', subtitle: 'Smosh · YouTube', desc: 'Fun and funny conversations with the Smosh crew.', url: 'https://www.youtube.com/@smosh' },
  ],
  animation: [
    { title: 'Corridor Crew', subtitle: 'Various · YouTube', desc: 'VFX artists react to and break down animation and film effects.', url: 'https://www.youtube.com/@CorridorCrew' },
    { title: 'Nerdwriter1', subtitle: 'Evan Puschak · YouTube', desc: 'Video essays about art, film and animation.', url: 'https://www.youtube.com/@Nerdwriter1' },
    { title: 'Every Frame a Painting', subtitle: 'Various · YouTube', desc: 'Video essays on film and animation technique.', url: 'https://www.youtube.com/@everyframeapainting' },
  ],
}

export async function POST(req) {
  try {
    const body = await req.json()
    const genre = (body.query || 'drama').toLowerCase().trim()
    const industryKey = (body.industry || 'hollywood').toLowerCase().trim()

    const industryData = STATIC[industryKey] || STATIC.hollywood
    const movieList = industryData[genre] || industryData.drama || industryData.action

    const movies = movieList.map(function(m) {
      return {
        title: m.title, subtitle: m.subtitle, description: m.description,
        tags: ['Movie'], rating: m.rating,
        match: Math.floor(78 + Math.random() * 20),
        platforms: m.platforms, external_url: m.external_url,
        poster: m.poster, top_pick: false,
      }
    })

    const bookList = BOOKS[genre] || BOOKS.drama
    const books = bookList.map(function(b) {
      return {
        title: b.title, subtitle: b.subtitle, description: b.description,
        tags: ['Book'], rating: b.rating,
        match: Math.floor(78 + Math.random() * 20),
        platforms: ['Google Books', 'Amazon India', 'Goodreads'],
        external_url: b.links.google, links: b.links,
        poster: null, top_pick: false,
      }
    })

    const podcastList = PODCASTS[genre] || PODCASTS.drama
    const podcasts = podcastList.map(function(p) {
      return {
        title: p.title, subtitle: p.subtitle, description: p.desc,
        tags: [genre, 'Podcast'], rating: (4.2 + Math.random() * 0.7).toFixed(1),
        match: Math.floor(78 + Math.random() * 20),
        platforms: ['YouTube'], external_url: p.url, top_pick: false,
      }
    })

    return Response.json({ success: true, results: { movies: movies, books: books, podcasts: podcasts, documentaries: [] } })
  } catch (err) {
    return Response.json({ success: false, error: err.message }, { status: 500 })
  }
}