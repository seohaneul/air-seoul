import React from 'react'
import { styled } from 'styled-components'

export default function khaiDiv(props) {
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
                <p style={{ color: props.color }}>오늘의<br />공기질</p>
                <p>{props.stateText}</p>
                <img src={props.src} alt="state Img" />
            </SeoulAirData>
        </DataDiv>
    )
}

const DataDiv = styled.div`
        height: 80px;
        padding: 0 20px;
        box-shadow: rgba(0, 0, 0, 0.3) 1px 2px 3px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin: 0;
        border-radius: 0px;
    `
const SeoulAirData = styled.div`
        display: flex;
        align-items: center;
        >p{
            font-size: 12px;
            padding: 5px;
        }
        >img{
            width: 30px;
        }
    `
const SeoulAirDataCode = styled.div`
        >p{
            font-size: 12px;
            display: flex;
            align-items: center;
    
            img{
                width: 30px;
                margin-right: 10px;
            }
        }
        >input{
            height: 3px;
        }
    `