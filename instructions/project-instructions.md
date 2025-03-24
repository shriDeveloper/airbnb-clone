# Airbnb Clone: Product Requirements Document

## Overview
This document outlines the requirements for building an Airbnb clone using Next.js and ShadCN UI library. The application will allow users to browse, search, and book properties, as well as list their own properties for rent.

## Tech Stack
- **Frontend Framework**: Next.js 14+ (App Router)
- **UI Components**: ShadCN UI Library
- **Styling**: TailwindCSS
- **Authentication**: NextAuth.js or Clerk 
- **Database**: PostgreSQL or MongoDB
- **ORM**: Prisma
- **Image Storage**: Cloudinary or AWS S3
- **Maps**: Google Maps API or Mapbox
- **Payments**: Stripe


## Current Directory Structure 
```
/Users/shri/Desktop/Build Apps Using Cursor/basic-cursor-tutorial/airbnb-clone
├── README.md
├── app
|  ├── favicon.ico
|  ├── globals.css
|  ├── layout.tsx
|  └── page.tsx
├── components
|  └── ui
|     ├── avatar.tsx
|     ├── button.tsx
|     ├── card.tsx
|     ├── checkbox.tsx
|     ├── dialog.tsx
|     ├── dropdown-menu.tsx
|     ├── form.tsx
|     ├── input.tsx
|     ├── label.tsx
|     ├── select.tsx
|     ├── toast.tsx
|     └── toaster.tsx
├── components.json
├── eslint.config.mjs
├── hooks
|  └── use-toast.ts
├── instructions
|  └── project-instructions.md
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public
|  ├── file.svg
|  ├── globe.svg
|  ├── next.svg
|  ├── vercel.svg
|  └── window.svg
└── tsconfig.json



```



## Pages Structure

### 1. Landing Page (`/`)
- **Features**:
  - Hero section with search functionality
  - Property category tabs/filters
  - Featured/popular listings
  - How it works section
  - Testimonials
  - Newsletter subscription
  - Footer with links

### 2. Search Results Page (`/search`)
- **Features**:
  - Advanced filters (price range, amenities, property type, etc.)
  - Map view toggle
  - List view of properties with pagination
  - Sort options (price, rating, etc.)
  - Save/favorite properties

### 3. Property Details Page (`/properties/[id]`)
- **Features**:
  - Image gallery/carousel
  - Property details (title, description, amenities)
  - Host information
  - Availability calendar
  - Booking form
  - Reviews and ratings
  - Location map
  - Similar properties

### 4. User Authentication Pages
- **Sign Up** (`/auth/signup`)
- **Login** (`/auth/login`)
- **Forgot Password** (`/auth/forgot-password`)
- **Reset Password** (`/auth/reset-password`)

### 5. User Dashboard (`/dashboard`)
- **Features**:
  - Upcoming trips
  - Previous bookings
  - Saved/favorited properties
  - Account settings
  - Notifications

### 6. Host Dashboard (`/host`)
- **Features**:
  - Property management (view, edit, delete)
  - Booking requests and calendar
  - Earnings overview and payout information
  - Reviews management
  - Inbox/messaging

### 7. Add New Property (`/host/properties/new`)
- **Features**:
  - Multi-step form for property details
  - Image uploads
  - Amenities selection
  - Location picker with map
  - Pricing settings
  - Availability calendar

### 8. Booking Process
- **Checkout Page** (`/checkout/[id]`)
  - Booking details
  - Guest information
  - Payment integration (Stripe)
  - Terms and conditions
  - Confirmation

### 9. Booking Confirmation (`/bookings/[id]/confirmation`)
- **Features**:
  - Booking summary
  - Receipt/invoice
  - Host contact information
  - Travel tips
  - Share itinerary

### 10. User Profile (`/users/[id]`)
- **Features**:
  - Profile information and photo
  - Verified badges
  - Reviews from hosts
  - Previous stays (optional public view)

### 11. Messages/Inbox (`/inbox`)
- **Features**:
  - Conversation list
  - Chat interface
  - Notifications
  - Booking inquiries

### 12. Wishlist Pages (`/wishlists`, `/wishlists/[id]`)
- **Features**:
  - Create and manage wishlists
  - Add/remove properties
  - Share wishlists

### 13. Help Center (`/help`)
- **Features**:
  - FAQ sections
  - Contact support form
  - Help articles

## Key Features

### Authentication
- Email/password login
- Social login (Google, Facebook, etc.)
- Profile management
- Identity verification

### Search & Discovery
- Location-based search
- Date-based availability
- Guest count filtering
- Price range filtering
- Property type filtering
- Amenities filtering
- Instant booking filter
- Map-based search

### Property Management
- Property creation wizard
- Photo management with drag-and-drop
- Calendar management
- Pricing settings (base price, seasonal pricing)
- House rules and policies
- Availability settings

### Booking System
- Real-time availability checking
- Booking requests
- Instant booking option
- Payment processing
- Cancellation policies

### Review System
- Star ratings
- Written reviews
- Host reviews of guests
- Review moderation

### Communication
- Real-time messaging
- Notifications
- Email alerts

### Map Integration
- Property location display
- Nearby attractions
- Directions

### Payments
- Secure payment processing
- Multiple currency support
- Payout management for hosts
- Refund processing

## Technical Implementation Notes

### Next.js App Architecture
- Utilize the App Router for routing
- Implement server components where appropriate
- Use client components for interactive elements
- Implement API routes for backend functionality

### UI Components with ShadCN
- Consistent design system using ShadCN components
- Responsive design for all device sizes
- Dark/light mode toggle
- Accessible UI elements

### Data Fetching
- Server-side rendering for SEO-critical pages
- Client-side fetching for dynamic content
- Implement caching strategies

### SEO Optimization
- Metadata management
- Sitemap generation
- Structured data for rich snippets

### Performance Considerations
- Image optimization
- Code splitting
- Lazy loading
- Core Web Vitals optimization

## Implementation Roadmap

### Phase 1: Setup & Basic Structure
1. Initialize Next.js project with TypeScript
2. Set up ShadCN UI and TailwindCSS
3. Create basic layout components
4. Implement authentication system
5. Set up database and ORM

### Phase 2: Core Features
1. Develop Landing page
2. Implement property listing and search functionality
3. Create property details page
4. Build basic booking system
5. Implement user profiles

### Phase 3: Host Features
1. Develop property creation and management
2. Implement calendar and availability system
3. Create host dashboard
4. Set up messaging system

### Phase 4: Advanced Features
1. Implement payment processing
2. Add review system
3. Build wishlists functionality
4. Enhance search with maps integration

### Phase 5: Polish & Optimization
1. Improve UI/UX
2. Optimize performance
3. Enhance SEO
4. Implement analytics
5. Create help center and support system 