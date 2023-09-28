import styled from "styled-components";
import {Routes, Route, Link, useNavigate} from 'react-router-dom';
import {useState} from 'react';
import { useParams } from "react-router-dom";

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

function Part({part}){
    return(
        <div>
            <Partgrid>
                <div>{part}</div>
            </Partgrid>
        </div>
    )
}

function Youtube(){
    const names=[
        {   id:1,
            bloger:'ooo',
            recipename:'ooo',
            postname:'무야호',
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
        }
    ];
    
    //useParams 사용
    const {id} = useParams();
    console.log(id);

    //문자를 숫자로 변환
    const blogData = names[parseInt(id)-1];
    console.log(blogData);
    
    // 한 행에 6개씩 나눠서 저장하는 배열
    const groupedparts=[];
    
    for (let j = 0; j < blogData.parts.length; j += 6) {
        const group = blogData.parts.slice(j, j + 6);
        groupedparts.push(group);
    }
    
    //찜하기 버튼
    const [isWishadd, setIsWishAdd] = useState(false);
    const wishAddHandler = () => {
        setIsWishAdd(!isWishadd);
    }
    

    return(
        <div>
            <Blogdesign>
                <div className="blogall">
                    <p style={{fontSize:'14px'}}>클린 추천 레시피 with 푸드 유튜버</p>
                    <img  className="chevron" src={require("../images/chevron.right.png")}></img>
                    <span style={{fontSize:'14px', color:'#009F50',display: 'flex', alignItems: 'center'}}>{blogData.bloger}</span>
                </div>

                <div className="blogall">
                    <p style={{fontSize: '48px',fontWeight:'bold', marginTop:'0px',marginBottom:'0px',marginRight:'12px'}}>{blogData.recipename}</p>
                    <button className="heartbox" onClick={()=>wishAddHandler()}>
                        {isWishadd===true ? <img className="heart" src={require("../images/heart (1).png")}></img> : <img className="heart" src={require("../images/heart.png")}></img>}
                    </button>
                </div>

                <div className="blogall">
                    <img className='blogimage'src={require("../images/image 9.png")}></img>
                    <button className="bloger">{blogData.bloger}</button>
                    <span className="videoname">{blogData.postname}</span>
                    
                </div>
                <img className="thumbnailimage" src={blogData.thumbnail}></img>
                <div className="link">
                    <label>
                        <a style={{margin:'8px'}}>더 자세히 보기</a>
                        <img style={{width:'14px',height:'14px'}}src={require("../images/arrow.up.right.png")}alt="화살표 이미지"></img>
                        <div style={{ width: '100%', borderBottom: '2px solid black', marginTop: '4px' }}></div>
         
                    </label>
                </div>
                <DashedText>
                <div className='dashedhr'>
                    <hr className='dash'/>
                    <span class='txt'>재료</span>
                    <hr className='dash'/>
                </div>
                </DashedText>
                <div className="usegrid">
                    {
                        groupedparts.map((group, groupIndex) => (
                            <div key={groupIndex} className="part-group">
                              {group.map((part, partIndex) => (
                                <Part part={part} key={partIndex} />
                              ))}
                            </div>
                        ))
                            
                    }
                </div>
            </Blogdesign>
        </div>
    );
}
export default Youtube;