import { db } from "../firebase.js";
import { collection, addDoc, getDocs } from "firebase/firestore";

// Apply for Service
function applyForService(serviceId, userId) {
  addDoc(collection(db, "applications"), {
    serviceId: serviceId,
    userId: userId,
    status: "Pending",
  }).then(() => {
    alert("Application submitted!");
  }).catch((error) => {
    console.error(error.message);
  });
}

// Track Application Status
async function trackApplication(userId) {
  const querySnapshot = await getDocs(collection(db, "applications"));
  querySnapshot.forEach((doc) => {
    if (doc.data().userId === userId) {
      console.log(`Application Status: ${doc.data().status}`);
    }
  });
}
