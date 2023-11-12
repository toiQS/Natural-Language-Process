class NLP{
    constructor(){
        var natural = require('natural');
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
            this.nlp.addDocument(element, 'negative');
        })
        try{
            this.nlp.train();
        }
        catch(err){
            console.log(err);
        }
    }
    trainNeutral(){
        this.arr2.forEach(element =>{
            this.nlp.addDocument(element, 'neutral');
        })
        try{
            this.nlp.train();
        }
        catch(err){
            console.log(err);
        }
    }
    trainPositive(){
        this.arr3.forEach(element =>{
            this.nlp.addDocument(element, 'positive');
        })
        try{
            this.nlp.train();
        }
        catch(err){
            console.log(err);
        }
    }
    classify(text){
        return this.nlp.classify(text);
    }
}
var method = new NLP();
method.readFileNegative();
method.readFileNeutral();
method.readFilePositive();
method.trainNegative();
method.trainNeutral();
method.trainPositive();
console.log(method.classify('Tôi rất quan tâm đến chính trị.'));