import { HStack } from '@chakra-ui/react';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faSolidStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons';

interface Props {
    rating: number,
    max?: number
}

function getStarsDistribution(rating: number, max: number) : {filledStars: number, halfStars: number, emptyStars: number} {
    const stars = Math.floor(rating);
    const fraction = rating - stars;
    let filledStars = stars;
    let halfStars = 0;
    if (fraction >= 0.75) {
        filledStars += 1;
    } else if (fraction >= 0.25) {
        halfStars = 1;
    }
    const emptyStars = max - filledStars - halfStars;
    return { filledStars, halfStars, emptyStars };
}

const Rater: React.FC<Props> = ({ rating, max = 5 }) => {
    const { filledStars, halfStars, emptyStars } = getStarsDistribution(rating, max);
    const starsArr = [
        ...Array(filledStars).fill(faSolidStar),
        ...Array(halfStars).fill(faStarHalfStroke),
        ...Array(emptyStars).fill(faRegularStar),
    ];
    return (
        <HStack >
            {starsArr.map(icon => (
                <FontAwesomeIcon icon={icon} color="yellow" />
            ))}
        </HStack>
    );
};

export default Rater;