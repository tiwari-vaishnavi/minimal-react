import { _mock } from './_mock';
import { _tags } from './assets';

export const TOUR_DETAILS_TABS = [
  { value: 'content', label: 'Tour Content' },
  { value: 'bookers', label: 'Booker' },
];

export const TOUR_PUBLISH_OPTIONS = [
  {
    value: 'published',
    label: 'Published',
  },
  {
    value: 'draft',
    label: 'Draft',
  },
];

const BOOKER = [...Array(12)].map((_, index) => ({
  id: _mock.id(index),
  guests: index + 10,
  name: _mock.fullName(index),
  avatarUrl: _mock.image.avatar(index),
}));

export const _tours = [...Array(12)].map((_, index) => {
  const available = {
    startDate: _mock.time(index + 1),
    endDate: _mock.time(index),
  };

  const publish = index % 3 ? 'published' : 'draft';






return {
    id: _mock.id(index),
    publish,
    available,
    bookers: BOOKER,
    tags: _tags.slice(0, 5),
    createdAt: _mock.time(index),
    durations: '4 days 3 nights',
    price: _mock.number.price(index),
    priceSale: _mock.number.price(index),
    totalViews: _mock.number.nativeL(index),
    ratingNumber: _mock.number.rating(index),
  };
});
