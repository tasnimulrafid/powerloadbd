window.POWERLOAD_SITE = {
  company: {
    name: "Power Load BD",
    slogan: "Power solutions engineered for reliable operation",
    phone: "+8801674149747",
    email: "info@powerloadbd.com",
    address: "Dhaka, Bangladesh",
    hours: "Sat to Thu, 9:00am - 6:00pm",
    logo: "assets/images/powerloadbd-logo.jpeg"
  },
  aboutPages: [
    { label: "About", href: "about/about.html", key: "about" },
    { label: "Mission & Vision", href: "about/mission-vision.html", key: "mission" },
    { label: "Management", href: "about/management.html", key: "management" },
    { label: "Quality Policy", href: "about/quality-policy.html", key: "quality" },
    { label: "Values of Power Load BD", href: "about/values.html", key: "values" },
    { label: "Why Power Load BD", href: "about/why-powerload.html", key: "why" }
  ],
  products: [
    {
      key: "sub-station",
      name: "Sub Station",
      href: "products/sub-station.html",
      image: "assets/images/products/substation.jpg",
      summary: "Complete substation supply, installation, testing, and commissioning for industrial, commercial, and utility applications.",
      bullets: ["Turnkey electrical substation execution", "HT and LT integration", "Protection, metering, and earthing coordination"],
      specs: [
        ["Solution", "Typical Configuration", "Application"],
        ["Indoor Substation", "HT panel, transformer, LT panel, cabling", "Factories and commercial buildings"],
        ["Outdoor Substation", "Transformer, structure, protection equipment", "Industrial sites and utility yards"],
        ["Compact Package", "Space-saving integrated equipment layout", "Projects with limited electrical room space"]
      ]
    },
    {
      key: "transformer",
      name: "Transformer",
      href: "products/transformer.html",
      image: "assets/images/products/transformer.jpg",
      summary: "Distribution and power transformer solutions built for stable voltage, low losses, and dependable field performance.",
      bullets: ["Oil immersed transformer solutions", "Distribution and power transformer ranges", "Factory testing and project-specific configuration"],
      specs: [
        ["Type", "Typical Range", "Details"],
        ["Distribution Transformer", "Project based kVA rating", "For factories, buildings, and distribution systems"],
        ["Power Transformer", "High-capacity industrial duty", "Designed for large load centers and utility projects"],
        ["Service Support", "Testing and commissioning", "Inspection, installation support, and maintenance guidance"]
      ]
    },
    {
      key: "ht-switchgear",
      name: "HT Switchgear",
      href: "products/ht-switchgear.html",
      image: "assets/images/products/ht-switchgear.jpg",
      summary: "High-tension switchgear panels for controlled, protected, and maintainable electrical distribution.",
      bullets: ["VCB and protection panel arrangements", "Metering and control integration", "Industrial-grade enclosure and interlocking"],
      specs: [
        ["Model Family", "Equipment", "Use"],
        ["VCB Panel", "Vacuum circuit breaker panel", "Incoming, outgoing, and feeder protection"],
        ["LBS Panel", "Load break switch arrangement", "Compact HT switching applications"],
        ["Metering Panel", "CT/PT and measurement integration", "Energy monitoring and utility interface"]
      ]
    },
    {
      key: "lt-switchgear",
      name: "LT Switchgear",
      href: "products/lt-switchgear.html",
      image: "assets/images/products/lt-switchgear.jpg",
      summary: "Low-tension switchgear for safe distribution, load control, feeder protection, and operational monitoring.",
      bullets: ["ACB/MCCB based feeder panels", "Busbar and cable termination planning", "AMF, ATS, and power control options"],
      specs: [
        ["Panel Type", "Core Components", "Application"],
        ["Main LT Panel", "ACB/MCCB, metering, protection", "Main distribution from transformer/generator"],
        ["Feeder Panel", "Outgoing breakers and indicators", "Machine, floor, or zone distribution"],
        ["ATS/AMF Panel", "Automatic source transfer/control", "Generator and grid source management"]
      ]
    },
    {
      key: "mdb-db-sdb-panel",
      name: "MDB, DB, SDB Panel",
      href: "products/mdb-db-sdb-panel.html",
      image: "assets/images/products/mdb-db-sdb-panel.jpg",
      summary: "Main, distribution, and sub-distribution boards for organized electrical load routing across projects.",
      bullets: ["Custom panel design by load schedule", "Clean cable management and labelled feeders", "Suitable for buildings, factories, and service floors"],
      specs: [
        ["Panel", "Role", "Typical Use"],
        ["MDB", "Main Distribution Board", "Primary low-voltage distribution point"],
        ["DB", "Distribution Board", "Floor or zone-level electrical distribution"],
        ["SDB", "Sub Distribution Board", "Machine, lighting, or local service feeders"]
      ]
    },
    {
      key: "generator",
      name: "Generator",
      href: "products/generator.html",
      image: "assets/images/products/generator.jpg",
      summary: "Diesel and portable generator ranges including Cummins powered, Ricardo/Lambert powered, and KPT portable gasoline/petrol units.",
      bullets: ["Prime and standby power options", "Open and canopied genset configurations", "Catalogue-backed model specifications"],
      specs: [
        ["Series", "Model / Engine", "Prime Power", "Standby Power"],
        ["Cummins", "4BT3.9-G1", "30 kVA / 24 kW", "33 kVA / 26 kW"],
        ["Cummins", "6BT5.9-G1", "100 kVA / 80 kW", "110 kVA / 88 kW"],
        ["Cummins", "KT38-G5", "1000 kVA / 800 kW", "1100 kVA / 880 kW"],
        ["Ricardo", "GF-24 / ZH4100D", "30 kVA / 24 kW", "33 kVA / 26 kW"],
        ["Ricardo", "GF-120 / R6105IZLD", "150 kVA / 120 kW", "165 kVA / 132 kW"],
        ["Lambert", "GF-200 / 6D10D200A", "250 kVA / 200 kW", "275 kVA / 220 kW"],
        ["KPT Portable", "LT3500MXE / LT210", "2.5 kW", "2.8 kW max"],
        ["KPT Portable", "LT12000CLE / LT500", "9.0 kW", "9.5 kW max"]
      ],
      specImages: [
        "assets/images/products/generator-cummins-spec.jpg",
        "assets/images/products/generator-ricardo-lambert-spec.jpg",
        "assets/images/products/generator-kpt-spec.jpg"
      ],
      catalog: "assets/catalogs/powerloadbd-generator-catalog.pdf"
    },
    {
      key: "lift",
      name: "Lift",
      href: "products/lift.html",
      image: "assets/images/products/lift.jpg",
      summary: "Lift and vertical transportation solutions for residential, commercial, and service environments.",
      bullets: ["Passenger, cargo, and service lift coordination", "Project-specific capacity and shaft planning", "Electrical control and safety coordination"],
      specs: [
        ["Type", "Use", "Details"],
        ["Passenger Lift", "Residential/commercial movement", "Capacity and finish selected by project"],
        ["Cargo Lift", "Goods and industrial use", "Designed for heavier operating duty"],
        ["Service Lift", "Hospitality/service facilities", "Compact movement for operational support"]
      ]
    },
    {
      key: "solar-panel",
      name: "Solar Panel",
      href: "products/solar-panel.html",
      image: "assets/images/products/solar-panel.jpg",
      summary: "Solar energy systems for reducing grid dependency and supporting modern energy efficiency goals.",
      bullets: ["On-grid, off-grid, and hybrid concepts", "Panel, inverter, protection, and cable planning", "Commercial and residential project support"],
      specs: [
        ["System", "Configuration", "Best For"],
        ["On-grid Solar", "PV panels with grid-tied inverter", "Electricity bill reduction"],
        ["Off-grid Solar", "PV panels with battery backup", "Remote or backup-focused sites"],
        ["Hybrid Solar", "PV, grid, and battery integration", "Sites needing flexibility and resilience"]
      ]
    }
  ],
  pages: {
    about: {
      title: "About Power Load BD",
      kicker: "Company Overview",
      body: [
        "Power Load BD is an electrical power solutions company focused on substation systems, transformers, switchgear, generator solutions, panels, lift coordination, and solar energy products.",
        "The company material highlights a practical product portfolio for power distribution and backup power needs, with catalogue-backed generator ranges and industrial electrical equipment visuals.",
        "This website is structured to help buyers quickly understand the company, review product categories, inspect model details, and contact the team for project discussions or quotations."
      ]
    },
    mission: {
      title: "Mission & Vision",
      kicker: "Direction",
      body: [
        "Our mission is to provide dependable electrical power products and engineering support for safe, efficient, and long-lasting installations.",
        "Our vision is to become a trusted Bangladeshi power solutions brand known for responsive service, disciplined quality, and practical engineering execution."
      ],
      points: ["Reliable power distribution", "Responsive project support", "Modern energy efficiency", "Long-term client relationships"]
    },
    quality: {
      title: "Quality Policy",
      kicker: "Standards",
      body: [
        "Power Load BD approaches each project with attention to equipment selection, installation suitability, protection, safety, and after-sales support.",
        "The quality policy is centered on understanding client load requirements, offering appropriate technical solutions, and maintaining clear documentation from inquiry to delivery."
      ],
      points: ["Fit-for-purpose product selection", "Clear technical communication", "Project-specific inspection and support", "Continuous improvement through client feedback"]
    },
    values: {
      title: "Values of Power Load BD",
      kicker: "Working Principles",
      body: [
        "The company values practical engineering, reliability, accountability, and long-term trust.",
        "These values guide product selection, client communication, installation support, and service commitments."
      ],
      points: ["Reliability", "Integrity", "Safety", "Responsiveness", "Technical discipline", "Client commitment"]
    },
    why: {
      title: "Why Power Load BD",
      kicker: "Reasons To Work With Us",
      body: [
        "Power Load BD brings multiple power-system categories into one coordinated portfolio, making it easier for clients to source equipment and support from a single team.",
        "The product range covers primary distribution, backup generation, low-voltage distribution, renewable energy, and vertical transportation coordination."
      ],
      points: ["Broad electrical product portfolio", "Catalogue-backed generator model options", "Project-focused technical discussion", "Support for industrial, commercial, and residential needs"]
    }
  },
  management: [
    {
      name: "Chairman",
      role: "Chairman",
      image: "assets/images/chairman.png",
      detail: "Provides strategic leadership and business direction for Power Load BD, with focus on reliable project delivery and long-term client confidence."
    },
    {
      name: "Chief Executive Officer",
      role: "CEO",
      image: "assets/images/ceo.jpeg",
      detail: "Leads customer coordination, business development, and operational follow-through across the company's product and service portfolio."
    },
    {
      name: "Director",
      role: "Director",
      image: "",
      detail: "Supports project oversight, procurement coordination, quality control, and service planning. Add the director's photo and full name when available."
    }
  ],
  projects: [
    {
      title: "DB Panel Wiring & Distribution Setup",
      type: "Distribution Board",
      image: "assets/images/projects/panel-wiring.jpg",
      scope: "Internal wiring, feeder arrangement, breaker placement, and distribution board preparation for building electrical loads.",
      details: ["DB/MDB panel work", "Cable routing", "Breaker and busbar arrangement"]
    },
    {
      title: "Commercial DB Panel Installation",
      type: "Panel Installation",
      image: "assets/images/projects/db-panel-installation.jpg",
      scope: "Site installation and inspection of multi-section distribution boards with outgoing feeder preparation.",
      details: ["Site wiring support", "Distribution feeders", "Load-side preparation"]
    },
    {
      title: "Transformer & Fabrication Workshop Support",
      type: "Transformer",
      image: "assets/images/projects/transformer-workshop.jpg",
      scope: "Workshop preparation and coordination for transformer/substation related metal frame and equipment handling.",
      details: ["Transformer support", "Fabrication coordination", "Factory-stage inspection"]
    },
    {
      title: "Diesel Generator Commissioning",
      type: "Generator",
      image: "assets/images/projects/generator-commissioning.jpg",
      scope: "Generator room installation support, commissioning checks, and standby power system coordination.",
      details: ["Generator setup", "Commissioning support", "Backup power readiness"]
    },
    {
      title: "Rooftop Solar Mounting Work",
      type: "Solar",
      image: "assets/images/projects/solar-rooftop-installation.jpg",
      scope: "Solar mounting preparation on industrial roofing, including rail fixing and installation-stage inspection.",
      details: ["Rooftop mounting", "Solar rail fixing", "Safety-focused work"]
    },
    {
      title: "Large Rooftop Solar Array",
      type: "Solar",
      image: "assets/images/projects/solar-array-project.jpg",
      scope: "Solar panel array installation for a large roof area with planned panel layout and service access lanes.",
      details: ["PV panel array", "Energy efficiency", "Commercial rooftop"]
    },
    {
      title: "Transformer Substation Installation",
      type: "Substation",
      image: "assets/images/projects/transformer-substation.jpg",
      scope: "Transformer placement and substation equipment coordination for reliable power distribution.",
      details: ["Transformer installation", "Substation room", "HT/LT coordination"]
    },
    {
      title: "Utility Metering Panel Works",
      type: "Metering",
      image: "assets/images/projects/metering-panel.jpg",
      scope: "Metering cabinet and distribution enclosure setup for building utility measurement and feeder organization.",
      details: ["Metering cabinet", "Service entrance", "Utility interface"]
    },
    {
      title: "Service Meter Installation",
      type: "Electrical Service",
      image: "assets/images/projects/utility-meter-installation.jpg",
      scope: "Meter installation, cable entry, and service-side coordination for a commercial/residential site.",
      details: ["Energy meter", "Cable termination", "Service inspection"]
    },
    {
      title: "LT Panel Commissioning",
      type: "LT Switchgear",
      image: "assets/images/projects/lt-panel-commissioning.jpg",
      scope: "LT panel commissioning and load distribution readiness check with indicators and control equipment active.",
      details: ["LT switchgear", "Panel testing", "Operational readiness"]
    }
  ],
  archives: {
    documents: [
      ["Client List", "Reference PDF for Power Load BD client and work history.", "assets/catalogs/client-list.pdf"],
      ["Main Catalogue", "Power Load BD product catalogue.", "assets/catalogs/powerloadbd-main-catalog.pdf"],
      ["Generator Catalogue", "Cummins, Ricardo, Lambert, and KPT generator model details.", "assets/catalogs/powerloadbd-generator-catalog.pdf"]
    ],
    gallery: [
      ["Site Delivery", "assets/images/archives/site-delivery-truck.jpg"],
      ["Panel Delivery", "assets/images/archives/panel-delivery.jpg"],
      ["Panel Handover", "assets/images/archives/panel-handover.jpg"],
      ["Panel Loading", "assets/images/archives/panel-loading.jpg"],
      ["Solar Panel Closeup", "assets/images/archives/solar-panel-closeup.jpg"],
      ["Growatt Inverter", "assets/images/archives/growatt-inverter.jpg"],
      ["Electrical Components", "assets/images/archives/electrical-components.jpg"],
      ["Transformer Closeup", "assets/images/archives/transformer-closeup.jpg"],
      ["PFI Panel", "assets/images/archives/pfi-panel.jpg"],
      ["Control Box", "assets/images/archives/control-box.jpg"],
      ["Metering Closeup", "assets/images/archives/metering-closeup.jpg"],
      ["Panel Site Work", "assets/images/archives/panel-site-work.jpg"]
    ]
  }
};
