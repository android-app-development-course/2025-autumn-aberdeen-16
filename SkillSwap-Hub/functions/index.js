const functions = require("firebase-functions");

// 定义 API 接口
exports.api = functions.https.onRequest((req, res) => {
    // 允许跨域请求
    res.set('Access-Control-Allow-Origin', '*');
    
    // 模拟基于 LBS 的智能匹配结果
    const nearbyData = [
        { name: "张同学 (吉他)", skill: "想学: Python", distance: "0.4km" },
        { name: "李阿姨 (面点)", skill: "想学: 智能手机使用", distance: "1.2km" },
        { name: "陈先生 (英语)", skill: "想学: 摄影", distance: "2.5km" }
    ];

    res.json({
        success: true,
        timestamp: new Date().getTime(),
        data: nearbyData
    });
});