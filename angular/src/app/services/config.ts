export const getAbpMenu: any[] = [
    {
      name: '::Menu:Home',
      path: '/home',
    },
  // menu book
  {
    name: '::Menu:BookStore',
    children: [
      {
        name: '::Menu:Books',
        key: '',
        path: '/books',
      }
    ],
  }, 
]