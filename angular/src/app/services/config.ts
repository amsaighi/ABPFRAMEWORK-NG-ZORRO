// Root from ABP Docs add 13/11/2020
// Here is what every property works as:

// path : is the absolute path of the navigation element.
// name : is the label of the navigation element. A localization key or a localization object can be passed.
// requiredPolicyv : is the permission key to access the page. See the Permission Management document
// order : is the order of the navigation element. "Administration" has an order of 100, so keep that in mind when ordering top level menu items.
// iconClassClass :  is the class of the i tag, which is placed to the left of the navigation label.
// layout defines in which layout the route will be loaded. (default: eLayoutType.empty)

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