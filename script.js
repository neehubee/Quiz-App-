// HTML Questions
const htmlQuestions = [
  {
    question: "What does HTML stand for?",
    options: [
      "HyperText Markup Language",
      "HyperText Management Language",
      "Home Tool Markup Language",
      "Hyper Transfer Markup Language",
    ],
    answer: "HyperText Markup Language",
  },


  {
    question:
      "What attribute is used to define the destination of a link in HTML?",
    options: ["href", "src", "action", "destination"],
    answer: "href",
  },
  {
    question: "What is the purpose of the <head> element in an HTML document?",
    options: [
      "To define the main content of the page.",
      "To provide metadata and links to external resources.",
      "To display headings on the page.",
      "To create the body of the page.",
    ],
    answer: "To provide metadata and links to external resources.",
  },
  {
    question:
      "Which attribute is used to specify an alternate text for an image if the image cannot be displayed?",
    options: ["title", "src", "alt", "description"],
    answer: "alt",
  },
  {
    question:
      "Which attribute specifies that an input field must be filled out before submitting?",
    options: ["required", "placeholder", "value", "mandatory"],
    answer: "required",
  },
  {
    question: "What is the purpose of the alt attribute in an image tag?",
    options: [
      "Specifies the title of the image",
      "Provides a textual description of the image",
      "Specifies the location of the image",
      "Defines the image's resolution",
    ],
    answer: "Provides a textual description of the image",
  },
  {
    question: "What does the <head> element in HTML contain?",
    options: [
      "Metadata about the page",
      "Visible content of the page",
      "Footer information",
      "Navigation links",
    ],
    answer: "Metadata about the page",

  },
  
  },
  {
    question: "Which HTML element is used to define a paragraph?",
    options: ["p", "text", "div", "span"],

    answer: "p",
  },
  {
    question: "What is the correct HTML for inserting an audio file?",
    options: [
      "<audio src='audio.mp3'></audio>",
      "<audio file='audio.mp3'></audio>",
      "<audio url='audio.mp3'></audio>",
      "<music src='audio.mp3'></music>",
    ],
    answer: "<audio src='audio.mp3'></audio>",

  },
  {
    question: "Which HTML element is used to define an ordered list?",
    options: ["ul", "li", "ol", "ol-list"],

    answer: "ol",
  },
]

// DBMS questions

const dbmsQuestions = [
  {
    question: "Which of the following is a type of DBMS?",
    options: ["Hierarchical", "Relational", "Network", "All of the above"],

    answer: "All of the above",
  },
  {
    question: "What does SQL stand for?",
    options: [
      "Structured Query Language",
      "Simple Query Language",
      "Sequential Query Language",
      "Standard Query Language",
    ],
    answer: "Structured Query Language",

  },
  {
    question:
      "Which command is used to remove all rows from a table without logging the individual row deletions?",
    options: ["DELETE", "DROP", "TRUNCATE", "REMOVE"],
    answer: "TRUNCATE",

  },
  {
    question: "In ER diagrams, what does a diamond shape represent?",
    options: ["Entity", "Attribute", "Relationship", "Primary Key"],
    answer: "Relationship",

  },
  {
    question: "Which of the following is not a property of a transaction?",
    options: ["Atomicity", "Consistency", "Compilation", "Isolation"],
    answer: "Compilation",

  },
  {
    question: "Which SQL clause is used to filter records?",
    options: ["SELECT", "WHERE", "FROM", "ORDER BY"],
    answer: "WHERE",
  },
  {
    question: "What is the main purpose of normalization in DBMS?",
    options: [
      "To increase redundancy",
      "To create backup",
      "To eliminate data redundancy",
      "To improve speed",
    ],
    answer: "To eliminate data redundancy",
  },

  {
    question: "Which normal form removes transitive dependency?",
    options: ["1NF", "2NF", "3NF", "BCNF"],
    answer: "3NF",

  },
  {
    question: "Which key uniquely identifies a record in a table?",
    options: ["Foreign key", "Secondary key", "Primary key", "Candidate key"],
    answer: "Primary key",

  },
  {
    question:
      "Which language is used to define the structure of a database schema?",
    options: ["DCL", "DML", "DDL", "TCL"],
    answer: "DDL",

  },
  {
    question: "Which of the following is not a DML command?",
    options: ["SELECT", "INSERT", "UPDATE", "DROP"],
    answer: "DROP",

  },
  {
    question: "Which index allows faster search of records?",
    options: ["Hash index", "B-tree index", "Both", "None"],
    answer: "Both",

  },
  {
    question: "Which command is used to delete a table from a database?",
    options: ["DELETE TABLE", "DROP TABLE", "REMOVE TABLE", "ERASE TABLE"],
    answer: "DROP TABLE",
  },
  {
    question: "Which of these is a correct foreign key definition?",
    options: [
      "foreign key (emp_id) references employees(emp_id);",
      "foreignkey(emp_id) refers employees(emp_id);",
      "foreign emp_id key employees(emp_id);",
      "foreign_key emp_id on employees;",
    ],
    answer: "foreign key (emp_id) references employees(emp_id);",
  },
  {
    question:
      "Which join returns all records from both tables when there is a match?",
    options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN"],
    answer: "FULL OUTER JOIN",
  },
];


