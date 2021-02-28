const teamMember = () => {
    <div></div>;
};

export default function Team({ padding }) {
    return (
        <div className={`xl:h-screen flex flex-col ${padding}`}>
            <div className="pt-20 xs:pt-28 md:pt-40 xl:pt-0 mb-2" />
            <div className="flex flex-col space-y-96 my-auto">
                <p className="font-bold text-3xl xs:text-4xl md:text-6xl tracking-wide xl:hidden pb-16 md:pb-24 text-text">
                    Meet The Team
                </p>
                <div>{}</div>
            </div>
        </div>
    );
}
