ai-autofill-extension

Intelligent AI-Based Form Autofill Chrome Extension

### 🚀 Smart Autofill AI Chrome Extension

Intelligent browser automation extension that dynamically detects and autofills real-world web forms using smart DOM parsing and automation logic.

![Status](https://img.shields.io/badge/Status-Working-success)
![Type](https://img.shields.io/badge/Project-ChromeExtension-blue)
![Language](https://img.shields.io/badge/Stack-JS%20%7C%20HTML%20%7C%20CSS-yellow)

### 🧠 About The Project

Smart Autofill AI is a Chrome Extension developed as a real-world learning project to explore:

- Chrome Extension Development
- Browser Automation
- DOM Parsing
- Dynamic Form Detection
- Backend API Integration
- Intelligent Autofill Systems

The extension automatically detects form fields on websites and intelligently fills them using stored user profile data and smart keyword matching logic.

This project was built to improve practical full-stack engineering skills by implementing real browser automation workflows similar to production tools.

### 🧠 Problem

Manually filling repetitive forms is:

- Time-consuming
- Repetitive
- Error-prone
- Inefficient

Especially in:

- Job applications
- Registration forms
- Internship forms
- Student portals
- Survey websites

### 💡 Solution

Smart Autofill AI intelligently:

- Detects webpage form fields dynamically
- Identifies labels using smart keyword mapping
- Autofills user data instantly
- Handles multiple form input types
- Works across different websites without modifying webpage code

### 🚀 Latest Features

- Dynamic DOM-based field detection
- Intelligent keyword matching system
- Autofill All functionality
- Required Fields Only autofill
- Smart profile storage using Chrome Storage API
- First Name & Last Name intelligent separation
- 
# Support for:

- Text inputs
- Textareas
- Select dropdowns
- Checkboxes
- Radio buttons
- Color pickers
- Range sliders
- Real-world form compatibility
- Dynamic event dispatching
- Highlighting autofilled fields
- Dark mode toggle UI
- Modern responsive popup interface
- Backend-ready architecture
- Lightweight and fast execution

### ⚠️ Current Development Limitations

This project is currently under active learning and development.

- Some advanced form elements are still partially unsupported:

- Some email fields may not autofill correctly on certain websites
- Some custom checkboxes/radio components may not work
- Advanced React-based dropdowns are partially unsupported
- Certain date-picker formats vary between websites
- File upload inputs cannot be autofilled due to browser security restrictions

These limitations are intentionally documented to demonstrate honest engineering practices and ongoing iterative development.

### 🧠 Architecture

Popup UI → Message Passing → Content Script → DOM Parsing → Smart Keyword Matching → Autofill Engine → Event Dispatching → Form Completion

### 🛠 Tech Stack

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Node.js
- Express.js
- REST API
- Browser APIs
- Chrome Storage API
- Tabs API
- Messaging API
- Scripting API
- Core Concepts
- DOM Manipulation
- Event Dispatching
- Async JavaScript
- Browser Automation

### 📂 Project Structure


```bash
Smart-Autofill-AI
│
├── Frontend (Chrome Extension)
│   ├── popup.html
│   ├── popup.js
│   ├── content.js
│   ├── style.css
│   └── manifest.json
│
├── Backend
│   └── server/
│       ├── server.js
│       ├── package.json
│       └── node_modules/
│
├── Assets
│   ├── screenshots/
│   └── icons/
│
└── Documentation
    └── README.md
```

    
### ⚙️ How It Works
- User opens extension popup
- User saves profile information
-Popup sends commands to content script
- Content script scans webpage forms dynamically
- Labels, placeholders, and field names are analyzed
- Smart keyword matching identifies correct fields
- Autofill engine inserts matching data
- Browser events are dispatched automatically
- Form fields are highlighted after autofill

### 🧠 Smart Matching Logic

The extension intelligently identifies fields using:

- Input names
- Labels
- Placeholders
- IDs
- DOM attributes

Example:

firstname: [
  "first name",
  "firstname",
  "given-name",
  "fname"
]

This improves compatibility across different websites.

### 🎯 Supported Use Cases

- Job application forms
- Internship applications
- Student registration portals
- Survey forms
- Contact forms
- Automation practice websites
- Testing automation workflows

### 🎥 Demo


<img width="1907" height="964" alt="autofill extension screenshot  1" src="https://github.com/user-attachments/assets/a17a215d-062b-417b-9401-ca0faae6c830" />
<img width="530" height="756" alt="autofill extension screenshot 2" src="https://github.com/user-attachments/assets/56c47144-d392-4f45-9f06-5c910f59e419" />
<img width="1424" height="888" alt="autofill extension screenshot 3" src="https://github.com/user-attachments/assets/59e7d255-a680-4fa5-b1a0-ef03cec9f4dc" />
<img width="1895" height="971" alt="autofill extension screenshot 4" src="https://github.com/user-attachments/assets/50306303-03cb-4985-9690-eea227769c69" />


### ⚡ Performance

- Autofill execution under milliseconds
- Lightweight extension architecture
- Fast DOM scanning
- Minimal memory usage
- Responsive UI interactions

### 🏗️ Installation

1. Clone the repository
   git clone https://github.com/mlr-pravallika/ai-autofill-extension.git
2. Open Chrome Browser
3. Navigate to:
   chrome://extensions/
4. Enable:
   Developer Mode
5. Click:
   Load Unpacked
6. Select the project folder
7. Extension is ready to use 🚀

### 🏆 Why This Project Matters

This project demonstrates practical engineering and automation skills including:

- Real-world browser extension architecture
- Intelligent form automation
- DOM parsing and manipulation
- Async JavaScript workflows
- Dynamic event handling
- Frontend + Backend integration
- Automation tool development
- Problem-solving using browser APIs


### 📌 Future Improvements

- GPT-powered intelligent responses
- AI-generated textarea answers
- Resume parsing system
- LinkedIn smart autofill
- Advanced React dropdown support
- Multi-profile management
- Cloud synchronization
- AI label recognition
- Authentication system
- Browser sync support

### 📚 Key Learnings

- Chrome Extension Development
- Browser Automation Engineering
- DOM Parsing Techniques
- Event-driven Programming
- Async Messaging Systems
- Intelligent Field Mapping
- Real-world Debugging
- Frontend-Backend Communication
  
### 🔒 Security Notes
- No sensitive data is sent externally
- User profile data is stored locally
- Autofill operations run inside browser context
- Secure communication between extension scripts
  
### ⭐ Project Impact

Smart Autofill AI demonstrates the ability to:

- Build production-style browser tools
- Solve repetitive real-world problems
- Design intelligent automation systems
- Work with browser APIs professionally
- Implement scalable extension architecture

This project reflects hands-on learning, experimentation, debugging, and iterative feature development in real-world browser automation engineering.

### 👨‍💻 Author

Marri Lalitha Raga Pravallika

### 🏆 Recruiter Note

This project demonstrates:

- Real-world automation engineering
- Chrome Extension development
- DOM parsing expertise
- Intelligent field matching systems
- Browser API usage
- Dynamic form automation
- Async JavaScript workflows
- Practical problem-solving skills

The project was independently developed as a learning-driven engineering initiative to gain hands-on experience in browser automation and intelligent web tooling.
