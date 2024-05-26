import {
  defaultAvatar,
  avatar1, avatar2, avatar3,
  car,
} from "assets"

const colorInfo = ['default', 'warning', 'primary', 'info', 'success', 'danger']
const tabInfo = ['Prayers', 'Meditation']

const navLinkInfo = [
  {
    icon: 'fa fa-facebook-square',
    title: 'facebook',
    link: 'https://www.facebook.com',
  },
  {
    icon: 'fa fa-instagram',
    title: 'instagram',
    link: 'https://www.instagram.com',
  },
  {
    icon: 'fa fa-twitter-square',
    title: 'twitter',
    link: 'https://twitter.com',
  },
  {
    icon: 'fa fa-linkedin',
    title: 'linkedin',
    link: 'https://www.linkedin.com/',
  },
]

const myProfile = {
  avatar: defaultAvatar,
  firstName: 'Maya',
  lastName: 'Haynes',
  userName: 'Jessica Jones',
  email: 'jessica@gmail.com',
  age: '27',
  location: 'Bucharest, Romania',
  companyPosition: 'Solution Manager - Creative Tim Officer',
  education: 'University of Computer Science',
  summary: 'An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.',
  contributions: [
    {
      userName: 'Joana',
      flag: '',
      content: 'Joana content Lorem ipsum dolor sit amet consectetur',
      date: 'May 25 2024',
    },
    {
      userName: 'Catherine',
      flag: '',
      content: 'Catherine content Lorem ipsum dolor sit amet consectetur',
      date: 'May 3 2024',
    },
    {
      userName: 'Olga',
      flag: '',
      content: 'Olga content Lorem ipsum dolor sit amet consectetur',
      date: 'Apr 29 2024',
    },
  ]
}

const userListInfo = [
  {
    userName: 'Joana',
    avatar: avatar1,
    date: 'May 25 2024',
    location: 'UK',
    contributions: [
      {
        userName: 'Joana',
        content: 'Lorem ipsom dollor',
        date: 'May 25 2024',
      },
      {
        userName: 'Catherine',
        content: 'Lorem ipsom dollor',
        date: 'May 3 2024',
      },
      {
        userName: 'Olga',
        content: 'Lorem ipsom dollor',
        date: 'Apr 29 2024',
      },
    ]
  },
  {
    userName: 'Catherine',
    avatar: avatar2,
    date: 'May 3 2024',
    location: 'US',
    contributions: [
      {
        userName: 'Joana',
        content: 'Lorem ipsom dollor',
        date: 'May 25 2024',
      },
      {
        userName: 'Catherine',
        content: 'Lorem ipsom dollor',
        date: 'May 3 2024',
      },
      {
        userName: 'Olga',
        content: 'Lorem ipsom dollor',
        date: 'Apr 29 2024',
      },
    ]
  },
  {
    userName: 'Olga',
    avatar: avatar3,
    date: 'Apr 29 2024',
    location: 'Russia',
    contributions: [
      {
        userName: 'Joana',
        content: 'Lorem ipsom dollor',
        date: 'May 25 2024',
      },
      {
        userName: 'Catherine',
        content: 'Lorem ipsom dollor',
        date: 'May 3 2024',
      },
      {
        userName: 'Olga',
        content: 'Lorem ipsom dollor',
        date: 'Apr 29 2024',
      },
    ]
  },
]

const prayerInfo = [
  {
    profile: 'Lala',
    title: 'PrayerTitle1',
    image: car,
    description: 'Prayer Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed dignissimos esse fuga! Minus, alias.',
    prayers: [
      {
        userName: 'Joana',
        flag: '',
        content: 'Joana content Lorem ipsum dolor sit amet consectetur',
        date: 'May 25 2024',
      },
      {
        userName: 'Catherine',
        flag: '',
        content: 'Catherine content Lorem ipsum dolor sit amet consectetur',
        date: 'May 3 2024',
      },
      {
        userName: 'Olga',
        flag: '',
        content: 'Olga content Lorem ipsum dolor sit amet consectetur',
        date: 'Apr 29 2024',
      },
    ],
  },
  {
    profile: 'Kiera',
    title: 'PrayerTitle2',
    image: car,
    description: 'Prayer Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed dignissimos esse fuga! Minus, alias.',
    prayers: [
      {
        userName: 'Joana',
        flag: '',
        content: 'Joana content Lorem ipsum dolor sit amet consectetur',
        date: 'May 25 2024',
      },
      {
        userName: 'Catherine',
        flag: '',
        content: 'Catherine content Lorem ipsum dolor sit amet consectetur',
        date: 'May 3 2024',
      },
      {
        userName: 'Olga',
        flag: '',
        content: 'Olga content Lorem ipsum dolor sit amet consectetur',
        date: 'Apr 29 2024',
      },
    ],
  },
  {
    profile: 'Tori',
    title: 'PrayerTitle3',
    image: car,
    description: 'Prayer Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed dignissimos esse fuga! Minus, alias.',
    prayers: [
      {
        userName: 'Joana',
        flag: '',
        content: 'Joana content Lorem ipsum dolor sit amet consectetur',
        date: 'May 25 2024',
      },
      {
        userName: 'Catherine',
        flag: '',
        content: 'Catherine content Lorem ipsum dolor sit amet consectetur',
        date: 'May 3 2024',
      },
      {
        userName: 'Olga',
        flag: '',
        content: 'Olga content Lorem ipsum dolor sit amet consectetur',
        date: 'Apr 29 2024',
      },
    ],
  },
]

const meditationInfo = [
  {
    profile: 'Lala',
    title: 'MeditationTitle1',
    image: car,
    description: 'Meditation Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed dignissimos esse fuga! Minus, alias.',
    meditations: [
      {
        userName: 'Joana',
        flag: '',
        content: 'Joana content Lorem ipsum dolor sit amet consectetur',
        date: 'May 25 2024',
      },
      {
        userName: 'Catherine',
        flag: '',
        content: 'Catherine content Lorem ipsum dolor sit amet consectetur',
        date: 'May 3 2024',
      },
    ],
  },
  {
    profile: 'Kiera',
    title: 'MeditationTitle2',
    image: car,
    description: 'Meditation Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed dignissimos esse fuga! Minus, alias.',
    meditations: [
      {
        userName: 'Joana',
        flag: '',
        content: 'Joana content Lorem ipsum dolor sit amet consectetur',
        date: 'May 25 2024',
      },
      {
        userName: 'Catherine',
        flag: '',
        content: 'Catherine content Lorem ipsum dolor sit amet consectetur',
        date: 'May 3 2024',
      },
    ],
  },
]

export { colorInfo, tabInfo, navLinkInfo, myProfile, userListInfo, prayerInfo, meditationInfo }