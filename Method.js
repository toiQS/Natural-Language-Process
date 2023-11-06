//băm dữ liệu đầu vào thành từng câu
//băm dữ liệu lần 2 thành từ có nghĩa
//băm dữ liệu từ file làm cơ sở
//text1.txt là file chứa các từ mang tính chất mong muốn, ham muốn của con người
//text2.txt là file chứa các từ mang tính chất hành động có ý nghĩa tiêu cực
//text3.txt là file chứa dữ liệu là các đối tượng bị nhắm đến
class Method{
    constructor(text){
        this.text = text;
        this.score = 10; //thang điểm đánh giá
        this.arr1 = new Array(); //chứa dữ liệu được băm từ file keyword
        this.arr2 = new Array(); 
        this.arr3 = new Array(); 
    }
    //đọc file và băm vào bảng dữ liệu
    ReadFileAndHashData(path = "keyword.txt") {
        const fs = require("fs");
        try {
            if (fs.existsSync(path)) { 
                const data = fs.readFileSync(path, "utf8");
                const words = data.split(",");
    
                words.forEach(element => {
                    this.arr1.push(element.trim().toUpperCase()); // Loại bỏ khoảng trắng thừa
                });
            } else {
                console.log("File not found: " + path);
            }
            return this.arr1;
        } catch (error) {
            console.log(error);
        }
    }
    
    //băm từng đoạn dữ liệu đầu vào
    HashInputData(){
        
        if(this.text != null){
            const miniText = this.text.split(/[.?]/);
            miniText.forEach(element => {
                this.arr2.push(element.trim().toUpperCase());
            })
            return this.arr2;
        }
        return "false";
    }
    //băm từng câu thành từng từ có nghĩa
    HashInputData2(){
        var vntk = require ("vntk");
        var tokenize = vntk.wordTokenizer();
        try{
            this.arr2.forEach(element => {
                const listWord = new Array();
                var word = tokenize(tag.element);
                word.forEach(element => {
                    word.push(element);
                });
                this.arr3.push(listWord);
            });
            return this.arr3;
        }
        catch(error){
            console.log(error);
        }
    }
}
var text = "Hôm nay là một ngày đẹp trời. Tôi thích đi dạo trên đường phố Hồ Chí Minh và ngắm nhìn những tòa nhà cao tầng, những công viên xanh mát và những người dân thân thiện. Tôi cũng thích thưởng thức những món ăn ngon của Việt Nam, như phở, bánh mì, bún bò Huế và cà phê sữa đá. Tôi cảm thấy hạnh phúc khi được sống ở đây.";
var demo = new Method(text);
var result = demo.HashInputData();
console.log(result);
var result2 = demo.HashInputData2();
result2.forEach(element => {
    console.log(element);
})