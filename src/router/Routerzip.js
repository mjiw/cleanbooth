import {Routes, Route} from 'react-router-dom';
import RecipeMain from '../RecipeMain';

import Korean from '../pages/Korean';
import Western from '../pages/Western';
import China from '../pages/China';
import Baking from '../pages/Baking';
import Diet from '../pages/Diet';
import Simple from '../pages/Simple';
import Snack from '../pages/Snack';
import Source from '../pages/Source';
import Youtuber from "../Youtuber";
import Bloger from "../Bloger";
import Youtube from "../youtube/Youtube";


function Routerzip(){
    return(
        <div>
            <Routes>
                {/*클린레시피 메인페이지*/}
                <Route path='/' element={<RecipeMain></RecipeMain>}></Route>
                {/*레시피 눌렀을 때 연결*/}
                <Route path='/k' element={<Korean></Korean>}></Route>
                <Route path='/w' element={<Western></Western>}></Route>
                <Route path='/c' element={<China></China>}></Route>
                <Route path='/simple' element={<Simple></Simple>}></Route>

                <Route path='/diet' element={<Diet></Diet>}></Route>
                <Route path='/snack' element={<Snack></Snack>}></Route>
                <Route path='/baking' element={<Baking></Baking>}></Route>
                <Route path='/source' element={<Source></Source>}></Route>
                {/*게시물 눌렀을 때 게시물 소개 페이지 연결*/}
                <Route path='/recommand/:id' element={<Youtube></Youtube>} index></Route>
                {/*블로거, 유튜버 버튼 눌렀을 때 연결*/}
                    /*클린 추천 레시피 with 블로거 */
                <Route path="/blog/:id" element={<Bloger></Bloger>} index></Route>

                    /*클린 추천 레시피 with 유튜버 */
                <Route path="/youtube/:id" element={<Youtuber></Youtuber>} index></Route>
            </Routes>
        </div>
    );
}
export default Routerzip;
export const recipemain='/';
