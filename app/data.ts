type Project = {
  name: string
  description: string
  href: string
  video: string
  id: string
  slug: string
  subtitle?: string
  image?: string // Added optional image property
}

type Education = {
  title: string
  description: string | string[]
  id: string
  slug: string
}

type Accomplishment = {
  title: string
  description: string[]
  id: string
  slug: string
  images?: string[]
}

type MenuLink = {
    name: string
    href: string
    id: string
}


export const PROJECTS_KANNADA: Project[] = [
  {
    name: 'Pujaneeya Vraksha Sampattu (ಪೂಜನೀಯ ವ್ರಕ್ಷಸಂಪತ್ತು)',
    description: 'This book was published in 2016. Through this book, Acharya emphasizes the various relations between humans and nature. He writes about medicinal plants & trees, looking at them in a divine light and about the spiritual way they have been planted by the ancestors of India. The book contains information about performing rituals while remembering the Gods and Goddesses associated with these plants and about the role of these plants play in purifying the environment. Essentially, a booklet on importance and value of different trees and plants with relevant pictures.',
    href: '/publications/kannada/pujaneeya-vraksha-sampattu',
    video: '',
    id: 'kannada1',
    slug: 'pujaneeya-vraksha-sampattu',
    image: '/kannada1.jpg',
  },
  {
    name: 'Habba Haridinagalu and Sanskrathi Sugandha (ಹಬ್ಬ ಹರಿದಿನಗಳು ಮತ್ತು ಸಂಸ್ಕೃತಿ ಸುಗಂಧ)',
    description: 'This book was published initially in 2016 and then again in 2023. We celebrate many festivals throughout the year, but the creator and ruler are One. In the same formula, cultures are many, but sweet smell is same. In line with name of this book, the first part narrates ‘Annual Festivals’ that Hindus celebrate throughout the year (i. e. starting from ‘Yugadi’ till ‘Holi Celebration’ by covering 33 Festivals) and the second part explains our daily and periodical cultural life. “Knowledge, Faith and Observance are the base of our life” says ‘Upanishath’. Under this principle, this book is shaped.',
    href: '/publications/kannada/habba-haridinagalu',
    video: '',
    id: 'kannada2',
    slug: 'habba-haridinagalu',
    image: '/kannada2.jpg',
  },
  {
    name: 'Shraddha Darpana',
    description: 'This book was published in 2023. We are shaped and civilized by our parents. Their sacrifice is innumerable. After their death also, we have to remember them. A funeral rite or ceremony, Anniversary etc to be performed by us. At these inner deities would be pleased and grant us prosperity. In this book, we can now the significance, duty etc are narrated. By the light of this Darpana (Mirror) departed spirits of our elders “Punya Darshana”. That is the holy bath.',
    href: '/publications/kannada/shraddha-darpana',
    video: '',
    id: 'kannada3',
    slug: 'shraddha-darpana',
    image: '/kannada3.jpg',
  },
]

export const PROJECTS_DEVANAGARI: Project[] = [
    {
    name: 'Samanthraka Anwadhana Prayoga',
    subtitle: '(Methods of Offering Various Holy Objects into the sacrificial Fire)',
    description: 'This book was published during 2016 and it contains a collection of variety of Poojas, Havanas, Vritas etc written for the benefit of ‘Purohits’ covering all the extensive information that they would need in a single book.',
    href: '/publications/devanagari/samanthraka-anwadhana-prayoga',
    video: '',
    id: 'devanagari1',
    slug: 'samanthraka-anwadhana-prayoga',
    image: '/devanagari1.jpg',
  },
  {
    name: 'Vishnu Yaga Pradeepika',
    subtitle: '(Ritualistic Method of Vishnu Yaga)',
    description: 'This book was published during 2018 and it contains a collection of step-by-step rituals performed on one of the main Hindu deities, Mahavishnu.',
    href: '/publications/devanagari/vishnu-yaga-pradeepika',
    video: '',
    id: 'devanagari2',
    slug: 'vishnu-yaga-pradeepika',
    image: '/devanagari2.jpg',
  },
  {
    name: 'Astaavadhana Manjaree',
    description: 'This book was published during 2019 and it contains recitation and uttering of short vedas and shastras to please the Hindu Gods. In addition to this, it elaborates on music and dance, Conch/Shankh blowing, spiritual entertainment and rituals of serving as different ways to offer devotion.',
    href: '/publications/devanagari/astaavadhana-manjaree',
    video: '',
    id: 'devanagari3',
    slug: 'astaavadhana-manjaree',
    image: '/devanagari3.jpg',
  },
  {
    name: 'Apara Prayoga Deepika',
    subtitle: '(Methods of offering various ceremonies of the Funeral)',
    description: 'This book was published during 2021 and it talks about the importance of showing respect to the deceased through funeral ceremonies as well as annual rights & observations. He writes about how performing a Dharmic Funeral or holding a celebration of life in memory of the deceased remains the duty of their children.',
    href: '/publications/devanagari/apara-prayoga-deepika',
    video: '',
    id: 'devanagari4',
    slug: 'apara-prayoga-deepika',
    image: '/devanagari4.jpg',
  },
]

export const EDUCATION: Education[] = [
  {
    title: 'Vaidik Education',
    description: 'Basrur Panduranga Acharya was born on 29th January 1940 in Basrur, Kundapura Tq, Udupi District. He had his vaidik studies under his father Basrur Vasudev Acharya and Higher vedik studies under his father’s younger brother Basur Ramdas Acharya.',
    id: 'edu1',
    slug: 'vaidik-education',
  },
  {
    title: 'Formal Education',
    description: [
        'Basrur Panduranga Acharya studied his schooling at Hindu School Basrur and Board High School Basrur. Interestingly, he was the FIRST student of Board High School Basrur and subsequently he became a teacher in the same High School and served for many years.',
        'Secondary Teacher’s Training at Government Training School in Udupi and B.Ed training at Manipal College of Education, deputed by the Government in the service.',
        'Mysore Kannada Pandit (Final) Exam by Karnataka Government',
        'Hindi Ratna by Mysore Hindi Parishat'
    ],
    id: 'edu2',
    slug: 'formal-education',
  },
]

