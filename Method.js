//băm dữ liệu từ file keyword
//băm dữ liệu đầu vào
//đối chiếu kiểm tra dữ liệu
//phân loại xử lý dữ liệu
class Method{
    constructor(text){
        this.text = text;
        this.score = 10; //thang điểm đánh giá
        this.arr1 = new Array(); //chứa dữ liệu được băm từ file keyword
        this.arr2 = new Map(); 
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
    
    //băm dữ liệu đầu vào
    HashInputData() {
        var vntk = require("vntk");
        var tokenizer = vntk.wordTokenizer();
        if(this.text != null){
            this.arr2 = tokenizer.tag(this.text.toUpperCase());
            return this.arr2;
        }
    }
    //đổi chiếu kiểm tra dữ liệu    
    CheckWord() {
        const i=0,j = 0;
        if(this.arr2.has("muốn"),toUpperCase()){
            do{
                if(this.arr2[i] == this.arr1[j]){
                    this.arr3.push(this.arr2[i]);
                }
                j++;
            }
            while(i < this.arr2.length);
            return this.arr3;
        }
    }
    //trả kết quả từ việc đối chiếu
    Result(){
        if(this.arr3 != null){
            return false;
        }
        return true;
    }
}
var text = "Hôm nay là một ngày đẹp trời. Tôi thích đi dạo trên đường phố Hồ Chí Minh và ngắm nhìn những tòa nhà cao tầng, những công viên xanh mát và những người dân thân thiện. Tôi cũng thích thưởng thức những món ăn ngon của Việt Nam, như phở, bánh mì, bún bò Huế và cà phê sữa đá. Tôi cảm thấy hạnh phúc khi được sống ở đây.";
var demo = new Method(text);
var result = demo.HashInputData();
result.forEach(element => {
    console.log(element);
})