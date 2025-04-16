# TradingEdge

<p align="center">
  <img src="https://via.placeholder.com/200x200.png?text=TradingEdge" alt="TradingEdge Logo" width="200" height="200">
</p>

## AI-Powered Trading Education Platform

TradingEdge is an innovative platform focused on the critical first and last 30 minutes of market trading—where the most significant price movements often occur. Our AI-powered analysis provides traders with insights, education, and sentiment data to make more informed decisions during these crucial time windows.

## 🚀 Features

- **Market Education:** Comprehensive courses on trading strategies focused on market open and close
- **Sentiment Analysis:** Real-time AI analysis of social media, news, and analyst sentiment
- **Key Market Factors:** Detailed breakdown of the critical factors that impact price movements
- **Market Dashboard:** Real-time market indices data with visual indicators for market status
- **Documentation:** Extensive explanations of the science behind first/last 30-minute trading
- **User Accounts:** Personalized learning paths and saved preferences

## 🛠️ Quick Start Guide

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/trading-edge.git
   cd trading-edge
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npx next dev
   ```

   > Note: If you encounter a "next: command not found" error when using `npm run dev`, use `npx next dev` instead.

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

## 📚 Guide for Developers

### Project Structure

```
trading-edge/
├── app/                  # Next.js app directory (routes and pages)
│   ├── page.tsx          # Home page
│   ├── layout.tsx        # Root layout
│   ├── factors/          # Key market factors section
│   ├── education/        # Educational courses section
│   ├── sentiment/        # Market sentiment analysis section
│   ├── docs/             # Documentation and explanation pages
│   ├── api/              # API routes including market-data endpoint
│   ├── login/            # Authentication pages
│   └── register/         # User registration
├── components/           # Reusable UI components
│   ├── layout/           # Layout components (Header, Footer)
│   ├── home/             # Home page components including MarketDashboard
│   └── sentiment/        # Sentiment-specific components
├── types/                # TypeScript type definitions
├── public/               # Static assets
└── ...
```

### Key Technologies

- **Next.js 15**: React framework with server-side rendering and routing
- **TypeScript**: For type safety and better developer experience
- **Tailwind CSS**: For styling and responsive design
- **SWR**: For data fetching and caching
- **Axios**: For API requests

### Running in Production

Build the application for production:

```bash
npm run build
npm start
```

## 🧠 Development Patterns

### Adding a New Page

1. Create a new directory in the `app` folder
2. Add a `page.tsx` file with the "use client" directive
3. Export a default React component
4. The page will be automatically accessible at its directory path

### Data Fetching

We use API routes for data fetching. To create a new API endpoint:

1. Add a new file in the `app/api` directory
2. Use the endpoint from your components with `fetch` or SWR

## 📱 Responsive Design

TradingEdge is designed to work seamlessly across devices:

- Mobile-first approach with Tailwind CSS
- Optimized layouts for desktop, tablet, and mobile views
- Consistent user experience across all screen sizes

## 🔄 Recent Updates

- Added real-time Market Dashboard with key indices tracking
- Added comprehensive documentation page explaining the science behind first/last 30-minute trading
- Created API endpoint for market data
- Fixed compatibility with Next.js 15
- Improved responsive design across all pages

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📧 Contact

For questions or support, please contact: support@trading-edge.com 