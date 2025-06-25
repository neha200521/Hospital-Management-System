import React, { useState } from "react";
import { BrowserRouter, Link, Route ,Routes} from "react-router-dom";
function Home(){
    return(
        <div className="n"><h1><marquee behavior="alternate"><mark className="z">hello!,welcome to Apollo hospital emergency services avaliable 24/7/contact-123-456-789 </mark></marquee>
            <p>
                Health encompasses more than just the absence of disease; it's a state of complete well-being, encompassing physical, mental, social, and spiritual dimensions. A dynamic balance within these dimensions, along with the ability to adapt to life's conditions and the environment, is crucial. Good health allows individuals to perform daily activities efficiently, enjoy life, and maintain overall well-being. 
Elaboration:
Dimensions of Health:
Health is multifaceted, including:
Physical Health: Refers to the body's physical state, including its organs, systems, and overall functionality. 
Mental Health: Encompasses cognitive and emotional well-being, including thoughts, feelings, and behaviors. 
Social Health: Involves healthy relationships and interactions with others, as well as participation in social activities. 
Spiritual Health: Relates to a sense of purpose, meaning, and connection to something larger than oneself. 
Importance of Health:
Quality of Life: Good health allows individuals to live their lives to the fullest and experience a high quality of life. 
Disease Prevention: Maintaining good health can help prevent diseases and promote overall well-being. 
Well-being: Health encompasses not just physical but also mental, social, and emotional well-being. 
Factors Affecting Health:
Various factors influence health, including individual choices, environmental conditions, and genetic predispositions. 
Maintaining Health:
Healthy habits like regular physical exercise, a balanced diet, adequate sleep, 
and stress management are essential for maintaining good health. 
WHO Definition:
The World Health Organization (WHO) defines health as "a state of complete physical, 
mental, and social well-being and not merely the absence of disease or infirmity". 
            </p>
             </h1></div>
        
    )
}

//   return (
//     <div className="ab">
//       <form className="ad" onSubmit={handleSubmit}>
//         Doctor ID: <input type="text" value={did} onChange={(e) => setDid(e.target.value)} /><br /><br />
//         Doctor Name: <input type="text" value={dname} onChange={(e) => setDname(e.target.value)} /><br /><br />
//         Specialization: <input type="text" value={dspecialization} onChange={(e) => setDspecialization(e.target.value)} /><br /><br />
//         Contact Number: <input type="text" value={dcont} onChange={(e) => setDcont(e.target.value)} /><br /><br />
//         Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br /><br />
//         Confirm Password: <input type="password" value={cpassword} onChange={(e) => setCpassword(e.target.value)} /><br /><br />
//         <input type="submit" value="Insert" className="i" /><br /><br />
//       </form>
//     </div>
//   );


