📋Task Manager App
===
Take control of your tasks and boost your productivity with a Todo app!

## 📝 Paper Information
- Title:  `Task Manager`
- Author:  `Ahmed Mahmoud Abdelfattah`

## ▶️ Hosted Site
- Hosted Site where you can view the live version of the assessment:
   [Task Manager](https://task-manager-task.vercel.app)

## 💻 Install
- I did was start with a fresh Create Next App instance to use the lasted version of Next v. (14.0.4)
- the commends for install next
  ```
  npx create-next-app@latest

  ```

- the commends for run Next app in development
  ```
  npm run dev
  ```
- the commends for run Next app in production
  ```
  npm run start
  ```

- the commends for run json-server to test app;
  ```
  npm run start
  ```

- the commends for build Next app to production
  ```
  npm run build
  ```
## 💽 Dependence

  ```
  "dependencies": {
    "@reduxjs/toolkit": "^2.0.1",
    "json-server": "^1.0.0-alpha.21",
    "next": "14.0.4",
    "react": "^18",
    "react-dom": "^18",
    "react-redux": "^9.1.0"
  },

  ```
## 💽 Dependence on Development
  ```
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "autoprefixer": "^10.0.1",
    "eslint": "^8",
    "eslint-config-next": "14.0.4",
    "postcss": "^8",
    "prettier": "^3.2.2",
    "prettier-plugin-tailwindcss": "^0.5.11",
    "tailwindcss": "^3.3.0",
    "typescript": "^5"
  }
  ```
- to install this dependence my use npm package by command
  ```
    npm install
  ```
## ➡️ Directory Hierarchy
```
Task-Manager
 ┣ 📂.next
 ┣ 📂node_modules
 ┣ 📂public
 ┃ ┗ 📂images
 ┃ ┃ ┣ ⚛️logo.png
 ┃ ┃ ┗ ⚛️tasks-icon.svg
 ┣ 📂src
 ┃ ┣ 📂app
 ┃ ┃ ┣ 📂add-task
 ┃ ┃ ┃ ┗ ⚛️page.tsx
 ┃ ┃ ┣ 📂api
 ┃ ┃ ┃ ┗ 📂v1
 ┃ ┃ ┃ ┃ ┗ 📂tasks
 ┃ ┃ ┃ ┃ ┃ ┣ 📂[taskId]
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ ⚛️route.ts
 ┃ ┃ ┃ ┃ ┃ ┗ ⚛️route.ts
 ┃ ┃ ┣ 📂edit-task
 ┃ ┃ ┃ ┗ ⚛️page.tsx
 ┃ ┃ ┣ 📂view-tasks
 ┃ ┃ ┃ ┗ 📂[taskId]
 ┃ ┃ ┃ ┃ ┗ ⚛️page.tsx
 ┃ ┃ ┣ ⚛️apple-icon.png
 ┃ ┃ ┣ ⚛️error.tsx
 ┃ ┃ ┣ ⚛️favicon.ico
 ┃ ┃ ┣ ⚛️global-error.tsx
 ┃ ┃ ┣ ⚛️globals.css
 ┃ ┃ ┣ ⚛️icon.png
 ┃ ┃ ┣ ⚛️layout.tsx
 ┃ ┃ ┣ ⚛️loading.tsx
 ┃ ┃ ┣ ⚛️not-found.tsx
 ┃ ┃ ┗ ⚛️page.tsx
 ┃ ┣ 📂baseApi
 ┃ ┃ ┗ ⚛️apiUrl.tsx
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂providers
 ┃ ┃ ┃ ┣ ⚛️Providers.tsx
 ┃ ┃ ┃ ┗ ⚛️ReduxProv.tsx
 ┃ ┃ ┣ 📂serverToClient
 ┃ ┃ ┗ 📂UI
 ┃ ┃ ┃ ┣ 📂common
 ┃ ┃ ┃ ┃ ┣ 📂formPages
 ┃ ┃ ┃ ┃ ┃ ┗ ⚛️CustomForm.tsx
 ┃ ┃ ┃ ┃ ┗ 📂SVG
 ┃ ┃ ┃ ┃ ┃ ┣ ⚛️AddSVG.tsx
 ┃ ┃ ┃ ┃ ┃ ┣ ⚛️DeleteSVG.tsx
 ┃ ┃ ┃ ┃ ┃ ┗ ⚛️EditSVG.tsx
 ┃ ┃ ┃ ┣ 📂footer
 ┃ ┃ ┃ ┃ ┗ ⚛️Footer.tsx
 ┃ ┃ ┃ ┣ 📂header
 ┃ ┃ ┃ ┃ ┗ ⚛️Header.tsx
 ┃ ┃ ┃ ┗ 📂pages
 ┃ ┃ ┃ ┃ ┣ 📂addTask
 ┃ ┃ ┃ ┃ ┃ ┗ ⚛️AddTask.tsx
 ┃ ┃ ┃ ┃ ┣ 📂editTask
 ┃ ┃ ┃ ┃ ┃ ┗ ⚛️EditTask.tsx
 ┃ ┃ ┃ ┃ ┣ 📂home
 ┃ ┃ ┃ ┃ ┃ ┣ 📂block
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂units
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ ⚛️TaskItemList.tsx
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ ⚛️TaskItemsList.tsx
 ┃ ┃ ┃ ┃ ┃ ┗ ⚛️TasksList.tsx
 ┃ ┃ ┃ ┃ ┗ 📂viewTasks
 ┃ ┃ ┃ ┃ ┃ ┗ 📂taskItemDetails
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ ⚛️TaskItemDetails.tsx
 ┃ ┣ 📂hooks
 ┃ ┃ ┣ 📂common
 ┃ ┃ ┣ 📂functions
 ┃ ┃ ┃ ┣ ⚛️useMobileActive.tsx
 ┃ ┃ ┃ ┗ ⚛️useMobileScreen.tsx
 ┃ ┃ ┣ 📂header
 ┃ ┃ ┃ ┗ ⚛️useHeader.tsx
 ┃ ┃ ┗ 📂pages
 ┃ ┃ ┃ ┣ 📂addTask
 ┃ ┃ ┃ ┃ ┗ ⚛️useAddTask.tsx
 ┃ ┃ ┃ ┣ 📂editTask
 ┃ ┃ ┃ ┃ ┗ ⚛️useEditTask.tsx
 ┃ ┃ ┃ ┣ 📂home
 ┃ ┃ ┃ ┃ ┗ ⚛️useTasksList.tsx
 ┃ ┃ ┃ ┗ 📂viewTasks
 ┃ ┃ ┃ ┃ ┗ 📂taskItemDetails
 ┃ ┃ ┃ ┃ ┃ ┗ ⚛️useTaskItemDetails.tsx
 ┃ ┣ 📂redux
 ┃ ┃ ┣ 📂app
 ┃ ┃ ┃ ┣ ⚛️hooks.ts
 ┃ ┃ ┃ ┗ ⚛️store.ts
 ┃ ┃ ┣ 📂features
 ┃ ┃ ┃ ┗ 📂local
 ┃ ┃ ┃ ┃ ┗ 📂tasks
 ┃ ┃ ┃ ┃ ┃ ┗ ⚛️tasksSlice.ts
 ┃ ┃ ┗ 📂typesRedux
 ┃ ┃ ┃ ┗ 📂tasks
 ┃ ┃ ┃ ┃ ┗ ⚛️TasksTypes.ts
 ┃ ┣ 📂types
 ┃ ┗ 📂utils
 ┃ ┃ ┗ 📂localStorage
 ┃ ┃ ┃ ┣ ⚛️getFromStorage.ts
 ┃ ┃ ┃ ┣ ⚛️removeFromStorage.ts
 ┃ ┃ ┃ ┗ ⚛️setToLocalStorage.ts
 ┣ ⚛️.editorconfig
 ┣ ⚛️.env.local
 ┣ ⚛️.eslintrc.json
 ┣ ⚛️.gitignore
 ┣ ⚛️.prettierrc
 ┣ ⚛️next-env.d.ts
 ┣ ⚛️next.config.js
 ┣ ⚛️package-lock.json
 ┣ ⚛️package.json
 ┣ ⚛️postcss.config.js
 ┣ ⚛️README.md
 ┣ ⚛️tailwind.config.ts
 ┗ ⚛️tsconfig.json

```

## 👨🏻‍💻 Code Details
- I used Function Components - not class Components in React library.
- I used App folder base router- not page folder base router in Next library.
- I used React Query in client components to Fetch the full post content, author, and comments from the given API using.
- I used React Query to send the post data to the given API endpoint.
- I used Formik for build and handle form for send the post data.
- I used react-toastify to display a notification on submit.
- I used sass for style.
- I used Fetch directly in server components to Fetch the full post content, author, and comments from the given API using.
-I create folder structue based on this article with a little different [Ultimate ternary folder structure](https://nagibaba.medium.com/ultimate-ternary-folder-structure-for-large-react-applications-9bb6882d4372/)

## 🗒️ You can let me know any feedback that I can improve the project with it

## ↩️ References
- [React Reference](https://react.dev/reference/react)
- [Next Documentation](https://nextjs.org/docs)
- [Json Server Guide](https://www.freecodecamp.org/news/json-server-for-frontend-development/)

## 🔑 License
**This project is licensed under the terms of the [MIT](https://choosealicense.com/licenses/mit/) license.**

##
👋 I hope you like my project.
