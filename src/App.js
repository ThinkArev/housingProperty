import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Explore from "./pages/Explore";
import Offer from "./pages/Offer";
import Profile from "./pages/Profile";
import ForgotPass from "./pages/ForgotPass";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import Profile2 from "./pages/Profile2";
import Category from "./pages/Category";
import CreateListing from "./pages/CreateListing";
import Listing from './pages/Listing'
import NotFound from "./pages/NotFound";
function App() {
  return (
    <div className="App">
      <Router>
        <h1>App</h1>

        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/forgot-password" element={<ForgotPass />} />
          <Route path="/profile" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/offers" element={<Offer />} />
          <Route path="/profile2" element={<Profile2 />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/category/:categoryName" element={<Category />} />
          <Route path="/createlisting" element={<CreateListing />} />
          <Route path="/category/:categoryName/:listingId"
            element={ < Listing/>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;

// rules_version = '2';

// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if false;
//     }
//   }
// }
