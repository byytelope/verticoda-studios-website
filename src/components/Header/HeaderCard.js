export default function HeaderCard() {
    return (
        <div
            className="flex flex-col justify-between rounded-xl w-full bg-gray-300 bg-opacity-20 ring-1 ring-inset ring-opacity-10 ring-white"
            style={{ backdropFilter: "blur(10px)" }}
        >
            <div className="w-full flex pt-6 xl:pt-4 pb-5 xl:pb-3 px-6 xl:px-4">
                <div className="flex space-x-2.5 xl:space-x-1.5 -mr-16">
                    <div className="rounded-full bg-red-400 h-6 w-6 lg:h-5 lg:w-5 xl:h-4 xl:w-4 shadow"></div>
                    <div className="rounded-full bg-yellow-400 h-6 w-6 lg:h-5 lg:w-5 xl:h-4 xl:w-4 shadow"></div>
                    <div className="rounded-full bg-green-400 h-6 w-6 lg:h-5 lg:w-5 xl:h-4 xl:w-4 shadow"></div>
                </div>
                {/* <div className="m-auto text-sm text-white font-medium text-shadow-md">
                    Testimonials.app
                </div> */}
            </div>
            <div className="w-full flex px-4 py-40"></div>
            <div className="w-full flex p-4"></div>
        </div>
    );
}
