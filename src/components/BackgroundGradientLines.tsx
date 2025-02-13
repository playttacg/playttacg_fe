import GradientLineLeft from '../assets/images/gradient-line-left.png'
import GradientLineRight from '../assets/images/gradient-line-right.png'

const BackgroundGradientLines = () => {
  return (
    <div className="w-screen fixed flex justify-between top-0 -z-10">
      <img src={GradientLineLeft} alt="" />
      <img src={GradientLineRight} alt="" className="hidden md:block" />
    </div>
  )
}

export default BackgroundGradientLines;
