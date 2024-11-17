export const VOCABULARY = {
    types: {
        JPTOEN: 'Japanese to English',
        ENTOJP: 'English to Japanese'
    },
    chapters: {
        IN: 'Introduction',
        CH1: 'Chapter 1',
        COU: 'Country',
        PEO: 'People',
        LAN: 'Language',
        FM: 'Family',
        DM: 'Demonstratives',
        INT1: 'Interrogatives 1',
        CH1ADD: 'Chapter 1 Additionals',
        CH2: 'Chapter 2',
        LOC: 'Locatives',
        CH3: 'Chapter 3',
        CNT: 'Counting',
        CH4: 'Chapter 4',
        // CH5: 'Chapter 5',
        SGL: 'Section Guidelines',
        CH11: 'Chapter 11',
        CH11VPF: 'Chapter 11 Verb Potential Formal',
        CH11VPI: 'Chapter 11 Verb Potential Informal',
        CH12: 'Chapter 12',
        CH13: 'Chapter 13',
        CH14: 'Chapter 14',
        CH15: 'Chapter 15',
    },
    values: {
        IN: {
            JP: [
                'いち', 'に', 'さん', ['し', 'よん'], 'ご', 'ろく', ['しち', 'なな'], 'はち', 'きゅう', 'じゅう',
                'おはようございます', 'こんにちは', 'こんばんは', 'おやすみなさい', 'じゃまた', 'じゃまたあした', 'さようなら', 'どうも ありがとう ございます', 'すみません', 'しつれいします',
                'わかりますか？', 'はい', 'わかります', 'いいえ', 'わかりません', 'はじめましょう', 'おわりましょう', 'やすみましょう', 'よみましょう', 'ききましょう', 'かきましょう', 
                'もう いちど おねがいします', ['はい つぎ', 'つぎ'], 'みてください', 'きいてください', 'かいてください', 'よんでください', 'しつもん が ありますか？',
            ],
            EN: [
                'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
                'good morning', ['good day', 'hello', 'good afternoon'], 'good evening', ['goodnight', 'good night'],
                'see you', 'see you tomorrow', ['goodbye', 'good bye', 'farewell'], 'thank you very much',
                ['i am sorry', 'i\'m sorry', 'sorry', 'excuse me'], 'excuse me',
                'do you understand?', 'yes', 'i understand', 'no', ['i do not understand', 'i don\'t understand'],
                ['let us start', 'let\'s start'], ['let us finish', 'let\'s finish'], ['let us take a break', 'let\'s take a break'],
                ['let us read', 'let\'s read'], ['let us listen', 'let\'s listen'], ['let us write', 'let\'s write'],
                ['again, please', 'one more, please'], 'next',
                'please look', 'please listen', 'please write', 'please read',
                'do you have questions?',
            ],
            ROMAJI: [
                'ichi', 'ni', 'san', ['shi', 'yon'], 'go', 'roku', ['shichi', 'nana'], 'hachi', 'kyuu', 'juu',
                'ohayougozaimasu', 'konnichiwa', 'konbanwa', 'oyasuminasai', 'jamata', 'jamataashita', 'sayounara', 'doumo arigatou gozaimasu', 'sumimasen', 'shitsureishimasu',
                'wakarimasuka?', 'hai', 'wakarimasu', 'iie', 'wakarimasen', 'hajimemashou', 'owarimashou', 'yasumimashou', 'yomimashou', 'kikimashou', 'kakimashou',
                'mou ichido onegaishimasu', ['hai tsugi', 'tsugi'], 'mitekudasai', 'kiitekudasai', 'kaitekudasai', 'yondekudasai', 'shitsumon ga arimasuka?'
            ]
        },
        CH1: {
            JP: [
                'わたし', 'あなた', ['かいしゃいん', 'しゃいん'], 'しゃちょう', 'ぶちょう', 'かちょう', 'おとこ', 'おんな', 'せんせい', 'がくせい', 'にほんじん', 'アメリカじん', 'フィリピンじん',
                ['みんな', 'みなさん'], 'ともだち', ['ひと', 'かた'], 'かぞく', 'エンジニア', 'けんしゅうせい', '～さん', '～せんせい', 
                'かいしゃ', 'オフィス', 'がっこう', 'だいがく', ['うち', 'いえ'], 'へや', 'ちゅうしゃじょう', 'おてあらい',
                'コンピューター', 'パソコン', 'カメラ', 'ノート', 'スリッパ', 'くるま', 'ほん', 'くに', 'ことば', 'なまえ'
            ],
            EN: [
                'i', 'you', ['company employee', 'employee'], 
                ['company president', 'president'], 'department head', ['section head', 'supervisor', 'manager'],
                ['male', 'man'], ['female', 'woman'], 'teacher', 'student', 
                ['japanese person', 'japanese'], ['american person', 'american'], ['filipino person', 'filipino'],
                'everyone', 'friend', 'person', 'family', 'engineer', 'trainee', ['mr.', 'miss', 'ms.', 'mrs.'], ['teacher', 'doctor'], 
                'company', 'office', 'school', 'university', 'house', 'room', 'parking lot', ['washroom', 'wash room', 'comfort room', 'toilet room'],
                'computer', ['personal computer', 'laptop'], 'camera', 'note', ['slippers', 'slipper'], 'car', 'book', ['country', 'land'], ['language', 'word'], 'name',
            ],
            ROMAJI: [
                'watashi', 'anata', ['kaishain', 'shain'], 'shachou', 'buchou', 'kachou', 'otoko', 'onna', 'sensei', 'gakusei', 'nihonjin', 'amerikajin', 'firipinjin', 
                ['minna', 'minasan'], 'tomodachi', ['hito', 'kata'], 'kazoku', 'enjinia', 'kenshuusei', '~san', '~sensei',
                'kaisha', 'ofisu', 'gakkou', 'daigaku', ['uchi', 'ie'], 'heya', 'chuushajou', 'otearai', 
                'konpyu-ta', 'pasokon', 'kamera', 'no-to', 'surippa', 'kuruma', 'hon', 'kuni', 'kotoba', 'namae',
            ]
        },
        COU: {
            JP: [
                'にほん', 'アメリカ', 'ちゅうごく', 'ドイツ', 'かんこく', 'フィリピン',
            ],
            EN: [
                'japan', 'america', 'china', 'germany', 'korea', 'philippines',
            ],
            ROMAJI: [
                'nihon', 'amerika', 'chuugoku', 'doitsu', 'kankoku', 'firipin',
            ],
        },
        PEO: {
            JP: [
                'にほんじん', 'アメリカじん', 'ちゅうごくじん', 'ドイツじん', 'かんこくじん', 'フィリピンじん',
            ],
            EN: [
                'japanese person', 'american person', 'chinese person', 'german person', 'korean person', 'filipino person',
            ],
            ROMAJI: [
                'nihonjin', 'amerikajin', 'chuugokujin', 'doitsujin', 'kankokujin', 'firipinjin',
            ],
        },
        LAN: {
            JP: [
                'にほんご', 'えいご', 'ちゅうごくご', 'ドイツご', 'かんこくご', 'フィリピンご',
            ],
            EN: [
                'japanese language', 'english language', 'chinese language', 'german language', 'korean language', 'filipino language',
            ],
            ROMAJI: [
                'nihongo', 'eigo', 'chuugokugo', 'doitsugo', 'kankokugo', 'firipingo',
            ],
        },
        FM: {
            JP: [
                'かぞく', 'ちち', 'はは', 'あに', 'あね', 'おとうと', 'いもうと', 'そふ', 'そぼ', ['しゅじん', 'おっと'], ['かない', 'つま'], 
                'ごーかぞく', 'おとうさん', 'おかあさん', 'おにいさん', 'おねえさん', 'おとうとさん', 'いもうとさん', 'おじいさん', 'おばあさん', 'ごーしゅじん', 'おくさん', 
            ],
            EN: [
                ['one\'s family', 'family'], 'my father', 'my mother', 'my older brother', 'my older sister', 
                'my younger brother', 'my younger sister', 'my grandfather', 'my grandmother', 'my husband', 'my wife',
                'another person\'s family', 'your father', 'your mother', 'your older brother', 'your older sister', 
                'your younger brother', 'your younger sister', 'your grandfather', 'your grandmother', 'your husband', 'your wife',
            ],
            ROMAJI: [
                'kazoku', 'chichi', 'haha', 'ani', 'ane', 'otouto', 'imouto', 'sofu', 'sobo', ['shujin', 'otto'], ['kanai', 'tsuma'], 
                'go-kazoku', 'otousan', 'okaasan', 'oniisan', 'oneesan', 'otoutosan', 'imoutosan', 'ojiisan', 'obaasan', 'go-shujin', 'okusan', 
            ],
        },
        DM: {
            JP: [
                'この', 'その', 'あの', 'どの', 'これ', 'それ', 'あれ', 'どれ', 'ここ', 'そこ', 'あそこ', 'どこ', 'こちら', 'そちら', 'あちら', 'どちら'
            ],
            EN: [
                'this noun', 'that noun', 'that noun (over there)', 'which noun', 'this', 'that', 'that (over there)', 'which', 
                'here', 'there', 'there (over there)', 'where', 'this way', 'that way', 'that way (over there)', 'which way',
            ],
            ROMAJI: [
                'kono', 'sono', 'ano', 'dono', 'kore', 'sore', 'are', 'dore', 'koko', 'soko', 'asoko', 'doko', 'kochira', 'sochira', 'achira', 'dochira'
            ],
        },
        INT1: {
            JP: [
                'どの', 'どれ', 'どこ', 'どちら', ['どなた', 'だれ'], ['どなた の', 'だれ の'], ['なん', 'なに'], 'なんの',
            ],
            EN: [
                'which noun', 'which', 'where', 'which way', 'who', 'whose', 'what', 'what kind of',
            ],
            ROMAJI: [
                'dono', 'dore', 'doko', 'dochira', ['donata', 'dare'], ['donata no', 'dare no'], ['nan', 'nani'], 'nanno',
            ],
        },
        CH1ADD: {
            JP: [
                'ぶ', 'ほんしゃ', 'ソフトウェア かいはつ', 'ソフトウェア エンジニア', 'ただしい もの', 'ただしくない もの', 
            ],
            EN: [
                'department', 'main office', 'software development', 'software engineer', 'correct item', 'incorrect item',
            ],
            ROMAJI: [
                'bu', 'honsha', 'sofutowea kaihatsu', 'sofutowea enjinia', 'tadashii mono', 'tadashikunai mono',
            ],
        },
        CH2: {
            JP: [
                'びょういん', 'こうじょう', 'ぎんこう', 'たいしかん', 'としょかん', 'モール', 'えいがかん', ['きっさてん', 'カフェ'], 'ほにゃ', 
                'レストラン', 'デパート', 'スーパー', 'ビル', 'かいぎしつ', 'きょうしつ', 'りょう', 'アパート', 'えき', 
                'がいこくじん', 'りょうしん', ['こども', 'こ'], 'いぬ', 'ねこ', 
                'かばん', 'けいたい (でんわ)', 'でんわ', 'かぎ', 'めがね', 'とけい', 'テーブル', 'つくえ', 'ひきだし', 'テレビ', 'いす', 'き', 'クラス', 
            ],
            EN: [
                'hospital', 'factory', 'bank', 'embassy', 'library', 'mall', 'movie house', ['coffee shop', 'cafe'], 'bookstore',
                'restaurant', 'department store', 'supermarket', 'building', 'conference room', 'classroom', 'dormitory', 'apartment', 'train station',
                'foreigner', 'parents', ['children', 'child'], 'dog', 'cat',
                'bag', ['cell phone', 'cellphone'], 'phone', 'key', 'eyeglasses', ['watch', 'clock'], 'table', 'desk', 'drawer', 'television', 'chair', 'tree', 'class',
            ],
            ROMAJI: [
                'byouin', 'koujou', 'ginkou', 'taishikan', 'toshokan', 'mo-ru', 'eigakan', ['kissaten', 'kafe'], 'honya', 
                'resutoran', 'depa-to', 'su-pa-', 'biru', 'kaigishitsu', 'kyoushitsu', 'ryou', 'apa-to', 'eki', 
                'gaikokujin', 'ryoushin', ['kodomo', 'ko'], 'inu', 'neko', 
                'kaban', 'keitai (denwa)', 'denwa', 'kagi', 'megane', 'tokei', 'te-buru', 'tsukue', 'hikidashi', 'terebi', 'isu', 'ki', 'kurasu', 
            ],
        },
        LOC: {
            JP: [
                'うえ', 'した', 'まえ', 'うしろ', 'なか', 'そと', 'あいだ', 'ひだり', 'みぎ', 'ちかく', ['となり', 'そば', 'よこ'], 'むこう', 'きた', 'みなみ', 'にし', 'ひがし',
            ],
            EN: [
                ['top', 'above'], ['below', 'under'], 'front', 'back', 'inside', 'outside', 'between', 'left', 'right', 'near', 'beside', 'across', 'north', 'south', 'west', 'east',
            ],
            ROMAJI: [
                'ue', 'shita', 'mae', 'ushiro', 'naka', 'soto', 'aida', 'hidari', 'migi', 'chikaku', ['tonari', 'soba', 'yoko'], 'mukou', 'kita', 'minami', 'nishi', 'higashi',
            ],
        },
        CH3: {
            JP: [
                'ねだん', 'やちん', 'おかね', 'えん', 'ペソ', 'ドル', 'ぜんぶ', 'おいくら', 'ぐらい', 'はたち', 'おいくつ', 'ページ', 'れい', 'まる', 'ばんごう', 'けいたいばんごう', 'でんわばんごう', 
                'えんぴつ', 'ボールペン', 'ペソ', 'てがみ', 'きっぷ', 'きって', 'きょうかしょ', 'かさ', 'びん', 'みかん', 'りんご', 'きょうだい',
            ],
            EN: [
                'price', 'rent', 'money',  'yen', 'peso', 'dollar', ['all', 'total'], 'how much?', ['about~', 'around'], '20 years old', ['how old?', 'how many?'], 'page', ['zero', 'example'], ['zero', 'circle'], 'number', ['cell phone number', 'cellphone number'], 'phone number',
                'pencil', ['ballpen', 'ball pen'], 'pen', 'letter', 'ticket', 'postal stamp', 'textbook', 'umbrella', 'bottle', 'orange', 'apple', 'siblings',
            ],
            ROMAJI: [
                'nedan', 'yachin', 'okane', 'en', 'peso', 'doru', 'zenbu', ['(o)ikura', 'oikura'], 'gurai', 'hatachi', ['(o)ikutsu', 'oikutsu'], 'pe-ji', 'rei', 'maru', 'bangou', ['keitai bangou', 'keitaibangou'], ['denwa bangou', 'denwabangou'], 
                'enpitsu', 'bo-rupen', 'pen', 'tegami', 'kippu', 'kitte', 'kyoukasho', 'kasa', 'bin', 'mikan', 'ringo', 'kyoudai',
            ],
        },
        CNT: {
            JP: [
                ['れい', 'まる', 'ゼロ'], 'いち', 'に', 'さん', ['し', 'よん'], 'ご', 'ろく', ['しち', 'なな'], 'はち', 'きゅう', 'じゅう',
                'に じゅう', 'に じゅう いち', 'に じゅう ご', 'さん じゅう', 'よん じゅう', 'ご じゅう', 'ろく じゅう', 'なな じゅう', 'はち じゅう', 'きゅう じゅう', 'きゅう じゅう きゅう',
                'ひゃく', 'に ひゃく', 'さんびゃく', 'よん ひゃく', 'ご ひゃく', 'ろっぴゃく', 'なな ひゃく', 'はっぴゃく', 'きゅう ひゃく', 'きゅう ひゃく きゅう じゅう きゅう',
                ['せん', 'いっせん'], 'に せん', 'さん ぜん', 'よん せん', 'ご せん', 'ろく せん', 'なな せん', 'はっせん', 'きゅう せん', 'きゅう せん きゅう ひゃく きゅう じゅう きゅう',
                'いち まん', 'に まん', 'さん まん', 'よん まん', 'ご まん', 'ろく まん', 'なな まん', 'はち まん', 'きゅう まん', 'じゅう まん',
                'ひゃく まん', 'に ひゃく まん', 'さんびゃく まん', 'よん ひゃく まん', 'ご ひゃく まん', 'ろっぴゃく まん', 'なな ひゃく まん', 'はっぴゃく まん', 'きゅう ひゃく まん', ['せん まん', 'いっせん まん'],
            ],
            EN: [
                'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
                'twenty', 'twenty one', 'twenty five', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'ninety nine',
                'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred', 'nine hundred ninety nine',
                'one thousand', 'two thousand', 'three thousand', 'four thousand', 'five thousand', 'six thousand', 'seven thousand', 'eight thousand', 'nine thousand', 'nine thousand nine hundred ninety nine',
                'ten thousand', 'twenty thousand', 'thirty thousand', 'fourty thousand', 'fifty thousand', 'sixty thousand', 'seventy thousand', 'eighty thousand', 'ninety thousand', 'one hundred thousand',
                'one million', 'two million', 'three million', 'four million', 'five million', 'six million', 'seven million', 'eight million', 'nine million', 'ten million',
            ],
            ROMAJI: [
                ['rei', 'maru', 'zero'], 'ichi', 'ni', 'san', ['shi', 'yon'], 'go', 'roku', ['shichi', 'nana'], 'hachi', 'kyuu', 'juu',
                'ni juu', 'ni juu ichi', 'ni juu go', 'san juu', 'yon juu', 'go juu', 'roku juu', 'nana juu', 'hachi juu', 'kyuu juu', 'kyuu juu kyuu',
                'hyaku', 'ni hyaku', 'sanbyaku', 'yon hyaku', 'go hyaku', 'roppyaku', 'nana hyaku', 'happyaku', 'kyuu hyaku', 'kyuu hyaku kyuu juu kyuu',
                ['sen', 'issen'], 'ni sen', 'san zen', 'yon sen', 'go sen', 'roku sen', 'nana sen', 'hassen', 'kyuu sen', 'kyuu sen kyuu hyaku kyuu juu kyuu',
                'ichi man', 'ni man', 'san man', 'yon man', 'go man', 'roku man', 'nana man', 'hachi man', 'kyuu man', 'juu man',
                'hyaku man', 'ni hyaku man', 'sanbyaku man', 'yon hyaku man', 'go hyaku man', 'roppyaku man', 'nana hyaku man', 'happyaku man', 'kyuu hyaku man', ['sen man', 'issen man'],
            ]
        },
        CH4: {
            JP: [
                'クラス', ['かいぎ', 'ミーティング'], 'しごと', 'しめきり', 'やすみ', 'きゅうけい', 'クリスマス', 'スポーツ たいかい', 'おたんじょうび', 'よてい', 'プロジェクト', 'パーティー', 'しあい', 'しけん', 
                'きせつ', 'はる', 'なつ', 'あき', 'ふゆ', 'つゆ', 'なつやすみ', 'しゅうまつ', 'へいじつ', 
                'こぜん', 'ごご', 'じかん', 'いつ', 'いま', ['まず', 'はじめに'], 'つぎ', 'あさ', 'ひる', ['よる', 'ばん'],
            ],
            EN: [
                'class', 'meeting', 'job', 'deadline', ['vacation', 'holiday'], ['break', 'rest'], 'christmas', 'sports festival', 'birthday', 'schedule', 'project', 'party', ['game', 'match'], 'examination', 
                'season', 'spring', 'summer', ['autumn', 'fall'], 'winter', 'rainy season', 'summer vacation', 'weekend', 'weekday', 
                ['morning', 'am'], ['afternoon', 'pm'], 'time', 'when', 'now', 'first', 'next', 'morning', ['noon', 'daytime'], 'night',
            ],
        },
        CH5: {
            JP: [

            ],
            EN: [

            ],
        },
        SGL: {
            JP: [
                'ごい', 'ぶんけい', 'れいぶん', 'れんしゅう', 'ぶんぽう けいしきの はんだん', 'ぶんの くみたて', 'ぶんしょうの ぶんぽう', 'どっかい', 'といと こたえ', 'わやくの れんしゅう', 
            ],
            EN: [
                'vocabulary', 'sentence pattern', 'sample sentence', 'exercise', 'selecting grammar form', 'sentence composition', 'text grammar', 'reading comprehension', 'question and answer', 'english to japanese translation', 
            ],
            ROMAJI: [
                'goi', 'bunkei', 'reibun', 'renshuu', 'bunpou keishikino handan', 'bunno kimitate', 'bunshouno bunpou', 'dokkai', 'toito kotae', 'wayakuno renshuu', 
            ]
        },
        CH11: {
            JP: [
                'はな', 'さくら', 'すうがく', 'ピアノ', 'ギター', 
                'しお', 'さとう', 'しょうゆ', 'ジャム',  'サラダ',  'ぶどう',  'たまご',  'やさい',  'にく',  'とりにく',  'ぶたにく',  'ぎゅうにく',  
                'からい',  'あまい',  'にがい',  'すっぱい',  'しょっぱい',  
                'すき', 'きらい',  'じょうず',  'へた',  'ほしい',  
                'ある',  'いる',  'できる',  'わかる',  'きこえる',  'みえる',  'なる',  
                'すこし',  'たくさん',  'おおぜい', 'おおい', 
                'せいかつ', 'ようじ', 'おと', 'こえ',
                'かぜ', 'にもつ', 'ひきます',
                'システムこうがく', 'ほんしゃ', 'してん',
                'バンドのメンバー', 'スポーツキャンプ', 'せんしゅ', 'いいおもいで',
            ],
            EN: [
                'flower', 'sakura', 'mathematics', 'piano', 'guitar', 
                'salt', 'sugar', 'soy sauce', 'jam',  'salad',  'grapes',  'egg',  'vegetables',  'meat',  'chicken meat',  'pork',  'beef',  
                'spicy',  'sweet',  'bitter',  'sour',  'salty',  
                ['like', 'love'], ['dislike', 'hate'],  'good at',  'poor at',  'want',  
                'have',  'need',  'can do',  'understand',  'can hear',  'can see',  'become',  
                ['a little', 'few'],  'many',  'many people', 'many things', 
                'lifestyle', 'tasks', 'sound', 'voice',
                'cold', 'luggage', 'play instrument',
                'system engineering', ['main company', 'main office'], 'branch',
                'band member', 'sports camp', 'player', 'good memories',
            ],
            ROMAJI: [
                'hana', 'sakura', 'suugaku', 'piano', 'gita-', 
                'shio', 'satou', 'shouyu', 'jamu',  'sarada',  'budou',  'tamago',  'yasai',  'niku',  'toriniku',  'butaniku',  'gyuuniku',  
                'karai',  'amai',  'nigai',  'suppai',  'shoppai',  
                'suki', 'kirai',  'jouzu',  'heta',  'hoshii',  
                'aru',  'iru',  'dekiru',  'wakaru',  'kikoeru',  'mieru',  'naru',  
                'sukoshi',  'takusan',  'oosei', 'ooi', 
                'seikatsu', 'youji', 'oto', 'koe',
                'kaze', 'nimotsu', 'hikimasu',
                'shisutemukougaku', 'honsha', 'shiten',
                'bandonomenba-', 'supo-tsukyanpu', 'senshu', 'iiomoide',
            ]
        },
        CH11VPF: {
            JP: [
                'あそべます', 'よめます', 'およげます', 'はなせます', 'きけます', 'あえます', 'まてます', 'すわれます', 'いけます', 'かえれます',
                'たべられます', 'みられます',
                'できます', 'こられます',
                'ひけます', 'そうじできます', 'おぼえられます', 'もてます', 'はたらけます', 'おわれます', 'よめます', 'すえます', 'もどれます', 'しつもんできます',
                'みえます', 'きこえます',
            ],
            EN: [
                ['can play', 'can go out'], 'can read', 'can swim', 'can talk', 'can listen', 'can meet', 'can wait', 'can sit down', 'can go', 'can go home',
                'can eat', 'can watch',
                'can do', 'can come',
                'can play instrument', 'can clean', ['can remember', 'can memorize'], ['can hold', 'can carry'], 'can work', 'can finish', 'can read', 'can smoke', ['can return', 'can go back'], ['can ask', 'can question'],
                'can see (line of vision)', 'can hear (line of hearing)',
            ],
            ROMAJI: [
                'asobemasu', 'yomemasu', 'oyogemasu', 'hanasemasu', 'kikemasu', 'aemasu', 'matemasu', 'suwaremasu', 'ikemasu', 'kaeremasu',
                'taberaremasu', 'miraremasu',
                'dekimasu', 'koraremasu',
                'hikemasu', 'soujidekimasu', 'oboeraremasu', 'motemasu', 'hatarakemasu', 'owaremasu', 'yomemasu', 'suemasu', 'modoremasu', 'shitsumondekimasu',
                'miemasu', 'kikoemasu',
            ]
        },
        CH11VPI: {
            JP: [
                'あそべる', 'よめる', 'およげる', 'はなせる', 'きける', 'あえる', 'まてる', 'すわれる', 'いける', 'かえれる',
                'たべられる', 'みられる',
                'できる', 'こられる',
                'ひける', 'そうじできる', 'おぼえられる', 'もてる', 'はたらける', 'おわれる', 'よめる', 'すえる', 'もどれる', 'しつもんできる',
                'みえる', 'きこえる',
            ],
            EN: [
                ['can play', 'can go out'], 'can read', 'can swim', 'can talk', 'can listen', 'can meet', 'can wait', 'can sit down', 'can go', 'can go home',
                'can eat', 'can watch',
                'can do', 'can come',
                'can play instrument', 'can clean', ['can remember', 'can memorize'], ['can hold', 'can carry'], 'can work', 'can finish', 'can read', 'can smoke', ['can return', 'can go back'], ['can ask', 'can question'],
                'can see (line of vision)', 'can hear (line of hearing)',
            ],
            ROMAJI: [
                'asoberu', 'yomeru', 'oyogeru', 'hanaseru', 'kikeru', 'aeru', 'materu', 'suwareru', 'ikeru', 'kaereru',
                'taberareru', 'mirareru',
                'dekiru', 'korareru',
                'hikeru', 'soujidekiru', 'oboerareru', 'moteru', 'hatarakeru', 'owareru', 'yomeru', 'sueru', 'modoreru', 'shitsumondekiru',
                'mieru', 'kikoeru',
            ]
        },
        CH12: {
            JP: [
                'あたま', 'かお', ['かみのけ', 'かみ'], 'め', 'はな', 'みみ', 'くち', 'は', 'くび', 'て', 'ゆび', 'つめ', 'からだ', 'おなか', 'あし', 'せい',
                'びょうき', 'ねつ', 'かぜ', 'かぜぐすり',
                'けしゴム', 'じしょ', 'ちず',
                'かりる', 'かす', 'かえす', 'はらう', 'だれか', 'だれも', 'なにか', 'なにも',
                'いたい', 'だるい',
                'わすれる', 'けっこう', 'かた', 'ざんねんですね',
                'あさねぼう', 'しんぱいする', 'おきゃくさん', 'さいご', 'クラスにちこくする', 'スタッフ', 'つく',
            ],
            EN: [
                'head', 'face', 'hair', 'eyes', 'nose', 'ears', 'mouth', 'teeth', 'neck', 'hands', 'finger', 'fingernails', 'body', 'stomach', ['feet', 'leg'], 'height',
                ['sickness', 'illness'], 'fever', ['cold', 'flu'], 'cold medicine',
                'eraser', 'dictionary', 'map',
                'borrow', 'lend', 'return', 'pay', 'somebody', 'nobody', 'something', 'nothing',
                'painful', 'sluggish',
                'forget', ['it is okay', 'no problem'], 'shoulder', ['that is too bad', 'regrettable'],
                'oversleep', 'worry', 'customer', 'last', 'late at class', 'staff', 'arrive',
            ],
            ROMAJI: [
                'atama', 'kao', ['kaminoke', 'kami'], 'me', 'hana', 'mimi', 'kuchi', 'ha', 'kubi', 'te', 'yubi', 'tsume', 'karada', 'onaka', 'ashi', 'sei',
                'byouki', 'netsu', 'kaze', 'kazegusuri',
                'keshigomu', 'jisho', 'chizu',
                'kariru', 'kasu', 'kaesu', 'harau', 'dareka', 'daremo', 'nanika', 'nanimo',
                'itai', 'darui',
                'wasureru', 'kekkou', 'kata', 'zannendesune',
                'asanebou', 'shinpaisuru', 'okyakusan', 'saigo', 'kurasunichikokusuru', 'sutaffu', 'tsuku',
            ]
        },
        CH13: {
            JP: [
                'ホテル',  'シャワー', 'おふろ', 'かびん', 'ドア', 'まど', 'はこ', 'はがき', 'ふうとう', 'わすれもの', 
                'すむ', 'とまる', 'つく', 'つとめる', 'のる', 'あう', 'おく', 'はいる', 'みがく', 'あびる', '(おふろに)はいる', 'のぼる', 'いれる', 
                'おくる', 'とる', 'かんがえる', 'りゅうがく(する)', 'しつもん(する)', 'うるさい', 'さき(に)',
                'まがる', 'ホラー', 'それでは', 'そうしましょう', 'わすれる', '～かな', 'もってくる', 'でも', 'いそぐ',
            ],
            EN: [
                'hotel',  'shower', 'bathtub', 'vase', 'door', 'window', 'box', 'post card', 'envelope', 'lost item', 
                ['live', 'reside'], 'stay', 'arrive', 'work (for)', 'ride', 'meet', ['put', 'place'], 'enter', 'brush', 'take a shower', 'take a bath', 'climb', ['insert', 'put in'], 
                'send', 'take', 'think about', 'studying abroad', ['ask', 'question'], 'noisy', 'ahead',
                'turn', 'horror', 'well then', 'let\'s do it', 'forget', 'i wonder', 'bring', 'but', 'hurry',
            ],
            ROMAJI: [
                'hoteru',  'shawa-', 'ofuro', 'kabin', 'doa', 'mado', 'hako', 'hagaki', 'fuutou', 'wasuremono', 
                'sumu', 'tomaru', 'tsuku', 'tsutomeru', 'noru', 'au', 'oku', 'hairu', 'migaku', 'abiru', '(ofuroni)hairu', 'noboru', 'ireru', 
                'okuru', 'toru', 'kangaeru', 'ryuugaku(suru)', 'shitsumon(suru)', 'urusai', 'saki(ni)',
                'magaru', 'hora-', 'soredeha', 'soushimashou', 'wasureru', '~kana', 'mottekuru', 'demo', 'isugu',
            ]
        },
        CH14: {
            JP: [
                'ふく', 'ようふく', 'シャツ', 'Yシャツ', 'せびろ', 'セーター', 'コート', 'オーバー', 'うわぎ', 'したぎ', ['ズボン', 'パンツ'], 'スカート',
                'スリッパ', 'くつ', 'くつした',
                'ぼうし', 'ネクタイ', 'ハンカチ', 'ベルト', 'ポケット', 'サングラス', 'イヤリング', 'ネックレス', 'ゆびわ',        
                'きる', 'はく', 'かぶる', '(めがねを)かける', '(ネクタイを)しめる', '(ベルトを)しめる', 'ぬぐ', 'はずす', 
                'きもの', 'ゆかた', 'いらっしゃいます', 'おひさしぶりです', 'なるほど', 'がんばってください', 'がんばります',
                'おわり', 'すずしい', 'もらう', 'うけるつもりです',
            ],
            EN: [
                'clothes', 'western style clothes', 'shirt', 'white shirt', 'suit', 'sweater', 'coat', 'overcoat', 'jacket', 'underwear', 'pants', 'skirt',
                'slippers', 'shoes', 'socks', 
                'hat', 'necktie', 'handkerchief', 'belt', 'pocket', 'sunglass', 'earrings', 'necklace', 'ring',        
                'wear (upper garment)', 'wear (lower garment)', 'wear (hat)', 'wear (glasses)', 'wear (necktie)', 'wear (belt)', 'take off (clothes)', 'remove', 
                'kimono', 'yukata', 'be there', 'long time no see', 'i see', 'please do your best', 'i will do my best',
                'end', 'cool', 'receive', 'take an examination',
            ],
            ROMAJI: [
                'fuku', 'youfuku', 'shatsu', 'yshatsu', 'sebiru', 'se-ta-', 'ko-to', 'o-ba-', 'uwagi', 'shitagi', ['zubon', 'pantsu'], 'suka-to',
                'surippa', 'kutsu', 'kutsushita',
                'boushi', 'nekutai', 'hankachi', 'beruto', 'poketto', 'sangurasu', 'iyaringu', 'nekkuresu', 'yubiwa',        
                'kiru', 'haku', 'kaburu', '(meganewo)kakeru', '(nekutaiwo)shimeru', '(berutowo)shimeru', 'nugu', 'hazusu', 
                'kimono', 'yukata', 'irasshaimasu', 'ohisashiburidesu', 'naruhodo', 'ganbattekudasai', 'ganbarimasu',
                'owari', 'suzushii', 'morau', 'ukerutsumoridesu',
            ]
        },
        CH15: {
            JP: [
                'でんき', 'でんきせいひん', 'エアコン', 'ストーブ', 'れいぞうこ', 
                'ほんだな', 'さくぶん', 'かみ', 'マンガ', 'え', 
                'あがる', 'さがる', 'わたす', 'みせる', 'きる', 'けす', 'ちがう', 'えらぶ', 'きめる', 'わすれる', 'おどる', 'ひく', 'そつぎょうする', 
                'さいきん', 'さいご', 'だけ', 'しか(～ない)', 'はんぶん',
                'たのしみましょう', '今年のはじめ', 'あたらしいこと', 'まなぶ', 'さんかする', 'しょるいを せいりする',
            ],
            EN: [
                ['electricity', 'light'], 'electronic goods', 'air-conditioner', ['stove', 'heater'], 'refrigerator', 
                'bookshelf', ['essay', 'composition'], 'paper', 'manga', 'painting', 
                ['rise', 'go up'], ['fall', 'go down'], 'handover', 'show', 'cut', ['erase', 'turn off'], ['differ', 'wrong'], 'choose', 'decide', 'forget', 'dance', 'play instruments', 'graduate', 
                'recently', 'last', 'only', 'only', 'half',
                'let\'s have fun', 'beginning of the year', 'new things', 'learn', 'participate', 'organize documents',
            ],
            ROMAJI: [
                'denki', 'denkiseihin', 'eakon', 'suto-bu', 'reizouko', 
                'hondana', 'sakubun', 'kami', 'manga', 'e', 
                'agaru', 'sagaru', 'watasu', 'miseru', 'kiru', 'kesu', 'chigau', 'erabu', 'kimeru', 'wasureru', 'odoru', 'hiku', 'sotsugyousuru', 
                'saikin', 'saigo', 'dake', 'shika(~nai)', 'hanbun',
                'tanoshimimashou', 'kotoshinohajime', 'atarashiikoto', 'manabu', 'sankasuru', 'shoruiwoseirisuru',
            ]
        },
    }
}