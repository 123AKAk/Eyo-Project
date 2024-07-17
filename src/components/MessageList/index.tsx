import './style.scss';

export const MessageList = () => {
    return (
        <div className="flex flex-row items-center mb-4">
            <img
                src={'https://cdn.blkat.io/assets/image/profile2.png'}
                height={60}
                width={60}
                className="rounded-full mr-4"
            />

            <div>
                <p className="text-sm font-semibold">Temidayo</p>

                <div className="msg-btn my-1">
                    <p className="text-xs text-white">Executive</p>
                </div>
                <div className="flex flex-row items-center">
                    <p className="text-xs font-medium text-[#8D9091] mr-2">
                        Hey man, need that sofa A...
                    </p>
                    <p className="text-xs font-medium text-[#8D9091]">1m</p>
                </div>
            </div>
        </div>
    );
};
