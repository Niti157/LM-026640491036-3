export default function AppMenu() {
    return(
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <ul className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
                    <li>
                        <a href="/" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                            หน้าแรก
                        </a>
                    </li>
                    <li>
                        <a href="Addherb" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                            เพิ่มสมุนไพร
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}