---
title: "An Extendable Obsidian Publish Alternative using Next.JS"
date: 2022-12-12
---
## The problem with Obsidian publish alternatives
As an Obsidian user, I know firsthand the [[writing-connected-and-personalized-blogs|power of bi-directional linking]] within a single vault. I wanted to create a landing page for [Fleeting Notes](https://www.fleetingnotes.app/) that captured the same power. But when it came to customizations, the options were limited (I wanted a landing page + a blog). I've tried many solutions (e.g. [quartz](https://github.com/jackyzha0/quartz)) but I haven't found one that hit all my criteria (from ChatGPT) below:

> **Compatibility**: Not all Obsidian Publish alternatives may be compatible with all versions of Obsidian or all markdown syntax, which can make it difficult to use certain tools or services. 
> 
> **Ease of use:** Some Obsidian Publish alternatives may be more difficult to set up or use than others, which can make it frustrating for new users to get started.
> 
> **Customization**: Some Obsidian Publish alternatives may not offer as much customization as users may want, making it difficult to tailor the appearance and functionality of their published notes to their specific needs and preferences.
> 
> **Performance**: Some Obsidian Publish alternatives may not perform as quickly or smoothly as users may expect, which can make it frustrating to use.

-- ChatGPT

## The linked-blog-starter template
That's why I created the [linked-blog-starter](https://github.com/matthewwong525/linked-blog-starter) which is intended to be a template to create your own website with bi-directional links. I currently use it for [Fleeting Notes](https://www.fleetingnotes.app/), and with a little bit of setup, so can you!

How the [linked-blog-starter](https://github.com/matthewwong525/linked-blog-starter) addresses the four problems from above:

### Compatibility
[External / extensible libraries](https://linked-blog-starter.vercel.app/linked-blog-starter-does-not-reinvent-wheel) are used to convert Obsidian MD files to common markdown then to HTML

### Ease of Use
Obsidian notes [work out of the box](https://linked-blog-starter.vercel.app/works-out-of-the-box-with-markdown-files) and after the [setup](https://linked-blog-starter.vercel.app/publish-your-obsidian-notes-with-linked-blog-starter), publishing notes is done in 2 steps:
1. Write a note in `/publish` folder within Obsidian
2. Run the backup command [using the Obsidian Git plugin](https://linked-blog-starter.vercel.app/connect-obsidian-vault-with-github)

### Customization
[Create your own template](https://linked-blog-starter.vercel.app/deploy-a-custom-linked-blog-starter) or use someone else's! Changing the template is a simple matter of [updating one line in your repository](https://linked-blog-starter.vercel.app/update-publish-settings-github-actions).
- There's also an added feature to add "PreviewLinks" to text outside of markdown files. (See the footer in the [example](https://linked-blog-starter.vercel.app/home))

### Performance
All markdown files are [statically generated](https://linked-blog-starter.vercel.app/statically-generated) meaning loading speeds are super speedy!

## Demo + Conclusion
So if you're ready to take your blog to the next level, give [linked-blog-starter](https://github.com/matthewwong525/linked-blog-starter) a try. You won't be disappointed.

Demo: https://linked-blog-starter.vercel.app/home

If you have any questions or feature requests, feel free to leave a comment down below or create an [issue](https://github.com/matthewwong525/linked-blog-starter/issues) in the repository.
