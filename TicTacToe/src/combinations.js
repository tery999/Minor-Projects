export const combinations = (arr, currentSymbol) => {
    if ( // rows
        arr[0] && arr[1] && arr[2] === currentSymbol ||
        arr[3] && arr[4] && arr[5] === currentSymbol ||
        arr[6] && arr[7] && arr[8] === currentSymbol ||
        //columns
        arr[0] && arr[3] && arr[6] === currentSymbol ||
        arr[1] && arr[4] && arr[7] === currentSymbol ||
        arr[2] && arr[5] && arr[8] === currentSymbol ||
        //diagonals
        arr[0] && arr[4] && arr[8] === currentSymbol ||
        arr[2] && arr[4] && arr[6] === currentSymbol
    ) {
        return true;
    } else {
        return false;
    }
}