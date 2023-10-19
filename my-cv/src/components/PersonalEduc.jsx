export default function PersonalEduc({ addEduc, educ, deleteEduc, saveEduc }){
    return(
        <section id="education">
            <h3>Education</h3>
            {educ.map((i) => {
                return(
                    <li key={i.objid}>
                        <form onSubmit={(e) => saveEduc(e, i.objid)}>
                            <input type="text" placeholder="School" defaultValue={i.school}>
                            </input>
                            <input type="text" placeholder="Degree" defaultValue={i.degree}>
                            </input>
                            <input type="date" placeholder="Start Date" defaultValue={i.startdate}>
                            </input>
                            <input type="date" placeholder="End Date" defaultValue={i.enddate}>
                            </input>
                            <div className="buttonContainer">
                                    <button type="submit">Save</button>
                                    <button type="button" onClick={() => deleteEduc(i.objid)}>Delete</button>
                            </div>
                        </form>
                    </li>
                );
            })}
            <form onSubmit={addEduc}>
                <input type="text" placeholder="School" required></input>
                <input type="text" placeholder="Degree" required></input>
                <input type="date" placeholder="Start Date" required></input>
                <input type="date" placeholder="End Date" required></input>
                <div>
                    <button type="submit">Add</button>
                </div>
            </form>
        </section>
    )
}