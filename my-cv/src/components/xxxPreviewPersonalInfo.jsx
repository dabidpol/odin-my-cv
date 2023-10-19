export default function PreviewPersonalInfo({firstName, lastName, email, phone, brgy, city, province, zipcode, country, description}) {
    return (
        <div id="prev-personal-info">
            <div className="info">
                <div id="info1">
                    <p id="fullname">
                        {firstName} {lastName}
                    </p>
                </div>
            </div>
        </div>
    )
}