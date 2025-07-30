# VARSH Foundation Website

VARSH Foundation is a non-profit organization dedicated to combating gender-based violence and discrimination through various initiatives that empower young girls and women. This repository contains the source code for our official website.

## About VARSH Foundation

VARSH Foundation works tirelessly to create an abuse-free society through:

- Educational outreach programs
- Community sensitization
- Legal aid and support for survivors
- Youth empowerment initiatives
- Campus intervention programs

## Project Structure

```
varsh/
├── app/                    # Next.js application directory
│   ├── (pages)/           # Route groups and pages
│   ├── admin/             # Admin dashboard and authentication
│   ├── api/               # API routes
│   ├── components/        # Reusable components
│   └── lib/              # Utility functions and configurations
├── prisma/                # Database schema and migrations
└── public/                # Static assets
    ├── icons/            # SVG icons
    └── images/           # Project and team images
```

## Key Features

- **Dynamic Content Management**: Easy-to-update content sections for projects, team members, and initiatives
- **Responsive Design**: Mobile-first approach ensuring accessibility across all devices
- **Admin Dashboard**: Secure admin interface for content management
- **Newsletter Integration**: Email subscription system for updates
- **Interactive Components**: Modern UI elements with smooth animations
- **Image Optimization**: Automatic image optimization using Next.js Image component

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT-based auth system
- **Animations**: Framer Motion
- **Deployment**: Vercel

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/victorola-coder/varsh.git
   cd varsh
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   # Update .env with your values
   ```

4. **Initialize the database**

   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**

   ```bash
   npm run dev
   ```

6. **Build for production**
   ```bash
   npm run build
   ```

## Environment Variables

Required environment variables:

- `DATABASE_URL`: PostgreSQL connection string
- `JWT_SECRET_KEY`: Secret key for JWT token generation
- Other optional variables as specified in `.env.example`

## Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details on how to submit pull requests, report issues, and contribute to the project.

## Contact

- **General Inquiries**: info@varshfoundation.org
- **Volunteer & Membership**: volunteers@varshfoundation.org
- **Partnership & Donations**: partnerships@varshfoundation.org

## Social Media

Follow us on social media:

- Facebook: [@varshfoundation](https://facebook.com/varshfoundation)
- Instagram: [@varshfoundation](https://instagram.com/varshfoundation)
- Twitter: [@varshfoundation](https://twitter.com/varshfoundation)
- YouTube: [@varshfoundation](https://youtube.com/@varshfoundation)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
