import React from 'react';
import PageHeader from '../components/PageHeader';

export default ({ children, wrapperClassName, ...restProps }) => (
  <div style={{ margin: '-24px -24px 0' }} className={wrapperClassName}>
    <PageHeader {...restProps} />
    {children ? <div style={{ margin: '24px 24px 0' }}>{children}</div> : null}
  </div>
);