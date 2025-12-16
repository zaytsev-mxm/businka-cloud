import clsx from 'clsx';

import s from './Greetings.module.scss';

type Props = {
  name?: string;
};

export const Greetings = (props: Props) => {
  const { name } = props;

  const rootClassNames = clsx({
    [s.root]: true,
    [s.isKnown]: Boolean(name),
    [s.isStranger]: !name,
  });

  if (name) {
    return <div className={rootClassNames}>Hello {name}!</div>;
  } else {
    return <div className={rootClassNames}>Nice to see you, stranger!</div>;
  }
};
