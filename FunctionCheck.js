
class FunctionCheck{
    constructor(){
        brain = require('brain.js');
        this.net = new brain.recurrent.LSTM();
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
}