const PercentBtn = (props: { setTipPercent: (num: number) => void, percent: number, tipPercent: number, setCustomTip: (str: string) => void, customTip: string }) =>
{
  const isActive = props.tipPercent == props.percent && props.customTip == "";

  return (
    <button
      onClick={ () => { props.setTipPercent(Number(props.percent)); props.setCustomTip(""); } }
      className={`text-[22px] ${ isActive ? "text-[#00474B]" : "text-white"} ${ isActive ? "bg-[#9FE8DF]" : "bg-[#00474B]" } w-[115px] max-[590px]:w-[148px] h-[45px] rounded-[5px] hover:cursor-pointer hover:bg-[#9FE8DF] hover:text-[#00474B]`}>{props.percent}%
    </button>
  )
}

export default PercentBtn