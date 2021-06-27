const repeatedWord = require('../repeated-word/hashmap-repeated-word.js')

describe('repeatedWord function', ()=>{
    it('Should  find the first word to occur more than once in a string',()=>{
        let string1 ="Once upon a time, there was a brave princess who...";
        let string2="It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only..."
        let string3="It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York..."
        expect(repeatedWord(string1)).toEqual('a');
        expect(repeatedWord(string2)).toEqual('it');
        expect(repeatedWord(string3)).toEqual('summer');

    })

    it('it should raise an exception if the type of the inserted argument is not string',()=>{
        let input = [1,2,3]
        expect(repeatedWord(input)).toEqual("only string accepted");
    })
    
})