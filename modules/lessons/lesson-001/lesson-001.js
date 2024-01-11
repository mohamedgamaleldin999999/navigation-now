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
            {word: 'morning : صباح', url: '/audio1970771774_01.mp3'},
            {word: 'good : الخير', url: '/audio1970771774_02.mp3'},
            {word: 'Ms : أستاذة', url: '/audio1970771774_03.mp3'},
            {word: 'how are you? (f) : ازيك؟', url: '/audio1970771774_04.mp3'},
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
            {word: 'how are you (m) : ازيك؟', url: '/audio1970771774_01.mp3'},                 
          ]
        },
        {
          imgURl: '/modules/lessons/lesson-001/images/004.png',
          convo: 'مساء الخير أستاذة رضوى',
          speaker: audiobook,
          vocab: [
            {word: 'evening : مساء', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          imgURl: '/modules/lessons/lesson-001/images/005.png',
          convo: 'مساء النور أستاذ طارق. عامل ايه؟',
          speaker: audiobook,
          vocab: [
            {word: 'how are you (m) : عامل ايه', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          imgURl: '/modules/lessons/lesson-001/images/006.png',
          convo: 'كويس جدا الحمد لله. انتي عاملة ايه؟',
          speaker: audiobook,
          vocab: [
            {word: 'how are you (f) : عاملة ايه', url: '/audio1970771774_01.mp3'},
            {word: 'you (f) : انتي', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          imgURl: '/modules/lessons/lesson-001/images/007.png',
          convo: 'ايه يا صاحبي ايه الاخبار؟',
          speaker: audiobook,
          vocab: [
            {word: 'how are you (f) :ايه', url: '/audio1970771774_01.mp3'},
            {word: 'you (f) : يا', url: '/audio1970771774_01.mp3'},
            {word: 'you (f) : صاحبي', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          imgURl: '/modules/lessons/lesson-001/images/008.png',
          convo: 'زي الفل. انت عامل ايه؟',
          speaker: audiobook,
          vocab: [
            {word: 'like :زي', url: '/audio1970771774_01.mp3'},
            {word: 'jasmine : الفل', url: '/audio1970771774_01.mp3'},
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
            {word: 'pretty : حلوة', url: '/audio1970771774_01.mp3'},
            {word: 'very : اوي', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          imgURl: '/modules/lessons/lesson-001/images/011.png',
          convo: 'نعم؟',
          speaker: speaker1,
          vocab: [
            {word: 'yes : نعم', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          imgURl: '/modules/lessons/lesson-001/images/012.png',
          convo: 'الشنطة حلوة',
          speaker: speaker4,
          vocab: [
            {word: 'the : ال', url: '/audio1970771774_01.mp3'},
            {word: 'bag : شنطة', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          imgURl: '/modules/lessons/lesson-001/images/013.png',
          convo: 'معلش؟ الشنطة؟',
          speaker: speaker4,
          vocab: [
            {word: 'the : ال', url: '/audio1970771774_01.mp3'},
            {word: 'bag : شنطة', url: '/audio1970771774_01.mp3'},
            {word: 'sorry : معلش', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          imgURl: '/modules/lessons/lesson-001/images/014.png',
          convo: 'ايوة الشنطة جميلة',
          speaker: speaker4,
          vocab: [
            {word: 'yes : ايوة', url: '/audio1970771774_01.mp3'},
            {word: 'beatiful : جميلة', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          imgURl: '/modules/lessons/lesson-001/images/015.png',
          convo: 'دنيا تعالي هنا',
          speaker: speaker2,
          vocab: [
            {word: 'come : تعالي', url: '/audio1970771774_01.mp3'},
            {word: 'here : هنا', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          imgURl: '/modules/lessons/lesson-001/images/016.png',
          convo: 'لا مؤاخذة',
          speaker: speaker2,
          vocab: [
            {word: 'excuse me : لا مؤاخذة', url: '/audio1970771774_01.mp3'},
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
        {
          imgURl: '/modules/lessons/lesson-001/images/018.png',
          convo: 'شارع السلام في العجمي',
          speaker: speaker1,
          vocab: [
            {word: 'street : شارع', url: '/audio1970771774_01.mp3'},
            {word: 'in : في', url: '/audio1970771774_01.mp3'},
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
