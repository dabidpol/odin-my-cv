export default function PersonalExp({ onSubmit, exp, saveExp, deleteExp,}){
    return (
        <section id="experience">
            <h3>Experience</h3>       
            {exp.map((i) => {
                return (
                    <div key={i.objid}>
                        <li key={i.objid}>
                            <form key={i.objid} onSubmit={(e) => saveExp(e, i.objid)}>
                                <input placeholder="Position" required defaultValue={i.position}>
                                </input>
                                <input placeholder="Company" required defaultValue={i.company}>
                                </input>
                                <input type="date" placeholder="Start Date" required defaultValue={i.startdate}>
                                </input>
                                <input type="date" placeholder="End Date" required defaultValue={i.enddate}>
                                </input>
                                <input placeholder="Description" required defaultValue={i.description}>
                                </input>
                                <div className="buttonContainer">
                                    <button type="submit">Save</button>
                                    <button type="button" onClick={() => deleteExp(i.objid)}>Delete</button>
                                </div>
                            </form>
                        </li>
                    </div>
                );
            })}
        <form onSubmit={onSubmit}>
            <input placeholder="Position" required></input>
            <input placeholder="Company" required></input>
            <input type="date" placeholder="Start Date" required></input>
            <input type="date" placeholder="End Date" required></input>
            <textarea placeholder="Description" required className="desc"></textarea>
            <div>
                <button type="submit">Add</button>
            </div>
            
        </form>
        </section>
    );
}