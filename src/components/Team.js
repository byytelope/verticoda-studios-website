export default function Team({ padding }) {
    return (
        <div className={`flex flex-col ${padding}`}>
            <div className="flex flex-col my-auto space-y-24">
                <div>
                    <p className="font-semibold text-3xl xs:text-3xl md:text-4xl lg:text-5xl xl:text-4xl md:leading-tight pb-16 md:pb-24 xl:pb-8 text-text text-center">
                        The best people
                    </p>
                    <p className="font-light md:text-lg lg:text-2xl xl:text-lg text-textSecondary text-center">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque sequi harum
                        labore quia, nam vero, explicabo officia voluptatibus saepe beatae suscipit
                        at similique sint sunt numquam quae nobis quod sed?
                    </p>
                </div>
                <div className="py-96">{}</div>
            </div>
        </div>
    );
}
