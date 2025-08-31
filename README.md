📦 @lazy-js/validators

Unified validation and transformation toolkit built on top of class-validator
 and class-transformer
.

It re-exports everything from both libraries and adds a growing set of extra validators and custom transformers for modern applications.

🚀 Installation
npm install @lazy-js/validators
# or
yarn add @lazy-js/validators
# or
pnpm add @lazy-js/validators

📖 Usage
import { IsEmail, IsStrongPassword, TrimString } from "@lazy-js/validators";

class User {
  @IsEmail()
  @TrimString()
  email: string;

  @IsStrongPassword()
  password: string;
}

✨ Features

✅ Re-exports all decorators from class-validator

✅ Re-exports all transformers from class-transformer

✅ Extra validators:

IsStrongPassword

IsPhoneNumberWithCountry

(more coming…)

✅ Extra transformers:

TrimString

ToBoolean

(more coming…)

📂 Project Structure
src/
├── index.ts              # Entry point
├── reexports.ts          # Re-exports class-validator + class-transformer
├── validators/           # Custom validation decorators
│   ├── IsStrongPassword.ts
│   └── IsPhoneNumberWithCountry.ts
└── transformers/         # Custom transformers
    ├── TrimString.ts
    └── ToBoolean.ts

🛠️ Development
# Build
npm run build

# Run tests
npm test

📜 License & Attribution

This project is licensed under the MIT License.

It includes and re-exports functionality from:

class-validator
 (MIT License © Typestack)

class-transformer
 (MIT License © Typestack)

Any additional validators/transformers in this package are © 2025 Mahmoud (Lazy-JS) and contributors.
