 document.addEventListener("DOMContentLoaded", function() {
            const languageCookie = document.cookie.split('; ').find(row => row.startsWith('Language Initials Here='));
            if (languageCookie) {
                const translations = {
                    "Welcome back": "",
                    "Recent Uploads": "",
                    "What's New": "",
                    "Manage Your Account": "",
                    "Settings": "",
                    "Browse channels": "",
                    "Subscriptions": "Langganan",
                    "Make sure to follow our": "",
                    "Community Guidelines": "",
                    "All comments": "",
                    "comments": "komentars",
                    "What to Watch": "",
                    "Explore": "Jelajahi",
                    "From your subscriptions": "",
                    "Subscribe": "",
                    "Unsubscribe": "",
                    "Upload": "",
                    "Edit Profile": "",
                    "Status": "",
                    "Customize": "",
                    "Integrations": "",
                    "views": "",
                    "Last Played": "",
                    "Now Playing": "",
                    "Published": "",
                    "January": "",
                    "February": "",
                    "March": "",
                    "April": "",
                    "May": "",
                    "June": "",
                    "July": "",
                    "August": "",
                    "September": "",
                    "October": "",
                    "November": "",
                    "December": "",
                    "Manage Account": ""
                };

                function replaceText(node) {
                    if (node.nodeType === Node.TEXT_NODE) {
                        let text = node.nodeValue;
                        for (const [key, value] of Object.entries(translations)) {
                            text = text.replace(new RegExp(key, 'g'), value);
                        }
                        node.nodeValue = text;
                    } else {
                        node.childNodes.forEach(replaceText);
                    }
                }

                replaceText(document.body);
            }
        });
