import styled from "styled-components";
import {Routes, Route, Link} from 'react-router-dom';
import Korean from './pages/Korean';
import Western from './pages/Western';

const Partrecipe = styled.div`
    display: grid;

    grid-template-columns: 100px 100px 100px 100px;
    grid-template-rows: 100px 100px;
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
    .smallimagebox{
        width: 150px;
        height: 150px;
        border-radius: 70%;
        overflow: hidden;
    }

    smallimagecircle{
        width: 100%;
        height: 100%;
        object-fit: cover;
}

`

function CleanReciepe(){
    return(
        <div>
            <Routes>
                    <Route path='/' element={            
                    <div>
                    <p> 분야별 레시피 찾기</p>
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

                    <Recommend>
                        <p>클린 추천 레시피</p>
                        <p>with 푸드 블로거</p>

                        <Link to=''>하우매니
                        </Link>
                        <Link to=''>지혜로운 사자</Link>
                        <Link to=''>차차</Link>
                        <Link to=''>예쁜뱝</Link>
                        <Link to=''>깡이맘</Link>

                        <Link to=''>선물같은 하루</Link>
                        <Link to=''>푸드블로거</Link>
                        <Link to=''>푸드블로거</Link>
                        <Link to=''>푸드블로거</Link>

                    

                
                        <p>클린 추천 레시피</p>
                        <p>with 유튜버</p>

                        <Link to=''>초식 마녀</Link>
                        <Link to=''>까망 레시피</Link>
                        <Link to=''>준티비</Link>
                        <Link to=''>열 개의 레시피</Link>
                        <Link to=''>유튜버</Link>

                        <Link to=''>유튜버</Link>
                        <Link to=''>유튜버</Link>
                        <Link to=''>유튜버</Link>
                        <Link to=''>유튜버</Link>

                    </Recommend>
                    </div>}></Route>
                    /*분야별 레시피*/
                    <Route path='/k' element={<Korean></Korean>}></Route>
                    <Route path='/w' element={<Western></Western>}></Route>
                    <Route path='/c' element={<Western></Western>}></Route>
                    <Route path='/simple' element={<Western></Western>}></Route>

                    <Route path='/diet' element={<Western></Western>}></Route>
                    <Route path='/snack' element={<Western></Western>}></Route>
                    <Route path='/baking' element={<Western></Western>}></Route>
                    <Route path='/source' element={<Western></Western>}></Route>
                    /*클린 추천 레시피 with 블로거 */
                    
                    /*클린 추천 레시피 with 유튜버 */


            </Routes>
        </div>
    
    );
}
export default CleanReciepe;