import React from 'react';

interface {{pascalcase name}}Props {
  /** Sample prop description */
  dummyProp?: string;
}

export const {{pascalcase name}} = (props: {{pascalcase name}}Props) => {
  return (
    <p>{{pascalcase name}} Component - {props.dummyProp}</p>
  )
};

{{pascalcase name}}.defaultProps = {
  dummyProp: 'My dummy prop default value'
}

