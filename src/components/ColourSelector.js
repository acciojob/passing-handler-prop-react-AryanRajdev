import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props
  const { background } = config;
  return (
    <button 
    className={props.config.classname} 
    onClick={() => selectNextBackground({background: props.config.background})}
    data-testid={config.key}
    >
      {props.config.label}
    </button>
  )
}
export default ColourSelector;
