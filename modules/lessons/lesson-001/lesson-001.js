const audiobook = 'AUDIOBOOK:';
const speaker1 = 'THOMAS';


const lesson001 = {
  chapter: 'Welcome to Egyptian Arabic',
  title: 'Lesson One',
  sections: [
    {
      title: 'Introduction',
      slides: [
        {
          imgURl: '/modules/lessons/lesson-001/images/001.png',
          vocab: ['dsds'],
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
            'morning : صباح',
            'good : الخير',
            'Ms : أستاذة',
            'how are you? (m) : ازيك؟',
          ]
        },
        {
          imgURl: '/modules/lessons/lesson-001/images/003.png',
          convo: 'صباح النور أستاذ أحمد. الحمد لله بخير انت ازيك؟',
          speaker: audiobook,
          vocab: [
            'light : النور',
            'Mr : أستاذ',
            'thank god : الحمد لله',
            'fine : بخير',
            'you (f) : انت',
            'how are you (f) : ازيك؟',
          ]
        },

      ]
    },
  ]
}

export default lesson001