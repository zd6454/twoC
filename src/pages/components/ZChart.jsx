import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/plots';

const Index = (props) => {
  const {dataSource}=props
  const config = {
    data:dataSource,
    xField: 'RoundNumber',
    yField: 'Loss',
    label: {},
    width: 800,
    height:200,
    point: {
      size: 0.1,
      shape: 'diamond',
      style: {
        fill: 'white',
        stroke: '#5B8FF9',
        lineWidth: 2,
      },
    },
    yAxis: {
      label: {
        // 数值格式化为千分位
        formatter: (v) =>{
          console.log(v)
          return v
        },
      },
    },
    tooltip: {
      fields: ['RoundNumber', 'Loss','Accuracy','KS','AUC','Weights'],
      showMarkers: false,
    },
    state: {
      active: {
        style: {
          shadowBlur: 4,
          stroke: '#000',
          fill: 'red',
        },
      },
    },
    interactions: [
      {
        type: 'marker-active',
      },
    ],
  };
  return <Line {...config} />;
};
export default Index