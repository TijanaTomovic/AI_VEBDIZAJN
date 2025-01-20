const apiKey = "6JOZFV0nY0A5NfB2TXykEZloCnFEdn4vF4ywosaM";


const fetchAIResponse = async (message) => {
    console.log("Pozivanje API-ja započeto...");
    const apiUrl = 'https://api.cohere.ai/v1/generate';

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'command-r-plus', // Model koji koristimo
                prompt: message, // Koristimo prompt umesto messages
                max_tokens: 100,
            }),
        });

        console.log("Odgovor stigao, status:", response.status);

        if (!response.ok) {
            console.error(`Greška: ${response.status} - ${response.statusText}`);
            return `Došlo je do greške: ${response.status}`;
        }

        const data = await response.json();
        return data.generations[0].text.trim(); // Vraća odgovor od Cohere modela
    } catch (error) {
        console.error('Greška:', error);
        return 'Došlo je do greške pri obradi zahteva.';
    }
};

document.addEventListener('DOMContentLoaded', function () {
    const sendMessageButton = document.getElementById('sendMessage');
    const chatWindow = document.getElementById('chatWindow');
    const userInput = document.getElementById('userInput');

    
    if (sendMessageButton) {
        sendMessageButton.addEventListener('click', async function () {
            const userMessage = userInput.value.trim();
            if (userMessage === "") {
                return; 
            }

            
            const userDiv = document.createElement('div');
            userDiv.classList.add('user-message');
            userDiv.textContent = userMessage;
            chatWindow.appendChild(userDiv);

            
            const aiResponse = await fetchAIResponse(userMessage);
            const aiDiv = document.createElement('div');
            aiDiv.classList.add('ai-message');
            aiDiv.textContent = aiResponse;
            chatWindow.appendChild(aiDiv);

            chatWindow.scrollTop = chatWindow.scrollHeight; 
            userInput.value = ''; 
        });
    }

    
    const translations = {
        en: {
            "posaljite": "Send",
            "ai-transport-naslov": "How AI Drives Innovation in the Transport Industry",
        "ai-healthcare-naslov": "How AI Transforms Healthcare",
        "ai-education-naslov": "AI in Education: Learning of the Future",
        "ai-robotics-naslov": "How AI is Revolutionizing Robotics",
            "footer-title": "Sitemap",
            "nav-home": "Home",
            "nav-uses": "AI Uses",
            "nav-news": "News",
            "nav-chat": "Chat with AI",
            "nav-contact": "Contact",
            "nav-login": "Login",
            "nav-register": "Register",
            "nav-about": "About Us",
            "footer-follow-us": "Follow us on:",
             "footer-rights": "&copy; AI World, All rights reserved, 2025",
            "registracija-title": "Registration",
            "registracija-imePrezime": "Full Name",
            "registracija-imePrezime-placeholder": "Enter full name",
             "registracija-email": "Email",
           "registracija-email-placeholder": "Enter email address",
    "registracija-lozinka": "Password",
    "registracija-lozinka-placeholder": "Enter password",
    "registracija-potvrdaLozinka": "Confirm Password",
    "registracija-potvrdaLozinka-placeholder": "Confirm password",
    "registracija-submit": "Register",
    "prijavljeni-ste-title": "You are logged in!",
            "primene-title": "Applications of Artificial Intelligence",
        "primene-description": "Here are some of the most well-known examples of AI applications in different industries.",
        "medicina-title": "Medicine",
        "medicina-description": "AI is used in medicine for diagnostics, image analysis, personalized treatments, and many other areas.",
        "medicina-img-alt": "Medicine AI",
        "medicina-details": "See details",
        "poljoprivreda-title": "Agriculture",
        "poljoprivreda-description": "AI is used for optimizing production, recognizing plant diseases, and predicting weather conditions.",
        "poljoprivreda-img-alt": "Agriculture AI",
        "poljoprivreda-details": "See details",
        "transport-title": "Transport",
        "transport-description": "AI helps in route optimization, autonomous vehicles, and traffic data analysis.",
        "transport-img-alt": "Transport AI",
        "transport-details": "See details",
            "uspeh-poruke-naslov": "Your message was sent successfully!",
        "uspeh-poruke-tekst": "Thank you for contacting us. We will respond to you as soon as possible.",
        "vrati-se-na-kontakt-stranicu": "Return to Contact Page",
           "main-title": "AI World",
        "site-name": "AI World",
        "nav-home": "Home",
        "nav-uses": "AI Applications",
        "nav-news": "News and Research",
        "nav-chat": "Chat with AI",
        "nav-contact": "Contact",
        "nav-about": "About Us",
        "nav-login": "Log In",
        "welcome-title": "Welcome to AI World",
        "welcome-message": "Artificial Intelligence (AI) is a technology that allows machines to learn, understand, and make decisions based on data.",
        "footer-title": "Site Map",
        "footer-home": "Home",
        "footer-uses": "AI Applications",
        "footer-news": "News",
        "footer-chat": "Chat with AI",
        "footer-contact": "Contact",
        "footer-login": "Log In",
        "nav-register": "Register",
        "footer-about": "About Us",
        "footer-text": "&copy; AI World, All rights reserved, 2025",
        "chat-placeholder": "Enter a message...",
        "send-message": "Send",
        "footer-follow-us": "Follow us on:",
        "chat-placeholder": "Enter your message...",
        "chat-send": "Send",
        "contact-title": "Contact Us",
    "contact-name": "Full Name",
    "contact-name-help": "You must enter your full name.",
    "contact-name-error": "Name is not entered correctly.",
    "contact-email": "Email",
    "contact-email-help": "You must enter a valid email address.",
    "contact-email-error": "Email is not entered correctly.",
    "contact-message": "Message",
    "contact-message-help": "You must enter a message.",
    "contact-message-error": "Message is not entered correctly.",
    "contact-submit": "Submit",
    "login-title": "Login",
    "login-email": "Email",
    "login-email-error": "Enter a valid email address.",
    "login-password": "Password",
    "login-password-error": "Password is required.",
    "login-submit": "Login",
    "login-register-link": "Register",
    "login-contact-link": "Contact us",
    "login-register": "Don't have an account? Register",
    "login-contact": "If you have issues with logging in, contact us.",
    "login-info": "Fill in the following fields to sign up for our service. If you have any questions, feel free to contact us.",
    "medicine-ai-title": "Medicine and Artificial Intelligence",
    "medicine-ai-intro": "Artificial Intelligence (AI) is used in medicine to improve diagnostics, treatments, and disease predictions. In recent years, AI has become a key tool in enhancing healthcare through automation and data analysis.",
    "medicine-ai-applications": "Applications of AI in Medicine",
    "medicine-ai-diagnosis": "Disease Diagnosis",
    "medicine-ai-personalized-treatment": "Personalized Treatments",
    "medicine-ai-robotic-surgery": "Robotic Surgery",
    "medicine-ai-links-title": "Links with Additional Information",
    "novosti-vestacka-inteligencija": "AI News and Research",
    "ai-transport-naslov": "How AI Drives Innovation in the Transport Industry",
    "ai-transport-opis": "AI in transport is changing the way we travel, manage traffic, and use autonomous vehicles.",
    "ai-healthcare-naslov": "How AI is Transforming Healthcare",
    "ai-healthcare-opis": "AI is used to improve diagnoses, personalized medicine, and enhance surgeries.",
    "ai-education-naslov": "AI in Education: Learning of the Future",
    "ai-education-opis": "AI helps personalize learning, analyze learning data, and optimize teaching.",
    "ai-robotics-naslov": "How AI is Revolutionizing Robotics",
    "ai-robotics-opis": "AI enables robots to become smarter, more efficient, and capable of solving complex tasks.",
    "o-nama-naslov": "About Us",
    "o-nama-prva-paragraf": "Our company was founded with the idea of bringing technology closer to everyone...",
    "o-nama-drugi-paragraf": "We believe that technology should serve people...",
    "o-nama-treci-paragraf": "Our mission is to create a world where artificial intelligence contributes...",
    "o-nama-cetvrti-paragraf": "The future is now, and we are here to shape it together!",
    "poljoprivreda-naslov": "Agriculture and Artificial Intelligence",
    "poljoprivreda-opis": "AI is used in agriculture to improve production processes, identify plant diseases, analyze weather data, and optimize irrigation and pesticide use.",
    "poljoprivreda-primene-naslov": "AI Applications in Agriculture",
    "poljoprivreda-vremenski-uslovi": "Weather Forecasting",
    "poljoprivreda-detekcija-bolesti": "Plant Disease Detection",
    "poljoprivreda-optimizacija-resursa": "Resource Optimization",
    "poljoprivreda-linkovi-naslov": "Links with Additional Information",
        
        "footer-rights": "&copy; AI World, All rights reserved, 2025"
        },
        sr: {"posaljite": "Posaljite",
            
            "ai-transport-naslov": "Kako AI pokreće inovacije u transportnoj industriji",
        "ai-healthcare-naslov": "Kako AI transformiše zdravstvenu zaštitu",
        "ai-education-naslov": "AI u obrazovanju: Učenje budućnosti",
        "ai-robotics-naslov": "Kako AI revolucionizuje robotiku",
            "footer-title": "Mapa sajta",
            "nav-home": "Početna",
            "nav-uses": "Primene AI",
            "nav-news": "Novosti",
            "nav-chat": "Chat sa AI",
            "nav-contact": "Kontakt",
            "nav-login": "Login",
            "nav-register": "Registracija",
            "nav-about": "O nama",
            "footer-follow-us": "Pratite nas i na:",
              "footer-rights": "&copy; AI Svet, Sva prava zadržana, 2025",
            "registracija-title": "Registracija",
            "registracija-imePrezime": "Ime i Prezime",
            "registracija-imePrezime-placeholder": "Unesite ime i prezime",
            "registracija-email": "Email",
            "registracija-email-placeholder": "Unesite email adresu",
            "registracija-lozinka": "Lozinka",
            "registracija-lozinka-placeholder": "Unesite lozinku",
            "registracija-potvrdaLozinka": "Potvrdite lozinku",
            "registracija-potvrdaLozinka-placeholder": "Potvrdite lozinku",
            "registracija-submit": "Registrujte se",
            "prijavljeni-ste-title": "Prijavljeni ste!",
            "primene-title": "Primene veštačke inteligencije",
            "primene-description": "Ovdje su neki od najpoznatijih primera primene AI u različitim industrijama.",
            "medicina-title": "Medicina",
            "medicina-description": "AI se koristi u medicini za dijagnostiku, analizu slika, personalizovane tretmane i mnoge druge oblasti.",
            "medicina-img-alt": "Medicina AI",
            "medicina-details": "Vidi detalje",
            "poljoprivreda-title": "Poljoprivreda",
            "poljoprivreda-description": "AI se koristi za optimizaciju proizvodnje, prepoznavanje bolesti biljaka i predviđanje vremenskih uslova.",
            "poljoprivreda-img-alt": "Poljoprivreda AI",
            "poljoprivreda-details": "Vidi detalje",
            "transport-title": "Transport",
            "transport-description": "AI pomaže u optimizaciji ruta, autonomnim vozilima i analizi saobraćajnih podataka.",
            "transport-img-alt": "Transport AI",
            "transport-details": "Vidi detalje",
            
            "uspeh-poruke-naslov": "Vaša poruka je uspešno poslata!",
            "uspeh-poruke-tekst": "Hvala što ste nas kontaktirali. Odgovorićemo vam u najkraćem mogućem roku.",
            "vrati-se-na-kontakt-stranicu": "Vrati se na Kontakt stranicu",
           "main-title": "AI Svet",
        "site-name": "AI Svet",
        "nav-home": "Početna",
        "nav-uses": "Primene AI",
        "nav-news": "Novosti i istraživanja",
        "nav-chat": "Chat sa AI",
        "nav-contact": "Kontakt",
        "nav-about": "O nama",
        "nav-login": "Prijavite se",
        "welcome-title": "Dobrodošli u AI Svet",
        "welcome-message": "Veštačka inteligencija (AI) je tehnologija koja omogućava mašinama da uče, razumeju i donose odluke na temelju podataka.",
        "footer-title": "Mapa sajta",
        "footer-home": "Početna",
        "footer-uses": "Primene AI",
        "footer-news": "Novosti",
        "footer-chat": "Chat sa AI",
        "footer-contact": "Kontakt",
        "footer-login": "Prijavite se",
        "nav-register": "Registracija",
        "footer-about": "O nama",
        "footer-text": "&copy; AI Svet, Sva prava zadržana, 2025",
        "chat-placeholder": "Unesite poruku...",
        "send-message": "Pošaljite",
        "footer-follow-us": "Pratite nas i na:",
        "chat-placeholder": "Unesite poruku...",
        "chat-send": "Pošaljite",
        "contact-title": "Kontaktirajte nas",
        "contact-name": "Ime i Prezime",
        "contact-name-help": "Morate uneti ime i prezime.",
        "contact-name-error": "Ime i prezime nisu ispravno uneti.",
        "contact-email": "Email",
        "contact-email-help": "Morate uneti validnu email adresu.",
        "contact-email-error": "Email nije ispravno unet.",
        "contact-message": "Poruka",
        "contact-message-help": "Morate uneti poruku.",
        "contact-message-error": "Poruka nije ispravno uneta.",
        "contact-submit": "Pošaljite",
        "login-title": "Prijavite se",
    "login-email": "Email",
    "login-email-error": "Unesite validnu email adresu.",
    "login-password": "Lozinka",
    "login-password-error": "Lozinka je obavezna.",
    "login-submit": "Prijavite se",
    "login-register-link": "Registrujte se",
    "login-contact-link": "Kontaktirajte nas",
    "login-register": "Nemate nalog? Registrujte se",
    "login-contact": "Ako imate problema sa prijavom, kontaktirajte nas.",
    "login-info": "Popunite sledeća polja kako biste se prijavili za našu uslugu. Ako imate bilo kakvih pitanja, slobodno nas kontaktirajte.",
    "medicine-ai-title": "Medicina i veštačka inteligencija",
    "medicine-ai-intro": "Veštačka inteligencija (AI) se koristi u medicini za poboljšanje dijagnostike, tretmana i predviđanja bolesti. U poslednjih nekoliko godina, AI je postao ključni alat za unapređenje zdravstvene zaštite kroz automatizaciju i analizu podataka.",
    "medicine-ai-applications": "Primene AI u medicini",
    "medicine-ai-diagnosis": "Dijagnostika bolesti",
    "medicine-ai-personalized-treatment": "Personalizovani tretmani",
    "medicine-ai-robotic-surgery": "Robotska hirurgija",
    "medicine-ai-links-title": "Linkovi sa dodatnim informacijama",
    "novosti-vestacka-inteligencija": "Novosti i istraživanja o veštačkoj inteligenciji",
    "ai-transport-naslov": "Kako AI pokreće inovacije u transportnoj industriji",
    "ai-transport-opis": "AI u transportu menja način na koji putujemo, kako se upravlja saobraćajem i kako se koriste autonomna vozila.",
    "ai-healthcare-naslov": "Kako AI transformiše zdravstvenu zaštitu",
    "ai-healthcare-opis": "AI se koristi za poboljšanje dijagnoza, personalizovanu medicinu i unapređenje operacija.",
    "ai-education-naslov": "AI u obrazovanju: Učenje budućnosti",
    "ai-education-opis": "AI pomaže u personalizaciji učenju, analizi podataka o učenju i optimizaciji nastave.",
    "ai-robotics-naslov": "Kako AI revolucionizuje robotiku",
    "ai-robotics-opis": "AI omogućava robotima da postanu inteligentniji, efikasniji i sposobniji da rešavaju složene zadatke.",
    "o-nama-naslov": "O nama",
    "o-nama-prva-paragraf": "Naša kompanija nastala je sa idejom da tehnologiju približimo svima...",
    "o-nama-drugi-paragraf": "Verujemo da tehnologija treba da služi ljudima...",
    "o-nama-treci-paragraf": "Naša misija je stvaranje sveta u kojem veštačka inteligencija doprinosi...",
    "o-nama-cetvrti-paragraf": "Budućnost je sada, a mi smo tu da je zajedno oblikujemo!",
    "poljoprivreda-naslov": "Poljoprivreda i veštačka inteligencija",
        "poljoprivreda-opis": "AI se koristi u poljoprivredi kako bi poboljšao procese proizvodnje, identifikovao bolesti biljaka, analizirao podatke o vremenskim prilikama i optimizovao zalivanje i upotrebu pesticida.",
        "poljoprivreda-primene-naslov": "Primene AI u poljoprivredi",
        "poljoprivreda-vremenski-uslovi": "Predviđanje vremenskih uslova",
        "poljoprivreda-detekcija-bolesti": "Detekcija bolesti biljaka",
        "poljoprivreda-optimizacija-resursa": "Optimizacija upotrebe resursa",
        "poljoprivreda-linkovi-naslov": "Linkovi sa dodatnim informacijama",

  

        
        "footer-rights": "&copy; AI Svet, Sva prava zadržana, 2025"
        }
    };

    let currentLanguage = 'sr'; 

    
    function changeLanguage(language) {
        setLanguage(language);
    }

    function setLanguage(language) {
        currentLanguage = language;
        applyTranslations();
    }

    function applyTranslations() {
        
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[currentLanguage][key]) {
                if (element.tagName === "A") {
                    element.title = translations[currentLanguage][key]; 
                } else {
                    element.innerHTML = translations[currentLanguage][key];
                }
            }
        });

        
        document.querySelectorAll('[placeholder]').forEach(element => {
            const key = element.getAttribute('id');
            if (translations[currentLanguage][key]) {
                element.placeholder = translations[currentLanguage][key];
            }
        });

       
        document.querySelectorAll('button').forEach(button => {
            const key = button.getAttribute('id');
            if (translations[currentLanguage][key]) {
                button.innerHTML = translations[currentLanguage][key];
            }
        });
    }

    
    document.getElementById('enBtn').addEventListener('click', function () {
        changeLanguage('en');
    });

    document.getElementById('srBtn').addEventListener('click', function () {
        changeLanguage('sr');
    });

  
    applyTranslations();
});