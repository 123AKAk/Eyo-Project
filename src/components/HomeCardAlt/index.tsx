import './style.scss';

export const HomeCardAlt = () => {
    return (
        <div
            className="flex flex-col justify-center bg-[#001f3f] pb-3 homecard"
            style={{ zIndex: 999 }}
        >
            <div className="p-4 py-3">
                <p className="text-md text-center">Miscarriage</p>
            </div>

            <div className="w-100 p-4">
                <p className="text-[grey] text-xs">Total number of users</p>
                <p className="text-2xl text-white">23,444</p>
            </div>
        </div>
    );
};
