const findItem = (arr: any[], id: string) => {
    const item = arr.find(item => {
    return String(item.id) === id;
    });
    
    return item;
}
    


export default findItem;