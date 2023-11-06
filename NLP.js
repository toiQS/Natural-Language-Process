var {PythonShell} = require('python-shell');
var text = "Dưới bầu trời xanh biếc của ngày hôm nay, tôi lang thang trong công viên rộn rã tiếng cười của trẻ nhỏ. Ánh nắng mặt trời mùa hè len lỏi qua tán cây xanh mướt, tạo ra những đám ánh sáng lung linh trên mặt đất. Không gian này đầy sự yên bình, cho tôi cảm giác như đang trốn chạy khỏi nhịp sống hối hả của thế giới ngoài kia.";
const options = {
    pythonPath: 'python3', // Đường dẫn đến phiên bản Python của bạn
    scriptPath: '', // Đường dẫn tới script Python nếu cần
    args: [text], // Đối số đầu vào cho script Python
  };
  PythonShell.runString(
    `
  import spacy
  nlp = spacy.load("en_core_web_sm")
  text = sys.argv[1]
  doc = nlp(text)
  
  for token in doc:
      print(token.text, token.lemma_, token.pos_, token.dep_)
    `,
    options,
    function (err, results) {
      if (err) throw err;
  
      // Kết quả phân tích cú pháp
      console.log(results.join('\n'));
  
      // Đảm bảo bạn xử lý kết quả phân tích cú pháp ở đây
    }
  );