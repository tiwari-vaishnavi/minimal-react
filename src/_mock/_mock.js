import { sub } from 'date-fns';


import {
  _id,
  _ages,
  _prices,
  _ratings,
  _percents,
} from './assets';

// ----------------------------------------------------------------------

export const _mock = {
  id: (index) => _id[index],
  time: (index) => sub(new Date(), { days: index, hours: index }),
  // Text

  number: {
    percent: (index) => _percents[index],
    rating: (index) => _ratings[index],
    age: (index) => _ages[index],
    price: (index) => _prices[index],
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
