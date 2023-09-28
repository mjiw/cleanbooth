import styled from "styled-components";
import {Link, useNavigate} from 'react-router-dom';
import { useEffect, useState } from "react";
const Partrecipe = styled.div`
    display: grid;
    grid-template-columns: 200px 200px 200px 200px;
    grid-template-rows: 200px 200px;
    column-gap: 44px;
    margin: 60px auto;
    justify-content: center;
    align-item: center;

    .imagebox{
        width: 180px;
        height: 180px;
        overflow: hidden;
    
    }
    
    .imagecircle{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
const Recommend = styled.div`
    display: flex;
    gap:24px;
    align-items: center;
    margin: 60px 148px;
    flex-wrap:wrap;
    justify-content: center;

    .buttongroup{
        display: flex;
        gap: 24px;
        justify-content: center;
        margin: 20px auto;
       
    }
    .buttontag{
        border: 1.5px solid #FF6534;
        border-radius: 90px;
        height: 60px;
        display: flex;
        text-align: center;
        align-items: center;
        width: fit-content;
        padding: 0px 15px;
        background: #FEEBE5;
        font-weight: bold;
        white-space: nowrap;
    }
    
    .buttontagchild{
        height: 60px;
        display: flex;
        width: fit-content;
        border: 1.5px solid #009F50;
        border-radius: 90px;
        background: #DFF5D6;
        text-align: center;
        align-items: center;
        padding: 0px 15px;
        font-weight: bold;
        white-space: nowrap;
    }

    .smallimagebox{
        width: 50px;
        height: 50px;
        border-radius: 70%;
        overflow: hidden;
        padding-right: 15px;
    }

    .smallimagecircle{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

`
const Text=styled.p`
    font-weight: bold;
    font-size: 30px;
`
const Green=styled.p`
    font-weight: bold;
    font-size: 20px;
    color: green;
    margin-top: -25px;
`


function RecipeMain(){
    const navigate=useNavigate();

    const handleButtonClick=(path)=>{
        navigate(path);
    };
    
    const [bwriter,setBwriter]=useState([]);
    const [uwriter,setUwriter]=useState([]);

    useEffect(()=>{
        fetch(`http://43.202.77.82:8080/recipe`,{method:"GET"})
        .then(res=>res.json())
        .then(data=>{
            setBwriter(data.bwriter);
            setUwriter(data.uwriter);
        })
    })

    const names=[
        {   id:1,
            bloger:'하우매니',
            recipename:'ooo',
            postname:'ooo',
            profil:require('./images/Rectangle 204.png'),
            thumbnail:require('./images/Rectangle 206.png'),
            linkurl:'https://www.naver.com/',
            parts:['재료1','재료2','양배추 큰 잎 5장', '당근1/3', '애호박1/3', '두부1/2', '소금', '후추', '참기름']
        },
        {   id:2,
            bloger:'하우매니',
            recipename:'룰루랄라',
            postname:'무야호',
            profil:require('./images/Rectangle 204.png'),
            thumbnail:require('./images/Rectangle 206.png'),
            linkurl:'https://www.naver.com/',
            parts:['재료1','재료2','양배추 큰 잎 5장', '당근1/3', '애호박1/3', '두부1/2', '소금', '후추', '참기름']
        },
        {   id:3,
            bloger:'하우매니',
            recipename:'룰루랄라',
            postname:'무야호',
            profil:require('./images/Rectangle 204.png'),
            thumbnail:require('./images/Rectangle 206.png'),
            linkurl:'https://www.naver.com/',
            parts:['재료1','재료2','양배추 큰 잎 5장', '당근1/3', '애호박1/3', '두부1/2', '소금', '후추', '참기름']
        },
        {   id:4,
            bloger:'하우매니',
            recipename:'룰루랄라',
            postname:'무야호',
            profil:require('./images/Rectangle 204.png'),
            thumbnail:require('./images/Rectangle 206.png'),
            linkurl:'https://www.naver.com/',
            parts:['재료1','재료2','양배추 큰 잎 5장', '당근1/3', '애호박1/3', '두부1/2', '소금', '후추', '참기름']
        },
        {   id:5,
            bloger:'하우매니',
            recipename:'룰루랄라',
            postname:'무야호',
            profil:require('./images/Rectangle 204.png'),
            thumbnail:require('./images/Rectangle 206.png'),
            linkurl:'https://www.naver.com/',
            parts:['재료1','재료2','양배추 큰 잎 5장', '당근1/3', '애호박1/3', '두부1/2', '소금', '후추', '참기름']
        },
        {   id:6,
            bloger:'하우매니',
            recipename:'룰루랄라',
            postname:'무야호',
            profil:require('./images/Rectangle 204.png'),
            thumbnail:require('./images/Rectangle 206.png'),
            linkurl:'https://www.naver.com/',
            parts:['재료1','재료2','양배추 큰 잎 5장', '당근1/3', '애호박1/3', '두부1/2', '소금', '후추', '참기름']
        },
        {   id:7,
            bloger:'하우매니',
            recipename:'룰루랄라',
            postname:'무야호',
            profil:require('./images/Rectangle 204.png'),
            thumbnail:require('./images/Rectangle 206.png'),
            linkurl:'https://www.naver.com/',
            parts:['재료1','재료2','양배추 큰 잎 5장', '당근1/3', '애호박1/3', '두부1/2', '소금', '후추', '참기름']
        }
    ];
    return(
        <div>

            <Text><p> 분야별 레시피 찾기</p></Text>
            <Partrecipe>
                <div className="imagebox">
                    <Link to="/k">
                        <img src={require("./images/Frame 171.png")} className="imagecircle"></img>
                    </Link>
                </div>
                <div className="imagebox">
                    <Link to='/w'>
                        <img src={require("./images/Frame 172.png")} className="imagecircle"></img>
                    </Link>
                </div>
                <div className="imagebox">
                    <Link to='/c'>
                        <img src={require("./images/Frame 173.png")} className="imagecircle"></img>
                    </Link>
                </div>
                <div className="imagebox">
                    <Link to='/simple'>
                        <img src={require("./images/Frame 174.png")} className="imagecircle"></img>
                    </Link>
                </div>
                <div className="imagebox">
                    <Link to='/diet'>
                        <img src={require("./images/Frame 178.png")} className="imagecircle"></img>
                    </Link>
                </div>
                <div className="imagebox">
                    <Link to='/snack'>
                        <img src={require("./images/Frame 177.png")} className="imagecircle"></img>
                    </Link>
                </div>
                <div className="imagebox">
                    <Link to='/baking'>
                        <img src={require("./images/Frame 176.png")} className="imagecircle"></img>
                    </Link>
                </div>
                <div className="imagebox">
                    <Link to='source'>
                        <img src={require("./images/Frame 175.png")} className="imagecircle"></img>
                    </Link>
                </div>
            </Partrecipe>

            {/* 클린 추천레시피; 블로거, 유튜버 -> 실제 데이터 전달 시 모달창으로 수정하기 */}
            <hr />
            <Text><p>클린 추천 레시피</p></Text>
            <Green><p>with 푸드 블로거</p></Green>
            <Recommend>

                {
                    names.map((name, nameid) => (

                        <div style={nameid % 5 === 0 ? { display: 'flex', flexWrap: 'wrap' } : {}}>
                            {nameid % 2 == 0 ?
                                <button onClick={() => handleButtonClick(`/blog/${name.id}`)} className="buttontagchild" key={nameid}>
                                    <div className="smallimagebox">
                                        <img src={name.profil} className="smallimagecircle"></img>
                                    </div>
                                    <p>{name.bloger}</p>
                                </button>
                                :
                                <button onClick={() => handleButtonClick(`/blog/${name.id}`)} className="buttontag" key={nameid}>
                                    <div className="smallimagebox">
                                        <img src={name.profil} className="smallimagecircle"></img>
                                    </div>
                                    <p>{name.bloger}</p>
                                </button>
                            }

                        </div>

                    ))


                }

            </Recommend>

            <hr />
            <Text><p>클린 추천 레시피</p></Text>
            <Green><p>with 유튜버</p></Green>
            <Recommend>

                {uwriter.length>0?(
                    uwriter.map((yname, ynameid) => (

                        <div style={ynameid % 5 === 0 ? { display: 'flex', flexWrap: 'wrap' } : {}}>
                            {ynameid % 2 == 0 ?
                                <button onClick={() => handleButtonClick(`/youtube/${yname.id}`)} className="buttontagchild" key={ynameid}>
                                    <div className="smallimagebox">
                                        <img src={yname.profil} className="smallimagecircle"></img>
                                    </div>
                                    <p>{yname.bloger}</p>
                                </button>
                                :
                                <button onClick={() => handleButtonClick(`/youtube/${yname.id}`)} className="buttontag" key={ynameid}>
                                    <div className="smallimagebox">
                                        <img src={yname.profil} className="smallimagecircle"></img>
                                    </div>
                                    <p>{yname.bloger}</p>
                                </button>
                            }

                        </div>

                    ))):(<p>No data available</p>)
                }

            </Recommend>
        </div>
    );
}
export default RecipeMain;