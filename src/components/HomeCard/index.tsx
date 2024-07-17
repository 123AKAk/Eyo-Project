import './style.scss';

export const HomeCard = () => {
    return (
        <div
            className="flex flex-col justify-center bg-[#fff] homecard"
            style={{ zIndex: 999 }}
        >
            <div className="p-4 py-20">
                <p className="text-md text-center">Miscarriage</p>
            </div>

            <div className="bg-[#001f3f] w-100 p-4">
                <p className="text-[grey] text-xs">Total number of users</p>
                <p className="text-2xl text-white">23,444</p>
            </div>
        </div>
    );
};
