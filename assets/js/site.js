(function () {
  const data = window.POWERLOAD_SITE;
  const root = document.body.dataset.root || "";
  const page = document.body.dataset.page || "home";
  const app = document.getElementById("app");

  const path = (url) => {
    if (!url) return "#";
    if (/^(https?:|mailto:|tel:)/.test(url)) return url;
    return root + url;
  };

  const setFavicon = () => {
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      link.type = "image/png";
      document.head.appendChild(link);
    }
    link.href = path("images/powerloadbd_favicon.png");
  };
  setFavicon();

  const product = (key) => data.products.find((item) => item.key === key);

  function renderHeader() {
    const header = document.getElementById("site-header");
    const products = data.products.map((item) => `<a href="${path(item.href)}">${item.name}</a>`).join("");
    const about = data.aboutPages.map((item) => `<a href="${path(item.href)}">${item.label}</a>`).join("");

    header.innerHTML = `
      <div class="topbar">
        <span>${data.company.phone}</span>
        <span>${data.company.hours}</span>
      </div>
      <header class="nav-wrap">
        <div class="nav-inner">
          <a class="brand" href="${path("index.html")}" aria-label="${data.company.name} home">
            <img src="${path(data.company.logo)}" alt="${data.company.name} logo">
            <span>${data.company.name}</span>
          </a>
          <button class="menu-toggle" type="button" aria-label="Toggle navigation" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
          <nav class="main-nav" aria-label="Primary navigation">
            <a href="${path("index.html")}">Home</a>
            <div class="nav-group">
              <button type="button">About Us</button>
              <div class="dropdown">${about}</div>
            </div>
            <div class="nav-group">
              <button type="button">Products</button>
              <div class="dropdown">${products}</div>
            </div>
            <a href="${path("clients.html")}">Clients</a>
            <a href="${path("archives.html")}">Archives</a>
            <a href="${path("projects.html")}">Project</a>
            <a href="${path("service.html")}">Service</a>
            <a href="${path("contact.html")}">Contact</a>
          </nav>
        </div>
      </header>
    `;

    const toggle = header.querySelector(".menu-toggle");
    const nav = header.querySelector(".main-nav");
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    const navGroups = header.querySelectorAll(".nav-group > button");
    navGroups.forEach(button => {
      button.addEventListener("click", () => {
        button.parentElement.classList.toggle("is-open");
      });
    });
  }

  function renderFooter() {
    const footer = document.getElementById("site-footer");
    footer.innerHTML = `
      <footer class="footer">
        <div class="footer-inner">
          <div>
            <img src="${path(data.company.logo)}" alt="" class="footer-logo">
            <p>${data.company.slogan}</p>
          </div>
          <div>
            <h3>Products</h3>
            ${data.products.slice(0, 6).map((item) => `<a href="${path(item.href)}">${item.name}</a>`).join("")}
          </div>
          <div>
            <h3>Contact</h3>
            <p>${data.company.address}</p>
            <a href="tel:${data.company.phone.replace(/[\s\.]/g, "")}">${data.company.phone}</a>
            <a href="mailto:${data.company.email}">${data.company.email}</a>
          </div>
        </div>
      </footer>
      <div class="copyright">
        <div class="copyright-inner">Copyright © ${new Date().getFullYear()} ${data.company.name}. All rights reserved.</div>
      </div>
    `;
  }

  function hero(title, kicker, text, image) {
    const style = image ? ` style="background-image: linear-gradient(90deg, rgba(12,18,28,.88), rgba(12,18,28,.58)), url('${path(image)}')"` : "";
    return `
      <section class="hero"${style}>
        <div class="hero-inner">
          <p class="kicker">${kicker}</p>
          <h1>${title}</h1>
          <p>${text}</p>
        </div>
      </section>
    `;
  }

  function renderHome() {
    document.title = `${data.company.name} | Power Solutions`;
    const productCards = data.products.map((item) => `
      <a class="product-card" href="${path(item.href)}">
        <img src="${path(item.image)}" alt="${item.name}">
        <div>
          <h3>${item.name}</h3>
          <p>${item.summary}</p>
        </div>
      </a>
    `).join("");

    app.innerHTML = `
      ${hero(data.company.name, "Electrical Power Solutions", "Substation, transformer, switchgear, generator, panel, lift, and solar solutions for Bangladesh projects.", "assets/images/products/lt-switchgear.jpg")}
      <section class="section intro-grid">
        <div>
          <p class="kicker">About The Company</p>
          <h2>Built around practical power-system needs</h2>
          <p>Power Load BD brings core electrical products into one organized portfolio, helping clients discuss power distribution, backup generation, panel work, and renewable energy from one place.</p>
        </div>
        <div class="stat-grid">
          <div><strong>8</strong><span>Product categories</span></div>
          <div><strong>3</strong><span>Generator series pages</span></div>
          <div><strong>2</strong><span>Downloadable catalogues</span></div>
          <div><strong>24/7</strong><span>Project-critical mindset</span></div>
        </div>
      </section>
      <section class="section">
        <div class="section-head">
          <p class="kicker">Our Products</p>
          <h2>Solutions for distribution, backup power, and energy efficiency</h2>
        </div>
        <div class="product-grid">${productCards}</div>
      </section>
      <section class="section band">
        <div class="band-inner">
          <div>
            <p class="kicker">Catalogues</p>
            <h2>Review product and generator details</h2>
            <p>Download the provided Power Load BD catalogue files for more project discussion material.</p>
          </div>
          <div class="button-row">
            <a class="btn primary" href="${path("assets/catalogs/powerloadbd-main-catalog.pdf")}">Main Catalogue</a>
            <a class="btn secondary" href="${path("assets/catalogs/powerloadbd-generator-catalog.pdf")}">Generator Catalogue</a>
          </div>
        </div>
      </section>
    `;
  }

  function renderInfo() {
    const key = document.body.dataset.key;
    const pageData = data.pages[key];
    document.title = `${pageData.title} | ${data.company.name}`;
    const points = pageData.points ? `<div class="value-list">${pageData.points.map((item) => `<span>${item}</span>`).join("")}</div>` : "";
    app.innerHTML = `
      ${hero(pageData.title, pageData.kicker, pageData.body[0], "assets/images/products/substation.jpg")}
      <section class="section readable">
        ${pageData.body.map((paragraph) => `<p>${paragraph}</p>`).join("")}
        ${points}
      </section>
    `;
  }

  function renderManagement() {
    document.title = `Management | ${data.company.name}`;
    const people = data.management.map((person) => `
      <article class="person-card">
        ${person.image ? `<img src="${path(person.image)}" alt="${person.name}">` : `<div class="avatar">PL</div>`}
        <div>
          <p class="kicker">${person.role}</p>
          <h3>${person.name}</h3>
          <p>${person.detail}</p>
        </div>
      </article>
    `).join("");
    app.innerHTML = `
      ${hero("Management", "Leadership", "Meet the leadership team guiding Power Load BD's business, client service, and project execution.", "assets/images/products/transformer.jpg")}
      <section class="section people-grid">${people}</section>
    `;
  }

  function renderService() {
    document.title = `Service Team | ${data.company.name}`;
    const people = data.serviceTeam.map((person) => `
      <article class="person-card">
        <a href="${path(person.href)}" style="text-decoration:none; color:inherit;">
          ${person.image ? `<img src="${path(person.image)}" alt="${person.name}">` : `<div class="avatar">PL</div>`}
          <div>
            <p class="kicker">${person.role}</p>
            <h3>${person.name}</h3>
            <p>${person.detail}</p>
          </div>
        </a>
      </article>
    `).join("");
    app.innerHTML = `
      ${hero("Service", "Service Team", "Meet the service team dedicated to customer support and technical operations.", "assets/images/products/generator.jpg")}
      <section class="section people-grid">${people}</section>
    `;
  }

  function renderEmployee() {
    const key = document.body.dataset.key;
    const person = data.serviceTeam.find((p) => p.key === key);
    if (!person) return;
    document.title = `${person.name} | ${data.company.name}`;
    app.innerHTML = `
      ${hero(person.name, person.role, person.detail, "")}
      <section class="section product-detail">
        <div>
          <p class="kicker">Profile</p>
          <h2>${person.name}</h2>
          <p><strong>Role:</strong> ${person.role}</p>
          <p>${person.detail}</p>
        </div>
        ${person.image ? `<img src="${path(person.image)}" alt="${person.name}" style="max-width:300px; border-radius:8px;">` : `<div class="avatar" style="width:300px; height:300px; display:flex; align-items:center; justify-content:center; font-size:48px;">PL</div>`}
      </section>
    `;
  }

  function renderProduct() {
    const item = product(document.body.dataset.product);
    document.title = `${item.name} | ${data.company.name}`;
    const rows = item.specs.slice(1).map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("");
    const heads = item.specs[0].map((head) => `<th>${head}</th>`).join("");
    const specImages = item.specImages ? `
      <div class="catalog-images">
        ${item.specImages.map((image) => `<img src="${path(image)}" alt="${item.name} catalogue specification">`).join("")}
      </div>
    ` : "";
    const catalogButton = item.catalog ? `<a class="btn secondary" href="${path(item.catalog)}">Download Generator Catalogue</a>` : `<a class="btn secondary" href="${path("assets/catalogs/powerloadbd-main-catalog.pdf")}">Download Main Catalogue</a>`;

    app.innerHTML = `
      ${hero(item.name, "Product", item.summary, item.image)}
      <section class="section product-detail">
        <div>
          <p class="kicker">Overview</p>
          <h2>${item.name} solutions</h2>
          <p>${item.summary}</p>
          <ul>${item.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}</ul>
          <div class="button-row">
            ${catalogButton}
          </div>
        </div>
        <img src="${path(item.image)}" alt="${item.name}">
      </section>
      <section class="section">
        <div class="section-head">
          <p class="kicker">Model Details</p>
          <h2>${item.name} specifications</h2>
        </div>
        <div class="table-wrap">
          <table>
            <thead><tr>${heads}</tr></thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
        ${specImages}
      </section>
    `;
  }

  function renderClients() {
    document.title = `Clients | ${data.company.name}`;
    const clientRows = data.clientsList ? data.clientsList.map((client) => `
      <tr>
        <td>${client.id}</td>
        <td>
          <strong>${client.company}</strong><br>
          <span style="font-size: 0.9em; color: #555;">${client.address}</span>
        </td>
        <td>${client.rating}</td>
      </tr>
    `).join("") : "";

    const clientTable = data.clientsList ? `
      <section class="section">
        <div class="section-head">
          <p class="kicker">Full List</p>
          <h2>Our Clients</h2>
        </div>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>No.</th>
                <th>Company Name & Address</th>
                <th>Rating / Details</th>
              </tr>
            </thead>
            <tbody>
              ${clientRows}
            </tbody>
          </table>
        </div>
      </section>
    ` : "";

    app.innerHTML = `
      ${hero("Clients", "Sectors Served", "Power Load BD is positioned for industrial, commercial, residential, and institutional electrical power requirements.", "assets/images/products/mdb-db-sdb-panel.jpg")}
      <section class="section band compact-band">
        <div class="band-inner">
          <div>
            <p class="kicker">Client Reference</p>
            <h2>Download the client list</h2>
            <p>The client list PDF is available as a quick reference for previous work and business development discussions.</p>
          </div>
          <div class="button-row">
            <a class="btn primary" href="${path("assets/catalogs/client-list.pdf")}">Client List PDF</a>
          </div>
        </div>
      </section>
      <section class="section client-grid">
        ${["Industrial factories", "Commercial buildings", "Residential developments", "Hospitals and service facilities", "Government and utility projects", "Renewable energy clients"].map((item) => `<div>${item}</div>`).join("")}
      </section>
      ${clientTable}
    `;
  }

  function renderArchives() {
    document.title = `Archives | ${data.company.name}`;
    const documents = data.archives.documents.map((item) => `
      <a class="archive-doc" href="${path(item[2])}">
        <strong>${item[0]}</strong>
        <span>${item[1]}</span>
      </a>
    `).join("");
    const gallery = data.archives.gallery.map((item) => `
      <a class="archive-photo" href="${path(item[1])}">
        <img src="${path(item[1])}" alt="${item[0]}">
        <span>${item[0]}</span>
      </a>
    `).join("");
    app.innerHTML = `
      ${hero("Archives", "Project Records", "Browse catalogue documents, client references, site delivery records, handover photos, and installation-stage images.", "assets/images/archives/site-delivery-truck.jpg")}
      <section class="section">
        <div class="section-head">
          <p class="kicker">Documents</p>
          <h2>Catalogues and reference files</h2>
        </div>
        <div class="archive-list">${documents}</div>
      </section>
      <section class="section archive-gallery-section">
        <div class="section-head">
          <p class="kicker">Gallery</p>
          <h2>Project and delivery archive</h2>
        </div>
        <div class="archive-gallery">${gallery}</div>
      </section>
    `;
  }

  function renderProjects() {
    document.title = `Project | ${data.company.name}`;
    const cards = data.projects.map((item) => `
      <article class="portfolio-card">
        <a href="${path(item.image)}" class="portfolio-image">
          <img src="${path(item.image)}" alt="${item.title}">
          <span>${item.type}</span>
        </a>
        <div>
          <h3>${item.title}</h3>
          <p>${item.scope}</p>
          <ul>${item.details.map((detail) => `<li>${detail}</li>`).join("")}</ul>
          <a class="text-link" href="${path(item.image)}">View project photo</a>
        </div>
      </article>
    `).join("");
    app.innerHTML = `
      ${hero("Project", "Completed Work", "A portfolio view of Power Load BD project activity across panels, substations, generators, metering, and solar installation.", "assets/images/projects/lt-panel-commissioning.jpg")}
      <section class="section project-intro">
        <div>
          <p class="kicker">Project Experience</p>
          <h2>Previous work clients can review before starting a new project</h2>
          <p>These cards use real site and archive images so visitors can quickly understand the kind of power-system work Power Load BD handles.</p>
        </div>
        <div class="stat-grid">
          <div><strong>10</strong><span>Featured project cards</span></div>
          <div><strong>6</strong><span>Work categories</span></div>
        </div>
      </section>
      <section class="section portfolio-grid">
        ${cards}
      </section>
    `;
  }

  function renderContact() {
    document.title = `Contact | ${data.company.name}`;
    app.innerHTML = `
      ${hero("Contact", "Talk To Us", "Share your load requirement, product interest, or project scope and the team can prepare a suitable response.", "assets/images/products/generator.jpg")}
      <section class="section contact-grid">
        <div>
          <p class="kicker">Contact Info</p>
          <h2>${data.company.name}</h2>
          <p>${data.company.address}</p>
          <p><strong>Phone:</strong> ${data.company.phone}</p>
          <p><strong>Email:</strong> ${data.company.email}</p>
          <p><strong>Hours:</strong> ${data.company.hours}</p>
        </div>
        <form class="contact-form" id="contact-form">
          <label>Name <input type="text" name="name" placeholder="Your name" required></label>
          <label>Email <input type="email" name="email" placeholder="you@example.com" required></label>
          <label>Requirement <textarea name="message" rows="5" placeholder="Tell us what you need" required></textarea></label>
          <button type="submit" class="btn primary">Send By Email</button>
        </form>
      </section>
    `;

    const form = document.getElementById("contact-form");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const fd = new FormData(form);
        const name = fd.get("name") || "";
        const email = fd.get("email") || "";
        const message = fd.get("message") || "";
        const subject = encodeURIComponent("Inquiry from " + name);
        const body = encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\nRequirement:\n" + message);
        window.location.href = `mailto:${data.company.email}?subject=${subject}&body=${body}`;
      });
    }
  }

  const renderers = {
    home: renderHome,
    info: renderInfo,
    management: renderManagement,
    product: renderProduct,
    clients: renderClients,
    archives: renderArchives,
    projects: renderProjects,
    contact: renderContact,
    service: renderService,
    employee: renderEmployee
  };

  renderHeader();
  renderFooter();
  (renderers[page] || renderHome)();
})();
