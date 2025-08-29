# Tariff Calculator Application

A full-stack web application for calculating import tariffs for international trade, built with Spring Boot backend and React frontend.

## Features

- **Interactive Web Interface**: Modern, responsive React frontend with professional UI
- **Real-time Calculations**: Calculate tariffs based on origin country, destination country, product category, and item value
- **Database Integration**: Uses H2 in-memory database with pre-populated dummy tariff data
- **RESTful API**: Spring Boot backend with REST endpoints for tariff calculations
- **Cross-Origin Support**: Configured CORS for seamless frontend-backend communication

## Technology Stack

### Backend
- **Spring Boot 2.7.0** - Java web framework
- **Spring Data JPA** - Database abstraction layer
- **H2 Database** - In-memory database for development
- **Maven** - Build and dependency management

### Frontend
- **React 18** - Modern JavaScript UI library
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Lucide React** - Beautiful icons

## Project Structure

```
tariff-app/
├── backend/                    # Spring Boot backend
│   ├── src/main/java/
│   │   └── com/tariff/app/
│   │       ├── TariffCalculatorApplication.java
│   │       ├── controller/     # REST controllers
│   │       ├── dto/           # Data transfer objects
│   │       ├── entity/        # JPA entities
│   │       ├── repository/    # Data repositories
│   │       └── service/       # Business logic
│   ├── src/main/resources/
│   │   ├── application.properties
│   │   ├── schema.sql         # Database schema
│   │   └── data.sql          # Sample data
│   ├── target/
│   │   └── tariff-calculator-1.0.0.jar  # Executable JAR
│   └── pom.xml               # Maven configuration
├── frontend/                  # React frontend
│   ├── src/
│   │   ├── components/       # React components
│   │   ├── App.jsx          # Main application component
│   │   └── main.jsx         # Application entry point
│   ├── dist/                # Production build
│   ├── package.json         # Node.js dependencies
│   └── vite.config.js       # Vite configuration
└── README.md                # This file
```

## Sample Data

The application includes the following sample tariff rates:

| Origin | Destination | Product Category | Tariff Rate |
|--------|-------------|------------------|-------------|
| USA    | Canada      | Electronics      | 5.5%        |
| USA    | Canada      | Clothing         | 12.0%       |
| USA    | Canada      | Food             | 3.2%        |
| USA    | Mexico      | Electronics      | 8.0%        |
| USA    | UK          | Electronics      | 20.0%       |
| China  | USA         | Electronics      | 25.0%       |
| ... and more combinations |

## Prerequisites

- **Java 11 or higher**
- **Maven 3.6+**
- **Node.js 18+**
- **pnpm** (or npm/yarn)

## Quick Start

### Option 1: Run from Source (Development)

1. **Start the Backend:**
   ```bash
   cd backend
   mvn spring-boot:run
   ```
   The backend will start on http://localhost:8080

2. **Start the Frontend (in a new terminal):**
   ```bash
   cd frontend
   pnpm install  # if not already installed
   pnpm run dev --host
   ```
   The frontend will start on http://localhost:5173

3. **Access the Application:**
   Open your browser and navigate to http://localhost:5173

### Option 2: Run Production Build

1. **Run the Backend JAR:**
   ```bash
   cd backend
   java -jar target/tariff-calculator-1.0.0.jar
   ```

2. **Serve the Frontend:**
   ```bash
   cd frontend
   pnpm run preview --host
   ```
   Or use any static file server to serve the `dist/` directory.

## API Endpoints

### Calculate Tariff
- **URL:** `POST /api/tariff/calculate`
- **Content-Type:** `application/json`
- **Request Body:**
  ```json
  {
    "originCountry": "USA",
    "destinationCountry": "Canada",
    "productCategory": "Electronics",
    "itemValue": 1000.0
  }
  ```
- **Response:**
  ```json
  {
    "originCountry": "USA",
    "destinationCountry": "Canada",
    "productCategory": "Electronics",
    "itemValue": 1000.0,
    "tariffRate": 5.5,
    "tariffAmount": 55.0,
    "totalCost": 1055.0,
    "tariffFound": true
  }
  ```

### Health Check
- **URL:** `GET /api/tariff/health`
- **Response:** `"Tariff Calculator API is running"`

## Database Access

The H2 database console is available at http://localhost:8080/h2-console when the backend is running.

**Connection Details:**
- JDBC URL: `jdbc:h2:mem:tariffdb`
- Username: `sa`
- Password: `password`

## Usage Instructions

1. **Select Origin Country:** Choose the country where the goods are being exported from
2. **Select Destination Country:** Choose the country where the goods are being imported to
3. **Select Product Category:** Choose from Electronics, Clothing, or Food
4. **Enter Item Value:** Input the monetary value of the item in USD
5. **Calculate Tariff:** Click the button to get the tariff calculation
6. **View Results:** The application will display:
   - Trade route (origin → destination)
   - Product category
   - Item value
   - Applicable tariff rate
   - Calculated tariff amount
   - Total cost (item value + tariff)

## Development Notes

- The backend uses an in-memory H2 database that resets on each restart
- CORS is configured to allow requests from any origin for development
- The frontend includes error handling for network issues
- Both applications support hot reloading during development

## Customization

### Adding New Tariff Data
Edit `backend/src/main/resources/data.sql` to add more tariff combinations.

### Adding New Countries/Categories
Update the dropdown options in `frontend/src/App.jsx` and add corresponding data in the database.

### Styling Changes
The frontend uses Tailwind CSS. Modify classes in `App.jsx` or add custom styles in `App.css`.

## Troubleshooting

### Backend Issues
- Ensure Java 11+ is installed
- Check if port 8080 is available
- Verify Maven dependencies are downloaded

### Frontend Issues
- Ensure Node.js 18+ is installed
- Run `pnpm install` to install dependencies
- Check if port 5173 is available
- Verify the backend is running on port 8080

### CORS Issues
- The backend is configured with `@CrossOrigin(origins = "*")`
- For production, consider restricting origins for security

## License

This project is created for demonstration purposes. Feel free to use and modify as needed.

## Support

For questions or issues, please refer to the source code comments or create an issue in the project repository.

