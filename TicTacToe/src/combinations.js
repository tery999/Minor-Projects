export const combinations = (arr, currentSymbol) => {
    debugger;
    if (checkByThree(arr[0], arr[1], arr[2]) ||
        checkByThree(arr[3], arr[4], arr[5]) ||
        checkByThree(arr[6], arr[7], arr[8])) {
        return true;
    }

    if (checkByThree(arr[0], arr[3], arr[6]) ||
        checkByThree(arr[1], arr[4], arr[7]) ||
        checkByThree(arr[2], arr[5], arr[8])) {
        return true;
    }

    if (checkByThree(arr[0], arr[4], arr[8]) ||
        checkByThree(arr[2], arr[4], arr[6])) {
        return true;
    }

    return false;

    function checkByThree(first, second, third) {
        if (first === currentSymbol &&
            second === currentSymbol &&
            third === currentSymbol
        ) {
            return true
        } else {
            false
        }
    }
}
