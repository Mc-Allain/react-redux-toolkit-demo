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
        // CH2: 'Chapter 2',
        // CH3: 'Chapter 3',
        // CH4: 'Chapter 4',
        // CH5: 'Chapter 5',
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
                'かぞく', 'ちち', 'はは', 'あに', 'あね', 'おとうお', 'いもうと', 'そふ', 'そぼ', ['しゅじん', 'おっと'], ['かない', 'つま'], 
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
                'どの', 'どれ', 'どこ', 'どちら', ['どなた', 'だれ'], ['どなた の', 'だれ の'], ['なん', 'なに'], 'んあの',
            ],
            EN: [
                'which noun', 'which', 'where', 'which way', 'who', 'whose', 'what', 'what kind of',
            ],
            ROMAJI: [
                'dono', 'dare', 'doko', 'dochira', ['donata', 'dare'], ['donata no', 'dare no'], ['nan', 'nani'], 'nanno',
            ],
        },
        CH2: {
            JP: [

            ],
            EN: [

            ]
        },
        CH3: {
            JP: [

            ],
            EN: [

            ]
        },
        CH4: {
            JP: [

            ],
            EN: [

            ]
        },
        CH5: {
            JP: [

            ],
            EN: [

            ]
        },
    }
}