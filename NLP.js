var natural = require('natural');
class NLP{
    constructor(text){
        this.text = text;
        this.nlp = new natural.BayesClassifier();
        this.arr1 = new Array();
        this.arr2 = new Array();
        this.arr3 = new Array();
    }
    readFileNegative(path = "./data/negative.txt"){
        var fs = require('fs');
        var data = fs.readFileSync(path, 'utf8');
        var lines = data.split(';');
        lines.forEach(element => {
            this.arr1.push(element);
        })
        return this.arr1;
    }
    readFileNeutral(path = "./data/neutral.txt"){
        var fs = require('fs');
        var data = fs.readFileSync(path, 'utf8');
        var lines = data.split(';');
        lines.forEach(element => {
            this.arr2.push(element);
        })
        return this.arr2;
    }
    readFilePositive(path = "./data/positive.txt"){
        var fs = require('fs');
        var data = fs.readFileSync(path, 'utf8');
        var lines = data.split(';');
        lines.forEach(element => {
            this.arr3.push(element);
        })
        return this.arr3;
    }
    trainNegative(){
        this.arr1.forEach(element =>{
            try{
                this.nlp.addDocument(element, 'negative');
            }
            catch(err){
                console.log(err);
            }
        })
    }
}
var method = new NLP("");
console.log("text1");
var result = method.readFileNegative();
result.forEach(element => {
    console.log(element);
})
console.log("text2");
var result2 = method.readFileNeutral();
result2.forEach(element => {
    console.log(element);
})
console.log("text3");
var result3 = method.readFilePositive();
result3.forEach(element => {
    console.log(element);
})
method.trainNegative();