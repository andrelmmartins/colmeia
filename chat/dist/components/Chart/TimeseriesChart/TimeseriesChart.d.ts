import React from 'react';
import 'moment/locale/pt-br';
import 'chartjs-adapter-moment';
type ItemData = {
    x: number;
    y: number;
};
type TooltipItem = {
    formattedValue: string;
};
type TimeseriesChartProps = {
    data: ItemData[];
    className?: string;
    language?: string;
    labelCallback?: (tooltipItem: TooltipItem) => string;
};
declare const TimeseriesChart: React.FC<TimeseriesChartProps>;
export default TimeseriesChart;
