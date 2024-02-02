import styled from "styled-components";
import {Routes, Route, Link, useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";

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
    
    .blogall{
        display: flex;
        align-content: center;
        margin: 20px 150px;
    }
    .blogimage{
        width: 44px;
        height: 36px;
        
    }
    .link{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0px 240px;
        border-bottom: '2px solid black', 
        marginTop: '4px'
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
const Recipebox=styled.div`
    .recipeblock{
        display: flex;
        align-content: center;
        justify-content: center;
        margin-top:50px;

    }
    .recipeimage{
        width:872px;
        height:200px;  
    }
   
    .line{
        border: 1px solid #E6E6E6;
        flex: auto; 
        margin-top:100px;
    }
   
    
`

function Youtuber(){
    

    const [ywriter,setYwriter]=useState(
        {
            item: {
                writer: "",
                writerIntro: "",
                writerLink: ""
            },
            recipes: [
                {
                  name: '',
                  link: '',
                }
            ]
        }
    );


    //useParams 사용
    const {id} = useParams();

    const url1 = `http://43.200.208.235:8080/recipe/youtube_writer/${id}`;
    
    useEffect(()=>{
        axios
            .get(url1)
            .then((res) => {
                setYwriter({
                    item: {
                        writer: res.data.writer,
                        writerIntro: res.data.writerIntro,
                        writerLink: res.data.writerLink
                    },
                
                    recipes: [
                        {
                          name: res.data.name,
                          link: res.data.link,
                        }
                    
                    ]
                });
                
                console.log("성공");
            })
            .catch((Error) => {
                console.log(Error);
            }) 
    }, [id]) 
    console.log(ywriter);

    /*useEffect(()=>{
        fetch(`http://43.202.77.82:8080/recipe`,{method:"GET"})
        .then(res=>res.json())
        .then(data=>{
            setYwriter(data.ywriter);
        })
    })*/

    /*
    //문자를 숫자로 변환
    const blogData = names[parseInt(id)-1];

    // 한 행에 6개씩 나눠서 저장하는 배열
    const groupedparts=[];
    
    for (let j = 0; j < blogData.parts.length; j += 6) {
        const group = blogData.parts.slice(j, j + 6);
        groupedparts.push(group);
    }
    */

    return(
        <div>
            <Blogdesign>
                <div className="blogall">
                    <p style={{fontSize:'14px'}}>클린 추천 레시피 with 푸드 유튜버</p>
                    <img  className="chevron" src={ywriter.item.writer}></img>
                    <span style={{fontSize:'14px', color:'#009F50',display: 'flex', alignItems: 'center'}}>{ywriter.item.writer}</span>
                </div>

                <div>
                    <img className="blogprofil"src={ywriter.item.writerLink}></img>
                    <p>{ywriter.item.writer}</p>
                    <p>소개글. 유튜버에 대한 소개글이 들어가는 칸.
                        유튜버에 대한 소개글이 들어가는 칸.</p>
                </div>
                
                <div className="link">
                    <label>
                        <a href={ywriter.recipes.link} target='_blank'style={{margin:'8px', textDecoration:'none', color:'black'}}>더 자세히 보기</a>
                        <img style={{width:'14px',height:'14px'}}src={require("./images/arrow.up.right.png")}alt="화살표 이미지"></img>
                        <div style={{ width: '100%', borderBottom: '2px solid black', marginTop: '4px' }}></div>
         
                    </label>
                </div>
                <DashedText>
                <div className='dashedhr'>
                    <hr className='dash'/>
                    <span class='txt'>{ywriter.recipes.name}</span>
                    <hr className='dash'/>
                </div>
                </DashedText>

                {   //Recipe라는 함수에 데이터 변수전달
                ywriter.recipes.map((recipe,i)=>(
                    <div>
                        <Recipebox>
                            <div className="recipeblock">
                                <img className='recipeimage'></img>  
                            </div>
                            <p style={{textAlign:'left',marginLeft:'14%'}}>{recipe.name}</p>
                            <hr className="line"></hr>
                        </Recipebox>
                    </div>
                ))
                }
            </Blogdesign>

        </div>
    );
}
export default Youtuber;
