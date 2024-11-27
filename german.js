document.addEventListener("DOMContentLoaded", function() {
            const languageCookie = document.cookie.split('; ').find(row => row.startsWith('DE='));
            if (languageCookie) {
                const translations = {
                    "Welcome back": "Willkommen zurück",
                    "Recent Uploads": "Aktuelle Uploads",
                    "What's New": "Was ist neu",
                    "Manage Your Account": "Verwalte dein Account",
                    "Settings": "Einstellungen",
                    "Browse channels": "Kanäle Durchsuchen",
                    "Subscriptions": "Abonnenten",
                    "Make sure to follow our": "Befolgen Sie unbedingt unsere",
                    "Community Guidelines": "Community-Richtlinien",
                    "All comments": "Alle kommentare",
                    "comments": "Kommentare",
                    "What to Watch": "Was zu schauen",
                    "Explore": "Erkunden",
                    "From your subscriptions": "Von deinen Abonnenten",
                    "Subscribe": "Abonnieren",
                    "Unsubscribe": "Unabonnieren",
                    "Upload": "Hochladen",
                    "Edit Profile": "Profil bearbeiten",
                    "Status": "Status",
                    "Customize": "Anpassen",
                    "Integrations": "Integrationen",
                    "views": "Ansichten",
                    "Last Played": "Zuletzt gespielt",
                    "Now Playing": "Jetzt gespielt",
                    "Published": "Veröffentlicht",
                    "January": "Januar",
                    "February": "Februar",
                    "March": "März",
                    "April": "April",
                    "May": "Mai",
                    "June": "Juni",
                    "July": "Juli",
                    "August": "August",
                    "September": "September",
                    "October": "Oktober",
                    "November": "November",
                    "December": "Dezember",
                    "Manage Account": "Konto verwalten"
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
