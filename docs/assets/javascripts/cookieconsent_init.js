// obtain cookieconsent plugin
var cc = initCookieConsent();

var cookie = '🍪';

// run plugin with config object
cc.run({
    current_lang : 'en',
    theme_css: '/assets/stylesheets/cookieconsent.css',
    page_scripts: true,
    autoclear_cookies: true,
    languages: {
        'en': {
            consent_modal: {
                title: cookie + ' We use cookies!',
                description: 'Hi, this website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent.<button type="button" data-cc="c-settings" class="cc-link">Let me choose</button>',
                primary_btn: {
                    text: 'Accept all',
                    role: 'accept_all'
                },
                secondary_btn: {
                    text: 'Reject all',
                    role: 'accept_necessary'
                }
            },
            settings_modal: {
                title: 'WebSight.io',
                save_settings_btn: 'Save settings',
                accept_all_btn: 'Accept all',
                reject_all_btn: 'Reject all',
                close_btn_label: 'Close',
                cookie_table_headers: [
                    {col1: 'Name'},
                    {col2: 'Domain'},
                    {col3: 'Expiration'},
                    {col4: 'Description'}
                ],
                blocks: [
                    {
                        title: 'Cookie usage 📢',
                        description: 'We use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want. To change your selection, use footer `Cookie Settings` link.'
                    }, {
                        title: 'Strictly necessary cookies',
                        description: 'These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly',
                        toggle: {
                            value: 'necessary',
                            enabled: true,
                            readonly: true
                        }
                    }, {
                        title: 'Performance and Analytics cookies',
                        description: 'These cookies allow the website to remember the choices you have made in the past',
                        toggle: {
                            value: 'analytics',
                            enabled: true,
                            readonly: false
                        },
                        cookie_table: [
                            {
                                col1: '^_ga',
                                col2: 'google.com',
                                col3: '2 years',
                                col4: 'Analytics cookies',
                                is_regex: true
                            },
                            {
                                col1: '_gid',
                                col2: 'google.com',
                                col3: '1 day',
                                col4: 'Analytics cookies',
                            }
                        ]
                    }, {
                        title: 'More information',
                        description: 'For any queries in relation to my policy on cookies and your choices, please <a class="cc-link" href="https://www.ds.pl/contact-us.html">contact us</a>.',
                    }
                ]
            }
        }
    }
});
