import React from 'react'

export const RoleWiseSolution = () => {
  return (
    <div className=" w-full border p-7">
      <div className="row w-full">
        <div className="col md:w-12/12">
          <h3>- Role-Based Solutions</h3>
          <h2>Tailored for Every Role in Your Hospital</h2>
          <div className="card border">
            <h4>IT Admin</h4>
            <p>Configure users, integrations, security, audit logs</p>
          </div>
          <div className="card border">
            <h4>Doctors</h4>
            <p>EMR, orders, patient list, handovers</p>
          </div>
          <div className="card border">
            <h4>Receptionist</h4>
            <p>Registrations, token/queue, appointment booking</p>
          </div>
          <div className="card border">
            <h4>Nursing</h4>
            <p>eMAR, shift reports, nursing notes</p>
          </div>
          <div className="card border">
            <h4>Billing Team</h4>
            <p>Invoices, TPA, discounts, GST</p>
          </div>
          <div className="card border">
            <h4>Lab/Radiology</h4>
            <p>Orders, samples, film tracking</p>
          </div>
          <div className="card border">
            <h4>Patients</h4>
            <p>Portal login to view health records</p>
          </div>

        </div>
      </div>
    </div>
  )
}
