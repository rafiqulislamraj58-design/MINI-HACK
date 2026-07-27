# 📝 Redux Toolkit Todo App

A modern and responsive Todo Application built with **React**, **Redux Toolkit**, **React Redux**, **Tailwind CSS**, and **LocalStorage**.

This project was developed as part of the **Sheryians Coding School Mini Hackathon 2026** to explore and understand Redux Toolkit through self-learning.

---



---

# 📁 Folder Structure

```
src
│
├── app
│   └── store.js
│
├── components
│   ├── Navbar.jsx
│   ├── TodoForm.jsx
│   ├── TodoList.jsx
│   ├── TodoItem.jsx
│   └── Footer.jsx
│
├── features
│   └── todo
│       └── todoSlice.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# ⚙️ Redux Toolkit Concepts Used

- configureStore()
- createSlice()
- useSelector()
- useDispatch()
- Global State Management
- Reducers
- Actions
- Immutable State Updates

---

# 🔄 Redux Data Flow

```
User Action
      │
      ▼
dispatch(action)
      │
      ▼
Reducer (createSlice)
      │
      ▼
Redux Store
      │
      ▼
useSelector()
      │
      ▼
React Component Re-renders
      │
      ▼
Updated UI
```

---

# 📊 Application Features

### Add Todo

Users can create new tasks.

### Edit Todo

Users can update existing tasks.

### Delete Todo

Users can remove unwanted tasks.

### Complete Todo

Users can mark tasks as completed.

### Task Statistics

The footer dynamically displays:

- Total Tasks
- Completed Tasks
- Pending Tasks

### Local Storage

All todos are automatically saved in LocalStorage and remain available after refreshing the page.

---

# 📖 What I Learned

During this project I learned:

- Why Redux Toolkit is used
- Global State Management
- Redux Store
- createSlice()
- configureStore()
- Reducers & Actions
- useSelector()
- useDispatch()
- LocalStorage Integration
- Building scalable React applications

---

# 🎯 Future Improvements

- Search Todos
- Filter Todos
- Clear All Tasks
- Due Date
- Categories
- Dark Mode

---

# 👨‍💻 Author

**Rafiqul Islam Raj**

Frontend Developer

- LinkedIn: https://linkedin.com/in/your-profile
- GitHub: https://github.com/your-username

---

# 📄 License

This project is created for educational purposes as part of the **Sheryians Coding School Mini Hackathon 2026**.

⭐ If you like this project, don't forget to give it a star.
