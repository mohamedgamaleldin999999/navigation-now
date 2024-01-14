const audiobook = 'AUDIOBOOK:';
const speaker1 = 'Tom';
const speaker2 = 'Asmaa';
const speaker4 = 'Donia';
const narrator = 'Narrator';


export const lesson001 = {
  chapter: 'Meeting and greeting',
  title: 'Hello',
  sections: [
    {
      title: 'Introduction',
      slides: [
        {
          imgURl: '/modules/lessons/lesson-001/images/001.png',
          title: 'Introduction',
          intro: true,
          description: `${speaker1}, a young American man, arrives at the airport in Egypt.
          As he is taking a look around, he listens to a language course on headphones,
          with greetings in Egyption Arabic. Then ${speaker4} comes up and starts talking to him.`,
        },
        {
          imgURl: '/modules/lessons/lesson-001/images/001.png',
          title: 'Introduction',
          intro: true,
          description: 'In this lesson you will learn:',
          vocab: [
            {word: '1- how to greet other people'},
            {word: "2- to ask people how they're doing"},
            {word: '3- to say how you feel'},
            {word: '4- to distinguish between formal and informal greetings'},
          ],

        }
      ]
    },
    {
      title: 'Story',
      slides: [
        {
          imgURl: '/modules/lessons/lesson-001/images/002.png',
          convo: 'صباح الخير أستاذة ندى، ازيك؟',
          speaker: audiobook,
          vocab: [
            {word: 'صباح', meaning: 'morning', url: '/audio1970771774_01.mp3'},
            {word: 'الخير', meaning: 'good', url: '/audio1970771774_01.mp3'},
            {word: 'أستاذة', meaning: 'Ms', url: '/audio1970771774_01.mp3'},
            {word: 'ازيك؟', meaning: 'how are you? (f)', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          imgURl: '/modules/lessons/lesson-001/images/003.png',
          convo: 'صباح النور أستاذ أحمد. الحمد لله بخير انت ازيك؟',
          speaker: audiobook,
          vocab: [
            {word: 'النور', meaning: 'light', url: '/audio1970771774_01.mp3'},
            {word: 'أستاذ', meaning: 'Mr', url: '/audio1970771774_01.mp3'},
            {word: 'الحمد لله', meaning: 'thank god', url: '/audio1970771774_01.mp3'},
            {word: 'بخير', meaning: 'fine', url: '/audio1970771774_01.mp3'},
            {word: 'انت', meaning: 'you (m)', url: '/audio1970771774_01.mp3'},
            {word: 'ازيك؟', meaning: 'how are you (m)', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          imgURl: '/modules/lessons/lesson-001/images/004.png',
          convo: 'مساء الخير أستاذة رضوى',
          speaker: audiobook,
          vocab: [
            {word: 'مساء', meaning: 'evening', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          imgURl: '/modules/lessons/lesson-001/images/005.png',
          convo: 'مساء النور أستاذ طارق. عامل ايه؟',
          speaker: audiobook,
          vocab: [
            {word: 'عامل ايه', meaning: 'how are you (m)', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          imgURl: '/modules/lessons/lesson-001/images/006.png',
          convo: 'كويس جدا الحمد لله. انتي عاملة ايه؟',
          speaker: audiobook,
          vocab: [
            {word: 'عاملة ايه', meaning: 'how are you (f)', url: '/audio1970771774_01.mp3'},
            {word: 'انتي', meaning: 'you (f)', url: '/audio1970771774_01.mp3'},
            {word: 'كويس', meaning: 'good', url: '/audio1970771774_01.mp3'},
            {word: 'جدا', meaning: 'very', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          imgURl: '/modules/lessons/lesson-001/images/007.png',
          convo: 'ايه يا صاحبي ايه الاخبار؟',
          speaker: audiobook,
          vocab: [
            {word: 'ايه', meaning: 'what', url: '/audio1970771774_01.mp3'},
            {word: 'يا', meaning: 'hey', url: '/audio1970771774_01.mp3'},
            {word: 'صاحب', meaning: 'friend', url: '/audio1970771774_01.mp3'},
            {word: 'ي', meaning: 'my', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          imgURl: '/modules/lessons/lesson-001/images/008.png',
          convo: 'زي الفل. انت عامل ايه؟',
          speaker: audiobook,
          vocab: [
            {word: 'زي', meaning: 'like', url: '/audio1970771774_01.mp3'},
            {word: 'الفل', meaning: 'jasmine', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          imgURl: '/modules/lessons/lesson-001/images/009.png',
          convo: 'no conversation',
          speaker: 'conversation:',
        },
        {
          imgURl: '/modules/lessons/lesson-001/images/010.png',
          convo: 'حلوة اوي',
          speaker: speaker4,
          vocab: [
            {word: 'حلوة', meaning: 'pretty', url: '/audio1970771774_01.mp3'},
            {word: 'اوي', meaning: 'very', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          imgURl: '/modules/lessons/lesson-001/images/011.png',
          convo: 'نعم؟',
          speaker: speaker1,
          vocab: [
            {word: 'نعم', meaning: 'yes', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          imgURl: '/modules/lessons/lesson-001/images/012.png',
          convo: 'الشنطة حلوة',
          speaker: speaker4,
          vocab: [
            {word: 'ال', meaning: 'the', url: '/audio1970771774_01.mp3'},
            {word: 'شنطة', meaning: 'bag', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          imgURl: '/modules/lessons/lesson-001/images/013.png',
          convo: 'معلش؟ الشنطة؟',
          speaker: speaker4,
          vocab: [
            {word: 'معلش', meaning: 'sorry', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          imgURl: '/modules/lessons/lesson-001/images/014.png',
          convo: 'ايوة الشنطة جميلة',
          speaker: speaker4,
          vocab: [
            {word: 'ايوة', meaning: 'yes', url: '/audio1970771774_01.mp3'},
            {word: 'جميلة', meaning: 'beatiful', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          imgURl: '/modules/lessons/lesson-001/images/015.png',
          convo: 'دنيا تعالي هنا',
          speaker: speaker2,
          vocab: [
            {word: 'تعالي', meaning: 'come (f)', url: '/audio1970771774_01.mp3'},
            {word: 'هنا', meaning: 'here', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          imgURl: '/modules/lessons/lesson-001/images/016.png',
          convo: 'لا مؤاخذة',
          speaker: speaker2,
          vocab: [
            {word: 'لا مؤاخذة', meaning: 'excuse me', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          imgURl: '/modules/lessons/lesson-001/images/017.png',
          convo: 'لو سمحتي',
          speaker: speaker1,
          vocab: [
            {word: 'لو سمحتي', meaning: 'please (f)', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          imgURl: '/modules/lessons/lesson-001/images/018.png',
          convo: 'شارع السلام في العجمي',
          speaker: speaker1,
          vocab: [
            {word: 'شارع', meaning: 'street', url: '/audio1970771774_01.mp3'},
            {word: 'في', meaning: 'in', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          imgURl: '/modules/lessons/lesson-001/images/019.png',
          convo: 'confused look',
          speaker: narrator,
        },
      ]
    },
    {
      title: 'Introduction',
      slides: [
        {
          imgURl: '/modules/lessons/lesson-001/images/001.png',
          title: 'introduction',
          firstBox: '',
          secondBox: 'wow lesson',
          thirdBox: 'please start',
        }
      ]
    },
    {
      title: 'Story',
      slides: [
        {
          imgURl: '/modules/lessons/lesson-001/images/002.png',
          convo: 'صباح الخير أستاذة ندى، ازيك؟',
          speaker: audiobook,
          vocab: [
            {word: 'morning : صباح', url: '/audio1970771774_01.mp3'},
            {word: 'good : الخير', url: '/audio1970771774_02.mp3'},
            {word: 'Ms : أستاذة', url: '/audio1970771774_03.mp3'},
            {word: 'how are you? (m) : ازيك؟', url: '/audio1970771774_04.mp3'},
          ]
        },
        {
          imgURl: '/modules/lessons/lesson-001/images/003.png',
          convo: 'صباح النور أستاذ أحمد. الحمد لله بخير انت ازيك؟',
          speaker: audiobook,
          vocab: [
            {word: 'light : النور', url: '/audio1970771774_01.mp3'},
            {word: 'Mr : أستاذ', url: '/audio1970771774_01.mp3'},
            {word: 'thank god : الحمد لله', url: '/audio1970771774_01.mp3'},
            {word: 'fine : بخير', url: '/audio1970771774_01.mp3'},
            {word: 'you (m) : انت', url: '/audio1970771774_01.mp3'},
            {word: 'how are you (f) : ازيك؟', url: '/audio1970771774_01.mp3'},                 
          ]
        },
        {
          imgURl: '/modules/lessons/lesson-001/images/017.png',
          convo: 'لو سمحتي',
          speaker: speaker1,
          vocab: [
            {word: 'please (f) : لو سمحتي', url: '/audio1970771774_01.mp3'},                 
          ]
        },

      ]
    },
  ]
}

export const lesson002 = {
  chapter: 'Welcome to Egyptian Arabic',
  title: 'Lesson Two',
  sections: [
    {
      title: 'Introduction',
      slides: [
        {
          imgURl: '/modules/lessons/lesson-001/images/001.png',
          title: 'introduction',
          firstBox: '',
          secondBox: 'wow lesson',
          thirdBox: 'please start',
        }
      ]
    },
    {
      title: 'Story',
      slides: [
        {
          imgURl: '/modules/lessons/lesson-001/images/002.png',
          convo: 'صباح الخير أستاذة ندى، ازيك؟',
          speaker: audiobook,
          vocab: [
            {word: 'morning : صباح', url: '/audio1970771774_01.mp3'},
            {word: 'good : الخير', url: '/audio1970771774_02.mp3'},
            {word: 'Ms : أستاذة', url: '/audio1970771774_03.mp3'},
            {word: 'how are you? (m) : ازيك؟', url: '/audio1970771774_04.mp3'},
          ]
        },
        {
          imgURl: '/modules/lessons/lesson-001/images/003.png',
          convo: 'صباح النور أستاذ أحمد. الحمد لله بخير انت ازيك؟',
          speaker: audiobook,
          vocab: [
            {word: 'light : النور', url: '/audio1970771774_01.mp3'},
            {word: 'Mr : أستاذ', url: '/audio1970771774_01.mp3'},
            {word: 'thank god : الحمد لله', url: '/audio1970771774_01.mp3'},
            {word: 'fine : بخير', url: '/audio1970771774_01.mp3'},
            {word: 'you (f) : انت', url: '/audio1970771774_01.mp3'},
            {word: 'how are you (f) : ازيك؟', url: '/audio1970771774_01.mp3'},                 
          ]
        },

      ]
    },
    {
      title: 'Introduction',
      slides: [
        {
          imgURl: '/modules/lessons/lesson-001/images/001.png',
          title: 'introduction',
          firstBox: '',
          secondBox: 'wow lesson',
          thirdBox: 'please start',
        }
      ]
    },
    {
      title: 'Story',
      slides: [
        {
          imgURl: '/modules/lessons/lesson-001/images/002.png',
          convo: 'صباح الخير أستاذة ندى، ازيك؟',
          speaker: audiobook,
          vocab: [
            {word: 'morning : صباح', url: '/audio1970771774_01.mp3'},
            {word: 'good : الخير', url: '/audio1970771774_02.mp3'},
            {word: 'Ms : أستاذة', url: '/audio1970771774_03.mp3'},
            {word: 'how are you? (m) : ازيك؟', url: '/audio1970771774_04.mp3'},
          ]
        },
        {
          imgURl: '/modules/lessons/lesson-001/images/003.png',
          convo: 'صباح النور أستاذ أحمد. الحمد لله بخير انت ازيك؟',
          speaker: audiobook,
          vocab: [
            {word: 'light : النور', url: '/audio1970771774_01.mp3'},
            {word: 'Mr : أستاذ', url: '/audio1970771774_01.mp3'},
            {word: 'thank god : الحمد لله', url: '/audio1970771774_01.mp3'},
            {word: 'fine : بخير', url: '/audio1970771774_01.mp3'},
            {word: 'you (f) : انت', url: '/audio1970771774_01.mp3'},
            {word: 'how are you (f) : ازيك؟', url: '/audio1970771774_01.mp3'},                 
          ]
        },

      ]
    },
  ]
}


export const lesson001Vocab = [];

lesson001.sections.forEach(section => {
  section.slides.forEach(slide => {
    if (slide.vocab) {
      slide.vocab.forEach(aWord =>{
        lesson001Vocab.push(aWord.word)
      })
    }
  })
})