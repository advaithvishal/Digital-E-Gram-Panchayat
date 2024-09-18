import { db } from "../firebase.js";
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";

// Create Service
function createService(serviceName, description) {
  addDoc(collection(db, "services"), {
    name: serviceName,
    description: description,
  }).then(() => {
    alert("Service created!");
  }).catch((error) => {
    console.error(error.message);
  });
}

// List Services
async function listServices() {
  const querySnapshot = await getDocs(collection(db, "services"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data().name}`);
  });
}

// Update Service
function updateService(serviceId, newData) {
  const serviceRef = doc(db, "services", serviceId);
  updateDoc(serviceRef, newData).then(() => {
    alert("Service updated!");
  }).catch((error) => {
    console.error(error.message);
  });
}

// Delete Service
function deleteService(serviceId) {
  const serviceRef = doc(db, "services", serviceId);
  deleteDoc(serviceRef).then(() => {
    alert("Service deleted!");
  }).catch((error) => {
    console.error(error.message);
  });
}
