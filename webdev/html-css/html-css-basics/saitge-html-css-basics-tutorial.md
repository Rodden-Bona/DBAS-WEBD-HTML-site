### Tutorial: Introduction to HTML and CSS Basics

In this tutorial, we will cover the basic HTML CSS elements.  Each element will include an explanation using comments.

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

### Step 1: HTML Structure

The **HTML structure** is the foundation of every webpage. It typically begins with a `<!DOCTYPE html>` declaration, followed by the `<html>`, `<head>`, and `<body>` tags. Here's a simple example:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Basic HTML Elements Tutorial</title>
    <!-- The title you see on the browser tab -->
    <link rel="stylesheet" href="saitge-html-css-basics-styles.css">
    <!-- Linking external CSS file -->
</head>
<body>
    <h1>Welcome to HTML and CSS Basics!</h1>
    <!-- This is a level-1 heading. It is often used as the main title of the webpage. -->

    <p>This is a simple paragraph to demonstrate the usage of <strong>HTML elements</strong>.</p>
    <!-- Paragraphs contain text. The <strong> tag is used to bold words. -->

    <a href="https://www.example.com" rel="noopener" target="_blank">Visit Example Website</a>
    
    <!-- Anchor tags (<a>) create links. The 'href' attribute specifies the link's destination. -->
    <!-- The 'target="_blank"' makes the link open in a new tab. 
        Use rel="noopener" when using target="_blank"-->

    <ul>
        <!-- Unordered List -->
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
    <!-- <ul> creates an unordered list with bullet points, and <li> is for each list item. -->

    <ol>
        <!-- Ordered List -->
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
    </ol>
    <!-- <ol> creates an ordered list with numbers. -->

    <div class="logo-area">
        <img src="saitge-nscc-logo-wht.png" alt="NSCC Logo - A description of the image">
    </div>
        <!-- Key Points about the <div> Tag:  
        Container Element: The <div> tag is primarily used to group 
        block-level elements to format them with CSS or to manipulate 
        them with JavaScript.

        Block-Level Element: By default, <div> is a block-level element, 
        meaning it starts on a new line and takes up the full width available.
        
        Styling and Layout: You can apply CSS styles to a <div> to control its 
        appearance, such as background color, borders, margins, padding, and more.
        
        Class and ID Attributes: The <div> tag often uses the class and id 
        attributes to apply specific styles or to target the element with 
        JavaScript. -->
    
</body>
</html>
```

### Step 2: Adding Style with CSS

CSS is used to style HTML elements. We will create an external CSS file called `styles.css` to make our page look better.

```css
/* styles.css */

/* CSS Selector by element name */
body {
    font-family: Arial, sans-serif;
    /* Applying a general font for the body text */
    background-color: #f4f4f4;
    /* Light gray background for the body */
    
}

/* CSS Selector by class name */
.logo-area {
    background-color: #004477;
    /* Dark Blue background for the body */
    
}

/* CSS Selector by element name */
h1 {
    color: #333;
    /* Dark color for the heading */
}

/* CSS Selector by element name */
p {
    font-size: 16px;
    color: #555;
    /* Styling paragraphs with a slightly smaller font and gray text */
    line-height: 1.6;
}

/* CSS Selector by element name */
a {
    color: #0066cc;
    text-decoration: none;
    /* Styling the anchor links with a blue color and removing the underline */
}

/* CSS Selector by element name and state */
a:hover {
    text-decoration: underline;
    /* Underline the link when hovered */
}

/* CSS Selector by element name */
ul, ol {
    margin-left: 20px;
    /* Adding some space to the left for the lists */
}

/* CSS Selector by element name */
button {
    display: inline;
    margin: 20px auto;
    padding: 10px 20px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    /* Styling the button */
}

/* CSS Selector by element name and state */
button:hover {
    background-color: #218838;
    /* Change the button color when hovered */
}

```

### Final Notes

- **HTML Comments**: Comments in HTML are written as `<!-- This is a comment -->`. They do not appear in the rendered page but are helpful for documenting the code.
- **CSS Comments**: CSS comments are written as `/* This is a comment */` and can be placed anywhere in the CSS code.

---

### Example Output

- **HTML Elements**: Headings, paragraphs, lists, and buttons will be displayed on the page.
- **CSS Styles**: The background will be light gray, the heading will be centered, and the button will be styled with a green background.

---

By following this guide, students will understand the basic structure of an HTML page, and styling with CSS.
