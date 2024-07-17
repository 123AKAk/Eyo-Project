import { Header } from '../../components/Header';
import './style.scss';
import data02 from './data02.json';

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    PieChart,
    Pie,
    Cell,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import { HomeCard } from '../../components/HomeCard';
import { HomeCardAlt } from '../../components/HomeCardAlt';

export const Dashboard = () => {
    return (
        <div
            className="overflow-x-hidden"
            style={{
                height: '100%',
            }}
        >
            <Header />
            <div className="p-4">
                <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-4 front-row">
                    <HomeCardAlt />
                    <HomeCard />
                    <HomeCard />
                    <HomeCard />
                    <div
                        className="card bg-[#fff] flex flex-row items-center justify-center col-span-2 md:col-span-2"
                        style={{ zIndex: 999 }}
                    >
                        <div className="flex flex-col items-center">
                            <PieChart width={250} height={180}>
                                <Pie
                                    data={data02}
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={40}
                                    outerRadius={80}
                                    fill="#82ca9d"
                                    label={false}
                                >
                                    {data02.map((entry: any, index: number) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={entry.colors}
                                        />
                                    ))}
                                </Pie>
                            </PieChart>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