// CSS Questions
const cssQuestions = [
  {
    question:
      "Which of the following is the correct CSS syntax for selecting an element with the class name 'example'?",
    options: [
      ".example { color: red; }",
      "example { color: red; }",
      "#example { color: red; }",
      "*example { color: red; }",
    ],
    answer: ".example { color: red; }",
  },
  {
    question: "What does the CSS display property control?",
    options: [
      "The visibility of an element",
      "The layout behavior of an element",
      "The background color of an element",
      "The size of an element",
    ],
    answer: "The layout behavior of an element",

  },
  {
    question:
      "Which CSS property is used to change the background color of an element?",
    options: ["color", "bgcolor", "background-color", "background"],
    answer: "background-color",

  },
  {
    question:
      "Which CSS property is used to change the font size of an element?",
    options: ["font-style", "font-size", "text-size", "size"],

    answer: "font-size",
  },
  {
    question: "How do you apply a background image in CSS?",
    options: [
      "background: url('image.jpg');",
      "background-image: 'image.jpg';",
      "background-image: url('image.jpg');",
      "image-background: url('image.jpg');",
    ],
    answer: "background-image: url('image.jpg');",

  },
  {
    question: "Which CSS property controls the space between words?",
    options: ["letter-spacing", "word-spacing", "text-spacing", "line-height"],
    answer: "word-spacing",

  },
  {
    question: "Which property is used to change the color of text in CSS?",
    options: ["color", "text-color", "font-color", "background-color"],
    answer: "color",

  },
  {
    question: "How do you select an element with the id 'header' in CSS?",
    options: ["#header", ".header", "header", "[id='header']"],
    answer: "#header",

  },
  {
    question: "What is the default value of the position property in CSS?",
    options: ["static", "relative", "absolute", "fixed"],
    answer: "static",

  },
  {
    question:
      "Which CSS property is used to add space between an element's border and its content?",
    options: ["padding", "margin", "border-spacing", "gap"],
    answer: "padding",
  },
];
//Cpp Questions

const cppQuestions = [
  {
    question:
      "Which of the following is the correct way to declare a variable in C++?",
    options: ["int x;", "x int;", "int x = 0;", "int x: 0;"],
    answer: "int x;",
  },
  {
    question:
      "Which of these is NOT a valid way to allocate memory dynamically in C++?",
    options: [
      "int* p = new int;",
      "int p = new int;",
      "int* p = new int[10];",
      "delete p;",
    ],
    answer: "int p = new int;",
  },
  {
    question:
      "What feature of C++ allows a function or an operator to have different meanings based on context?",

    options: ["Polymorphism", "Encapsulation", "Abstraction", "Inheritance"],
    answer: "Polymorphism",
  },
  {
    question: "What does the 'mutable' keyword do in C++?",
    options: [
      "Allows a member of a const object to be modified",
      "Makes a variable thread-safe",
      "Declares a variable as global",
      "Defines a virtual function",
    ],
    answer: "Allows a member of a const object to be modified",
  },
  {
    question:
      "What happens if you don't provide a destructor in a class with dynamically allocated memory?",
    options: [
      "Nothing, the compiler handles it automatically",
      "Memory leak",
      "Compile-time error",
      "Runtime exception",
    ],
    answer: "Memory leak",
  },
  {
    question:
      "Which C++11 feature allows you to initialize variables directly inside the class definition?",
    options: [
      "In-class member initializers",
      "Delegating constructors",
      "Auto keyword",
      "Lambda expressions",
    ],
    answer: "In-class member initializers",
  },
  {
    question:
      "What is the main difference between 'struct' and 'class' in C++?",

    options: [
      "struct members are public by default; class members are private",
      "structs can't have functions; classes can",
      "No difference",
      "Classes can't inherit; structs can",
    ],
    answer: "struct members are public by default; class members are private",
  },
  {
    question: "What is the correct syntax for a single-line comment in C++?",
    options: [
      "// This is a comment",
      "/* This is a comment */",
      "# This is a comment",
      "<!-- This is a comment -->",
    ],
    answer: "// This is a comment",
  },
  {
    question:
      "Which of the following is used to include a standard library in C++?",
    options: [
      "#include <iostream>",
      "#include iostream",
      "import iostream",
      "#include <iostream.h>",
    ],
    answer: "#include <iostream>",
  },
  {
    question:
      "What is the output of the following code: `std::cout << 5 + 3;`?",
    options: ["8", "53", "Error", "5 + 3"],
    answer: "8",
  },
];
// JavaScript Questions
const jsQuestions = [
  {
    question:
      "Which of the following is the correct way to define a function in JavaScript?",
    options: [
      "function myFunction() { }",
      "def myFunction() { }",
      "function: myFunction() { }",
      "func myFunction() { }",
    ],
    answer: "function myFunction() { }",
  },
  {
    question: "How do you declare a variable in JavaScript?",
    options: [
      "var myVariable;",
      "let myVariable;",
      "const myVariable;",
      "All of the above",
    ],
    answer: "All of the above",
  },
  {
    question:
      "Which of the following is used to add an item to the end of an array in JavaScript?",
    options: [
      "array.push(item);",
      "array.add(item);",
      "array.append(item);",
      "array.insert(item);",
    ],
    answer: "array.push(item);",

  },
  {
    question:
      "Which method is used to convert a string to lowercase in JavaScript?",
    options: ["toLowerCase()", "lowercase()", "toLower()", "convertLower()"],
    answer: "toLowerCase()",
  },
  {
    question:
      "Which operator is used to assign a value to a variable in JavaScript?",
    options: ["=", "==", "===", ":="],
    answer: "=",

  },
  {
    question: "What is the output of 5 + '5' in JavaScript?",
    options: ["55", "10", "error", "undefined"],
    answer: "55",

  },
  {
    question:
      "Which method is used to remove the last element from an array in JavaScript?",
    options: ["pop()", "remove()", "shift()", "slice()"],
    answer: "pop()",

  },
  {
    question: "Which statement is used to stop a loop in JavaScript?",
    options: ["break", "exit", "stop", "return"],
    answer: "break",
  },
  {
    question: "How do you create an object in JavaScript?",
    options: [
      "let obj = {};",
      "let obj = [];",
      "let obj = new Object();",
      "Both A and C",
    ],
    answer: "Both A and C",
  },
  {
    question: "What does the 'this' keyword refer to in JavaScript?",
    options: [
      "The current function",
      "The global object",
      "The object it belongs to",
      "The previous variable",
    ],
    answer: "The object it belongs to",
  },
];



