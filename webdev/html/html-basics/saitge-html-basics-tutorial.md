## Tutorial: Introduction to HTML Basics

In this tutorial, we will cover the basic HTML elements. Each element will include an explanation using comments.

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

The **HTML structure** is the foundation of evmlery webpage. It typically begins with a `<!DOCTYPE html>` declaration, followed by the `<html>`, `<head>`, and `<body>` tags. Here's a simple example:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
        <!-- The `<meta charset="UTF-8">` element in HTML specifies the character encoding for the HTML document.
        Character encoding is a system that pairs each character in a given set with something else—such as a
        number or a sequence of bytes—so that text can be stored and transmitted in a computer system.  -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- The <meta name="viewport" content="width=device-width, initial-scale=1.0"> element is crucial for responsive
        web design. It helps ensure that your webpage looks good on all devices, from desktops to smartphones. -->
    <title>Basic HTML Elements Tutorial</title>
        <!-- The title you see on the browser tab -->
</head>
<body>
    <h1>Welcome to HTML Basics!</h1>
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
    
    <button type="button">A Simple Button</button>
    <!-- Button element  -->
    <br/>
    <br/>
    <!-- The `<br/>` HTML element is used to insert a line break in text. 
    It's an empty element, meaning it doesn't have a closing tag. 
    When you use `<br/>`, it forces the text following it to start on a new line. 
    This is particularly useful for formatting text in a way that requires line 
    breaks, such as in poems or addresses. In our case, we want a couple of 
    lines to provide separation between the button and image -->
    
    <img src="saitge-strait-area-1.jpg" alt="Strait Area Campus - A description of the image">

</body>
</html>

```

### Final Notes

- **HTML Comments**: Comments in HTML are written as `<!-- This is a comment -->`. They do not appear in the rendered page but are helpful for documenting the code.

---

### Example Output

- **HTML Elements**: Headings, paragraphs, links and lists will be displayed on the page.

---

By following this guide, students will understand the basic structure of an HTML page.
