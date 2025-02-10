
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.js";

const AdminDashboard = () => {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "subscriptions"));
        const subs = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setSubscriptions(subs);
      } catch (error) {
        console.error("Error fetching subscriptions:", error);
      }
    };

    fetchSubscriptions();
  }, []);
  const formatTimeRemaining = (expiry) => {
    const expiryDate = expiry?.toDate ? expiry.toDate() : new Date(expiry);
    const now = new Date();
    const diff = expiryDate - now;
    if (diff <= 0) return "Plan Lapsed";
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    return `${days}d ${hours}h ${minutes}m`;
  };
  const sendReminder = (sub) => {
    console.log(`Reminder sent to user ${sub.userId} for ${sub.planTitle}`);
    alert(`Reminder sent to user ${sub.userId} for ${sub.planTitle}`);
  };
  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard:<br/> User Subscriptions</h2>
      {subscriptions.length === 0 ? (
        <p>No subscriptions found.</p>
      ) : (
        <table className="users-table">
          <thead>
            <tr>
              <th>User ID</th>
              <th>Plan</th>
              <th>Amount</th>
              <th>Expiry</th>
              <th>Time Remaining</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {subscriptions.map((sub) => {
              const timeRemaining = formatTimeRemaining(sub.expiry);
              // const isLapsed = timeRemaining === "Plan Lapsed";
              return (
                <tr key={sub.id}>
                  <td>{sub.userId}</td>
                  <td>{sub.planTitle}</td>
                  <td>Sh {sub.amount}</td>
                  <td>
                    {sub.expiry?.toDate
                      ? sub.expiry.toDate().toLocaleString()
                      : new Date(sub.expiry).toLocaleString()}
                  </td>
                  <td>{timeRemaining}</td>
                  <td>{sub.status}</td>
                  <td>
                    
                      <button onClick={() => sendReminder(sub)}>
                        Send Reminder
                      </button>
                   
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminDashboard;
