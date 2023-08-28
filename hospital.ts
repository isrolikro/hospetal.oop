abstract class Person {
  firstName: string;
  lastName: string;
  age: number;
  address: string;
  constructor(
    firstName: string,
    lastName: string,
    age: number,
    address: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.address = address;
  }
}
// 2:
class Patient extends Person {
  patientID: number;
  phoneNumber: number;
  emergencyContact: number;
  medicalHistory: Appointment[] = [];

  constructor(
    firstName: string,
    lastName: string,
    age: number,
    address: string,
    patientID: number,
    phoneNumber: number,
    emergencyContact: number,
    medicalHistory: Appointment[]
  ) {
    super(firstName, lastName, age, address);
    this.patientID = patientID;
    this.phoneNumber = phoneNumber;
    this.emergencyContact = emergencyContact;
    this.medicalHistory = medicalHistory;
  }

  displayDetails() {
    console.log(
      `patient ID: ${this.patientID} name: ${this.firstName}, ${this.lastName}`
    );
    console.log(`Medical History: ${this.medicalHistory.join(', ')}`);
  }

}
// 3:
class Doctor extends Person {
  doctorID: number;
  specialization: string;

  constructor(
    firstName: string,
    lastName: string,
    age: number,
    address: string,
    doctorID: number,
    specialization: string
  ) {
    super(firstName, lastName, age, address);
    this.doctorID = doctorID;
    this.specialization = specialization;
  }

  doctorDetails() {
    console.log(
      `name: ${this.firstName}, ${this.lastName}, doctor ID: ${this.doctorID}, specialization: ${this.specialization} `
    );
  }
}
// 4:
class Appointment {
  patient: Patient;
  doctor: Doctor;
  date: Date;
  time: string;

  constructor(patient: Patient, doctor: Doctor, time: string) {
    this.patient = patient;
    this.doctor = doctor;
    this.time = time;
    this.date = new Date();
  }
  // 5:
  appointmentDetails() {
    console.log(`patient:${this.patient.firstName},${this.patient.lastName},`);
    console.log(
      `doctor:${this.doctor.firstName},${this.doctor.lastName},${this.doctor.doctorID},specialization: ${this.doctor.specialization}`
    );
    console.log(`date:${this.date},time:${this.time}`);
  }
}

class Hospital {
  addPatients: Patient[] = [];
  addDoctors: Doctor[] = [];
  appointments: Appointment[] = [];
  hospitalName: string;

  constructor(hospitalName: string) {
    this.hospitalName = hospitalName;
  }
  addPatient(patient: Patient) {
    this.addPatients.push(patient);
  }
  addDoctor(doctor: Doctor) {
    this.addDoctors.push(doctor);
  }
  addAppointment(appointment: Appointment) {
    this.appointments.push(appointment);
    console.log("Appointments array", this.appointments);
  }
  displayAllAppointments() {
    console.log("All Appointments:");
    this.appointments.forEach((appointment) => {
      appointment.appointmentDetails();
    });
  }
  displayDoctorAppointments(doctorID: number) {
    console.log(`Appointments for Doctor ID ${doctorID}:`);
    this.appointments.forEach((appointment) => {
      if (appointment.doctor.doctorID === doctorID) {
        console.log(appointment.appointmentDetails());
      }
    });
  }
  displayPatientAppointments(patientID: number) {
    console.log(`Appointments for Patient ID ${patientID}:`);
    this.appointments.forEach((appointment) => {
      if (appointment.patient.patientID === patientID) {
        console.log(appointment.appointmentDetails());
      }
    });
  }
  displayTodayAppointments() {
    const today = new Date();
    console.log(`Appointments for Today (${today}):`);
    this.appointments.forEach((appointment) => {
      console.log(appointment);
      if (
        appointment.date.toLocaleDateString() === today.toLocaleDateString()
      ) {
        console.log(appointment.appointmentDetails());
      }
    });
  }
}
// const newHospital = new Hospital("Har-Bracha");
// const newPatient = new Patient("Moshe", "Shalom", 1);
// const newDoctor = new Doctor("Rofe", "Ehad", 2, "Gastro");
// const newAppoitment = new Appointment(newPatient, newDoctor, "10:40");
// newHospital.addAppointment(newAppoitment);
