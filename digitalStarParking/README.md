__DeKUT Digital Smart Parking System__
__Overview__
The DeKUT Digital Smart Parking System is a web-based platform designed to enhance parking management at Dedan Kimathi University of Technology (DeKUT). The system enables real-time monitoring of parking spaces, digital payments, and access control to optimize parking efficiency, reduce congestion, and improve security.


✅ ____User Authentication__ – Secure signup and login using Firebase Authentication.
✅ __Role-Based Access Control__ – Admin panel for managing parking data and a user panel for regular users.
✅ __Real-Time Parking Space Monitoring__ – Users can view available parking spots in real-time.
✅ __Digital Payments__ – Integration with payment platforms for cashless transactions.
✅ __Admin Dashboard__ – Admins can add, update, or remove parking slots and user records.
✅ __Secure Data Storage__ – Firestore database for storing parking records and user data.

__Technologies Used__
__Frontend__: React, CSS, React Router
__Backend__: Firebase Authentication, Firestore Database
__Hosting__: Firebase Hosting
__Hosting__: Vercel Hosting
Installation and Setup
__Step 1__: Clone the Repository

git clone https://github.com/your-repo/Digital-Parking.git
cd Digital-Parking
__Step 2__: Install Dependencies

__npm install__
__Step 3__: Set Up Firebase
Go to Firebase Console and create a new project.
Enable Authentication (Email/Password) and Firestore Database.
Copy your Firebase configuration and paste it into firebaseConfig.js.

// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
__Step 4:__ Run the Project

npm run dev  # If using Vite
Project Structure

/src
│── /components
│   ├── AdminPanel.jsx
│   ├── UserPanel.jsx
│   ├── Signup.jsx
│   ├── Login.jsx
│   ├── Logout.jsx
│   ├── ProtectedRoute.jsx
│── firebaseConfig.js
│── App.jsx
│── index.jsx
│── styles.css
│── package.json
│── README.md
User Roles
__Admin:__

Can add, edit, and delete parking slots.
Can assign admin roles manually in Firestore.
Access to the Admin Panel.
__User:__

Can view available parking spaces.
Can book or pay for a parking slot.
No access to admin functionalities.
__System Functionality__
_1. User Authentication__
Users can sign up and log in using Firebase Authentication.
Admins must manually assign admin privileges in Firestore.
__2. Parking Slot Management (Admin Panel)__
View all parking slots and their availability status.
Add new parking slots by entering location and slot details.
Update slot status (occupied or available).
Delete outdated parking records.
__3. Real-Time Parking Availability (User Panel)__
Users can check for available parking spaces in real-time.
Data is fetched from Firestore and updated dynamically.
__4. Secure Payment Processing (Future Implementation)__
Users will be able to pay for parking online using mobile money or card payments.
__Security Measures__
🔒 __Protected Routes:__ Prevent unauthorized access using Firebase authentication.
🔒 __Firestore Security__ Rules: Restrict read/write access based on user roles.
🔒 __Validation & Error Handling:__ Ensure user inputs and requests are secure.
__
__Future Enhancements__
🚀 __Mobile App Integration__ – Extend functionality to a mobile application.
🚀 __IoT Sensors Integration__ – Automatic real-time slot detection using sensors.
🚀 __License Plate Recognition__ – Advanced authentication for secure parking.

__Contributors__
👨‍💻 __Peter Njoroge Kariuki__ – Backend & Firebase Integration ; Frontend Development
👨‍💻 __Stanley Kimani Kinyanjui__ – Documentation & Research
👨‍💻 __Josephat Gekara__ – Research
👨‍💻 __Alexander Muema__ – Documentation

__License__
This project is open-source and available under the MIT License.

__Final Notes__
🎯 This DeKUT Digital Smart Parking System aims to revolutionize parking management at DeKUT, making it efficient, secure, and user-friendly. Contributions and improvements are welcome! 🚀🔥