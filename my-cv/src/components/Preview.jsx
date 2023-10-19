import "../styles/previewstyles.css";
import emailicon from "../assets/react-email.svg";
import phoneicon from "../assets/react-phone.svg";


export default function Preview({firstName, lastName, email, phone, brgy, city, province, zipcode, country, description, exp, deleteExp, editExp, educ}){
    return(
        <section className="x-preview">
            <PreviewPersonalInfo 
                firstName={firstName} 
                lastName={lastName} 
                email={email} 
                phone={phone} 
                brgy={brgy} 
                city={city} 
                province={province} 
                zipcode={zipcode} 
                country={country} 
                description={description}/>
            <h2>Work Experience</h2>
            {exp.map((xp) => {
                return (
                    <PreviewPersonalExp
                        key={xp.objid}
                        deleteExp={deleteExp}
                        editExp={editExp}
                        objid={xp.objid}
                        position={xp.position}
                        company={xp.company}
                        startdate={xp.startdate}
                        enddate={xp.enddate}
                        description={xp.description}
                    />
                );
            })  }
            <h2>Education</h2>
            {educ.map((ed) => {
                return (
                    <PreviewPersonalEduc
                        key={ed.objid}
                        objid={ed.objid}
                        school={ed.school}
                        degree={ed.degree}
                        startdate={ed.startdate}
                        enddate={ed.enddate}
                    />
                )
            })}
        </section>
    )
}


function PreviewPersonalInfo({firstName, lastName, email, phone, brgy, city, province, zipcode, country, description}) {

    //let address = {brgy} + ", " + {city} + ", " + {province} + ", " + {zipcode} + ", " + {country};
    //let address = brgy + ", " + city + ", " + province + ", " + zipcode + ", " + country;

    return (
        <div id="prev-personal-info">
            <div className="info">
                <div id="info1">
                    <h2 className="test" id="fullname"> {firstName} {lastName}</h2>
                    <h4 id="test"> {brgy} {city} </h4>
                    <h4 id="test"> {zipcode} {province} {country} </h4>   
                </div>
                <div id="info2">
                    <h4>  </h4>
                    <h5 id="test"> <img src={emailicon} className="icon"/> {email} </h5>
                    <h5 id="test"> <img src={phoneicon} className="icon" /> {phone} </h5>
                </div>
            </div>
            <hr></hr>
            <p id="desc"> {description} </p>
        </div>
    )
}

function PreviewPersonalExp ({ objid, position, company, startdate, endate, description}){
    return (
        <section id="prev-personal-exp">
            <li key={objid}>
                <div id="info">
                    <p className="ppe">
                        <strong> {position} </strong>
                    </p>
                    <p className="ppe">
                        <strong> {company} </strong> | {startdate} - {endate}
                    </p>
                </div>
                <p className="ppe"> {description} </p>
            </li>
        </section>
    )
}

function PreviewPersonalEduc({ objid, school, degree, startdate, enddate}){
    return (
        <li objid={objid}>
            <div id="info">
                <p className="ppe">
                    <strong> {school} </strong>
                </p>
                <p className="ppe">
                    <strong> {degree} </strong> | {startdate} - {enddate}
                </p>
            </div>
        </li>
    )
}