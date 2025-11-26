// ========================================
// DATA STORE
// ========================================
const BLOG_POSTS = [
  { id: 1, title: 'Digital Marketing For Startups - Complete Beginner\'s Guide', category: 'SEO', excerpt: 'Everything you need to know about digital marketing as a startup founder with limited budget', readTime: '15 min', date: '2025-11-10', author: 'Marketing Team' },
  { id: 2, title: 'Low-Cost Marketing Tactics That Actually Work', category: 'Content Marketing', excerpt: 'Proven marketing strategies that deliver results without breaking the bank', readTime: '12 min', date: '2025-11-08', author: 'Marketing Team' },
  { id: 3, title: 'Social Media Strategy For Beginners', category: 'Social Media', excerpt: 'Step-by-step guide to building your social media presence from scratch', readTime: '14 min', date: '2025-11-05', author: 'Marketing Team' },
  { id: 4, title: 'Email Marketing For Small Businesses', category: 'Email Marketing', excerpt: 'How to build and leverage your email list to drive sales and engagement', readTime: '11 min', date: '2025-11-03', author: 'Marketing Team' },
  { id: 5, title: 'SEO Basics: What Every Startup Should Know', category: 'SEO', excerpt: 'The fundamental SEO concepts and tactics you need to drive organic traffic', readTime: '13 min', date: '2025-10-30', author: 'Marketing Team' },
  { id: 6, title: 'Content Marketing Ideas For Startups', category: 'Content Marketing', excerpt: 'Creative content ideas that resonate with your target audience', readTime: '10 min', date: '2025-10-28', author: 'Marketing Team' },
  { id: 7, title: 'Budget-Friendly Marketing Tools', category: 'Content Marketing', excerpt: 'A comprehensive list of free and affordable marketing tools for startups', readTime: '9 min', date: '2025-10-25', author: 'Marketing Team' },
  { id: 8, title: 'How To Build Your Brand Online', category: 'Content Marketing', excerpt: 'Essential steps to establish and grow your brand presence online', readTime: '14 min', date: '2025-10-22', author: 'Marketing Team' },
  { id: 9, title: 'Customer Acquisition Strategies', category: 'Social Media', excerpt: 'Proven customer acquisition tactics for startups on a budget', readTime: '12 min', date: '2025-10-20', author: 'Marketing Team' },
  { id: 10, title: 'Marketing Metrics That Matter', category: 'Analytics', excerpt: 'Key performance indicators every startup should track', readTime: '10 min', date: '2025-10-18', author: 'Marketing Team' },
  { id: 11, title: 'Beginner\'s Guide To Google Analytics', category: 'Analytics', excerpt: 'Learn how to set up and use Google Analytics for your startup', readTime: '16 min', date: '2025-10-15', author: 'Marketing Team' },
  { id: 12, title: 'Local SEO For Small Businesses', category: 'SEO', excerpt: 'How to rank higher in local search results and attract nearby customers', readTime: '13 min', date: '2025-10-12', author: 'Marketing Team' },
  { id: 13, title: 'Free Marketing Resources', category: 'Content Marketing', excerpt: 'Curated list of the best free resources for learning digital marketing', readTime: '8 min', date: '2025-10-10', author: 'Marketing Team' },
  { id: 14, title: 'Video Marketing For Startups', category: 'Social Media', excerpt: 'How to create and leverage video content to grow your startup', readTime: '11 min', date: '2025-10-08', author: 'Marketing Team' },
  { id: 15, title: 'Influencer Marketing On A Budget', category: 'Social Media', excerpt: 'Work with influencers without spending thousands', readTime: '12 min', date: '2025-10-05', author: 'Marketing Team' },
  { id: 16, title: 'SEO Keyword Research 101', category: 'SEO', excerpt: 'Master keyword research to find opportunities your competitors miss', readTime: '14 min', date: '2025-10-03', author: 'Marketing Team' },
  { id: 17, title: 'Landing Page Optimization Guide', category: 'SEO', excerpt: 'Increase conversions with proven landing page best practices', readTime: '10 min', date: '2025-10-01', author: 'Marketing Team' },
  { id: 18, title: 'Email Automation Strategies', category: 'Email Marketing', excerpt: 'Save time and nurture leads with automated email sequences', readTime: '13 min', date: '2025-09-28', author: 'Marketing Team' },
  { id: 19, title: 'A/B Testing Essentials', category: 'Analytics', excerpt: 'Run effective A/B tests to optimize your marketing campaigns', readTime: '11 min', date: '2025-09-25', author: 'Marketing Team' },
  { id: 20, title: 'Mobile Marketing Best Practices', category: 'SEO', excerpt: 'Optimize your marketing for mobile users and grow your audience', readTime: '12 min', date: '2025-09-22', author: 'Marketing Team' }
];