// React Questions
const reactQuestions = [
  {
    question: "What is JSX?",
    options: [
      "JavaScript XML",
      "JavaScript Extension",
      "Java Syntax Extension",
      "JSON Syntax",
    ],

    answer: "JavaScript XML",
  },
  {
    question: "What is the purpose of the `useState` hook in React?",
    options: [
      "To fetch data",
      "To add state to functional components",
      "To perform side effects",
      "To create context",
    ],
    answer: "To add state to functional components",
  },
  {
    question:
      "How do you pass data from a parent component to a child component?",
    options: ["Using state", "Using props", "Using context", "Using Redux"],
    answer: "Using props",
  },
  {
    question: "In React, what is used to render a list of elements?",
    options: [
      "The for loop",
      "The forEach() method",
      "The map() method",
      "The render() method",
    ],

    answer: "The map() method",
  },
  {
    question: "What does `ReactDOM.render()` do?",
    options: [
      "It renders a React element to the DOM",
      "It compiles React code",
      "It creates a new React component",
      "It updates the virtual DOM",
    ],
    answer: "It renders a React element to the DOM",
  },
  {
    question: "What is the purpose of the `useEffect` hook?",
    options: [
      "To manage component state",
      "To handle user events",
      "To perform side effects in functional components",
      "To optimize rendering",
    ],
    answer: "To perform side effects in functional components",
  },
  {
    question: "Which of the following is NOT a core concept of React?",
    options: ["Components", "Virtual DOM", "Templates", "State and Props"],
    answer: "Templates",
  },
  {
    question: "How do you create a React functional component?",
    options: [
      "class MyComponent extends React.Component",
      "function MyComponent() { ... }",
      "new React.Component()",
      "create.component()",
    ],
    answer: "function MyComponent() { ... }",
  },
  {
    question: "What is the purpose of 'keys' when rendering a list?",
    options: [
      "To style list items",
      "To identify which items have changed, are added, or are removed",
      "To handle click events",
      "To define the list order",
    ],
    answer: "To identify which items have changed, are added, or are removed",
  },
  {
    question: "What tool is commonly used to create a new React app?",
    options: ["npm init", "react-start", "Create React App", "react-new"],
    answer: "Create React App",
  },
];


// Next.js Questions
const nextjsQuestions = [
  {
    question: "How is routing primarily handled in Next.js?",
    options: [
      "Using a routing library like React Router",
      "Through a configuration file",
      "Based on the file system in the `pages` directory",
      "Manually in the server file",
    ],
    answer: "Based on the file system in the `pages` directory",
  },
  {
    question: "Which rendering method pre-renders a page at build time?",
    options: [
      "Server-Side Rendering (SSR)",
      "Client-Side Rendering (CSR)",
      "Static Site Generation (SSG)",
      "Incremental Static Regeneration (ISR)",
    ],
    answer: "Static Site Generation (SSG)",
  },
  {
    question: "What is the purpose of the `/pages/api` directory in Next.js?",
    options: [
      "To store static assets",
      "To create serverless API endpoints",
      "To define page routes",
      "To manage global styles",
    ],
    answer: "To create serverless API endpoints",
  },
  {
    question:
      "Which component is used for optimized, client-side navigation between pages?",

    options: ["<a>", "<Route>", "<Navigate>", "<Link>"],
    answer: "<Link>",
  },
  {
    question: "What is `getStaticProps` used for?",
    options: [
      "To fetch data for client-side rendering",
      "To fetch data at build time for pre-rendering",
      "To handle API requests",
      "To define dynamic routes",
    ],
    answer: "To fetch data at build time for pre-rendering",
  },
  {
    question:
      "How do you create a dynamic route in Next.js, for example for a blog post?",
    options: [
      "/pages/blog/[id].js",
      "/pages/blog/{id}.js",
      "/pages/blog/dynamic.js",
      "/pages/blog?id=[id].js",
    ],

    answer: "/pages/blog/[id].js",
  },
  {
    question: "What is Server-Side Rendering (SSR)?",
    options: [
      "The page is rendered by the browser",
      "The page is rendered on the server for each request",
      "The page is rendered at build time",
      "The page is not rendered at all",
    ],
    answer: "The page is rendered on the server for each request",
  },
  {
    question: "Which function is used to fetch data on every request for SSR?",
    options: [
      "getStaticProps",
      "getServerSideProps",
      "getInitialProps",
      "useEffect",
    ],

    answer: "getServerSideProps",
  },
  {
    question: "What is the main benefit of Image Optimization in Next.js?",
    options: [
      "It automatically converts images to CSS backgrounds",
      "It serves images in modern formats like WebP and resizes them",
      "It applies Instagram-like filters",
      "It stores images in a database",
    ],
    answer: "It serves images in modern formats like WebP and resizes them",
  },
  {
    question:
      "What command do you use to build a Next.js application for production?",
    options: ["npm start", "next dev", "npm run build", "next produce"],
    answer: "npm run build",
  },
];


