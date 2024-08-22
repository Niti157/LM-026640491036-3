import AppFooter from "./template/footer";
import AppMenu from "./template/header";

export default function MyData () {

return (
  <div><AppMenu/>
  <div className="m-10 bg-blue-900 p-10 rounded-3xl">
    <div className="flex flex-col items-center pb-10">
        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="image/iboss.jpg" alt="IB055 image"/>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Niti Pakjamsai</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">นิติ ภักดิ์แจ่มใส</span>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">รหัส นศ.</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">026640491036-3</span>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Contract</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">Email: Niti.pak@rmutto.ac.th</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">Facebook: Niti Pakjamsai</span>
    </div>
 </div>
 <AppFooter/>
 </div>
 
)}
