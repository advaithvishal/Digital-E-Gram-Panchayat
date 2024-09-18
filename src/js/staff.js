import { auth, db } from "../firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";

// Staff Login
document.getElementById("staffLoginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("staffLoginEmail").value;
  const password = document.getElementById("staffLoginPassword").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Staff logged in successfully!");
      showSection("viewApplications");
    })
    .catch((error) => {
      console.error("Error during login:", error.message);
    });
});

// View and Update Application Status
async function viewApplications() {
  const applicationsRef = collection(db, "applications");
  const querySnapshot = await getDocs(applicationsRef);
  const applicationsContainer = document.getElementById("applicationsContainer");

  querySnapshot.forEach((doc) => {
    const applicationData = doc.data();
    const appDiv = document.createElement("div");
    appDiv.classList.add("application");

    appDiv.innerHTML = `
      <p>Service: ${applicationData.serviceId}</p>
      <p>User: ${applicationData.userId}</p>
      <p>Status: ${applicationData.status}</p>
      <button onclick="updateStatus('${doc.id}', 'Approved')">Approve</button>
      <button onclick="updateStatus('${doc.id}', 'Rejected')">Reject</button>
    `;

    applicationsContainer.appendChild(appDiv);
  });
}

function updateStatus(applicationId, newStatus) {
  const applicationRef = doc(db, "applications", applicationId);
  updateDoc(applicationRef, { status: newStatus })
    .then(() => {
      alert("Application status updated to " + newStatus);
      location.reload(); // Refresh the page to update the list
    })
    .catch((error) => {
      console.error("Error updating status:", error.message);
    });
}

// Call viewApplications when the staff is logged in and viewing applications
document.addEventListener("DOMContentLoaded", () => {
  if (auth.currentUser) {
    viewApplications();
  }
});
