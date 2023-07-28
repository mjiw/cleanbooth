import React,{useState, useEffect} from "react";
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';


const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15px;
`;


const Stars = styled.div`
    display: flex;
    padding-top: 5px;

    & svg {
    color: gray;
    cursor: pointer;
    }

    :hover svg {
    color: #fcc419;
    }

    & svg:hover ~ svg {
    color: gray;
    }

    .yellowStar {
    color: orange;
    }
`;

const DashedText = styled.div`
    .review {
        display: flex;
        flex-basis: 100%;
        align-items: center;
        margin: 8px 0px;
    }
    
    .review:before {
        content: "";
        flex-grow: 1;
        height: 1px;
        font-size: 0px;
        line-height: 0px;
        margin: 0 16px;
        border: 2px dashed green;
    }

    .review:after {
        content: "";
        flex-grow: 1;
        height: 1px;
        font-size: 0px;
        line-height: 0px;
        border: 2px dashed green;
        margin: 0 16px;
    }  
`;
const ScoreBox = styled.div`
    .score {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-left: 10%;
        margin-right: 10%;
        margin-bottom: 40px;
        border: 2px solid gray;
        border-radius: 20px;
        width: 80%;
        height: 200px;
    }
    
    .score:after{
        content:"";
        diplay: block;
        clear: both;
    }

    .starscore {
        margin: 5%;
        display: flex;
        align-items: center;
        text-align: center;
        float:left;
    }
    
    
`;

const Template = styled.div`
    .good {
        text-align: center;
        width: 35%;
        height: 200px;
        padding: 2rem;
        float: left;
        clear: left;
        margin-left: 10%;
        display: flex;
        border: 2px solid gray;
        border-radius: 20px;
    }

    .bad {
        text-align: center;
        width: 35%;
        height: 200px;
        padding: 2rem;
        float: right;
        clear: right;
        margin-right: 10%;
        display: flex;
        border: 2px solid gray;
        border-radius: 20px;
    }
`;

const Write=styled.div`
    .writeblock{
        display: block;
        margin-left: 10%;
        margin-right: 10%;
        margin-top: 40px;
        margin-bottom: 40px;
        width: 80%;
        float: right;
        text-align: right;
    }
    .writereview{
        margin-right:4px;
    }
    .writerecently{
        
        border-right:2px solid gray;
        margin-right:4px;
        margin-left:4px;
    }
    .writelong{
        border-right:2px solid gray;
        margin-right:4px;
    }
    .writemyreview{
        
    }
`;
const ARRAY = [0, 1, 2, 3, 4];

const ModalDesign=styled.div`
    .modal{
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.6); 
    }
    .reviewmodal{
        width: 480px;
        height: 621px;
        background-color: white;
        position: relative;
        box-sizing: border-box;
        margin: 50px auto;
        padding: 20px;
        background: #fff;  
    }
`
function Modal(){
    let [modal,setModal]=useState(false); //UI의 현재 상태 저장 //state에 따라 UI가 어떻게 보일지 작성
    return(
        <ModalDesign>
        <div className="modal">
            <div className="reviewmodal">
                <h2>제품 후기 작성하기</h2>
                <button className="close" onClick={()=>setModal(false)}>X 닫기</button>
                <h3>좋았던 점</h3><span className="explain">20자 이상</span>
                <div>
                    <h4 className="boxexplain">내용을 입력하세요</h4>
                </div>
                <h3>아쉬웠던 점</h3><span>20자 이상</span>
                <div>
                <h4 className="boxexplain">내용을 입력하세요</h4>
                </div>
                <h3>사진</h3><span className="explain">제품과 무관한 사진일 경우 후기 수정 요청을 드리거나, 관리자에 의해 삭제될 수 있습니다.</span>
                
            </div>
            {
                modal === true ? <Modal/> : null
                //삼항연산자 -> 조건문 대신 사용
            }
        </div>
        </ModalDesign>
    )
}

function Info() {
    const [clicked, setClicked] = useState([false, false, false, false, false]);

    const handleStarClick = index => {
        let clickStates = [...clicked];
        for (let i = 0; i < 5; i++) {
        clickStates[i] = i <= index ? true : false;
        }
        setClicked(clickStates);
    };

    useEffect(() => {
        sendReview();
    }, [clicked]); //컨디마 컨디업

    const sendReview = () => {
        let score = clicked.filter(Boolean).length;
        // fetch('http://52.78.63.175:8000/movie', {
        //   method: 'POST',
        //   Headers: {
        //     Authroization: 'e7f59ef4b4900fe5aa839fcbe7c5ceb7',
        //   },
        //   body: JSON.stringify({
        //     movie_id:1
        //     star: score,
        //   }),
        // });
    };
    
    let [modal,setModal]=useState(false); //UI의 현재 상태 저장 //state에 따라 UI가 어떻게 보일지 작성

    return (
        <div>
            <DashedText>
                <div className="review">
                    <h2>구매후기</h2>
                </div>
            </DashedText>
            <ScoreBox>
                <div className="score">
                    <div className="starscore">
                        <Wrap>
                           <h3>별점</h3>
                            <Stars>
                                {ARRAY.map((el, idx) => {
                                    return (
                                        <FaStar
                                        key={idx}
                                        size="50"
                                        onClick={() => handleStarClick(el)}
                                        className={clicked[el] && 'yellowStar'}
                                        />
                                    );
                                })}
                            </Stars>
                        </Wrap>   
                    </div>
                    <div className="photoreview">
                        <h3>사진 후기</h3>
                    </div>
                </div>
            </ScoreBox>
            <Template>
                <div className="container">
                    <div className="row">
                        <div className="good">
                            <h3>좋았던 점</h3>
                        </div>
                        <div className="bad">
                            <h3>아쉬웠던 점</h3>
                        </div>
                    </div>
                </div>
            </Template>
            <Write>

                <div className="writeblock">
                    <span className="writereview" onClick={()=>{setModal(true)}}>
                    
                        후기 작성하기
                    </span>
                    <span className="writerecently">최신순</span>
                    <span className="writelong">오래된순</span>
                    <span className="writemyreview">내가 쓴 리뷰보기</span>
                </div>
                
            </Write>
            {
                modal === true ? <Modal/> : null
                //삼항연산자 -> 조건문 대신 사용
            }
        </div>
    );
}

export default Info;