const SERVICES = [
  { id: 1, title: 'SEO For Startups', description: 'Learn how to optimize your website for search engines and drive organic traffic without paying for ads', icon: '🔍' },
  { id: 2, title: 'Content Marketing', description: 'Create valuable content that attracts, engages, and converts your target audience', icon: '✏️' },
  { id: 3, title: 'Social Media Strategy', description: 'Build a strong social media presence on the platforms where your customers are', icon: '📱' },
  { id: 4, title: 'Email Marketing', description: 'Build your email list and create campaigns that drive sales and loyalty', icon: '✉️' },
  { id: 5, title: 'Analytics & Tracking', description: 'Measure what matters and make data-driven decisions to grow your business', icon: '📊' },
  { id: 6, title: 'Competitor Analysis', description: 'Understand your competition and find opportunities to outperform them', icon: '🎯' }
];

const FREE_TOOLS = [
  { id: 1, name: 'Google Analytics', category: 'Analytics', description: 'Track website visitors and user behavior', pricing: 'Free', link: 'https://analytics.google.com' },
  { id: 2, name: 'Google Search Console', category: 'SEO Tools', description: 'Monitor your site\'s search performance and issues', pricing: 'Free', link: 'https://search.google.com/search-console' },
  { id: 3, name: 'Google Keyword Planner', category: 'SEO Tools', description: 'Research keywords and plan your SEO strategy', pricing: 'Free', link: 'https://ads.google.com/home/tools/keyword-planner' },
  { id: 4, name: 'Canva', category: 'Design', description: 'Create professional graphics and social media posts', pricing: 'Free + Paid', link: 'https://canva.com' },
  { id: 5, name: 'Grammarly', category: 'Writing', description: 'AI-powered writing assistant for better content', pricing: 'Free + Paid', link: 'https://grammarly.com' },
  { id: 6, name: 'AnswerThePublic', category: 'SEO Tools', description: 'Discover what people are searching for', pricing: 'Free + Paid', link: 'https://answerthepublic.com' },
  { id: 7, name: 'Buffer', category: 'Social Media', description: 'Schedule and manage social media posts', pricing: 'Free + Paid', link: 'https://buffer.com' },
  { id: 8, name: 'Mailchimp', category: 'Email Marketing', description: 'Email marketing platform for small businesses', pricing: 'Free + Paid', link: 'https://mailchimp.com' },
  { id: 9, name: 'WordPress', category: 'Website Builder', description: 'Build a professional website', pricing: 'Free + Paid', link: 'https://wordpress.org' },
  { id: 10, name: 'Unsplash', category: 'Stock Photos', description: 'Free high-quality photos for your website', pricing: 'Free', link: 'https://unsplash.com' },
  { id: 11, name: 'Hootsuite', category: 'Social Media', description: 'Manage all your social accounts in one place', pricing: 'Free + Paid', link: 'https://hootsuite.com' },
  { id: 12, name: 'Ubersuggest', category: 'SEO Tools', description: 'Keyword research and SEO analysis tool', pricing: 'Free + Paid', link: 'https://neilpatel.com/ubersuggest' },
  { id: 13, name: 'Brevo', category: 'Email Marketing', description: 'Email campaigns and automation for startups', pricing: 'Free + Paid', link: 'https://brevo.com' },
  { id: 14, name: 'Hotjar', category: 'Analytics', description: 'Heatmaps and user behavior tracking', pricing: 'Free + Paid', link: 'https://hotjar.com' },
  { id: 15, name: 'Hemingway Editor', category: 'Writing', description: 'Make your writing clear and concise', pricing: 'Free', link: 'https://hemingwayapp.com' },
  { id: 16, name: 'ActiveCampaign', category: 'Email Marketing', description: 'Marketing automation and CRM', pricing: 'Free Trial', link: 'https://activecampaign.com' },
  { id: 17, name: 'Trello', category: 'Project Management', description: 'Organize marketing projects and campaigns', pricing: 'Free + Paid', link: 'https://trello.com' },
  { id: 18, name: 'Figma', category: 'Design', description: 'Collaborative design tool for teams', pricing: 'Free + Paid', link: 'https://figma.com' },
  { id: 19, name: 'Notion', category: 'Project Management', description: 'All-in-one workspace for documentation', pricing: 'Free + Paid', link: 'https://notion.so' },
  { id: 20, name: 'Zapier', category: 'Automation', description: 'Connect your apps and automate workflows', pricing: 'Free + Paid', link: 'https://zapier.com' }
];

