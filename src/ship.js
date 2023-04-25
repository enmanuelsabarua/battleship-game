export default function Ship(id, length, hitNumber, sunk) {
    const shipId = id;
    let hitAmount = hitNumber;
    let sunkState = sunk;
    
    const getId = () => shipId;
    const getLength = () => length;
    const getHitNumber = () => hitAmount;
    const getSunkState = () => sunkState;
    const setSunkState = state => sunkState = state;

    const hit = () => hitAmount++;

    const isSunk = () => {
        if (hitAmount >= getLength()) {
            setSunkState(true);
            return true;
        }

        return false;
    }

    return {
        getId,
        getLength,
        getHitNumber,
        getSunkState,
        hit,
        isSunk,
    }
}