import { BaseTextFieldProps } from '@material-ui/core';

type Content = {
  title: string;
  subTitle: string;
  input: BaseTextFieldProps;
  errors: {
    invalidEmail: string;
    empty: string;
  };
  button: {
    states: {
      initial: string;
      processing: string;
      success: string;
      failed: string;
    };
  };
};

const content: Content = {
  title: 'Become smarter in just 5 minutes',
  subTitle:
    'Get the daily email that makes reading the news actually enjoyable. Stay informed and entertained, for free.',
  input: {
    id: 'email-input',
    type: 'email',
    label: 'Email is required please',
    placeholder: 'Enter your email',
    variant: 'outlined',
  },
  errors: {
    invalidEmail: 'We require a valid email',
    empty: 'Email is required please',
  },
  button: {
    states: {
      initial: 'Submit',
      processing: 'Sending request',
      success: 'Sent successfully',
      failed: 'Failed! Try again.',
    },
  },
};

export type { Content };
export { content };
