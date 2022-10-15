import React, { useCallback, useState } from 'react';
import './mainbar.css'; 
function Numberbtn(){
    
    const [res1,SetRes1]=useState('');
    const [operCheck, SetOperCheck] = useState(true);
    const [pointCheck, SetPointCheck] = useState(true);

    const getNum=(e)=>{
        SetRes1(prev=>prev+e.target.value);
        SetOperCheck(true);
    };
    const getOper=(e)=>{
        SetRes1(prev=>prev+e.target.value);
        SetOperCheck(false);
        SetPointCheck(true);
    }

    const getPoint = (e) => {
        if (res1.length === 0) {
          return;
        }
        
        if (pointCheck) {
            SetRes1(prev=> prev + e.target.value);
            SetPointCheck(false);
        }
    };

    const getResult = () => {
        let replace_str = res1.replace(/×/gi, "x").replace(/÷/gi, "/");
    
        if (isNaN(eval(replace_str))) {
          SetRes1("");
        } else if (eval(replace_str) == Infinity) {
          alert("0으로 나눌수 없습니다.");
          SetRes1("");
          return false;
        } else {
            if(eval(replace_str)<=-1) SetRes1(() => eval(replace_str).toFixed(1));
            else SetRes1(() => eval(replace_str));
        }
    };

    const delCalc = () => {
        SetPointCheck(true);
        SetOperCheck(true);
        let str = String(res1).slice(0, -1);
        SetRes1(() => str);
      };
    
    const allClear = () => {
       SetPointCheck(true);
       SetRes1(() => "");
    };

    return(
        <div className='media'>
            <div>
                <input className="Res" value={res1}/>
            </div>

            <div className="bossbox">
                <div className="box1">
                    <button className="box1_n" onClick={getOper} value='%'>%</button>
                    <button className="box1_n" onClick={getOper} value='/'>/</button>
                    <button className="box1_n" onClick={allClear} value={allClear}>C</button>
                    <button className="box1_n" onClick={delCalc} value={delCalc}>Del</button>
                </div>

                <div className="box2">
                    <button className="box2_n" onClick={getNum} value={Number(7)}>7</button>
                    <button className="box2_n" onClick={getNum} value={Number(8)}>8</button>
                    <button className="box2_n" onClick={getNum} value={Number(9)}>9</button>
                    <button className="box1_n" onClick={getOper} value='*'>x</button>
                </div>

                <div className="box3">
                    <button className="box2_n" onClick={getNum} value={Number(4)}>4</button>
                    <button className="box2_n" onClick={getNum} value={Number(5)}>5</button>
                    <button className="box2_n" onClick={getNum} value={Number(6)}>6</button>
                    <button className="box1_n" onClick={getOper} value='-'>-</button>
                </div>

                <div className="box4">
                    <button className="box2_n" onClick={getNum} value={Number(1)}>1</button>
                    <button className="box2_n" onClick={getNum} value={Number(2)}>2</button>
                    <button className="box2_n" onClick={getNum} value={Number(3)}>3</button>
                    <button className="box1_n" onClick={getOper} value='+'>+</button>
                </div>

                <div className="box5">
                    <button className="box1_n" onClick={getOper} value='-'>+/-</button>
                    <button className="box2_n" onClick={getNum} value={Number(0)}>0</button>
                    <button className="box1_n" onClick={getPoint} value='.'>.</button>
                    <button className="box4_n box__" onClick={getResult} value='='>=</button>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Numberbtn);