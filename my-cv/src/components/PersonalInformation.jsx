import React, { Component, useState } from 'react';

export default function PersonalInformation({
    forFirstName, forLastName, forEmail, forPhone, forBrgy, forCity, forProvince, forZipcode, forCountry, forDescription
}) {
    return (
        <>
            <div className="personal-information">
                <h3>Personal Information</h3>
                <input type="text" placeholder="First Name" onChange={forFirstName} />
                <input type="text" placeholder="Last Name" onChange={forLastName} />
                <input type="email" placeholder="Email" onChange={forEmail} />
                <input type="tel" placeholder="Phone" onChange={forPhone} />
                <input type="text" placeholder="Barangay" onChange={forBrgy} />
                <input type="text" placeholder="City" onChange={forCity} />
                <input type="text" placeholder="Province" onChange={forProvince} />
                <input type="text" placeholder="Zip Code" onChange={forZipcode} />
                <input type="text" placeholder="Country" onChange={forCountry} />
                <textarea placeholder="Description" className="desc" onChange={forDescription} />
            </div>
        </>
    )

}