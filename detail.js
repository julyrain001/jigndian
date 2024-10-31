// 景点数据
const spotData = {
    huangshan: {
        name: '黄山',
        image: 'https://picsum.photos/800/400',
        description: `黄山位于安徽省南部，是国家5A级旅游景区，世界文化与自然双遗产。
        
        景区特色：
        • 奇松：迎客松、送客松等闻名天下
        • 怪石：飞来石、猴子观海等形态各异
        • 云海：变幻莫测，四季各具特色
        • 温泉：历史悠久的疗养胜地
        
        最佳游玩时间：
        春季（3-5月）和秋季（9-11月）是观赏黄山的最佳季节，天气晴朗，景色宜人。`,
        tips: `游玩贴士：
        1. 建议提前查看天气，选择晴朗天气前往
        2. 准备舒适的登山鞋和保暖衣物
        3. 建议住宿山上，欣赏日出日落
        4. 旺季需提前预订酒店和缆车票`
    },
    zhangjiajie: {
        name: '张家界',
        image: 'https://picsum.photos/800/401',
        description: `张家界位于湖南省西北部，以其独特的石英砂岩峰林地貌闻名于世。
        
        景区特色：
        • 天门山：世界最长的高山客运索道
        • 袁家界：阿凡达取景地
        • 金鞭溪：溪流与峰林的完美结合
        • 天子山：云海奇观的最佳观赏地
        
        最佳游玩时间：
        4-10月是最适合游玩的季节，其中9-10月天高气爽，景色最佳。`,
        tips: `游玩贴士：
        1. 建议游玩4-5天，景区面积大
        2. 准备防雨装备，山区天气多变
        3. 建议购买通票，性价比更高
        4. 可以选择住在武陵源区，交通便利`
    },
    guilin: {
        name: '桂林',
        image: 'https://picsum.photos/800/402',
        description: `桂林市位于广西壮族自治区东北部，以喀斯特地貌闻名于世。
        
        景区特色：
        • 漓江：世界最美河流之一
        • 阳朔：十里画廊，美不胜收
        • 象鼻山：桂林市的标志性景观
        • 芦笛岩：最美溶洞之一
        
        最佳游玩时间：
        春季（3-5月）和秋季（9-11月）气候宜人，是游览的最佳时节。`,
        tips: `游玩贴士：
        1. 建议游玩4-5天，行程安排从容
        2. 漓江游船最好选择上午时段
        3. 可以选择骑行游览阳朔
        4. 建议品尝桂林米粉等特色美食`
    }
};

// 获取URL参数中的景点ID
const urlParams = new URLSearchParams(window.location.search);
const spotId = urlParams.get('spot');

// 根据景点ID显示对应内容
if (spotId && spotData[spotId]) {
    const spot = spotData[spotId];
    document.title = `${spot.name} - 美丽山水`;
    
    const detailHtml = `
        <div class="detail-header">
            <img src="${spot.image}" alt="${spot.name}">
            <h1>${spot.name}</h1>
        </div>
        <div class="detail-content">
            <div class="description">
                ${spot.description.split('\n').map(para => `<p>${para}</p>`).join('')}
            </div>
            <div class="tips">
                ${spot.tips.split('\n').map(para => `<p>${para}</p>`).join('')}
            </div>
        </div>
    `;
    
    document.getElementById('spot-detail').innerHTML = detailHtml;
} else {
    window.location.href = 'index.html';
}