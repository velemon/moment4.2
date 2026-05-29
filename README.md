### Webbapplikation – JWT Login System

## Beskrivning

Detta repository innehåller en webbapplikation byggd med HTML, CSS och JavaScript som fungerar som klient till ett REST API med JWT autentisering.

Webbplatsen kommunicerar med en backend via Fetch API och hanterar registrering, inloggning och åtkomst till skyddade resurser med hjälp av JSON Web Tokens (JWT).

När användaren loggar in sparas en JWT-token i webbläsarens localStorage och används för att autentisera användaren vid anrop till skyddade routes i API.

---

## Syfte

Syftet med uppgiften är att:

- Kunna skapa funktionalitet för autentisering med registrering av användarkonton samt inloggning.
- Kunna använda JWT's (JSON Web Token) för sessionshantering för att förhindra obehörig åtkomst till resurser.
- Kunna skydda känslig data så som lösenord i databasen.

---

## Funktioner

- Registrering av nya användarkonton via API
- Inloggning med användarnamn och lösenord
- JWT-token sparas i localStorage vid inloggning
- Skyddad sida (dashboard) som endast kan nås om användaren är inloggad
- Hämtning av skyddad data från backend via Authorization-header
- Logout-funktion som tar bort JWT-token

---

## Hur applikationen fungerar

**1. Registrering**

Användaren fyller i användarnamn och lösenord.

Skickas till backend via:

POST /api/auth/register

**2. Inloggning**

Användaren loggar in via:

POST /api/auth/login

Vid lyckad inloggning returneras en JWT-token som sparas i:

localStorage

**3. Skyddad sida (Dashboard)**

Dashboard hämtar skyddad data från API:et:

GET /api/profile

JWT-token skickas i header:

Authorization: Bearer <token>

**4. Logout**

Vid utloggning tas JWT-token bort från localStorage och användaren skickas tillbaka till login-sidan.

---

## Säkerhet

- JWT används för att autentisera användare
- Token lagras i localStorage och skickas vid varje API-anrop
- Skyddade routes kräver giltig JWT-token
- Backend verifierar token innan data returneras
- Ingen känslig data (som lösenord) lagras i frontend