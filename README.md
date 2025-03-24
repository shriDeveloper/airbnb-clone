# Airbnb Clone

A full-featured Airbnb clone built with Next.js 14, ShadCN UI, and TailwindCSS.

## Features

- Modern, responsive UI based on Airbnb's design
- Property listing and search functionality
- User authentication
- Booking system
- Host features for property listing
- Reviews and ratings
- Wishlists
- Messaging system
- and much more!

## Tech Stack

- **Frontend Framework**: Next.js 14 (App Router)
- **UI Components**: ShadCN UI Library
- **Styling**: TailwindCSS
- **Authentication**: NextAuth.js/Clerk (to be implemented)
- **Database**: PostgreSQL/MongoDB (to be implemented)
- **ORM**: Prisma (to be implemented)
- **Image Storage**: Cloudinary/AWS S3 (to be implemented)
- **Payments**: Stripe (to be implemented)

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Important Note About Images

The current implementation uses placeholder references for images that are not included in the repository. To run the project properly, you'll need to:

1. Add your own images to the following directories:
   - `/public/icons/` - Category icons (beach.svg, mountain.svg, etc.)
   - `/public/properties/` - Property images (beach-house.jpg, mountain-cabin.jpg, etc.)
   - `/public/avatars/` - User avatar images (jessica.jpg, mark.jpg, etc.)
   - `/public/` - Add a hero-image.jpg for the hero section background
   - `/public/` - Add a host-image.jpg for the "Become a host" section

## Project Structure

- `/app` - Next.js app directory with pages and layouts
- `/components` - Reusable UI components
- `/components/ui` - ShadCN UI components
- `/public` - Static assets like images and icons

## License

This project is open-source and available under the MIT License.
# airbnb-clone