// Git & GitHub Questions
const gitQuestions = [
  {
    question: "What command initializes a new Git repository?",
    options: ["git start", "git new", "git init", "git create"],
    answer: "git init",
  },
  {
    question: "Which command stages a file for the next commit?",
    options: ["git stage", "git add", "git commit", "git track"],
    answer: "git add",
  },
  {
    question:
      "How do you check the status of your working directory and staging area?",

    options: ["git check", "git log", "git status", "git diff"],
    answer: "git status",
  },
  {
    question:
      "What command is used to record the staged changes to the repository?",

    options: ["git push", "git save", "git commit", "git record"],
    answer: "git commit",
  },
  {
    question:
      "How do you send your committed changes to a remote repository like GitHub?",

    options: ["git send", "git upload", "git remote", "git push"],
    answer: "git push",
  },
  {
    question: "What does the `git clone` command do?",
    options: [
      "Creates a new branch",
      "Creates a copy of a remote repository on your local machine",
      "Merges two repositories",
      "Deletes a repository",
    ],
    answer: "Creates a copy of a remote repository on your local machine",
  },
  {
    question: "How do you create a new branch and switch to it in one command?",
    options: [
      "git branch -c <branch-name>",
      "git switch -n <branch-name>",
      "git checkout -b <branch-name>",
      "git new-branch <branch-name>",
    ],
    answer: "git checkout -b <branch-name>",
  },
  {
    question: "What is a 'pull request' on GitHub?",
    options: [
      "A request to pull code from someone's computer",
      "A notification that you have new commits",
      "A way to propose changes to a repository for review",
      "A command to download the latest changes",
    ],
    answer: "A way to propose changes to a repository for review",
  },
  {
    question:
      "Which command is used to merge another branch into your current branch?",

    options: [
      "git combine <branch-name>",
      "git join <branch-name>",
      "git merge <branch-name>",
      "git attach <branch-name>",
    ],
    answer: "git merge <branch-name>",
  },
  {
    question: "What is the purpose of the `.gitignore` file?",
    options: [
      "To list all files in the repository",
      "To specify intentionally untracked files that Git should ignore",
      "To store your Git credentials",
      "To define Git commands",
    ],
    answer: "To specify intentionally untracked files that Git should ignore",
  },
];

// Python Questions
const pythonQuestions = [

  {
    question: "Which keyword is used to define a function in Python?",
    options: ["function", "def", "func", "define"],
    answer: "def",
  },
  {
    question: "How do you create a single-line comment in Python?",
    options: [
      "// This is a comment",
      "/* This is a comment */",
      "# This is a comment",
      "   This is a comment ",
    ],
    answer: "# This is a comment",
  },
  {
    question:
      "Which data type is used to store a sequence of items, is changeable, and allows duplicate values?",

    options: ["tuple", "dictionary", "set", "list"],
    answer: "list",
  },
  {
    question:
      "What is the correct way to get the length of a list named `my_list`?",
    options: [
      "len(my_list)",
      "my_list.length()",
      "size(my_list)",
      "length(my_list)",
    ],
    answer: "len(my_list)",
  },
  {
    question:
      "In Python, how is a block of code (like in a loop or function) indicated?",

    options: [
      "Using curly braces {}",
      "Using parentheses ()",
      "Using indentation",
      "Using the `begin` and `end` keywords",
    ],
    answer: "Using indentation",
  },
  {
    question:
      "Which operator is used for exponentiation (e.g., 5 to the power of 2)?",

    options: ["^", "*", "**", "pow"],
    answer: "**",
  },
  {
    question: "What will `print(type('Hello'))` output?",
    options: [
      "&lt;class 'string'&gt;",
      "&lt;class 'str'&gt;",
      "&lt;type 'str'&gt;",
      "&lt;class 'string'&gt;",
    ],
    answer: "&lt;class 'str'&gt;",

  },
  {
    question: "Which method is used to add an item to the end of a list?",
    options: [".add()", ".push()", ".insert()", ".append()"],
    answer: ".append()",
  },
  {
    question:
      "How do you access the value associated with the key 'name' in a dictionary `d`?",

    options: ["d.name", "d('name')", "d.get('name')", "d['name']"],
    answer: "d['name']",
  },
  {
    question: "Which statement is used to stop a loop?",
    options: ["stop", "exit", "break", "return"],
    answer: "break",
  },
];


