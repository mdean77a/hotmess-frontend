# hotmess-frontend

Front end for hot mess demo

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager
- OpenAI API Key (required for AI chat functionality)

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd thanksgiving_hotmess
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   
   Create a `.env` file in the `thanksgiving_hotmess` directory with your API key:
   ```bash
   OPENAI_API_KEY=your-openai-api-key-here
   ```
   
   **Important:** Make sure your `.env` file is in the `thanksgiving_hotmess` directory (not the root directory), as this is where Next.js will look for it.

### Running the Application

#### Development Mode

To run the application in development mode with hot-reload:

```bash
npm run dev
```

The application will start on [http://localhost:3000](http://localhost:3000). Open this URL in your browser to view the app.

#### Production Build

To create an optimized production build:

```bash
npm run build
```

To run the production build:

```bash
npm run start
```

#### Linting

To run ESLint and check for code quality issues:

```bash
npm run lint
```

## 📁 Project Structure

- `/app` - Next.js app directory with pages and API routes
- `/components` - React components including UI components
- `/lib` - Utility functions and helpers
- `/public` - Static assets

## 🛠️ Tech Stack

- **Framework:** Next.js 16
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI
- **AI Integration:** Vercel AI SDK

## 📝 Notes

- The default development server runs on port 3000
- Make sure all dependencies are installed before running the application
- Check the `package.json` file in the `thanksgiving_hotmess` directory for available scripts
