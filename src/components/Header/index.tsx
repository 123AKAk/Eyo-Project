import './style.scss';

export const Header = () => {
    return (
        <div
            className="w-100 pt-8 px-10 pb-20 header-img"
            style={{ position: 'relative' }}
        >
            <div className="flex flex-row justify-between items-center">
                <h3 className="text-white">LOGO</h3>

                <div className="flex flex-row items-center justify-between">
                    <input
                        placeholder="Search"
                        type="text"
                        className="rounded-lg bg-[grey] text-white placeholder-white"
                    />
                    <h3 className="ml-10 text-white">Eng</h3>
                    <h3 className="ml-5 text-white">Profile</h3>
                </div>
            </div>

            <h1 className="text-white text-3xl pt-10 pb-20">
                Good evening, Mr Bayo
            </h1>

            <div className="flex flex-row items-center justify-between">
                <ul className="flex space-x-5">
                    <li>
                        <a href="#" className="text-white hover:text-gray-400">
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-white hover:text-gray-400">
                            Patients
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-white hover:text-gray-400">
                            Appointment
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-white hover:text-gray-400">
                            Admin
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-white hover:text-gray-400">
                            Referrals
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-white hover:text-gray-400">
                            Settings
                        </a>
                    </li>
                </ul>

                <div>
                    <p className="text-white pb-2">Time Frame:</p>
                    <div className="flex flex-row justify-between">
                        <input
                            placeholder="2024-8-01"
                            type="date"
                            className="rounded-lg bg-[grey] text-white placeholder-white"
                        />
                        <h1 className="text-white text-2xl ml-2">--</h1>
                        <input
                            placeholder="2024-8-01"
                            type="date"
                            className="rounded-lg bg-[grey] text-white placeholder-white ml-2"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
