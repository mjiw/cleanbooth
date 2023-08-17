import React from 'react';
import styled from 'styled-components';

const Filterbox = styled.div`

    width: 983px;
    height: 140px;
    border: 1px solid #B3B3B3;
    margin: 30px auto;
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

`;

const YourComponent = () => {
  return (
    <div>
        <Filterbox>
            <div>
                <span style={{textAlign:'center',display:'flex',alignItems:'center',marginLeft:'150px',margin:'67px 67px'}}>전체보기</span>
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
                    <label><input type="checkbox" />베이킹</label>
                </div>
                
            </div>
        </Filterbox>
    </div>
  );
};

export default YourComponent;
