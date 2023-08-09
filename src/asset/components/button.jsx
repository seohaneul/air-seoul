import React from 'react'
import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'

export default function Button(props) {
    let data = props.data
    const navigate = useNavigate();
    const GoToChart = () => {
        navigate("/Chart", { state: data });
    }
    const GoToMain = () => {
        navigate("/");
    }

    if (props.pageNum === 1) {
        return (
            <LinkButton onClick={GoToChart} >
                차트로 이동
            </LinkButton>
        )
    } else {
        return (
            <LinkButton onClick={GoToMain} >
                메인페이지로 이동
            </LinkButton>
        )
    }

}

const LinkButton = styled.button`
    width: 150px;
    height: 50px;
    border: 0;
    border-radius: 10px;
    background: #779cec;
    color: #fff;
    margin: 0 auto;
`