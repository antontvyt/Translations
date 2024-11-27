 document.addEventListener("DOMContentLoaded", function() {
            const languageCookie = document.cookie.split('; ').find(row => row.startsWith('IN='));
            if (languageCookie) {
                const translations = {
                    "Welcome back": "Selamat datang kembali",
                    "Recent Uploads": "Unggahan terbaru",
                    "What's New": "Apa yang baru",
                    "Manage Your Account": "Kelola akun Anda",
                    "Settings": "Pengaturan",
                    "Browse channels": "Jelajahi saluran",
                    "Subscriptions": "Langganan",
                    "Make sure to follow our": "Pastikan untuk mengikuti",
                    "Community Guidelines": "Panduan komunitas kami",
                    "All comments": "Semua komentar",
                    "comments": "komentars",
                    "What to Watch": "Apa yang harus diperhatikan",
                    "Explore": "Jelajahi",
                    "From your subscriptions": "Dari langganan Anda",
                    "Subscribe": "Berlangganan",
                    "Unsubscribe": "Berhenti berlangganan",
                    "Upload": "Unggah",
                    "Edit Profile": "Edit profil",
                    "Status": "Status",
                    "Customize": "Sesuaikan",
                    "Integrations": "Integrasi",
                    "views": "tampilan",
                    "Last Played": "Terakhir dimainkan",
                    "Now Playing": "Sekarang bermain",
                    "Published": "Diterbitkan",
                    "January": "Januari",
                    "February": "Februari",
                    "March": "Maret",
                    "April": "April",
                    "May": "Mei",
                    "June": "Juni",
                    "July": "July",
                    "August": "Agustus",
                    "September": "September",
                    "October": "Oktober",
                    "November": "November",
                    "December": "Desember",
                    "Manage Account": "Kelola akun"
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
