import { useEffect, useState } from "react";
import PercentBtn from "./PercentBtn";

const MainPanel = () =>
{
  const [customBill, setCustomBill] = useState<string>("");
  const bill: number = Number(customBill);

  const [customTip, setCustomTip] = useState<string>("");
  const [tipPercent, setTipPercent] = useState<number>(0);

  const [customPeople, setCustomPeople] = useState<string>("");
  const numOfPeople: number = Number(customPeople);

  const percentArr: number[] = [ 5, 10, 15, 25, 50 ];

  const [tipPerPerson, setTipPerPerson] = useState<string>("0.00");
  const [totalPerPerson, setTotalPerPerson] = useState<string>("0.00");

  const reset = () =>
  {
    setCustomBill("");
    setTipPercent(0);
    setCustomTip("");
    setCustomPeople("");
    setTipPerPerson("0.00");
    setTotalPerPerson("0.00");
  }

  useEffect(() =>
  {
    if ( bill && tipPercent && numOfPeople != 0 )
    {
      const tipPer = ((Math.round(bill * ( (tipPercent/100) / numOfPeople ) * 100)) / 100).toFixed(2);
      const totalPer = ((Math.round(bill * ( (tipPercent/100) / numOfPeople ) * 100)) / 100 + ( bill / numOfPeople )).toFixed(2);

      setTipPerPerson( tipPer.toString() );
      setTotalPerPerson( totalPer.toString() );
    }else
    {
      console.log( "Value Cannot be Zero" );
    }
  },[bill, tipPercent, numOfPeople])

  return (
    <div className="flex justify-center">
        <div className="bg-white w-[920px] h-[480px] max-[1010px]:h-[790px] flex justify-between rounded-[20px] max-[590px]:w-[375px] max-[1010px]:w-[483px] max-[1010px]:flex-col">

            <div className="flex flex-col justify-between h-[100%] pl-[50px] max-[1010px]:pr-[50px] max-[590px]:pl-[32px] max-[590px]:pr-[32px] py-[50px] max-[1010px]:py-[0px] max-[1010px]:pt-[38px]">

              {/* Bill Section Start */}
              <div>
                <div className="flex justify-between max-[590px]:w-[310px]">
                  <h2 className="text-[#70787A] pb-[6px]">Bill</h2>
                  <h2 className={`text-[#B9826E] ${ bill == 0 ? "" : "hidden" }`}>Can't be zero</h2>
                </div>
                <div className="grid justify-between w-[380px] max-[590px]:w-[310px] h-[45px] bg-[#F3F8FB] rounded-[5px]">
                  <div className="flex items-center row-start-1 col-start-1 col-end-2 col-span-2">
                    <img className="h-[15px] ml-[15px]" src="./images/icon-dollar.svg" alt="dollar sign" />
                  </div>
                  <div className="flex items-center row-start-1 col-start-1 col-end-5 col-span-5">
                    <input
                      onChange={ (event) => { setCustomBill(event.target.value); } }
                      className={`text-[22px] text-right mr-[15px] placeholder:text-[#27C0AC] w-[380px] max-[590px]:w-[310px] h-[45px] rounded-[5px] focus:outline-[#4FA99D] hover:cursor-pointer focus:placeholder:text-[#F3F8FB] ${ bill == 0 ? "outline-[#B9826E] outline-[2px] focus:outline-[#B9826E]" : "" }`}
                      type="number"
                      placeholder="0"
                      value={ customBill }
                      min={0}
                    />
                  </div>
                </div>
              </div>
              {/* Bill Section End */}

              {/* Tip Section Start */}
              <div>
                <div className="pb-[14px]">
                  <h2 className="text-[#70787A]">Select Tip %</h2>
                </div>
                <div className="grid grid-cols-3 max-[590px]:grid-cols-2 gap-[14px] justify-start">
                  {
                    percentArr.map( (percentage, index) =>
                      (
                        <div key={index}>
                          <PercentBtn setTipPercent={setTipPercent} percent={percentage} tipPercent={tipPercent} setCustomTip={setCustomTip} customTip={customTip} />
                        </div>
                      )
                    )
                  }
                  <div>
                    <input
                      onChange={ (event) => { setTipPercent(Number(event.target.value)); setCustomTip(event.target.value); } }
                      className="text-[22px] bg-[#F3F8FB] w-[115px] max-[590px]:w-[145px] h-[45px] rounded-[5px] text-right placeholder:text-[#527A7A] placeholder:text-center placeholder:pl-[10px] focus:outline-[#4FA99D] hover:cursor-pointer focus:placeholder:text-[#F3F8FB]"
                      type="number"
                      placeholder="Custom"
                      value={ customTip }
                      min={0}
                    />
                  </div>
                </div>
              </div>
              {/* Tip Section End */}

              {/* Number of People Start */}
              <div>
                <div className="flex justify-between max-[590px]:w-[310px]">
                  <h2 className="text-[#70787A] pb-[6px]">Number of People</h2>
                  <h2 className={`text-[#B9826E] ${ numOfPeople == 0 ? "" : "hidden" }`}>Can't be zero</h2>
                </div>
                <div className="grid justify-between w-[380px] max-[590px]:w-[310px] h-[45px] bg-[#F3F8FB] rounded-[5px]">
                  <div className="flex items-center row-start-1 col-start-1 col-end-2 col-span-2">
                    <img className="h-[15px] ml-[15px]" src="./images/icon-person.svg" alt="person icon" />
                  </div>
                  <div className="flex items-center row-start-1 col-start-1 col-end-5 col-span-5">
                    <input
                      onChange={ (event) => setCustomPeople(event.target.value) }
                      className={`text-[22px] text-right mr-[15px] placeholder:text-[#27C0AC] w-[380px] max-[590px]:w-[310px] h-[45px] rounded-[5px] focus:outline-[#4FA99D] hover:cursor-pointer focus:placeholder:text-[#F3F8FB] ${ numOfPeople == 0 ? "outline-[#B9826E] outline-[2px] focus:outline-[#B9826E]" : "" }`}
                      type="number"
                      placeholder="0"
                      value={ customPeople }
                      min={0}
                    />
                  </div>
                </div>
              </div>
              {/* Number of People End */}

            </div>

            {/* Summary Section Start */}
            <div className="pr-[30px] max-[1010px]:pr-[0px] py-[30px] max-[1010px]:flex max-[1010px]:justify-center">
              <div className="text-white bg-[#00474B] w-[415px] max-[590px]:w-[325px] h-[100%] max-[590px]:h-[255px] flex items-center flex-col justify-between rounded-[15px] py-[40px] max-[590px]:py-[23px]">

                <div className="w-[100%] px-[40px] max-[590px]:px-[23px] grid gap-[30px] max-[590px]:gap-[10px]">

                  <div className="flex justify-between">
                    <div className="flex flex-col justify-center">
                      <h2 className="text-[15px]">Tip Amount</h2>
                      <h2 className="text-[#7FA0A5] text-[12px]">/ person</h2>
                    </div>
                    <div className="flex items-center">
                      <h2 className="text-[#27C0AC] text-[45px] max-[590px]:text-[40px] overflow-y-auto w-[210px] text-right">${tipPerPerson}</h2>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <div className="flex flex-col justify-center">
                      <h2 className="text-[15px]">Total</h2>
                      <h2 className="text-[#7FA0A5] text-[12px]">/ person</h2>
                    </div>
                    <div className="flex items-center">
                      <h2 className="text-[#27C0AC] text-[45px] max-[590px]:text-[40px] overflow-y-auto w-[210px] text-right">${totalPerPerson}</h2>
                    </div>
                  </div>

                </div>

                <div className="w-[100%] px-[40px] max-[590px]:px-[23px]">
                  <button
                    onClick={reset}
                    className="text-[#035C62] text-[20px] bg-[#0D686D] w-[100%] h-[45px] rounded-[5px] hover:cursor-pointer hover:bg-[#9FE8DF] hover:text-[#00474B]">RESET
                  </button>
                </div>

              </div>
            </div>
            {/* Summary Section End */}

        </div>
    </div>
  )
}

export default MainPanel