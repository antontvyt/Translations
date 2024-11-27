 document.addEventListener("DOMContentLoaded", function() {
            const languageCookie = document.cookie.split('; ').find(row => row.startsWith('ES='));
            if (languageCookie) {
                const translations = {
                    "Welcome back": "Bienvenido",
                    "Recent Uploads": "Videos recientes",
                    "What's New": "¿Qué hay de nuevo?",
                    "Manage Your Account": "Administrar tu cuenta",
                    "Settings": "Configuración",
                    "Browse channels": "Buscar canales",
                    "Subscriptions": "Suscripciones",
                    "Make sure to follow our": "Asegúrate de seguir nuestras",
                    "Community Guidelines": "Normas de la Comunidad",
                    "All comments": "Todos los comentarios",
                    "comments": "comentarios",
                    "What to Watch": "Qué ver",
                    "Explore": "Explorar",
                    "From your subscriptions": "De tus suscripciones",
                    "Subscribe": "Suscribirse",
                    "Unsubscribe": "Cancelar Suscripción",
                    "Upload": "Cargar",
                    "Edit Profile": "Editar Perfil",
                    "Status": "Estado",
                    "Customize": "Personalice",
                    "Integrations": "Integraciones",
                    "views": "vistas",
                    "Last Played": "Última Escucha",
                    "Now Playing": "Ahora Escuchando",
                    "Published": "Publicado",
                    "January": "Enero",
                    "February": "Febrero",
                    "March": "Marzo",
                    "April": "Abril",
                    "May": "Mayo",
                    "June": "Junio",
                    "July": "Julio",
                    "August": "Agosto",
                    "September": "Septiembre",
                    "October": "Octubure",
                    "November": "Noviembre",
                    "December": "Diciembre",
                    "Manage Account": "Mi cuenta"
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
