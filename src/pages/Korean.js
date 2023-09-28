import { useState } from "react";
import styled from "styled-components";
import {Routes, Route, Link, useNavigate} from 'react-router-dom';
import Blog from "../blog/Blog";
import Youtube from "../youtube/Youtube";
import Router from "../router/Routerzip"

const Filterbox = styled.div`

    width: 983px;
    height: 140px;
    border: 1px solid #B3B3B3;
    border-radius: 5px;
    margin: 0px auto;
    padding-bottom: 30px;
    display: flex;
    flex-direction: row;

    .filterall{
        display: flex;
        flex-direction: row;
        align-content: center;
    }

    .filter-group {
        display: flex;
        flex-direction: column;
        gap: 28px;
        justify-content: flex-start;
        text-align: left;
        margin: 67px 40px;
        white-space: nowrap;
    }

`
const Recipebox=styled.div`
    .recipeblock{
        display: flex;
        align-content: center;
        margin-left: 150px;
        margin-top:50px;

    }
    .recipeimage{
        width:160px;
        height:160px;
        
    }
    .recipetext{
        margin-left: 20px;
        text-align: left;
    }
    .line{
        border: 1px solid #E6E6E6;
        flex: auto; 
        margin-top:100px;
    }
    .design{
        margin-left: 600px;
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


function Korean(){
    const names=[
        {   id:1,
            bloger:'하우매니',
            recipename:'ooo',
            postname:'ooo',
            profil:require('../images/Rectangle 204.png'),
            thumbnail:require('../images/Rectangle 206.png'),
            linkurl:'https://www.naver.com/',
            parts:['재료1','재료2','양배추 큰 잎 5장', '당근1/3', '애호박1/3', '두부1/2', '소금', '후추', '참기름']
        },
        {   id:2,
            bloger:'하우매니',
            recipename:'룰루랄라',
            postname:'무야호',
            profil:require('../images/Rectangle 204.png'),
            thumbnail:require('../images/Rectangle 206.png'),
            linkurl:'https://www.naver.com/',
            parts:['재료1','재료2','양배추 큰 잎 5장', '당근1/3', '애호박1/3', '두부1/2', '소금', '후추', '참기름']
        },
        {   id:3,
            bloger:'하우매니',
            recipename:'룰루랄라',
            postname:'무야호',
            profil:require('../images/Rectangle 204.png'),
            thumbnail:require('../images/Rectangle 206.png'),
            linkurl:'https://www.naver.com/',
            parts:['재료1','재료2','양배추 큰 잎 5장', '당근1/3', '애호박1/3', '두부1/2', '소금', '후추', '참기름']
        },
        {   id:4,
            bloger:'하우매니',
            recipename:'룰루랄라',
            postname:'무야호',
            profil:require('../images/Rectangle 204.png'),
            thumbnail:require('../images/Rectangle 206.png'),
            linkurl:'https://www.naver.com/',
            parts:['재료1','재료2','양배추 큰 잎 5장', '당근1/3', '애호박1/3', '두부1/2', '소금', '후추', '참기름']
        },
        {   id:5,
            bloger:'하우매니',
            recipename:'룰루랄라',
            postname:'무야호',
            profil:require('../images/Rectangle 204.png'),
            thumbnail:require('../images/Rectangle 206.png'),
            linkurl:'https://www.naver.com/',
            parts:['재료1','재료2','양배추 큰 잎 5장', '당근1/3', '애호박1/3', '두부1/2', '소금', '후추', '참기름']
        },
        {   id:6,
            bloger:'하우매니',
            recipename:'룰루랄라',
            postname:'무야호',
            profil:require('../images/Rectangle 204.png'),
            thumbnail:require('../images/Rectangle 206.png'),
            linkurl:'https://www.naver.com/',
            parts:['재료1','재료2','양배추 큰 잎 5장', '당근1/3', '애호박1/3', '두부1/2', '소금', '후추', '참기름']
        },
        {   id:7,
            bloger:'하우매니',
            recipename:'룰루랄라',
            postname:'무야호',
            profil:require('../images/Rectangle 204.png'),
            thumbnail:require('../images/Rectangle 206.png'),
            linkurl:'https://www.naver.com/',
            parts:['재료1','재료2','양배추 큰 잎 5장', '당근1/3', '애호박1/3', '두부1/2', '소금', '후추', '참기름']
        }
    ];
    
    //검색결과 갯수
    const [search,setsearch]=useState();
    const searchNumber = (lenthnumber) => {
        setsearch(lenthnumber);
    }
    //찜하기 버튼
    const [isWishadd, setIsWishAdd] = useState();
    const wishAddHandler = () => {
        setIsWishAdd(!isWishadd);
    }
    //페이지 이동을 위한
    const navigate=useNavigate();

    const handleButtonClick=(path)=>{
        navigate(path);
    };

    return(
        <div>
            <p style={{fontSize: '30px',fontWeight:'bold'}}>필터 적용하기</p> 
            <Filterbox>
                <div>
                    <button style={{
                        textAlign:'center',
                        display:'flex',
                        alignItems:'center',
                        marginLeft:'100px',
                        marginTop:'67px',
                        marginBottom:'67px',
                        border:'none',
                        backgroundColor:'transparent',
                        fontSize:'16px',
                        textDecoration:'underline',
                        textDecorationColor:'#009F50',
                        textDecorationThickness:'2px',
                        fontWeight:'bold',
                        color:'#009F50'
                        }}>전체보기</button>
                </div>

                <div className='filterall'>

                    <div className="filter-group">
                        <label><input type="checkbox" />한식</label>
                        <label><input type="checkbox" />간식</label>
                    </div>

                    <div className="filter-group">
                        <label><input type="checkbox" />양식</label>
                        <label><input type="checkbox" />베이킹</label>
                    </div>

                    <div className="filter-group">
                        <label><input type="checkbox" />중식</label>
                        <label><input type="checkbox" />소스/잼/양념</label>
                    </div>

                    <div className="filter-group">
                        <label><input type="checkbox" />간편식</label>
                    </div>

                    <div className="filter-group">
                        <label><input type="checkbox" />다이어트</label>
                    </div>
                    
                </div>
            </Filterbox>

            <p style={{textAlign:'left',margin:'40px 115px'}}>검색결과N건</p>
            {   //Recipe라는 함수에 데이터 변수전달
                names.map((name,i)=>(
                    <div key={i}>
                        <Recipebox>
                            <div className="recipeblock">
                                <img className='recipeimage'src={name.profil}></img>
                                <div className="recipetext">
                                    <button onClick={() => handleButtonClick(`/recommand/${name.id}`)} style={{fontSize:'20px',border: 'none',backgroundColor:'transparent',padding:'0px'}}>{name.recipename}</button>
                                    <p style={{fontSize:'15px',color:'#999999'}}>{name.linkurl}</p>
                                </div>
                                <div className="design">
                                    <button className="heartbox" onClick={()=>wishAddHandler()}>
                                        {isWishadd===true ? <img className="heart" src={require("../images/heart (1).png")}></img> : <img className="heart" src={require("../images/heart.png")}></img>}
                                    </button>
                                </div>
                            </div>
                
                            <hr className="line"></hr>
                        </Recipebox>
                        
                    </div>
                ))
            }
            
        </div>
        
    );
 
}
export default Korean;