function countCorrectpassword(arr){
    let set = new Set();
    let correctPassWord = 0;
    arr.forEach(password => {
        let parr = password.split(' ');
        let count = parr.length;
        parr.forEach(word => {
            set.add(word);
        });
        if(set.size === count){
            correctPassWord++;
        }
        set.clear();
    });
    return correctPassWord;
}


let arr = ['aa bb cc dd', 'aa bb aa dd','bb dd cc aa'];
p = countCorrectpassword(arr);


let m = new Map();
m.set('08568748',{firstName: 'aaa', lastName: 'bbb'});
m.set('45415415',{firstName: 'ccc', lastName: 'ddd'});
m.set('95455266',{firstName: 'eee', lastName: 'fff'});
console.log(m.size);
m.forEach(s => {
    console.log(s.firstName);
});