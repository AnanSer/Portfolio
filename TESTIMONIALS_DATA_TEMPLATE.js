// ============================================
// TESTIMONIALS DATA TEMPLATE
// ============================================
// Copy this template to add real testimonials to your portfolio
// File location: src/Components/Testimonials/Testimonials.js
// Find the "testimonialsData" array and replace with this structure

// ============================================
// HOW TO USE THIS TEMPLATE
// ============================================
// 1. Copy one of the example objects below
// 2. Replace placeholder values with real testimonial data
// 3. Ensure you have permission to display the testimonial
// 4. Add avatar images to src/assets/images/testimonials/
// 5. Import avatar at the top of Testimonials.js:
//    import avatarName from '../../assets/images/testimonials/avatar.jpg';
// 6. Use the imported variable in the avatar field

// ============================================
// EXAMPLE STRUCTURE
// ============================================

const testimonialsData = [
  {
    // Unique identifier (increment for each testimonial)
    id: 1,
    
    // Full name of the person giving testimonial
    name: "Sarah Johnson",
    
    // Job title or role
    role: "Project Manager",
    
    // Company or organization name
    organization: "Tech Solutions Inc",
    
    // Testimonial text (aim for 150-250 characters)
    // Keep it concise but meaningful
    quote: "Working with this developer was an absolute pleasure. The attention to detail and commitment to delivering high-quality work exceeded our expectations. Highly recommended!",
    
    // Rating from 1 to 5 (usually 5 for displayed testimonials)
    rating: 5,
    
    // Avatar image URL or imported variable
    // Use null for placeholder initials
    avatar: null // or: avatar: avatarSarah
  },
  
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO",
    organization: "Digital Innovations",
    quote: "Exceptional technical skills combined with great communication. The project was delivered on time and the code quality was outstanding.",
    rating: 5,
    avatar: null
  },
  
  // Add more testimonials as needed...
];

// ============================================
// REAL TESTIMONIAL TEMPLATE (COPY THIS)
// ============================================

const realTestimonialTemplate = {
  id: 0, // Change to next number
  name: "Full Name Here",
  role: "Job Title",
  organization: "Company Name",
  quote: "Replace with actual testimonial text. Keep it authentic and concise. Focus on specific value delivered.",
  rating: 5, // 1-5 stars
  avatar: null // or imported image variable
};

// ============================================
// STEP-BY-STEP GUIDE
// ============================================

/* 

STEP 1: GATHER TESTIMONIALS
─────────────────────────────
- Reach out to past clients, colleagues, or employers
- Request permission to display their feedback
- Ask for:
  ✓ Full name
  ✓ Current job title
  ✓ Company/organization
  ✓ Brief testimonial (150-250 characters)
  ✓ Professional photo (optional, 300x300px minimum)
  ✓ Star rating (1-5)


STEP 2: PREPARE AVATAR IMAGES
─────────────────────────────
- Create folder: src/assets/images/testimonials/
- Save avatar images as: firstname-lastname.jpg
- Recommended specs:
  ✓ Format: JPG, PNG, or WebP
  ✓ Size: 300x300px (square)
  ✓ File size: < 100KB
  ✓ Professional headshot style


STEP 3: UPDATE TESTIMONIALS.JS
─────────────────────────────
Location: src/Components/Testimonials/Testimonials.js

1. Import avatars at top of file:
   ───────────────────────────────
   import avatarSarah from '../../assets/images/testimonials/sarah-johnson.jpg';
   import avatarMichael from '../../assets/images/testimonials/michael-chen.jpg';

2. Find testimonialsData array (around line 10)

3. Replace placeholder objects with real data:
   ───────────────────────────────
   const testimonialsData = [
     {
       id: 1,
       name: "Sarah Johnson",
       role: "Project Manager",
       organization: "Tech Solutions Inc",
       quote: "Working with this developer was exceptional...",
       rating: 5,
       avatar: avatarSarah // Use imported variable
     },
     // Add more...
   ];


STEP 4: VERIFY IN BROWSER
─────────────────────────────
- Run: npm start
- Navigate to Testimonials section
- Check:
  ✓ All names display correctly
  ✓ Avatar images load
  ✓ Quotes are readable
  ✓ Navigation works
  ✓ Responsive on mobile


STEP 5: BUILD & DEPLOY
─────────────────────────────
- Run: npm run build
- Test production build
- Deploy to hosting service

*/

// ============================================
// FIELD SPECIFICATIONS
// ============================================

/*

ID
──
Type: Number
Required: Yes
Example: 1, 2, 3, etc.
Notes: Must be unique for each testimonial


NAME
────
Type: String
Required: Yes
Example: "John Doe"
Max Length: 50 characters
Notes: Use full name, proper capitalization


ROLE
────
Type: String
Required: Yes
Example: "Senior Developer", "CTO", "Project Manager"
Max Length: 40 characters
Notes: Current job title, avoid abbreviations


ORGANIZATION
────────────
Type: String
Required: Yes
Example: "Tech Corp", "Digital Agency", "Startup Hub"
Max Length: 40 characters
Notes: Company or organization name


QUOTE
─────
Type: String
Required: Yes
Recommended Length: 150-250 characters
Max Length: 400 characters
Example: "Working with this developer exceeded expectations..."
Notes: 
  - Keep concise but meaningful
  - Focus on specific value
  - Avoid generic praise
  - Must be authentic
  - Get approval before using


RATING
──────
Type: Number
Required: Yes
Range: 1-5
Example: 5
Notes: 
  - Usually use 5 for displayed testimonials
  - Lower ratings can be used for authenticity
  - Consider filtering < 4 stars


AVATAR
──────
Type: String (URL) or Imported Variable or null
Required: No (null will show initials)
Example: avatarVariable or "https://..." or null
Image Specs:
  - Format: JPG, PNG, WebP
  - Size: 300x300px (1:1 ratio)
  - Max file size: 100KB
  - Quality: High resolution
Notes:
  - Use professional headshots
  - Ensure proper lighting
  - Neutral background preferred
  - Consistent style across all avatars

*/

