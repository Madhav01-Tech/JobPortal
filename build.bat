@echo off
REM Build script for Render deployment (Windows)
REM This script builds both frontend and backend

echo 🔨 Building Job Portal Application...
echo.

REM Build Frontend
echo 📦 Building Frontend...
cd frontend
call npm install
call npm run build
cd ..

echo.
echo ✅ Frontend build complete!
echo.

REM Backend is already ready (no build needed for Node.js)
echo ✅ Backend is ready!
echo.

echo 🎉 Build complete! Application is ready for deployment.
