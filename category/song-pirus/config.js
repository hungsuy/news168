const langs = [
    { title: 'English', path: '/home', matchPath: /^\/(home|ecosystem|support)/ },
    { title: '简体中文', path: '/zh-Hans/', matchPath: /^\/zh-Hans/ },
];

docute.init({
    landing: 'landing.html',
    title: 'APlayer',
    repo: 'DIYgod/APlayer',
    twitter: 'DIYgod',
    'edit-link': 'https://github.com/MoePlayer/APlayer/tree/master/docs',
    nav: {
        default: [
            {
                title: 'Home', path: '/home'
            },
            {
                title: 'Ecosystem', path: '/ecosystem'
            },
            {
                title: 'Support APlayer', path: '/support'
            },
            {
                title: 'Languages', type: 'dropdown', items: langs
            }
        ],
        'zh-Hans': [
            {
                title: '首页', path: '/zh-Hans/'
            },
            {
                title: '生态', path: '/zh-Hans/ecosystem'
            },
            {
                title: '支持 APlayer', path: '/zh-Hans/support'
            },
            {
                title: '选择语言', type: 'dropdown', items: langs
            }
        ],
    },
    plugins: [
        docsearch({
            apiKey: '',
            indexName: 'aplayer',
            tags: ['english', 'zh-Hans'],
            url: 'https://aplayer.js.org'
        }),
        evanyou(),
        player()
    ]
});

function player () {
    return function (context) {
        context.event.on('landing:updated', function () {
            console.log('landing:updated');
            clearPlayer();
            aplayer0();
            aplayer1();
        });
        context.event.on('content:updated', function () {
            console.log('content:updated');
            clearPlayer();
            for (let i = 0; i < document.querySelectorAll('.load').length; i++) {
                document.querySelectorAll('.load')[i].addEventListener('click', function () {
                    window[this.parentElement.id] && window[this.parentElement.id]();
                });
            }
        });
    };
}

function clearPlayer () {
    for (let i = 0; i < 10; i++) {
        if (window['ap' + i]) {
            window['ap' + i].destroy();
        }
    }
}

function aplayer1 () {
    window.ap1 = new APlayer({
        container: document.getElementById('aplayer1'),
        theme: '#F57F17',
        lrcType: 3,
        audio: [{
            name: 'នឹកគ្រប់វេលា',
                artist: 'ស៊ីនស៊ីសាមុត',
                url: 'https://dl.dropbox.com/s/5v24baf6n2pi6y5/nekkrobvelea.mp3',
                cover: 'https://dl.dropbox.com/s/pacp0vo2tkajao5/nekkrobvelea.jpg',
            lrc: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.lrc',
            theme: '#ebd0c2'
        }, {
            name: 'ជីវិតមួយបេះដូងពីរ',
            artist: 'ស៊ីនស៊ីសាមុត',
            url: 'https://dl.dropbox.com/s/5n2ci3exggh9jnr/chivithmoury%20besdoung%20pi.mp3',
            cover: 'https://dl.dropbox.com/s/pacp0vo2tkajao5/nekkrobvelea.jpg',
            lrc: 'https://moeplayer.b0.upaiyun.com/aplayer/darling.lrc',
            theme: '#46718b'
        }, {
            name: 'កណ្ដាលដួងចិត្ត',
            artist: 'ស៊ីនស៊ីសាមុត',
            url: 'https://dl.dropbox.com/s/hemc15zfqslo607/kandaldourngchet.mp3',
            cover: 'https://dl.dropbox.com/s/pacp0vo2tkajao5/nekkrobvelea.jpg',
            theme: '#505d6b'
			
		}, {
            name: 'ក្រោមមេឃលើដី',
            artist: 'ស៊ីនស៊ីសាមុត',
            url: 'https://dl.dropbox.com/s/kmn3xz5qrhin8au/krommeklerdey.mp3',
            cover: 'https://dl.dropbox.com/s/pacp0vo2tkajao5/nekkrobvelea.jpg',
            theme: '#505d6b'
        }]
    });
}