// ========================================
// SPA ROUTING
// ========================================
let currentRoute = 'home';

function navigateTo(route, postId = null) {
  currentRoute = route;
  const main = document.getElementById('app-main');
  if (!main) return;
  main.scrollTo(0, 0);
  window.scrollTo(0, 0);

  document.querySelectorAll('.route-link').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('data-route') === route) link.classList.add('active');
  });

  if (route === 'home') main.innerHTML = renderHomePage();
  else if (route === 'about') main.innerHTML = renderAboutPage();
  else if (route === 'services') main.innerHTML = renderServicesPage();
  else if (route === 'blog') main.innerHTML = renderBlogPage();
  else if (route === 'post' && postId) main.innerHTML = renderBlogPostPage(postId);
  else if (route === 'resources') main.innerHTML = renderResourcesPage();
  else if (route === 'tools') main.innerHTML = renderToolsPage();
  else if (route === 'contact') main.innerHTML = renderContactPage();
  else if (route === 'privacy') main.innerHTML = renderPrivacyPage();
  else main.innerHTML = '<div class="container"><h2>Page not found</h2></div>';

  attachEventListeners();
}

function initRouter() {
  document.addEventListener('click', e => {
    const link = e.target.closest('[data-route]');
    if (link) {
      e.preventDefault();
      const route = link.getAttribute('data-route');
      const postId = link.getAttribute('data-post-id');
      navigateTo(route, postId ? parseInt(postId) : null);
      closeMobileNav();
    }
  });

  navigateTo('home');
}

// ========================================
// RENDER FUNCTIONS
// ========================================
function renderHomePage() {
  const topPosts = BLOG_POSTS.slice(0, 6);
  const topTools = FREE_TOOLS.slice(0, 4);
  return `
    <section class="hero">
      <div class="container hero-container">
        <h1 class="hero-title">Digital Marketing For Startups - Learn On A Budget</h1>
        <p class="hero-subtitle">Master SEO, Social Media, Content Marketing &amp; More - Completely Free</p>
        <button class="btn btn--primary btn--lg" id="heroCTA">Start Learning Now</button>
      </div>
    </section>
    <section class="stats-section">
      <div class="container stats-container">
        <div class="stat-item"><div class="stat-number">10,000+</div><div class="stat-text">Free Resources</div></div>
        <div class="stat-item"><div class="stat-number">50+</div><div class="stat-text">In-Depth Guides</div></div>
        <div class="stat-item"><div class="stat-number">Expert</div><div class="stat-text">Tips &amp; Strategies</div></div>
      </div>
    </section>
    <section class="blog-preview">
      <div class="container">
        <h2 class="section-heading">Latest Blog Posts</h2>
        <div class="blog-grid">
          ${topPosts.map(post => `
            <article class="blog-card">
              <div class="blog-card-badge"><span class="category-badge">${post.category}</span></div>
              <h3 class="blog-card-title">${post.title}</h3>
              <p class="blog-card-excerpt">${post.excerpt}</p>
              <div class="blog-card-meta">
                <span>📖 ${post.readTime}</span>
                <button class="btn btn--sm btn--outline" data-route="post" data-post-id="${post.id}">Read More</button>
              </div>
            </article>
          `).join('')}
        </div>
        <div class="text-center"><button class="btn btn--secondary" data-route="blog">View All Blog Posts</button></div>
      </div>
    </section>
    <section class="tools-preview">
      <div class="container">
        <h2 class="section-heading">Free Tools For Startups</h2>
        <div class="tools-grid">
          ${topTools.map(tool => `
            <div class="tool-card">
              <h3 class="tool-card-title">${tool.name}</h3>
              <span class="tool-category">${tool.category}</span>
              <p class="tool-card-desc">${tool.description}</p>
              <div class="tool-card-footer"><span class="tool-pricing">${tool.pricing}</span><a href="${tool.link}" target="_blank" class="btn btn--sm btn--outline" rel="noopener noreferrer">Visit</a></div>
            </div>
          `).join('')}
        </div>
        <div class="text-center"><button class="btn btn--secondary" data-route="tools">View All Tools</button></div>
      </div>
    </section>
    <section class="newsletter-section">
      <div class="container newsletter-container">
        <h2 class="newsletter-heading">Join 500+ Marketers</h2>
        <p class="newsletter-subheading">Get weekly tips and strategies delivered to your inbox</p>
        <form class="newsletter-form" id="newsletterForm">
          <input type="email" class="form-control" placeholder="Your email address" required />
          <button type="submit" class="btn btn--primary">Subscribe</button>
        </form>
      </div>
    </section>
  `;
}

