export const getPercentageDifference = (A,B) => {
    return (100 * Math.abs( (A - B) / ( (A+B)/2 ) )).toFixed(2)
}