function AddDoctor() {
  const [did, setDid] = useState("");
  const [dname, setDname] = useState("");
  const [dspecial, setDspecial] = useState("");
  const [dcont, setDcont] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = { did, dname, dspecial, dcont, password, cpassword };

    try {
      const response = await fetch("http://localhost:4000/doctor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const msg = await response.text();
      alert(msg);
    } catch (error) {
      console.error("Error during submission:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="ab">
      <form className="ad" onSubmit={handleSubmit}>
        Doctor ID: <input type="text" value={did} onChange={(e) => setDid(e.target.value)} /><br /><br />
        Doctor Name: <input type="text" value={dname} onChange={(e) => setDname(e.target.value)} /><br /><br />
        dspecial: <input type="text" value={dspecial} onChange={(e) => setDspecial(e.target.value)} /><br /><br />
        Contact Number: <input type="text" value={dcont} onChange={(e) => setDcont(e.target.value)} /><br /><br />
        Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br /><br />
        Confirm Password: <input type="password" value={cpassword} onChange={(e) => setCpassword(e.target.value)} /><br /><br />
        <input type="submit" value="Insert" className="i" /><br /><br />
      </form>
    </div>
  );
}





// function Deldoctor(){
//      const[did,setid]=useState("");
//     // const[dname,setDname]=useState("");
//     // const[dspecialization,setDspecialization]=useState("");
//     // const[dcont,setdcont]=useState("");
//     // const[password,setPassword]=useState("");
//     // const[cpassword,setcpassword]=useState("");
//     const Deldoctorsubmit = async (event) => {
//         event.preventDefault();
        

//         const data = { did};
//         const response = await fetch("http://localhost:4000/doctor", { 
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(data),
//         });

//         const Msg = await response.text();
//         alert(Msg);
//     };

//     return(
//         <div className="ab">
//             <form>
            /* Doctor id:<input type="text" name="db"/><br/><br/>
            <input type="button" value='Delete' className="d"/>
            <form/>
        </div>
    )
} */


function DeleteDoctor() {
  const [did, setid] = useState("");

  const Deldoctorsubmit = async (event) => {
    event.preventDefault();

    if (!did) {
      alert("Please enter a doctor ID.");
      return;
    }

    try {
      const response = await fetch(`http://localhost:4000/doctor/${did}`, {
        method: "DELETE",
      });

      const Msg = await response.text();
      alert(Msg);
    } catch (error) {
      console.error("Error deleting doctor:", error);
      alert("Failed to delete doctor.");
    }
  };

  return (
    <div className="ab">
      <form onSubmit={Deldoctorsubmit}>
        Doctor ID:
        <input type="text"value={did} onChange={(e) => setid(e.target.value)}/><br /><br />
        <input type="submit" value="Delete" className="d" />
      </form>
    </div>
  );
}


// function Addpatient(){
    
//      const[pid,setpid]=useState("");
//     const[pname,setpname]=useState("");
//     const[age,setPage]=useState("");
//     const[pcont,setpcont]=useState("");
//     const[gender,setGender]=useState("");
//     const[password,setPassword]=useState("");
//     const[reenterpassword,setreenterpassword]=useState("");
//     // const[password,setPassword]=useState("");
//     // const[cpassword,setcpassword]=useState("");
//     const Addpatientsubmit = async (event) => {
//         event.preventDefault();
        

//         const data = { pid,pname,age,pcont,gender,password,reenterpassword};
//         const response = await fetch("http://localhost:4000/patients", { 
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(data),
//         });

//         const Msg = await response.text();
//         alert(Msg);
//     };

//     return(
//         <div className="ab">
//             <form onSubmit={Addpatientsubmit}>
//             patient id:<input type="text" name="mi" onChange={(e) => setpid(e.target.value)}/><br/><br/>
//             patient name:<input type='text' name='mn' onChange={(e) => setpname(e.target.value)}/><br/>
//             age:<input type='text' name='me' onChange={(e) => setPage(e.target.value)}/><br/><br/>
//             phone number:<input type='text' name='p' onChange={(e) => setpcont(e.target.value)}/><br/><br/>
//             gender:<input type="text" name="g" onChange={(e) => setGender(e.target.value)}/><br/><br/>
//             password:<input type="password" name="pp"onChange={(e) => setPassword(e.target.value)} /><br/><br/>
//             re enter password:<input type="password" name="rpp"onChange={(e) => setreenterpassword(e.target.value)}/><br/><br/>
//             <input type="button" value='insert' className="i"/></form>
//         </div>
//     )
// // }


function Addpatient() {
  const [pid, setpid] = useState("");
  const [pname, setpname] = useState("");
  const [age, setPage] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [gender, setGender] = useState("");
  const [healthissue, setHealthIssue] = useState("");
  const [password, setPassword] = useState("");
  const [reenterpassword, setreenterpassword] = useState("");

  const Addpatientsubmit = async (event) => {
    event.preventDefault();

    const data = {
      pid,
      pname,
      age,
      phonenumber,
      gender,
      healthissue,
      password,
      reenterpassword,
    };

    try {
      const response = await fetch("http://localhost:4000/patients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const Msg = await response.text();
      alert(Msg);
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to add patient.");
    }
  };

  return (
    <div className="ab">
      <form onSubmit={Addpatientsubmit}>
        patient id:
        <input type="text" onChange={(e) => setpid(e.target.value)} /><br /><br />
        patient name:
        <input type="text" onChange={(e) => setpname(e.target.value)} /><br /><br />
        age:
        <input type="text" onChange={(e) => setPage(e.target.value)} /><br /><br />
        phone number:
        <input type="text" onChange={(e) => setPhonenumber(e.target.value)} /><br /><br />
        gender:
        <input type="text" onChange={(e) => setGender(e.target.value)} /><br /><br />
        Health issue:
        <input type="text" onChange={(e) => setHealthIssue(e.target.value)} /><br /><br />
        password:
        <input type="password" onChange={(e) => setPassword(e.target.value)} /><br /><br />
        re-enter password:
        <input type="password" onChange={(e) => setreenterpassword(e.target.value)} /><br /><br />

        <input type="submit" value="Insert" className="i" />
      </form>
    </div>
  );
}



function Delpatient(){
     const[pid,setPid]=useState("");
    // const[dname,setDname]=useState("");
    // const[dspecialization,setDspecialization]=useState("");
    // const[dcont,setdcont]=useState("");
    // const[password,setPassword]=useState("");
    // const[cpassword,setcpassword]=useState("");
    const Delpatientsubmit = async (event) => {
        event.preventDefault();
        

        const data = { pid};
        const response = await fetch("http://localhost:4000/doctor", { 
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        const Msg = await response.text();
        alert(Msg);
    };

    return(
        <div className="ab">
            patient id:<input type="text" name="v"/><br/><br/>
            <input type="button" value="delete" className="d"/>
        </div>
    )
}
function Addapp(){
     const[aid,setAid]=useState("");
    const[pid,setPid]=useState("");
    const[did,setid]=useState("");
    const[date,setdate]=useState("");
    // const[password,setPassword]=useState("");
    // const[cpassword,setcpassword]=useState("");
     const Addappsubmit = async (event) => {
        event.preventDefault();
        

        const data = { aid,pid,did,date};
        const response = await fetch("http://localhost:4000/doctor", { 
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        const Msg = await response.text();
        alert(Msg);
    };

    return(
        <div className="ab">
            Appointment id:<input type="text" name="bi"/><br/><br/>
            patient id:<input type="text" name="im"/><br/><br/>
            Doctor id:<input type="text" name="date"/><br/><br/>
            Appointment date:<input type="text" name="rd"/><br/><br/>
            <input type="button" value="Add" className="i"></input>
        </div>
    )
}
function Delapp(){
     const[aid,setAid]=useState("");
    // const[dname,setDname]=useState("");
    // const[dspecialization,setDspecialization]=useState("");
    // const[dcont,setdcont]=useState("");
    // const[password,setPassword]=useState("");
    // const[cpassword,setcpassword]=useState("");
    const Delappsubmit = async (event) => {
        event.preventDefault();
        

        const data = { aid};
        const response = await fetch("http://localhost:4000/doctor", { 
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        const Msg = await response.text();
        alert(Msg);
    };

    return(
        <div className="ab">
            Appointment id:<input type="text" name="s"/><br/><br/>
            <input type="button" value="delete" className="d"/>
        </div>
    )
}
function Dlogin(){
    const[did,setid]=useState("");

    const[password,setPassword]=useState("");
      const Dloginsubmit = async (event) => {
        event.preventDefault();
        

        const data = { did,password};
        const response = await fetch("http://localhost:4000/doctor", { 
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        const Msg = await response.text();
        alert(Msg);
    };

    return(
        <div className="ab">
            Doctor id:<input type="text" name="r"/><br/><br/>
            password:<input type="password" name="pass"/><br/><br/>
            <Link to='/fp'>forgot password?</Link>/<Link to="/r">/Register?</Link><br/><br/>
            <input type="button" value='submit' className="i"/>
        </div>
    )
}
function Plogin(){
    const[pid,setPid]=useState("");

    const[password,setPassword]=useState("");
      const ploginsubmit = async (event) => {
        event.preventDefault();
        

        const data = { pid,password};
        const response = await fetch("http://localhost:4000/doctor", { 
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        const Msg = await response.text();
        alert(Msg);
    };
    return(
        <div className="ab">
            patient id:<input type="text" name="q"/><br/><br/>
             password:<input type="password" name="pass"/><br/><br/>
             <Link to='/fp'>forgot password?</Link>/<Link to="/s">/Register?</Link><br/><br/>
            <input type="button" value='submit' className="i"/>
        </div>
    )
}
function Forgot(){
    const[did,setid]=useState("");

    const[password,setPassword]=useState("");
    const[repassword,setrpassword]=useState("");
      const Forgotsubmit = async (event) => {
        event.preventDefault();
        

        const data = { did,password,repassword};
        const response = await fetch("http://localhost:4000/doctor", { 
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        const Msg = await response.text();
        alert(Msg);
    };
    return(
        <div className="z"> 
            Enter doctorid::<input type="text" name="di"/><br/><br/>
            Enter password:<input type="password" name="p"/><br/><br/>
            re-Enter password:<input type="password" name="rp"/><br/><br/>
            <input type="submit" value="confirom" className="i"/><br/><br/>
        </div>
    )
}
function Forgotp(){
     const[pid,setPid]=useState("");

    const[password,setPassword]=useState("");
    const[repassword,setrpassword]=useState("");
      const Forgotsubmit = async (event) => {
        event.preventDefault();
        

        const data = { pid,password,repassword};
        const response = await fetch("http://localhost:4000/doctor", { 
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        const Msg = await response.text();
        alert(Msg);
    };
    return(
        <div className="z"> 
            Enter patientid:<input type="text" name="di"/><br/><br/>
            Enter password:<input type="password" name="p"/><br/><br/>
            re-Enter password:<input type="password" name="rp"/><br/><br/>
            <input type="submit" value="confirom" className="i"/><br/><br/>
        </div>
    )
}
function Hospital(){
    return(
        <BrowserRouter>
         <div className="menu">
                 <div className="menu-item"><Link to='/home'>About</Link></div>
                <div className="menu-item"><strong><Link to='/d'>Doctor</Link></strong>
                    <div className="sub"><Link to='/ab'>Add Doctor</Link></div>
                     <div className="sub"><Link to='/db'>Delete Doctor</Link></div>
                </div>
            <div className="menu-item"><strong><Link>Patient</Link></strong>
                <div className="sub"><Link to='am'>Add patient</Link></div>
                <div className="sub"><Link to='dm'>delete  patient</Link></div>
            </div>
            <div className="menu-item"><strong><Link>Appointment</Link></strong>
                <div className="sub"><Link to='bb'>Add Appointment</Link></div>
                <div className="sub"><Link to='Bor'>Delete Appointment</Link></div>
            </div>
            <div className="menu-item"><Link>Login</Link>
                    <div className="sub"> <Link to='/dl'>Doctor login</Link></div>
                    <div className="sub"><Link to='/pl'>patient login</Link></div>
            </div>
         </div>
          <Routes>
             <Route path='/home' element={<Home/>}></Route>
             <Route path='/ab' element={<AddDoctor/>}></Route>
              <Route path='/db' element={<DeleteDoctor/>}></Route>
              <Route path='/am' element={<Addpatient/>}></Route>
              <Route path='/dm' element={<Delpatient/>}></Route>
              <Route path='/bb' element={<Addapp/>}></Route>
              <Route path='/Bor' element={<Delapp/>}></Route>
              <Route path='/dl' element={<Dlogin/>}></Route>
              <Route path='/pl' element={<Plogin/>}></Route>
              <Route path="/r" element={<AddDoctor/>}></Route>
              <Route path="/fp" element={<Forgotp/>}></Route>
              <Route path="/s" element={<Addpatient/>}></Route>
          </Routes> 
        </BrowserRouter>
        
    )
}
export default Hospital;