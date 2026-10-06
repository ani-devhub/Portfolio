import { Project } from '@/types';

export const PROJECTS: Project[] = [
  {
    id: 'azaadi',
    title: 'Azaadi (EMS)',
    subtitle: 'Enterprise Employee Management & Payroll System',
    category: 'enterprise',
    categoryLabel: 'Enterprise Web',
    featured: true,
    image: '/assets/images/Ems_Project.png',
    problem:
      'Fragmented HR records and manual spreadsheet workflows caused delays in employee attendance verification, payroll computations, and tax deduction auditing.',
    solution:
      'Engineered an enterprise Employee Management System (EMS) combining reactive Angular interfaces with a high-throughput FastAPI backend for automated attendance logging, salary calculation, role-based access, and audit trail generation.',
    role: 'Lead Full-Stack Developer — Frontend Architecture, FastAPI API Design & Database Modeling',
    technologies: ['Angular', 'FastAPI', 'Python', 'MongoDB', 'TypeScript', 'JWT Auth', 'REST APIs'],
    architecture: {
      client: 'Angular Single Page Application with reactive forms, route guards, and custom pipe formatters',
      api: 'FastAPI asynchronous REST endpoints with Pydantic schema validation and Swagger docs',
      services: 'JWT Authentication, automated payroll calculation engine, and audit logging worker',
      database: 'MongoDB document store with indexed employee, attendance, and payroll collections',
    },
    keyFeatures: [
      'Comprehensive employee lifecycle management (onboarding, profile updates, department hierarchy)',
      'Automated attendance tracking and leave balance calculation with conflict detection',
      'One-click payroll slip generation with customizable allowance/deduction breakdowns',
      'Granular Role-Based Access Control (Admin, HR, Accounts, Employee)',
    ],
    engineeringHighlights: [
      'Architected API backend using FastAPI to leverage async Python coroutines, achieving sub-40ms endpoint latencies.',
      'Designed structured Pydantic data schemas ensuring 100% type validation at the API boundary.',
      'Built reactive Angular UI components with RxJS streams for smooth real-time filter interactions.',
    ],
    companyContext: 'Enterprise Internal Tool',
  },
  {
    id: 'prodiges',
    title: 'Prodiges',
    subtitle: 'Enterprise Internal Social Network & Organization Workplace Hub',
    category: 'enterprise',
    categoryLabel: 'Enterprise Platform',
    featured: true,
    image: '/assets/images/prodiges.png',
    problem:
      'Dispersed organizational communication and fragmented departmental tools created informational silos, low employee engagement, and friction in coordinating company events or locating colleagues.',
    solution:
      'Engineered Prodiges, a centralized LinkedIn-inspired enterprise social and workplace platform featuring interactive company feeds, shared corporate calendars, and a searchable employee directory with real-time updates.',
    role: 'Frontend Engineer — Angular Architecture, Feed/Post Systems, Calendar & Directory Modules, C# .NET API Integration',
    technologies: ['Angular', 'TypeScript', 'RxJS', 'C#', '.NET', 'ASP.NET Core', 'SQL Server', 'REST APIs', 'SignalR'],
    architecture: {
      client: 'Modular Angular SPA with reactive RxJS state management, standalone component hierarchy, and custom feed/calendar/directory modules',
      api: 'C# ASP.NET Core REST Web APIs enforcing strict DTO contracts, JWT authentication, and pagination pipelines',
      services: 'Real-time SignalR notifications & feed updates, calendar schedule engine, and employee directory search indexer',
      database: 'Relational SQL Server database with normalized schemas for user profiles, posts, media assets, reactions, and calendar events',
    },
    keyFeatures: [
      'Interactive Organization Feed: Rich post publishing, work anniversary announcements, image sharing, like/react badges, and threaded comments',
      'Corporate & Team Calendar: Company-wide event schedules, department meetings, milestone alerts, and synchronized attendee RSVPs',
      'Searchable Employee Directory: Instant multi-attribute search across staff members, department filters, role badges, and detailed profile views',
      'Real-Time Feed Telemetry: Live post delivery and instant reaction notifications utilizing SignalR and RxJS stream pipelines',
      'Role-Based Enterprise Access: Tailored visibility and posting permissions for management, HR, team leads, and employees',
    ],
    engineeringHighlights: [
      'Architected high-performance Angular UI components leveraging RxJS reactive streams and OnPush change detection for fluid 60 FPS feed scrolling.',
      'Constructed modular frontend subsystems for feed posts, interactive monthly/weekly calendar grids, and virtualized employee directory listings.',
      'Streamlined communication with C# .NET backend endpoints using typed DTO interfaces, HTTP interceptors, and robust optimistic UI updates.',
    ],
    companyContext: 'BASSETTI ITES Enterprise Solution',
  },
  {
    id: 'txadministration',
    title: 'TxAdministration',
    subtitle: 'Centralized Organization Admin Console & Product Management Suite',
    category: 'enterprise',
    categoryLabel: 'Enterprise Admin',
    featured: true,
    image: '/assets/images/txadministration.png',
    problem:
      'Managing multifaceted enterprise product configurations, operational parameters, and access privileges across disparate internal services required multiple disconnected tools without unified oversight.',
    solution:
      'Engineered TxAdministration, a centralized organization-level administrative back-office panel to orchestrate, monitor, and configure the entire product ecosystem, manage multi-tenant preferences, and enforce granular role-based access control.',
    role: 'Full Stack Engineer — Angular Administration UI, C# .NET Web APIs, MySQL Database Architecture & RBAC Engine',
    technologies: ['Angular', 'TypeScript', 'C#', '.NET', 'ASP.NET Core', 'MySQL', 'REST APIs', 'JWT Auth'],
    architecture: {
      client: 'Modular Angular application featuring reactive administrative dashboards, dynamic configuration forms, and role-gated navigation',
      api: 'C# ASP.NET Core RESTful Web APIs enforcing strict DTO contracts, security middleware, and entity management controllers',
      services: 'Centralized Role-Based Access Control (RBAC) engine, product module state orchestrator, and operational audit logger',
      database: 'MySQL relational database with normalized product schemas, transactional tenant configurations, and optimized query indexing',
    },
    keyFeatures: [
      'Comprehensive Product Management: Centralized console to configure product entities, lifecycle states, feature toggles, and module deployments',
      'Organization Admin Panel: Global controls for organizational settings, tenant preferences, and back-office administrative workflows',
      'Granular RBAC & Permission Matrix: Flexible multi-level role-based authorization with token-based access enforcement and session monitoring',
      'Operational Health & Audit Trails: Real-time telemetry on system health, active tenant usage, and immutable logging of all administrative actions',
    ],
    engineeringHighlights: [
      'Engineered a scalable Angular administration portal utilizing schema-driven dynamic form components, reducing boilerplate for entity updates by 40%.',
      'Architected normalized MySQL database schemas with transactional isolation to guarantee zero data inconsistency during cross-tenant updates.',
      'Built robust C# ASP.NET Core RESTful endpoints with comprehensive DTO validation, achieving sub-45ms average response times for product queries.',
    ],
    companyContext: 'BASSETTI ITES Enterprise Product',
  },
  {
    id: 'cammaps',
    title: 'CAMMaPS',
    subtitle: 'Multi-Tier Case Management & Advisor Workflow Platform',
    category: 'web',
    categoryLabel: 'Web Application',
    featured: true,
    image: '/assets/images/Cammaps.png',
    problem:
      'Users navigating technical case resolution lacked a transparent communication bridge with assigned specialists, leading to communication breakdowns and unresolved tickets.',
    solution:
      'Developed a web-based case management platform where users interact with assigned advisors to track, review, and resolve cases through real-time updates and visual status analytics.',
    role: 'Frontend & API Developer — React UI Implementation, State Architecture & Endpoint Wiring',
    technologies: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'REST APIs'],
    architecture: {
      client: 'React SPA with Redux state management, custom modal systems, and responsive layout',
      api: 'Node.js/Express REST API with parameterized routes and input sanitization',
      services: 'Case assignment router, attachment validation pipeline, notification triggers',
      database: 'MongoDB document collections linking cases, user accounts, and resolution timelines',
    },
    keyFeatures: [
      'Live case progress visualization from initial submission through advisor sign-off',
      'In-app threaded messaging and attachment management between clients and advisors',
      'Advisor caseload analytics dashboard with filtering by priority, age, and domain',
      'Secure document upload validation and virus scanning checks',
    ],
    engineeringHighlights: [
      'Centralized client state in Redux with normalized entities, eliminating duplicate network fetches.',
      'Optimized asset loading and component chunking to keep initial bundle size below 180KB gzip.',
    ],
    companyContext: 'Client Case Solution',
  },
  {
    id: 'flerts',
    title: 'Flerts',
    subtitle: 'Real-Time Financial Alerting & Intelligent Spending Watchdog',
    category: 'mobile',
    categoryLabel: 'Mobile & Web',
    featured: true,
    image: '/assets/images/Flerts_Project.png',
    problem:
      'Consumers struggle with hidden recurring charges and unexpected budget breaches due to delayed banking notifications and complex financial statements.',
    solution:
      'Architected a cross-platform (web and mobile) financial watchdog that delivers instant threshold notifications, transaction categorization, and proactive spending alerts.',
    role: 'Mobile & Frontend Engineer — React Native App Development, State Flow & Firebase Hooks',
    technologies: ['React', 'React Native', 'Firebase', 'Redux', 'TypeScript'],
    architecture: {
      client: 'Cross-platform React Native codebase for Android/iOS + React companion dashboard',
      api: 'Firebase Cloud Functions processing transaction webhooks and alert triggers',
      services: 'Realtime budget threshold monitor and push notification dispatchers',
      database: 'Cloud Firestore with local offline caching and real-time document listeners',
    },
    keyFeatures: [
      'Instant mobile push alerts for anomalous transactions and custom budget thresholds',
      'Interactive spending breakdown charts categorized by merchant and expense type',
      'Offline-capable transaction review with automatic background sync when reconnected',
      'Biometric authentication support (fingerprint / face recognition) for mobile security',
    ],
    engineeringHighlights: [
      'Utilized offline Firestore persistence to allow seamless usage in poor connectivity scenarios.',
      'Engineered threshold evaluation algorithms that compute budget velocity in milliseconds.',
    ],
  },
  {
    id: 'spincabs',
    title: 'SpinCabs',
    subtitle: 'Scalable Ride-Hailing & Real-Time Fleet Dispatch Platform',
    category: 'web',
    categoryLabel: 'Web & Real-Time',
    featured: false,
    image: '/assets/images/Spincabs.png',
    problem:
      'Coordinating on-demand ride bookings between drivers, passengers, and central operations requires sub-second live dispatching without dropped events.',
    solution:
      'Engineered a scalable ride-booking platform with dedicated interfaces for passengers, drivers, and fleet dispatchers, featuring WebSocket live tracking and trip lifecycle state management.',
    role: 'Full-Stack Developer — Real-Time WebSocket Infrastructure, Admin Console & APIs',
    technologies: ['React', 'Android', 'Socket.io', 'Node.js', 'Express', 'MongoDB'],
    architecture: {
      client: 'React web operator portal + Android driver/passenger client integration',
      api: 'Express.js HTTP endpoints paired with Socket.io bidirectional event gateways',
      services: 'Dispatch matching engine, trip state machine, and fare calculation service',
      database: 'MongoDB with geospatial 2dsphere indexing for nearest-driver geospatial queries',
    },
    keyFeatures: [
      'Live driver GPS tracking on interactive map with ETA calculation',
      'Real-time automated ride dispatch matching based on proximity and driver rating',
      'Comprehensive administrative fleet dashboard with active trip monitoring and dispute resolution',
      'Detailed trip receipt generation and driver payout ledgering',
    ],
    engineeringHighlights: [
      'Leveraged MongoDB 2dsphere geospatial indexes to query nearest drivers within 5km in under 15ms.',
      'Implemented WebSocket heartbeat reconnection logic with exponential backoff for flaky mobile networks.',
    ],
  },
  {
    id: 'oohray',
    title: 'Oohray',
    subtitle: 'Hybrid Rental Property Booking & Lease Management Portal',
    category: 'web',
    categoryLabel: 'Web & Mobile',
    featured: false,
    image: '/assets/images/Oohray.png',
    problem:
      'Property managers and prospective tenants experienced high friction coordinating listings, booking visits, managing lease agreements, and tracking monthly payments.',
    solution:
      'Engineered a hybrid rental management platform bridging web and mobile to streamline property listings, automated reservation calendar scheduling, and payment accounting.',
    role: 'Frontend & API Integration Developer — Angular Web Portal & SQL Query Design',
    technologies: ['Angular', 'React Native', 'Node.js', 'Express', 'SQL', 'REST APIs'],
    architecture: {
      client: 'Angular web management portal for landlords + React Native mobile app for tenants',
      api: 'Node.js REST API layer handling property inventory, bookings, and billing workflows',
      services: 'Booking conflict resolution engine, lease document generator, notification worker',
      database: 'Relational SQL database ensuring ACID transactional integrity on all bookings',
    },
    keyFeatures: [
      'Multi-filter property search (geo-location, budget range, bedrooms, pet policies)',
      'Real-time calendar booking with transactional double-booking prevention',
      'Tenant lease agreement repository and automated monthly rent payment reminders',
      'Landlord analytics on property occupancy rates and rental yields',
    ],
    engineeringHighlights: [
      'Enforced database isolation levels in SQL transactions to mathematically prevent race conditions during simultaneous booking attempts.',
      'Optimized image gallery delivery with progressive loading and responsive dimensions.',
    ],
  },
  {
    id: 'shipgo',
    title: 'ShipGo (Shintrack)',
    subtitle: 'Warehouse-to-Delivery Logistics & Inventory Tracking App',
    category: 'mobile',
    categoryLabel: 'Mobile Logistics',
    featured: false,
    image: '/assets/images/shipgo.png',
    problem:
      'Warehouse inventory dispatches suffered from manual logging errors and delay in transmitting package handoff statuses to the central logistics management system.',
    solution:
      'Engineered a dedicated mobile logistics application providing barcode scanning, warehouse location tracking, real-time dispatch updates, and delivery verification.',
    role: 'Mobile Developer — Android UI, Barcode Scanner Integration & Offline Storage',
    technologies: ['Android', 'Java', 'Firebase', 'REST APIs'],
    architecture: {
      client: 'Native Android application designed for handheld logistics scanner terminals',
      api: 'RESTful dispatch endpoints with Firebase Realtime Database status channel',
      services: 'Barcode decoding service, offline dispatch queue, status sync engine',
      database: 'Firebase Realtime DB for live inventory counts and delivery state checkpoints',
    },
    keyFeatures: [
      'High-speed camera barcode and QR code scanner for instant pallet verification',
      'Real-time warehouse inventory ledger with inward/outward tracking',
      'Driver delivery milestone confirmation with recipient digital signature capture',
      'Robust offline mode that caches scanned waybills and syncs automatically when network restores',
    ],
    engineeringHighlights: [
      'Implemented zero-latency offline SQLite queue so warehouse workers can scan continuously without waiting for cloud round-trips.',
      'Streamlined native Android UI rendering to maintain 60 FPS on low-power industrial devices.',
    ],
  },
];
