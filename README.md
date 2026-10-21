# QA & SDET Automation Roadmap 2026

This repository is a **2026 SDET professional practice portfolio and not a business product**, designed to document learning, framework architecture, API testing, Web/Mobile automation, CI/CD, and AI integration.

---

## 🛠️ Tech Stack & Installed Environment

The following versions correspond to the local development environment verified for executing tests and projects in this lab:

| Tool | Verification Command | Installed Version |
| :--- | :--- | :--- |
| **Git** | `git --version` | `2.56.0.windows.2` |
| **Node.js** | `node -v` | `v22.12.0` |
| **npm** | `npm -v` | `11.14.1` |
| **Python** | `python --version` | `3.14.7` |
| **GitHub CLI** | `gh --version` | `2.93.0`  |

---

## 🗺️ Curriculum Roadmap and Progress Status

| Section | Topic | Status |
| :---: | :--- | :---: |
| **01** | Environment Setup and Self-Taught Practice Ecosystem | 🟢 Done |
| **02** | Manual Testing Fundamentals | 🟢 Done |
| **03** | Software Testing Techniques | 🟢 Done |
| **04** | API Testing, Automation & Validation | 🟡 In Progress |
| **05** | Programming Foundations & TypeScript Essentials for QA | 🔴 Pending |
| **06** | UI Automation: Web & Mobile Testing | 🔴 Pending |
| **07** | Architecture & Framework Design for QA | 🔴 Pending |
| **08** | CI/CD, Infrastructure & Containers | 🔴 Pending |
| **09** | Observability, Reporting & Monitoring | 🔴 Pending |
| **10** | AI-Assisted QA & Software Testing | 🔴 Pending |
| **11** | Capstone Project and Final Assessment | 🔴 Pending |
| **12** | Real-World QA Practice Lab | 🔴 Pending |
| **13** | Database Testing with SQL | 🔴 Pending |
| **14** | Security Testing Fundamentals for QA | 🔴 Pending |
| **15** | Test Strategy, QA Leadership & Soft Skills | 🔴 Pending |
| **16** | Career Development, Portfolio & QA Interview Prep | 🔴 Pending |
| **17** | QA Knowledge Quizzes | 🔴 Pending |
| **18** | Global Assessments & Senior Role Preparation | 🔴 Pending |

---

## ⚙️ Workflow Convention & Git Flow

To maintain a clean and professional version control history, the following standards are observed:

1. **Branching Structure:**
   * Each lesson or module is worked on in a dedicated branch created from `main`:
     ```bash
     git checkout -b lesson/<number>-<descriptive-topic>
     ```
   * *Example:* `lesson/01-environment-setup` or `lesson/04-api-rest-postman`

2. **Imperative Commit Messages:**
   * Commit messages must be written in the imperative mood and clearly describe the change made:
     * `Add initial README and Cursor rules`
     * `Implement Page Object Model for login feature`
     * `Fix locator ambiguity in checkout test`

3. **Integration into `main`:**
   * The `main` branch represents verified quality code. It only receives changes via *Pull Requests* or *Merges* once exercises have been completed and reviewed.
