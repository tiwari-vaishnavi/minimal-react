import { sub } from 'date-fns';


import {
  _id,
  _ages,
  _roles,
  _prices,
  _emails,
  _ratings,
  _nativeS,
  _nativeM,
  _nativeL,
  _percents,
  _booleans,
  _lastNames,
  _fullNames,
  _tourNames,
  _postTitles,
  _firstNames,
  _fullAddress,
  _phoneNumbers,
} from './assets';

// ----------------------------------------------------------------------

export const _mock = {
  id: (index) => _id[index],
  time: (index) => sub(new Date(), { days: index, hours: index }),
  boolean: (index) => _booleans[index],
  role: (index) => _roles[index],
  postTitle: (index) => _postTitles[index],
  tourName: (index) => _tourNames[index],
  // Contact
  email: (index) => _emails[index],
  phoneNumber: (index) => _phoneNumbers[index],
  fullAddress: (index) => _fullAddress[index],
  // Name
  firstName: (index) => _firstNames[index],
  lastName: (index) => _lastNames[index],
  fullName: (index) => _fullNames[index],
  // Number
  number: {
    percent: (index) => _percents[index],
    rating: (index) => _ratings[index],
    age: (index) => _ages[index],
    price: (index) => _prices[index],
    nativeS: (index) => _nativeS[index],
    nativeM: (index) => _nativeM[index],
    nativeL: (index) => _nativeL[index],
  },
  // Image
  image: {
    cover: (index) => `/assets/images/cover/cover_${index + 1}.jpg`,
    avatar: (index) => `/assets/images/avatar/avatar_${index + 1}.jpg`,
    travel: (index) => `/assets/images/travel/travel_${index + 1}.jpg`,
    company: (index) => `/assets/images/company/company_${index + 1}.png`,
    product: (index) => `/assets/images/m_product/product_${index + 1}.jpg`,
    portrait: (index) => `/assets/images/portrait/portrait_${index + 1}.jpg`,
  },
};
