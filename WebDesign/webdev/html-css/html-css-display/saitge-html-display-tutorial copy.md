### Tutorial: Understanding the CSS `display` Property for HTML Layouts

The CSS `display` property is one of the most important properties for controlling how elements are laid out on a webpage. This tutorial will guide beginners through different `display` values and how they impact HTML elements.

---

### Resources Required:
   - PC MAC or Linux OS
   - Visual Studio Code
   - VS Code Extention: Live Preview from Microsoft
   - Git Client

### Getting Started

**Before cloning a respository, consider:**
   - The location where the respository will be downloaded to.
   - The repository will be be downloaded to the folder the Git command is run from.
   - The full contents of the respository is downloaded onto the local drive.
   - Backup of your development folder.
---

1. **Clone this Repository**
   
   **Using VS Code:**
      Open the Welcome page from the `Help` menu.
      - Select "Clone Git repository" from the command bar.
      - Use the repository URL:  
         ```bash
            https://github.com/davis-boudreau/saitge-codebase.git
         ```
      - Choose your development directory. The folder `saitge-codebase` will be created.
      - Copy the repository URL.
      - Open your terminal or Git Bash and run:
           ```bash
           git clone https://github.com/yourusername/your-repository.git
           ```
      - Navigate to the repository directory:
           ```bash
           cd your-repository
           ```
   **or Using Command Line:**
   ```bash
      git clone https://github.com/davis-boudreau/saitge-codebase.git
      ```
     
3. **Navigate to the Project Directory**  
      
   **Using Command Line:**
   ```bash
      cd saitge-codebase/webdev/html-basics/
   ```
   **Using VS Code:**
      - Open the Explorer by clicking the file icon or press `CTRL`+`SHIFT`+`E`.
      - Browse the folder structure to locate the project directory.
        
4. **Install Live Preview Extension in VS Code**  
   - Go to the `Extensions` panel in VS Code.
   - Search for and install the `Live Preview` extension by Microsoft.
   - After installation, restart VS Code.
    
5. **Running the code**
      - Use the Explorer to navigate to an `.html` file.
      - Right-click the file and choose `Show Preview`.
     
6. Refer to the `README.md` file in each folder for specific instructions and updates.

---

### Step 1: The Basics of the `display` Property

In CSS, the `display` property determines how an element behaves in the document layout. There are many values for `display`, but we'll focus on the most commonly used:

- **block**
- **inline**
- **inline-block**
- **flex**
- **grid**
  
Let's explore these values with examples.

### Step 2: HTML Setup

Before we start working with the CSS `display` property, let's set up a basic HTML structure.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Display Property Tutorial</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>CSS Display Property</h1>

    <!-- Example 1: Block Elements -->
    <section>
        <h2>Block Elements</h2>
        <div class="block-example">Block Element 1</div>
        <div class="block-example">Block Element 2</div>
    </section>

    <!-- Example 2: Inline Elements -->
    <section>
        <h2>Inline Elements</h2>
        <span class="inline-example">Inline Element 1</span>
        <span class="inline-example">Inline Element 2</span>
    </section>

    <!-- Example 3: Inline-Block Elements -->
    <section>
        <h2>Inline-Block Elements</h2>
        <div class="inline-block-example">Inline-Block 1</div>
        <div class="inline-block-example">Inline-Block 2</div>
    </section>

    <!-- Example 4: Flexbox Layout -->
    <section>
        <h2>Flexbox Layout</h2>
        <div class="flex-container">
            <div class="flex-item">Flex Item 1</div>
            <div class="flex-item">Flex Item 2</div>
            <div class="flex-item">Flex Item 3</div>
        </div>
    </section>

    <!-- Example 5: Grid Layout -->
    <section>
        <h2>Grid Layout</h2>
        <div class="grid-container">
            <div class="grid-item">Grid Item 1</div>
            <div class="grid-item">Grid Item 2</div>
            <div class="grid-item">Grid Item 3</div>
            <div class="grid-item">Grid Item 4</div>
        </div>
    </section>
</body>
</html>
```

### Step 3: CSS for Different `display` Values

Now that we have the HTML structure, let's apply CSS to demonstrate how each `display` value works.

```css
/* styles.css */

/* General styling for the document */
body {
    font-family: Arial, sans-serif;
    margin: 20px;
}

/* Heading styles */
h1, h2 {
    color: #333;
}

