document.addEventListener("DOMContentLoaded", function() {
            const languageCookie = document.cookie.split('; ').find(row => row.startsWith('DE='));
            if (languageCookie) {
                const translations = {
                    "Welcome back": "Willkommen zurück",
                    "Recent Uploads": "Zuletzt hochgeladen",
                    "What's New": "Was gibt's neues",
                    "Manage Your Account": "Verwalte dein Konto",
                    "Settings": "Einstellungen",
                    "Browse channels": "Kanäle durchsuchen",
                    "Subscriptions": "Abos",
                    "Make sure to follow our": "Befolge bitte unbedingt unsere",
                    "Community Guidelines": "Community-Richtlinien",
                    "All comments": "Alle Kommentare",
                    "comments": "Kommentare",
                    "What to Watch": "Was du schauen könntest",
                    "Explore": "Erkunden",
                    "From your subscriptions": "Aus deinen Abos",
                    "Subscribe": "Abonnieren",
                    "Unsubscribe": "Deabonnieren",
                    "Upload": "Hochladen",
                    "Edit Profile": "Profil bearbeiten",
                    "Status": "Status",
                    "Customize": "Anpassen",
                    "Integrations": "Integrationen",
                    "views": "Klicks",
                    "Last Played": "Zuletzt gespielt",
                    "Now Playing": "Jetzt läuft",
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
