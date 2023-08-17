import styled from "styled-components";
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
const Blogdesign=styled.div`
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

function Blog2(){
    const parts=['재료1','재료2','양배추 큰 잎 5장', '당근1/3', '애호박1/3', '두부1/2', '소금', '후추', '참기름'];
    const groupedparts=[];

    for (let i = 0; i < parts.length; i += 6) {
        const group = parts.slice(i, i + 6);
        groupedparts.push(group);
    }

    return(
        <div>
            <Blogdesign>
                <DashedText>
                    <div class='dashedhr'>
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
export default Blog2;