// SQL Questions
const sqlQuestions = [
  {
    question: "Which SQL statement is used to extract data from a database?",
    options: ["GET", "OPEN", "EXTRACT", "SELECT"],
    answer: "SELECT",
  },
  {
    question: "Which SQL clause is used to filter records?",
    options: ["FILTER BY", "WHERE", "SEARCH", "FROM"],
    answer: "WHERE",
  },
  {
    question: "Which SQL statement is used to update data in a database?",
    options: ["MODIFY", "UPDATE", "SAVE", "CHANGE"],
    answer: "UPDATE",
  },
  {
    question: "Which SQL statement is used to insert new data into a database?",
    options: ["ADD NEW", "INSERT INTO", "ADD RECORD", "INSERT NEW"],
    answer: "INSERT INTO",
  },
  {
    question: "Which SQL keyword is used to sort the result-set?",
    options: ["SORT BY", "ORDER BY", "ARRANGE BY", "SORT"],
    answer: "ORDER BY",
  },
  {
    question:
      "Which type of JOIN returns records that have matching values in both tables?",

    options: ["OUTER JOIN", "FULL JOIN", "LEFT JOIN", "INNER JOIN"],
    answer: "INNER JOIN",
  },
  {
    question: "What does the `COUNT()` function in SQL do?",
    options: [
      "Counts the number of columns",
      "Counts the total value of a numeric column",
      "Returns the number of rows that matches a specified criterion",
      "Counts the number of tables",
    ],
    answer: "Returns the number of rows that matches a specified criterion",
  },
  {
    question: "Which SQL statement is used to delete data from a database?",
    options: ["DELETE", "REMOVE", "COLLAPSE", "ERASE"],
    answer: "DELETE",
  },
  {
    question: "What does the `AS` keyword do in a query?",
    options: [
      "It is used to compare two values",
      "It is a wildcard character",
      "It creates an alias for a column or table name",
      "It is used for aggregation",
    ],
    answer: "It creates an alias for a column or table name",
  },
  {
    question: "Which SQL statement is used to create a new table?",
    options: ["CREATE TABLE", "NEW TABLE", "MAKE TABLE", "BUILD TABLE"],
    answer: "CREATE TABLE",
  },
];


// Django Questions
const djangoQuestions = [
  {
    question: "What is the architectural pattern that Django follows?",
    options: [
      "Model-View-Controller (MVC)",
      "Model-View-Presenter (MVP)",
      "Model-View-Template (MVT)",
      "Model-View-Adapter (MVA)",
    ],
    answer: "Model-View-Template (MVT)",
  },
  {
    question:
      "Which file in a Django app is used to define the data models (database schema)?",

    options: ["views.py", "models.py", "urls.py", "admin.py"],
    answer: "models.py",
  },
  {
    question: "What is the primary role of `views.py` in a Django application?",
    options: [
      "To define the database structure",
      "To handle requests and return responses",
      "To map URLs to functions",
      "To render HTML templates",
    ],
    answer: "To handle requests and return responses",
  },
  {
    question: "Which command is used to start the Django development server?",
    options: [
      "django start",
      "python manage.py startserver",
      "django run",
      "python manage.py runserver",
    ],

    answer: "python manage.py runserver",
  },
  {
    question: "What is the purpose of the Django ORM?",
    options: [
      "To handle URL routing",
      "To manage static files",
      "To provide an object-oriented way to interact with the database",
      "To create user interfaces",
    ],
    answer: "To provide an object-oriented way to interact with the database",
  },
  {
    question:
      "Which file is used to map URLs to specific views in a Django project?",

    options: ["views.py", "settings.py", "urls.py", "models.py"],
    answer: "urls.py",
  },
  {
    question:
      "What command creates the database tables for the models defined in your apps?",

    options: [
      "python manage.py makemigrations",
      "python manage.py migrate",
      "python manage.py create_db",
      "python manage.py syncdb",
    ],
    answer: "python manage.py migrate",
  },
  {
    question: "In which project file do you register a new application?",
    options: ["urls.py", "wsgi.py", "manage.py", "settings.py"],
    answer: "settings.py",
  },
  {
    question:
      "What feature provides a ready-to-use interface for administrators to manage site content?",
    options: [
      "The Django Shell",
      "The Django Template Engine",
      "The Django Admin",
      "The Django Forms Library",
    ],
    answer: "The Django Admin",
  },
  {
    question:
      "In a Django template, how do you correctly output the value of a variable `my_variable`?",
    options: [
      "{{ my_variable }}",
      "{% my_variable %}",
      "[[ my_variable ]]",
      "(( my_variable ))",
    ],
    answer: "{{ my_variable }}",
  },
];

// dsa questions starts here

const dsaQuestions = [
  {
    question: " What is the time complexity of binary search?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
    answer: "O(log n)",
  },
  {
    question: " Which data structure uses FIFO?",
    options: ["Stack", "Queue", "Tree", "Graph"],
    answer: "Queue",
  },
  {
    question: " What does 'push' do in a stack?",
    options: [
      "Removes an element",
      "Sorts elements",
      "Adds an element",
      "Finds middle",
    ],

    answer: "Adds an element",
  },
  {
    question: " Which is not a linear data structure?",
    options: ["Array", "Linked List", "Stack", "Tree"],
    answer: "Tree",
  },
  {
    question: " What is the default base of recursion?",
    options: ["While loop", "Loop counter", "Base case", "Tail call"],
    answer: "Base case",
  },
  {
    question: " What is the time complexity of linear search?",
    options: ["O(log n)", "O(n)", "O(1)", "O(n^2)"],
    answer: "O(n)",
  },
  {
    question: " Which data structure uses LIFO?",
    options: ["Queue", "Graph", "Stack", "Linked List"],
    answer: "Stack",
  },
  {
    question: " What is the full form of DSA?",
    options: [
      "Data Save Algorithm",
      "Data Structure Algorithm",
      "Data Structure and Algorithms",
      "Data Sync Application",
    ],
    answer: "Data Structure and Algorithms",
  },
  {
    question: " Which traversal method uses recursion most naturally in trees?",
    options: ["Level Order", "Preorder", "Breadth First", "Level First"],
    answer: "Preorder",
  },
  {
    question: " Which of the following is not used in graph representation?",
    options: ["Adjacency Matrix", "Adjacency List", "Hash Table", "Edge List"],
    answer: "Hash Table",
  },
];

