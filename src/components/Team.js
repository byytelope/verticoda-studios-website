export default function Team({ padding }) {
    return (
        <div className={`flex flex-col ${padding}`}>
            <div className="flex flex-col my-auto space-y-24">
                <div>
                    <p className="font-bold text-3xl xs:text-4xl md:text-5xl tracking-wide md:leading-tight pb-16 md:pb-24 xl:pb-16 text-text text-center">
                        The best people
                    </p>
                    <p className="font-light md:text-lg text-textSecondary text-left md:text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className="py-96">{}</div>
            </div>
        </div>
    );
}
