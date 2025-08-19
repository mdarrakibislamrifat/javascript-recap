// 6. compare two arrays by value

const hasSameElements = (a,b) => {
    return a.length===b.length && a.every((value, index) => value === b[index]);
}