// dsa questions end here



// Added auto-scroll and progress tracking variables
const answeredQuestions = new Set()
let totalQuestions = 0


// Function to update progress bar
function updateProgressBar() {
  const progressText = document.getElementById("progress-text")
  const progressPercentage = document.getElementById("progress-percentage")
  const progressFill = document.getElementById("progress-fill")

  if (progressText && progressPercentage && progressFill) {
    const answered = answeredQuestions.size
    const percentage = Math.round((answered / totalQuestions) * 100)
    progressText.textContent = `Progress: ${answered} / ${totalQuestions}`
    progressPercentage.textContent = `${percentage}%`
    progressFill.style.width = `${percentage}%`
  }
}

// Auto-scroll function
function autoScrollToNext(currentIndex) {
  const nextIndex = currentIndex + 1
  const nextQuestion = document.querySelector(`[data-question-index="${nextIndex}"]`)
  if (nextQuestion) {
    console.log(`Auto-scrolling to question ${nextIndex + 1}`)
    setTimeout(() => {
      nextQuestion.scrollIntoView({
        behavior: "smooth",
        block: "center",
      })
    }, 800) // 0.8 second delay for better UX
  }
}

// Timer and scoring functionality
let actualtime = 60
let timeleft = 60
let timeinterval
let globalscore = 0
const timerElement = document.getElementById("timer")
const scoreElement = document.getElementById("scoree")

function updateTimerDisplay() {
  timerElement.textContent = timeleft.toString()
}

function updateGlobalScore() {
  if (scoreElement) {
    globalscore += actualtime - timeleft
    scoreElement.innerHTML = globalscore.toString()
  }
}

function initializeTimer() {
  timeleft = 60;
  timerElement.textContent = timeleft.toString();
  document.querySelectorAll('input[type="radio"]').forEach((input) => {
    input.disabled = false;
  });

  document.querySelectorAll(".check-answer-btn").forEach((btn) => {
    btn.disabled = false;
  });
  stop();

}

function stop() {
  clearInterval(timeinterval)

}

function start() {
  if (timeinterval) {
    clearInterval(timeinterval)
  }
  actualtime = 60
  timeleft = actualtime
  timerElement.textContent = timeleft.toString()
  timeinterval = setInterval(() => {
    timeleft--
    timerElement.innerText = timeleft.toString()
    if (timeleft <= 0) {
      clearInterval(timeinterval)
      handleTimeUp(currentQuestions)
    }
  }, 1000)
}

function handleTimeUp(questions) {
  document.querySelectorAll('input[type="radio"]').forEach((input) => {
    input.disabled = true;
  });

  document.querySelectorAll(".check-answer-btn").forEach((btn) => {
    btn.disabled = true;
  });

  const response = document.getElementById("result");
  response.textContent = "Time`s up";

  calculateTotalScore(questions);
}

const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");

if (startBtn) {
  startBtn.addEventListener("click", () => {
    initializeTimer();
    start();

    // ✅ Focus on first option after DOM is rendered
    setTimeout(() => {
      const firstOption = document.querySelector('.question-container[data-index="0"] .quiz-option');
      if (firstOption) {
        firstOption.focus();
      } else {
        console.log("❌ Could not find first option to focus.");
      }
    }, 100); // slight delay to ensure rendering is done

  });

}

if (restartBtn) {
  restartBtn.addEventListener("click", () => {
    initializeTimer();
  });

}

// Function to render a single question
const renderQuestion = (question, index, sectionId) => {
  const sectionContainer = document.getElementById(sectionId)
  if (!sectionContainer) return

  const questionElem = document.createElement("div")
  questionElem.classList.add("question-container")
  // Added data attribute for auto-scroll targeting
  questionElem.setAttribute("data-question-index", index)

  // Add question text
  const questionText = document.createElement("p")
  questionText.textContent = `${index + 1}. ${question.question}`
  questionElem.appendChild(questionText)

  // Create options
  const ul = document.createElement("ul");
  ul.className = "option-container";

  question.options.forEach((option, optIndex) => {
    const li = document.createElement("li");
    const label = document.createElement("label");
    label.classList.add("quiz-option");
    label.setAttribute("tabindex", "0"); // Make it keyboard focusable

    const input = document.createElement("input");
    input.type = "radio";
    input.name = `question-${index}`;
    input.value = option;
    input.style.marginRight = "8px";

    const textNode = document.createTextNode(option);
    label.appendChild(input);
    label.appendChild(textNode);
    li.appendChild(label);
    ul.appendChild(li);

    // 🔁 Keyboard Navigation Between Options
    label.addEventListener("keydown", (e) => {
  const allOptions = ul.querySelectorAll(".quiz-option");
  let nextIndex;

  if (e.key === "ArrowDown") {
    e.preventDefault();
    nextIndex = (optIndex + 1) % allOptions.length;
    allOptions[nextIndex].focus();

  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    nextIndex = (optIndex - 1 + allOptions.length) % allOptions.length;
    allOptions[nextIndex].focus();

  } else if (e.key === "Enter") {
    e.preventDefault();
    input.checked = true; // ✅ Just select the option

  } else if (e.key === " ") {
    e.preventDefault();

    // ✅ Trigger "Check Answer" button
    const questionDiv = label.closest(".question-container");
    if (questionDiv) {
      const checkBtn = questionDiv.querySelector(".check-answer-btn");
      if (checkBtn) {
        checkBtn.click();
      }

      // ✅ Focus next question’s first option
      const nextIndex = parseInt(questionDiv.dataset.index) + 1;
      const nextQuestion = document.querySelector(`.question-container[data-index="${nextIndex}"]`);
      if (nextQuestion) {
        const nextFirstOption = nextQuestion.querySelector(".quiz-option");
        if (nextFirstOption) {
          setTimeout(() => nextFirstOption.focus(), 100);
        }
      }
    }
  }
});

  });

  questionElem.appendChild(ul);

  // Add Check Answer button
  const checkBtn = document.createElement("button");
  checkBtn.className = "check-answer-btn";
  checkBtn.dataset.index = index;
  checkBtn.textContent = "Check Answer";
  questionElem.appendChild(checkBtn);
  sectionContainer.appendChild(questionElem);
  questionElem.setAttribute("data-index", index); // ✅ Required for next question focus

  // Add result div
  const resultDiv = document.createElement("div")
  resultDiv.className = "result"
  resultDiv.id = `result-${index}`
  questionElem.appendChild(resultDiv)

  sectionContainer.appendChild(questionElem)
}


