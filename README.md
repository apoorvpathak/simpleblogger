# SimpleBlogger

`note: this project is still under-development`

SimpleBlogger is a lightweight JavaScript tool to build static blogs for your website. It converts your `markdown` files into `html` files and organizes them on the `/blog` path of your website. Perfect for developers who want to quickly set up a blog without relying on heavy frameworks or databases.

---

## Features

- **Markdown to HTML Conversion**: Easily convert `.md` files into `.html` files.
- **Automatic Indexing**: Generates a `posts.json` file to keep track of all your blog posts.
- **Simple CLI**: Initialize and build your blog with just two commands.
- **Customizable**: Add your own styles and templates to the generated HTML files.
- **No Dependencies**: Just plain JavaScript and a few lightweight libraries.

---

## Installation

You can install SimpleBlogger globally using npm:

```bash
npm install -g simpleblogger
```

# Usage

## 1. Initialize Your Blog
Suppose your website is located in `src` folder, then go into that folder and Run the following command to set up the blog structure:

```bash
simpleblogger init
```

This will create the following folder structure:

```
blog/
  ├── index.html          # Blog homepage
  └── posts/
       ├── posts-md/      # Folder for Markdown files
       ├── posts-html/    # Folder for generated HTML files
       └── posts.json     # Metadata for all posts
```

## 2. Create a New Post
Use the `create-post` command to generate a new Markdown post template:

```bash
simpleblogger create-post "My First Post"
```
This will create a file like `blog/posts/posts-md/my-first-post.md` with pre-filled front matter:
```markdown
---
title: My First Post
date: 2023-10-01
---
# Welcome to My Blog
This is my first post!

```
`Do not change anything in between the --- & ---`

## 3. Build Your Blog
Run the following command to convert Markdown files to HTML and update the `posts.json` file:

```bash
simpleblogger build
```

This will:
- Convert all `.md` files in `posts-md/` to `.html` files in `posts-html/`.
- Update `posts.json` with metadata (title, date, and file path).
- It will also index your blog posts at `yourwebsite.com/blog`

## 4. View Your Blog
Open the `blog/index.html` file in your browser to see your blog in action. You can deploy the `blog/` folder to your website's `/blog` path.

---

## Example

### Folder Structure After Initialization

```
blog/
  ├── index.html
  └── posts/
       ├── posts-md/
       │    └── post1.md
       ├── posts-html/
       │    └── post1.html
       └── posts.json
```

### `posts.json` After Building

```json
[
  {
    "id": 0,
    "title": "My First Post",
    "date": "2023-10-01",
    "file": "post1.html"
  }
]
```

---

## Customization

### Styling Your Blog
You can customize the appearance of your blog by editing the `blog/index.html` file and adding your own CSS.

---

## Feature Requests or Bugs
If you'd like a new feature or want to report a bug, open an issue or pull requests are most welcome.

## Contributing
Read [CONTRIBUTING.MD](CONTRIBUTING) for more info.


## License
SimpleBlogger is open-source software licensed under the [MIT License](LICENSE).

## Contact

I can be contacted through my email at [hello@apoorvpathak.com](mailto:hello@apoorvpathak.com?subject=%5BAbout%3A%20SimpleBlogger%5D)

## Support
If you find this tool useful, consider giving it a ⭐ on GitHub. For questions or issues, please open an issue on the repository.

Happy blogging! 🚀