export const ACCOMPLISHMENTS: Accomplishment[] = [
  {
    title: 'Career as a Teacher',
    description: [
      "Basrur Panduranga Acharya served in the ‘Teaching Field’ for a period around 37 years:",
      'Govt. Primary School Mundrupady, Belthangadi Tq - 1 Year',
      'Govt. Primary School Karkunje, Kundapura Tq – 2 Years',
      'Head Master of Sarvodaya Higher Primary School, Gulwadi, Kundapura Tq - 2 Years',
      'Tq Board Malnadu High School, Vande, Kundapura Tq – 5 Years',
      'Tq Board Higher Secondary School, Basrur, Kundapura Tq – 5 Years',
      'Govt Junior College Kundapura – 2 Years',
      'Govt High School, Basrur, Kundapura Tq – 15 Years',
      'Head Master at Ramson Govt High School, Kandlur, Kundapura Tq - 4 Years'
    ],
    id: 'acc1',
    slug: 'career-as-a-teacher',
  },
  {
    title: 'Vaidika Service',
    description: [
      "Basrur Panduranga Acharya Served over 30 Years as an ‘Archak’ at Sri Gokarna Partagali Jeevottam Mutt Basrur branch. In his leisure time, he also served as a purohit at Basrur and surrounding villages of Kundapura Tq over 58 years. Adding to the same, he also played his role in the following programs:",
      "Chief Priest/Chief Acharya for the Centenary Celebration of Sri Bhuavendra Teertha Swamiji Punya Tithi, Sri Kashi Mutt, Basrur in the ‘Sri Vishnu Yaaga and Sahasra Kumbhabhisheka’ 6 days programme, under the holy guidance of his holiness Srimad Sudheendra Thirtha Swamiji in 1986.",
      "One of the two Chief Priests at ‘Punar Pratishta’ at Sri Gokarna Mutt, Basrur, under the holy guidance of his holiness of Srimad Dwarakanath Thirtha Swamiji.",
      "One of the two Chief Priests at ‘Punar Prastishta’ at Sri Mahalasa Temple, Basrur, under the HH Srimad Sudheendra Thirtha Swamiji.",
      "One of the two Chief Priests at “Sri Mukhya Prana Temple Pratishta’ of Prabhu’s Family in Bhatkal under the holy guidance of his holiness Srimad Sudheendra Thirtha Swamiji.",
      "And in many ‘Yaga, Pratista’ etc programmes in Basrur, Kundapura, Kota, Koteswara, Brahmawara, Udupi, Siddapura, Gangolli, Bhatkal, Udupi, Mangalore etc",
    ],
    id: 'acc2',
    slug: 'vaidika-service',
  },
  {
    title: 'Other Activities',
    description: [
      'Basrur Panduranga Acharya served and played his role in many forms. Some of them are:',
      'As a part-time teacher in Sanskrit at Shri Bhuvanendra Balakashram, Basrur for 32 years, from 1968-1999.',
      'An external examiner at Srinivasa Nigamagama Paatashaala, Mangaluru for 12 years.',
      'As the President of Akhila Karnataka Sanskrit Parishath Kundapura Branch for 5 years from 1978-1982',
      'As the President of GSB Vaidik Mandali Basrur for 20 years',
      'As the secretary, old Boys Association, Board High School Basrur for 2 years',
      'Conducted free Sanskrith classes for beginners from 1977 to 1980 for 3 years in Basrur, Kundapura Tq.'
    ],
    id: 'acc3',
    slug: 'other-activities',
  },
  {
    title: 'Honors',
    description: [
      'Basrur Panduranga Acharya has been honoured by various institutions over the years. Some of them were by:',
      'Akhila Karnataka Sanskrit Parishat Kundapur-Basrur',
      'GSB Saibarkatte Zone, Udupi District – Purohith’s Sanman',
      '‘Dattinidhi of Vedamurthy Krishnananda Acharya Gangolli’ in the holy presence of Srimad Vidyadhiraja Theertha Swamiji in 2011.',
      'GSB Society, Basrur in 2015',
      'Sanyukta GSB Association, Siddapura, Udupi District, 2015',
      'Managing Committee of ‘Laxmi Damodara Temple’, Basrur in 2015.',
      'Jeevottam Vaidika Sangh, North Kanara District in Kumta-Honnavar in 2016',
      'GSB Temple Associations of Mangalore, Kundapura Branch at Kundapura in 2023.'
    ],
    id: 'acc4',
    slug: 'honors',
    images: ['/honor1.jpg', '/honor2.jpg', '/honor3.jpg', '/honor4.jpg']
  },
]

export const MENU_LINKS: MenuLink[] = [
    { name: 'Career as a Teacher', href: '/accomplishments/career-as-a-teacher', id: 'acc1'},
    { name: 'Vaidika Service', href: '/accomplishments/vaidika-service', id: 'acc2'},
    { name: 'Other Activities', href: '/accomplishments/other-activities', id: 'acc3'},
    { name: 'Honors', href: '/accomplishments/honors', id: 'acc4'},
    { name: 'Formal Education', href: '/education/formal-education', id: 'edu2'},
    { name: 'Vaidik Education', href: '/education/vaidik-education', id: 'edu1'}
]