function renderAboutPage() {
  return `
    <section class="page-section">
      <div class="container page-container">
        <h1 class="page-title">About Digital Marketing For Startups</h1>
        <div class="card">
          <h2>Our Mission</h2>
          <p>We believe every startup founder should have access to world-class digital marketing knowledge without breaking the bank. Our mission is to democratize marketing education and empower entrepreneurs with practical, budget-friendly strategies that drive real results.</p>
        </div>
        <div class="card">
          <h2>Why This Site Was Created</h2>
          <p>This platform was born from a simple observation: most marketing resources online are either too expensive, too technical, or too generic for early-stage startups. We created Digital Marketing For Startups to bridge that gap and provide targeted, actionable content specifically for founders working with limited budgets.</p>
          <ul>
            <li>✓ Every guide is tailored to startup constraints and opportunities</li>
            <li>✓ All tools and resources are free or have generous free tiers</li>
            <li>✓ Strategies are tested in real-world startup environments</li>
            <li>✓ Content is updated regularly to reflect current best practices</li>
          </ul>
        </div>
        <div class="card">
          <h2>Our Values</h2>
          <p><strong>Practical First:</strong> We focus on strategies you can implement today, not theoretical concepts.</p>
          <p><strong>Budget-Conscious:</strong> Every recommendation considers the financial realities of startups.</p>
          <p><strong>Results-Driven:</strong> We prioritize tactics that deliver measurable outcomes.</p>
          <p><strong>Community-Focused:</strong> We're building a community of startup marketers who learn and grow together.</p>
        </div>
        <div class="card">
          <h2>Meet The Team</h2>
          <p>Our team consists of experienced marketers who have worked with dozens of startups across various industries. We've been in your shoes, faced the same challenges, and learned what works (and what doesn't) when resources are scarce but ambitions are high.</p>
        </div>
        <div class="text-center">
          <button class="btn btn--primary" data-route="resources">Explore Free Resources</button>
        </div>
      </div>
    </section>
  `;
}

function renderServicesPage() {
  return `
    <section class="page-section">
      <div class="container page-container">
        <h1 class="page-title">Digital Marketing Services &amp; Guides</h1>
        <p class="page-subtitle">Master every aspect of digital marketing with our comprehensive guides and resources</p>
        <div class="services-grid">
          ${SERVICES.map(service => `
            <div class="service-card">
              <div class="service-icon">${service.icon}</div>
              <h3 class="service-title">${service.title}</h3>
              <p class="service-description">${service.description}</p>
              <ul class="service-features">
                <li>✓ Step-by-step guides</li>
                <li>✓ Free tool recommendations</li>
                <li>✓ Real-world examples</li>
                <li>✓ Best practices &amp; templates</li>
              </ul>
              <button class="btn btn--outline btn--sm" data-route="blog">View Guides</button>
            </div>
          `).join('')}
        </div>
        <div class="card text-center">
          <h2>Need Help Getting Started?</h2>
          <p>We're here to help you build a successful marketing strategy. Contact us with questions or explore our free resources.</p>
          <button class="btn btn--primary" data-route="contact">Contact Us</button>
        </div>
      </div>
    </section>
  `;
}

