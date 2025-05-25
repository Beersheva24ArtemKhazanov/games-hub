import { HStack } from "@chakra-ui/react";
import { type FC, useMemo, type ReactNode } from "react";
import { FaStarHalfAlt, FaStar, FaRegStar } from 'react-icons/fa'
interface Props {
  starsNumber?: number;
  maxRate?: number;
  rate: number;
}
function getStars(stars: number, isFilled: boolean): ReactNode[] {
    return Array.from({length: stars},() => isFilled ? <FaStar key={getUniqueKey()}/> :
     <FaRegStar key={getUniqueKey()}/>)
}
function getUniqueKey(): number{
 return Math.random();
}
const Rater: FC<Props> = ({ starsNumber = 5, maxRate = 5, rate }) => {
  const { filledStars, halfFilledStar, emptyStars } = useMemo(
    () => getStarsDistribution(),
    [starsNumber, maxRate, rate]
  );
  function getStarsDistribution(): {
    filledStars: number;
    halfFilledStar: boolean;
    emptyStars: number;
  } {
    const normStarsNumber= (starsNumber * rate) / maxRate;
    let totalStars = starsNumber;
    let filledStars = Math.trunc(normStarsNumber);
    let halfFilledStar = false;
    const fractionalPart = normStarsNumber - filledStars;
    if (fractionalPart > 0.75) {
      filledStars++;
    } else if (fractionalPart > 0.25) {
      halfFilledStar = true;
      totalStars--;

    }
    const emptyStars = totalStars - filledStars ;
    return { filledStars, halfFilledStar, emptyStars };
  }
  return <HStack>
    {getStars(filledStars,true)}
    {halfFilledStar && <FaStarHalfAlt></FaStarHalfAlt>}
    {getStars(emptyStars, false)}
  </HStack>;
};

export default Rater;