/* Block Example */
.block-example {
    display: block;
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    background-color: #f4a261;
    color: white;
    text-align: center;
    /* Block elements take up the full width available */
}

/* Inline Example */
.inline-example {
    display: inline;
    padding: 10px;
    background-color: #2a9d8f;
    color: white;
    margin: 5px;
    /* Inline elements only take up as much width as they need */
}

/* Inline-Block Example */
.inline-block-example {
    display: inline-block;
    width: 200px;
    padding: 10px;
    background-color: #e76f51;
    color: white;
    margin: 10px;
    /* Inline-block elements respect width and height, but flow like inline elements */
}

/* Flexbox Example */
.flex-container {
    display: flex;
    justify-content: space-around;
    background-color: #264653;
    padding: 20px;
}

.flex-item {
    background-color: #e9c46a;
    color: #333;
    padding: 20px;
    width: 100px;
    text-align: center;
    /* Flexbox items stretch and adjust their positions inside the container */
}

/* Grid Example */
.grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    background-color: #2a9d8f;
    padding: 10px;
}

.grid-item {
    background-color: #f4a261;
    color: white;
    padding: 20px;
    text-align: center;
    /* Grid items are placed in a two-column layout with gaps between them */
}
```

### Step 4: Explanation of the `display` Values

#### 1. `block`

- Block-level elements take up the **entire width** of the page, starting on a new line.
- They can have width and height set, and they stack vertically.
  
Example elements: `<div>`, `<p>`, `<h1>` (by default, these elements are block-level).

```css
.block-example {
    display: block;
    /* Full-width element */
}
```

#### 2. `inline`

- Inline elements only take up as much **width** as their content requires and do not force new lines.
- They are often used for small chunks of content inside block-level elements.
  
Example elements: `<span>`, `<a>`, `<strong>` (by default, these are inline elements).

```css
.inline-example {
    display: inline;
    /* Inline elements only take the necessary width */
}
```

#### 3. `inline-block`

- `inline-block` elements behave like inline elements (they don’t break the flow), but you can still set **width** and **height**.
- They are useful for laying out multiple items horizontally while controlling their dimensions.

```css
.inline-block-example {
    display: inline-block;
    /* Combines block behavior (width, height) with inline positioning */
}
```

#### 4. `flex`

- The `flex` value makes it easy to create flexible layouts. Flexbox is used to control the **alignment**, **direction**, and **spacing** of elements.
- You define a **flex container** with `display: flex;` and its **items** automatically adjust their size to fill the available space.

```css
.flex-container {
    display: flex;
    justify-content: space-around;
    /* Space out the items evenly */
}

.flex-item {
    width: 100px;
}
```

#### 5. `grid`

- The `grid` value allows you to create complex layouts with rows and columns. You define a **grid container** and specify how many columns/rows you want.
- Grid is powerful for creating multi-column and multi-row layouts.
- `1fr` stands for “one fraction” of the available space. It is a flexible unit that allows you to distribute space within a grid container. The `fr` unit represents a fraction of the remaining space in the grid container. When you use `1fr`, it means that the column or row should take up one part of the available space.

### Two Equal Columns
```css
.grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* Create two equal-width columns */
}
```
### Three Equal Columns
```css
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* Create three equal-width columns */
}
```

### Two Unequal Columns
```css
.grid-container {
    display: grid;
    grid-template-columns: 2fr 1fr;
    /* Create two columns with the first one twice as wide as the second */
}
```

### Responsive Layout
```css
.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    /* Create a responsive layout with columns that are at least 200px wide */
}
```

### Asymmetrical Layout
```css
.grid-container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    /* Create three columns with the middle one twice as wide as the others */
}
```

### Step 5: Viewing the Output

Once you load the HTML and CSS files in your browser, you'll see the following behaviors:

- **Block elements** take up the entire width of the page.
- **Inline elements** flow side by side, taking only the space they need.
- **Inline-block elements** are like blocks but align like inline elements.
- **Flexbox items** are spaced evenly and adjust their size dynamically.
- **Grid items** are arranged in a two-column layout with equal spacing between them.

---

### Conclusion

The `display` property in CSS plays a crucial role in determining how elements are positioned and behave on a webpage. Understanding the difference between `block`, `inline`, `inline-block`, `flex`, and `grid` will help you create layouts that are both functional and visually appealing.

This tutorial covers the basics, and as you practice, you will become more comfortable using the `display` property in more complex layouts!