// Function to render all questions
const renderQuestions = (questions, sectionId) => {
  // Ensure we don't try to render if the section doesn't exist.
  if (!document.getElementById(sectionId)) return

  // Set total questions for progress tracking
  totalQuestions = questions.length
  questions.forEach((q, index) => renderQuestion(q, index, sectionId))

  questions.forEach((q, index) => renderQuestion(q, index, sectionId));
  // 👇 Auto-focus the first option of the first question
  setTimeout(() => {
    const firstOption = document.querySelector(
      '.question-container[data-index="0"] .quiz-option'
    );
    if (firstOption) firstOption.focus();
  }, 100);
  // Add a final score container at the end
  const sectionContainer = document.getElementById(sectionId);
  const scoreElem = document.createElement("div");
  scoreElem.classList.add("score-container");

  scoreElem.innerHTML = `
  <div style="display: flex; justify-content: space-between; align-items: center; gap: 10px; flex-wrap: wrap;">
    <button id="calculate-score-btn" style="width: 180px; padding: 10px; font-size: 16px;">Calculate Total Score</button>
    <button id="feedback-btn" style="width: 180px; padding: 10px; font-size: 16px;">Feedback / Report</button>
  </div>
  <div id="total-score" style="margin-top: 15px; font-weight: bold;"></div>`
  sectionContainer.appendChild(scoreElem)

  // Initialize progress bar
  updateProgressBar()
}

// Function to check the answer for a specific question
const checkAnswer = (questions, index) => {
  const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`)
  const resultContainer = document.getElementById(`result-${index}`)
  const questionContainer = document.querySelector(`[data-question-index="${index}"]`)
  const button = document.querySelector(`[data-index="${index}"]`)

  if (!selectedOption) {
    resultContainer.textContent = "Please select an answer."
    resultContainer.style.color = "orange"
    return false
  }

  // Mark question as answered and update UI
  answeredQuestions.add(index)
  questionContainer.classList.add("answered")
  button.classList.add("answered")
  button.textContent = "✓ Answered"
  button.disabled = true

  if (selectedOption.value === questions[index].answer) {
    resultContainer.textContent = "✅ Correct!"
    resultContainer.style.color = "green"
    // Update progress and auto-scroll
    updateProgressBar()
    autoScrollToNext(index)
    return true
  } else {
    resultContainer.textContent = `❌ Wrong! The correct answer is: ${questions[index].answer}`
    resultContainer.style.color = "red"
    // Update progress and auto-scroll even for wrong answers
    updateProgressBar()
    autoScrollToNext(index)
    return false
  }

}


};

// Function to calculate the total score
const calculateTotalScore = (questions) => {
  let score = 0
  questions.forEach((q, index) => {
    const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`)
    if (selectedOption && selectedOption.value === q.answer) {
      score++
    }

    globalscore = score
  })

  updateGlobalScore()


  updateGlobleScore();

  // Display the total score
  const totalScoreContainer = document.getElementById("total-score");
  totalScoreContainer.textContent = `Your total score is: ${score} out of ${questions.length}`;
  totalScoreContainer.style.color =
    score === questions.length ? "green" : "blue";
};


// Dynamically render questions based on the page

let currentQuestions = []


