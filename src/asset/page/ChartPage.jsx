import React from 'react'
import { Chart as ChartJS, Tooltip, Legend, Filler, RadialLinearScale, PointElement, LineElement } from "chart.js";
import { Radar } from 'react-chartjs-2';
import { useLocation } from 'react-router-dom';
import Button from '../components/button';
import { styled } from 'styled-components';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export default function Chart() {
    const location = useLocation();
    const mainData = location.state;

    console.log(mainData)


    const data = {
        labels: ['미세먼지(PM10)', '초미세먼지(PM2.5)', '일산화탄소(CO)', '이산화질소(NO2)', '오존(O3)', '아황산가스(SO2)'],
        datasets: [
            {
                label: '오염물질 농도',
                data: [mainData[0], mainData[1], mainData[2], mainData[3], mainData[4], mainData[5]],
                backgroundColor: 'rgba(149, 179, 255, 0.2)',
                borderColor: '#2546b4',
                borderWidth: 1,
            },
        ],
    };
    return (
        <Main>
            <Radar data={data} />
            <DtaTable>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>미세먼지</th>
                            <th>초미세먼지</th>
                            <th>일산화탄소</th>
                            <th>이산화질소</th>
                            <th>오존</th>
                            <th>아황산가스</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{mainData[0]}</td>
                            <td>{mainData[1]}</td>
                            <td>{mainData[2]}</td>
                            <td>{mainData[3]}</td>
                            <td>{mainData[4]}</td>
                            <td>{mainData[5]}</td>
                        </tr>
                    </tbody>
                </table>
            </DtaTable>
            <Button pageNum={2} />
        </Main>
    )
}

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const DtaTable = styled.div`
    >table{
    font-size: 10px;
    width: 350px;
    line-height: 30px;
    text-align: center;
    margin: 20px;
    }
`