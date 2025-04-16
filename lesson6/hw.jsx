// root.js

function PublicBlogPost(props) {
    return <div className = "blog-post">
      <h2>{props.title}</h2>
      <p className="meta">By {props.author} on {props.date}</p>
      <p>{props.content}</p>
    </div>
  }
  
  function PrivateBlogPost(props) {
    return <div className = "private-posts">
      <h2>{props.title}</h2>
      <p className="meta">By {props.author} on {props.date}</p>
      <p>The content of this post is private</p>
    </div>
  }
  
  function BlogPost(props) {
    return <div className = "blog-post">
      <h2>{props.title}</h2>
      <p className="meta">By {props.author} on {props.date}</p>
      <p>{props.content}</p>
    </div>
  }
  
  function BlogList({blogPosts}) {
    return <div className = "blog-list">
    <ul>
    {
      blogPosts.map(blogPost => (
      
        blogPost.isPrivate == true? <PrivateBlogPost key={blogPost.title} title={blogPost.title} author={blogPost.author} date={blogPost.date} /> : <PublicBlogPost key={blogPost.title} title={blogPost.title} author={blogPost.author} date={blogPost.date} content={blogPost.content} />
  
      ))
    }
  </ul>
  </div>
  }
  
  
  function BlogList_Previous({blogPosts}) {
    return <div className = "blog-list">
    <ul>
    {
      blogPosts.map(blogPost => (
        <BlogPost key={blogPost.title} title={blogPost.title} author={blogPost.author} date={blogPost.date}  
        content={blogPost.content} isPrivate={blogPost.isPrivate}/> 
      ))
    }
  </ul>
  </div>
  }
  
  function Header(props) {
    return (
      <header>
        <h1>{props.title}</h1>
        <p>{props.tagline}</p>
      </header>
    );
  }
  
  function Footer(props) {
    return (
      <footer>
        <p>{props.year} My Blog. All rights reserved.</p>
      </footer>
    );
  };
  
  function App() {
    const blogPosts = [
      {
        title: 'My First Blog Post',
        author: 'John Doe',
        date: 'June 1, 2023',
        content: 'Welcome to my first blog post! Today, I want to share my journey into the world of blogging. It has been an exciting experience so far, and I can’t wait to see where this path leads me.',
        isPrivate: true
      },
      {
        title: 'My Second Blog Post',
        author: 'Jane Smith',
        date: 'June 5, 2023',
        content: 'In this post, I’m discussing the importance of work-life balance. It’s essential to find time for both professional and personal activities to maintain overall well-being.',
        isPrivate: false
      },
      {
        title: 'A Day in the Life',
        author: 'Alice Johnson',
        date: 'June 10, 2023',
        content: 'Ever wondered what a day in my life looks like? Join me as I walk you through my daily routine, from morning coffee to evening relaxation.',
        isPrivate: false
      },
      {
        title: 'Tips for Healthy Eating',
        author: 'Bob Lee',
        date: 'June 15, 2023',
        content: 'Eating healthy doesn’t have to be complicated. Here are some simple and practical tips to help you make better food choices every day.',
        isPrivate: true
      },
      {
        title: 'Traveling on a Budget',
        author: 'Susan White',
        date: 'June 20, 2023',
        content: 'Dreaming of traveling the world but worried about the cost? This post covers my top tips for seeing new places without breaking the bank.',
        isPrivate: false
      }
    ];
  
    return (
      <>
        <Header title="My Blog" tagline="A blog about everything" />
        <BlogList blogPosts={blogPosts}/>
        <Footer year="2025" />
      </>
    )
  
  };
  
  const domContainer = document.getElementById('root');
  const root = ReactDOM.createRoot(domContainer);
  root.render(<App />)