document.addEventListener("DOMContentLoaded", () => {
  let questions = []
  let sectionId = ""

  // Determine the quiz type
  if (document.getElementById("html-questions")) {
    questions = htmlQuestions
    sectionId = "html-questions"
  } else if (document.getElementById("css-questions")) {

    questions = cssQuestions
    sectionId = "css-questions"
  } else if (document.getElementById("cpp-questions")) {
    questions = cppQuestions
    sectionId = "cpp-questions"

  } else if (document.getElementById("js-questions")) {
    questions = jsQuestions
    sectionId = "js-questions"
  } else if (document.getElementById("react-questions")) {
    questions = reactQuestions
    sectionId = "react-questions"
  } else if (document.getElementById("nextjs-questions")) {
    questions = nextjsQuestions
    sectionId = "nextjs-questions"
  } else if (document.getElementById("git-questions")) {
    questions = gitQuestions
    sectionId = "git-questions"
  } else if (document.getElementById("python-questions")) {
    questions = pythonQuestions
    sectionId = "python-questions"
  } else if (document.getElementById("sql-questions")) {
    questions = sqlQuestions
    sectionId = "sql-questions"
  } else if (document.getElementById("django-questions")) {

    questions = djangoQuestions
    sectionId = "django-questions"
  } else if (document.getElementById("dsa-questions")) {
    questions = dsaQuestions
    sectionId = "dsa-questions"
  } else if (document.getElementById("dbms-questions")) {
    questions = dbmsQuestions
    sectionId = "dbms-questions"
  }

  if (sectionId) {
    currentQuestions = questions
    renderQuestions(questions, sectionId)


    document.querySelectorAll(".check-answer-btn").forEach((button) => {
      button.addEventListener("click", (event) => {

        const index = parseInt(event.target.getAttribute("data-index"));
        checkAnswer(questions, index);

        // Move focus to next question's first option
        const nextQuestion = document.querySelector(
          `[data-index="${index + 1}"]`
        );
        if (nextQuestion) {
          const nextOptions = nextQuestion.querySelectorAll(".quiz-option");
          if (nextOptions.length > 0) {
            requestAnimationFrame(() => {
              nextOptions[0].focus(); // ✅ Ensures proper focus timing
            });
          }
        }
      });
    });

    document
      .getElementById("calculate-score-btn")
      ?.addEventListener("click", () => {
        initializeTimer();
        calculateTotalScore(questions);
      });


    document.getElementById("feedback-btn")?.addEventListener("click", () => {
      window.location.href = "contact-us.html"
    })
  }

  // Restart quiz handler
  const restartBtn = document.getElementById("restartQuizBtn")
  if (restartBtn) {
    restartBtn.addEventListener("click", () => {
      if (
        confirm(
          "Are you sure you want to restart the quiz? All progress will be lost."
        )
      ) {
        window.location.reload();

      }
    })
  }

  // Contact form logic
  const reasonSelect = document.getElementById("reason")
  const feedbackSection = document.getElementById("feedback-Section")
  const issueSection = document.getElementById("issue-Section")
  const contactForm = document.getElementById("contact-Form")
  const contactResponseMessage = document.getElementById("responseMessage")

  function toggleFormSections() {
    if (!reasonSelect) return
    const selectedReason = reasonSelect.value
    feedbackSection.style.display = "none"
    issueSection.style.display = "none"
    setRequired(feedbackSection, false)
    setRequired(issueSection, false)
    if (selectedReason === "feedback") {
      feedbackSection.style.display = "block"
      setRequired(feedbackSection, true)
    } else if (selectedReason === "issue") {
      issueSection.style.display = "block"
      setRequired(issueSection, true)
    }
  }

  function setRequired(sectionElement, isRequired) {
    const inputs = sectionElement.querySelectorAll(
      'input:not([type="file"]), textarea, select'
    );

    inputs.forEach((input) => {
      input.required = isRequired
    })
  }

  if (contactForm) {
    toggleFormSections()
    reasonSelect.addEventListener("change", toggleFormSections)
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()
      if (!contactForm.checkValidity()) {
        contactResponseMessage.textContent =
          "Please fill out all required fields.";
        contactResponseMessage.style.color = "red";
        return;

      }
      const selectedReason = reasonSelect.value
      let successMessage = ""
      if (selectedReason === "feedback") {
        successMessage = "Thank you for your feedback! We appreciate it."
      } else if (selectedReason === "issue") {
        successMessage = "Your issue has been reported. Thank you!"
      } else {
        successMessage = "Form submitted successfully!"
      }
      const formData = new FormData(contactForm)
      const data = {}
      for (const [key, value] of formData.entries()) {
        data[key] = value
      }
      console.log("Form Data Submitted:", data)
      sessionStorage.setItem("formSubmissionSuccess", successMessage)
      window.location.href = "index.html"
    })
  }

  // Display submission message on index
  const submissionMessageDiv = document.getElementById("submission-message")
  if (submissionMessageDiv) {
    const message = sessionStorage.getItem("formSubmissionSuccess")
    if (message) {
      submissionMessageDiv.textContent = message
      submissionMessageDiv.style.color = "green"
      submissionMessageDiv.style.fontWeight = "bold"
      submissionMessageDiv.style.margin = "15px 0"
      sessionStorage.removeItem("formSubmissionSuccess")
    }
  }
});

// Keyboard Navigation for Quiz List (Homepage)
// Allows users to navigate through quiz topics using Arrow Up/Down keys
// and press Enter to select and open the chosen quiz
const quizItems = document.querySelectorAll(".quiz-item");
let currentIndex = 0;

if (quizItems.length > 0) {
  quizItems[currentIndex].focus();

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      currentIndex = (currentIndex + 1) % quizItems.length;
      quizItems[currentIndex].focus();
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      currentIndex = (currentIndex - 1 + quizItems.length) % quizItems.length;
      quizItems[currentIndex].focus();
    }
    if (e.key === "Enter") {
      quizItems[currentIndex].click();
    }
  });
}

document.addEventListener("keydown", (e) => {
  const active = document.activeElement;
  const isOption = active.classList.contains("quiz-option");

  if (e.code === "Space" && !isOption) {
    e.preventDefault();

    // Find the first visible check button
    const visibleCheckButton = [
      ...document.querySelectorAll(".check-answer-btn"),
    ].find((btn) => btn.offsetParent !== null);

    if (visibleCheckButton) {
      visibleCheckButton.click();
    }
  }
});

