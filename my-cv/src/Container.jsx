import { useState } from 'react';
import PersonalInformation from './components/PersonalInformation'; 
import PersonalExp from './components/PersonalExp';
import PersonalEduc from './components/PersonalEduc';
import Preview from './components/Preview';
import { v4 as uuidv4 } from "uuid";
import ReactToPrint from 'react-to-print';

export default function Container() {
    let componentRef = null;
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [brgy, setBrgy] = useState('');
    const [city, setCity] = useState('');
    const [province, setProvince] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [country, setCountry] = useState('');
    const [description, setDescription] = useState('');
    const [exp, setExp] = useState([]);
    const [educ, setEduc] = useState([]);

    function forFirstName(e){
        setFirstName(e.target.value);
    }

    function forLastName(e){
        setLastName(e.target.value);
    }

    function forEmail(e){
        setEmail(e.target.value);
    }

    function forPhone(e){
        setPhone(e.target.value);
    }

    function forBrgy(e){
        setBrgy(e.target.value);
    }   

    function forCity(e){
        setCity(e.target.value);
    }

    function forProvince(e){
        setProvince(e.target.value);
    }

    function forZipcode(e){
        setZipcode(e.target.value);
    }

    function forCountry(e){ 
        setCountry(e.target.value);
    }

    function forDescription(e){
        setDescription(e.target.value);
    }   

    function addExp(e) {
        e.preventDefault();
        console.log(e.target[0].value);
        //const objid = Math.floor(Math.random() * 10000) + 1;
        const objid = uuidv4();
        const position = e.target[0].value;
        const company = e.target[1].value;
        const startdate = e.target[2].value;
        const enddate = e.target[3].value;
        const description = e.target[4].value;

        let newExp = { objid, position, company, startdate, enddate, description };
        setExp([...exp, newExp]);
        clear(e);
    }

    function clear(e){
        for (let i = 0; i < e.target.length; i++) {
            e.target[i].value = '';
        }
    }

    function deleteExp(objid){
        console.log(objid);
        setExp((currExp) => {
            return currExp.filter((exp) => exp.objid !== objid)
        });
    }

    function saveExp(e, objid) {
        e.preventDefault();

        let position = e.target[0].value;
        let company = e.target[1].value;
        let startdate = e.target[2].value;
        let enddate = e.target[3].value;
        let description = e.target[4].value;
        let updateExp = { position, company, startdate, enddate, description };
        setExp(
            exp.map((exp) => {
                if (exp.objid === objid) {
                    return {...exp, ...updateExp};
                }else{
                    return exp;
                }
            })
        );
    }

    function addEduc(e) {
        e.preventDefault();
        console.log("Add Educ");
        const objid = Math.floor(Math.random() * 10000) + 1;
        const school = e.target[0].value;
        const degree = e.target[1].value;
        const startdate = e.target[2].value;
        const enddate = e.target[3].value;
        let newEduc = { objid, school, degree, startdate, enddate };
        setEduc([...educ, newEduc]);
        clear(e);
    }

    function saveEduc(e, objid){
        e.preventDefault();
        let school = e.target[0].value;
        let degree = e.target[1].value;
        let startdate = e.target[2].value;
        let enddate = e.target[3].value;
        let updateEduc = { school, degree, startdate, enddate };
        setEduc(
            educ.map((ed) => {
                if(ed.objid === objid){
                    return {...ed, ...updateEduc};
                }else{
                    return ed;
                }
            })
            );
    }

    function deleteEduc(objid){
        console.log(objid);
        setEduc((currEduc) => {
            return currEduc.filter((ed) => ed.objid !== objid);
        });
    }


    function resetFields(){
        const nothing = [];
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setBrgy('');
        setCity('');
        setProvince('');
        setZipcode('');
        setCountry('');
        setDescription('');
        setExp(nothing);
        setEduc(nothing);
    }

    function sampleData(){
        resetFields();
        setFirstName('Dabid');
        setLastName('CABATINGAN');
        setEmail('dcabatingan@gmail.com');
        setPhone('09123456789');
        setBrgy('Casisang');
        setCity('Malaybalay City');
        setProvince('Bukidnon');
        setZipcode('8700');
        setCountry('Philippines');
        setDescription('Ah so you think darkness is your ally. You merely adopted the dark. I was born in it, molded by it...');
        
        const firstExp = {
            objid: Math.floor(Math.random() * 10000) + 1,
            position: 'Assistant Atik-atik',
            company: 'Atik-atik Inc.',
            startdate: '2019-01-01',
            enddate: '2020-01-01',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae',
            
    };

        const secondExp = {
            objid: Math.floor(Math.random() * 10000) + 1,
            position: 'Senior Assistant Atik-atik',
            company: 'Atik-atik Inc.',
            startdate: '2020-01-01',
            enddate: '2021-01-01',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae',
        };

        const firstEduc = {
            objid: Math.floor(Math.random() * 10000) + 1,
            school: 'Atik Atik University',
            degree: 'Bachelor of Science in Atik Atik',
            startdate: '2015-01-01',
            enddate: '2019-01-01',
        };

        const secondEduc = {
            objid: Math.floor(Math.random() * 10000) + 1,
            school: 'Atik Atik University',
            degree: 'Master of Science in Atik Atik',
            startdate: '2019-01-01',
            enddate: '2021-01-01',
        };

        setExp([firstExp, secondExp]);
        setEduc([firstEduc, secondEduc]);
    }

    function reactPrint(){
        return(
            <>
                <ReactToPrint
                trigger={() => {
                    return <button>Print</button>;
                }}
                >

                </ReactToPrint>
            </>
        )
    }

    return (
        <>
            <div className='container'>
                <section className='form'>
                    <PersonalInformation 
                        forFirstName={forFirstName}
                        forLastName={forLastName}
                        forEmail={forEmail}
                        forPhone={forPhone}
                        forBrgy={forBrgy}
                        forCity={forCity}
                        forProvince={forProvince}
                        forZipcode={forZipcode}
                        forCountry={forCountry}
                        forDescription={forDescription}
                    />
                    <PersonalExp 
                        onSubmit={addExp}
                        exp={exp}
                        saveExp={saveExp}
                        deleteExp={deleteExp}
                    />
                    <PersonalEduc
                        addEduc={addEduc}
                        educ={educ}
                        saveEduc={saveEduc}
                        deleteEduc={deleteEduc}
                    />
                    <section>
                        <button onClick={sampleData}>Sample</button>
                        <button onClick={resetFields}>Reset</button>
                        <ReactToPrint
                            trigger={() => {
                                return <button>Print</button>;
                            }}
                        content={() => componentRef}
                        documentTitle="Resume"
                        pageStyle="print"
                        />
                    </section>
                </section>

                <div className='preview' ref={(test) => (componentRef = test)}>
                    <Preview
                        firstName={firstName}
                        lastName={lastName}
                        email={email}
                        phone={phone}
                        brgy={brgy}
                        city={city}
                        province={province}
                        zipcode={zipcode}
                        country={country}
                        description={description}
                        exp={exp}
                        educ={educ}
                    />
                </div>
            </div>
        </>

    )

}