import { GenderProps } from '../services';

export const GenderFormatter = (data: GenderProps): string => {
  switch (data) {
    case 'male':
      return 'Male';

    case 'female':
      return 'Female';

    case 'n/a':
      return 'N/A';

    default:
      return 'Unknown';
  }
};

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
