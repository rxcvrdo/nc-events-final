export const adminSideBarLinks = [
  {
    img: "/icons/admin/home.svg",
    route: "/admin",
    text: "Home",
  },
  // {
  //   img: "/icons/admin/users.svg",
  //   route: "/admin/users",
  //   text: "All Users",
  // },
  {
    img: "/icons/admin/book.svg",
    route: "/admin/events",
    text: "Create Events",
  },
  {
    img: "/icons/admin/bookmark.svg",
    route: "/admin/my-events",
    text: "my events",
  },
  // {
  //   img: "/icons/admin/user.svg",
  //   route: "/admin/account-requests",
  //   text: "Account Requests",
  // },
];

export const headerLinks = [
    {
      label: 'Home',
      route: '/',
    },
    {
      label: 'Create Event',
      route: '/events/create',
    },
    {
      label: 'My Profile',
      route: '/profile',
    },
  ]
  
  export const eventDefaultValues = {
    title: '',
    description: '',
    location: '',
    imageUrl: '',
    startDateTime: new Date(),
    endDateTime: new Date(),
    categoryId: '',
    price: '',
    isFree: false,
    url: '',
  }

  export const FIELD_NAMES = {
    fullName: "Full name",
    email: "Email",
    username: "please create a username",
    password: "Password",
   
  };

  export const FIELD_TYPES = {
    fullName: "text",
    email: "email",
    username: "text",
    password: "password",
  };
  

  export const sampleEvents = [
    {
      id: 1,
      title: "Evening Meditation Retreat",
      event_host: "Zen Wellness",
      category: "Health & Wellness",
      rating: 4.6,
      total_spaces: 20,
      available_spaces: 10,
      description:
        "Join us for a peaceful evening of meditation and relaxation led by expert mindfulness instructors.",
      cover: "https://live.staticflickr.com/7002/6633737211_c9c6270fc4_m.jpg",
      summary:
        "This event is designed to help participants reconnect with their inner selves through guided meditation and breathing exercises.",
      
    },
    {
      id: 2,
      title: "Productivity Hacks Workshop",
      event_host: "James Clear",
      category: "Personal Development",
      rating: 4.9,
      total_spaces: 99,
      available_spaces: 50,
      description:
        "Learn practical strategies to boost your productivity and build better habits.",
      cover: "https://live.staticflickr.com/2742/4388407234_b5de85f192_c.jpg",
      summary:
        "A hands-on workshop that introduces effective techniques to improve focus and achieve your goals.",
    },
    {
      id: 3,
      title: "JavaScript Fundamentals",
      event_host: "Kyle Simpson",
      category: "Tech & Programming",
      rating: 4.7,
      total_spaces: 9,
      available_spaces: 5,
      description:
        "An introductory workshop focusing on the core concepts of JavaScript, including scope and closures.",
      cover: "https://m.media-amazon.com/images/I/7186YfjgHHL._AC_UF1000,1000_QL80_.jpg",
      summary:
        "Master JavaScript basics with a focus on understanding scope and closures in this beginner-friendly workshop.",
    },
    {
      id: 4,
      title: "Creative Writing Session",
      event_host: "Paul Coel",
      category: "Arts & Literature",
      rating: 4.5,
      total_spaces: 78,
      available_spaces: 50,
      description:
        "Discover your storytelling potential in this creative writing session led by an acclaimed author.",
      cover: "https://live.staticflickr.com/2915/13983083088_f4fe7e77b8_c.jpg",
      summary:
        "A session focused on improving your creative writing skills and exploring new storytelling techniques.",
    },
    {
      id: 5,
      title: "Focus and Productivity Bootcamp",
      event_host: "Cal Newport",
      category: "Personal Development",
      rating: 4.7,
      total_spaces: 23,
      available_spaces: 23,
      description:
        "A bootcamp designed to help participants develop deep focus and improve productivity.",
      cover: "https://live.staticflickr.com/7174/6602332085_60b6526b99_z.jpg",
      summary:
        "Learn how to cultivate deep work habits and stay productive in an increasingly distracted world.",
    },
    {
      id: 6,
      title: "Clean Code Workshop",
      event_host: "Robert C. Martin",
      category: "Tech & Programming",
      rating: 4.8,
      total_spaces: 56,
      available_spaces: 56,
      description:
        "An in-depth workshop on writing clean and maintainable code following agile principles.",
      cover: "https://live.staticflickr.com/2118/2280385549_7b49046ef8_z.jpg",
      summary:
        "Gain insights into best practices for writing clean and maintainable code in this hands-on session.",
    },
    {
      id: 7,
      title: "Pragmatic Programming Seminar",
      event_host: "Andrew Hunt & David Thomas",
      category: "Tech & Programming",
      rating: 4.8,
      total_spaces: 25,
      available_spaces: 3,
      description:
        "A seminar focused on improving your coding skills and adopting pragmatic approaches to software development.",
      cover: "https://live.staticflickr.com/3434/3251868894_c44d919bd5_z.jpg",
      summary:
        "Learn from industry experts how to become a better programmer with practical tips and real-world examples.",
    },
    {
      id: 8,
      title: "Money Mindset Mastery",
      event_host: "Morgan Housel",
      category: "Finance & Business",
      rating: 4.8,
      total_spaces: 10,
      available_spaces: 5,
      description:
        "Explore the psychology behind financial decision-making and develop a healthier money mindset.",
      cover: "https://live.staticflickr.com/2884/12888589973_b071bd32de.jpg",
      summary:
        "Understand the unique behaviors and thought patterns that shape financial success in this interactive session.",
    },
  ];
  