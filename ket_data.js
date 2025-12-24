const KET_DATA = {
    // ================= DAY 1: People & Family =================
    1: {
        theme: "People & Family",
        
        // 1. 核心词汇 (用于游戏和闪卡)
        vocab: [
            {en: "aunt", cn: "阿姨/姑姑"}, 
            {en: "cousin", cn: "堂(表)兄弟/姐妹"}, 
            {en: "grandchild", cn: "孙子/孙女"}, 
            {en: "guest", cn: "客人"}, 
            {en: "husband", cn: "丈夫"}, 
            {en: "neighbor", cn: "邻居"}, 
            {en: "surname", cn: "姓氏"}, 
            {en: "teenager", cn: "青少年(13-19岁)"}, 
            {en: "wife", cn: "妻子"}, 
            {en: "colleague", cn: "同事"}, 
            {en: "adult", cn: "成年人"}, 
            {en: "member", cn: "成员"}
        ],

        // 2. 阅读训练 (支持点击朗读)
        reading: [
            {
                title: "Part 1: The Family Party",
                content: `Hello, my name is Sam. Today is Saturday. We have a big party at my house. There are many <span class="vocab-hl">guests</span>.
Look at the woman in the red dress. She is my <span class="vocab-hl">aunt</span>, Lisa. She is my dad's sister. The boy next to her is Mike. He is my <span class="vocab-hl">cousin</span>. Mike is 15 years old. He is a <span class="vocab-hl">teenager</span>. He likes playing basketball.
We are all happy. Every <span class="vocab-hl">member</span> of the family is here today!`,
                translation: "你好，我是萨姆。今天是周六，我家有个大派对。有很多客人。看那个穿红裙的女士，是我阿姨Lisa，爸爸的姐姐。旁边是Mike，我堂兄，15岁的青少年。他爱打篮球。大家都很快乐，家庭成员今天都到了！"
            },
            {
                title: "Part 2: My Neighbors",
                content: `I live in a nice house. I have a very good <span class="vocab-hl">neighbor</span>. His name is Mr. White. So his <span class="vocab-hl">surname</span> is White.
Mr. White lives with Mrs. White. She is his <span class="vocab-hl">wife</span>, and he is her <span class="vocab-hl">husband</span>. They are very kind. They have no children living with them now. They are both <span class="vocab-hl">adults</span>. They like gardening. I like playing with their dog.`,
                translation: "我住在一个漂亮的房子里。我有一个很好的邻居，叫怀特先生，所以他的姓氏是怀特。怀特先生和怀特太太住一起。她是他的妻子，他是她的丈夫。他们很友善。他们现在没有孩子同住，他们都是成年人。他们喜欢园艺，我喜欢和他们的狗玩。"
            }
        ],

        // 3. 听力训练 (点击小喇叭播放)
        listening: [
            {
                text: `1. "He works with my dad. He is my dad's <strong>colleague</strong>."`,
                audioText: "This is Mr. Li. He works with my dad. He is my dad's colleague.",
                translation: "这是李先生，爸爸的同事。"
            },
            {
                text: `2. "My name is Tom Brown. My <strong>surname</strong> is Brown."`,
                audioText: "My name is Tom Brown. My surname is Brown.",
                translation: "我叫Tom Brown，姓Brown。"
            },
            {
                text: `3. "My grandma loves me. I am her happy <strong>grandchild</strong>."`,
                audioText: "My grandma loves me very much. I am her happy grandchild.",
                translation: "奶奶很爱我，我是她快乐的孙子。"
            },
            {
                text: `4. "Look at this photo. This is not a child. This is an <strong>adult</strong>."`,
                audioText: "Look at this photo. This is not a child. This is an adult.",
                translation: "看这张照片。这不是孩子，这是成年人。"
            }
        ]
    },

    // ================= DAY 2 (预留位) =================
    2: {
        theme: "School & Education (Coming Soon)",
        vocab: [
            {en: "subject", cn: "科目"}, {en: "board", cn: "黑板"}
        ],
        reading: [
            {
                title: "Coming Soon",
                content: "Day 2 content will be updated tomorrow!",
                translation: "Day 2 内容明天更新！"
            }
        ],
        listening: []
    }
};