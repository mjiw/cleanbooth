import styled from "styled-components";
import {Link, useNavigate} from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";

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
 
    const [writer, setWriter] = useState({
        uWriter: [],
        bWriter: []
    });

    const url = "http://43.200.208.235:8080/recipe";
  
    useEffect(()=>{
        axios
            .get(url)
            .then((res) => {
                setWriter({
                    uWriter: res.data.uWriter,
                    bWriter: res.data.bWriter
                  });
                
                console.log("성공");
            })
            .catch((Error) => {
                console.log(Error);
            }) 
    }) 

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
                    writer.bWriter.map((realdata, index) => (
                        <div style={realdata.length % 5 === 0 ? { display: 'flex', flexWrap: 'wrap' } : {}} key={index}>
                            {
                            realdata.length % 2 == 0 ?
                                <button onClick={() => handleButtonClick(`/blog/${realdata}`)} className="buttontagchild" key={index}>
                                    <div className="smallimagebox">
                                        <img className="smallimagecircle"></img>
                                    </div>
                                    <p>{realdata}</p>
                                </button>
                                :
                                <button onClick={() => handleButtonClick(`/blog/${realdata}`)} className="buttontag" key={index}>
                                    <div className="smallimagebox">
                                        <img  className="smallimagecircle"></img>
                                    </div>
                                    <p>{realdata}</p>
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
                {
                    writer.uWriter.map((realdata, index) => (
                        <div style={realdata.length % 5 === 0 ? { display: 'flex', flexWrap: 'wrap' } : {}} key={index}>
                            {
                            realdata.length % 2 == 0 ?
                                <button onClick={() => handleButtonClick(`/youtube/${realdata}`)} className="buttontagchild" key={index}>
                                    <div className="smallimagebox">
                                        <img className="smallimagecircle"></img>
                                    </div>
                                    <p>{realdata}</p>
                                </button>
                                :
                                <button onClick={() => handleButtonClick(`/youtube/${realdata}`)} className="buttontag" key={index}>
                                    <div className="smallimagebox">
                                        <img  className="smallimagecircle"></img>
                                    </div>
                                    <p>{realdata}</p>
                                </button>
                            }
                        </div>
                    //<p key={index}>{realdata}</p>
                    ))
                }

            </Recommend>
        </div>
    );
    
}
export default RecipeMain;