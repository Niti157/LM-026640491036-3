import { useState } from "react";
import AppMenu from "./template/header";
import AppFooter from "./template/footer";

let nextId = 0;

export default function CreateCard () {
    const [name, setName] = useState('');
    const [note, setNote] = useState('');
    const [img, setImg] = useState('');
    const [prod, setProd] = useState('');
    const [prodata, setProdata] = useState('');
    const [use, setUse] = useState('');
    const [herbs, setHerbs] = useState([]);

    const handleClickAdd = (na:string, no:string, img:string, pr:string, pd:string, us:any) => {
        setHerbs([
            ...herbs,
            {
                id: nextId++,
                name: na,
                note: no,
                prod: pr, 
                use: us,
                prodata: pd,
                img: img,
               
            }
        ]);
    }

    return (
        <center>
        <AppMenu/>
        <div>
            <h1 className="basis-1/4 m-2 p-3 font-bold bg-green-500 rounded-3xl">เพิ่มสมุนไพร</h1>
            <label className="basis-1/4 m-2 font-bold bg-green-300 rounded-3xl">ชื่อสมุนไพร</label><br/>
            <input className="basis-1/4 m-2 p-3 rounded-3xl"
                name="cName"
                value={name}
                onChange={(e) => setName(e.target.value)}
            /><br/>
            <label className="basis-1/4 m-2 font-bold bg-green-300 rounded-3xl">สรรพคุณ</label><br/>
            <textarea className="basis-1/4 m-2 rounded-3xl"
                name="cNote"
                value={note}
                onChange={(e) => setNote(e.target.value)}
            /><br/>
             <label className="basis-1/4 m-2 font-bold bg-green-300 rounded-3xl">ผู้ผลิต</label><br/>
            <textarea className="basis-1/4 m-2 rounded-3xl"
                name="cProd"
                value={prod}
                onChange={(e) => setProd(e.target.value)}
            /><br/>
             <label className="basis-1/4 m-2 font-bold bg-green-300 rounded-3xl">ข้อมูลติดต่อผู้ผลิต</label><br/>
            <textarea className="basis-1/4 m-2 rounded-3xl"
                name="cProdata"
                value={prodata}
                onChange={(e) => setProdata(e.target.value)}
            /><br/>
            <label className="basis-1/4 m-2 font-bold bg-green-300 rounded-3xl">แนบรูป Url</label><br/>
            <textarea className="basis-1/4 m-2 rounded-3xl"
                name="cImg"
                value={img}
                onChange={(e) => setImg(e.target.value)}
            /><br/>
             <label className="basis-1/4 m-2 font-bold bg-green-300 rounded-3xl">ประเภทการใช้(ภายนอก,ภายใน)</label><br/>   
             <textarea className="basis-1/4 m-2 rounded-3xl"
                name="cUse"
                value={use}
                onChange={(e) => setUse(e.target.value)}
              /><br/>
            <button className="basis-1/4 m-2 p-3 font-bold bg-green-500 rounded-3xl" onClick={() => handleClickAdd(name, note, img, prod, prodata, use)}>
                เพิ่มสมุนไพร
            </button>
            <table>
            <thead>
                <tr>
                    <th className="p-3 border">ID</th>
                    <th className="p-3 border">ชื่อสมุนไพร</th>
                    <th className="p-3 border">สรรพคุณ</th>
                    <th className="p-3 border">ผู้ผลิต</th>
                    <th className="p-3 border">ข้อมูลติดต่อผู้ผลิต</th>
                    <th className="p-3 border">รูป</th>
                </tr>
            </thead>
            <tbody>
                     <tr>
                        <td className="p-3 border">ตัวอย่าง</td>
                        <td className="p-3 border">พริก</td>
                        <td className="p-3 border">พริกมีสารต่อต้านอนุมูลอิสระ ช่วยชะลอวัย ช่วยให้อารมณ์ดี ทำให้ร่างกายสร้างสาร Endorphin (สารแห่งความสุข) ช่วยเสริมสร้างภูมิต้านทานให้แข็งแรงมากยิ่งขึ้น วิตามินซีที่ช่วยเสริมสร้างคอลลาเจนในร่างกาย 
                            ช่วยในการบำรุงและรักษาสายตา ช่วยกระตุ้นให้เจริญอาหารยิ่งขึ้น สารแคปไซซินช่วยให้เกิดอาการตื่นตัวของร่างกาย ช่วยในการดีท็อกซ์ของร่างกาย พริกช่วยบรรเทาอาการไข้หวัด ลดน้ำมูก และลดเสมหะ ช่วยบรรเทาอาการไอ
                        </td>
                        <td className="p-3 border">ภายใน</td>
                        <td className="p-3 border">นายบอสการเกษตร</td>
                        <td className="p-3 border">มทร.ตะวันออกจักรพงศ์ภูวนารถ</td>
                        <td className="p-3 border">
                                <a href="https://storage.ftiebusiness.com/c1/ProductThumb_47119_256358397_resize.jpg">
                                Click here
                                </a>
                            </td>
                    </tr>
                {herbs.map(herb => (
                     <tr key={herb.id}>
                        <td className="p-3 border">{herb.id}</td>
                        <td className="p-3 border">{herb.name}</td>
                        <td className="p-3 border">{herb.note}</td>
                        <td className="p-3 border">{herb.use}</td>
                        <td className="p-3 border">{herb.prod}</td>
                        <td className="p-3 border">{herb.prodata}</td>
                        <td className="p-3 border">{herb.img ? (
                                <a href={herb.img} target="_blank" rel="noopener noreferrer">
                                    Click here
                                </a>
                            ) : 'No Link'}</td>
                    </tr>
                ))}
                    </tbody>
            </table>
            <AppFooter/>
            </div>
        </center>
    );
}