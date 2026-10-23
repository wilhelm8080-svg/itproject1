* {
    box-sizing: border-box;
}

:root {
    --green: rgb(35, 79, 62);
    --dark-green: rgb(23, 56, 44);
    --gold: rgb(212, 154, 58);
    --red: rgb(167, 25, 61);
    --background: rgb(244, 244, 244);
    --white: rgb(255, 255, 255);
    --text: rgb(51, 51, 51);
    --border: rgb(221, 221, 221);
}

html {
    scroll-behavior: smooth;
}

body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: var(--background);
    color: var(--text);
}

button,
input,
select {
    font: inherit;
}

button {
    cursor: pointer;
}

button:focus-visible,
a:focus-visible,
.logo:focus-visible,
input:focus-visible,
select:focus-visible {
    outline: 3px solid var(--gold);
    outline-offset: 3px;
}

header {
    background-color: var(--white);
    min-height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 7%;
    border-bottom: 1px solid var(--border);
    gap: 20px;
}

.logo {
    font-size: 25px;
    font-weight: bold;
    color: var(--green);
    cursor: pointer;
}

nav {
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
}

nav a {
    text-decoration: none;
    color: var(--text);
    cursor: pointer;
    font-weight: 500;
    padding-bottom: 4px;
}

nav a:hover,
nav a.active {
    color: var(--green);
    border-bottom: 2px solid var(--green);
}

.page-section {
    display: none;
}

.page-section.active {
    display: block;
}

.hero {
    width: 90%;
    min-height: 350px;
    margin: 20px auto;
    background-color: var(--green);
    display: flex;
    align-items: center;
    padding: 40px 7%;
    color: var(--white);
    border-radius: 2px;
}

.hero-text h1 {
    font-size: 45px;
    margin-bottom: 10px;
}

.hero-text p {
    font-size: 18px;
    margin-bottom: 25px;
    line-height: 1.5;
}

.hero button {
    padding: 12px 25px;
    border: none;
    border-radius: 3px;
    background-color: var(--gold);
    color: var(--white);
    font-size: 15px;
    font-weight: bold;
}

.hero button:hover {
    background-color: rgb(181, 127, 44);
}

.main {
    width: 90%;
    margin: 30px auto;
}

.title {
    background-color: var(--green);
    color: var(--white);
    padding: 12px 18px;
    margin-bottom: 15px;
    font-size: 24px;
}

.planner {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 20px;
    align-items: start;
}

.tasks,
.side {
    background-color: var(--white);
    padding: 20px;
    border: 1px solid var(--border);
    min-width: 0;
}

.tasks h2 {
    margin-top: 0;
}

.task-form {
    display: grid;
    grid-template-columns: 2fr 1.5fr 1fr auto;
    gap: 8px;
    margin-bottom: 20px;
}

input,
select {
    min-width: 0;
    width: 100%;
    padding: 11px;
    border: 1px solid rgb(204, 204, 204);
    border-radius: 2px;
    background-color: var(--white);
    color: var(--text);
}

.add-button {
    background-color: var(--green);
    color: var(--white);
    border: none;
    border-radius: 2px;
    padding: 10px 18px;
    white-space: nowrap;
}

.add-button:hover {
    background-color: var(--dark-green);
}

.search {
    width: 100%;
    margin-bottom: 15px;
}

.task {
    border: 1px solid var(--border);
    padding: 12px;
    margin-bottom: 10px;
    background-color: rgb(250, 250, 250);
    overflow-wrap: anywhere;
    border-radius: 2px;
}

.task-main {
    display: flex;
    align-items: flex-start;
    gap: 10px;
}

.task-checkbox {
    width: 18px;
    height: 18px;
    margin-top: 2px;
    flex-shrink: 0;
    accent-color: var(--green);
    cursor: pointer;
}

.task-details {
    flex: 1;
    min-width: 0;
}

.task-name {
    font-weight: bold;
}

.task-meta {
    display: block;
    color: rgb(102, 102, 102);
    font-size: 12px;
    line-height: 1.5;
    margin-top: 5px;
}

.task.completed .task-name {
    text-decoration: line-through;
    color: rgb(110, 110, 110);
}

.delete-button {
    background-color: var(--red);
    color: var(--white);
    border: none;
    border-radius: 2px;
    padding: 7px 12px;
    margin-top: 10px;
}

.delete-button:hover {
    background-color: rgb(130, 18, 47);
}

.empty-message {
    color: rgb(102, 102, 102);
    line-height: 1.6;
    padding: 10px 0;
}

.counter {
    text-align: center;
    border-bottom: 1px solid var(--border);
    padding-bottom: 15px;
    margin-bottom: 15px;
}

.counter h2 {
    color: var(--green);
}

.counter p {
    margin: 14px 0 5px;
}

.counter-number {
    font-size: 35px;
    font-weight: bold;
    color: var(--green);
}

.subjects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 15px;
}

.subject-card {
    background-color: var(--white);
    border: 1px solid var(--border);
    padding: 20px;
    border-left: 5px solid var(--green);
    overflow-wrap: anywhere;
}

.subject-card h3 {
    margin: 0 0 12px;
    color: var(--green);
    font-size: 16px;
}

.subject-card p {
    margin: 6px 0;
    font-size: 14px;
    line-height: 1.5;
}

.about-card {
    background-color: var(--white);
    padding: 30px;
    border: 1px solid var(--border);
    text-align: center;
    max-width: 700px;
    margin: 0 auto;
}

.about-card h2 {
    color: var(--green);
    margin-bottom: 15px;
}

.about-card p {
    line-height: 1.6;
    color: rgb(85, 85, 85);
}

.team-list {
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid var(--border);
    display: inline-block;
    text-align: left;
}

.team-list h3 {
    color: var(--green);
    margin-bottom: 10px;
    text-align: center;
    font-size: 16px;
}

.team-list p {
    margin: 5px 0;
    color: rgb(85, 85, 85);
}

footer {
    background-color: var(--dark-green);
    color: var(--white);
    padding: 30px 7%;
    margin-top: 50px;
    text-align: center;
}

footer h2 {
    margin-top: 0;
}

footer p {
    line-height: 1.5;
}

@media screen and (max-width: 900px) {
    header {
        padding: 15px 5%;
    }

    .logo {
        font-size: 22px;
    }

    nav {
        gap: 14px;
    }

    .planner {
        grid-template-columns: 1fr;
    }

    .task-form {
        grid-template-columns: 1fr 1fr;
    }

    .add-button {
        width: 100%;
    }
}

@media screen and (max-width: 480px) {
    header {
        display: block;
        text-align: center;
        padding: 15px;
    }

    .logo {
        margin-bottom: 15px;
    }

    nav {
        justify-content: center;
        gap: 10px 18px;
    }

    nav a {
        font-size: 14px;
    }

    .hero {
        width: 95%;
        min-height: 280px;
        padding: 30px 20px;
        text-align: center;
        justify-content: center;
    }

    .hero-text h1 {
        font-size: 30px;
    }

    .hero-text p {
        font-size: 15px;
    }

    .hero button {
        width: 100%;
    }

    .main {
        width: 95%;
    }

    .title {
        font-size: 20px;
    }

    .tasks,
    .side {
        padding: 15px;
    }

    .task-form {
        grid-template-columns: 1fr;
    }

    .delete-button {
        width: 100%;
    }

    .counter-number {
        font-size: 30px;
    }

    .subjects-grid {
        grid-template-columns: 1fr;
    }

    .about-card {
        padding: 20px;
    }

    footer {
        padding: 25px 15px;
    }
}