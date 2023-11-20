class demoHash{
    constructor(text){
        this.text = text;
        this.array = new Array();
    }
    //chia dữ liệu đầu vào thành cách câu
    splitDataInToSentencer(){
        this.array = this.text.split(".");
        return this.array;
    }
    //băm dữ liệu sau khi chia động với cách câu
    splitData(){
        
        this.array.forEach(element => {
            var arr2 = new Map();
            arr2 = element.split(" ");
            this.array.push(arr2);

        });
        return this.array;
    }
}
var result = new demoHash("Đây không chỉ là một . khoảnh khắc đẹp của thiên nhiên, mà còn là một trạng thái tâm hồn, nơi mà con người và tự nhiên hòa quyện vào một đồng nhất hòa bình. Chắc chắn, những khoảnh khắc như thế. này là những khoảnh khắc đáng trân trọng, những kh.oảnh khắc mà tâm hồn ta thường mong đợi để tìm lại chính mình giữa cuộc sống hối hả.");
var demo = result.splitDataInToSentencer();
demo.forEach(element => {
    console.log(element);
})
console.log("result 2: ");
console.log(result.splitData());