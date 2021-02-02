import { serviceData } from "../assets/db";

export default function Service({
    match: {
        params: { service: serviceLink },
    },
}) {
    const service = serviceData.find((obj) => {
        return obj.link === serviceLink;
    });

    return <div>{JSON.stringify(service)}</div>;
}
