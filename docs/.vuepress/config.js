module.exports = {
	head: [
        ["link", {rel: "apple-touch-icon", size: "180x180", href: "/apple-touch-icon.png"}],
        ["link", {rel: "icon", type: "image/png", size: "32x32", href: "/favicon-32x32.png"}],
        ["link", {rel: "icon", type: "image/png", size: "16x16", href: "/favicon-16x16.png"}],
		["link", {rel: "mask-icon", color: "#5bbad5", href: "/safari-pinned-tab.svg"}],
		["link", {rel: "manifest", href: "/manifest.webmanifest"}]
    ],
	plugins: [
        '@vuepress/back-to-top',
    ],
    locales: {
        '/': {
            lang: 'en-US',
            title: 'IBAX Documentation',
            description: 'A Decentralized Commercial Cross-Chain infrastructure Network',
        },
        '/zh-CN/': {
            lang: 'zh-CN',
            title: 'IBAX Documentation',
            description: 'A Decentralized Commercial Cross-Chain infrastructure Network',
        },
		'/de/': {
            lang: 'de',
            title: 'IBAX Documentation',
            description: 'A Decentralized Commercial Cross-Chain infrastructure Network',
        },
		'/es/': {
            lang: 'es',
            title: 'IBAX Documentation',
            description: 'A Decentralized Commercial Cross-Chain infrastructure Network',
        },
		'/fr/': {
            lang: 'fr',
            title: 'IBAX Documentation',
            description: 'A Decentralized Commercial Cross-Chain infrastructure Network',
        },
		'/it/': {
            lang: 'it',
            title: 'IBAX Documentation',
            description: 'A Decentralized Commercial Cross-Chain infrastructure Network',
        },
		'/ja/': {
            lang: 'ja',
            title: 'IBAX Documentation',
            description: 'A Decentralized Commercial Cross-Chain infrastructure Network',
        }
    },
    themeConfig: {
        repo: 'IBAX-io',
        docsRepo: 'IBAX-io/documentation',
        logo: '/ibax.ico',
        smoothScroll: true,
        docsDir: 'docs',
        editLinks: true,
        locales: {
            '/': {
                label: 'English',
                selectText: 'Languages',
                ariaLabel: 'Select language',
                editLinkText: 'Edit this page on GitHub',
                lastUpdated: 'Last Updated',
                nav: [
				{text: 'Concept', link: '/concepts/blockchain-layers',},
                    {text: 'Tutorial', link: '/tutorials/app_tutorial',},
                    {text: 'Guide', link: '/topics/templates2'},
                    {text: 'Reference', link: '/reference/api2',},
                    {text: 'Deployment', link: '/howtos/deployment'},
                ],
                sidebar: {
                    '/concepts/': [	
                        {
                            title: 'Concept',
                            collapsable: false,
                            children: [
                                'blockchain-layers',
								'thesaurus',
								'consensus',
								'about-the-platform',
                            ],
                        },
						{
                            title: 'More',
                            collapsable: false,
                            children: [
                                'faq',
                            ],
                        },
                    ],
                    '/tutorials/': [
                        {
                            title: 'Tutorial',
                            collapsable: false,
                            children: [
                                'app_tutorial',
                            ],
                        },
                    ],
                    '/topics/': [
                        {
                            title: 'Guide',
                            collapsable: false,
                            children: [
                                'templates2',
								'vm',
								'script',
								'daemons',
                            ],
                        },
                    ],
					'/reference/': [
                        {
                            title: 'Reference',
                            collapsable: false,
                            children: [
                                'api2',
								'desync_monitor',
								'platform-parameters',
								'backend-config',
                            ],
                        },
                    ],
					'/howtos/': [
                        {
                            title: 'Deployment',
                            collapsable: false,
                            children: [
                                'deployment',
                            ]
                        }
                    ],
                    '/': 'auto',
                },
            },
            '/zh-CN/': {
				selectText: '选择语言',
                label: '简体中文',
                ariaLabel: '选择语言',
                editLinkText: '在 GitHub 上编辑此页',
                lastUpdated: '上次更新',
                contributorsLabel: '贡献者',
                nav: [
                    {text: '概念', link: '/concepts/blockchain-layers',},
                    {text: '教程', link: '/tutorials/app_tutorial',},
                    {text: '指导', link: '/topics/templates2'},
                    {text: '参考', link: '/reference/api2',},
                    {text: '部署', link: '/howtos/deployment'},
                ],
                sidebar: {
                    '/concepts/': [	
                        {
                            title: '概念',
                            collapsable: false,
                            children: [
                                'blockchain-layers',
								'thesaurus',
								'consensus',
								'about-the-platform',
                            ],
                        },
						{
                            title: '更多',
                            collapsable: false,
                            children: [
                                'faq',
                            ],
                        },
                    ],
                    '/tutorials/': [
                        {
                            title: '教程',
                            collapsable: false,
                            children: [
                                'app_tutorial',
                            ],
                        },
                    ],
                    '/topics/': [
                        {
                            title: '指导',
                            collapsable: false,
                            children: [
                                'templates2',
								'vm',
								'script',
								'daemons',
                            ],
                        },
                    ],
					'/reference/': [
                        {
                            title: '参考',
                            collapsable: false,
                            children: [
                                'api2',
								'desync_monitor',
								'platform-parameters',
								'backend-config',
                            ],
                        },
                    ],
					'/howtos/': [
                        {
                            title: '部署',
                            collapsable: false,
                            children: [
                                'deployment',
                            ]
                        }
                    ],
                    '/zh-CN/': 'auto',
                },
            },
			'/de/': {
				selectText: 'Languages',
                label: 'Deutsch',
                ariaLabel: 'Select language',
                editLinkText: 'Edit this page on GitHub',
                lastUpdated: 'Last Updated',
                nav: [
                    {text: 'Concept', link: '/concepts/blockchain-layers',},
                    {text: 'Tutorial', link: '/tutorials/app_tutorial',},
                    {text: 'Guide', link: '/topics/templates2'},
                    {text: 'Reference', link: '/reference/api2',},
                    {text: 'Deployment', link: '/howtos/deployment'},
                ],
                sidebar: {
                    '/concepts/': [	
                        {
                            title: 'Concept',
                            collapsable: false,
                            children: [
                                'blockchain-layers',
								'thesaurus',
								'consensus',
								'about-the-platform',
                            ],
                        },
						{
                            title: 'More',
                            collapsable: false,
                            children: [
                                'faq',
                            ],
                        },
                    ],
                    '/tutorials/': [
                        {
                            title: 'Tutorial',
                            collapsable: false,
                            children: [
                                'app_tutorial',
                            ],
                        },
                    ],
                    '/topics/': [
                        {
                            title: 'Guide',
                            collapsable: false,
                            children: [
                                'templates2',
								'vm',
								'script',
								'daemons',
                            ],
                        },
                    ],
					'/reference/': [
                        {
                            title: 'Reference',
                            collapsable: false,
                            children: [
                                'api2',
								'desync_monitor',
								'platform-parameters',
								'backend-config',
                            ],
                        },
                    ],
					'/howtos/': [
                        {
                            title: 'Deployment',
                            collapsable: false,
                            children: [
                                'deployment',
                            ]
                        }
                    ],
                    '/de/': 'auto',
                },
            },
			'/es/': {
				selectText: 'Languages',
                label: 'Español',
                ariaLabel: 'Select language',
                editLinkText: 'Edit this page on GitHub',
                lastUpdated: 'Last Updated',
                nav: [
                    {text: 'Concept', link: '/concepts/blockchain-layers',},
                    {text: 'Tutorial', link: '/tutorials/app_tutorial',},
                    {text: 'Guide', link: '/topics/templates2'},
                    {text: 'Reference', link: '/reference/api2',},
                    {text: 'Deployment', link: '/howtos/deployment'},
                ],
                sidebar: {
                    '/concepts/': [	
                        {
                            title: 'Concept',
                            collapsable: false,
                            children: [
                                'blockchain-layers',
								'thesaurus',
								'consensus',
								'about-the-platform',
                            ],
                        },
						{
                            title: 'More',
                            collapsable: false,
                            children: [
                                'faq',
                            ],
                        },
                    ],
                    '/tutorials/': [
                        {
                            title: 'Tutorial',
                            collapsable: false,
                            children: [
                                'app_tutorial',
                            ],
                        },
                    ],
                    '/topics/': [
                        {
                            title: 'Guide',
                            collapsable: false,
                            children: [
                                'templates2',
								'vm',
								'script',
								'daemons',
                            ],
                        },
                    ],
					'/reference/': [
                        {
                            title: 'Reference',
                            collapsable: false,
                            children: [
                                'api2',
								'desync_monitor',
								'platform-parameters',
								'backend-config',
                            ],
                        },
                    ],
					'/howtos/': [
                        {
                            title: 'Deployment',
                            collapsable: false,
                            children: [
                                'deployment',
                            ]
                        }
                    ],
                    '/es/': 'auto',
                },
            },
			'/fr/': {
				selectText: 'Languages',
                label: 'Français',
                ariaLabel: 'Select language',
                editLinkText: 'Edit this page on GitHub',
                lastUpdated: 'Last Updated',
                nav: [
                    {text: 'Concept', link: '/concepts/blockchain-layers',},
                    {text: 'Tutorial', link: '/tutorials/app_tutorial',},
                    {text: 'Guide', link: '/topics/templates2'},
                    {text: 'Reference', link: '/reference/api2',},
                    {text: 'Deployment', link: '/howtos/deployment'},
                ],
                sidebar: {
                    '/concepts/': [	
                        {
                            title: 'Concept',
                            collapsable: false,
                            children: [
                                'blockchain-layers',
								'thesaurus',
								'consensus',
								'about-the-platform',
                            ],
                        },
						{
                            title: 'More',
                            collapsable: false,
                            children: [
                                'faq',
                            ],
                        },
                    ],
                    '/tutorials/': [
                        {
                            title: 'Tutorial',
                            collapsable: false,
                            children: [
                                'app_tutorial',
                            ],
                        },
                    ],
                    '/topics/': [
                        {
                            title: 'Guide',
                            collapsable: false,
                            children: [
                                'templates2',
								'vm',
								'script',
								'daemons',
                            ],
                        },
                    ],
					'/reference/': [
                        {
                            title: 'Reference',
                            collapsable: false,
                            children: [
                                'api2',
								'desync_monitor',
								'platform-parameters',
								'backend-config',
                            ],
                        },
                    ],
					'/howtos/': [
                        {
                            title: 'Deployment',
                            collapsable: false,
                            children: [
                                'deployment',
                            ]
                        }
                    ],
                    '/fr/': 'auto',
                },
            },
			'/ja/': {
				selectText: 'Languages',
                label: '日本語',
                ariaLabel: 'Select language',
                editLinkText: 'Edit this page on GitHub',
                lastUpdated: 'Last Updated',
                nav: [
                    {text: 'Concept', link: '/concepts/blockchain-layers',},
                    {text: 'Tutorial', link: '/tutorials/app_tutorial',},
                    {text: 'Guide', link: '/topics/templates2'},
                    {text: 'Reference', link: '/reference/api2',},
                    {text: 'Deployment', link: '/howtos/deployment'},
                ],
                sidebar: {
                    '/concepts/': [	
                        {
                            title: 'Concept',
                            collapsable: false,
                            children: [
                                'blockchain-layers',
								'thesaurus',
								'consensus',
								'about-the-platform',
                            ],
                        },
						{
                            title: 'More',
                            collapsable: false,
                            children: [
                                'faq',
                            ],
                        },
                    ],
                    '/tutorials/': [
                        {
                            title: 'Tutorial',
                            collapsable: false,
                            children: [
                                'app_tutorial',
                            ],
                        },
                    ],
                    '/topics/': [
                        {
                            title: 'Guide',
                            collapsable: false,
                            children: [
                                'templates2',
								'vm',
								'script',
								'daemons',
                            ],
                        },
                    ],
					'/reference/': [
                        {
                            title: 'Reference',
                            collapsable: false,
                            children: [
                                'api2',
								'desync_monitor',
								'platform-parameters',
								'backend-config',
                            ],
                        },
                    ],
					'/howtos/': [
                        {
                            title: 'Deployment',
                            collapsable: false,
                            children: [
                                'deployment',
                            ]
                        }
                    ],
                    '/ja/': 'auto',
                },
            },
			'/it/': {
				selectText: 'Languages',
                label: 'Italiano',
                ariaLabel: 'Select language',
                editLinkText: 'Edit this page on GitHub',
                lastUpdated: 'Last Updated',
                nav: [
                    {text: 'Concept', link: '/concepts/blockchain-layers',},
                    {text: 'Tutorial', link: '/tutorials/app_tutorial',},
                    {text: 'Guide', link: '/topics/templates2'},
                    {text: 'Reference', link: '/reference/api2',},
                    {text: 'Deployment', link: '/howtos/deployment'},
                ],
                sidebar: {
                    '/concepts/': [	
                        {
                            title: 'Concept',
                            collapsable: false,
                            children: [
                                'blockchain-layers',
								'thesaurus',
								'consensus',
								'about-the-platform',
                            ],
                        },
						{
                            title: 'More',
                            collapsable: false,
                            children: [
                                'faq',
                            ],
                        },
                    ],
                    '/tutorials/': [
                        {
                            title: 'Tutorial',
                            collapsable: false,
                            children: [
                                'app_tutorial',
                            ],
                        },
                    ],
                    '/topics/': [
                        {
                            title: 'Guide',
                            collapsable: false,
                            children: [
                                'templates2',
								'vm',
								'script',
								'daemons',
                            ],
                        },
                    ],
					'/reference/': [
                        {
                            title: 'Reference',
                            collapsable: false,
                            children: [
                                'api2',
								'desync_monitor',
								'platform-parameters',
								'backend-config',
                            ],
                        },
                    ],
					'/howtos/': [
                        {
                            title: 'Deployment',
                            collapsable: false,
                            children: [
                                'deployment',
                            ]
                        }
                    ],
                    '/it/': 'auto',
                },
            },
        },
    },
}
