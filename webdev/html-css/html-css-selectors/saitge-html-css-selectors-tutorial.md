### Tutorial: CSS Selectors for Beginners

In this tutorial, we’ll dive into one of the most important concepts in CSS: **selectors**. CSS selectors allow you to target and style specific HTML elements, making your web pages visually appealing. By the end of this tutorial, you'll understand how to select elements and apply different styles to them.

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

### Step 1: What is a CSS Selector?

A **CSS selector** is a pattern used to select HTML elements that you want to style. Once you select an element, you can apply styles such as colors, fonts, borders, and more to it.

For example:
```css
h1 {
    color: blue;
}
```
In this example, `h1` is the selector that targets all `<h1>` elements, and it changes their text color to blue.

---

### Step 2: Types of CSS Selectors

Let’s explore the most common CSS selectors you’ll use as a beginner.

#### 1. **Type (or Element) Selector**
The type selector targets all elements of a specific type. For example, the `h1` selector targets all `<h1>` tags.

```css
h1 {
    color: blue;
}
```
**Example**: This will make all `<h1>` elements on the page blue.

#### 2. **Class Selector**
The class selector targets elements with a specific class attribute. You create a class in HTML by adding a `class` attribute to the element and using a period (`.`) before the class name in CSS.

```css
/* CSS */
.text-red {
    color: red;
}
```
```html
<!-- HTML -->
<p class="text-red">This text will be red.</p>
<p>This text will not be red.</p>
```
**Example**: The first paragraph will have red text, while the second one will not be affected.

#### 3. **ID Selector**
The ID selector targets an element with a specific ID. IDs must be **unique** on a page. To target an ID in CSS, use the hash symbol (`#`) before the ID name.

```css
/* CSS */
#main-heading {
    color: green;
}
```
```html
<!-- HTML -->
<h1 id="main-heading">This heading is green.</h1>
<h1>This heading is not green.</h1>
```
**Example**: Only the heading with the `id="main-heading"` will turn green.

#### 4. **Universal Selector**
The universal selector (`*`) targets all elements on the page.

```css
/* CSS */
* {
    color: purple;
}
```
**Example**: This will turn the text color of every element on the page purple.

#### 5. **Descendant Selector**
The descendant selector targets elements that are nested inside another element.

```css
/* CSS */
div p {
    color: orange;
}
```
```html
<!-- HTML -->
<div>
    <p>This text is orange because it's inside a div.</p>
</div>
<p>This text is not orange because it's outside a div.</p>
```
**Example**: Only the `<p>` element inside the `<div>` will be orange.

#### 6. **Group Selector**
The group selector allows you to apply the same style to multiple elements. You can group selectors by separating them with commas.

```css
/* CSS */
h1, h2, h3 {
    color: navy;
}
```
**Example**: This will turn all `<h1>`, `<h2>`, and `<h3>` headings navy blue.

#### 7. **Attribute Selector**
The attribute selector targets elements with a specific attribute or attribute value.

```css
/* CSS */
a[href] {
    color: red;
}
```
```html
<!-- HTML -->
<a href="https://example.com">This link will be red.</a>
<a>This text won't be affected because it's not a link.</a>
```
**Example**: The CSS targets all `<a>` elements that have an `href` attribute and turns them red.

---

### Step 3: Putting It All Together

Let’s combine what we’ve learned into a simple HTML and CSS example.

#### HTML Code:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Selectors Example</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <h1 id="main-heading">Welcome to CSS Selectors</h1>

    <p>This is a normal paragraph.</p>

    <p class="text-red">This is a paragraph with the class "text-red".</p>

    <div>
        <p>This is a paragraph inside a div.</p>
    </div>

    <a href="#">This is a link</a>
    <a>This is not a link</a>

</body>
</html>
```

#### CSS Code (`styles.css`):
```css
/* Type selector for all <p> tags */
p {
    font-size: 18px;
}

/* ID selector for the main heading */
#main-heading {
    color: blue;
    font-size: 32px;
}

/* Class selector for elements with the class "text-red" */
.text-red {
    color: red;
}

/* Descendant selector: targets <p> elements inside a <div> */
div p {
    color: green;
}

/* Attribute selector: targets all <a> elements with an href attribute */
a[href] {
    color: purple;
    text-decoration: none;
}

/* Group selector for <h1>, <h2>, and <h3> */
h1, h2, h3 {
    text-align: center;
}
```

---

### Step 4: Explanation of the Code

- **Type Selector**: All `<p>` elements are given a font size of `18px`.
- **ID Selector**: The heading with the ID `main-heading` is styled with blue text and a font size of `32px`.
- **Class Selector**: The paragraph with the class `text-red` has its text color changed to red.
- **Descendant Selector**: The `<p>` element inside the `<div>` turns green.
- **Attribute Selector**: The link (`<a>`) with an `href` attribute is styled in purple with no underline.
- **Group Selector**: All `<h1>`, `<h2>`, and `<h3>` elements are centered.

---

### Step 5: Best Practices for Using CSS Selectors

- **Use classes and IDs wisely**: Use classes for repeated styles and IDs for unique elements.
- **Be specific**: Try to use specific selectors to target elements, so your styles only apply where needed.
- **Keep it clean**: Avoid overusing the universal selector (`*`) since it affects all elements and can make debugging difficult.
- **Use grouping**: Grouping selectors reduces repetition and makes your code cleaner.

---

### Final Thoughts

CSS selectors are the foundation of styling webpages. By learning how to target specific elements effectively, you can create beautiful and organized websites. Practice using different types of selectors, and experiment with combining them to create more complex and powerful styles.

Once you're comfortable with basic selectors, you can explore more advanced CSS selectors, such as **pseudo-classes** (`:hover`, `:nth-child`, etc.), to take your styling to the next level!

Happy coding!
