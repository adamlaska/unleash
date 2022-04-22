import { IFeatureMetricsRaw } from 'interfaces/featureToggle';
import { ChartData } from 'chart.js';
import { ILocationSettings } from 'hooks/useLocationSettings';
import theme from 'themes/mainTheme';
import 'chartjs-adapter-date-fns';

interface IPoint {
    x: string;
    y: number;
}

export const createChartData = (
    metrics: IFeatureMetricsRaw[],
    locationSettings: ILocationSettings
): ChartData<'line', IPoint[], string> => {
    const requestsSeries = {
        label: 'total requests',
        borderColor: theme.palette.primary.light,
        backgroundColor: theme.palette.primary.light,
        data: createChartPoints(metrics, locationSettings, m => m.yes + m.no),
        elements: {
            point: {
                radius: 6,
                pointStyle: 'circle',
            },
            line: {
                borderDash: [8, 4],
            },
        },
    };

    const yesSeries = {
        label: 'exposed',
        borderColor: theme.palette.success.light,
        backgroundColor: theme.palette.success.light,
        data: createChartPoints(metrics, locationSettings, m => m.yes),
        elements: {
            point: {
                radius: 6,
                pointStyle: 'triangle',
            },
        },
    };

    const noSeries = {
        label: 'not exposed',
        borderColor: theme.palette.error.light,
        backgroundColor: theme.palette.error.light,
        data: createChartPoints(metrics, locationSettings, m => m.no),
        elements: {
            point: {
                radius: 6,
                pointStyle: 'triangle',
                pointRotation: 180,
            },
        },
    };

    return { datasets: [yesSeries, noSeries, requestsSeries] };
};

const createChartPoints = (
    metrics: IFeatureMetricsRaw[],
    locationSettings: ILocationSettings,
    y: (m: IFeatureMetricsRaw) => number
): IPoint[] => {
    return metrics.map(metric => ({
        x: metric.timestamp,
        y: y(metric),
    }));
};
