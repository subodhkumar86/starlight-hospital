export const INITIAL_HOSPITAL_INFO = {
  name: "Starlight Hospital",
  tagline: "DEO MEDICE",
  slogan: "Excellence in Healthcare, Compassion in Action",
  address: "Block A Plot 6 & 19, Jajo Phase 2, Crystal Estate, along Imowo-Nla Road, Jajo, Ikorodu, Lagos State, Nigeria",
  phoneNumbers: ["08053587646", "07079333090"],
  emergencyPhone: "08053587646",
  email: "info@starlighthospital.com",
  operatingHours: "24 Hours / 7 Days Emergency Services (Outpatient: Mon - Sat, 8:00 AM - 6:00 PM)",
  googleMapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15851.621217036233!2d3.513221!3d6.621434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bede60742f111%3A0x6b44a2c079201947!2sIkorodu%2C%20Lagos!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
};

export const INITIAL_SERVICES = [
  {
    id: "general-consultation",
    title: "General Medical Consultation",
    category: "Primary Care",
    iconName: "Stethoscope",
    summary: "Comprehensive healthcare evaluations, preventive screenings, and personalized treatment plans for all ages.",
    description: "Our general medical consultation service provides holistic medical care for acute and chronic conditions. Our team of experienced general practitioners conducts thorough physical examinations, orders necessary diagnostic tests, and prescribes effective treatment regimens tailored to every patient.",
    features: [
      "24/7 Outpatient & Inpatient Consultations",
      "Routine Health Check-ups & Wellness Exams",
      "Chronic Disease Management (Hypertension, Diabetes, Asthma)",
      "Preventive Health Screenings & Adult Vaccinations"
    ],
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "obstetrics-gynaecology",
    title: "Obstetrics & Gynaecology",
    category: "Maternal Health",
    iconName: "HeartPulse",
    summary: "Dedicated care for women through pregnancy, childbirth, and female reproductive health across all life stages.",
    description: "Starlight Hospital offers compassionate, specialist-led obstetrics and gynaecological care. From antenatal clinics and safe delivery suites to minimally invasive gynaecological surgeries and fertility counselling, we prioritize maternal and neonatal well-being.",
    features: [
      "Antenatal & Postnatal Mother-Baby Care",
      "Safe Normal & Caesarean Delivery Suites",
      "Fertility Counselling & Cervical Cancer Screening",
      "Management of High-Risk Pregnancies"
    ],
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "paediatrics",
    title: "Paediatrics & Child Health",
    category: "Child Health",
    iconName: "Baby",
    summary: "Specialized medical care tailored for newborns, infants, children, and adolescents.",
    description: "Our paediatric unit provides a warm, child-friendly environment for diagnosis, treatment, and preventive healthcare. We oversee childhood immunization schedules, growth tracking, emergency paediatric care, and specialized treatment for childhood infections.",
    features: [
      "Infant & Child Immunization Programs",
      "Growth & Developmental Monitoring",
      "Emergency Paediatric Care & Special Care Baby Unit (SCBU)",
      "Childhood Nutrition & Allergy Management"
    ],
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "surgical-services",
    title: "Surgical Services",
    category: "Specialized Surgery",
    iconName: "Activity",
    summary: "State-of-the-art operating theatres for general, minor, and major surgical procedures.",
    description: "Starlight Hospital features fully equipped sterile operating suites staffed by skilled general surgeons, anaesthetists, and surgical nurses. We execute both emergency emergency surgical interventions and scheduled elective surgeries with high precision and strict sterility.",
    features: [
      "General Surgery (Hernia repair, Appendectomy, Excision of masses)",
      "Obstetric & Gynaecological Surgeries",
      "Minor Day-Surgery & Wound Debridement",
      "Post-Operative Recovery Ward & Intensive Care Monitoring"
    ],
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "laboratory-diagnostics",
    title: "Laboratory & Diagnostic Services",
    category: "Diagnostics",
    iconName: "Microscope",
    summary: "Fast, high-precision laboratory testing, digital radiography, and ultrasound scanning.",
    description: "Our modern diagnostic lab delivers prompt and accurate laboratory results to support precise clinical diagnosis. Equipped with automated analyzers, digital ultrasound scanners, and ECG machines, our laboratory operates 24/7.",
    features: [
      "Full Blood Count, Biochemistry & Hormone Assays",
      "Obstetric & Abdominal 3D/4D Ultrasound Scanning",
      "Microbiology, Parasitology & Urinalysis",
      "Rapid Diagnostic Tests for Malaria, Typhoid & Viral Hepatitis"
    ],
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "health-education-counselling",
    title: "Health Education & Counselling",
    category: "Preventive Care",
    iconName: "BrainCircuit",
    summary: "Empowering patients and families with knowledge for disease prevention, lifestyle wellness, and mental health support.",
    description: "We believe preventive care starts with health literacy. Our hospital hosts regular wellness counselling, nutritional guidance, hypertension/diabetes self-management workshops, and pre-marital medical counselling.",
    features: [
      "Dietary & Lifestyle Modification Guidance",
      "Diabetes & Hypertension Self-Management Training",
      "Pre-Marital & Family Genetic Counselling",
      "Post-Trauma & Grief Counselling"
    ],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
  }
];

