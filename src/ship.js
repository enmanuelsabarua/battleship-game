export default function Ship(length, hitNumber, sunk) {
    let hitAmount = hitNumber;
    let sunkState = sunk;
    
    const getLength = () => length;
    const getHitNumber = () => hitAmount;
    const getSunkState = () => sunkState;
    const setSunkState = state => sunkState = state;

    const hit = () => hitAmount++;

    const isSunk = (length, hitNumber) => {
        if (hitNumber >= length) {
            setSunkState(true);
            return true;
        }

        return false;
    }

    return {
        getLength,
        getHitNumber,
        getSunkState,
        hit,
        isSunk,
    }
}