// Application data
const data = {
  keywords: [
    { keyword: 'digital marketing for startups', searchVolume: 1900, difficulty: 12, intent: 'commercial', monthlyPotential: 145 },
    { keyword: 'startup marketing strategies', searchVolume: 2100, difficulty: 18, intent: 'commercial', monthlyPotential: 168 },
    { keyword: 'low cost marketing tactics', searchVolume: 1400, difficulty: 15, intent: 'commercial', monthlyPotential: 98 },
    { keyword: 'social media marketing for startups', searchVolume: 3200, difficulty: 16, intent: 'commercial', monthlyPotential: 256 },
    { keyword: 'content marketing beginner guide', searchVolume: 2800, difficulty: 14, intent: 'informational', monthlyPotential: 224 }
  ],
  competitors: [
    { name: 'HubSpot Blog', domainAuthority: 92, backlinks: 48500, topKeywords: 2341, contentGap: 'Limited startup-specific guides' },
    { name: 'Neil Patel', domainAuthority: 88, backlinks: 35600, topKeywords: 1893, contentGap: 'Minimal budget-focused content' },
    { name: 'Sprout Social', domainAuthority: 85, backlinks: 28900, topKeywords: 1456, contentGap: 'Limited SMM for startups section' },
    { name: 'CoSchedule', domainAuthority: 82, backlinks: 22100, topKeywords: 1123, contentGap: 'No startup vertical focus' },
    { name: 'Smart Insights', domainAuthority: 79, backlinks: 18500, topKeywords: 934, contentGap: 'Limited case studies' }
  ],
  rankings: [
    { keyword: 'digital marketing for startups', position: 8, clicksPerMonth: 58, trend: '↑' },
    { keyword: 'startup marketing tips', position: 12, clicksPerMonth: 34, trend: '↑' },
    { keyword: 'low cost marketing', position: 6, clicksPerMonth: 42, trend: '↑' },
    { keyword: 'social media marketing guide', position: 15, clicksPerMonth: 28, trend: '→' },
    { keyword: 'content marketing 101', position: 9, clicksPerMonth: 38, trend: '↑' },
    { keyword: 'email marketing for startups', position: 11, clicksPerMonth: 26, trend: '↑' },
    { keyword: 'SEO basics beginner', position: 7, clicksPerMonth: 44, trend: '↑' },
    { keyword: 'free marketing tools', position: 13, clicksPerMonth: 22, trend: '→' },
    { keyword: 'marketing budget allocation', position: 10, clicksPerMonth: 31, trend: '↑' },
    { keyword: 'customer acquisition strategies', position: 14, clicksPerMonth: 25, trend: '↑' },
    { keyword: 'brand building tips', position: 16, clicksPerMonth: 19, trend: '→' },
    { keyword: 'viral marketing examples', position: 12, clicksPerMonth: 21, trend: '↑' }
  ],
  auditIssues: [
    { title: 'Broken Links Found', severity: 'Critical', count: 3, solution: 'Fixed all broken internal and external links', status: 'Resolved' },
    { title: 'Missing Meta Descriptions', severity: 'Critical', count: 2, solution: 'Added optimized meta descriptions to all pages', status: 'Resolved' },
    { title: 'Mobile Usability Issues', severity: 'Critical', count: 2, solution: 'Implemented responsive design fixes', status: 'Resolved' },
    { title: 'XML Sitemap Missing', severity: 'Critical', count: 1, solution: 'Generated and submitted XML sitemap', status: 'Resolved' }
  ]
};

// Navigation
function initNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('.content-section');

  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const targetSection = item.getAttribute('data-section');

      // Update active nav item
      navItems.forEach(nav => nav.classList.remove('active'));
      item.classList.add('active');

      // Show target section
      sections.forEach(section => section.classList.remove('active'));
      document.getElementById(targetSection).classList.add('active');

      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
}

// Populate tables
function populateTables() {
  // Keywords table
  const keywordsTable = document.getElementById('keywordsTable');
  if (keywordsTable) {
    keywordsTable.innerHTML = data.keywords.map(kw => `
      <tr>
        <td><strong>${kw.keyword}</strong></td>
        <td>${kw.searchVolume.toLocaleString()}</td>
        <td><span class="status-excellent">${kw.difficulty}</span></td>
        <td>${kw.intent}</td>
        <td>${kw.monthlyPotential}</td>
      </tr>
    `).join('');
  }

  // Competitors table
  const competitorsTable = document.getElementById('competitorsTable');
  if (competitorsTable) {
    competitorsTable.innerHTML = data.competitors.map(comp => `
      <tr>
        <td><strong>${comp.name}</strong></td>
        <td>${comp.domainAuthority}</td>
        <td>${comp.backlinks.toLocaleString()}</td>
        <td>${comp.topKeywords.toLocaleString()}</td>
        <td>${comp.contentGap}</td>
      </tr>
    `).join('');
  }

  // Rankings table
  const rankingsTable = document.getElementById('rankingsTable');
  if (rankingsTable) {
    rankingsTable.innerHTML = data.rankings.map(rank => `
      <tr>
        <td><strong>${rank.keyword}</strong></td>
        <td><span class="status-excellent">#${rank.position}</span></td>
        <td>${rank.clicksPerMonth}</td>
        <td style="font-size: 18px;">${rank.trend}</td>
      </tr>
    `).join('');
  }

  // Audit issues table
  const auditIssuesTable = document.getElementById('auditIssuesTable');
  if (auditIssuesTable) {
    auditIssuesTable.innerHTML = data.auditIssues.map(issue => `
      <tr>
        <td><strong>${issue.title}</strong></td>
        <td><span class="status-warning">${issue.severity}</span></td>
        <td>${issue.count}</td>
        <td>${issue.solution}</td>
        <td><span class="status-excellent">${issue.status}</span></td>
      </tr>
    `).join('');
  }
}

// Create charts
function createCharts() {
  // Traffic sources chart
  const trafficCtx = document.getElementById('trafficSourcesChart');
  if (trafficCtx) {
    new Chart(trafficCtx, {
      type: 'doughnut',
      data: {
        labels: ['Organic Search', 'Direct', 'Referral', 'Social Media'],
        datasets: [{
          data: [58, 18, 15, 9],
          backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#5D878F'],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              padding: 15,
              font: {
                size: 12,
                family: 'FKGroteskNeue, Inter, sans-serif'
              }
            }
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                return context.label + ': ' + context.parsed + '%';
              }
            }
          }
        }
      }
    });
  }
}

// Initialize app
function initApp() {
  initNavigation();
  populateTables();
  
  // Wait for Chart.js to load before creating charts
  if (typeof Chart !== 'undefined') {
    createCharts();
  } else {
    // Retry after a short delay if Chart.js hasn't loaded yet
    setTimeout(createCharts, 500);
  }
}

// Run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}