export const INITIAL_DOCTORS = [
  {
    id: "doc-1",
    name: "Dr. Emmanuel Adeleke",
    title: "Medical Director & Senior Consultant Physician",
    department: "General Medicine",
    qualifications: "MBBS, FWACP (Internal Medicine)",
    experience: "16+ Years Experience",
    bio: "Dr. Adeleke oversees clinical operations at Starlight Hospital with a focus on holistic adult healthcare, chronic disease prevention, and patient advocacy.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=500&q=80",
    availability: "Mon, Wed, Fri (9:00 AM - 4:00 PM)"
  },
  {
    id: "doc-2",
    name: "Dr. (Mrs.) Blessing Okonjo",
    title: "Consultant Obstetrician & Gynaecologist",
    department: "Obstetrics & Gynaecology",
    qualifications: "MBBS, FMCOG, FWACS",
    experience: "12+ Years Experience",
    bio: "Specializing in high-risk maternal care, reproductive health, and fertility management, Dr. Okonjo has safely delivered thousands of healthy babies in Lagos State.",
    image: "https://images.unsplash.com/photo-1594824813566-88855ce75907?auto=format&fit=crop&w=500&q=80",
    availability: "Tue, Thu, Sat (8:00 AM - 3:00 PM)"
  },
  {
    id: "doc-3",
    name: "Dr. Chidi Nwosu",
    title: "Chief Consultant Paediatrician",
    department: "Paediatrics",
    qualifications: "MBBS, FWACP (Paediatrics)",
    experience: "14+ Years Experience",
    bio: "Dr. Nwosu is passionate about child welfare, neonatal intensive care, and managing common childhood metabolic and infectious diseases.",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=500&q=80",
    availability: "Mon - Fri (10:00 AM - 5:00 PM)"
  },
  {
    id: "doc-4",
    name: "Dr. Folake Balogun",
    title: "General Surgeon & Laparoscopy Specialist",
    department: "Surgery",
    qualifications: "MBBS, FWACS (General Surgery)",
    experience: "10+ Years Experience",
    bio: "Expert in minimally invasive surgeries, acute abdominal emergencies, and emergency trauma management.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=500&q=80",
    availability: "Mon, Wed, Sat (Emergency 24/7 Call)"
  }
];

