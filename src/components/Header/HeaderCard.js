export default function HeaderCard() {
    return (
        <div
            className="flex flex-col justify-between rounded-lg w-full bg-white bg-opacity-10 shadow-lg ring ring-inset ring-opacity-10 ring-white"
            style={{ backdropFilter: "blur(10px" }}
        >
            <div className="w-full flex p-4 space-x-1.5">
                <div className="rounded-full bg-red-400 p-2 shadow"></div>
                <div className="rounded-full bg-yellow-400 p-2 shadow"></div>
                <div className="rounded-full bg-green-400 p-2 shadow"></div>
            </div>
            <div className="w-full flex px-4 py-36"></div>
            <div className="w-full flex p-4"></div>
        </div>
    );
}
