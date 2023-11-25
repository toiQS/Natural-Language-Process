const brain = require('brain.js');

// Tạo một mạng nơ-ron Recurrent LSTM
const net = new brain.recurrent.LSTM();

// Chuẩn bị dữ liệu đào tạo
const trainingData = [
    { input: 'I feel great about the world!', output: 'positive' },
    { input: 'The world is a terrible place!', output: 'negative' },
    // Thêm các dữ liệu khác tùy ý
];

// Đào tạo mô hình với dữ liệu
net.train(trainingData, { iterations: 2000 });

// Kiểm thử mô hình với dữ liệu mới
const output = net.run('I feel terrible about the world!');
console.log(output); // Output có thể là 'negative'
