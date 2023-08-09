import React, { useEffect, useState } from 'react';
import CO from '../img/CO.png';
import O3 from '../img/O3.png';
import NO2 from '../img/NO2.png';
import PM10 from '../img/PM10.png';
import PM25 from '../img/PM25.png';
import SO2 from '../img/SO2.png';
import aver from '../img/average.png';
import GoodImg from '../img/good.png';
import SosoImg from '../img/soso.png';
import BadImg from '../img/bad.png';
import VeryBadImg from '../img/veryBad.png';
import AirDiv from '../components/airDiv';
import KhaiDiv from '../components/khaiDiv';
import Button from '../components/button';
import { styled } from 'styled-components';
import axios from 'axios';

export default function Main() {
    const dataText = ["미세먼지(PM10)", "초미세먼지(PM2.5)", "일산화탄소(CO)", "이산화질소(NO2)", "오존(O3)", "아황산가스(SO2)"];
    const dataImg = [PM10, PM25, CO, NO2, O3, SO2];
    const [dataArray, setDataArray] = useState([]);
    const [khai, setKhai] = useState(0);
    let khaiNum = 0;
    let stateText = '';
    let src = '';
    let range = 0;
    let color = '';
    let label = '';
    const result = [0, 0, 0, 0, 0, 0]

    useEffect(() => {
        axios.get("https://apis.data.go.kr/B552584/ArpltnStatsSvc/getCtprvnMesureSidoLIst?",
            {
                params:
                {
                    serviceKey: "LlEXzEgCA03AXiSnO+BH8hnziBGjJvJO3AngzN633FZxMMH6QQA7474PmAm8SfwiNChi/iOptisEAGf6WyRZ2A==",
                    returnType: 'json',
                    numOfRows: '1',
                    pageNo: '1',
                    sidoName: '서울',
                    searchCondition: 'DAILY'
                }
            })
            .then(({ data }) => {
                const array = data.response.body.items
                console.log(array)

                array.forEach((item) => {
                    const { o3Value, no2Value, pm10Value, pm25Value, coValue, so2Value, khaiValue } = item
                    // eslint-disable-next-line react-hooks/exhaustive-deps
                    khaiNum = khaiValue;
                    result[0] = Number(pm10Value);
                    result[1] = Number(pm25Value);
                    result[2] = Number(coValue);
                    result[3] = Number(no2Value);
                    result[4] = Number(o3Value);
                    result[5] = Number(so2Value);
                });
                setDataArray(result)
                setKhai(khaiNum);
            })
            .catch((err) => { console.error(err) })


    }, [])

    const textColor = () => {
        if (range === 1) {
            color = 'blue';
            stateText = '좋음';
        } else if (range === 2) {
            color = 'green';
            stateText = '보통';
        } else if (range === 3) {
            color = '#be7827';
            stateText = '나쁨';
        } else {
            color = 'red';
            stateText = '매우 나쁨';
        }
    }


    const khaiTest = () => {
        if (khai <= 50) {
            range = 1;
            src = GoodImg;
        } else if (khai <= 100) {
            range = 2;
            src = SosoImg;
        } else if (khai <= 150) {
            range = 3;
            src = BadImg;
        } else {
            range = 4;
            src = VeryBadImg;
        }
        textColor();
    }
    khaiTest();




    return (
        <>
            <MainDiv>
                <KhaiDiv
                    AirImg={aver}
                    codeName={'서울 대기질 평균'}
                    stateText={stateText}
                    color={color}
                    rangeValue={range}
                    src={src}
                />


                {dataText.map((text, index, key) => {

                    const ArrayTest = () => {
                        if (index === 0) {
                            label = 'ug/m3';
                            if (dataArray[0] <= 15) {
                                range = 1;
                            } else if (dataArray[0] <= 50) {
                                range = 2;
                            } else if (dataArray[0] <= 100) {
                                range = 3;
                            } else {
                                range = 4;
                            }
                        } else if (index === 1) {
                            label = 'ug/m3';
                            if (dataArray[1] <= 15) {
                                range = 1;
                            } else if (dataArray[1] <= 35) {
                                range = 2;
                            } else if (dataArray[1] <= 75) {
                                range = 3;
                            } else {
                                range = 4;
                            }
                        } else if (index === 2) {
                            label = 'ppm';
                            if (dataArray[2] <= 50) {
                                range = 1;
                            } else if (dataArray[2] <= 200) {
                                range = 2;
                            } else if (dataArray[2] <= 400) {
                                range = 3;
                            } else {
                                range = 4;
                            }
                        } else if (index === 3) {
                            label = 'ppm';
                            if (dataArray[3] <= 0.03) {
                                range = 1;
                            } else if (dataArray[3] <= 0.06) {
                                range = 2;
                            } else if (dataArray[3] <= 0.20) {
                                range = 3;
                            } else {
                                range = 4;
                            }
                        } else if (index === 4) {
                            label = 'ppm';
                            if (dataArray[4] <= 0.030) {
                                range = 1;
                            } else if (dataArray[4] <= 0.090) {
                                range = 2;
                            } else if (dataArray[4] <= 0.150) {
                                range = 3;
                            } else {
                                range = 4;
                            }
                        } else {
                            label = 'ppm';
                            if (dataArray[5] <= 0.02) {
                                range = 1;
                            } else if (dataArray[5] <= 0.05) {
                                range = 2;
                            } else if (dataArray[5] <= 0.15) {
                                range = 3;
                            } else {
                                range = 4;
                            }
                        }


                        textColor();

                    }


                    ArrayTest();


                    return (
                        <AirDiv
                            AirImg={dataImg[index]}
                            codeName={text}
                            seoulData={dataArray[index]}
                            key={text}
                            rangeValue={range}
                            color={color}
                            stateText={stateText}
                            label={label}
                        />
                    )

                })}
                <Button data={dataArray} pageNum={1} />
            </MainDiv>

        </>
    )
}


const MainDiv = styled.main`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`