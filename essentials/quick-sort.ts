const quickSort = (list: number[] = []): number[] => {
    if (list.length < 2) {
        return list;
    }

    const middleIndex = Math.floor((list.length - 1) / 2);
    const pivot = list[middleIndex];
    const minorList = [];
    const majorList = [];

    for (let index = 0; index < list.length; index++) {
        if (index === middleIndex) {
            continue;
        }

        const currentItem = list[index];

        if (currentItem > pivot) {
            majorList.push(currentItem);
            continue;
        }

        minorList.push(currentItem);
    }

    return [...quickSort(minorList), pivot, ...quickSort(majorList)];
}

export { quickSort };
