import { useState } from "react";
import styled from "styled-components";

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

function Recipe({recipe}){
    //찜하기 버튼
    const [isWishadd, setIsWishAdd] = useState(false);
    const wishAddHandler = () => {
        setIsWishAdd(!isWishadd);
    }
    return(
        <div>
            <Recipebox>
                <div className="recipeblock">
                    <img className='recipeimage'src={require("../images/Rectangle 205.png")}></img>
                    <div className="recipetext">
                        <p style={{textAlign:'left',fontSize:'20px'}}>{recipe.name}</p>
                        <p style={{textAlign:'left',fontSize:'15px',color:'#999999'}}>{recipe.from}</p>
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
    )
}
function Korean(){
    //레시피 검색 데이터
    const recipes=[
        {name:'레시피 제목1', from: '출처1'},
        {name:'레시피 제목2', from:'출처2'}
    ]

    //검색결과 갯수
    const [search,setsearch]=useState();
    const searchNumber = (lenthnumber) => {
        setsearch(lenthnumber);
    }

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
                recipes.map((recipe,i)=>(
                    <div>
                        <Recipe recipe={recipe} key={i}/>  
                    </div>
                ))
            }
        </div>
    );
}
export default Korean;