// import ClientCards from "./ClientCards";
// import AEHUni from "../assets/Website Tile.jpg";

// const clientData = [
//     {
//         img: AEHUni,
//         title: "Addu Equatorial Hospital 1",
//         category: "Uniform Design",
//         details: "Bla bla lorem ipsum nice shirt beautiful shirt",
//     },
//     {
//         img: AEHUni,
//         title: "Addu Equatorial Hospital 2",
//         category: "Uniform Design",
//         details: "Bla bla lorem ipsum nice shirt beautiful shirt",
//     },
//     {
//         img: AEHUni,
//         title: "Addu Equatorial Hospital 3",
//         category: "Uniform Design",
//         details: "Bla bla lorem ipsum nice shirt beautiful shirt",
//     },
// ];

export default function Projects() {
    return (
        <div className="xl:h-screen flex flex-col">
            <div className="pt-24 md:pt-52 xl:pt-32 mb-2" />
            <div className="flex flex-col space-y-96">
                <p className="font-bold text-3xl xs:text-4xl md:text-6xl tracking-wide xl:hidden pb-16 md:pb-24 text-text">
                    Clients
                </p>
                <div className="flex justify-center">
                    {/* <ClientCards clientData={clientData} /> */}
                </div>
            </div>
        </div>
    );
}
