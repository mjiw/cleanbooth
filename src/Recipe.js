import styled from "styled-components";
import {Routes, Route, Link, useNavigate} from 'react-router-dom';
import {useState} from 'react';

import Korean from './pages/Korean';
import Western from './pages/Western';
import China from './pages/China';
import Baking from './pages/Baking';
import Diet from './pages/Diet';
import Simple from './pages/Simple';
import Snack from './pages/Snack';
import Source from './pages/Source';

import Blog from "./blog/Blog";
import Blog2 from "./blog/Blog2";
import Blog3 from "./blog/Blog3";
import Blog4 from "./blog/Blog4.js";
import Blog5 from "./blog/Blog5";
import Blog6 from "./blog/Blog6";
import Blog7 from "./blog/Blog7";
import Blog8 from "./blog/Blog8";
import Blog9 from "./blog/Blog9";

import youtube1 from "./youtube/youtube1";
import youtube2 from "./youtube/youtube2";
import youtube3 from "./youtube/youtube3";
import youtube4 from "./youtube/youtube4";
import youtube5 from "./youtube/youtube5";
import youtube6 from "./youtube/youtube6";
import youtube7 from "./youtube/youtube7";
import youtube8 from "./youtube/youtube8";
import youtube9 from "./youtube/youtube9";
import { faBold } from "@fortawesome/free-solid-svg-icons";

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
    display: grid; 
    grid-template-columns: repeat(5, auto);
    column-gap: 24px;
    row-gap: 30px;
    margin: 60px 148px;


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
    
    .buttontag:nth-child(2n){
        display: flex;
        width: fit-content;
        border: 1.5px solid #009F50;
        border-radius: 90px;
        background: #DFF5D6;
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
const Blogdesign= styled.div`
    .chevron{
        width: 8px;
        height: 13px;
        margin: 17px 20px;
        display:flex;
        align-items: center;
    }
    .thumbnailimage{
        width: 740px;
        height: 332px;
        display:flex;
        justify-content: center;
        align-items: center;
        margin: 15px auto;
    }
    .usegrid{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 40px 155px;
        
    }
    .part-group{
        display: flex;
        gap: 24px;
        justify-content: center;
        margin-bottom: 24px;
    }
    .blogall{
        display: flex;
        align-content: center;
        margin: 20px 150px;
    }
    .blogimage{
        width: 44px;
        height: 36px;
        
    }
    .bloger{
        display: flex;
        align-items: center;
        margin: 0px 8px;
        border: none;
        background-color:transparent;
        padding: 0px 0px;

    }
    .videoname{
        font-weight: bold;
        display: flex;
        align-items: center;
    }
    .link{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin: 0px 240px;
        border-bottom: '2px solid black', 
        marginTop: '4px'
    }
    .heartbox{
        width: 52px;
        height: 52px;
        border: 1.5px solid #009F50;
        border-radius: 25%;
        background-color:transparent;
        display:flex;
        justify-content: center;
        align-items: center;
        margin-top: 7px;
    }
    .heart{
        width: 28px;
        height: 24px;
    }

`
const DashedText = styled.div`
    margin-bottom: 40px;
    .dash{
        border: 1px dashed #009F50;
        flex: auto;
    }
    .dashedhr{
        margin-top:200px;
        display: flex;
        align-items:center;
    }
    .txt{
        padding: 0 10px;
        font-weight: bold;
        font-size: 15pt;
    }
`
const Partgrid = styled.div`
    border: 1.5px solid #009F50;
    border-radius: 90px;
    height: 35px;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: fit-content;
    padding: 0px 24px;

`

function CleanReciepe(){
    const navigate=useNavigate();

    const handleButtonClick=(path)=>{
        navigate(path);
    };
    
    const names=[
        {   id:1,
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
            <Routes>
                <Route path='/' element={            
                <div>
                    
                    <Text><p> 분야별 레시피 찾기</p></Text>
                    <Partrecipe>
                        <div className="imagebox"> 
                            <Link to="/k">
                                <img  src={require("./images/Frame 171.png")} className="imagecircle"></img>
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
                    <hr/>
                    <Text><p>클린 추천 레시피</p></Text>
                    <Green><p>with 푸드 블로거</p></Green>

                    {
                        names.map((name,nameid)=>(
                            <div>
                                <Recommend>
                                <button onClick={()=>handleButtonClick(`/blog/${name.id}`)} className="buttontag" key={nameid}>
                                    <div className="smallimagebox">
                                        <img src={require('./images/Rectangle 204.png')} className="smallimagecircle"></img>
                                    </div>
                                    <p>{name.bloger}</p>
                                </button>
                                </Recommend>
                            </div>

                        ))
                        
                    }
                    <Recommend>
                        <button onClick={()=>handleButtonClick('/blog3')} className="buttontag">
                            <div className="smallimagebox">
                                <img src={require("./images/Rectangle 204 (2).png")} className="smallimagecircle"></img>
                            </div>
                            <p>차차</p>
                        </button>
                    </Recommend>
                    <hr/>
                    <Text><p>클린 추천 레시피</p></Text>
                    <Green><p>with 유튜버</p></Green>
                    <Recommend>
                        <button onClick={()=>handleButtonClick('/blog9')} className="buttontag">
                            <div className="smallimagebox">
                                <img src={require("./images/Rectangle 204 (8).png")} className="smallimagecircle"></img>
                            </div>
                            <p>초식 마녀</p>
                        </button>
                        <button onClick={()=>handleButtonClick('/blog9')} className="buttontag">
                            <div className="smallimagebox">
                                <img src={require("./images/Rectangle 204 (8).png")} className="smallimagecircle"></img>
                            </div>
                            <p>까망 레시피</p>
                        </button>
                        <button onClick={()=>handleButtonClick('/blog9')} className="buttontag">
                            <div className="smallimagebox">
                                <img src={require("./images/Rectangle 204 (8).png")} className="smallimagecircle"></img>
                            </div>
                            <p>준티비</p>
                        </button>
                        <button onClick={()=>handleButtonClick('/blog9')} className="buttontag">
                            <div className="smallimagebox">
                                <img src={require("./images/Rectangle 204 (8).png")} className="smallimagecircle"></img>
                            </div>
                            <p>열 개의 레시피</p>
                        </button>
                        <button onClick={()=>handleButtonClick('/blog9')} className="buttontag">
                            <div className="smallimagebox">
                                <img src={require("./images/Rectangle 204 (8).png")} className="smallimagecircle"></img>
                            </div>
                            <p>유튜버</p>
                        </button>
                        <button onClick={()=>handleButtonClick('/blog9')} className="buttontag">
                            <div className="smallimagebox">
                                <img src={require("./images/Rectangle 204 (8).png")} className="smallimagecircle"></img>
                            </div>
                            <p>유튜버</p>
                        </button>
                        <button onClick={()=>handleButtonClick('/blog9')} className="buttontag">
                            <div className="smallimagebox">
                                <img src={require("./images/Rectangle 204 (8).png")} className="smallimagecircle"></img>
                            </div>
                            <p>유튜버</p>
                        </button>
                        <button onClick={()=>handleButtonClick('/blog9')} className="buttontag">
                            <div className="smallimagebox">
                                <img src={require("./images/Rectangle 204 (8).png")} className="smallimagecircle"></img>
                            </div>
                            <p>유튜버</p>
                        </button>
                        <button onClick={()=>handleButtonClick('/blog9')} className="buttontag">
                            <div className="smallimagebox">
                                <img src={require("./images/Rectangle 204 (8).png")} className="smallimagecircle"></img>
                            </div>
                            <p>유튜버</p>
                        </button> 
                    </Recommend>
                </div>}></Route>
                    
                    /*분야별 레시피*/
                    <Route path='/k' element={<Korean></Korean>}></Route>
                    <Route path='/w' element={<Western></Western>}></Route>
                    <Route path='/c' element={<China></China>}></Route>
                    <Route path='/simple' element={<Simple></Simple>}></Route>

                    <Route path='/diet' element={<Diet></Diet>}></Route>
                    <Route path='/snack' element={<Snack></Snack>}></Route>
                    <Route path='/baking' element={<Baking></Baking>}></Route>
                    <Route path='/source' element={<Source></Source>}></Route>
                    
                    /*클린 추천 레시피 with 블로거 */
                    <Route path="/blog/:id" element={<Blog></Blog>} index></Route>
                    <Route path='/blog3' element={<Blog3></Blog3>}></Route>
                    /*클린 추천 레시피 with 유튜버 */
                    <Route path='/youtube1' element={<youtube1></youtube1>}></Route>
                    <Route path='/youtube2' element={<youtube2></youtube2>}></Route>
                    <Route path='/youtube3' element={<youtube3></youtube3>}></Route>
                    <Route path='/youtube4' element={<youtube4></youtube4>}></Route>
                    <Route path='/youtube5' element={<youtube5></youtube5>}></Route>

                    <Route path='/youtube6' element={<youtube6></youtube6>}></Route>
                    <Route path='/youtube7' element={<youtube7></youtube7>}></Route>
                    <Route path='/youtube8' element={<youtube8></youtube8>}></Route>
                    <Route path='/youtube9' element={<youtube9></youtube9>}></Route>

            </Routes>
        </div>
    
    );
}
export default CleanReciepe;