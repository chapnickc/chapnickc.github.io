## Markdown-able

One of the most ubiquitous markup languages available on the web today is
[Markdown](https://en.wikipedia.org/wiki/Markdown). 
It's the de-facto formatting standard for developers' favorite 
version control platforms such as GitHub/GitLab. Remarkably,
it can be transpiled to formats like LaTeX or HTML via `pandoc`.

Naturally, a writer may be inspired to use its concise paradigm as the medium
for expression. In the world of GitHub Pages, this leads to 
delivering a static site which can render markdown ad-hoc.
Here this was accomplished with `react-markdown` 


Of course, a blog is not all text! You may like to embed media files—
so let me share a snippet here how to load content from relative paths
inspired this [genereous individual](https://www.codeconcisely.com/posts/nextjs-relative-image-paths-in-markdown/). 
The trick is transforming the relative paths from markdown into proper html.

{% raw %}
```tsx
<MDXProvider>
      <Markdown
            components={{
                img: function ({ node, ...props }) {
                        const fileName = node.properties.src.replace('./', '');
                        props.src = require(`../blog/${fileName}`);
                        return <img {...props} />;
                    },
                }}
            remarkPlugins={[remarkGfm]}
        >
        {markdownContent}
      </Markdown>
</MDXProvider>
```
{% endraw %}

![Alt Text](/blog/post0/Surface_normal_illustration.png)


