# Learner Lab

> A strengths-first strategy library for educators — searchable, filterable, and built on the belief that students thrive when we start with what they do *well*.

<!-- Add a screenshot or GIF of the app here -->
<!-- ![Learner Lab in action](./assets/demo.gif) -->

---

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the Application](#running-the-application)
- [Usage](#usage)
- [Roadmap](#roadmap)
- [Open Source & Contributing](#open-source--contributing)
- [License](#license)
- [Author](#author)

---

## Description

Most special education support is organized around deficits — where a student *struggles*. Research in Strengths Based Learning approaches tells a different story: students make the greatest gains when instruction leverages their existing strengths, showing improved engagement, confidence, and achievement.

**Learner Lab** is a searchable, filterable database of teaching strategies organized by student strengths, challenge areas, and learning profiles. Educators can quickly find approaches tailored to how their students actually learn — not just what they struggle with.

Built as a full-stack solo project by a former educator, Learner Lab is directly informed by classroom experience and a deep investment in equitable, strengths-based pedagogy.

---

## Features

| Feature | Status |
|---|---|
| Browse full strategy library | ✅ |
| Multi-select filter UI (react-select) | ✅ |
| Filters connected to backend / actually filtering results | ⏳ |
| Dedicated instructions page with examples | 🙏
| User authentication (sign up / log in) | 🙏 |
| Save favorite strategies | 🙏 |
| User-submitted strategy cards | 🙏 |
| Student profiles | 🙏 |
| Hover/click card reveal interactions | 🙏 |

- ✅ Complete
- ⏳ In progress
- 🙏 Looking for contributors

---

## Tech Stack

**Frontend:** React, TypeScript, Vite, react-select  
**Backend:** Node.js, Express, TypeScript  
**Database:** MongoDB Atlas, Mongoose  

---

## Getting Started

### Prerequisites

- Node.js `>=18.0.0`
- A [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account and cluster

### Installation

Clone the repository and install dependencies for the root, client, and server in one command:

```bash
git clone https://github.com/katygus/Learner-Lab.git
cd Learner-Lab
npm run install-all
```

### Environment Variables

Create a `.env` file inside the `server/` directory:

```bash
cp server/.env.example server/.env
```

Then open `server/.env` and fill in your values:

```
MONGO_URI=your_mongodb_connection_string
```

You can find your connection string in MongoDB Atlas under **Database → Connect → Connect your application**. Make sure to include your database name in the URI:

```
mongodb+srv://username:password@cluster.mongodb.net/your-database-name?appName=Cluster0
```

### Running the Application

From the project root, run both the client and server concurrently:

```bash
npm run dev
```

The client will be available at `http://localhost:5173` and the server at `http://localhost:5000`.

To run them separately:

```bash
npm run client   # frontend only
npm run server   # backend only
```

---

## Usage

1. **Browse strategies** — The main view displays all strategy cards in the library.
2. **Filter by strengths** — Use the multi-select filter bars to narrow results by student strength areas, challenge areas, neurodiversity profiles, teaching style, or interest area.
3. **Explore a strategy** — Each card includes a description of the approach, its intended use, and relevant tags.

> Screenshot / GIF walkthrough coming soon.

---

## Roadmap

See the [Features](#features) table above for planned additions. The immediate priority is connecting the multi-select filter UI to live backend queries. User authentication will unlock several subsequent features: saving favorites, submitting strategy cards, and building student profiles.

---

## Open Source & Contributing

Learner Lab is open source and welcomes contributions — especially from educators, developers with special education backgrounds, or anyone who wants to help make this tool more useful for teachers.

### Running in Dev Mode

Follow the [Getting Started](#getting-started) instructions above. The `npm run dev` command runs both client and server with hot reloading via Vite and nodemon.

### Contribution Guidelines

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes with a descriptive message
4. Push to your fork: `git push origin feature/your-feature-name`
5. Open a Pull Request against the `main` branch

Please open an issue first if you're planning a significant change, so we can discuss the approach before you invest time building it.

### Areas Where Help Is Especially Welcome

See the 🙏 items in the [Features](#features) table. If you're an educator and want to contribute strategy content rather than code, feel free to open an issue — content contributions are just as valuable.

---

## Changelog

### v1.0.0 — Current
- Strategy library with full card display
- Multi-select filter UI using react-select (strength, challenge area, neurodiversity, teaching style, interest area)
- Full-stack architecture: React frontend, Express/Node backend, MongoDB Atlas database

---

## License

[MIT](./LICENSE)

---

## Author

**Katy Wells**  
[GitHub @katygus](https://github.com/katygus) · [LinkedIn](https://www.linkedin.com/in/katy-wells)

<!-- Add your portfolio website link here when ready -->

---

*Built with 💙 by a teacher who believes every student has something to build on.*