export const INITIAL_NEWS = [
  {
    id: "news-1",
    title: "Understanding Hypertension: Prevention Tips for Every Family in Ikorodu",
    slug: "understanding-hypertension-prevention-tips",
    category: "General Health",
    excerpt: "Hypertension often shows no early symptoms. Learn how routine blood pressure checks and dietary tweaks can save lives.",
    content: `Hypertension, often dubbed the "silent killer", affects millions across Nigeria. Because elevated blood pressure rarely displays obvious warning signs in its initial stages, routine screening is vital for every adult aged 18 and above.

### Why Screening Matters
Uncontrolled high blood pressure gradually damages arteries, increasing the risk of strokes, heart failure, and renal disease. At Starlight Hospital, our walk-in triage unit provides free blood pressure checks during routine consultations.

### Key Lifestyle Modifications
1. **Reduce Sodium Intake**: Limit dietary salt in cooked meals and avoid processed bouillon cubes in high amounts.
2. **Embrace Physical Activity**: A brisk 30-minute daily walk along Imowo-Nla Road significantly boosts cardiovascular resilience.
3. **Manage Stress Levels**: Prioritize quality sleep and engage in restorative family activities.
4. **Regular Medication Adherence**: If prescribed antihypertensive therapy, never stop taking medication without consulting your doctor.

Visit Starlight Hospital in Jajo, Ikorodu today for a comprehensive cardiovascular assessment.`,
    author: "Dr. Emmanuel Adeleke",
    date: "2026-08-15",
    readTime: "4 min read",
    status: "Published",
    coverImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "news-2",
    title: "Essential Antenatal Care: Guidelines for Expectant Mothers",
    slug: "essential-antenatal-care-guidelines",
    category: "Maternal Health",
    excerpt: "Proper prenatal nutrition, ultrasound scans, and routine check-ups ensure safe deliveries and healthy newborn outcomes.",
    content: `Pregnancy is a remarkable journey that requires careful medical monitoring to safeguard both mother and child. At Starlight Hospital's Maternal Unit, we advocate early antenatal booking as soon as pregnancy is confirmed.

### Key Milestones in Antenatal Care
- **First Trimester (Weeks 1 - 12)**: Baseline lab tests (Blood group, Genotype, PCV, Screening), early dating ultrasound, and iron/folic acid supplementation.
- **Second Trimester (Weeks 13 - 27)**: Anomaly scan, tetanus toxoid immunization, and monitoring fetal movement.
- **Third Trimester (Weeks 28 - Delivery)**: Birth planning, pelvis assessment, and preparing the emergency hospital kit.

Our maternity ward features comfortable private rooms and 24/7 resident obstetricians to ensure maximum peace of mind.`,
    author: "Dr. (Mrs.) Blessing Okonjo",
    date: "2026-08-10",
    readTime: "5 min read",
    status: "Published",
    coverImage: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "news-3",
    title: "Protecting Children Against Seasonal Infections in Rainy Season",
    slug: "protecting-children-seasonal-infections",
    category: "Paediatrics",
    excerpt: "Practical steps to safeguard your kids against malaria, respiratory infections, and waterborne illnesses during peak rains.",
    content: `During the rainy season in Lagos, stagnant water collections facilitate mosquito breeding while temperature shifts increase child vulnerability to upper respiratory tract infections.

### Practical Steps for Parents:
1. **Sleep Under Insecticide-Treated Nets (ITNs)**: Ensure children rest under nets every single night.
2. **Maintain Clean Surroundings**: Clear clogged gutters around homes in Crystal Estate and Jajo phase 2.
3. **Safe Drinking Water**: Always boil or purify drinking water to prevent diarrhoeal diseases.
4. **Complete Vaccination Schedules**: Ensure your child's routine immunizations are up to date.

If your child develops a fever above 38°C, avoid self-medication with antibiotics. Bring them to Starlight Hospital for prompt malaria rapid diagnostic testing and expert paediatric care.`,
    author: "Dr. Chidi Nwosu",
    date: "2026-08-04",
    readTime: "3 min read",
    status: "Published",
    coverImage: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "news-4",
    title: "Starlight Hospital Expands 24/7 Emergency & Surgical Wing",
    slug: "starlight-hospital-expands-emergency-wing",
    category: "Hospital News",
    excerpt: "We are excited to announce upgraded surgical facilities and expanded emergency wards to better serve the Ikorodu community.",
    content: `Starlight Hospital is proud to unveil our expanded surgical wing and upgraded emergency triage center at Block A Plot 6 & 19, Jajo Phase 2, Crystal Estate.

### Key Upgrades Include:
- Ultra-modern digital ultrasound and multi-channel ECG diagnostics.
- Expanded 24/7 admission capacity with continuous patient monitoring systems.
- Dedicated day-surgery procedure suite for rapid recovery operations.

Under our hospital motto *DEO MEDICE*, we remain steadfast in providing accessible, high-caliber medical solutions to families across Ikorodu and Lagos State.`,
    author: "Hospital Communications Team",
    date: "2026-07-28",
    readTime: "3 min read",
    status: "Published",
    coverImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
  }
];

