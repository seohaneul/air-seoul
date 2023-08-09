import React from 'react';
import styled from 'styled-components';

export default function AirDiv(props) {
    return (
        <DataDiv className='DataDiv'>
            <SeoulAirDataCode>
                <p>
                    <span><img src={props.AirImg} alt='icon' /></span>
                    <span>{props.codeName}</span>
                </p>
                <input type="range"
                    min={0}
                    max={4}
                    value={props.rangeValue}
                    style={{ accentColor: props.color }}
                    readOnly
                />
            </SeoulAirDataCode>
            <SeoulAirData style={{ color: props.color }}>
                <p>{props.seoulData}</p>
                <p>{props.label}</p>
                <p>{props.stateText}</p>
            </SeoulAirData>
        </DataDiv>
    )
}

const DataDiv = styled.div`
    width: 96%;
    height: 80px;
    margin: 10px;
    padding: 0 20px;
    border-radius: 3px;
    box-shadow: rgba(0, 0, 0, 0.3) 1px 2px 3px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const SeoulAirData = styled.div`
display: flex;

    >p{
        font-size: 12px;
        padding: 2px;
    }
`
const SeoulAirDataCode = styled.div`
    >p{
        font-size: 11px;
        display: flex;
        align-items: center;

        img{
            width: 25px;
            margin-right: 10px;
        }
    }
    >input{
        height: 3px;
    }
`