// ============================================
// BEST PRACTICES
// ============================================

/*

1. QUALITY OVER QUANTITY
   ─────────────────────
   - Aim for 4-8 high-quality testimonials
   - Better to have 4 excellent than 10 mediocre
   - Rotate regularly to keep content fresh

2. AUTHENTICITY
   ─────────────
   - Only use real testimonials with permission
   - Don't fabricate or exaggerate
   - Include verifiable details (name, company)
   - Consider adding LinkedIn links

3. DIVERSITY
   ──────────
   - Mix different roles (clients, colleagues, managers)
   - Various industries
   - Different project types
   - Range of company sizes

4. SPECIFICITY
   ────────────
   - Avoid generic "great work" comments
   - Include specific achievements
   - Mention concrete results
   - Reference actual skills used

5. RECENCY
   ────────
   - Prioritize recent testimonials (last 1-2 years)
   - Update regularly
   - Remove outdated ones
   - Keep it current

6. LEGAL & ETHICAL
   ───────────────
   - Get written permission
   - Verify quotes are accurate
   - Don't modify quotes without approval
   - Respect privacy (use first name only if requested)

*/

// ============================================
// EXAMPLE: WELL-CRAFTED TESTIMONIALS
// ============================================

const excellentExamples = [
  {
    // ✅ GOOD: Specific, measurable, authentic
    id: 1,
    name: "Jennifer Martinez",
    role: "VP of Engineering",
    organization: "CloudScale Systems",
    quote: "Reduced our API response time by 60% and implemented a caching strategy that handled 10x traffic during our Black Friday sale. Outstanding problem-solver.",
    rating: 5,
    avatar: null
  },
  
  {
    // ✅ GOOD: Highlights soft skills and technical ability
    id: 2,
    name: "David Kim",
    role: "Product Owner",
    organization: "FinTech Solutions",
    quote: "Not only delivered pixel-perfect implementations but also suggested UX improvements that increased our conversion rate by 15%. A rare combination of design sense and technical excellence.",
    rating: 5,
    avatar: null
  },
  
  {
    // ✅ GOOD: Emphasizes reliability and communication
    id: 3,
    name: "Rachel Thompson",
    role: "Startup Founder",
    organization: "GreenTech Innovations",
    quote: "Launched our MVP in just 6 weeks with daily standups and transparent progress updates. The codebase was clean, documented, and easy for our team to maintain.",
    rating: 5,
    avatar: null
  }
];

// ❌ AVOID: Generic testimonials like these
const poorExamples = [
  {
    // ❌ BAD: Too generic, no specifics
    quote: "Great developer! Would work with again!"
  },
  {
    // ❌ BAD: Overly promotional, not credible
    quote: "The best developer in the entire world! Amazing!"
  },
  {
    // ❌ BAD: Too vague, no context
    quote: "Good communication skills and nice to work with."
  }
];

// ============================================
// TROUBLESHOOTING
// ============================================

/*

ISSUE: Avatar not showing
─────────────────────────
Solution:
1. Check image path is correct
2. Verify import statement
3. Check file extension matches
4. Ensure image is in assets folder
5. Try using null first (shows initials)


ISSUE: Testimonial text cut off
───────────────────────────────
Solution:
1. Keep quotes under 250 characters
2. Check for CSS overflow issues
3. Test on mobile devices
4. Break long words with hyphens


ISSUE: Layout looks broken
──────────────────────────
Solution:
1. Verify all required fields present
2. Check for missing commas in array
3. Ensure proper JSON structure
4. Look for console errors


ISSUE: Navigation not working
─────────────────────────────
Solution:
1. Check testimonials array has items
2. Verify IDs are unique
3. Check for JavaScript errors
4. Test with only 2-3 testimonials first

*/

// ============================================
// READY TO USE?
// ============================================

/*

CHECKLIST BEFORE GOING LIVE:
═══════════════════════════

☐ All testimonials have written permission
☐ Quotes are accurate and unmodified
☐ Names and titles are spelled correctly
☐ Company names are accurate
☐ Avatar images are optimized (<100KB each)
☐ Tested on desktop browser
☐ Tested on mobile device
☐ Tested with keyboard navigation
☐ Verified accessibility (screen reader)
☐ No console errors
☐ Build completes successfully
☐ Looks good in dark mode
☐ Looks good in light mode

*/

// ============================================
// NEED HELP?
// ============================================

/*

Reference Documentation:
- TESTIMONIALS_IMPLEMENTATION.md (full details)
- TESTIMONIALS_QUICK_REFERENCE.md (quick guide)
- STEP_12_COMPLETE.md (requirements checklist)

Component Files:
- src/Components/Testimonials/Testimonials.js
- src/Components/Testimonials/Testimonials.module.css

*/

export default testimonialsData;
