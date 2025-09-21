type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type Education = {
  title: string
  description: string
  id: string
}

type Accomplishment = {
  title: string
  description: string[]
  id: string
}

export const PROJECTS_KANNADA: Project[] = [
  {
    name: 'Pujaneeya Vraksha Sampattu (ಪೂಜನೀಯ ವ್ರಕ್ಷಸಂಪತ್ತು)',
    description: 'This book was published in 2016. Through this book, Acharya emphasizes the various relations between humans and nature. He writes about medicinal plants & trees, looking at them in a divine light and about the spiritual way they have been planted by the ancestors of India. The book contains information about performing rituals while remembering the Gods and Goddesses associated with these plants and about the role of these plants play in purifying the environment. Essentially, a booklet on importance and value of different trees and plants with relevant pictures.',
    link: '#',
    video: '',
    id: 'kannada1',
  },
  {
    name: 'Habba Haridinagalu and Sanskrathi Sugandha (ಹಬ್ಬ ಹರಿದಿನಗಳು ಮತ್ತು ಸಂಸ್ಕೃತಿ ಸುಗಂಧ)',
    description: 'This book was published initially in 2016 and then again in 2023. We celebrate many festivals throughout the year, but the creator and ruler are One. In the same formula, cultures are many, but sweet smell is same. In line with name of this book, the first part narrates ‘Annual Festivals’ that Hindus celebrate throughout the year (i. e. starting from ‘Yugadi’ till ‘Holi Celebration’ by covering 33 Festivals) and the second part explains our daily and periodical cultural life. “Knowledge, Faith and Observance are the base of our life” says ‘Upanishath’. Under this principle, this book is shaped.',
    link: '#',
    video: '',
    id: 'kannada2',
  },
  {
    name: 'Shraddha Darpana',
    description: 'This book was published in 2023. We are shaped and civilized by our parents. Their sacrifice is innumerable. After their death also, we have to remember them. A funeral rite or ceremony, Anniversary etc to be performed by us. At these inner deities would be pleased and grant us prosperity. In this book, we can now the significance, duty etc are narrated. By the light of this Darpana (Mirror) departed spirits of our elders “Punya Darshana”. That is the holy bath.',
    link: '#',
    video: '',
    id: 'kannada3',
  },
]

export const PROJECTS_DEVANAGARI: Project[] = [
    {
    name: 'Samanthraka Anwadhana Prayoga',
    description: '– (Methods of Offering Various Holy Objects into the sacrificial Fire): This book was published during 2016 and it contains a collection of variety of Poojas, Havanas, Vritas etc written for the benefit of ‘Purohits’ covering all the extensive information that they would need in a single book.',
    link: '#',
    video: '',
    id: 'devanagari1',
  },
  {
    name: 'Vishnu Yaga Pradeepika',
    description: '- (Ritualistic Method of Vishnu Yaga): This book was published during 2018 and it contains a collection of step-by-step rituals performed on one of the main Hindu deities, Mahavishnu.',
    link: '#',
    video: '',
    id: 'devanagari2',
  },
  {
    name: 'Astaavadhana Manjaree',
    description: '- This book was published during 2019 and it contains recitation and uttering of short vedas and shastras to please the Hindu Gods. In addition to this, it elaborates on music and dance, Conch/Shankh blowing, spiritual entertainment and rituals of serving as different ways to offer devotion.',
    link: '#',
    video: '',
    id: 'devanagari3',
  },
  {
    name: 'Apara Prayoga Deepika',
    description: '– (Methods of offering various ceremonies of the Funeral): This book was published during 2021 and it talks about the importance of showing respect to the deceased through funeral ceremonies as well as annual rights & observations. He writes about how performing a Dharmic Funeral or holding a celebration of life in memory of the deceased remains the duty of their children.',
    link: '#',
    video: '',
    id: 'devanagari4',
  },
]

export const EDUCATION: Education[] = [
  {
    title: 'Vaidik Education',
    description: 'Studied Vaidik studies under his father Basrur Vasudev Acharya and Higher vedik studies under his father’s younger brother Basur Ramdas Acharya.',
    id: 'edu1',
  },
  {
    title: 'Formal Schooling',
    description: 'Studied his schooling at Hindu School Basrur and Board High School Basrur. He was the first student of Board High School Basrur and later became a teacher there.',
    id: 'edu2',
  },
  {
    title: "Teacher's Training",
    description: "Completed Secondary Teacher’s Training at Government Training School in Udupi and B.Ed training at Manipal College of Education.",
    id: 'edu3',
  },
  {
    title: 'Kannada Pandit',
    description: 'Completed Mysore Kannada Pandit (Final) Exam by Karnataka Government.',
    id: 'edu4',
  },
  {
    title: 'Hindi Ratna',
    description: 'Awarded Hindi Ratna by Mysore Hindi Parishat.',
    id: 'edu5',
  },
]

export const ACCOMPLISHMENTS: Accomplishment[] = [
  {
    title: 'Career as a Teacher',
    description: [
      'Govt. Primary School Mundrupady, Belthangadi Tq– 1 Year',
      'Govt. Primary School Karkunje, Kundapura Tq – 2 Years',
      'Head Master of Sarvodaya Higher Primary School, Gulwadi, Kundapura Tq - 2 Years',
      'Tq Board Malnadu High School, Vande, Kundapura Tq – 5 Years',
      'Tq Board Higher Secondary School, Basrur, Kundapura Tq – 5 Years',
      'Govt Junior College Kundapura – 2 Years',
      'Govt High School, Basrur, Kundapura Tq – 15 Years',
      'Head Master at Ramson Govt High School, Kandlur, Kundapura Tq - 4 Years'
    ],
    id: 'acc1',
  },
  {
    title: 'Vaidika Service',
    description: [
      "Served over 30 Years as an ‘Archak’ at Sri Gokarna Partagali Jeevottam Mutt Basrur branch.",
      "Served as a purohit at Basrur and surrounding villages of Kundapura Tq over 58 years.",
      "Chief Priest/Chief Acharya for the Centenary Celebration of Sri Bhuavendra Teertha Swamiji Punya Tithi, Sri Kashi Mutt, Basrur in 1986.",
      "One of the two Chief Priests at ‘Punar Pratishta’ at Sri Gokarna Mutt, Basrur.",
      "One of the two Chief Priests at ‘Punar Prastishta’ at Sri Mahalasa Temple, Basrur.",
      "One of the two Chief Priests at “Sri Mukhya Prana Temple Pratishta’ of Prabhu’s Family in Bhatkal."
    ],
    id: 'acc2',
  },
  {
    title: 'Other Activities',
    description: [
      'As a part-time teacher in Sanskrit at Shri Bhuvanendra Balakashram, Basrur for 32 years, from 1968-1999.',
      'An external examiner at Srinivasa Nigamagama Paatashaala, Mangaluru for 12 years.',
      'As the President of Akhila Karnataka Sanskrit Parishath Kundapura Branch for 5 years from 1978-1982',
      'As the President of GSB Vaidik Mandali Basrur for 20 years',
      'As the secretary, old Boys Association, Board High School Basrur for 2 years',
      'Conducted free Sanskrith classes for beginners from 1977 to 1980 for 3 years in Basrur, Kundapura Tq.'
    ],
    id: 'acc3',
  },
  {
    title: 'Honors',
    description: [
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
  },
]