export const INITIAL_APPOINTMENTS = [
  {
    id: "apt-101",
    patientName: "Adesanya Babatunde",
    patientEmail: "babatunde.adesanya@gmail.com",
    patientPhone: "08034567890",
    department: "General Medical Consultation",
    doctor: "Dr. Emmanuel Adeleke",
    preferredDate: "2026-08-22",
    preferredTime: "10:00 AM",
    reason: "Routine executive health screening and persistent mild headaches.",
    status: "Confirmed",
    createdAt: "2026-08-18T10:15:00Z"
  },
  {
    id: "apt-102",
    patientName: "Funke Ogundipe",
    patientEmail: "funke.o@yahoo.com",
    patientPhone: "08129876543",
    department: "Obstetrics & Gynaecology",
    doctor: "Dr. (Mrs.) Blessing Okonjo",
    preferredDate: "2026-08-21",
    preferredTime: "11:30 AM",
    reason: "Second trimester routine antenatal checkup and ultrasound scan.",
    status: "Pending",
    createdAt: "2026-08-19T08:30:00Z"
  },
  {
    id: "apt-103",
    patientName: "Kevin Ibrahim",
    patientEmail: "k.ibrahim@outlook.com",
    patientPhone: "07051122334",
    department: "Paediatrics & Child Health",
    doctor: "Dr. Chidi Nwosu",
    preferredDate: "2026-08-20",
    preferredTime: "02:00 PM",
    reason: "6-month infant vaccination and routine developmental check.",
    status: "Confirmed",
    createdAt: "2026-08-17T14:20:00Z"
  },
  {
    id: "apt-104",
    patientName: "Mrs. Grace Williams",
    patientEmail: "gracewilliams@gmail.com",
    patientPhone: "08097766554",
    department: "Laboratory & Diagnostics",
    doctor: "Dr. Emmanuel Adeleke",
    preferredDate: "2026-08-19",
    preferredTime: "09:00 AM",
    reason: "Fasting blood sugar and comprehensive lipid profile laboratory test.",
    status: "Completed",
    createdAt: "2026-08-16T11:00:00Z"
  },
  {
    id: "apt-105",
    patientName: "Oluwaseun Alabi",
    patientEmail: "seun.alabi@hotmail.com",
    patientPhone: "08164433221",
    department: "Surgical Services",
    doctor: "Dr. Folake Balogun",
    preferredDate: "2026-08-25",
    preferredTime: "01:00 PM",
    reason: "Post-operative surgical wound inspection and dressing change.",
    status: "Pending",
    createdAt: "2026-08-19T13:45:00Z"
  }
];

export const INITIAL_ENQUIRIES = [
  {
    id: "enq-201",
    senderName: "Chief Tunde Bakare",
    senderEmail: "tbakare@enterprise.ng",
    senderPhone: "08023344556",
    subject: "Corporate Health Insurance & HMO Partnerships",
    message: "Good day, I represent a firm in Ikorodu. We would like to inquire if Starlight Hospital accepts Reliance HMO and Hygeia HMO for our staff retainer scheme. Please revert with details.",
    status: "Unread",
    createdAt: "2026-08-19T12:00:00Z"
  },
  {
    id: "enq-202",
    senderName: "Mary Amadi",
    senderEmail: "mary.amadi@gmail.com",
    senderPhone: "08139988776",
    subject: "Cost of Pelvic Ultrasound & Lab Packages",
    message: "Hello Starlight Hospital, please can you provide the current price breakdown for a pelvic 3D ultrasound scan and routine blood work? Thank you.",
    status: "Replied",
    createdAt: "2026-08-18T16:30:00Z"
  },
  {
    id: "enq-203",
    senderName: "Emmanuel Onuoha",
    senderEmail: "e.onuoha@live.com",
    senderPhone: "07038877665",
    subject: "Weekend Outpatient Consultation Hours",
    message: "Does the outpatient clinic open on Saturdays for general consultation? I work on weekdays and would prefer a weekend morning appointment.",
    status: "Read",
    createdAt: "2026-08-17T09:10:00Z"
  },
  {
    id: "enq-204",
    senderName: "Kemi Soyinka",
    senderEmail: "kemi.soyinka@yahoo.com",
    senderPhone: "08051234567",
    subject: "Antenatal Registration Information",
    message: "Hi, I'm 8 weeks pregnant and live nearby in Jajo Phase 2. What days do you host antenatal registration and what documents should I bring along?",
    status: "Unread",
    createdAt: "2026-08-19T13:10:00Z"
  }
];
