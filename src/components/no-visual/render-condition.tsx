
import { IRenderCondition } from '@src/types/components/no-visual/render-condition';
import { Fragment } from 'react';

const RenderCondition = ({ children, condition }: IRenderCondition) => {
  if (!condition) return <Fragment></Fragment>;

  return <Fragment>{children}</Fragment>;
}

export default RenderCondition;