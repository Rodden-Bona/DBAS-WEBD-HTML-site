### Tutorial: Understanding and Using Semantic HTML Elements

Semantic HTML is an essential concept in web development that involves using HTML elements that clearly describe their meaning and purpose to both the browser and developers. These elements help structure content, improve accessibility, SEO (Search Engine Optimization), and maintainability of the code.

In this tutorial, we’ll explore the importance of semantic HTML, review key semantic elements, and walk through examples of how to use them in your webpage.

---

### Resources Required:
   - PC, Mac, or Linux OS
   - Visual Studio Code (VS Code)
   - VS Code Extension: Live Preview from Microsoft
   - Git Client

### Getting Started

**Before cloning a repository, consider:**
   - Choose the location where the repository will be downloaded.
   - The repository will be downloaded to the folder where the Git command is run.
   - The full contents of the repository will be saved on the local drive.
   - Ensure you have a backup of your development folder.

---

1. **Clone this Repository**

   **Using VS Code:**
   - Open the Welcome page from the `Help` menu.
   - Select "Clone Git repository" from the command bar.
   - Use the repository URL:
     ```bash
     https://github.com/davis-boudreau/saitge-codebase.git
     ```
   - Choose your development directory (a folder named `saitge-codebase` will be created).
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

5. **Running the Code**
   - Use the Explorer to navigate to an `.html` file.
   - Right-click the file and choose `Show Preview`.

6. Refer to the `README.md` file in each folder for specific instructions and updates.

---

### Step 1: What is Semantic HTML?

**Semantic HTML** refers to using HTML elements that provide meaning about the content they contain. This helps both humans and machines (e.g., search engines and screen readers) understand the webpage’s structure.

For example, using a `<header>` element for a webpage header is more meaningful than a generic `<div>`.

### Step 2: Benefits of Using Semantic HTML

1. **Improved Accessibility**: Semantic elements help screen readers and assistive technologies interpret content.
2. **Better SEO**: Search engines understand the page structure, improving ranking.
3. **Readability and Maintainability**: Semantic elements make your code easier to read and maintain.
4. **Browser Consistency**: Browsers handle semantic elements uniformly, ensuring a consistent user experience.

---

### Step 3: Common Semantic HTML Elements

- `<header>`: Represents the header section of a page or section.
- `<nav>`: Defines a set of navigation links.
- `<main>`: Contains the primary content of the webpage.
- `<article>`: Represents standalone content (e.g., blog posts).
- `<section>`: Groups related content together.
- `<aside>`: Represents tangentially related content (e.g., sidebars).
- `<footer>`: Represents the footer section.
- `<figure>` and `<figcaption>`: For images or diagrams with captions.

---

### Step 4: Creating a Webpage with Semantic HTML

#### HTML Code Example:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- The meta tag defines the character set and enables responsiveness across devices -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- The title element sets the title of the webpage, displayed in the browser tab -->
    <title>Semantic HTML Example</title>
    
    <!-- The link element connects an external CSS file for styling the webpage -->
    <link rel="stylesheet" href="saitge-html-css-semantic-elements-styles.css">
</head>
<body>

<!-- Header: typically contains introductory content, logos, or navigation bars -->
<header>
    <!-- Header: Contains introductory content for the page, including the title and welcome message -->
    <h1>Welcome to My Website</h1>
    
    <!-- A short paragraph providing context or description for the webpage -->
    <p>This is a semantic HTML example</p>
</header>

<!-- Navigation (nav): used for grouping the primary navigation links of the website -->
<nav>
    <!-- Navigation: Provides a set of navigation links to help users navigate different sections of the website -->
    <ul>
        <!-- List of navigation links that allow users to navigate to different sections of the page -->
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
</nav>

<!-- Main: defines the main content of the page, distinct from headers, footers, and sidebars -->
<main>
    <!-- Main Content: Contains the primary content of the webpage, crucial for SEO and accessibility -->
    
    <!-- Section: groups related content within the main content area -->
    <section>
        <!-- Section: Groups related content, in this case representing an "About Me" section -->
        <h2>About Me</h2>
        
        <!-- A paragraph describing the section's content -->
        <p>This section contains information about the author.</p>
    </section>

    <!-- Article: represents standalone content that could be distributed or syndicated independently -->
    <article>
        <!-- Article: Represents standalone content, like a blog post, that can be repurposed independently -->
        <h2>Blog Post: The Importance of Semantic HTML</h2>
        
        <!-- Paragraph providing details about the blog post or article content -->
        <p>Semantic HTML helps improve the accessibility and SEO of your webpage...</p>
    </article>

    <!-- Aside: contains related information, typically a sidebar or supplementary content -->
    <aside>
        <!-- Aside: Contains secondary content, such as related articles or additional information -->
        <h2>Related Articles</h2>
        
        <!-- A list of links to other articles or content related to the main content -->
        <ul>
            <li><a href="#">Why Semantic HTML Matters</a></li>
            <li><a href="#">Accessibility with HTML5</a></li>
        </ul>
    </aside>

</main>

<!-- Footer: the footer section typically contains copyright information or additional navigation links -->
<footer>
    <!-- Footer: Contains information at the bottom of the page, like copyright or additional navigation links -->
    <p>&copy; 2024 My Website. All rights reserved.</p>
</footer>

</body>
</html>

```

#### CSS Code Example:
```css
/* Basic styling for semantic elements */
header, nav, main, section, article, aside, footer {
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #ccc;
}

header, footer {
    background-color: #f8f8f8;
}

nav {
    background-color: #e0e0e0;
}

aside {
    background-color: #f0f0f0;
}
```

---

### Step 5: Explanation of the Code

1. **Header (`<header>`)**:
   - Contains the introductory content for the page, including a title and a welcome message.
   - Typically used for logos, titles, or navigation bars.

2. **Navigation (`<nav>`)**:
   - Provides a set of navigation links.
   - Helps users navigate to different sections of the website.

3. **Main Content (`<main>`)**:
   - Contains the primary content, excluding headers, footers, or sidebars.
   - Crucial for SEO and accessibility.

4. **Section (`<section>`)**:
   - Groups related content.
   - Here, it represents an "About Me" section.

5. **Article (`<article>`)**:
   - Represents standalone content like a blog post or article.
   - It can be shared or repurposed independently.

6. **Aside (`<aside>`)**:
   - Contains secondary content, such as related articles or sidebars.

7. **Footer (`<footer>`)**:
   - Contains information at the bottom of the page, like copyright or links.

---

### Step 6: Best Practices for Using Semantic HTML

- **Use Elements Correctly**: For example, use `<nav>` for navigation links and `<article>` for standalone content.
- **Avoid Overuse of `<div>` and `<span>`**: Use semantic tags to provide clarity instead of relying on non-semantic elements.
- **Boost SEO and Accessibility**: Use semantic elements to help search engines and assistive technologies understand your content structure.

---

### Final Thoughts

Using semantic HTML is key to writing clean, accessible, and maintainable code. By adopting semantic elements, you’ll improve both the user experience and how search engines and accessibility tools interact with your website.