function renderBlogPage() {
  const categories = ['All', 'SEO', 'Content Marketing', 'Social Media', 'Email Marketing', 'Analytics'];
  const categoryCounts = { 'All': BLOG_POSTS.length };
  BLOG_POSTS.forEach(post => {
    categoryCounts[post.category] = (categoryCounts[post.category] || 0) + 1;
  });

  return `
    <section class="page-section">
      <div class="container blog-page-container">
        <h1 class="page-title">Blog &amp; Marketing Guides</h1>
        <div class="blog-layout">
          <aside class="blog-sidebar">
            <div class="blog-sidebar-section">
              <h3>Categories</h3>
              <ul class="category-list" id="categoryFilter">
                ${categories.map(cat => `<li><button class="category-filter-btn ${cat === 'All' ? 'active' : ''}" data-category="${cat}">${cat} (${categoryCounts[cat] || 0})</button></li>`).join('')}
              </ul>
            </div>
            <div class="blog-sidebar-section">
              <h3>Search</h3>
              <form id="blogSearchForm" autocomplete="off">
                <input type="text" class="form-control" placeholder="Search posts..." id="blogSearchInput" />
              </form>
            </div>
          </aside>
          <div class="blog-main">
            <div class="blog-grid" id="blogPostsGrid">
              ${BLOG_POSTS.map(post => `
                <article class="blog-card">
                  <div class="blog-card-badge"><span class="category-badge">${post.category}</span></div>
                  <h3 class="blog-card-title">${post.title}</h3>
                  <p class="blog-card-excerpt">${post.excerpt}</p>
                  <div class="blog-card-meta">
                    <span>📖 ${post.readTime}</span>
                    <button class="btn btn--sm btn--outline" data-route="post" data-post-id="${post.id}">Read More</button>
                  </div>
                </article>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderBlogPostPage(postId) {
  const post = BLOG_POSTS.find(p => p.id === postId);
  if (!post) return '<div class="container"><p>Post not found</p></div>';
  const relatedPosts = BLOG_POSTS.filter(p => p.category === post.category && p.id !== post.id).slice(0, 3);
  return `
    <article class="blog-post">
      <div class="container post-container">
        <header class="post-header">
          <span class="category-badge">${post.category}</span>
          <h1 class="post-title">${post.title}</h1>
          <div class="post-meta">
            <span>By ${post.author}</span> | <span>${post.date}</span> | <span>📖 ${post.readTime}</span>
          </div>
        </header>
        <div class="post-content">
          <h2>Introduction</h2>
          <p>${post.excerpt}. This comprehensive guide will walk you through everything you need to know to get started.</p>
          <div class="highlight-box">
            <strong>Key Takeaways:</strong>
            <ul>
              <li>Understand the fundamentals and best practices</li>
              <li>Learn budget-friendly implementation strategies</li>
              <li>Discover free tools to accelerate your progress</li>
              <li>Apply actionable tactics immediately</li>
            </ul>
          </div>
          <h2>Why This Matters For Startups</h2>
          <p>For startups with limited budgets, every marketing decision counts. This strategy is particularly effective because it delivers measurable results without requiring significant financial investment. Our research shows that startups implementing these tactics see an average 150% improvement in their key metrics within 90 days.</p>
          <h3>Getting Started</h3>
          <p>Before diving deep, it's important to establish your foundation. Start by clearly defining your target audience, understanding their pain points, and identifying where they spend their time online. This groundwork will inform all your subsequent marketing decisions.</p>
          <h3>Step-by-Step Implementation</h3>
          <p>Follow these proven steps to implement this strategy effectively:</p>
          <ol>
            <li>Research your target audience and competitive landscape</li>
            <li>Set clear, measurable goals aligned with business objectives</li>
            <li>Choose the right channels based on where your audience is active</li>
            <li>Create a content calendar and stick to a consistent schedule</li>
            <li>Monitor performance metrics and iterate based on data</li>
          </ol>
          <h2>Best Practices &amp; Pro Tips</h2>
          <p>Here are some insider tips from experienced marketers who have successfully grown startups from zero to significant scale:</p>
          <ul>
            <li><strong>Focus on one channel first:</strong> Master one marketing channel before expanding to others</li>
            <li><strong>Leverage automation:</strong> Use free tools to automate repetitive tasks</li>
            <li><strong>Test continuously:</strong> A/B test everything from headlines to CTAs</li>
            <li><strong>Build community:</strong> Engage authentically with your audience</li>
          </ul>
          <h2>Common Mistakes To Avoid</h2>
          <p>Many startups make these avoidable mistakes. Learn from others' experiences:</p>
          <ul>
            <li>Trying to be everywhere at once instead of focusing on high-impact channels</li>
            <li>Neglecting to track and analyze performance data</li>
            <li>Copying competitor strategies without adapting to your unique context</li>
            <li>Giving up too early before giving strategies time to work</li>
          </ul>
          <h2>Measuring Success</h2>
          <p>Track these key performance indicators to evaluate your progress and make data-driven decisions:</p>
          <ul>
            <li>Traffic and engagement metrics</li>
            <li>Conversion rates at each funnel stage</li>
            <li>Customer acquisition cost (CAC)</li>
            <li>Return on investment (ROI) for each channel</li>
          </ul>
          <h2>Conclusion</h2>
          <p>Implementing this strategy requires commitment and consistency, but the results are worth the effort. Start small, measure everything, and iterate based on what the data tells you. Remember, successful marketing is a marathon, not a sprint.</p>
          <div class="highlight-box">
            <strong>Next Steps:</strong> Review our <button class="link-button" data-route="tools">Free Tools</button> page to find resources that can help you implement these strategies, or explore more <button class="link-button" data-route="blog">Blog Guides</button>.
          </div>
        </div>
        <div class="post-footer">
          <h3>Share This Post</h3>
          <div class="social-share">
            <button class="btn btn--secondary btn--sm">Twitter</button>
            <button class="btn btn--secondary btn--sm">LinkedIn</button>
            <button class="btn btn--secondary btn--sm">Facebook</button>
          </div>
        </div>
        ${relatedPosts.length > 0 ? `
        <section class="related-posts">
          <h3>Related Posts</h3>
          <div class="blog-grid">
            ${relatedPosts.map(rp => `
              <article class="blog-card">
                <div class="blog-card-badge"><span class="category-badge">${rp.category}</span></div>
                <h4 class="blog-card-title">${rp.title}</h4>
                <p class="blog-card-excerpt">${rp.excerpt}</p>
                <button class="btn btn--sm btn--outline" data-route="post" data-post-id="${rp.id}">Read More</button>
              </article>
            `).join('')}
          </div>
        </section>` : ''}
        <section class="newsletter-section">
          <div class="newsletter-container">
            <h2 class="newsletter-heading">Get More Tips Like This</h2>
            <p class="newsletter-subheading">Join our newsletter for weekly marketing insights</p>
            <form class="newsletter-form" id="postNewsletterForm">
              <input type="email" class="form-control" placeholder="Your email address" required />
              <button type="submit" class="btn btn--primary">Subscribe</button>
            </form>
          </div>
        </section>
      </div>
    </article>
  `;
}

function renderResourcesPage() {
  return `
    <section class="page-section">
      <div class="container page-container">
        <h1 class="page-title">Free Marketing Resources</h1>
        <p class="page-subtitle">Download templates, guides, and checklists to accelerate your marketing</p>
        <div class="card">
          <h2>📥 Downloadable Resources</h2>
          <div class="resource-list">
            <div class="resource-item">
              <div class="resource-info">
                <h3>Complete Digital Marketing Checklist</h3>
                <p>Step-by-step checklist covering all essential digital marketing activities</p>
              </div>
              <button class="btn btn--primary btn--sm" id="downloadChecklist">Download PDF</button>
            </div>
            <div class="resource-item">
              <div class="resource-info">
                <h3>Social Media Content Calendar Template</h3>
                <p>Pre-formatted spreadsheet to plan and schedule your social media content</p>
              </div>
              <button class="btn btn--primary btn--sm" id="downloadCalendar">Download Template</button>
            </div>
            <div class="resource-item">
              <div class="resource-info">
                <h3>SEO Keyword Research Guide</h3>
                <p>Comprehensive guide with actionable keyword research strategies</p>
              </div>
              <button class="btn btn--primary btn--sm" id="downloadSEO">Download PDF</button>
            </div>
            <div class="resource-item">
              <div class="resource-info">
                <h3>Email Marketing Templates Pack</h3>
                <p>10 proven email templates for different campaigns and stages</p>
              </div>
              <button class="btn btn--primary btn--sm" id="downloadEmail">Download Pack</button>
            </div>
          </div>
        </div>
        <div class="card">
          <h2>🔗 Curated Tool Lists</h2>
          <ul>
            <li><strong>Best Free SEO Tools:</strong> Google Search Console, Ubersuggest, AnswerThePublic</li>
            <li><strong>Content Creation Tools:</strong> Canva, Grammarly, Hemingway Editor</li>
            <li><strong>Analytics Platforms:</strong> Google Analytics, Hotjar, Microsoft Clarity</li>
            <li><strong>Social Media Management:</strong> Buffer, Hootsuite, Later</li>
            <li><strong>Email Marketing:</strong> Mailchimp, Brevo, MailerLite</li>
          </ul>
          <button class="btn btn--secondary" data-route="tools">View Full Tool List</button>
        </div>
        <div class="card">
          <h2>🎥 Video Tutorials</h2>
          <p>Watch our step-by-step video guides on YouTube covering topics like SEO setup, content strategy, and social media growth.</p>
          <button class="btn btn--outline">Watch on YouTube</button>
        </div>
        <div class="card">
          <h2>📚 Case Studies</h2>
          <p>Learn from real startups who successfully grew their businesses using the strategies we teach. See their challenges, solutions, and measurable results.</p>
          <ul>
            <li>How a SaaS startup grew from 0 to 10,000 users with content marketing</li>
            <li>Local business that tripled revenue using local SEO tactics</li>
            <li>E-commerce brand that achieved 300% ROI with email automation</li>
          </ul>
        </div>
      </div>
    </section>
  `;
}

function renderToolsPage() {
  const categories = ['All', ...new Set(FREE_TOOLS.map(t => t.category))];
  return `
    <section class="page-section">
      <div class="container page-container">
        <h1 class="page-title">Free Marketing Tools</h1>
        <p class="page-subtitle">Curated list of the best free and freemium tools for startups</p>
        <div class="tool-filters">
          ${categories.map(cat => `<button class="filter-btn ${cat === 'All' ? 'active' : ''}" data-tool-category="${cat}">${cat}</button>`).join('')}
        </div>
        <div class="tools-grid" id="toolsGrid">
          ${FREE_TOOLS.map(tool => `
            <div class="tool-card" data-category="${tool.category}">
              <h3 class="tool-card-title">${tool.name}</h3>
              <span class="tool-category">${tool.category}</span>
              <p class="tool-card-desc">${tool.description}</p>
              <div class="tool-card-footer">
                <span class="tool-pricing">${tool.pricing}</span>
                <a href="${tool.link}" target="_blank" class="btn btn--sm btn--outline" rel="noopener noreferrer">Visit Tool</a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

function renderContactPage() {
  return `
    <section class="page-section">
      <div class="container page-container contact-page">
        <h1 class="page-title">Get In Touch</h1>
        <div class="contact-layout">
          <div class="contact-form-section">
            <div class="card">
              <h2>Send Us A Message</h2>
              <form id="contactForm" class="contact-form">
                <div class="form-group">
                  <label class="form-label" for="contactName">Name *</label>
                  <input type="text" class="form-control" id="contactName" required />
                </div>
                <div class="form-group">
                  <label class="form-label" for="contactEmail">Email *</label>
                  <input type="email" class="form-control" id="contactEmail" required />
                </div>
                <div class="form-group">
                  <label class="form-label" for="contactSubject">Subject *</label>
                  <input type="text" class="form-control" id="contactSubject" required />
                </div>
                <div class="form-group">
                  <label class="form-label" for="contactMessage">Message *</label>
                  <textarea class="form-control" id="contactMessage" rows="6" required></textarea>
                </div>
                <button type="submit" class="btn btn--primary btn--full-width">Send Message</button>
              </form>
              <div id="contactSuccess" class="success-message hidden">
                <strong>✓ Message sent successfully!</strong>
                <p>Thank you for reaching out. We'll respond within 24-48 hours.</p>
              </div>
            </div>
          </div>
          <div class="contact-info-section">
            <div class="card">
              <h3>Contact Information</h3>
              <p><strong>Email:</strong> hello@digitalmarketingstartups.com</p>
              <p><strong>Response Time:</strong> Within 24-48 hours</p>
            </div>
            <div class="card">
              <h3>Follow Us</h3>
              <div class="contact-social">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="btn btn--secondary btn--sm">Twitter</a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" class="btn btn--secondary btn--sm">LinkedIn</a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" class="btn btn--secondary btn--sm">Facebook</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderPrivacyPage() {
  return `
    <section class="page-section">
      <div class="container page-container">
        <h1 class="page-title">Privacy Policy</h1>
        <div class="card">
          <p><strong>Last Updated:</strong> November 2025</p>
          <h2>Information We Collect</h2>
          <p>We collect minimal information necessary to provide our services, including email addresses for newsletter subscriptions and basic analytics data to improve user experience.</p>
          <h2>How We Use Your Information</h2>
          <p>Your information is used solely to deliver the content and services you've requested, such as newsletter updates and resource downloads.</p>
          <h2>Data Security</h2>
          <p>We implement industry-standard security measures to protect your personal information.</p>
          <h2>Your Rights</h2>
          <p>You have the right to access, update, or delete your personal information at any time by contacting us.</p>
          <h2>Contact Us</h2>
          <p>For privacy-related questions, please email hello@digitalmarketingstartups.com</p>
        </div>
      </div>
    </section>
  `;
}

// ========================================
// EVENT HANDLERS
// ========================================
function attachEventListeners() {
  // Newsletter forms
  const newsletterForms = document.querySelectorAll('[id^="newsletter"], [id$="NewsletterForm"]');
  newsletterForms.forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      showModal('Success!', 'Thank you for subscribing! Check your email for confirmation.');
      form.reset();
    });
  });

  // Contact form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      const successMsg = document.getElementById('contactSuccess');
      if (successMsg) {
        contactForm.classList.add('hidden');
        successMsg.classList.remove('hidden');
      }
    });
  }

  // Resource downloads
  ['downloadChecklist', 'downloadCalendar', 'downloadSEO', 'downloadEmail'].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener('click', () => {
        showModal('Download Ready', 'Your download will start shortly. Thank you!', true);
      });
    }
  });

  // Blog category filter
  const categoryFilterButtons = document.querySelectorAll('.category-filter-btn');
  categoryFilterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryFilterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.getAttribute('data-category');
      filterBlogPosts(category);
    });
  });

  // Blog search
  const blogSearchForm = document.getElementById('blogSearchForm');
  const blogSearchInput = document.getElementById('blogSearchInput');
  if (blogSearchForm && blogSearchInput) {
    blogSearchForm.addEventListener('submit', e => e.preventDefault());
    blogSearchInput.addEventListener('input', e => {
      searchBlogPosts(e.target.value);
    });
  }

  // Tool category filter
  const toolFilterButtons = document.querySelectorAll('.filter-btn[data-tool-category]');
  toolFilterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      toolFilterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.getAttribute('data-tool-category');
      filterTools(category);
    });
  });

  // Hero CTA
  const heroCTA = document.getElementById('heroCTA');
  if (heroCTA) {
    heroCTA.addEventListener('click', () => {
      navigateTo('blog');
    });
  }

  // Header CTA
  const navCTA = document.getElementById('nav-cta');
  if (navCTA) {
    navCTA.addEventListener('click', () => {
      showModal('Free Guide', 'Enter your email to receive our comprehensive digital marketing guide for startups.', true);
    });
  }

  // Nav search
  const navSearchForm = document.getElementById('navSearchForm');
  if (navSearchForm) {
    navSearchForm.addEventListener('submit', e => {
      e.preventDefault();
      navigateTo('blog');
    });
  }
}

function filterBlogPosts(category) {
  const grid = document.getElementById('blogPostsGrid');
  if (!grid) return;
  const filtered = category === 'All' ? BLOG_POSTS : BLOG_POSTS.filter(p => p.category === category);
  grid.innerHTML = filtered.map(post => `
    <article class="blog-card">
      <div class="blog-card-badge"><span class="category-badge">${post.category}</span></div>
      <h3 class="blog-card-title">${post.title}</h3>
      <p class="blog-card-excerpt">${post.excerpt}</p>
      <div class="blog-card-meta">
        <span>📖 ${post.readTime}</span>
        <button class="btn btn--sm btn--outline" data-route="post" data-post-id="${post.id}">Read More</button>
      </div>
    </article>
  `).join('');
}

function searchBlogPosts(query) {
  const grid = document.getElementById('blogPostsGrid');
  if (!grid) return;
  const lowerQuery = query.toLowerCase();
  const filtered = BLOG_POSTS.filter(p =>
    p.title.toLowerCase().includes(lowerQuery) ||
    p.excerpt.toLowerCase().includes(lowerQuery) ||
    p.category.toLowerCase().includes(lowerQuery)
  );
  grid.innerHTML = filtered.length > 0 ? filtered.map(post => `
    <article class="blog-card">
      <div class="blog-card-badge"><span class="category-badge">${post.category}</span></div>
      <h3 class="blog-card-title">${post.title}</h3>
      <p class="blog-card-excerpt">${post.excerpt}</p>
      <div class="blog-card-meta">
        <span>📖 ${post.readTime}</span>
        <button class="btn btn--sm btn--outline" data-route="post" data-post-id="${post.id}">Read More</button>
      </div>
    </article>
  `).join('') : '<p class="no-results">No posts found matching your search.</p>';
}

function filterTools(category) {
  const cards = document.querySelectorAll('.tool-card');
  cards.forEach(card => {
    if (category === 'All' || card.getAttribute('data-category') === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

function showModal(title, message, hasEmail = false) {
  const modalContainer = document.getElementById('modalContainer');
  if (!modalContainer) return;
  const emailField = hasEmail ? '<input type="email" class="form-control" placeholder="Your email" id="modalEmail" required style="margin:16px 0" />' : '';
  modalContainer.innerHTML = `
    <div class="modal-overlay" id="modalOverlay">
      <div class="modal-content">
        <h3>${title}</h3>
        <p>${message}</p>
        ${emailField}
        <button class="btn btn--primary" id="modalClose">Close</button>
      </div>
    </div>
  `;
  document.getElementById('modalClose').addEventListener('click', () => {
    modalContainer.innerHTML = '';
  });
  document.getElementById('modalOverlay').addEventListener('click', e => {
    if (e.target.id === 'modalOverlay') modalContainer.innerHTML = '';
  });
}

// ========================================
// MOBILE NAV
// ========================================
function initMobileNav() {
  const hamburger = document.getElementById('navHamburger');
  const mobileNav = document.getElementById('mobile-nav');
  const closeBtn = document.getElementById('closeMobileNav');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      mobileNav.classList.toggle('hidden');
    });
  }

  if (closeBtn && mobileNav) {
    closeBtn.addEventListener('click', () => {
      mobileNav.classList.add('hidden');
    });
  }
}

function closeMobileNav() {
  const mobileNav = document.getElementById('mobile-nav');
  if (mobileNav) mobileNav.classList.add('hidden');
}

// ========================================
// INIT
// ========================================
function init() {
  initRouter();
  initMobileNav();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}