export default function HeaderCard() {
    return (
        <div
            className="flex flex-col justify-between rounded-lg w-full bg-gray-300 bg-opacity-20 ring-1 ring-inset ring-opacity-10 ring-white"
            style={{ backdropFilter: "blur(10px)" }}
        >
            <div className="w-full flex pt-4 pb-3 px-4 border-b border-white border-opacity-10">
                <div className="flex space-x-1.5 -mr-16">
                    <div className="rounded-full bg-red-400 h-4 w-4 shadow"></div>
                    <div className="rounded-full bg-yellow-400 h-4 w-4 shadow"></div>
                    <div className="rounded-full bg-green-400 h-4 w-4 shadow"></div>
                </div>
                <div className="m-auto text-sm text-white font-medium text-shadow-md">
                    Testimonials.app
                </div>
            </div>
            <div className="w-full flex px-4 py-40"></div>
            <div className="w-full flex p-4"></div>
        </div>
    );
}
