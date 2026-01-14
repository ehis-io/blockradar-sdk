# Contributing to Blockradar SDK

Thank you for your interest in contributing to the Blockradar JavaScript SDK! We welcome contributions from the community to help make this SDK more robust and feature-complete.

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Setup

1. **Fork the repository** on GitHub.
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/blockradar-sdk.git
   cd blockradar-sdk
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```

## Development Workflow

### Building the Project

To compile the TypeScript source code to JavaScript:
```bash
npm run build
```

### Testing

We use [Vitest](https://vitest.dev/) for testing. Please ensure all tests pass before submitting a pull request.

Run tests once:
```bash
npm test
```

### Coding Standards

- We use **TypeScript** for type safety. Ensure all new code is properly typed.
- Follow the existing code style and naming conventions (camelCase for variables/functions, PascalCase for classes).
- Document new methods and classes where appropriate.

## Pull Request Process

1. Create a new branch for your feature or bugfix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. Make your changes and ensure tests pass.
3. Commit your changes with descriptive commit messages.
4. Push your branch to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a **Pull Request** against the `main` branch of the original repository.

## Reporting Issues

If you find a bug or have a feature request, please [open an issue](https://github.com/ehis-io/blockradar-sdk/issues) on GitHub.

Thank you for contributing!
